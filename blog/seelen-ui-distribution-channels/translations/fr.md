# Seelen UI: méthodes d'installation et canaux de mise à jour

## Options d'installation

### Microsoft Store (MSIX)

Téléchargez la dernière version à partir du
[Microsoft Store](https://www.microsoft.com/store). C'est le plus sécurisé et
Option conviviale, avec des mises à jour automatiques.

**Avantages:**

- Mises à jour automatiques
- Vérifié et approuvé par Microsoft
- Haute sécurité et fiabilité
- Version plus légère que l'installateur .exe (aucun symbole de débogage inclus)

**Inconvénients:**

- Les mises à jour peuvent prendre 1 à 3 jours ouvrables pour l'approbation de
  Microsoft
- Plus difficile à déboguer et à signaler les problèmes

---

### Winget (Msix)

Installez la dernière version en utilisant la commande suivante:

> Winget Install --id Seelen.selelenuii

Offre les mêmes avantages que la version Microsoft Store avec l'ajout commodité
de l'installation en ligne de commande.

---

### .EXE INSTALLER

Téléchargez l'installateur setup.exe depuis le
[Page de versions](https://github.com/eythaann/Seelen-UI/releases) et
exécutez-le.

**Avantages:**

- Mises à jour immédiates disponibles
- Reçoit des notifications de mise à jour dès que de nouvelles versions sont
  publiées
- Mieux à des fins de débogage

**Inconvénients:**

- Peut déclencher des avertissements antivirus (non signé numériquement)
- Plus grande taille de fichier (comprend des symboles de débogage)

## Mettre à jour les canaux

> Quelle que soit la chaîne de mise à jour choisie, toutes les versions
> reçoivent automatiquement Mises à jour. Les canaux instables reçoivent
> également des mises à jour de canaux plus stables (par exemple, Nightly reçoit
> des mises à jour de la nuit et de la version bêta / version).

### Libération (stable)

Le canal le plus sécurisé et recommandé pour tous les utilisateurs.

**Caractéristiques:**

- Testé soigneusement sans bogues critiques
- Idéal pour la production et l'utilisation quotidienne
- Disponible sur Microsoft Store, Winget (.msix) et AS .exe Installer

### Bêta

Pour les utilisateurs qui souhaitent un accès précoce à de nouvelles
fonctionnalités avant la sortie officielle.

**Caractéristiques:**

- Comprend les fonctionnalités à venir sous test
- Peut contenir des bugs mineurs
- Mises à jour plus fréquentes que stable
- Disponible uniquement sous le nom d'installateur .exe

### Chaque nuit

Pour les utilisateurs et les développeurs avancés qui souhaitent les derniers
changements.

**Caractéristiques:**

- Contient des changements les plus récents et non testés
- Peut inclure des bogues ou des fonctionnalités incomplètes
- Mis à jour quotidiennement ou avec chaque changement de code significatif
- Disponible uniquement sous le nom d'installateur .exe

En savoir plus sur la chaîne nocturne dans notre
[Seelen Ui Nightly](https://seelen.io/blog/nightly) documentation.

## Mécanisme de mise à jour: setup.exe vs msix

- **MSIX:** Mises à jour gérées automatiquement par Microsoft Store
- **Setup.exe:** Comprend un mise à jour intégré qui vous informe lorsque les
  mises à jour sont disponible

![Seelen UI update notification](https://github.com/Seelen-Inc/slu-blog/blob/master/blog/seelen-ui-distribution-channels/image.png?raw=true)

Lorsqu'une mise à jour est disponible:

1. Cliquez sur la notification
2. Le mise à jour téléchargera et installera la mise à jour
3. L'application redémarrera automatiquement
