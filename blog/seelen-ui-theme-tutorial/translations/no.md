# Seelen UI: Tema Basics Tutorial - Tilpass skrivebordet ditt som en proff!

![A beautifully customized desktop using Seelen UI themes](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/image.png)

Vil du gi Windows -skrivebordet ditt et nytt nytt utseende? Seelen UI gjør det
enkelt med det kraftige temasystemet. Denne guiden vil lede deg gjennom det
grunnleggende om hvordan Temaer fungerer - ingen kodingserfaring kreves!

## Spesiell feilsøkingsversjon for tema skapere

Før vi begynner, bør temaprettere vite om vår spesielle **feilsøkingsversjon**
av Seelen UI! Denne versjonen lar deg:

- Inspiser elementer akkurat som en webside (Ctrl+Shift+I åpner utviklerverktøy)
- Se live HTML/CSS -endringer
- Test -temamodifikasjoner umiddelbart
- DEBUG -styling problemer lett

Last ned feilsøkingsversjonen fra vår
[Nightly Releases Channel](https://seelen.io/apps/seelen-ui/releases/nightly)
(Se etter filer som slutter med `-debug.exe`, som
`Seelen.UI_2.2.8+20250410073056_x64-setup-debug.exe`).

### Vil du lære mer om nattlige bygg?

Sjekk ut vår [Nattlige bygg forklarte](https://seelen.io/blog/seelen-ui-nightly)
artikkel!

## Forstå temafiler

Tenk på Seelen UI -temaer som lag med maling. Du kan bruke flere temaer på En
gang, og akkurat som å male, betyr bestillingen! Temaer kan endre alt Fra farger
til vindusstiler.

Det er tre måter temaer kan pakkes på:

1. **Enkelt filtema** (.yml fil)
2. **Temappemappe** (Inneholder flere filer)
3. **Komprimert tema** (.slu -fil - Spesiell Seelen UI -format)

### Hvor du kan sette temaene dine

Alle temaer går i denne mappen på datamaskinen din:

```text
C:\Users\{YOUR_USERNAME}\AppData\Roaming\com.seelen.seelen-ui\themes
```

### Temappmappestruktur

Slik ser en temamappe ut på innsiden:

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

## Blir inspirert: Eksempel temaer

Ikke sikker på hvor eller hvordan du skal begynne? Seelen UI kommer med flere
innebygde temaer deg kan bruke som inspirasjon! Sjekk ut
[Standard tema -samling](https://github.com/eythaann/Seelen-UI/tree/master/static/themes)
for å se hvordan de er laget.

## Arbeide med farger - det er lettere enn du tror!

Seelen UI plukker automatisk opp Windows Accent -fargen og lager den
Tilgjengelig i forskjellige nyanser gjennom enkle fargevariabler.

### Din viktigste aksentfarge

Disse variablene bruker fargen du angir i Windows -innstillinger:

- `--config-accent-color`: Den rene fargen (som #ffbbaa)
- `--config-accent-color-rgb`: Samme farge i RGB -format (255, 187, 170)

### Den komplette fargefamilien

Seelen UI lager en hel palett fra aksentfargen din:

![Visual guide to Seelen UI's color palette](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/colors.png)

Her er hele listen over tilgjengelige farger:

- Mørkeste versjon: `--config-accent-darkest-color`
- Mørkere versjon: `--config-accent-darker-color`
- Mørk versjon: `--config-accent-dark-color`
- Vanlig versjon: `--config-accent-color`
- Lett versjon: `--config-accent-light-color`
- Lettere versjon: `--config-accent-lighter-color`
- Letteste versjon: `--config-accent-lightest-color`

Hver farge har også en RGB -versjon (med -RGB på slutten). Dette er nyttig for
skape gradienter og andre fargeeffekter.

Som eksempel innstillinger en bakgrunnsfarge med opacitet:

```css
background-color: rbga(var(--config-accent-darkest-color-rgb), 0.5);
```

### Enda flere fargealternativer

Vil du ha flere fargevalg? Seelen UI utsetter dusinvis av ekstra systemfarger.
Sjekk ut dette
[Handy Color Reference](https://gist.github.com/eythaann/cd9a3cda0206ce23a17f5ea00ec2ba06)
for alle tilgjengelige alternativer.

Pro -tips: Når Windows Accent -fargen endres, oppdateres Seelen UI -temaet
automatisk!
