---
description: Tạo/cập nhật sơ đồ trong assets/ từ notes/
argument-hint: "[tên-bài] (để trống = tất cả)"
allowed-tools: Bash(npm run assets), Bash(node scripts/extract-assets.mjs), Bash(npm install), Glob(notes/*), Read, Edit
---

Mục tiêu: đồng bộ thư mục `assets/` với các sơ đồ trong `notes/`.

Tham số: `$ARGUMENTS`

## Các bước

1. Nếu `$ARGUMENTS` rỗng: bỏ qua bước 2-3, sang bước 4.

2. Tìm file note khớp `$ARGUMENTS` trong `notes/` (khớp gần đúng theo tên, ví dụ `bai-03` hoặc `http`). Không thấy thì báo và dừng. Đọc file đó.

3. Rà nội dung note. Chỗ nào mô tả một trong các thứ sau mà **chưa** có block ` ```mermaid ` kèm theo thì soạn sơ đồ mermaid tương ứng:
   - luồng xử lý / trình tự các bước → `sequenceDiagram` hoặc `flowchart`
   - cấu trúc phân cấp / thành phần → `flowchart` hoặc `classDiagram`
   - máy trạng thái / vòng đời → `stateDiagram-v2`

   Đặt block ngay dưới đoạn văn liên quan, phía trên có một dòng dẫn kết thúc bằng dấu `:` để script lấy làm caption. Liệt kê các sơ đồ định thêm cho a **xác nhận trước khi chèn**. Chỉ chèn thứ a đồng ý.

4. Chạy `npm run assets`. Nếu báo thiếu `mmdc`, hỏi a có muốn chạy `npm install` không.

5. Báo kết quả dạng bảng: bài | số sơ đồ | file `.svg`/`.mmd` sinh ra | caption. Nếu có `assets/<bài>/index.md` mới thì nhắc a mở xem.

## Ràng buộc

- Không sửa nội dung chữ trong note, chỉ thêm block ` ```mermaid ` và tối đa một dòng caption.
- Không tự ý chạy `npm install`; luôn hỏi.
- Không đổi file trong `assets/` bằng tay; để script sinh.
