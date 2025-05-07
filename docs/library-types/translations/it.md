# **Libreria SLU: tipi e interfacce**

La `types` Il modulo della libreria SLU fornisce una raccolta di tipo essenziale 
Definizioni e interfacce che fungono da base per lo sviluppo di widget. 
Questo modulo è progettato per:

* Offrire definizioni di tipo standardizzate utilizzate in tutto l'ecosistema dell'interfaccia utente Seelen
* Fornire interfacce per l'implementazione del widget coerente
* Abilita la sicurezza del tipo attraverso lo sviluppo del widget
* Servire come contratti condivisi tra l'applicazione principale e i widget

## **Utilizzo**

```ts
import { StructInterface } from "@seelen-ui/lib/types";

const myObject: StructInterface = { ... }
```

## **Caratteristiche chiave:**

* **Definizioni del tipo principale**: Tipi fondamentali utilizzati dall'applicazione dell'interfaccia utente Seelen
* **Contratti di widget**: Interfacce che i widget devono implementare per la compatibilità
* **Modelli condivisi**: Strutture di dati comuni utilizzate attraverso la piattaforma
* **Tipo utility**: Tipi di aiuto per lo sviluppo del widget

Questi tipi sono consumati sia internamente dall'applicazione che esposti per 
sviluppatori di widget esterni per garantire la coerenza del tipo attraverso l'ecosistema.
