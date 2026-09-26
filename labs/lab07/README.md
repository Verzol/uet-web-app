# Lab 07 – Tuần 7: Công nghệ web động

Nguồn: https://itest.com.vn/lects/webappdev/{astat,pwa,jquery/form,bootstrap/*,react}/. Bài tập lớn được công bố trong tuần này.

| Bài | Loại | Đề gốc |
|---|---|---|
| Bộ lọc | Trên lớp | https://itest.com.vn/lects/webappdev/astat/ |
| PWA | Trên lớp | https://itest.com.vn/lects/webappdev/pwa/ |
| Form nhập (jQuery) | Ở nhà | https://itest.com.vn/lects/webappdev/jquery/form/ |
| Bootstrap CSS, grid | Ở nhà | https://itest.com.vn/lects/webappdev/bootstrap/form/ |
| Bootstrap UI components | Ở nhà | https://itest.com.vn/lects/webappdev/bootstrap/uicomponent/ |
| Bootstrap Javascript API | Ở nhà | https://itest.com.vn/lects/webappdev/bootstrap/api/ |
| React và JSX | Ở nhà | https://itest.com.vn/lects/webappdev/react/ |

## 1. Bộ lọc

Trang "Thống kê trả lời" (`tai-nguyen/astat_thong-ke-tra-loi-v1.htm`) viết thuần HTML, liệt kê tỉ lệ trả lời đúng của từng câu hỏi trắc nghiệm. Cần thêm JavaScript:

- [ ] Bộ lọc 1: lọc các câu có tỉ lệ đúng trong một khoảng, ví dụ 50%–69% ([mẫu V2](https://itest.com.vn/lects/webappdev/astat/thong-ke-tra-loi-v2.htm))
- [ ] Bộ lọc 2: lọc theo phần thi
- [ ] Kết hợp được cả hai bộ lọc ([mẫu V3](https://itest.com.vn/lects/webappdev/astat/thong-ke-tra-loi-v3.htm))

Gợi ý trong đề: coi mỗi phần tử HTML là một mục dữ liệu. Gắn nhãn bằng `class`, rồi dùng JS ẩn (`display:none`) các mục không thỏa điều kiện.

## 2. PWA

- [ ] Làm theo MDN [Using Service Workers](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers) với ví dụ [Star Wars](https://mdn.github.io/sw-test/)
- [ ] Service worker chỉ chạy qua HTTPS hoặc `localhost`

## 3. Form nhập (jQuery) (ở nhà)

Form có các trường Mã, Họ tên, Ngày sinh, Giới tính (Nam/Nữ), Quê quán, và nút "Chấp nhận", "Bỏ qua". Mã mẫu có sẵn trong trang đề.

- [ ] Vào trang thì con trỏ ở ô Mã; Enter chuyển sang ô kế tiếp
- [ ] Rời ô Họ tên thì chuẩn hóa tên
- [ ] Bấm "Chấp nhận" thì báo lỗi nếu thiếu mã hoặc họ tên, hoặc ngày sinh sai
- [ ] Mọi thao tác dùng jQuery (`$(document).ready`, `.keyup`, `.blur`, `.click`)

## 4. Bootstrap (ở nhà, ba bài)

- [ ] CSS, grid: nâng cấp Form nhập (jQuery) thành form ngang bằng lưới Bootstrap ([mẫu](https://itest.com.vn/lects/webappdev/bootstrap/demo/form.htm))
- [ ] UI components: dựng navbar và accordion (`panel-group`) ([mẫu](https://itest.com.vn/lects/webappdev/bootstrap/demo/home.htm))
- [ ] Javascript API: trang có 3 tab, tab 1 tải sẵn; lần đầu bấm tab 2 thì tải `abc.htm`, lần đầu bấm tab 3 thì tải `def.htm`, dùng tab API ([mẫu](https://itest.com.vn/lects/webappdev/bootstrap/demo/tab.htm))

`panel-group` là component của Bootstrap 3. Nếu dùng Bootstrap 5 thì thay bằng `accordion`.

## 5. React và JSX (ở nhà)

Danh sách sản phẩm có ô tìm kiếm (ảnh `react_pic1.png`). Mỗi sản phẩm có tên, mô tả và nút đánh dấu. Khi đánh dấu, nền chuyển vàng và nút đổi thành "Remove bookmark". Bỏ đánh dấu thì nền trắng và nút là "Set bookmark". Gõ vào ô tìm kiếm thì chỉ hiện sản phẩm có tên hoặc mô tả chứa chuỗi đó.

Các bước theo đề, mỗi bước có trang mẫu `product1.htm` … `product8.htm`:

- [ ] `Product` hiển thị tên và mô tả
- [ ] Thêm nút, xử lý sự kiện, đổi `state`
- [ ] Khởi tạo trạng thái đánh dấu từ props (data flow một chiều từ trên xuống)
- [ ] `ProductList` render danh sách
- [ ] `SearchBar`, rồi `SearchableProductList` bọc cả `SearchBar` và `ProductList`
- [ ] Callback đưa chuỗi tìm từ `SearchBar` lên `SearchableProductList`
- [ ] Truyền chuỗi tìm xuống `ProductList` qua props
- [ ] `ProductList` lọc sản phẩm, quyết định prop `display` của từng `Product`
- [ ] `Product` ẩn hoặc hiện theo `display`
- [ ] Viết lại bằng JSX ([mẫu](https://itest.com.vn/lects/webappdev/react/product-jsx.htm))
