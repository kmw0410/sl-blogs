# **Thư viện SLU: Tham khảo API**

Mô -đun API cung cấp các lớp triển khai cụ thể và các lớp tiện ích Tóm tắt API
ứng dụng thô, đóng vai trò là mặt tiền thân thiện với nhà phát triển Tích hợp
tiện ích.

## **Mục đích**

- Thực hiện giao diện từ `/types` với các lớp học sẵn sàng
- Tóm tắt độ phức tạp API cấp thấp
- Cung cấp các phương pháp tiện ích cho các hoạt động chung
- Đóng vai trò là lớp tương tác chính giữa các widget và SLU ứng dụng

## **Cách sử dụng**

Bạn có thể sử dụng thư viện khi cần thiết. Đây là một ví dụ cơ bản:

```ts
import { StructClass } from "@seelen-ui/lib/api";

const widgetApi: StructClass = await StructClass.geAsync();
const something = widgetApi.getSomething();
const somethingAsync = await widgetApi.getSomethingAsync();

await widgetApi.doSomething();
```

## **Ghi chú quan trọng:**

1. Thư viện API này chỉ hoạt động khi chạy trong thực thi tiện ích UI Seelen môi
   trường
2. Cố gắng sử dụng nó trong Node.js hoặc bối cảnh trình duyệt tiêu chuẩn sẽ ném
   lỗi
3. Các tiện ích sử dụng API này cần cập nhật nó để hoạt động đúng với Phiên bản
   cuối cùng của Seelen UI
