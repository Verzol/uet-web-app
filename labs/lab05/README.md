# Lab 05 – Tuần 5: JavaScript, DOM, AJAX, JSON

Nguồn: https://itest.com.vn/lects/webappdev/{form,table,sortable,json,classes,module,calculator,ajax}/. Hầu hết các bài có trang "Xem bài mẫu" tại `<link>/demo`.

| Bài | Loại | Đề gốc |
|---|---|---|
| Form nhập | Trên lớp | https://itest.com.vn/lects/webappdev/form/ |
| Danh sách | Trên lớp | https://itest.com.vn/lects/webappdev/table/ |
| Sắp xếp trên bảng | Trên lớp | https://itest.com.vn/lects/webappdev/sortable/ |
| JSON | Trên lớp | https://itest.com.vn/lects/webappdev/json/ |
| JS Class | Ở nhà | https://itest.com.vn/lects/webappdev/classes/ |
| JS Module | Ở nhà | https://itest.com.vn/lects/webappdev/module/ |
| Máy tính | Ở nhà | https://itest.com.vn/lects/webappdev/calculator/ |
| AJAX | Ở nhà | https://itest.com.vn/lects/webappdev/ajax/ |

## 1. Form nhập

Trang "Đăng ký thành viên" (ảnh `tai-nguyen/form_lab2_files_image003.png`). Các trường: họ tên, địa chỉ, giới tính, ngày sinh, e-mail, điện thoại, khóa đăng ký, tên sử dụng, mật khẩu, gõ lại mật khẩu, ghi chú, ảnh chân dung.

**HTML/CSS**

- [ ] Mỗi dòng có dạng `<label><input><span><br/>`, trong đó `<span>` dùng để báo lỗi
- [ ] Các `label` rộng bằng nhau, gióng thẳng cột (dùng float)
- [ ] Ô bắt buộc có nền xanh; `span` lỗi có style riêng; ô ngày sinh chữ xám
- [ ] CSS viết thành class, JavaScript đổi class qua `classList`

**Hành vi**

- [ ] Vào trang thì con trỏ nằm sẵn ở ô họ tên
- [ ] Gõ Enter (`keyup`, mã 13) thì chuyển sang ô kế tiếp
- [ ] Rời ô họ tên (`blur`) thì chuẩn hóa: bỏ dấu cách thừa, viết hoa chữ đầu mỗi từ
- [ ] Email phải có dạng `ten[.ten]*@ten[.ten]*`, sai thì báo lỗi ngay sau ô
- [ ] Ngày sinh: `focus` thì xóa placeholder "nn/tt/nnnn" và đổi chữ sang đen; `blur` mà rỗng thì trả lại placeholder màu xám; gõ đủ ngày hoặc đủ tháng thì tự thêm `/`
- [ ] Gõ lại mật khẩu không khớp thì hiện "Mật khẩu gõ lại không đúng"
- [ ] Bấm "Chấp nhận" thì kiểm tra mọi ô trừ địa chỉ và điện thoại, báo lỗi ngay sau ô còn thiếu

## 2. Danh sách (bảng nhân sự)

Ảnh giao diện: `table_lab3_files_image003.jpg`.

- [ ] Hàng chẵn và hàng lẻ tô hai màu khác nhau, trừ hàng tiêu đề
- [ ] Rê chuột vào hàng thì hàng đổi xanh lá và con trỏ thành bàn tay
- [ ] Tick hộp kiểm thì hàng tô vàng, bỏ tick thì trả lại màu cũ
- [ ] Hộp kiểm ở hàng đầu chọn hoặc bỏ chọn tất cả
- [ ] Tất cả hộp bên dưới được tick thì hộp đầu tự tick; thiếu một hộp thì hộp đầu bỏ tick
- [ ] Bấm vào hàng (trừ hàng tiêu đề) có tác dụng như bấm hộp kiểm của hàng đó

## 3. Sắp xếp trên bảng

Chương trình mẫu (`sortable_demo_simple.htm`) chỉ sắp xếp tăng dần theo một cột. Cần nâng cấp:

- [ ] Bấm tiêu đề cột bất kỳ (trừ cột TT) thì sắp xếp theo cột đó; bấm lại thì đảo chiều
- [ ] Mũi tên CSS báo cột nào đang sắp xếp và theo chiều nào
- [ ] Trang có nhiều bảng, số cột và số hàng tùy ý, cấu hình được cột nào cho sắp xếp

Có hai mẫu tham khảo: [đơn giản](https://itest.com.vn/lects/webappdev/sortable/demo/simple.htm), [chuyên nghiệp](https://itest.com.vn/lects/webappdev/sortable/demo/pro.htm).

## 4. JSON

- [ ] Dùng `XMLHttpRequest` tải JSON từ URL `data` (backend thật: https://itest.com.vn/lects/webappdev/json/data; bản lưu: `json_data.json`)
- [ ] Trong `onreadystatechange`, khi `readyState == 4` thì `JSON.parse(responseText)`
- [ ] Duyệt mảng, tạo hàng và ô bằng DOM, đưa vào bảng có các cột "Họ và tên | Tuổi | Số lượng/Tên-mẫu xe"

## 5. JS Class, JS Module (ở nhà)

Không có đề. Mở View Page Source để đọc mã, mở Console để xem kết quả. Bản lưu: `classes_index.htm`, `module_index.htm`.

## 6. Máy tính (ở nhà)

- [ ] Giao diện giống ảnh `calculator_lab7_files_image003.jpg`
- [ ] Làm được các phép `+`, `-`, `*`, `/`, `%`, `+/-`

## 7. AJAX (ở nhà)

- [ ] Nút "Tải abc.htm" dùng `XMLHttpRequest` (`open()` rồi `send()`) tải `abc.htm` (bản lưu: `ajax_abc.htm`)
- [ ] Khi `readyState == 4`, gán `responseText` vào `innerHTML` của một vùng có sẵn trên trang

Lưu ý: file tải qua AJAX phải được phục vụ qua HTTP, ví dụ bằng Nginx của lab02 hoặc `npx serve`. Mở trực tiếp bằng `file://` thì request bị chặn.
