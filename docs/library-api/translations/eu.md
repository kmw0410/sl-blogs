# **SLU liburutegia: APIaren erreferentzia**

API moduluak hormigoizko inplementazio eta erabilgarritasun klaseak eskaintzen
ditu Laburpena Aplikazio gordinaren APIa, garatzaileentzako fatxada gisa balio
du Widget integrazioa.

## **Asmo**

- Inplementazio interfazeak `/types` Erabilitako klaseekin
- Laburpenak Maila baxuko API konplexutasunak
- Eragiketa arruntetarako erabilgarritasun metodoak eskaintzen ditu
- Widgeten eta SLUren arteko elkarreragin geruza nagusia da eskabide

## **Erabileruse**

Liburutegia behar duzun moduan erabil dezakezu. Hona hemen oinarrizko adibidea:

```ts
import { StructClass } from "@seelen-ui/lib/api";

const widgetApi: StructClass = await StructClass.geAsync();
const something = widgetApi.getSomething();
const somethingAsync = await widgetApi.getSomethingAsync();

await widgetApi.doSomething();
```

## **Ohar garrantzitsuak:**

1. API liburutegi honek Seelen UI widget exekuzio baten barruan exekutatzean
   bakarrik funtzionatzen du ingurugiro
2. Node.js-en edo arakatzailearen testuinguru estandarretan erabiltzen saiatzeak
   botako du akats
3. API hau erabiltzen duten widgetek eguneratu behar dute behar bezala funtziona
   dezan Seelen UIren azken bertsioa
