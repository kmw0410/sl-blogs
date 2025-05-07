# **SLU -bibliotek: API -referens**

API -modulen tillhandahåller konkreta implementeringar och verktygsklasser som 
Sammanfattning av Raw Application API, som fungerar som en utvecklarevänlig fasad för 
Widgetintegration.

## **Ändamål**

* Implementerar gränssnitt från `/types` med färdiga klasser
* Abstracts Low-Level API-komplexiteter
* Tillhandahåller verktygsmetoder för gemensamma operationer
* Fungerar som det primära interaktionslagret mellan widgets och SLU 
  ansökan

## **Användande**

Du kan använda biblioteket efter behov. Här är ett grundläggande exempel:

```ts
import { StructClass } from "@seelen-ui/lib/api";

const widgetApi: StructClass = await StructClass.geAsync();
const something = widgetApi.getSomething();
const somethingAsync = await widgetApi.getSomethingAsync();

await widgetApi.doSomething();
```

## **Viktiga anteckningar:**

1. Detta API -bibliotek fungerar bara när du kör inom en SEELEN UI -widgetutförande 
   miljö
2. Att försöka använda den i node.js eller standard webbläsarsammanhang kommer att kasta 
   fel
3. Widgets som använder detta API måste uppdatera den för att fungera korrekt med 
   senaste version av Seelen UI
