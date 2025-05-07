# **Ile-ikawe SLU: API itọkasi**

Module API n pese awọn imuse ati awọn kilasi IwUlO ti 
apdstracd ohun elo aise, sìn bi falilati ore-ore-ọfẹ fun 
Instrationt intetiont.

## **Idi**

* Awọn ipa fi awọn itele lati `/types` pẹlu awọn kilasi imurasilẹ-lati-lo
* Awọn eka ti o jẹ kekere-kekere API
* Pese awọn ọna agbara fun awọn iṣẹ to wọpọ
* Sin bi Lakobu Ibaṣepọ akọkọ laarin awọn ẹrọ ailorukọ ati SLU 
  ohun elo

## **Lilo**

O le lo ile-ikawe bi o nilo. Eyi ni apẹẹrẹ ipilẹ:

```ts
import { StructClass } from "@seelen-ui/lib/api";

const widgetApi: StructClass = await StructClass.geAsync();
const something = widgetApi.getSomething();
const somethingAsync = await widgetApi.getSomethingAsync();

await widgetApi.doSomething();
```

## **Awọn akọsilẹ pataki:**

1. Ile-ikawe API yii nikan ṣiṣẹ nigbati o nṣiṣẹ laarin ipaniyan ẹrọ ailorukọ UI UI 
   agbegbe
2. Igbiyanju lati lo ni oju-ọjọ .js tabi awọn ipo aṣawakiri boṣewa yoo jabọ 
   aṣiṣe
3. Awọn ẹrọ ailorukọ lilo API yii nilo lati mu dojuiwọn lati le ṣiṣẹ daradara pẹlu 
   Ẹya ti o ga julọ ti Sienin UI
