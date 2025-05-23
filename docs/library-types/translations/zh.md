# **SLU库：类型和接口**

这 `types` SLU库的模块提供了必需类型的集合 作为小部件开发基础的定义和界面。
该模块的设计为：

- 提供整个SEELEN UI生态系统中使用的标准化类型定义
- 提供一致的小部件实现的接口
- 在小部件开发中启用类型的安全性
- 用作核心应用程序和小部件之间的共同合同

## **用法**

```ts
import { StructInterface } from "@seelen-ui/lib/types";

const myObject: StructInterface = { ... }
```

## **关键功能：**

- **核心类型定义**：Seelen UI应用程序使用的基本类型
- **小部件合同**：小部件必须实现以兼容的接口
- **共享模型**：整个平台上使用的常见数据结构
- **类型实用程序**：用于小部件开发的助手类型

这些类型既由应用程序内部消耗，又被暴露
外部小部件开发人员确保整个生态系统的类型一致性。
