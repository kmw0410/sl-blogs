# Seelen UI: tutorial bàsic del tema: personalitzeu el vostre escriptori com un professional!

![A beautifully customized desktop using Seelen UI themes](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/image.png)

Voleu donar a l'escriptori de Windows un aspecte nou? Seelen UI ho fa fàcil El
seu potent sistema de temes. Aquesta guia us farà passar pels fonaments bàsics
de com Els temes funcionen: no cal experiència de codificació.

## Versió especial de depuració per a creadors de temes

Abans de començar, els creadors de temes haurien de conèixer el nostre especial
**Versió de depuració** de Seelen ui! Aquesta versió us permet:

- Inspeccioneu els elements igual que una pàgina web (Ctrl+Shift+I Obre eines de
  desenvolupador)
- Consulteu els canvis en directe HTML/CSS
- Prova les modificacions del tema a l’instant
- Problemes d’estil de depuració fàcilment

Descarregueu la versió de depuració del nostre
[Canal de llançaments nocturns](https://seelen.io/apps/seelen-ui/releases/nightly)
(Busqueu fitxers que acabin amb `-debug.exe`, com
`Seelen.UI_2.2.8+20250410073056_x64-setup-debug.exe`)).

### Voleu obtenir més informació sobre les construccions nocturnes?

Consulteu el nostre
[Les construccions nocturnes explicades](https://seelen.io/blog/seelen-ui-nightly)
Article!

## Comprensió de fitxers temàtics

Penseu en temes de la interfície d'usuari de Seelen com les capes de pintura.
Podeu aplicar diversos temes a Una vegada, i igual que la pintura, la comanda
importa! Els temes poden canviar -ho tot De colors a estils de finestra.

Hi ha tres maneres en què es poden empaquetar temes:

1. **Tema d'un sol fitxer** (fitxer .yml)
2. **Carpeta temàtica** (conté diversos fitxers)
3. **Tema comprimit** (fitxer .slu - format especial de la interfície d'usuari
   de Seelen)

### On posar els vostres temes

Tots els temes es troben en aquesta carpeta al vostre ordinador:

```text
C:\Users\{YOUR_USERNAME}\AppData\Roaming\com.seelen.seelen-ui\themes
```

### Estructura de carpetes de tema

Heus aquí el que sembla una carpeta de tema a l'interior:

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

## Inspireu -vos: Exemple de temes

No esteu segur d’on o com començar? Seelen UI arriba amb diversos temes
integrats Es pot utilitzar com a inspiració! Consulteu el
[Col·lecció de temes per defecte](https://github.com/eythaann/Seelen-UI/tree/master/static/themes)
Per veure com es fan.

## Treballar amb colors: és més fàcil del que creieu!

Seelen UI recull automàticament el color de l’accent de Windows i ho fa
Disponible en diferents tons mitjançant variables de color simples.

### El vostre color principal d’accent

Aquestes variables utilitzen el color que configureu a la configuració de
Windows:

- `--config-accent-color`: El color pur (com #ffbbaa)
- `--config-accent-color-rgb`: El mateix color en format RGB (255, 187, 170)

### La família de colors completa

Seelen Ui crea una paleta sencera del vostre color d’accent:

![Visual guide to Seelen UI's color palette](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/colors.png)

Aquí teniu la llista completa de colors disponibles:

- Versió més fosca: `--config-accent-darkest-color`
- Versió més fosca: `--config-accent-darker-color`
- Versió fosca: `--config-accent-dark-color`
- Versió regular: `--config-accent-color`
- Versió lleugera: `--config-accent-light-color`
- Versió més lleugera: `--config-accent-lighter-color`
- Versió més lleugera: `--config-accent-lightest-color`

Cada color també té una versió RGB (amb -rgb al final). Això és útil per a
Creació de gradients i altres efectes del color.

Com a exemple, configuració del color de fons amb opacitat:

```css
background-color: rbga(var(--config-accent-darkest-color-rgb), 0.5);
```

### Encara més opcions de color

Voleu més opcions de color? Seelen UI exposa desenes de colors addicionals del
sistema. Consulteu això
[referència del color útil](https://gist.github.com/eythaann/cd9a3cda0206ce23a17f5ea00ec2ba06)
Per a totes les opcions disponibles.

Sug Automàticament!
