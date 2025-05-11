# **SLU bókasafn: API tilvísun**

API einingin veitir steypta útfærslur og gagnsemi flokka sem Ágrip RAW
Application API, þjónar sem verktaki vingjarnlegur framhlið fyrir Sameining
búnaðar.

## **Tilgangur**

- Útfærir tengi frá `/types` með tilbúnum námskeiðum
- Ágrip með litlu stigi API margbreytileika
- Veitir gagnsemiaðferðir fyrir algengar aðgerðir
- Þjónar sem aðal samspillagið milli búnaðar og SLU umsókn

## **Notkun**

Þú getur notað bókasafnið eftir þörfum. Hér er grunndæmi:

```ts
import { StructClass } from "@seelen-ui/lib/api";

const widgetApi: StructClass = await StructClass.geAsync();
const something = widgetApi.getSomething();
const somethingAsync = await widgetApi.getSomethingAsync();

await widgetApi.doSomething();
```

## **Mikilvægar athugasemdir:**

1. Þetta API bókasafn virkar aðeins þegar keyrt er innan Seelen UI búnaðar
   umhverfi
2. Reynt að nota það í Node.js eða venjulegu vafra samhengi mun henda villur
3. Geymin sem notar þetta API þarf að uppfæra það til að vinna rétt með Síðasta
   útgáfa af Seelen HÍ
