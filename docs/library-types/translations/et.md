# **SLU raamatukogu: tüübid ja liidesed**

Selle `types` SLU teegi moodul pakub olulist tüüpi kogumit Mõisted ja liidesed,
mis on vidina arendamise alus. See moodul on loodud järgmiseks:

- Pakkuge standardiseeritud tüüpi määratlusi, mida kasutatakse kogu seeleni
  kasutajaliidese ökosüsteemis
- Esitage liidesed vidina järjepidevaks rakendamiseks
- Luba vidinate arendamise tüübi ohutus
- Toimige põhirakenduse ja vidinate vahel jagatud lepingutena

## **Kasutamine**

```ts
import { StructInterface } from "@seelen-ui/lib/types";

const myObject: StructInterface = { ... }
```

## **Peamised funktsioonid:**

- **Põhitüübi määratlused**: Põhitüübid, mida kasutab Seeleni kasutajaliidese
  rakendus
- **Vidinalepingud**: Liidesed, mida vidinad peavad ühilduvuse tagamiseks
  rakendama
- **Jagatud mudelid**: Platvormis kasutatud levinud andmestruktuurid
- **Tüüpi kommunaalkulud**: Abistajatüübid vidina arendamiseks

Neid tüüpe tarbitakse nii sisemiselt rakendusega kui ka paljastada Välised
vidinaarendajad, et tagada ökosüsteemis tüübi järjepidevus.
