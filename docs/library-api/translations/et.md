# **SLU raamatukogu: API viide**

API moodul pakub konkreetseid rakendusi ja utiliidiklasse, mis Kokkuvõte RAW
Application API, mis toimib arendajasõbraliku fassaadina vidina integreerimine.

## **Eesmärk**

- Rakendab liideseid `/types` kasutamiseks valmis klassid
- Kokkuvõtted madala taseme API keerukused
- Pakub ühiste toimingute jaoks kasulikke meetodeid
- Toimib vidinate ja SLU vahelise esmase interaktsiooni kihina rakendus

## **Kasutamine**

Saate raamatukogu kasutada vastavalt vajadusele. Siin on põhinäide:

```ts
import { StructClass } from "@seelen-ui/lib/api";

const widgetApi: StructClass = await StructClass.geAsync();
const something = widgetApi.getSomething();
const somethingAsync = await widgetApi.getSomethingAsync();

await widgetApi.doSomething();
```

## **Olulised märkused:**

1. See API teek töötab ainult siis, kui töötab seeneni kasutajaliidese vidina
   täitmisel keskkond
2. Katse seda kasutada Node.js või tavaliste brauseri kontekstides vead
3. Seda API -d kasutavad vidinad peavad seda õigesti töötamiseks värskendama
   Seelen Ui viimane versioon
