# Lab 10 – Tuần 10: Kiểm tra hợp thức, quản lý truy cập, kiểm thử

Nguồn: https://itest.com.vn/lects/webappdev/{validation,authorization,testing}/.

| Bài | Loại | Đề gốc |
|---|---|---|
| Kiểm tra hợp thức | Trên lớp | https://itest.com.vn/lects/webappdev/validation/index.htm |
| Quản lý truy cập | Trên lớp | https://itest.com.vn/lects/webappdev/authorization/index.htm |
| Kiểm thử ứng dụng | Kèm bài giảng | https://itest.com.vn/lects/webappdev/testing/ |

Tài nguyên: `tai-nguyen/validation_validation.zip`, `authorization_authorization.zip`, `authorization_cypress_integration_{login,danhsach}.js`.

Nên làm Kiểm tra hợp thức trước, vì Quản lý truy cập kế thừa mã của nó.

## 1. Kiểm tra hợp thức

Kế thừa mã lab09 Ứng dụng CSDL.

- [ ] Đọc `getById()` và `addStd()` trong `\qldt\control\StdController`, hai hàm này đã có kiểm tra hợp thức
- [ ] Đọc lớp mới `core\model\Util`, nơi chứa các hàm kiểm tra
- [ ] Thêm kiểm tra hợp thức cho `delStd()` và `updateStd()`
- [ ] Nhập dữ liệu sai qua `frontend.htm`, xem response trong DevTools
- [ ] Tự dựng request với dữ liệu tùy ý (DevTools, Postman) cho thêm, sửa, xóa, rồi kết luận backend đã kiểm tra đúng chưa
- [ ] Thêm kiểm tra hợp thức ở frontend, tham khảo lab05 Form nhập

## 2. Quản lý truy cập

Kế thừa mã Kiểm tra hợp thức. Mục tiêu: thêm đăng nhập, đăng xuất, duy trì phiên và phân quyền.

- [ ] Tạo lại CSDL `QLDT` từ `QLDT.sql`
- [ ] Bảng `nsd` có sẵn người dùng `a`, `b`, `c`, cùng mật khẩu `a123456#B`
- [ ] Bảng `quyensd`: `a` có đủ quyền trên SV, `b` chỉ được đọc, `c` không có quyền gì
- [ ] Chưa đăng nhập mà vào `frontend.htm` thì bị chuyển sang `login.htm`; đã đăng nhập mà vào `login.htm` thì bị chuyển sang `frontend.htm`
- [ ] Phân tích `GET /logged`, `POST /login`, `GET /logout`: gọi khi nào, cài đặt ra sao, `$_SESSION["tsd"]` thay đổi thế nào trước và sau khi đăng nhập, sau khi đăng xuất
- [ ] Phân tích lệnh chặn chưa đăng nhập ở đầu `proc()`, `getById()`, `addStd()`:
  ```php
  if (!isset($_SESSION["tsd"]))
      return array("status" => "NOK", "data" => "ACCESS-DENIED");
  ```
- [ ] Phân tích đoạn kiểm tra quyền `$user->accessRights($_SESSION["tsd"], "SV")` và `in_array("XXX", $rights, true)`
- [ ] Đăng nhập `a`, thêm dữ liệu, dùng "Copy as fetch" trong DevTools để lấy request `POST /students/{id}`
- [ ] Đăng nhập `b`: nút thêm, sửa, xóa bị vô hiệu. Phân tích cách làm
- [ ] Đăng nhập `b`, sửa body của request vừa copy rồi gửi lại. Phân tích response (backend phải chặn dù frontend bị vượt qua)
- [ ] Đăng nhập `c`: không xem được danh sách. Phân tích cách làm
- [ ] Thêm quyền cho `c` trực tiếp trong `quyensd`, đăng nhập lại để thấy chức năng được mở
- [ ] Thêm kiểm tra quyền cho `updateStd()` và `delStd()`
- [ ] (Không bắt buộc) Chức năng để admin phân quyền

## 3. Kiểm thử ứng dụng (Cypress)

- [ ] Cài và tìm hiểu [Cypress](https://www.cypress.io/)
- [ ] Chạy hai kịch bản mẫu trên ứng dụng Quản lý truy cập: `login.js` (đăng nhập), `danhsach.js` (danh sách sinh viên)

Cài Cypress cần `npm install`. Làm trong thư mục bài lab, không làm trong repo này.

Đọc thêm: slide Backend Framework; Playwright, Cypress; các framework front-end và back-end liệt kê trên trang môn học.
