# Seelen UI: Tema Basics Tutorial - Tilpas dit skrivebord som en professionel!

![A beautifully customized desktop using Seelen UI themes](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/image.png)

Vil du give dine Windows Desktop et nyt nyt look? Seelen UI gør det let med Dets
kraftfulde temasystem. Denne guide vil lede dig gennem det grundlæggende om,
hvordan Temaer fungerer - ingen kodningsoplevelse kræves!

## Special Debug -version til temaskabere

Inden vi begynder, skal temaskabere vide om vores specielle **Debug -version**
af Seelen Ui! Denne version giver dig mulighed for:

- Inspicér elementer ligesom en webside (CTRL+Shift+I åbner udviklerværktøjer)
- Se Live HTML/CSS -ændringer
- Test temaændringer øjeblikkeligt
- Debug styling problemer let

Download debug -versionen fra vores
[Nightly frigiver kanal](https://seelen.io/apps/seelen-ui/releases/nightly) (Se
efter filer, der slutter med `-debug.exe`, ligesom
`Seelen.UI_2.2.8+20250410073056_x64-setup-debug.exe`).

### Vil du lære mere om natlige bygninger?

Tjek vores
[Natlige bygninger forklarede](https://seelen.io/blog/seelen-ui-nightly)
Artikel!

## Forståelse af temafiler

Tænk på Seelen UI -temaer som lag af maling. Du kan anvende flere temaer på En
gang, og ligesom at male, betyder ordren! Temaer kan ændre alt Fra farver til
vinduesstilarter.

Der er tre måder temaer kan pakkes på:

1. **Enkelt filtema** (.yml -fil)
2. **Tema -mappe** (indeholder flere filer)
3. **Komprimeret tema** (.slu -fil - Special Seelen UI -format)

### Hvor skal du sætte dine temaer

Alle temaer går i denne mappe på din computer:

```text
C:\Users\{YOUR_USERNAME}\AppData\Roaming\com.seelen.seelen-ui\themes
```

### Tema mappestruktur

Her er, hvordan en temamappe ser ud indeni:

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

## Bliver inspireret: Eksempel temaer

Ikke sikker på, hvor eller hvordan man starter? Seelen UI leveres med flere
indbyggede temaer dig Kan bruge som inspiration! Tjek
[Standard temaer samling](https://github.com/eythaann/Seelen-UI/tree/master/static/themes)
at se, hvordan de er lavet.

## Arbejde med farver - det er lettere, end du tror!

Seelen UI henter automatisk din Windows -accentfarve og gør den Fås i
forskellige nuancer gennem enkle farvevariabler.

### Din vigtigste accentfarve

Disse variabler bruger den farve, du indstiller i Windows -indstillinger:

- `--config-accent-color`: Den rene farve (som #ffbbaa)
- `--config-accent-color-rgb`: Samme farve i RGB -format (255, 187, 170)

### Den komplette farvefamilie

Seelen UI opretter en hel palet fra din accentfarve:

![Visual guide to Seelen UI's color palette](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/colors.png)

Her er den fulde liste over tilgængelige farver:

- Darkest version: `--config-accent-darkest-color`
- Mørkere version: `--config-accent-darker-color`
- Mørk version: `--config-accent-dark-color`
- Regelmæssig version: `--config-accent-color`
- Let version: `--config-accent-light-color`
- Lettere version: `--config-accent-lighter-color`
- Leteste version: `--config-accent-lightest-color`

Hver farve har også en RGB -version (med -RGB i slutningen). Dette er nyttigt
til Oprettelse af gradienter og andre farveeffekter.

Som eksempelindstillinger en baggrundsfarve med opacitet:

```css
background-color: rbga(var(--config-accent-darkest-color-rgb), 0.5);
```

### Endnu flere farvemuligheder

Vil du have flere farvevalg? Seelen UI udsætter snesevis af yderligere
systemfarver. Tjek dette
[Handy farvehenvisning](https://gist.github.com/eythaann/cd9a3cda0206ce23a17f5ea00ec2ba06)
For alle tilgængelige muligheder.

Pro tip: Når dine Windows -accentfarve ændres, opdaterer dine Seelen UI
-temaopdateringer automatisk!
