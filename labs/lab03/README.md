# Lab 03 – Tuần 3: HTML và CSS

Nguồn: https://itest.com.vn/lects/webappdev/{letter,webpage,menu,tab}/. Mỗi bài có trang mẫu "Xem bài mẫu" tại `<link>/demo`.

| Bài | Loại | Đề gốc |
|---|---|---|
| Letter | Trên lớp | https://itest.com.vn/lects/webappdev/letter/ |
| Trang tin | Trên lớp | https://itest.com.vn/lects/webappdev/webpage/ |
| Thực đơn | Ở nhà | https://itest.com.vn/lects/webappdev/menu/ |
| Tab | Ở nhà | https://itest.com.vn/lects/webappdev/tab/ |

## 1. Letter

Đề lấy từ MDN *Marking up a letter*: đánh dấu một lá thư bằng các phần tử đúng ngữ nghĩa (semantic). Tài nguyên: `tai-nguyen/letter_letter.txt` (văn bản thô), `letter_css.txt` (CSS nhúng sẵn), `letter_letter-update.png` (kết quả mẫu).

- [x] Có đủ doctype, `<html>`, `<head>`, `<body>`
- [x] Một heading cấp 1 (dòng "Re:") và ba heading cấp 2, phần còn lại là đoạn văn
- [x] Danh sách đúng loại cho ngày khai giảng, môn học, điệu nhảy
- [x] Hai địa chỉ nằm trong `<address>`, mỗi dòng xuống hàng bằng `<br>` chứ không tách đoạn
- [x] `<strong>` cho tên người gửi, người nhận, Tel, Email
- [x] Bốn ngày dùng `<time datetime="…">`
- [x] Địa chỉ đầu tiên và ngày đầu tiên có `class="sender-column"`
- [x] `<abbr title="…">` cho PhD, HTML, CSS, BC, Esq.
- [x] Sáu chỉ số trên/dưới: `<sub>` cho công thức hóa học, `<sup>` cho 10³ và 10⁴
- [x] Ít nhất hai từ được nhấn mạnh (`<strong>` hoặc `<em>`)
- [x] Hai liên kết có `title`, trỏ tới `http://example.com`
- [x] Câu châm ngôn nằm trong câu văn nên dùng `<q>` (trích dẫn nội dòng), nguồn dùng `<cite>`
- [x] `<meta charset="utf-8">`, `<meta name="author" content="…">`
- [x] CSS cho sẵn đặt trong `<style>`
- [x] Qua [W3C validator](https://validator.w3.org/) không lỗi

## 2. Trang tin

Dựng trang tin bằng HTML và CSS, dùng thư viện ảnh và CSS có sẵn (`tai-nguyen/webpage_demo_template.rar`). Ảnh giao diện đích: `webpage_lab1_files_img003.png`.

- [x] Bước 1, bố cục: `#top`, `#middle` (chứa `#left`, `#center`, `#right`, cuối cùng là `<br class="clear">`), `#bottom`. Ba cột dùng `display:inline; float:left`, `.clear {clear:both}`
- [x] Bước 2, nội dung: `#top` là ảnh banner, `#left` là menu làm từ `ul` + CSS kèm ảnh, `#center` là đoạn văn, `#right` là ảnh, `#bottom` tự chia layout tiếp

## 3. Thực đơn

Menu dọc bên trái, tiêu đề mục đang chọn hiện bên phải (ảnh `menu_lab4_files_image002.jpg`).

- [x] Rê chuột vào mục nào thì mục đó sáng lên
- [x] Bấm vào mục nào thì mục đó đổi màu xanh và tiêu đề mục đó hiện ở bên phải

## 4. Tab

Hàng tab "Tab 1 … Tab 4", bên dưới là vùng tải trang (ảnh `tab_lab5_files_image002.jpg`).

- [x] Bấm tab nào thì tab đó tô xanh và vùng bên dưới tải trang tương ứng
- [x] Rê chuột vào tab chưa chọn thì tab đó sáng lên

## Bài làm

| Bài | Thư mục | Ghi chú |
|---|---|---|
| Letter | `letter/` | Dùng `<dl>` cho danh sách điệu nhảy vì mỗi mục có tên và định nghĩa |
| Trang tin | `trang-tin/` | Dùng ảnh trong `template.rar`; CSS viết lại theo id `top/middle/left/center/right/bottom` của đề |
| Thực đơn | `thuc-don/` | Rê chuột dùng `:hover`, trạng thái chọn dùng class `duoc-chon` |
| Tab | `tab/` | iframe tải trang web thật: VNU, Dân trí, Znews, Wikipedia tiếng Việt. Không dùng VnExpress, Tuổi Trẻ, Thanh Niên, VOA vì các trang này chặn nhúng iframe (`X-Frame-Options`/`frame-ancestors`). Cần mạng khi chạy |

Cả bốn trang đều qua validator Nu không lỗi. Zip nộp bài: `nop-bai/`, sinh bằng `node scripts/export-lab.mjs lab03`.

Lý thuyết đi kèm: `notes/bai-03-css-va-typography.md`, mục 9 và 10.
