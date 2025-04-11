# SEELEN UI: Tutoriel de base du thème - Personnalisez votre bureau comme un pro!

![A beautifully customized desktop using Seelen UI themes](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/image.png)

Vous voulez donner à votre bureau Windows un nouveau look? Seelen Ui facilite la
tâche avec son puissant système de thème. Ce guide vous guidera à travers les
bases de la façon dont Les thèmes fonctionnent - aucune expérience de codage
requise!

## Version de débogage spéciale pour les créateurs de thèmes

Avant de commencer, les créateurs de thème devraient connaître notre spécial
**version de débogage** de Seelen UI! Cette version vous permet:

- Inspectez les éléments comme une page Web (Ctrl + Shift + I ouvre les outils
  du développeur)
- Voir les modifications en direct HTML / CSS
- Testez instantanément les modifications du thème
- Déboguez facilement les problèmes de style

Téléchargez la version de débogage à partir de notre
[Nightly Libt Channel](https://seelen.io/apps/seelen-ui/releases/nightly)
(Recherchez des fichiers se terminant avec `-debug.exe`, comme
`Seelen.UI_2.2.8+20250410073056_x64-setup-debug.exe`).

### Vous voulez en savoir plus sur les constructions nocturnes?

Découvrez notre
[Les constructions nocturnes expliquées](https://seelen.io/blog/seelen-ui-nightly)
article!

## Comprendre les fichiers de thème

Pensez à des thèmes d'interface utilisateur Seelen comme des couches de
peinture. Vous pouvez appliquer plusieurs thèmes à Une fois, et comme la
peinture, l'ordre compte! Les thèmes peuvent tout changer des couleurs aux
styles de fenêtre.

Il y a trois façons dont les thèmes peuvent être emballés:

1. **Thème de fichier unique** (fichier .yml)
2. **Dossier thème** (contient plusieurs fichiers)
3. **Thème comprimé** (Fichier .slu - Format spécial de Seelen UI)

### Où mettre vos thèmes

Tous les thèmes vont dans ce dossier sur votre ordinateur:

```text
C:\Users\{YOUR_USERNAME}\AppData\Roaming\com.seelen.seelen-ui\themes
```

### Structure du dossier à thème

Voici à quoi ressemble un dossier à thème à l'intérieur:

```text
C:\Users\{USER}\AppData\Roaming\com.seelen.seelen-ui\themes
├── YourThemeFolder             # the name of the folder doesn't matter
│   ├── theme.yml               # Theme metadata file
│   └── seelen                  # creator's username of widgets inside
│       ├── fancy-toolbar.css   # resource's name + css extension
│       └── window-manager.scss # supports SCSS too!
├── CompactTheme.yml            # Theme metadata file with styles inside
└── CompressedTheme.slu         # Special file format used on Seelen UI
```

## S'inspirer: Exemples de thèmes

Vous ne savez pas par où ou comment commencer? Seelen UI est livré avec
plusieurs thèmes intégrés vous peut utiliser comme inspiration! Découvrez le
[Collection de thèmes par défaut](https://github.com/eythaann/Seelen-UI/tree/master/static/themes)
pour voir comment ils sont fabriqués.

## Travailler avec les couleurs - c'est plus facile que vous ne le pensez!

Seelen UI ramasse automatiquement la couleur de votre accent Windows et le fait
Disponible dans différentes nuances à travers des variables de couleur simples.

### Votre couleur accent principale

Ces variables utilisent la couleur que vous définissez dans les paramètres
Windows:

- `--config-accent-color`: La couleur pure (comme #ffbbaa)
- `--config-accent-color-rgb`: Même couleur au format RVB (255, 187, 170)

### La famille des couleurs complètes

Seelen UI crée une palette entière à partir de votre couleur d'accent:

![Visual guide to Seelen UI's color palette](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/colors.png)

Voici la liste complète des couleurs disponibles:

- Version la plus sombre: `--config-accent-darkest-color`
- Version plus sombre: `--config-accent-darker-color`
- Version sombre: `--config-accent-dark-color`
- Version régulière: `--config-accent-color`
- Version légère: `--config-accent-light-color`
- Version plus légère: `--config-accent-lighter-color`
- Version la plus légère: `--config-accent-lightest-color`

Chaque couleur a également une version RVB (avec -RGB à la fin). Ceci est utile
pour Création de gradients et autres effets de couleur.

Comme paramètres d'exemple, une couleur d'arrière-plan avec l'opacité:

```css
background-color: rbga(var(--config-accent-darkest-color-rgb), 0.5);
```

### Encore plus d'options de couleurs

Vous voulez plus de choix de couleurs? Seelen UI expose des dizaines de couleurs
système supplémentaires. Découvrez ceci
[référence de couleur pratique](https://gist.github.com/eythaann/cd9a3cda0206ce23a17f5ea00ec2ba06)
pour toutes les options disponibles.

Conseil de pro: Lorsque la couleur de votre accent Windows change, vos mises à
jour du thème de l'interface utilisateur Seelen automatiquement!
