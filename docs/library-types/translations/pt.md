# **Biblioteca SLU: tipos e interfaces**

O `types` Módulo da biblioteca SLU fornece uma coleção de tipo essencial
Definições e interfaces que servem como base para o desenvolvimento do widget.
Este módulo foi projetado para:

- Ofereça definições de tipo padronizado usadas em todo o ecossistema Seelen UI
- Forneça interfaces para implementação consistente de widgets
- Habilitar o tipo de segurança no desenvolvimento do widget
- Servir como contratos compartilhados entre o aplicativo principal e os widgets

## **Uso**

```ts
import { StructInterface } from "@seelen-ui/lib/types";

const myObject: StructInterface = { ... }
```

## **Principais recursos:**

- **Definições do tipo de núcleo**: Tipos fundamentais usados ​​pelo aplicativo
  Seelen UI
- **Contratos de widgets**: Interfaces que os widgets devem implementar para
  compatibilidade
- **Modelos compartilhados**: Estruturas de dados comuns usadas em toda a
  plataforma
- **Utilitários de tipo**: Tipos de auxiliar para desenvolvimento de widgets

Esses tipos são consumidos internamente pelo aplicativo e expostos para
Desenvolvedores de widgets externos para garantir a consistência do tipo em todo
o ecossistema.
