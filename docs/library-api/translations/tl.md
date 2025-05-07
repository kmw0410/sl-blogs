# **SLU Library: Sanggunian ng API**

Ang module ng API ay nagbibigay ng kongkretong pagpapatupad at mga klase ng utility na 
Abstract Ang Raw Application API, na nagsisilbing isang facade ng facade ng developer para sa 
Pagsasama ng Widget.

## **Layunin**

* Nagpapatupad ng mga interface mula sa `/types` na may handa na mga klase
* Abstract ang mga mababang antas ng pagiging kumplikado ng API
* Nagbibigay ng mga pamamaraan ng utility para sa mga karaniwang operasyon
* Nagsisilbing pangunahing layer ng pakikipag -ugnay sa pagitan ng mga widget at ang SLU 
  Application

## **Paggamit**

Maaari mong gamitin ang library kung kinakailangan. Narito ang isang pangunahing halimbawa:

```ts
import { StructClass } from "@seelen-ui/lib/api";

const widgetApi: StructClass = await StructClass.geAsync();
const something = widgetApi.getSomething();
const somethingAsync = await widgetApi.getSomethingAsync();

await widgetApi.doSomething();
```

## **Mahalagang Tala:**

1. Ang library ng API na ito ay gumagana lamang kapag tumatakbo sa loob ng isang pagpapatupad ng widget ng Seelen UI 
   Kapaligiran
2. Ang pagtatangka na gamitin ito sa node.js o karaniwang mga konteksto ng browser ay itatapon 
   mga pagkakamali
3. Ang mga widget na gumagamit ng API na ito ay kailangang i -update ito upang gumana nang maayos 
   Huling bersyon ng Seelen UI
