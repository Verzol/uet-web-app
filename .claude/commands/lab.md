---
description: Làm một buổi lab theo đề trong labs/labXX/README.md rồi đóng gói bài nộp Portal
argument-hint: "<labXX> [tên bài]"
allowed-tools: Read, Write, Edit, Glob(labs/**), Grep, WebFetch, Bash(node scripts/export-lab.mjs:*), Bash(npm run lab:export:*), Bash(curl:*)
---

Làm lab: `$ARGUMENTS`

Tuân thủ mục "Quy tắc làm lab" trong `CLAUDE.md`.

## Các bước

1. **Đọc đề.** Đọc `labs/labXX/README.md`, xem ảnh giao diện đích và file cho sẵn trong `labs/labXX/tai-nguyen/`. Thư mục lab chưa có thì chạy lại bước lưu đề: fetch trang lab trên https://itest.com.vn/lects/int3306.htm, ghi `README.md` và tải tài nguyên. Đề thiếu chi tiết thì mở trang "Xem bài mẫu" (`<link đề>/demo`) để đối chiếu giao diện và hành vi. Không chép nguyên mã bài mẫu.

2. **Làm bài.** Mỗi bài một thư mục `labs/labXX/<slug-bài>/`, có `index.htm` là trang chính. Làm hết các ý trong checklist của README. Có tham số tên bài thì chỉ làm bài đó.

3. **Kiểm tra.**
   - Validate HTML từng trang: `curl -s -H "Content-Type: text/html; charset=utf-8" --data-binary @<file> "https://html5.validator.nu/?out=gnu"` (validator.w3.org chặn curl bằng Cloudflare; validator.nu chạy cùng engine Nu). Output rỗng nghĩa là sạch. Sửa đến khi sạch.
   - Chụp headless bằng Edge hoặc Chrome (`--headless=new --screenshot`) rồi so với ảnh mẫu.
   - Đánh dấu `[x]` vào những ý đã làm trong checklist của `labs/labXX/README.md`.

4. **Đóng gói.** Chạy `node scripts/export-lab.mjs labXX` bằng node trong WSL (`/usr/bin/node`). Kết quả nằm ở `labs/labXX/nop-bai/`: mỗi bài một zip, cộng một zip gộp cả buổi.

5. **Báo cáo.** Liệt kê bài đã làm, ý nào chưa làm được và lý do, kết quả validate, danh sách file zip. Nhắc người dùng tự nộp lên Portal: Claude không nộp thay.

## Ràng buộc

- Không commit.
- Không `npm install`. Lab cần thư viện ngoài thì dùng CDN; nếu buộc phải cài thì hỏi trước.
- Không sửa `tai-nguyen/`; đó là đề gốc.
