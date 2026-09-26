// Đóng gói bài lab để nộp lên Portal.
//
//   node scripts/export-lab.mjs lab03      (hoặc: npm run lab:export -- lab03)
//
// Mỗi thư mục con của labs/labXX/ (trừ tai-nguyen/ và nop-bai/) là một bài,
// phải có index.htm hoặc index.html. Kết quả ghi vào labs/labXX/nop-bai/:
//   <tiền tố>labXX-<bài>.zip   – từng bài
//   <tiền tố>labXX.zip         – gộp tất cả bài
// Tiền tố lấy từ .local/sinh-vien.json ({"mssv": "...", "hoTen": "..."}), không có thì bỏ trống.
// Không cần thư viện ngoài: tự ghi file zip bằng zlib.

import { readdirSync, readFileSync, statSync, mkdirSync, writeFileSync, existsSync, rmSync } from 'node:fs';
import { join, relative, sep } from 'node:path';
import { deflateRawSync } from 'node:zlib';
import { fileURLToPath } from 'node:url';

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const SKIP_DIRS = new Set(['tai-nguyen', 'nop-bai']);
const SKIP_FILES = new Set(['Thumbs.db', '.DS_Store']);

const lab = process.argv[2];
if (!/^lab\d{2}$/.test(lab ?? '')) {
	console.error('Cách dùng: node scripts/export-lab.mjs labXX');
	process.exit(1);
}
const labDir = join(ROOT, 'labs', lab);
if (!existsSync(labDir)) {
	console.error(`Không thấy thư mục labs/${lab}`);
	process.exit(1);
}

// ---------- tiền tố tên file ----------

function boDau(s) {
	return s.normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D');
}

function tienTo() {
	const f = join(ROOT, '.local', 'sinh-vien.json');
	if (!existsSync(f)) return '';
	const { mssv = '', hoTen = '' } = JSON.parse(readFileSync(f, 'utf8'));
	const ten = boDau(hoTen).replace(/\s+/g, '');
	return [mssv, ten].filter(Boolean).join('_') + (mssv || ten ? '_' : '');
}

// ---------- ghi zip ----------

const CRC_TABLE = new Uint32Array(256).map((_, n) => {
	let c = n;
	for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
	return c >>> 0;
});

function crc32(buf) {
	let c = 0xffffffff;
	for (const b of buf) c = CRC_TABLE[(c ^ b) & 0xff] ^ (c >>> 8);
	return (c ^ 0xffffffff) >>> 0;
}

function dosTime(d) {
	const time = (d.getHours() << 11) | (d.getMinutes() << 5) | (d.getSeconds() >> 1);
	const date = ((d.getFullYear() - 1980) << 9) | ((d.getMonth() + 1) << 5) | d.getDate();
	return { time, date };
}

function makeZip(entries) {
	const locals = [];
	const centrals = [];
	let offset = 0;
	for (const { name, data, mtime } of entries) {
		const nameBuf = Buffer.from(name, 'utf8');
		const packed = deflateRawSync(data);
		const { time, date } = dosTime(mtime);
		const crc = crc32(data);

		const local = Buffer.alloc(30);
		local.writeUInt32LE(0x04034b50, 0);
		local.writeUInt16LE(20, 4);        // version needed
		local.writeUInt16LE(0x0800, 6);    // cờ UTF-8 cho tên file
		local.writeUInt16LE(8, 8);         // deflate
		local.writeUInt16LE(time, 10);
		local.writeUInt16LE(date, 12);
		local.writeUInt32LE(crc, 14);
		local.writeUInt32LE(packed.length, 18);
		local.writeUInt32LE(data.length, 22);
		local.writeUInt16LE(nameBuf.length, 26);
		local.writeUInt16LE(0, 28);
		locals.push(local, nameBuf, packed);

		const central = Buffer.alloc(46);
		central.writeUInt32LE(0x02014b50, 0);
		central.writeUInt16LE(20, 4);
		central.writeUInt16LE(20, 6);
		central.writeUInt16LE(0x0800, 8);
		central.writeUInt16LE(8, 10);
		central.writeUInt16LE(time, 12);
		central.writeUInt16LE(date, 14);
		central.writeUInt32LE(crc, 16);
		central.writeUInt32LE(packed.length, 20);
		central.writeUInt32LE(data.length, 24);
		central.writeUInt16LE(nameBuf.length, 28);
		central.writeUInt32LE(offset, 42);
		centrals.push(central, nameBuf);

		offset += local.length + nameBuf.length + packed.length;
	}
	const centralBuf = Buffer.concat(centrals);
	const end = Buffer.alloc(22);
	end.writeUInt32LE(0x06054b50, 0);
	end.writeUInt16LE(entries.length, 8);
	end.writeUInt16LE(entries.length, 10);
	end.writeUInt32LE(centralBuf.length, 12);
	end.writeUInt32LE(offset, 16);
	return Buffer.concat([...locals, centralBuf, end]);
}

// ---------- gom file ----------

function walk(dir) {
	const out = [];
	for (const name of readdirSync(dir).sort()) {
		if (SKIP_FILES.has(name)) continue;
		const p = join(dir, name);
		const st = statSync(p);
		if (st.isDirectory()) out.push(...walk(p));
		else out.push({ path: p, mtime: st.mtime });
	}
	return out;
}

function entriesOf(dir, base) {
	return walk(dir).map(({ path, mtime }) => ({
		name: relative(base, path).split(sep).join('/'),
		data: readFileSync(path),
		mtime,
	}));
}

const baiList = readdirSync(labDir)
	.filter((n) => !SKIP_DIRS.has(n) && statSync(join(labDir, n)).isDirectory())
	.sort();

if (baiList.length === 0) {
	console.error(`labs/${lab} chưa có bài nào (thư mục con ngoài tai-nguyen/ và nop-bai/).`);
	process.exit(1);
}

const thieuIndex = baiList.filter(
	(b) => !existsSync(join(labDir, b, 'index.htm')) && !existsSync(join(labDir, b, 'index.html')),
);
if (thieuIndex.length) {
	console.error(`Thiếu index.htm trong: ${thieuIndex.join(', ')}`);
	process.exit(1);
}

const outDir = join(labDir, 'nop-bai');
rmSync(outDir, { recursive: true, force: true });
mkdirSync(outDir, { recursive: true });

const prefix = tienTo();
const tatCa = [];
for (const bai of baiList) {
	const entries = entriesOf(join(labDir, bai), labDir); // giữ thư mục <bài>/ ở gốc zip
	tatCa.push(...entries);
	const file = `${prefix}${lab}-${bai}.zip`;
	writeFileSync(join(outDir, file), makeZip(entries));
	console.log(`  ${file}  (${entries.length} file)`);
}
const gop = `${prefix}${lab}.zip`;
writeFileSync(join(outDir, gop), makeZip(tatCa));
console.log(`  ${gop}  (${tatCa.length} file, gộp ${baiList.length} bài)`);
console.log(`Xong: labs/${lab}/nop-bai/`);
