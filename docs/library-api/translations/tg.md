# **Китобхонаи SLU: Scriend API**

Модули API татбиқҳои мушаххас ва синфҳои коммуналиро пешниҳод мекунад Ҳолати хом
API-ро ҷудо кунед Виркати виҷд.

## **Мащсад**

- Интерфейтҳоро аз `/types` бо синфҳои омодагӣ
- Тафтишҳо мушкилиятҳои API-ро баланд
- Усулҳои коммуналӣ барои амалиёти умумӣ таъмин менамояд
- Ҳамчун қабати ибтидоии муштарак байни виҷет ва Slu хизмат мекунад изҳорот

## **Нархгузорӣ**

Шумо метавонед китобхонаеро, ки лозим аст, истифода баред. Ин аст мисоли асосӣ:

```ts
import { StructClass } from "@seelen-ui/lib/api";

const widgetApi: StructClass = await StructClass.geAsync();
const something = widgetApi.getSomething();
const somethingAsync = await widgetApi.getSomethingAsync();

await widgetApi.doSomething();
```

## **Эзоҳҳои муҳим:**

1. Ин китобхонаи API танҳо ҳангоми идора кардани виҷети UI-и UI кор мекунад
   муҳит
2. Кӯшиши истифодаи онро дар гиреҳ.Jс ё контекстҳои браузери стандартӣ
   мепартоянд хатогиҳо
3. Бо истифода аз ин API бояд онро бо мақсади дуруст кор кардан лозим ояд охирин
   версияи seelen ui
