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

## Quy tắc làm lab

- Đề mỗi buổi nằm ở `labs/labXX/README.md` (XX = số tuần), file đề cho sẵn ở `labs/labXX/tai-nguyen/`. Không sửa `tai-nguyen/`.
- Mỗi bài là một thư mục `labs/labXX/<slug-bài>/` không dấu, trang chính là `index.htm`. Thư mục phải tự chạy được: ảnh, CSS, JS để bên trong và gọi bằng đường dẫn tương đối.
- Làm đủ mọi ý trong checklist của đề, bám ảnh giao diện mẫu. Tự viết mã, không chép bài mẫu.
- HTML phải qua validator Nu (`https://html5.validator.nu/?out=gnu`) không lỗi. Khai báo `<!DOCTYPE html>`, `lang`, `<meta charset="utf-8">`.
- CSS đặt thành class; JavaScript đổi trạng thái bằng `classList`, không sửa `style` trực tiếp.
- Tên biến, class, comment dùng tiếng Việt không dấu hoặc tiếng Anh, thống nhất trong một bài.
- Làm xong thì chạy `node scripts/export-lab.mjs labXX` để sinh zip nộp Portal vào `labs/labXX/nop-bai/`. Tiền tố MSSV và họ tên lấy từ `.local/sinh-vien.json` (`{"mssv": "...", "hoTen": "..."}`).
- Claude không tự nộp bài lên Portal.

## Quy tắc chung

- Không sửa tay file trong `assets/`; để `scripts/extract-assets.mjs` sinh.
- Không tự chạy `npm install`; hỏi trước.
- Không commit khi chưa được yêu cầu.

## Lệnh riêng

- `/note <tên-bài>` – fetch nguồn của bài từ trang môn học, tổng hợp thành `notes/bai-XX-*.md`.
- `/as [tên-bài]` – sinh sơ đồ trong `assets/` từ `notes/`.
- `/lab <labXX> [tên bài]` – làm lab theo đề, kiểm tra, đóng gói zip nộp Portal.
