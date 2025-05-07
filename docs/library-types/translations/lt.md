# **SLU biblioteka: tipai ir sąsajos**

 `types` SLU bibliotekos modulis pateikia esminio tipo kolekciją 
apibrėžimai ir sąsajos, kurios yra valdiklių kūrimo pagrindas. 
Šis modulis yra skirtas:

* Siūlykite standartizuoto tipo apibrėžimus, naudojamus visoje SEELEN UI ekosistemoje
* Pateikite sąsajas nuosekliam valdiklio įgyvendinimui
* Įgalinkite tipo saugą visame valdiklio kūrime
* Tarnaukite kaip bendros sutartys tarp pagrindinės programos ir valdiklių

## **Naudojimas**

```ts
import { StructInterface } from "@seelen-ui/lib/types";

const myObject: StructInterface = { ... }
```

## **Pagrindinės savybės:**

* **Pagrindinio tipo apibrėžimai**: Pagrindiniai tipai, kuriuos naudoja „Seelen UI“ programa
* **Valdiklio sutartys**: Sąsajos, kurias valdikliai turi įgyvendinti, kad būtų galima suderinti
* **Bendri modeliai**: Bendrosios duomenų struktūros, naudojamos visoje platformoje
* **Tipo komunalinės paslaugos**: Pagalbininkų tipai valdiklių kūrimui

Šios rūšys yra sunaudojamos tiek iš vidaus, tiek dėl 
Išoriniai valdiklių kūrėjai, siekdami užtikrinti ekosistemos tipo nuoseklumą.
