# **Biblioteca SLU: tipus i interfícies**

El `types` El mòdul de la biblioteca SLU proporciona una col·lecció de tipus essencial 
Definicions i interfícies que serveixen de fonament per al desenvolupament de widgets. 
Aquest mòdul està dissenyat per:

* Oferiu definicions de tipus normalitzades que s’utilitzen a l’ecosistema de la interfície d'usuari de Seelen
* Proporcioneu interfícies per a la implementació de widgets consistents
* Activa la seguretat del tipus a través del desenvolupament de widgets
* Serviu com a contractes compartits entre l’aplicació bàsica i els widgets

## **Ús**

```ts
import { StructInterface } from "@seelen-ui/lib/types";

const myObject: StructInterface = { ... }
```

## **Característiques clau:**

* **Definicions de tipus bàsic**: Tipus fonamentals utilitzat per l'aplicació de la interfície d'usuari de Seelen
* **Contractes de widget**: Interfícies que els ginys han d'implementar per a la compatibilitat
* **Models compartits**: Estructures de dades comunes utilitzades a la plataforma
* **Escriviu les utilitats**: Tipus d’ajuda per al desenvolupament de widget

Aquests tipus es consumeixen internament per l'aplicació i s'exposen 
Desenvolupadors de ginys externs per assegurar la consistència del tipus a l’ecosistema.
