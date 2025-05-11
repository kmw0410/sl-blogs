# **Biblioteca SLU: referință API**

Modulul API oferă implementări concrete și clase de utilități care Rezumat
API-ul de aplicație brută, care servește ca fațadă prietenoasă pentru
dezvoltatori Integrarea widget -ului.

## **Scop**

- Implementează interfețe din `/types` cu clase gata de utilizare
- Rezumate complexități API la nivel scăzut
- Oferă metode de utilitate pentru operațiuni comune
- Servește ca stratul principal de interacțiune între widget -uri și SLU
  aplicație

## **Utilizare**

Puteți utiliza biblioteca după cum este necesar. Iată un exemplu de bază:

```ts
import { StructClass } from "@seelen-ui/lib/api";

const widgetApi: StructClass = await StructClass.geAsync();
const something = widgetApi.getSomething();
const somethingAsync = await widgetApi.getSomethingAsync();

await widgetApi.doSomething();
```

## **Note importante:**

1. Această bibliotecă API funcționează numai atunci când rulează într -o
   execuție a widget -ului SEELEN UI mediu
2. Încercarea de a -l folosi în Node.js sau contextele standard ale browserului
   vor arunca erori
3. Widget -urile care utilizează această API trebuie să o actualizeze pentru a
   funcționa corect cu Cea mai recentă versiune a lui Seelen UI
