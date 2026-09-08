# CLAUDE.md

Repo tài liệu học môn INT3306 – Phát triển ứng dụng web (VNU-UET).
Trang môn học: https://itest.com.vn/lects/int3306.htm

## Cấu trúc

Xem bảng trong `README.md`. Tóm tắt: `syllabus/`, `notes/` (ghi chú theo bài), `labs/`, `project/` (đồ án nhóm), `assets/` (sơ đồ sinh tự động từ notes), `test-bank/` (đề ôn tập), `scripts/`.

## Quy tắc viết note

- Ưu tiên ít chữ, ngắn gọn. Mỗi ý một câu, không lặp.
- Dùng hình ảnh, sơ đồ, bảng để diễn đạt bất cứ khi nào thay được cho đoạn văn dài. Ưu tiên block `mermaid` cho luồng xử lý, cấu trúc phân cấp, máy trạng thái.
- Mỗi sơ đồ có một dòng dẫn kết thúc bằng dấu `:` ngay phía trên để làm caption.
- Đặt tên file `notes/bai-XX-slug.md`, khớp thứ tự bài trong syllabus.
- Ghi rõ nguồn ở đầu note (giáo trình, MDN, RFC, slide).
- Thuật ngữ kỹ thuật: ở lần nhắc đầu tiên, viết kèm dạng chuẩn tiếng Anh trong ngoặc, ví dụ "hệ thống tên miền (DNS, Domain Name System)", "mã hóa phần trăm (percent-encoding)", "nghẽn đầu hàng (head-of-line blocking)". Các lần sau dùng thẳng dạng tiếng Anh/viết tắt. Không dịch tên giao thức, phương thức, header, mã trạng thái. Không làm bảng thuật ngữ riêng.
- Sau mỗi lần viết hoặc sửa nội dung một note, chạy skill `humanizer` trên file đó.
- Sau khi note ổn, chạy `npm run assets` (hoặc lệnh `/as`) để cập nhật `assets/`.

## Quy tắc chung

- Không sửa tay file trong `assets/`; để `scripts/extract-assets.mjs` sinh.
- Không tự chạy `npm install`; hỏi trước.
- Không commit khi chưa được yêu cầu.

## Lệnh riêng

- `/note <tên-bài>` – fetch nguồn của bài từ trang môn học, tổng hợp thành `notes/bai-XX-*.md`.
- `/as [tên-bài]` – sinh sơ đồ trong `assets/` từ `notes/`.
