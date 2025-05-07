# **SLU könyvtár: API referencia**

Az API modul konkrét megvalósításokat és segédprogramokat biztosít, amelyek 
Absztrakt a nyers alkalmazás API-ja, amely fejlesztőbarát homlokzatoként szolgál 
widget integráció.

## **Cél**

* Az interfészek végrehajtása `/types` felhasználásra kész osztályokkal
* Absztraktok alacsony szintű API komplexitások
* Hasznos módszereket biztosít a közös műveletekhez
* Az elsődleges interakciós rétegként szolgál a kütyü és a SLU között 
  alkalmazás

## **Használat**

Használhatja a könyvtárat szükség szerint. Íme egy alapvető példa:

```ts
import { StructClass } from "@seelen-ui/lib/api";

const widgetApi: StructClass = await StructClass.geAsync();
const something = widgetApi.getSomething();
const somethingAsync = await widgetApi.getSomethingAsync();

await widgetApi.doSomething();
```

## **Fontos megjegyzések:**

1. Ez az API könyvtár csak akkor működik, ha a Seelen UI widget végrehajtásán belül fut 
   környezet
2. A node.js vagy a standard böngésző kontextusban történő felhasználásának megkísérlése eldobja 
   hibák
3. Az ezen API -t használó kütyünek frissítenie kell azt, hogy megfelelően működjön 
   A Seelen UI legutóbbi verziója
