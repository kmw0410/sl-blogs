# **Questions fréquemment posées**

## **Questions courantes**

### **Qu'est-ce que Seelen UI?**

Seelen UI est une application de bureau qui vous permet de personnaliser votre expérience Windows 10/11. Il fournit une large gamme de thèmes, widgets et plugins pour améliorer votre environnement de bureau.

***

### **L'interface utilisateur de Seelen est-elle un logiciel gratuit?**

Oui, Seelen UI est un logiciel libre. Vous pouvez télécharger et utiliser Seelen UI gratuitement.

***

### **Seelen UI modifie-t-il mon système d'exploitation?**

Non,**Seelen UI ne modifie pas votre système d'exploitation**. Il fonctionne en abonnement aux événements natifs de Windows et en les interprétant au besoin pour afficher le contenu approprié. Seelen UI lit les paramètres du système et les étend dans ses propres paramètres, mais il**ne modifie ni ne modifie les fichiers système ou les entrées de registre de base**. L'application adhère strictement aux API de Windows et n'interagit qu'avec le système d'une manière que Windows lui-même permet.

***

### **Seelen UI peut-il casser mon système d'exploitation?**

Non,**Seelen UI ne peut pas casser votre système d'exploitation**. Puisqu'il ne modifie aucun fichier ou paramètres système de base (comme expliqué dans la question précédente), il n'y a aucun risque qu'il ait causé des dommages à votre système d'exploitation. Seelen UI est conçu pour fonctionner parfaitement dans les limites des API de Windows, assurant une expérience sûre et stable.

***

### **Une mise à jour Windows peut-elle casser l'interface utilisateur de Seelen?**

Non,**ce n'est pas probable**qu'une mise à jour Windows standard cassera Seelen UI. Cependant, il y a toujours un petit risque, surtout si vous utilisez**construction expérimentale**Comme Windows Insider Builds. Ces versions comprennent souvent des changements inachevés ou instables qui pourraient potentiellement affecter les applications tierces comme Seelen UI. Pour l'expérience la plus stable, il est recommandé d'utiliser des versions stables de Windows.

***

### **Seelen UI a-t-il besoin d'une connexion Internet pour fonctionner?**

Non,**Seelen UI ne nécessite pas de connexion Internet**Pour fonctionner. L'application fonctionne parfaitement hors ligne une fois qu'il est installé. Cependant, vous aurez besoin d'une connexion Internet à:

* Télécharger le nouveau**widgets**,**plugins**, ou**thèmes**du référentiel officiel.
* Vérifiez les mises à jour de l'application ou de ses composants.

Au-delà de ces activités, Seelen UI fonctionne indépendamment sans avoir besoin d'une connexion Internet.

***

### **Comment télécharger Seelen UI?**

Vous pouvez télécharger Seelen UI à partir du[site officiel](https://seelen.io).

## **Problèmes d'utilisateur communs**

### **Problème d'écran gris / sombre**

Certains utilisateurs éprouvent un écran gris ou sombre lors de l'utilisation de l'interface utilisateur de Seelen. Ce problème est souvent causé par des applications tierces qui modifient l'apparence de Windows, comme**Micaforeveryone**.

**Solution**:

* Désactivez ces types d'applications.
* Si l'application le permet, ajoutez une interface utilisateur Seelen à une liste d'exclusion pour éviter les conflits.

***

### **Le plateau système ne fonctionne pas correctement**

Si le plateau système dans l'interface utilisateur de Seelen ne fonctionne pas correctement, cela peut être dû à des conflits avec des applications tierces qui modifient la barre des tâches Windows, telles que**Start11**,**Startallback**, ou outils similaires.

**Pourquoi cela se produit-il?**\
Le module de plateau de Seelen de l'UI nécessite l'accès au**débordement**pour travailler correctement. Ces applications peuvent interférer avec cette fonctionnalité.

**Solution**:

* Désactiver ou désinstaller tous les outils de modification de la barre des tâches tiers avant d'utiliser Seelen UI.
* Assurez-vous que Seelen UI a un accès complet au plateau système natif.

***

### **Anti-Cheat déclenché par AHK**

Certains systèmes anti-chèques peuvent détecter l'utilisation de**AutoHotKey (AHK)**, sur lequel Seelen UI s'appuie pour les raccourcis, comme une triche potentielle.

**Solution**:

* Désactivez les raccourcis de Seelen de l'interface utilisateur des paramètres avant de lancer des jeux avec des systèmes anti-triche.
* Réactivez les raccourcis après avoir terminé le jeu.
