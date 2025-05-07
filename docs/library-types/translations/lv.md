# **SLU bibliotēka: tipi un saskarnes**

Līdz `types` SLU bibliotēkas modulis nodrošina būtiska tipa kolekciju 
Definīcijas un saskarnes, kas kalpo kā logrīka attīstības pamats. 
Šis modulis ir paredzēts:

* Piedāvājiet standartizētas tipa definīcijas, kuras tiek izmantotas visā Seelen UI ekosistēmā
* Nodrošiniet saskarnes konsekventai logrīka ieviešanai
* Iespējot tipa drošību visā logrīka attīstībā
* Kalpo kā kopīgi līgumi starp galveno pieteikumu un logrīkiem

## **Lietošana**

```ts
import { StructInterface } from "@seelen-ui/lib/types";

const myObject: StructInterface = { ... }
```

## **Galvenās funkcijas:**

* **Pamata tipa definīcijas**: Seelen UI lietojumprogrammas izmantotie pamata tipi
* **Logrīka līgumi**: Saskarnes, kas logrīkiem jāievieš savietojamībai
* **Koplietojamie modeļi**: Parastās datu struktūras, ko izmanto visā platformā
* **Ierakstiet komunālos pakalpojumus**: Palīgu veidi logrīka izstrādei

Šos veidus lieto gan iekšēji, gan pakļauti 
Ārējie logrīku izstrādātāji, lai nodrošinātu tipa konsekvenci visā ekosistēmā.
