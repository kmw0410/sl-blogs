# **Pirtûkxaneya SLU: Reference API**

Modela API-ê pêkanînên konkret peyda dike û dersên amûrên ku serîlêdana RAW
API-yê, ku ji bo fasadek pêşdebir-heval xizmet dike entegrasyona widget.

## **Armanc**

- Ji navbeynkaran pêk tîne `/types` bi dersên amade-bikar anîn
- Kompleksên API-Asta Asta Zêde
- Rêbazên amûrên ji bo operasyonên hevbeş peyda dike
- Di navbera widgets û slu de wekî xizmeta danûstendina sereke ye bikaranînî

## **Bikarkirinî**

Hûn dikarin pirtûkxaneyê wekî ku hewce bikar bînin bikar bînin. Li vir mînakek
bingehîn e:

```ts
import { StructClass } from "@seelen-ui/lib/api";

const widgetApi: StructClass = await StructClass.geAsync();
const something = widgetApi.getSomething();
const somethingAsync = await widgetApi.getSomethingAsync();

await widgetApi.doSomething();
```

## **Nîşeyên girîng:**

1. Ev pirtûkxaneya api tenê dema ku di hundurê darvekirina widget ya Seelen UI
   de xebitî dixebite dor
2. Hewl da ku ew di node.js an naverokên geroka standard de bikar bîne Xelet
3. Widgets bi karanîna vê api hewce dike ku ew nûve bikin da ku bi rengek baş bi
   kar bînin Guhertoya herî paşîn a Seelen UI
