# Lab 09 – Tuần 9: Định tuyến, CSDL, lưu trạng thái

Nguồn: https://itest.com.vn/lects/webappdev/{routing,db,cookie,session}/.

| Bài | Loại | Đề gốc |
|---|---|---|
| Định tuyến URL | Trên lớp | https://itest.com.vn/lects/webappdev/routing/index.htm |
| Ứng dụng CSDL | Trên lớp | https://itest.com.vn/lects/webappdev/db/index.htm |
| Cookie | Ở nhà | https://itest.com.vn/lects/webappdev/cookie/ |
| Session | Ở nhà | https://itest.com.vn/lects/webappdev/session/ |

Tài nguyên: `tai-nguyen/routing_routing.zip`, `db_db.zip` (PHP + MySQL). Cần LEMP của lab02.

## 1. Định tuyến URL

Mục tiêu: viết module định tuyến ánh xạ REST API sang `controller.action`.

- [ ] Phân tích front controller `index.php`
- [ ] Phân tích `app/core/control/Router.php`. Với mỗi API, đọc mã cài đặt rồi gọi thử trên trình duyệt:
  - [ ] `GET /students` (frontend: `list.htm`)
  - [ ] `GET /students/{id}` (frontend: `get.htm`)
  - [ ] `PUT /students/{id}` (frontend: `update.htm`)

## 2. Ứng dụng CSDL

Kế thừa mã của Định tuyến URL. Dùng PDO và MySQL, tổ chức theo MC.

**Backend**

- [ ] Phân tích `index.php`
- [ ] Từ `\core\control\Router`, liệt kê mọi REST API và `controller.action` tương ứng, ví dụ `GET /students ⇒ StdController.proc`, `GET /students/{id} ⇒ StdController.getById`
- [ ] Đọc `\qldt\control\StdController`, `\qldt\model\Std`, `\core\model\PDOData`, rồi mô tả chức năng từng API (đọc CSDL bằng PDO và parameterized statement, trả về JSON)
- [ ] Tạo CSDL `QLDT`, chạy `qldt.sql`
- [ ] Sửa chuỗi kết nối trong `\core\model\PDOData`
- [ ] Gọi thử các API bằng Postman hoặc DevTools

**Frontend**

- [ ] Đọc `frontend.htm` và `frontend.css`: có những panel nào, mỗi panel làm gì
- [ ] Thử thêm, xóa, sửa và quan sát các panel thay đổi
- [ ] Bỏ comment `.nodisplay {display:none;}`, refresh: mỗi lúc hiện bao nhiêu panel?
- [ ] Phân tích `hideAllPanel`, `showListPanel`, `showEditPanel` và cách dùng `.nodisplay` để chuyển panel
- [ ] Phân tích đoạn `fetch("index.php/students").then(...)` và hàm `createNewRow`
- [ ] Phân tích `delClick`: chuyện gì xảy ra khi bấm "Xóa"
- [ ] Phân tích `updateClick` và handler của nút "Thêm mới", so sánh giống và khác
- [ ] Phân tích handler nút "Chấp nhận": xử lý khác nhau thế nào giữa "Thêm mới" và "Sửa"
- [ ] (Không bắt buộc) Hiện panel Thêm mới/Sửa dưới dạng dialog

## 3. Cookie (ở nhà)

Trang `showguide.php` hiện hộp giới thiệu **lần đầu tiên** người dùng vào trang. Lần đầu thì server gửi `setcookie("guideshown", "shown")`, các lần sau kiểm tra `$_COOKIE["guideshown"]` để không hiện nữa.

- [ ] Chạy thử, xem cookie trong DevTools > Application
- [ ] Xóa cookie rồi tải lại trang, hộp giới thiệu phải hiện lại

## 4. Session (ở nhà)

Cùng bài trên nhưng dùng `session_start()` và `$_SESSION["guideshown"]`. Hộp giới thiệu hiện lần đầu **trong mỗi phiên**.

- [ ] So sánh với bản cookie: đóng trình duyệt rồi mở lại thì hai bản khác nhau thế nào? Dữ liệu nằm ở client hay server?

Đọc thêm: OWASP, reCAPTCHA, Keycloak, Yup, Joi.
