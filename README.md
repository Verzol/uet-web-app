# INT3306 – Phát triển ứng dụng web

Tài liệu học tập môn INT3306 tại VNU-UET: đề cương, ghi chú bài giảng, bài lab, và đồ án nhóm.

Trang môn học: https://itest.com.vn/lects/int3306.htm

## Cấu trúc thư mục

| Thư mục | Nội dung |
|---|---|
| `syllabus/` | Đề cương môn học |
| `notes/` | Ghi chú theo từng bài giảng (`bai-XX-*.md`) |
| `labs/` | Bài thực hành, mỗi buổi một thư mục con `labXX/` |
| `project/` | Đồ án nhóm cuối kỳ |
| `assets/` | Sơ đồ trích tự động từ `notes/` (mỗi bài một thư mục con) |
| `test-bank/` | Đề và câu hỏi ôn tập |
| `scripts/` | Công cụ hỗ trợ |

## Tạo assets từ bài học

Các sơ đồ `mermaid` trong `notes/*.md` được tách ra `assets/<tên-bài>/NN.mmd` và render sang `NN.svg`, kèm `index.md` liệt kê.

```bash
npm install      # 1 lần, để cài mermaid-cli
npm run assets   # chạy lại mỗi khi sửa notes/
```

## Lệnh trong Claude Code

| Lệnh | Việc |
|---|---|
| `/note <tên-bài>` | Fetch nguồn của bài từ trang môn học, tổng hợp thành `notes/bai-XX-*.md`, humanize, sinh assets |
| `/as [tên-bài]` | Sinh sơ đồ trong `assets/` từ `notes/`; có tham số thì soát bài đó và đề xuất thêm mermaid |

Quy tắc viết note nằm trong `CLAUDE.md`.

Chưa cài mermaid-cli thì lệnh vẫn chạy nhưng chỉ xuất `.mmd`. File `notes/` không đổi thì bỏ qua.

## Tiến độ

- [x] Bài 1 – Kiến trúc ứng dụng web và HTTP
- [x] Bài 2 – HTML và quản trị ứng dụng web
- [x] Bài 3 – CSS và typography
