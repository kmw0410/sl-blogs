# **SLU Liburutegia: Mota eta interfazeak**

-A `types` SLU liburutegiko moduluak funtsezko motaren bilduma eskaintzen du
Widget garapenerako oinarri gisa balio duten definizioak eta interfazeak. Modulu
hau honetarako diseinatuta dago:

- Eskaintza Seelen UI ekosistema osoan erabiltzen diren mota normalizatuak
- Widget koherentea ezartzeko interfazeak eskaintzea
- Gaitu motako segurtasuna widget garapenean zehar
- Oinarrizko aplikazioaren eta widgeten arteko kontratu partekatuak zerbitzatu

## **Erabileruse**

```ts
import { StructInterface } from "@seelen-ui/lib/types";

const myObject: StructInterface = { ... }
```

## **Funtsezko ezaugarriak:**

- **Core motako definizioak**: Seelen UI aplikazioak erabiltzen dituen
  oinarrizko motak
- **Widget kontratuak**: Widgetek bateragarritasunerako inplementatu behar
  dituzten interfazeak
- **Partekatutako ereduak**: Plataforman zehar erabilitako datu egitura arruntak
- **Mota utilitateak**: Widget garapenerako laguntzaile motak

Mota hauek barnean bai aplikazioaren bidez eta ikusgai daude Kanpoko widget
garatzaileek ekosistema osoan koherentzia bermatzeko.
