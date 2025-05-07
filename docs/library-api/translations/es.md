# **Biblioteca SLU: referencia de API**

El módulo API proporciona implementaciones concretas y clases de utilidad que 
Resumen la API de la aplicación sin procesar, que sirve como una fachada amigable para el desarrollador para 
Integración de widgets.

## **Objetivo**

* Implementa interfaces de `/types` con clases listas para usar
* Abrazos de complejidades de API de bajo nivel
* Proporciona métodos de utilidad para operaciones comunes
* Sirve como la capa de interacción primaria entre los widgets y el SLU 
  solicitud

## **Uso**

Puede usar la biblioteca según sea necesario. Aquí hay un ejemplo básico:

```ts
import { StructClass } from "@seelen-ui/lib/api";

const widgetApi: StructClass = await StructClass.geAsync();
const something = widgetApi.getSomething();
const somethingAsync = await widgetApi.getSomethingAsync();

await widgetApi.doSomething();
```

## **Notas importantes:**

1. Esta biblioteca de API solo funciona cuando se ejecuta dentro de una ejecución de widget de usuario de Seelen 
   ambiente
2. Intentar usarlo en node.js o contextos estándar del navegador lanzarán 
   errores
3. Los widgets que usan esta API deben actualizarlo para funcionar correctamente con 
   La última versión de Seelen UI
