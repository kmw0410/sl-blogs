# **Biblioteca SLU: referència de l'API**

El mòdul API proporciona implementacions concretes i classes d’utilitat que
Resum l'API d'aplicacions en brut, que serveix de façana per a desenvolupadors
Integració de widgets.

## **Propòsit**

- Implementa interfícies de `/types` amb classes preparades per utilitzar
- Resums complexitats de l'API de baix nivell
- Proporciona mètodes d’utilitat per a operacions comunes
- Serveix com a capa d’interacció primària entre widgets i SLU aplicació

## **Ús**

Podeu utilitzar la biblioteca segons sigui necessari. Aquí teniu un exemple
bàsic:

```ts
import { StructClass } from "@seelen-ui/lib/api";

const widgetApi: StructClass = await StructClass.geAsync();
const something = widgetApi.getSomething();
const somethingAsync = await widgetApi.getSomethingAsync();

await widgetApi.doSomething();
```

## **Notes importants:**

1. Aquesta biblioteca de l'API només funciona quan s'executa en una execució de
   widget de la interfície d'usuari de Seelen entorn
2. Intentar utilitzar -lo en node.js o contextos del navegador estàndard errors
3. Els ginys que utilitzen aquesta API han d’actualitzar -la per treballar
   correctament la darrera versió de Seelen UI
