# **SEELEN UI: Phương thức cài đặt và cập nhật kênh**

## **Tùy chọn cài đặt**

### **Microsoft Store (MSIX)**

Tải xuống phiên bản mới nhất từ ​​Microsoft Store. Đây là an toàn nhất
 và tùy chọn thân thiện với người dùng, với các bản cập nhật tự động.

*   Ưu điểm:
    *   Cập nhật tự động.
    *   Được xác minh và phê duyệt bởi Microsoft.
    *   An ninh và độ tin cậy cao.
    *   Phiên bản nhẹ hơn hơn .exe installer vì phiên bản này không
         Bao gồm các biểu tượng gỡ lỗi.
*   Nhược điểm:
    *   Cập nhật có thể mất 1-3 ngày làm việc để được phê duyệt.
    *   Khó hơn để gỡ lỗi và báo cáo các vấn đề.

***

### **Winget (MSIX)**

Cài đặt phiên bản mới nhất bằng lệnh sau:

```pwsh
winget install --id Seelen.SeelenUI
```

Cùng một ưu và nhược điểm của Microsoft Store với điểm cộng nhanh chóng thông qua
 Dòng lệnh.

***

### \*\*. Trình cài đặt exe \*\*

Tải xuống trình cài đặt setup.exe từ trang phát hành và chạy nó.

*   Ưu điểm:
    *   Cài đặt nhanh hơn với cập nhật ngay lập tức.
    *   Nhận thông báo cho các bản phát hành mới ngay khi chúng có sẵn.
*   Nhược điểm:
    *   Không được ký kết kỹ thuật số, có thể kích hoạt cảnh báo chống vi -rút.
    *   Ít trọng lượng nhẹ hơn trình cài đặt MSIX vì phiên bản này bao gồm gỡ lỗi
         biểu tượng.

## **Cập nhật các kênh**

> Người phụ thuộc của kênh cập nhật tất cả các phiên bản nhận bản cập nhật tự động,
>  Ngoài ra, nếu bạn sử dụng kênh cập nhật không ổn định cũng sẽ nhận được các bản cập nhật của
>  Các kênh cập nhật ổn định hơn, ví dụ: Nhận bản cập nhật hàng đêm từ hàng đêm nhưng
>  cũng từ beta và phát hành

### **Phát hành (ổn định)**

Kênh an toàn và được đề xuất nhất cho tất cả người dùng.

*   Đặc trưng:
    *   Được kiểm tra kỹ lưỡng mà không có lỗi quan trọng.
    *   Lý tưởng cho sản xuất và sử dụng hàng ngày.
    *   Có sẵn trên Microsoft Store, Winget, .msix và .exe.

### **Beta**

Nhằm mục đích người dùng muốn thử các tính năng mới trước khi chúng được phát hành chính thức.
 Kênh này bao gồm betas và các ứng cử viên phát hành.

*   Đặc trưng:
    *   Chứa các tính năng mới đang được thử nghiệm.
    *   Có thể có lỗi nhỏ.
    *   Cập nhật thường xuyên hơn so với bản phát hành ổn định.
    *   Chỉ có sẵn dưới dạng .exe trên trang phát hành.

### **Hàng đêm**

Cho người dùng và nhà phát triển nâng cao, những người muốn truy cập vào các thay đổi mới nhất và
 Các tính năng thử nghiệm.

*   Đặc trưng:
    *   Bao gồm những thay đổi gần đây nhất, nhưng không được kiểm tra kỹ lưỡng.
    *   Có thể chứa lỗi hoặc các tính năng chưa hoàn thành.
    *   Cập nhật hàng ngày hoặc với mọi thay đổi mã quan trọng.
    *   Chỉ có sẵn dưới dạng .exe trên trang phát hành.

Đọc thêm về trên [Seelen ui nighly](./nightly.md)

## **Nhận bản cập nhật trên setup.exe vs msix**

Trên các bản cập nhật MSIX được quản lý bởi Microsoft Store, nhưng trên setup.exe chúng là
 không, vì vậy một trình cập nhật được bao gồm trong ứng dụng, điều này sẽ hiển thị cho bạn một
 Thông báo khi có sẵn một bản cập nhật.

![Seelen UI update notification on settings window](https://github.com/Seelen-Inc/slu-blog/blob/master/blog/seelen-ui-distribution-channels/image.png?raw=true)

Nếu bạn nhấp vào thông báo, nó sẽ bắt đầu tải xuống và cài đặt
 Cập nhật, sau đó nó sẽ tự động khởi động lại ứng dụng.
