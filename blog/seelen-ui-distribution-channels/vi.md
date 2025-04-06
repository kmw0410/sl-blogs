---
author: Eythaann
published: 13-02-2025
title: Các kênh phân phối UI Seelen
description: Tìm hiểu về các kênh phân phối khác nhau có sẵn cho seelen ui
lastRevision: 13-02-2025

---

# SEELEN UI: Phương thức cài đặt và cập nhật kênh

## Tùy chọn cài đặt

### Microsoft Store (MSIX)

Tải xuống phiên bản mới nhất từ
[Cửa hàng Microsoft](https://www.microsoft.com/store). Đây là an toàn nhất và
Tùy chọn thân thiện với người dùng, với các bản cập nhật tự động.

**Ưu điểm:**

* Cập nhật tự động
* Được xác minh và phê duyệt bởi Microsoft
* Bảo mật và độ tin cậy cao
* Phiên bản nhẹ hơn Trình cài đặt .exe (không bao gồm các ký hiệu gỡ lỗi)

**Nhược điểm:**

* Cập nhật có thể mất 1-3 ngày làm việc để phê duyệt Microsoft
* Khó gỡ lỗi hơn và báo cáo các vấn đề

***

### Winget (MSIX)

Cài đặt phiên bản mới nhất bằng lệnh sau:

> Cài đặt winget --id seelen.seelenui

Cung cấp các lợi ích tương tự như phiên bản Microsoft Store với thêm
Thuận tiện của cài đặt dòng lệnh.

***

### Trình cài đặt .exe

Tải xuống trình cài đặt setup.exe từ
[Phát hành trang](https://github.com/eythaann/Seelen-UI/releases) và chạy nó.

**Ưu điểm:**

* Cập nhật ngay lập tức có sẵn
* Nhận thông báo cập nhật ngay khi các phiên bản mới được phát hành
* Tốt hơn cho mục đích gỡ lỗi

**Nhược điểm:**

* Có thể kích hoạt cảnh báo chống vi -rút (không được ký kỹ thuật số)
* Kích thước tệp lớn hơn (bao gồm các ký hiệu gỡ lỗi)

## Cập nhật các kênh

> Bất kể kênh cập nhật đã chọn của bạn, tất cả các phiên bản đều nhận được tự động
> cập nhật. Các kênh không ổn định cũng nhận được cập nhật từ các kênh ổn định hơn
> (ví dụ: hàng đêm nhận các bản cập nhật từ cả hàng đêm và beta/phát hành).

### Phát hành (ổn định)

Kênh an toàn và được đề xuất nhất cho tất cả người dùng.

**Đặc trưng:**

* Được kiểm tra kỹ lưỡng mà không có lỗi quan trọng
* Lý tưởng cho sản xuất và sử dụng hàng ngày
* Có sẵn trên Microsoft Store, Winget (.msix) và AS .exe Installer

### Beta

Đối với người dùng muốn truy cập sớm vào các tính năng mới trước khi phát hành chính thức.

**Đặc trưng:**

* Bao gồm các tính năng sắp tới đang được thử nghiệm
* Có thể chứa các lỗi nhỏ
* Cập nhật thường xuyên hơn so với ổn định
* Chỉ có sẵn dưới dạng trình cài đặt .exe

### Hàng đêm

Đối với người dùng và nhà phát triển nâng cao muốn những thay đổi mới nhất.

**Đặc trưng:**

* Chứa những thay đổi gần đây nhất, chưa được kiểm tra
* Có thể bao gồm các lỗi hoặc các tính năng không đầy đủ
* Cập nhật hàng ngày hoặc với mỗi thay đổi mã quan trọng
* Chỉ có sẵn dưới dạng trình cài đặt .exe

Tìm hiểu thêm về kênh hàng đêm trong
[Seelen ui đêm](https://seelen.io/blog/nightly) tài liệu.

## Cập nhật cơ chế: setup.exe vs msix

* **MSIX:** Cập nhật tự động được quản lý bởi Microsoft Store
* **Setup.exe:** Bao gồm trình cập nhật tích hợp thông báo cho bạn khi cập nhật
  có sẵn

![Seelen UI update notification](https://github.com/Seelen-Inc/slu-blog/blob/master/blog/seelen-ui-distribution-channels/image.png?raw=true)

Khi một bản cập nhật có sẵn:

1. Nhấp vào thông báo
2. Người cập nhật sẽ tải xuống và cài đặt bản cập nhật
3. Ứng dụng sẽ tự động khởi động lại
