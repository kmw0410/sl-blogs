# **Bibliothèque SLU: Types et interfaces**

La `types` Le module de la bibliothèque SLU fournit une collection de type
essentiel Définitions et interfaces qui servent de base au développement du
widget. Ce module est conçu pour:

- Offrir des définitions de type standardisé utilisées dans tout l'écosystème de
  l'interface utilisateur Seelen
- Fournir des interfaces pour une implémentation de widget cohérente
- Activer la sécurité de type à travers le développement du widget
- Servir de contrats partagés entre l'application de base et les widgets

## **Usage**

```ts
import { StructInterface } from "@seelen-ui/lib/types";

const myObject: StructInterface = { ... }
```

## **Caractéristiques clés:**

- **Définitions de type de base**: Types fondamentaux utilisés par l'application
  Seelen UI
- **Contrats de widget**: Les interfaces que les widgets doivent implémenter
  pour la compatibilité
- **Modèles partagés**: Structures de données courantes utilisées sur la
  plate-forme
- **Tapez les services publics**: Types d'aide pour le développement du widget

Ces types sont consommés à la fois en interne par la demande et exposés
Développeurs de widgets externes pour assurer la cohérence des types à travers
l'écosystème.
