# **SLU -bibliotek: Typer og grensesnitt**

De `types` Modulen til SLU -biblioteket gir en samling av essensiell type 
Definisjoner og grensesnitt som fungerer som grunnlaget for widget -utvikling. 
Denne modulen er designet for å:

* Tilbyr standardiserte type definisjoner brukt i hele Seelen UI -økosystemet
* Gi grensesnitt for konsekvent implementering av widget
* Aktiver type sikkerhet på tvers av widgetutvikling
* Tjene som delte kontrakter mellom kjerneapplikasjonen og widgets

## **Bruk**

```ts
import { StructInterface } from "@seelen-ui/lib/types";

const myObject: StructInterface = { ... }
```

## **Viktige funksjoner:**

* **Kjernetype Definisjoner**: Grunnleggende typer brukt av Seelen UI -applikasjonen
* **Widget kontrakter**: Grensesnitt som widgets må implementere for kompatibilitet
* **Delte modeller**: Vanlige datastrukturer brukt på tvers av plattformen
* **Type verktøy**: Hjelpertyper for widgetutvikling

Disse typene konsumeres både internt av applikasjonen og utsatt for 
Eksterne widget -utviklere for å sikre typekonsistens på tvers av økosystemet.
