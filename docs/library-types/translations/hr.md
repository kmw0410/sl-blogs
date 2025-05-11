# **SLU knjižnica: vrste i sučelja**

A `types` Modul knjižnice SLU pruža zbirku bitne vrste Definicije i sučelja koja
služe kao temelj za razvoj widgeta. Ovaj je modul dizajniran za:

- Ponudite standardizirane definicije tipa koje se koriste u cijelom ekosustavu
  seelen korisničkog sučelja
- Omogućite sučelja za dosljednu implementaciju widgeta
- Omogući sigurnost tipa kroz razvoj widgeta
- Služiti kao zajednički ugovori između osnovne aplikacije i widgeta

## **Uporaba**

```ts
import { StructInterface } from "@seelen-ui/lib/types";

const myObject: StructInterface = { ... }
```

## **Ključne značajke:**

- **Definicije temeljne vrste**: Temeljne vrste koje koristi Seelen UI
  aplikacija
- **Ugovori o widgetu**: Sučelja koja widgeti moraju implementirati za
  kompatibilnost
- **Zajednički modeli**: Uobičajene strukture podataka koje se koriste na
  cijeloj platformi
- **Upišite uslužne programe**: Pomoćni tipovi za razvoj widgeta

Ove vrste se interno konzumiraju i izložene za Vanjski programeri widgeta kako
bi osigurali dosljednost tipa u cijelom ekosustavu.
