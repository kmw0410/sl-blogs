# **Seelen UI: méthodes d'installation et canaux de mise à jour**

## **Options d'installation**

### **Microsoft Store (MSIX)**

Téléchargez la dernière version de la boutique Microsoft. C'est le plus sécurisé
 et l'option conviviale, avec des mises à jour automatiques.

*   Avantages:
    *   Mises à jour automatiques.
    *   Vérifié et approuvé par Microsoft.
    *   Sécurité élevée et fiabilité.
    *   Version Lightweighter que l'installateur .exe car cette version ne fait pas
         Comprend des symboles de débogage.
*   Inconvénients:
    *   Les mises à jour peuvent prendre 1 à 3 jours ouvrables pour être approuvée.
    *   Plus difficile à déboguer et à signaler les problèmes.

***

### **Winget (Msix)**

Installez la dernière version en utilisant la commande suivante:

```pwsh
winget install --id Seelen.SeelenUI
```

Mêmes avantages et inconvénients de Microsoft Store avec le plus d'une installation rapide via
 ligne de commande.

***

### \*\*. EXE INSTALLER \*\*

Téléchargez l'installateur setup.exe à partir de la page des versions et exécutez-la.

*   Avantages:
    *   Installation plus rapide avec des mises à jour immédiates.
    *   Reçoit des notifications pour les nouvelles versions dès qu'elles sont disponibles.
*   Inconvénients:
    *   Non signé numériquement, ce qui peut déclencher des avertissements antivirus.
    *   Moins léger que l'installateur MSIX car cette version comprend le débogage
         symboles.

## **Mettre à jour les canaux**

> Independent du canal de mise à jour Toutes les versions reçoivent des mises à jour automatiques,
>  De plus, si vous utilisez un canal de mise à jour instable, vous recevrez également des mises à jour de la
>  Chans de mise à jour plus stables, exemple: recevoir les mises à jour de la nuit de la nuit mais
>  également de la version bêta et de la libération

### **Libération (stable)**

Le canal le plus sécurisé et recommandé pour tous les utilisateurs.

*   Caractéristiques:
    *   Testé soigneusement sans bogues critiques.
    *   Idéal pour la production et l'utilisation quotidienne.
    *   Disponible sur Microsoft Store, Winget, .msix et .exe.

### **Bêta**

Destiné aux utilisateurs qui souhaitent essayer de nouvelles fonctionnalités avant d'être officiellement publiées.
 Cette chaîne comprend des bêtas et des candidats à la sortie.

*   Caractéristiques:
    *   Contient de nouvelles fonctionnalités sous test.
    *   Pourrait avoir des bugs mineurs.
    *   Mises à jour plus fréquentes que la version stable.
    *   Disponible uniquement en tant que .exe sur la page des versions.

### **Chaque nuit**

Pour les utilisateurs et les développeurs avancés qui souhaitent accéder aux dernières modifications et
 Caractéristiques expérimentales.

*   Caractéristiques:
    *   Comprend les changements les plus récents, mais pas complètement testés.
    *   Peut contenir des insectes ou des fonctionnalités inachevées.
    *   Mis à jour quotidiennement ou avec chaque changement de code significatif.
    *   Uniquement disponible en .exe sur la page des versions.

En savoir plus sur [Seelen ui](./nightly.md)

## **Recevoir des mises à jour sur setup.exe vs msix**

Sur MSIX, les mises à jour sont gérées par le Microsoft Store, mais sur setup.exe, ils sont
 non, donc un midater est inclus avec l'application que cela vous montrera un
 notification lorsqu'une mise à jour est disponible.

![Seelen UI update notification on settings window](https://github.com/Seelen-Inc/slu-blog/blob/master/blog/seelen-ui-distribution-channels/image.png?raw=true)

Si vous cliquez sur la notification, il commencera à télécharger et à installer le
 Mise à jour, après quoi il redémarrera automatiquement l'application.
