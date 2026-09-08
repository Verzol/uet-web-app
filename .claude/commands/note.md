---
description: Fetch nguồn của một bài từ trang môn học rồi tổng hợp thành note
argument-hint: "<tên-bài hoặc chủ đề>"
allowed-tools: WebFetch, Bash(npm run assets), Bash(node scripts/extract-assets.mjs), Glob(notes/*), Glob(syllabus/*), Read, Write, Edit
---

Soạn ghi chú cho bài học: `$ARGUMENTS`

Nguồn gốc: https://itest.com.vn/lects/int3306.htm

## Các bước

1. **Xác định bài.** Đọc `syllabus/INT3306-syllabus.md` để tìm bài khớp `$ARGUMENTS` (theo tên chủ đề hoặc số tuần). Chốt số thứ tự bài `XX` và slug ngắn không dấu. Kiểm tra `notes/` xem đã có file chưa; có rồi thì hỏi a muốn ghi đè hay bổ sung.

2. **Lấy danh sách nguồn.** WebFetch trang môn học, trích mọi hyperlink thuộc tuần/bài đó: slide bài giảng, chương giáo trình, mục MDN, số hiệu RFC, tài liệu tham khảo.

3. **Ingest.** WebFetch từng nguồn công khai đọc được (MDN, RFC, trang thống kê...). Nguồn không fetch được (slide nội bộ, sách giấy) thì ghi lại tên để trích dẫn, không bịa nội dung.

4. **Tổng hợp thành note** `notes/bai-XX-slug.md`, theo `notes/bai-01-kien-truc-web-va-http.md` làm mẫu:
   - Dòng đầu liệt kê nguồn đã dùng.
   - Ít chữ, mỗi ý một câu.
   - Dùng bảng và block ` ```mermaid ` thay cho đoạn văn dài; mỗi sơ đồ có dòng caption kết thúc bằng `:` phía trên.
   - Thuật ngữ kỹ thuật: lần nhắc đầu tiên viết kèm dạng chuẩn tiếng Anh trong ngoặc, ví dụ "mã hóa phần trăm (percent-encoding)"; các lần sau dùng thẳng tiếng Anh. Không dịch tên giao thức, phương thức, header, mã trạng thái. Không làm bảng thuật ngữ riêng.
   - Kết bằng mục "Việc cần làm tuần này".
   - Chỉ nêu dữ kiện có trong nguồn. Không thêm số liệu, ngày, trích dẫn không có thật.

5. **Humanize.** Chạy skill `humanizer` ở chế độ file trên note vừa tạo.

6. **Sinh assets.** Chạy `npm run assets`. Thiếu `mmdc` thì báo, không tự cài.

7. **Báo cáo:** đường dẫn note, các nguồn đã ingest, nguồn bỏ qua và lý do, số sơ đồ sinh ra. Cập nhật mục tiến độ trong `README.md`.

## Ràng buộc

- Không bịa nội dung cho nguồn không đọc được.
- Không commit.
- Không chạy `npm install`.
