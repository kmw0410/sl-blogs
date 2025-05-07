# **SLU bókasafn: Tegundir og tengi**

The `types` Eining SLU bókasafnsins veitir safn af nauðsynlegri gerð 
Skilgreiningar og tengi sem þjóna sem grunnur að þróun búnaðar. 
Þessi eining er hönnuð til að:

* Bjóða upp á staðlaðar tegundir skilgreiningar sem notaðar eru í SEELEN UI vistkerfinu
* Veittu tengi fyrir stöðuga útfærslu búnaðar
* Virkja öryggi af gerðinni yfir þróun búnaðar
* Þjóna sem sameiginlegum samningum milli kjarnaumsóknarinnar og búnaðarins

## **Notkun**

```ts
import { StructInterface } from "@seelen-ui/lib/types";

const myObject: StructInterface = { ... }
```

## **Lykilatriði:**

* **Skilgreiningar á kjarnategundum**: Grundvallartegundir sem notaðar eru við Seelen UI umsóknina
* **Búnaður samninga**: Tengi sem búnaður verður að innleiða fyrir eindrægni
* **Sameiginlegar gerðir**: Algeng gagnaskipulag notuð á pallinum
* **Tegund veitna**: Hjálpargerðir fyrir þróun búnaðar

Þessar tegundir eru neytt bæði innbyrðis með umsókninni og útsettar fyrir 
Ytri búnaður verktaki til að tryggja samkvæmni tegundar yfir vistkerfið.
