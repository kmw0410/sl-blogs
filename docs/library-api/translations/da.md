# **SLU -bibliotek: API -reference**

API -modulet leverer konkrete implementeringer og brugsklasser, der 
Abstract Raw Application API, der tjener som en udviklervenlig facade til 
Widget -integration.

## **Formål**

* Implementerer grænseflader fra `/types` med klar til brug klasser
* Abstracts API-kompleksiteter på lavt niveau
* Tilvejebringer værktøjsmetoder til fælles operationer
* Tjener som det primære interaktionslag mellem widgets og SLU 
  anvendelse

## **Brug**

Du kan bruge biblioteket efter behov. Her er et grundlæggende eksempel:

```ts
import { StructClass } from "@seelen-ui/lib/api";

const widgetApi: StructClass = await StructClass.geAsync();
const something = widgetApi.getSomething();
const somethingAsync = await widgetApi.getSomethingAsync();

await widgetApi.doSomething();
```

## **Vigtige noter:**

1. Dette API -bibliotek fungerer kun, når du kører inden for en Seelen UI -widget -udførelse 
   miljø
2. Forsøg på at bruge det i node.js eller standardbrowserkontekster vil kaste 
   fejl
3. Widgets, der bruger denne API, skal opdatere den for at arbejde ordentligt med 
   Sidste version af Seelen UI
