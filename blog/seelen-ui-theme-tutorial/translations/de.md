# Seelen UI: Themen -Basics -Tutorial - Passen Sie Ihren Desktop wie einen Profi an!

![A beautifully customized desktop using Seelen UI themes](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/image.png)

Möchten Sie Ihrem Windows -Desktop einen neuen neuen Look verleihen? Seelen UI
macht es einfach mit sein leistungsstarkes Themensystem. Dieser Leitfaden führt
Sie durch die Grundlagen wie Themen funktionieren - keine Codierungserfahrung
erforderlich!

## Spezielle Debug -Version für Themenschöpfer

Bevor wir beginnen, sollten Themenschöpfer über unser Special wissen **Debugg
-Version** von Seelen UI! Mit dieser Version können Sie:

- Inspizieren Sie Elemente wie eine Webseite (Strg+Shift+Ich öffnet Entwickler
  -Tools)
- Siehe Live -HTML/CSS -Änderungen
- Testen Sie Themenänderungen sofort
- Debugg -Styling -Probleme leicht

Laden Sie die Debug -Version von unserer herunter
[Nightly veröffentlicht Kanal](https://seelen.io/apps/seelen-ui/releases/nightly)
(Suchen Sie nach Dateien, die mit enden `-debug.exe`, wie
`Seelen.UI_2.2.8+20250410073056_x64-setup-debug.exe`).

### Möchten Sie mehr über nächtliche Builds erfahren?

Schauen Sie sich unser an
[Nightly Builds erklärten](https://seelen.io/blog/seelen-ui-nightly) Artikel!

## Themendateien verstehen

Denken Sie an Seelen UI -Themen wie Farbschichten. Sie können mehrere Themen bei
anwenden Einmal und genau wie Malerei ist die Bestellung wichtig! Themen können
alles verändern Von Farben bis zu Fensterstilen.

Es gibt drei Möglichkeiten, wie Themen verpackt werden können:

1. **Einzeldateisthema** (.YML -Datei)
2. **Themenordner** (Enthält mehrere Dateien)
3. **Komprimiertes Thema** (.Slu -Datei - Spezialseelen UI -Format)

### Wo Sie Ihre Themen setzen können

Alle Themen gehen in diesem Ordner auf Ihrem Computer:

```text
C:\Users\{YOUR_USERNAME}\AppData\Roaming\com.seelen.seelen-ui\themes
```

### Themenordnerstruktur

So sieht ein Themenordner im Inneren aus:

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

## Inspirieren: Beispielthemen

Nicht sicher, wo oder wie ich anfange? Seelen UI kommt mit mehreren eingebauten
Themen, die Sie haben kann als Inspiration verwenden! Schauen Sie sich das an
[Standardthemensammlung](https://github.com/eythaann/Seelen-UI/tree/master/static/themes)
um zu sehen, wie sie gemacht werden.

## Arbeiten mit Farben - es ist einfacher als Sie denken!

Seelen UI nimmt automatisch Ihre Windows -Akzentfarbe auf und macht sie her
Erhältlich in verschiedenen Farbtönen durch einfache Farbvariablen.

### Ihre Hauptakentfarbe

Diese Variablen verwenden die Farbe, die Sie in den Windows -Einstellungen
eingestellt haben:

- `--config-accent-color`: Die reine Farbe (wie #ffbbaa)
- `--config-accent-color-rgb`: Gleiche Farbe im RGB -Format (255, 187, 170)

### Die komplette Farbfamilie

Seelen UI erstellt eine ganze Palette aus Ihrer Akzentfarbe:

![Visual guide to Seelen UI's color palette](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/colors.png)

Hier ist die vollständige Liste der verfügbaren Farben:

- Dunkelste Version: `--config-accent-darkest-color`
- Dunklere Version: `--config-accent-darker-color`
- Dunkle Version: `--config-accent-dark-color`
- Reguläre Version: `--config-accent-color`
- Lichtversion: `--config-accent-light-color`
- Leichtere Version: `--config-accent-lighter-color`
- Leichte Version: `--config-accent-lightest-color`

Jede Farbe hat auch eine RGB -Version (mit -RGB am Ende). Dies ist nützlich für
Erstellen von Gradienten und anderen Farbtonffekten.

Als Beispiel einstellt eine Hintergrundfarbe mit Deckkraft:

```css
background-color: rbga(var(--config-accent-darkest-color-rgb), 0.5);
```

### Noch mehr Farboptionen

Willst du mehr Farbauswahl? Seelen UI enthält Dutzende zusätzlicher
Systemfarben. Schauen Sie sich das an
[Handy Farbreferenz](https://gist.github.com/eythaann/cd9a3cda0206ce23a17f5ea00ec2ba06)
für alle verfügbaren Optionen.

Pro -Tipp: Wenn sich Ihre Windows -Akzentfarbe ändert automatisch!
