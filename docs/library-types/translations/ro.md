# **Biblioteca SLU: Tipuri și interfețe**

`types` Modulul bibliotecii SLU oferă o colecție de tip esențial Definiții și
interfețe care servesc drept fundament pentru dezvoltarea widget -ului. Acest
modul este conceput pentru:

- Oferiți definiții de tip standardizate utilizate în întregul ecosistem UI
  Seelen
- Oferiți interfețe pentru implementarea consistentă a widget -ului
- Activați siguranța tipului în dezvoltarea widget -ului
- Serviți ca contracte partajate între aplicația de bază și widget -uri

## **Utilizare**

```ts
import { StructInterface } from "@seelen-ui/lib/types";

const myObject: StructInterface = { ... }
```

## **Caracteristici cheie:**

- **Definiții de tip de bază**: Tipuri fundamentale utilizate de aplicația UI
  Seelen
- **Contracte de widget**: Interfețe pe care widget -urile trebuie să le
  implementeze pentru compatibilitate
- **Modele partajate**: Structuri de date comune utilizate pe platformă
- **Tipuri de tip**: Tipuri de ajutor pentru dezvoltarea widget -ului

Aceste tipuri sunt consumate atât pe plan intern, cât și expuse pentru
Dezvoltatori de widget externi pentru a asigura coerența tipului în ecosistem.
