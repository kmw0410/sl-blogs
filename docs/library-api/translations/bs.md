# **Library SLU: API referenca**

Modul API pruža betonske implementacije i komunalne klase koji 
Sažetak API RAW aplikacije, koji služi kao fasada prilagođena programeru za 
Integracija widgeta.

## **Svrha**

* Provodi sučelja iz `/types` Sa spremnostima gotove za upotrebu
* Sažeci API složenosti niskog nivoa
* Pruža komunalne metode za zajedničke operacije
* Služi kao sloj primarnog interakcije između widgeta i služenja 
  primjena

## **Upotreba**

Možete koristiti biblioteku po potrebi. Evo osnovnog primera:

```ts
import { StructClass } from "@seelen-ui/lib/api";

const widgetApi: StructClass = await StructClass.geAsync();
const something = widgetApi.getSomething();
const somethingAsync = await widgetApi.getSomethingAsync();

await widgetApi.doSomething();
```

## **Važne napomene:**

1. Ova API biblioteka radi samo prilikom trčanja unutar seelen ui izricanja widgeta 
   okruženje
2. Pokušaj upotrebe u čvoru.js ili standardni konteksti preglednika će baciti 
   greške
3. Widgeti pomoću ovog API-a treba ih ažurirati kako bi se pravilno radili 
   Najbolje verziju Seelena Ui
