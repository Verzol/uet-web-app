# Lab 02 – Tuần 2: Quản trị ứng dụng web (Nginx hosting)

Nguồn: https://itest.com.vn/lects/webappdev/hosting/ (thực hành trên lớp). Nếu dùng Apache thay Nginx thì làm đề thay thế: https://itest.com.vn/lects/webappdev/hosting/apache-hosting.htm (đã lưu ở `tai-nguyen/hosting_apache-hosting.htm`).

Mục tiêu: cài LEMP (Linux, Nginx, MySQL, PHP) trên Ubuntu, rồi host hai ứng dụng trên cùng một máy.

## Checklist

**Cài đặt**

- [ ] `sudo apt update && sudo apt upgrade`
- [ ] Gỡ Apache nếu có: `sudo systemctl stop apache2`, `sudo apt remove --purge apache2`
- [ ] `sudo apt install nginx`, rồi `start` và `enable`. `systemctl status nginx` phải báo `active (running)` (ảnh `tai-nguyen/hosting_a.png`)
- [ ] `sudo apt install php-fpm php-mysql`
- [ ] Trong `/etc/php/<phiên bản>/cli/php.ini`, đổi `;cgi.fix_pathinfo=1` thành `cgi.fix_pathinfo=0`, rồi `sudo systemctl restart php<phiên bản>-fpm`
- [ ] Trong `/etc/nginx/sites-available/default`, mở khối `location ~ \.php$` và thêm `index.php` vào dòng `index` (xem khối cấu hình bên dưới)
- [ ] Tạo `/var/www/html/index.php` gồm `<?php phpinfo();`, mở http://127.0.0.1 thấy trang phpinfo
- [ ] `sudo apt install mysql-server`, rồi `start` và `enable`
- [ ] `sudo apt install phpmyadmin`, `sudo ln -s /usr/share/phpmyadmin /var/www/html`, restart Nginx, mở http://127.0.0.1/phpmyadmin

**Host hai ứng dụng: `bulletin.any.com.vn` và `hrm.any.com.vn`**

- [ ] Thêm `127.0.0.1 bulletin.any.com.vn` và `127.0.0.1 hrm.any.com.vn` vào `/etc/hosts`
- [ ] `sudo mkdir -p /var/www/<tên miền>`, `chown -R $USER:$USER`, `chmod -R 755`
- [ ] Mỗi ứng dụng có `index.htm` (tiêu đề "Success! The … block is working!") và `test.php` (`echo "Dynamic PHP page from …!";`)
- [ ] Copy `sites-available/default` sang `sites-available/<tên miền>` rồi sửa thành server block như bên dưới
- [ ] Symlink sang `sites-enabled/`, rồi `sudo systemctl restart nginx`
- [ ] Mở được cả 4 URL: `http://<tên miền>` và `http://<tên miền>/test.php`

Server block mẫu trong đề (đổi `7.2` thành phiên bản PHP trên máy):

```nginx
server {
    listen 80;
    listen [::]:80;
    root /var/www/bulletin.any.com.vn;
    index index.html index.htm index.php;
    server_name bulletin.any.com.vn;
    location / {
        try_files $uri $uri/ =404;
        autoindex on;
    }
    location ~ \.php$ {
        include snippets/fastcgi-php.conf;
        fastcgi_pass unix:/run/php/php7.2-fpm.sock;
    }
}
```

## Lưu ý khi làm trên WSL

- Xem phiên bản PHP bằng `php -v` hoặc `ls /run/php/`. Tên socket phải khớp, sai là Nginx trả 502 Bad Gateway.
- Có systemd thì `systemctl` chạy được. Không có thì dùng `sudo service nginx restart`.
- Trình duyệt Windows đọc `C:\Windows\System32\drivers\etc\hosts`, không đọc `/etc/hosts` của WSL. Muốn mở tên miền giả trên trình duyệt Windows thì thêm hai dòng đó vào file hosts của Windows (cần quyền admin).

Lý thuyết đi kèm: `notes/bai-02-html-va-quan-tri-web.md`, mục 5.
