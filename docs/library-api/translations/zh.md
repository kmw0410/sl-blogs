# **SLU库：API参考**

API模块提供具体的实现和实用程序类
 摘要原始应用程序API，作为开发人员友好的外观
 小部件集成。

## **目的**

* 实现界面 `/types` 与现成的课程
* 摘要低级API复杂性
* 提供通用操作的实用方法
* 用作小部件和SLU之间的主要交互层
   应用

## **用法**

您可以根据需要使用库。 这是一个基本示例：

```ts
import { StructClass } from "@seelen-ui/lib/api";

const widgetApi: StructClass = await StructClass.geAsync();
const something = widgetApi.getSomething();
const somethingAsync = await widgetApi.getSomethingAsync();

await widgetApi.doSomething();
```

## **重要说明：**

1. 此API库仅在SEELEN UI WIDGET执行中运行时起作用
    环境
2. 尝试在Node.js或标准浏览器上下文中使用它会抛出
    错误
3. 使用此API的小部件需要对其进行更新，以便与
    Seelen UI的最后版本
