# **SLU -biblioteek: API -verwysing**

Die API -module bied konkrete implementerings en nutsklasse wat 
Samevatting van die RAW Application API, wat dien as 'n ontwikkelaarvriendelike fasade vir 
widget -integrasie.

## **Doel**

* Implementeer koppelvlakke van `/types` met klasse wat gereed is om te gebruik
* Samevatting lae-vlak API-kompleksiteite
* Bied nutsmetodes vir algemene bedrywighede
* Dien as die primêre interaksielaag tussen widgets en die SLU 
  toepassing

## **Gebruik**

U kan die biblioteek indien nodig gebruik. Hier is 'n basiese voorbeeld:

```ts
import { StructClass } from "@seelen-ui/lib/api";

const widgetApi: StructClass = await StructClass.geAsync();
const something = widgetApi.getSomething();
const somethingAsync = await widgetApi.getSomethingAsync();

await widgetApi.doSomething();
```

## **Belangrike aantekeninge:**

1. Hierdie API -biblioteek werk slegs as u binne 'n Seelen UI -widget -uitvoering loop 
   omgewing
2. Probeer om dit in node.js of standaard blaaierkontekste te gebruik 
   foute
3. Die widgets wat hierdie API gebruik, moet dit opdateer om behoorlik mee te werk 
   Laasste weergawe van Seelen UI
