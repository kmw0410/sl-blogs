# **Library SLU: Vrste i sučelja**

The `types` Modul biblioteke SLU pruža kolekciju suštinskog tipa 
Definicije i sučelji koje služe kao temelj za razvoj widgeta. 
Ovaj modul je dizajniran za:

* Ponudite standardizirane definicije tipa koji se koriste u ekosustavu SEELEN UI
* Pružaju sučelja za dosljednu implementaciju widgeta
* Omogući sigurnost tipa u razvoju widgeta
* Služe kao zajednički ugovori između temeljne aplikacije i widgeta

## **Upotreba**

```ts
import { StructInterface } from "@seelen-ui/lib/types";

const myObject: StructInterface = { ... }
```

## **Ključne karakteristike:**

* **Definicije tipa jezgre**: Temeljne vrste koje koristi Seelen UI aplikacija
* **Widget ugovori**: Sučelja koji widgeti moraju implementirati za kompatibilnost
* **Dijeljeni modeli**: Zajedničke strukture podataka koje se koriste preko platforme
* **Tip komunalije**: Pomoćni tipovi za razvoj widgeta

Ove vrste konzumiraju i interno primjenom i izložene za 
Vanjski programeri dodataka kako bi se osigurala vrsta dosljednosti u ekosustavu.
