# Seelen Ui: Themen Basics Tutorial - Personnaliséiere vun Ärem Desktop wéi e Pro!

![A beautifully customized desktop using Seelen UI themes](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/image.png)

Wëllt Dir Är Windows Desktop e frësche neie Look ginn? Seelen Ui mécht et
einfach mat säi staarken Thema System. Dëse Guide gëtt Iech duerch d'Grondlage
vu wéi Themen schaffen - keng Coding Erfahrung erfuerderlech!

## Speziell Debug Versioun fir Thema Creatoren

Ier mer ufänken, datt d'Thema Creatoren iwwer eis speziell wëssen **Debug
Versioun** vum seelen Ui! Dës Versioun léisst Iech:

- Ënnersäitlech Elementer just wéi eng Websäit (Ctrl + Shift + Ech Opentwéckelen
  Tools)
- Kuckt Live HTML / CSS ännert
- Test Thema Ännerungen direkt
- Debug Stylingsproblemer liicht

Luet d'Debug Versioun vun eisem erof
[Nightly Verëffentlechungen Kanal](https://seelen.io/apps/seelen-ui/releases/nightly)
(Kuckt fir Dateien déi ophalen `-debug.exe`, wéi
`Seelen.UI_2.2.8+20250410073056_x64-setup-debug.exe`).

### Wëllt Dir méi iwwer Nightly baut léieren?

Préift eis
[Nightly baut erkläert erkläert](https://seelen.io/blog/seelen-ui-nightly)
Artikel!

## Thema Dateien ze verstoen

Denkt un ze gesinn Ui Themen wéi Schichten vu Faarwen. Dir kënnt verschidde
Themen uwenden Eemol, a wéi grad wéi Molerei, ass d'Méiglechkeeten egal! Themen
kënnen alles änneren aus Faarwen zu Fenster Stiler.

Et ginn dräi Weeër, déi Themen kënne paket ginn:

1. **Eenzelt DATabel Fort** (.yml Datei)
2. **Thema Dossier** (enthält méi Dateien)
3. **Kompriméiert Thema** (.Slu Datei - speziell Sockelen Ui Format)

### Wou fir Är Themen ze setzen

All Themen ginn an dësem Dossier op Ärem Computer:

```text
C:\Users\{YOUR_USERNAME}\AppData\Roaming\com.seelen.seelen-ui\themes
```

### Thema Folder Struktur

Hei ass wat en Thema Folder aus wéi bannen ausgesäit:

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

## Inspiréiert ginn: Beispill Themen

Net sécher wou oder wéi ufänken? Seelen Ui kënnt mat e puer gebauten-an Themen
déi Dir kann als Inspiratioun benotzen! Préift de
[Standard Themen Sammlung](https://github.com/eythaann/Seelen-UI/tree/master/static/themes)
fir ze kucken wéi se gemaach hunn.

## Schafft mat Faarwen - et ass méi einfach wéi Dir denkt!

Seelen Ui picken automatesch Är Windows Akzenter Faarf an mécht et Verfügbar a
verschiddene Schiet duerch einfach Faarfvariabelen.

### Är Haaptbehälter Faarf

Dës Variabelen benotzen d'Faarf déi Dir an Windows Astellunge gesat hutt:

- `--config-accent-color`: Déi reng Faarf (wéi #ffbbaa)
- `--config-accent-color-rgb`: Déiselwecht Faarf am RGB Format (255, 187, 170)

### Déi komplett Faarffamill

Seelen Ui erstellt eng ganz Palette vun Ärer Akzenter Faarf:

![Visual guide to Seelen UI's color palette](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/colors.png)

Hei ass déi ganz Lëscht vu verfügbare Faarwen:

- Däischterste Versioun: `--config-accent-darkest-color`
- Däischter Versioun: `--config-accent-darker-color`
- Däischter Versioun: `--config-accent-dark-color`
- Regelméisseg Versioun: `--config-accent-color`
- Liicht Versioun: `--config-accent-light-color`
- Méi hell Versioun: `--config-accent-lighter-color`
- Liichsten Versioun: `--config-accent-lightest-color`

All Faarf huet och eng RGB Versioun (mat -gb um Enn). Dëst ass nëtzlech fir
GRADIES AARBECHT AN ANER Faarf Effekter erstellen.

Als Beispill Astellungen eng Hannergrondfaarf mat Opazitéit:

```css
background-color: rbga(var(--config-accent-darkest-color-rgb), 0.5);
```

### Nach méi Faarfoptiounen

Wëllt méi Faarf Wiel? Seelen Ui exponéiert Dosende vun zousätzlech System
Faarwen. Préift dëst
[praktesch Faarf Referenz](https://gist.github.com/eythaann/cd9a3cda0206ce23a17f5ea00ec2ba06)
fir all verfügbar Optiounen.

Pro Tipp: Wann Är Fënstere akzenter Faarf ännert, ännert Är seelen UI Thema
Updates automatesch!
