# **Bibliothèque SLU: référence de l'API**

Le module API fournit des implémentations concrètes et des classes d'utilité qui
Résumé L'API d'application brute, servant de façade conviviale pour les
développeurs pour Intégration du widget.

## **But**

- Implémente les interfaces de `/types` avec des cours prêts à l'emploi
- Résumé Complexités d'API de bas niveau
- Fournit des méthodes d'utilité pour les opérations communes
- Sert de couche d'interaction principale entre les widgets et le SLU
  application

## **Usage**

Vous pouvez utiliser la bibliothèque selon les besoins. Voici un exemple de
base:

```ts
import { StructClass } from "@seelen-ui/lib/api";

const widgetApi: StructClass = await StructClass.geAsync();
const something = widgetApi.getSomething();
const somethingAsync = await widgetApi.getSomethingAsync();

await widgetApi.doSomething();
```

## **Remarques importantes:**

1. Cette bibliothèque API ne fonctionne que lors de l'exécution dans une
   exécution de widget d'interface utilisateur Seelen environnement
2. Tenter de l'utiliser dans Node.js ou des contextes de navigateur standard
   lancera erreurs
3. Les widgets utilisant cette API doivent le mettre à jour afin de travailler
   correctement avec dernière version de Seelen UI
