# SEELEN UI: Tài liệu cơ bản chủ đề - Tùy chỉnh máy tính để bàn của bạn như một pro!

![A beautifully customized desktop using Seelen UI themes](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/image.png)

Bạn muốn cung cấp cho Windows Desktop của bạn một diện mạo mới? Seelen UI làm
cho nó dễ dàng với Hệ thống chủ đề mạnh mẽ của nó. Hướng dẫn này sẽ hướng dẫn
bạn những điều cơ bản về cách Chủ đề Công việc - Không cần kinh nghiệm mã hóa!

## Phiên bản gỡ lỗi đặc biệt cho người tạo chủ đề

Trước khi chúng ta bắt đầu, những người tạo chủ đề nên biết về đặc biệt của
chúng ta **phiên bản gỡ lỗi** của Seelen UI! Phiên bản này cho phép bạn:

- Kiểm tra các yếu tố giống như một trang web (Ctrl+Shift+I Mở các công cụ nhà
  phát triển)
- Xem các thay đổi trực tiếp HTML/CSS
- Kiểm tra sửa đổi chủ đề ngay lập tức
- Dễ dàng giải quyết các vấn đề kiểu dáng

Tải xuống phiên bản gỡ lỗi từ
[Kênh phát hành hàng đêm](https://seelen.io/apps/seelen-ui/releases/nightly)
(Tìm các tệp kết thúc bằng `-debug.exe`, giống
`Seelen.UI_2.2.8+20250410073056_x64-setup-debug.exe`).

### Bạn muốn tìm hiểu thêm về các bản dựng hàng đêm?

Kiểm tra của chúng tôi
[Xây dựng hàng đêm giải thích](https://seelen.io/blog/seelen-ui-nightly) bài
báo!

## Hiểu các tập tin chủ đề

Hãy nghĩ về các chủ đề SEELEN UI như các lớp sơn. Bạn có thể áp dụng nhiều chủ
đề tại Một lần, và giống như hội họa, trật tự quan trọng! Chủ đề có thể thay đổi
mọi thứ Từ màu sắc đến kiểu cửa sổ.

Có ba cách có thể đóng gói chủ đề:

1. **Chủ đề tập tin đơn** (tệp .yml)
2. **Thư mục chủ đề** (Chứa nhiều tệp)
3. **Chủ đề nén** (.SLU Tệp - Định dạng UI Seelen đặc biệt)

### Nơi đặt chủ đề của bạn

Tất cả các chủ đề trong thư mục này trên máy tính của bạn:

```text
C:\Users\{YOUR_USERNAME}\AppData\Roaming\com.seelen.seelen-ui\themes
```

### Cấu trúc thư mục chủ đề

Đây là những gì một thư mục chủ đề trông giống như bên trong:

```text
C:\Users\{USER}\AppData\Roaming\com.seelen.seelen-ui\themes
├── YourThemeFolder             # the name of the folder doesn't matter
│   ├── theme.yml               # Theme metadata file
│   └── seelen                  # creator's username of widgets inside
│       ├── fancy-toolbar.css   # resource's name + css extension
│       └── window-manager.scss # supports SCSS too!
├── CompactTheme.yml            # Theme metadata file with styles inside
└── CompressedTheme.slu         # Special file format used on Seelen UI
```

## Lấy cảm hứng: Chủ đề ví dụ

Không chắc chắn ở đâu hoặc làm thế nào để bắt đầu? Seelen UI đi kèm với một số
chủ đề tích hợp bạn Có thể sử dụng như cảm hứng! Kiểm tra các
[Bộ sưu tập chủ đề mặc định](https://github.com/eythaann/Seelen-UI/tree/master/static/themes)
Để xem họ đã làm như thế nào.

## Làm việc với màu sắc - nó dễ dàng hơn bạn nghĩ!

Seelen ui tự động nhặt màu của cửa sổ của bạn và làm cho nó Có sẵn trong các sắc
thái khác nhau thông qua các biến màu đơn giản.

### Màu sắc chính của bạn

Các biến này sử dụng màu bạn đặt trong cài đặt Windows:

- `--config-accent-color`: Màu sắc tinh khiết (như #FFBBAA)
- `--config-accent-color-rgb`: Cùng màu ở định dạng RGB (255, 187, 170)

### Gia đình màu sắc hoàn chỉnh

Seelen UI tạo ra toàn bộ bảng màu từ màu nhấn của bạn:

![Visual guide to Seelen UI's color palette](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/colors.png)

Đây là danh sách đầy đủ các màu có sẵn:

- Phiên bản tối nhất: `--config-accent-darkest-color`
- Phiên bản tối hơn: `--config-accent-darker-color`
- Phiên bản tối: `--config-accent-dark-color`
- Phiên bản thông thường: `--config-accent-color`
- Phiên bản ánh sáng: `--config-accent-light-color`
- Phiên bản nhẹ hơn: `--config-accent-lighter-color`
- Phiên bản nhẹ nhất: `--config-accent-lightest-color`

Mỗi màu cũng có phiên bản RGB (với -RGB ở cuối). Điều này hữu ích cho Tạo độ dốc
và các hiệu ứng màu khác.

Như cài đặt ví dụ, một màu nền với độ mờ:

```css
background-color: rbga(var(--config-accent-darkest-color-rgb), 0.5);
```

### Thậm chí nhiều tùy chọn màu sắc hơn

Muốn có nhiều lựa chọn màu sắc hơn? Seelen UI phơi bày hàng chục màu hệ thống bổ
sung. Kiểm tra điều này
[Tài liệu tham khảo màu sắc tiện dụng](https://gist.github.com/eythaann/cd9a3cda0206ce23a17f5ea00ec2ba06)
Đối với tất cả các tùy chọn có sẵn.

Mẹo chuyên nghiệp: Khi Windows Accent màu của bạn thay đổi, các bản cập nhật chủ
đề SEELEN của bạn tự động!
