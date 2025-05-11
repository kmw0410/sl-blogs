# **SLU -Bibliothek: Typen und Schnittstellen**

Der `types` Das Modul der SLU -Bibliothek bietet eine Sammlung von wesentlichem
Typ Definitionen und Schnittstellen, die als Grundlage für die Widget
-Entwicklung dienen. Dieses Modul ist ausgelegt:

- Bieten Sie standardisierte Typdefinitionen an, die im Seelen UI -Ökosystem
  verwendet werden
- Stellen Sie Schnittstellen für eine konsistente Widget -Implementierung bereit
- Aktivieren Sie die Sicherheit der Type über die Widget -Entwicklung
- Dienen als gemeinsame Verträge zwischen dem Kernantrag und Widgets

## **Verwendung**

```ts
import { StructInterface } from "@seelen-ui/lib/types";

const myObject: StructInterface = { ... }
```

## **Schlüsselmerkmale:**

- **Kerntypdefinitionen**: Grundlegende Typen, die von der Seelen UI -Anwendung
  verwendet werden
- **Widget -Verträge**: Schnittstellen, die Widgets für die Kompatibilität
  implementieren müssen
- **Gemeinsame Modelle**: Gemeinsame Datenstrukturen, die auf der Plattform
  verwendet werden
- **Geben Sie Dienstprogramme ein**: Helfertypen für die Widget -Entwicklung

Diese Typen werden sowohl intern von der Anwendung als auch für die Anwendung
konsumiert Externe Widget -Entwickler, um die Konsistenz im gesamten Ökosystem
zu gewährleisten.
