# **Thư viện SLU: các loại và giao diện**

Các `types` Mô -đun của Thư viện SLU cung cấp một bộ sưu tập các loại thiết yếu
Định nghĩa và giao diện phục vụ như là nền tảng để phát triển widget. Mô -đun
này được thiết kế để:

- Cung cấp các định nghĩa loại được tiêu chuẩn hóa được sử dụng trên toàn bộ hệ
  sinh thái UI Seelen
- Cung cấp giao diện để triển khai tiện ích nhất quán
- Bật an toàn loại trên toàn bộ phát triển tiện ích
- Phục vụ như các hợp đồng được chia sẻ giữa ứng dụng cốt lõi và các vật dụng

## **Cách sử dụng**

```ts
import { StructInterface } from "@seelen-ui/lib/types";

const myObject: StructInterface = { ... }
```

## **Các tính năng chính:**

- **Định nghĩa loại cốt lõi**: Các loại cơ bản được sử dụng bởi ứng dụng UI
  Seelen
- **Hợp đồng tiện ích**: Các giao diện mà các widget phải triển khai để tương
  thích
- **Các mô hình chia sẻ**: Các cấu trúc dữ liệu phổ biến được sử dụng trên nền
  tảng
- **Loại tiện ích**: Các loại trợ giúp để phát triển widget

Các loại này được tiêu thụ cả trong nội bộ bởi ứng dụng và tiếp xúc với Các nhà
phát triển tiện ích bên ngoài để đảm bảo tính nhất quán loại trên hệ sinh thái.
