#!/usr/bin/env node
// Tách các sơ đồ mermaid trong notes/*.md ra assets/<tên-bài>/NN.mmd,
// render sang NN.svg bằng mermaid-cli, và ghi index.md liệt kê sơ đồ.
//
// Dùng: npm run assets
// Yêu cầu: đã cài @mermaid-js/mermaid-cli (npm install).

import { readdir, readFile, writeFile, mkdir, stat } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join, basename, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const notesDir = join(root, "notes");
const assetsDir = join(root, "assets");

// Tách block ```mermaid ... ``` kèm caption là dòng tiêu đề (#) hoặc **in đậm**
// gần nhất phía trên.
function parseDiagrams(md) {
  const lines = md.split(/\r?\n/);
  const out = [];
  let heading = "";
  let lead = "";
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const h = line.match(/^#{1,6}\s+(.*)/);
    if (h) { heading = h[1].trim(); lead = ""; }
    const b = line.match(/^\*\*(.+?)\*\*\s*$/);
    if (b) lead = b[1].trim();
    // dòng dẫn kết thúc bằng ":" ngay trước sơ đồ
    const c = line.match(/^(.*\S):\s*$/);
    if (c && !c[1].startsWith("#")) lead = c[1].replace(/\*\*/g, "").trim();

    if (/^```mermaid\s*$/.test(line)) {
      const caption = lead || heading;
      const body = [];
      let j = i + 1;
      for (; j < lines.length && !/^```\s*$/.test(lines[j]); j++) body.push(lines[j]);
      out.push({ caption, code: body.join("\n").trim() });
      lead = "";
      i = j;
    }
  }
  return out;
}

const mmdcBin = join(
  root,
  "node_modules",
  ".bin",
  process.platform === "win32" ? "mmdc.cmd" : "mmdc",
);

function hasMmdc() {
  return existsSync(mmdcBin);
}

function render(src, dst) {
  const r = spawnSync(
    mmdcBin,
    ["-i", src, "-o", dst, "-b", "transparent"],
    { encoding: "utf8" },
  );
  if (r.status !== 0) {
    console.warn(`  ! render lỗi ${basename(dst)}: ${(r.stderr || r.stdout || "").trim().split("\n").pop()}`);
    return false;
  }
  return true;
}

async function newerThan(a, b) {
  if (!existsSync(b)) return true;
  const [sa, sb] = await Promise.all([stat(a), stat(b)]);
  return sa.mtimeMs > sb.mtimeMs;
}

const files = existsSync(notesDir)
  ? (await readdir(notesDir)).filter((f) => f.endsWith(".md"))
  : [];

if (files.length === 0) {
  console.log("Không có file nào trong notes/.");
  process.exit(0);
}

const canRender = hasMmdc();
if (!canRender) {
  console.warn("mmdc chưa có -> chỉ xuất .mmd. Chạy `npm install` để bật render SVG.\n");
}

let total = 0;
for (const file of files) {
  const src = join(notesDir, file);
  const name = basename(file, ".md");
  const outDir = join(assetsDir, name);
  const indexPath = join(outDir, "index.md");

  if (!(await newerThan(src, indexPath))) {
    console.log(`= ${file} (không đổi, bỏ qua)`);
    continue;
  }

  const diagrams = parseDiagrams(await readFile(src, "utf8"));
  if (diagrams.length === 0) {
    console.log(`- ${file} (không có sơ đồ mermaid)`);
    continue;
  }

  await mkdir(outDir, { recursive: true });
  const indexLines = [`# Sơ đồ trích từ ${file}`, ""];

  for (let k = 0; k < diagrams.length; k++) {
    const nn = String(k + 1).padStart(2, "0");
    const mmdPath = join(outDir, `${nn}.mmd`);
    const svgPath = join(outDir, `${nn}.svg`);
    await writeFile(mmdPath, diagrams[k].code + "\n", "utf8");

    let img = `${nn}.mmd`;
    if (canRender && render(mmdPath, svgPath)) img = `${nn}.svg`;

    const cap = diagrams[k].caption || `Sơ đồ ${nn}`;
    indexLines.push(`## ${nn}. ${cap}`, "", `![${cap}](${img})`, "");
    total++;
    console.log(`+ ${name}/${img}  (${cap})`);
  }

  await writeFile(indexPath, indexLines.join("\n"), "utf8");
}

console.log(`\nXong. ${total} sơ đồ.`);
