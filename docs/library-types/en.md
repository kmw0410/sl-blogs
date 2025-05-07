# **Slu Library: Types and Interfaces**

The `types` module of the Slu library provides a collection of essential type
definitions and interfaces that serve as the foundation for widget development.
This module is designed to:

- Offer standardized type definitions used throughout the Seelen UI ecosystem
- Provide interfaces for consistent widget implementation
- Enable type safety across widget development
- Serve as shared contracts between the core application and widgets

## **Usage**

```ts
import { StructInterface } from "@seelen-ui/lib/types";

const myObject: StructInterface = { ... }
```

## **Key Features:**

- **Core Type Definitions**: Fundamental types used by the Seelen UI application
- **Widget Contracts**: Interfaces that widgets must implement for compatibility
- **Shared Models**: Common data structures used across the platform
- **Type Utilities**: Helper types for widget development

These types are consumed both internally by the application and exposed for
external widget developers to ensure type consistency across the ecosystem.
