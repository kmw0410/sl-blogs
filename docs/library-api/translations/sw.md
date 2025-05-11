# **Maktaba ya SLU: Rejea ya API**

Moduli ya API hutoa utekelezaji halisi na madarasa ya matumizi ambayo ABSTRACT
API ya Maombi Mbichi, Kutumikia kama Kitengo cha Kirafiki cha Wasanidi programu
kwa Ujumuishaji wa Widget.

## **Kusudi**

- Utekelezaji wa miingiliano kutoka `/types` na madarasa tayari ya kutumia
- Ugumu wa kiwango cha chini cha API
- Hutoa njia za matumizi kwa shughuli za kawaida
- Inatumika kama safu ya mwingiliano ya msingi kati ya vilivyoandikwa na SLU
  maombi

## **Matumizi**

Unaweza kutumia maktaba kama inahitajika. Hapa kuna mfano wa msingi:

```ts
import { StructClass } from "@seelen-ui/lib/api";

const widgetApi: StructClass = await StructClass.geAsync();
const something = widgetApi.getSomething();
const somethingAsync = await widgetApi.getSomethingAsync();

await widgetApi.doSomething();
```

## **Vidokezo muhimu:**

1. Maktaba hii ya API inafanya kazi tu wakati wa kutekeleza utekelezaji wa
   widget wa Seelen UI mazingira
2. Kujaribu kuitumia katika node.js au muktadha wa kawaida wa kivinjari utatupa
   makosa
3. Vidude vinavyotumia API hii vinahitaji kuisasisha ili kufanya kazi vizuri na
   Toleo la mwisho la Seelen UI
