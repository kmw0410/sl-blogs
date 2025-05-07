# **Biblioteca SLU: riferimento API**

Il modulo API fornisce implementazioni concrete e classi di utilità che 
Abstract the RAW Application API, fungendo da facciata per gli sviluppatori per 
Integrazione del widget.

## **Scopo**

* Implementa interfacce da `/types` con lezioni pronte all'uso
* Abstracts complessità API di basso livello
* Fornisce metodi di utilità per operazioni comuni
* Funge da strato di interazione primario tra i widget e la SLU 
  applicazione

## **Utilizzo**

È possibile utilizzare la libreria secondo necessità. Ecco un esempio di base:

```ts
import { StructClass } from "@seelen-ui/lib/api";

const widgetApi: StructClass = await StructClass.geAsync();
const something = widgetApi.getSomething();
const somethingAsync = await widgetApi.getSomethingAsync();

await widgetApi.doSomething();
```

## **Note importanti:**

1. Questa libreria API funziona solo quando viene eseguita all'interno di un'esecuzione del widget dell'interfaccia utente Seelen 
   ambiente
2. Tentare di usarlo in node.js o i contesti del browser standard lanceranno 
   errori
3. I widget che utilizzano questa API devono aggiornarlo per funzionare correttamente con 
   La versione più ultima dell'interfaccia utente di Seelen
