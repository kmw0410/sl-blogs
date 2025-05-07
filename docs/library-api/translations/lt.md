# **SLU biblioteka: API nuoroda**

API modulis teikia konkrečias diegimus ir naudingumo klases 
Antrąjį neapdorotą programų API, tarnaujančią kaip kūrėjui pritaikytas fasadas 
Valdiklio integracija.

## **Tikslas**

* Įgyvendina sąsajas iš `/types` Su paruoštais naudojimo klasėmis
* Abstrakčių žemo lygio API sudėtingumas
* Pateikiami naudingumo metodai bendroms operacijoms
* Tarnauja kaip pagrindinis valdiklių ir SLU sąveikos sluoksnis 
  paraiška

## **Naudojimas**

Galite naudoti biblioteką pagal poreikį. Štai pagrindinis pavyzdys:

```ts
import { StructClass } from "@seelen-ui/lib/api";

const widgetApi: StructClass = await StructClass.geAsync();
const something = widgetApi.getSomething();
const somethingAsync = await widgetApi.getSomethingAsync();

await widgetApi.doSomething();
```

## **Svarbios pastabos:**

1. Ši API biblioteka veikia tik tada 
   aplinka
2. Bandymas jį naudoti „Node.js“ arba „Standard“ naršyklės kontekstuose. 
   klaidos
3. Valdikliai, naudojantys šią API, turi ją atnaujinti, kad tinkamai veiktų 
   naujausia „Seelen UI“ versija
