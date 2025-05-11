# **Knižnica SLU: Typy a rozhrania**

Ten `types` Modul knižnice SLU poskytuje zbierku základného typu Definície a
rozhrania, ktoré slúžia ako základ pre vývoj widgetov. Tento modul je navrhnutý
tak, aby:

- Ponuka štandardizovaných definícií typu použité v ekosystéme Seelen UI
- Poskytnite rozhrania pre konzistentnú implementáciu widgetov
- Povoľte bezpečnosť typu v rámci vývoja widgetov
- Slúžiť ako zdieľané zmluvy medzi hlavnou aplikáciou a miniaplikáciami

## **Využitie**

```ts
import { StructInterface } from "@seelen-ui/lib/types";

const myObject: StructInterface = { ... }
```

## **Kľúčové funkcie:**

- **Definície základného typu**: Základné typy používané aplikáciou Seelen UI
  Application
- **Miniaplikácia**: Rozhrania, ktoré musia widgety implementovať pre
  kompatibilitu
- **Zdieľané modely**: Bežné dátové štruktúry používané v celej platforme
- **Podiely**: Typy pomocníkov pre vývoj widgetov

Tieto typy sú interne konzumované aplikáciou a sú vystavené pre Vývojári
externých widgetov, aby zabezpečili konzistentnosť typu v celom ekosystéme.
