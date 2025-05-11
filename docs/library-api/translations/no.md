# **SLU -bibliotek: API -referanse**

API -modulen gir konkrete implementeringer og bruksklasser som Abstract Raw
Application API, som fungerer som en utviklervennlig fasade for Widget
-integrasjon.

## **Hensikt**

- Implementerer grensesnitt fra `/types` med klar til bruk
- Sammendrag API-kompleksiteter på lavt nivå
- Tilbyr bruksmetoder for vanlige operasjoner
- Fungerer som det primære interaksjonslaget mellom widgets og SLU søknad

## **Bruk**

Du kan bruke biblioteket etter behov. Her er et grunnleggende eksempel:

```ts
import { StructClass } from "@seelen-ui/lib/api";

const widgetApi: StructClass = await StructClass.geAsync();
const something = widgetApi.getSomething();
const somethingAsync = await widgetApi.getSomethingAsync();

await widgetApi.doSomething();
```

## **Viktige merknader:**

1. Dette API -biblioteket fungerer bare når du kjører innenfor en utførelse av
   Seelen UI -widget miljø
2. Forsøk på å bruke den i Node.js eller standard nettleserkontekster vil kaste
   feil
3. Widgets som bruker denne API -en må oppdatere den for å fungere ordentlig med
   siste versjon av Seelen UI
