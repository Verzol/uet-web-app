# Lab 06 – Tuần 6: JavaScript bất đồng bộ

Nguồn: https://itest.com.vn/lects/webappdev/{asyncjs,fetch,tree,animation,jquery/tree,worker}/.

| Bài | Loại | Đề gốc |
|---|---|---|
| JavaScript không đồng bộ | Trên lớp | https://itest.com.vn/lects/webappdev/asyncjs/ |
| Fetch API | Trên lớp | https://itest.com.vn/lects/webappdev/fetch/ |
| Cây | Trên lớp | https://itest.com.vn/lects/webappdev/tree/ |
| Hoạt cảnh | Ở nhà | https://itest.com.vn/lects/webappdev/animation/ |
| Cây (jQuery) | Ở nhà | https://itest.com.vn/lects/webappdev/jquery/tree/ |
| Web worker | Ở nhà | https://itest.com.vn/lects/webappdev/worker/ |

## 1. JavaScript không đồng bộ

Trang có 8 nút: `sync`, `settimeout`, `promise`, `async`, `await`, `async vs sync`, `waitall`, `mixed`. Mã nguồn lưu ở `tai-nguyen/asyncjs_index.htm`.

- [ ] Bấm từng nút, ghi lại thứ tự các dòng in ra
- [ ] Giải thích từng kết quả theo trạng thái call stack, macrotask queue và microtask queue ở mỗi bước
- [ ] Nút `mixed` là khó nhất (2 `setTimeout` với 10ms và 0ms, 2 chuỗi Promise hai tầng `.then`). Tự đoán thứ tự trước khi bấm

## 2. Fetch API

Làm lại lab05 JSON, thay `XMLHttpRequest` bằng `fetch`.

- [ ] `fetch("data")`, rồi `response.json()`
- [ ] Duyệt mảng, dựng hàng cho bảng "Họ và tên | Tuổi | Số lượng/Tên-mẫu xe"

## 3. Cây

Cây thư mục Root > Folder 1…5, có nhánh con lồng nhau đến Folder 2-2-2. Ảnh icon: `tree_images_{folder,minus,plus}.gif`.

- [ ] Bấm `+` hoặc `-` thì mở hoặc đóng nút
- [ ] Bấm vào tên nút thì chọn nút đó (có đánh dấu)

## 4. Hoạt cảnh (ở nhà)

Ảnh giao diện và các hình: `animation_lab8_files_image00{1,2,4}.*`.

- [ ] Dựng giao diện như mẫu
- [ ] Bấm "Jump" thì các hình lần lượt thay nhau từ trái sang phải rồi ngược lại, lặp liên tục (`setInterval`)
- [ ] Bấm "Stop" thì dừng

## 5. Cây (jQuery) (ở nhà)

- [ ] Giống bài Cây, nhưng mọi thao tác DOM dùng jQuery

## 6. Web worker (ở nhà)

Có 4 iframe: `dw1`, `dw2` dùng dedicated worker, `sw1`, `sw2` dùng shared worker. Worker giữ một biến đếm, mỗi message từ trang thì tăng 1. Mã lưu ở `worker_*.htm`, `worker_dw.js`, `worker_sw.js`.

- [ ] Bấm "Increase" ở từng iframe, giải thích vì sao hai iframe dedicated đếm riêng còn hai iframe shared dùng chung một biến đếm
- [ ] Viết dedicated worker xử lý ảnh: trang cho chọn file ảnh, gửi xuống worker, worker xử lý rồi trả về cho trang hiển thị ([mẫu](https://itest.com.vn/lects/webappdev/worker/imgproc.htm))
- [ ] Đổi bài trên sang shared worker, thêm một trang thứ hai đọc ảnh đã xử lý từ shared worker và hiển thị

Tài liệu đọc thêm: MathJax, CKEditor, slide jQuery và React.
