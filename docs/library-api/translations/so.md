# **Maktabadda SLU: Tixraaca API**

Qaybta API waxay bixisaa hirgelinta la taaban karo iyo fasalo tamarta in 
Ka fogow arjiga cayriin ee API, oo u adeegaya sidii wax soo-saare u habboon 
is-dhexgalka balanta.

## **Ujeeddo**

* Fulisaa is-dhexgalka `/types` oo leh fasallo u diyaarsan oo loo adeegsado
* Hoos u dhig isku-dhafka api-ga hoose
* Waxay bixisaa qaabab utility hawlgallada caadiga ah
* Waxay u adeegtaa sidii lakabka hordhaca koowaad ee u dhexeeya widget-ka iyo slu 
  isticmaal

## **Isticmaalka**

Maktabadda waad isticmaali kartaa hadba sida loogu baahdo. Waa tan tusaale asaasi ah:

```ts
import { StructClass } from "@seelen-ui/lib/api";

const widgetApi: StructClass = await StructClass.geAsync();
const something = widgetApi.getSomething();
const somethingAsync = await widgetApi.getSomethingAsync();

await widgetApi.doSomething();
```

## **Xusuusin muhiim ah:**

1. Maktabaddan API kaliya waxay shaqeysaa oo keliya marka uu ku socdo gudaha fulinta Widget ee Seleled UI 
   deegaan
2. Iskuday inaad u isticmaasho Node.js ama xaaladaha biraawsarka caadiga ah ayaa tuuraya 
   khalad
3. Widgets-ka iyadoo la adeegsanayo API-da Tani waxay u baahan tahay inay cusboonaysiiso si ay si sax ah ugu shaqeeyaan 
   Nooca ugu dambeeya ee Selen Ui
