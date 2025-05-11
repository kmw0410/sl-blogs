# **Slu Bäregungen: Aarte an Interfall**

The `types` Modul vun der Slu Barburgie gëtt eng Sammlung vu wesentleche Typ
Defititioun an Interoen déi déi d 'Fonditioune fir d'Widget Baudunn déngen. Dëse
Modul ass entworf fir:

- Bitt standardiséierte Typ Definitiounen, déi am ganzen Senden UI Ecoosystem
  benotzt ginn
- Bitt Interfaces fir konsequent Widget-Implementatioun
- Aktivéiert Typ Sécherheet iwwer Widget Entwécklung
- Déngen als gemeinsame Kontrakter tëscht der Kär Uwendung a Widgets

## **Otzt**

```ts
import { StructInterface } from "@seelen-ui/lib/types";

const myObject: StructInterface = { ... }
```

## **Käschtefaier:**

- **Kär Typ Definitiounen**: Fundamentalesch Zorte benotzt vun der Seven UI
  Applikatioun
- **Widget Kontrakter**: Interfaces déi Widgets fir Onméiglechkeet ëmsetzen
- **Gedeelt Modeller**: Heefeg Datenstrukturen iwwer d'Plattform benotzt
- **Typ Utilities**: Helper Zorten fir Widget Entwécklung

Dës Zorte ginn souwuel intern vun der Applikatioun verbraucht an ausgesat fir
Extern Widget Entwéckler fir d'Zort Consistenz iwwer den Ökosystem ze
garantéieren.
