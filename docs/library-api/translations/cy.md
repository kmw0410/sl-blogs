# **Llyfrgell Slu: Cyfeirnod API**

Mae'r modiwl API yn darparu gweithrediadau concrit a dosbarthiadau cyfleustodau
hynny Haniaethol yr API Cais Amrwd, gan wasanaethu fel ffasâd sy'n gyfeillgar i
ddatblygwyr ar gyfer integreiddio teclyn.

## **Pwrpasol**

- Yn gweithredu rhyngwynebau o `/types` gyda dosbarthiadau parod i'w defnyddio
- Yn tynnu cymhlethdodau API lefel isel
- Yn darparu dulliau cyfleustodau ar gyfer gweithrediadau cyffredin
- Yn gwasanaethu fel yr haen ryngweithio sylfaenol rhwng teclynnau a'r SLU
  nghais

## **Nefnydd**

Gallwch ddefnyddio'r llyfrgell yn ôl yr angen. Dyma enghraifft sylfaenol:

```ts
import { StructClass } from "@seelen-ui/lib/api";

const widgetApi: StructClass = await StructClass.geAsync();
const something = widgetApi.getSomething();
const somethingAsync = await widgetApi.getSomethingAsync();

await widgetApi.doSomething();
```

## **Nodiadau Pwysig:**

1. Dim ond wrth redeg o fewn dienyddiad teclyn UI Seelen y mae'r llyfrgell API
   hon yn gweithio hamgylchedd
2. Bydd ceisio ei ddefnyddio mewn nod.js neu gyd -destunau safonol y porwr yn
   taflu gwallau
3. Mae angen i'r teclynnau sy'n defnyddio'r API hwn ei ddiweddaru er mwyn
   gweithio'n iawn gyda Fersiwn Lastest o Seelen UI
