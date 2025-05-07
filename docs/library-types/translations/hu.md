# **SLU könyvtár: Típusok és interfészek**

A `types` A SLU könyvtár modulja alapvető típusú gyűjteményt nyújt 
Meghatározások és interfészek, amelyek alapjául szolgálnak a widget fejlesztésének. 
Ezt a modult úgy tervezték, hogy:

* Kínáljon szabványosított típusú meghatározásokat a Seelen UI ökoszisztémájában
* Biztosítson interfészeket a következetes widget megvalósításához
* Engedélyezze a típusbiztonságot a widget fejlesztése között
* Megosztott szerződésként szolgálnak az alapvető alkalmazás és a kütyü között

## **Használat**

```ts
import { StructInterface } from "@seelen-ui/lib/types";

const myObject: StructInterface = { ... }
```

## **Főbb jellemzők:**

* **Alaptípus -meghatározások**: A Seelen UI alkalmazás által használt alaptípusok
* **Widget szerződések**: Interfészek, amelyeket a kütyünek be kell tartania a kompatibilitás érdekében
* **Megosztott modellek**: A platformon használt általános adatszerkezetek
* **Típusú segédprogramok**: Helper -típusok a widget fejlesztéséhez

Ezeket a típusokat az alkalmazás belsőleg mind belsőleg fogyasztja, mind pedig 
Külső widget -fejlesztők, hogy biztosítsák a típuskonzisztenciát az ökoszisztémában.
