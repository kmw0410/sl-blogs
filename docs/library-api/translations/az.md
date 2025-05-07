# **SLU Kitabxanası: API arayışı**

API modulu konkret tətbiqlər və kommunal siniflər təqdim edir 
üçün bir geliştirici dostu fasad kimi xidmət edən Xülas Tətbiq API 
Widget inteqrasiyası.

## **Mastika**

* İnterfeysləri həyata keçirir `/types` İstifadəyə hazır siniflər ilə
* Abstraktlar aşağı səviyyəli API çətinlikləri
* Ümumi əməliyyatlar üçün kommunal üsullar təqdim edir
* Widget və slu arasında əsas qarşılıqlı təbəqə kimi xidmət edir 
  tətbiqi

## **İstifadə**

Lazım olduqda kitabxanadan istifadə edə bilərsiniz. Budur əsas nümunə:

```ts
import { StructClass } from "@seelen-ui/lib/api";

const widgetApi: StructClass = await StructClass.geAsync();
const something = widgetApi.getSomething();
const somethingAsync = await widgetApi.getSomethingAsync();

await widgetApi.doSomething();
```

## **Əhəmiyyətli qeydlər:**

1. Bu API kitabxanası yalnız bir SEELEN UI widget icrası daxilində işləyir 
   mühit
2. Node.js və ya standart brauzer kontekstində istifadə etməyə çalışmaq atacaq 
   səhv
3. Bu API istifadə edərək vidjetlər düzgün işləmək üçün onu yeniləməlidir 
   Seelen UI-nin ən son versiyası
