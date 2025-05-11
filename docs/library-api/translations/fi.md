# **SLU -kirjasto: API -viite**

API -moduuli tarjoaa konkreettiset toteutukset ja hyödyllisyysluokat, jotka
Tiivistelmä Raw Application API, joka toimii kehittäjäystävällisenä julkisivuna
Widget -integraatio.

## **Tarkoitus**

- Toteuttaa rajapinnat `/types` Käyttövalmiiden luokkien kanssa
- Abstraktit matalan tason API-monimutkaisuudet
- Tarjoaa hyödyllisyysmenetelmiä yhteisille toimille
- Toimii ensisijaisena vuorovaikutuskerroksena widgettien ja SLU: n välillä
  soveltaminen

## **Käyttö**

Voit käyttää kirjastoa tarpeen mukaan. Tässä on perusesimerkki:

```ts
import { StructClass } from "@seelen-ui/lib/api";

const widgetApi: StructClass = await StructClass.geAsync();
const something = widgetApi.getSomething();
const somethingAsync = await widgetApi.getSomethingAsync();

await widgetApi.doSomething();
```

## **Tärkeitä huomautuksia:**

1. Tämä API -kirjasto toimii vain, kun juoksut Seelen UI -widget -suorituksessa
   ympäristö
2. Yritetään käyttää sitä Node.js: ssä tai tavanomaisissa selaimen konteksteissa
   virheet
3. Tätä sovellusliittymää käyttävien widgetien on päivitettävä se, jotta ne
   toimisivat oikein Viimeisin versio Seelen UI: stä
