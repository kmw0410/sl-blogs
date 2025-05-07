# **Biblioteca SLU: tipos e interfaces**

La `types` El módulo de la biblioteca SLU proporciona una colección de tipo esencial 
Definiciones e interfaces que sirven como base para el desarrollo de widgets. 
Este módulo está diseñado para:

* Ofrezca definiciones de tipo estandarizadas utilizadas en todo el ecosistema de UI de Seelen
* Proporcionar interfaces para una implementación constante de widgets
* Habilitar la seguridad de tipo de tipo en el desarrollo de widgets
* Servir como contratos compartidos entre la aplicación central y los widgets

## **Uso**

```ts
import { StructInterface } from "@seelen-ui/lib/types";

const myObject: StructInterface = { ... }
```

## **Características clave:**

* **Definiciones de tipo central**: Tipos fundamentales utilizados por la aplicación Seelen UI
* **Contratos de widgets**: Interfaces que los widgets deben implementar para compatibilidad
* **Modelos compartidos**: Estructuras de datos comunes utilizadas en la plataforma
* **Tipo de servicios públicos**: Tipos de ayuda para el desarrollo de widgets

Estos tipos son consumidos tanto internamente como expuestos para 
Desarrolladores de widgets externos para garantizar la consistencia del tipo en todo el ecosistema.
