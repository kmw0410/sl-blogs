# **SLU knjižnica: API referenca**

API modul pruža konkretne implementacije i komunalne klase koje 
Sažetak RAW aplikacija API-ja, koji služi kao fasada prilagođena programeru za 
Integracija widgeta.

## **Svrha**

* Implementira sučelja iz `/types` s predavanjima gotove za upotrebu
* Sažeci složenosti API-ja niske razine
* Pruža korisne metode za uobičajene operacije
* Služi kao primarni sloj interakcije između widgeta i SLU -a 
  prijava

## **Uporaba**

Po potrebi možete koristiti knjižnicu. Evo osnovnog primjera:

```ts
import { StructClass } from "@seelen-ui/lib/api";

const widgetApi: StructClass = await StructClass.geAsync();
const something = widgetApi.getSomething();
const somethingAsync = await widgetApi.getSomethingAsync();

await widgetApi.doSomething();
```

## **Važne napomene:**

1. Ova biblioteka API -ja djeluje samo kada se izvodi u izvedbi widgeta Seelen UI 
   okoliš
2. Pokušaj korištenja u node.js ili standardnim kontekstima preglednika bacat će 
   pogreške
3. Widgeti koji koriste ovaj API trebaju ga ažurirati kako bi pravilno radili 
   Najnovija verzija Seelen UI
