# **SLU -Bibliothek: API -Referenz**

Das API -Modul liefert konkrete Implementierungen und Versorgungsklassen, die
Abstract die RAW-Anwendungs-API, die als Entwicklerfassade für die Fassade dient
Widget -Integration.

## **Zweck**

- Implementiert Schnittstellen von `/types` mit konfrontierten Klassen
- Abstracts auf niedrige API-Komplexität der API
- Bietet Dienstprogrammmethoden für gemeinsame Operationen
- Dient als primäre Interaktionsschicht zwischen Widgets und der SLU Anwendung

## **Verwendung**

Sie können die Bibliothek nach Bedarf verwenden. Hier ist ein grundlegendes
Beispiel:

```ts
import { StructClass } from "@seelen-ui/lib/api";

const widgetApi: StructClass = await StructClass.geAsync();
const something = widgetApi.getSomething();
const somethingAsync = await widgetApi.getSomethingAsync();

await widgetApi.doSomething();
```

## **Wichtige Anmerkungen:**

1. Diese API -Bibliothek funktioniert nur, wenn Sie innerhalb einer Seelen UI
   -Widget -Ausführung ausgeführt werden Umfeld
2. Der Versuch, es in Node.js oder Standard -Browser -Kontexten zu verwenden
   Fehler
3. Die Widgets, die diese API verwenden, müssen sie aktualisieren, um
   ordnungsgemäß mit Letzte Version von Seelen UI
