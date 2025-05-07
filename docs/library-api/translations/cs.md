# **SLU knihovna: API Reference**

Modul API poskytuje betonové implementace a třídy veřejných služeb, které 
abstraktní API Raw Application API, sloužící jako vývojářská fasáda pro 
Integrace widgetů.

## **Účel**

* Implementuje rozhraní z `/types` s třídami připravených k použití
* Abstrakt je složitosti API nízké úrovně
* Poskytuje metody užitečnosti pro běžné operace
* Slouží jako primární vrstva interakce mezi widgety a SLU 
  aplikace

## **Používání**

Knihovna můžete použít podle potřeby. Zde je základní příklad:

```ts
import { StructClass } from "@seelen-ui/lib/api";

const widgetApi: StructClass = await StructClass.geAsync();
const something = widgetApi.getSomething();
const somethingAsync = await widgetApi.getSomethingAsync();

await widgetApi.doSomething();
```

## **Důležité poznámky:**

1. Tato knihovna API funguje pouze při spuštění v provádění widgetu UI Seelen 
   prostředí
2. Pokus o jeho použití v kontextech node.js nebo standardního prohlížeče bude házet 
   chyby
3. Widgety používající toto API musí jej aktualizovat, aby mohly správně fungovat 
   Poslední verze Seelen UI
