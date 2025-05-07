# **Slu Library: API Reference**

The API module provides concrete implementations and utility classes that
abstract the raw application API, serving as a developer-friendly facade for
widget integration.

## **Purpose**

- Implements interfaces from `/types` with ready-to-use classes
- Abstracts low-level API complexities
- Provides utility methods for common operations
- Serves as the primary interaction layer between widgets and the Slu
  application

## **Usage**

You can use the library as needed. Here's a basic example:

```ts
import { StructClass } from "@seelen-ui/lib/api";

const widgetApi: StructClass = await StructClass.geAsync();
const something = widgetApi.getSomething();
const somethingAsync = await widgetApi.getSomethingAsync();

await widgetApi.doSomething();
```

## **Important Notes:**

1. This API library only works when running within a Seelen UI widget execution
   environment
2. Attempting to use it in Node.js or standard browser contexts will throw
   errors
3. The widgets using this api needs to update it in order to work properly with
   lastest version of Seelen UI
