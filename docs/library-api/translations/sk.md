# **Knižnica SLU: Referencia API**

Modul API poskytuje betónové implementácie a triedy úžitkových tried, ktoré
Abstrakt API RAW Application, slúži ako fasáda priateľská k vývojárov Integrácia
widgetov.

## **Účel**

- Implementuje rozhrania z `/types` s triedami pripravenými na použitie
- Abstrakty zložitosti API na nízkej úrovni
- Poskytuje úžitkové metódy pre bežné operácie
- Slúži ako primárna interakčná vrstva medzi miniaplikáciami a SLU aplikácia

## **Využitie**

Knižnicu môžete použiť podľa potreby. Tu je základný príklad:

```ts
import { StructClass } from "@seelen-ui/lib/api";

const widgetApi: StructClass = await StructClass.geAsync();
const something = widgetApi.getSomething();
const somethingAsync = await widgetApi.getSomethingAsync();

await widgetApi.doSomething();
```

## **Dôležité poznámky:**

1. Táto knižnica API funguje iba pri spustení v rámci vykonávania miniaplikácie
   Seelen UI prostredie
2. Pokus o jeho použitie v node.js alebo štandardné kontexty prehliadača sa hodí
   chyby
3. Widgety používajúce toto rozhranie API ho musia aktualizovať, aby mohli
   správne pracovať posledná verzia Seelen UI
