# **СЛУ Либрари: Врсте и интерфејси**

Тхе `types` модул библиотеке СЛУ пружа збирку основног типа Дефиниције и
интерфејси који служе као темељ за развој виџета. Овај модул је осмишљен да:

- Понудите стандардизоване дефиниције типа које се користе у целој целокупној
  селени уи екосистема
- Наведите интерфејсе за доследну примену виџета
- Омогућите безбедност у врсту преко развоја виџета
- Служити као заједнички уговори између основне апликације и виџета

## **Употреба**

```ts
import { StructInterface } from "@seelen-ui/lib/types";

const myObject: StructInterface = { ... }
```

## **Кључне карактеристике:**

- **Дефиниције основних врста**: Основне врсте које користе СЕЕЛЕН УИ апликација
- **Уговори о виџету**: Интерфејси које видгети морају да спроведу за
  компатибилност
- **Заједнички модели**: Заједничке структуре података које се користе широм
  платформе
- **Тип Утилитиес**: Помоћне врсте за развој виџета

Ове врсте се конзумирају и интерно од стране апликације и изложене Екстерни
програмери виџета да би се осигурала доследност типа широм екосистема.
