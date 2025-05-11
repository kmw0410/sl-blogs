# **I-SLU Library: Inkomba ye-API**

Imodyuli ye-API ihlinzeka ngokuqaliswa kokhonkolo kanye namakilasi wokusebenzisa
lokho Abstract a application application eluhlaza, esebenza njenge-facdade
yonjiniyela Ukuhlanganiswa kwewijethi.

## **Okuhlosiwe**

- Izicelo zokuhlangana kusuka `/types` ngezigaba ezilungele ukusetshenziswa
- Ukuqhakambisa Ubunzima be-API ye-API ephansi
- Ihlinzeka ngezindlela zokusetshenziswa kwemisebenzi ejwayelekile
- Isebenza njengesendlalelo sokuqala phakathi kwamawijethi kanye ne-slu isicelo

## **Umsebenzi**

Ungasebenzisa umtapo wezincwadi njengoba kudingeka. Nasi isibonelo
esiyisisekelo:

```ts
import { StructClass } from "@seelen-ui/lib/api";

const widgetApi: StructClass = await StructClass.geAsync();
const something = widgetApi.getSomething();
const somethingAsync = await widgetApi.getSomethingAsync();

await widgetApi.doSomething();
```

## **Amanothi abalulekile:**

1. Lo mtapo wezincwadi we-API usebenza kuphela lapho usebenza ngaphakathi
   kwe-Weelen UI Widget Extret indawo ezungezile
2. Ukuzama ukuyisebenzisa kuma-node.js noma izimo ezijwayelekile zesiphequluli
   zizophonsa amaphutha
3. Amawijethi asebenzisa le api kudinga ukukuvuselela ukuze asebenze kahle nge
   Uhlobo Olugcina Lwesibili lweSeelen UI
