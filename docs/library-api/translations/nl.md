# **SLU -bibliotheek: API -referentie**

De API -module biedt concrete implementaties en hulpprogramma -klassen die 
Samenvatting van de Raw Application API, die dient als een ontwikkelaarvriendelijke gevel voor 
Widget -integratie.

## **Doel**

* Implementeert interfaces van `/types` met gebruiksklasse lessen
* Abstracts Low-level API-complexiteiten
* Biedt hulpprogramma -methoden voor gemeenschappelijke bewerkingen
* Dient als de primaire interactielaag tussen widgets en de SLU 
  sollicitatie

## **Gebruik**

U kunt de bibliotheek indien nodig gebruiken. Hier is een fundamenteel voorbeeld:

```ts
import { StructClass } from "@seelen-ui/lib/api";

const widgetApi: StructClass = await StructClass.geAsync();
const something = widgetApi.getSomething();
const somethingAsync = await widgetApi.getSomethingAsync();

await widgetApi.doSomething();
```

## **Belangrijke opmerkingen:**

1. Deze API -bibliotheek werkt alleen wanneer u wordt uitgevoerd binnen een Selen UI -widgetuitvoering 
   omgeving
2. Proberen om het te gebruiken in Node.js of standaard browsercontext zal gooien 
   fouten
3. De widgets die deze API gebruiken, moeten deze bijwerken om goed te werken 
   de laatste versie van Selen UI
