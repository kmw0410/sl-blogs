# **Slu Barburgs: API Referenz**

Den API Modul liwwert konkret Onbezuelungen an Déngschtklassen déi 
abstrakt der raw Applikatioun api, servéiert als Entwéckler-frëndlech Fassada fir 
Widget Integratioun.

## **Zweck**

* Implementéiert Interfaces aus `/types` Mat prett-zu-benotzt Klassen
* Abstracts niddereg-Niveau API-Komplexitéiten
* Bitt Utility Methoden fir allgemeng Operatiounen
* Déngt als déi primär Interaktiounsschicht tëscht Widgets an de Slu 
  D'Applikatioun

## **Otzt**

Dir kënnt d'Bibliothéik benotzen wéi néideg. Hei ass e Basis Beispill:

```ts
import { StructClass } from "@seelen-ui/lib/api";

const widgetApi: StructClass = await StructClass.geAsync();
const something = widgetApi.getSomething();
const somethingAsync = await widgetApi.getSomethingAsync();

await widgetApi.doSomething();
```

## **Wichteg Notizen:**

1. Dës API Bibliothéik funktionnéiert nëmme wann Dir bannent enger Seellen UI Widget Ausféierung leeft 
   Ëmwelt
2. Versicht et an Node ze benotzen.Js oder Standard Browser Kontexter 
   Feeler
3. D'Widgets mat dësem API muss et aktualiséieren fir richteg ze schaffen 
   Litteest Versioun vu Seelen Ui
