# **SLU bibliotēka: API atsauce**

API modulis nodrošina konkrētas ieviešanas un lietderības klases Kopsavilkums
Neapstrādāta lietojumprogrammu API, kas kalpo kā izstrādātājam draudzīga fasāde
logrīka integrācija.

## **Mērķis**

- Ievieš saskarnes no `/types` ar gatavām nodarbībām
- Abstracts zema līmeņa API sarežģītība
- Nodrošina lietderības metodes kopīgām operācijām
- Kalpo kā primārais mijiedarbības slānis starp logrīkiem un SLU pieteikums

## **Lietošana**

Pēc vajadzības varat izmantot bibliotēku. Šeit ir pamata piemērs:

```ts
import { StructClass } from "@seelen-ui/lib/api";

const widgetApi: StructClass = await StructClass.geAsync();
const something = widgetApi.getSomething();
const somethingAsync = await widgetApi.getSomethingAsync();

await widgetApi.doSomething();
```

## **Svarīgas piezīmes:**

1. Šī API bibliotēka darbojas tikai tad, kad darbojas Seelen UI logrīka izpildē
   vide
2. Mēģinājums to izmantot Node.js vai standarta pārlūka kontekstā kļūdas
3. Logrīki, kas izmanto šo API, ir jāatjaunina, lai pareizi darbotos
   PAPILDINĀJUMS SEELEN UI
