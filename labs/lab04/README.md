# Lab 04 – Tuần 4: Responsive Web Design

Nguồn: https://itest.com.vn/lects/webappdev/layout/ và https://itest.com.vn/lects/webappdev/typo/.

Các lab tuần này không có đề chữ. Mỗi lab là một trang mẫu đã chạy. Cách làm: mở trang, thu nhỏ hoặc phóng to cửa sổ (hoặc bật chế độ thiết bị trong DevTools), quan sát bố cục đổi ở từng breakpoint, rồi tự viết lại CSS cho ra cùng hành vi. Bản gốc lưu ở `tai-nguyen/*.htm` để đối chiếu sau khi làm xong.

| Bài | Loại | Trang mẫu | Kỹ thuật chính |
|---|---|---|---|
| Flexbox 2 | Trên lớp | [flexbox2.htm](https://itest.com.vn/lects/webappdev/layout/flexbox2.htm) | `aside` (`flex:1`) + `article` (`flex:3`), dùng `order`; dưới 600px chuyển về `display:block` |
| Fluid Typography | Trên lớp | [typo2.htm](https://itest.com.vn/lects/webappdev/typo/typo2.htm) | `:root` font-size tăng liên tục bằng `calc()` theo `100vw` giữa các breakpoint 360/768/1366px |
| Flexbox 1 | Ở nhà | [flexbox1.htm](https://itest.com.vn/lects/webappdev/layout/flexbox1.htm) | Flex lồng nhau (`section` > `div` > `article`), bài thứ hai `flex:2`; ≤767px `section` block, ≤600px `div` block |
| Grid 1 | Ở nhà | [grid0.htm](https://itest.com.vn/lects/webappdev/layout/grid0.htm) | Lưới 4 cột `repeat(4,1fr)`, đặt vị trí bằng `grid-column`/`grid-row`; ≤600px block |
| Grid 2 | Ở nhà | [grid1.htm](https://itest.com.vn/lects/webappdev/layout/grid1.htm) | Lưới 12 cột, 6 hộp `b1`–`b6` cao dần theo kiểu bậc thang |
| Stepped Typography | Ở nhà | [typo1.htm](https://itest.com.vn/lects/webappdev/typo/typo1.htm) | `:root` font-size nhảy bậc 16/18/20px theo `@media` |

## Checklist

- [ ] Flexbox 2: header, hai cột, footer; dưới 600px các cột xếp chồng
- [ ] Fluid Typography: cỡ chữ đổi mượt khi kéo cửa sổ, không nhảy bậc; `h1` và chú thích ảnh dùng `rem`
- [ ] Flexbox 1: ba bài báo ngang, bài giữa rộng gấp đôi; xuống dần 2 tầng rồi 1 cột
- [ ] Grid 1: header chiếm 4 cột, aside 1 cột + article 3 cột, footer và div chia đôi hàng cuối
- [ ] Grid 2: bố cục 12 cột như mẫu
- [ ] Stepped Typography: so sánh với bản fluid, trả lời được hai cách khác nhau ở đâu

Tài liệu đọc thêm: [CUBE CSS](https://cube.fyi), [CSS breakpoints](https://blog.logrocket.com/css-breakpoints-responsive-design/), Bootstrap, Tailwind, PicoCSS.
