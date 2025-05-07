# **SLU -bibliotek: Typer och gränssnitt**

De `types` SLU -bibliotekets modul ger en samling av väsentlig typ 
Definitioner och gränssnitt som fungerar som grunden för widgetutveckling. 
Denna modul är utformad för att:

* Erbjuda standardiserade typdefinitioner som används i Seelen UI -ekosystem
* Ge gränssnitt för konsekvent implementering av widget
* Aktivera typsäkerhet över widgetutveckling
* Tjäna som delade kontrakt mellan kärnansökan och widgetar

## **Användande**

```ts
import { StructInterface } from "@seelen-ui/lib/types";

const myObject: StructInterface = { ... }
```

## **Nyckelfunktioner:**

* **Definitioner av kärntyp**: Grundläggande typer som används av Seelen UI -applikationen
* **Widgetkontrakt**: Gränssnitt som widgetar måste implementera för kompatibilitet
* **Delade modeller**: Vanliga datastrukturer som används över plattformen
* **Typverktyg**: Hjälper typer för widgetutveckling

Dessa typer konsumeras både internt av applikationen och exponeras för 
Externa widgetutvecklare för att säkerställa typkonsistens över ekosystemet.
