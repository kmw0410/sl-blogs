# Seelen UI: Tema Basics Tutorial - Anpassa skrivbordet som en proffs!

![A beautifully customized desktop using Seelen UI themes](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/image.png)

Vill du ge ditt Windows -skrivbord ett nytt nytt utseende? Seelen UI gör det
enkelt med dess kraftfulla temasystem. Den här guiden kommer att leda dig genom
grunderna i hur Teman fungerar - ingen kodningsupplevelse krävs!

## Speciell felsökningsversion för tema skapare

Innan vi börjar bör temaskapare veta om vår special **felsökningsversion** av
Seelen UI! Den här versionen låter dig:

- Inspektera element precis som en webbsida (Ctrl+Shift+I öppnar
  utvecklarverktyg)
- Se Live HTML/CSS -förändringar
- Testtema modifieringar direkt
- Felsökningstylingsproblem

Ladda ner felsökningsversionen från vår
[Nattliga utgåvor kanal](https://seelen.io/apps/seelen-ui/releases/nightly)
(Leta efter filer som slutar med `-debug.exe`som som
`Seelen.UI_2.2.8+20250410073056_x64-setup-debug.exe`).

### Vill du lära dig mer om nattliga byggnader?

Kolla in vår
[Nattliga byggnader förklarade](https://seelen.io/blog/seelen-ui-nightly)
artikel!

## Förstå temalfiler

Tänk på Seelen UI -teman som lager av färg. Du kan tillämpa flera teman på En
gång, och precis som målning, är ordningen viktig! Teman kan ändra allt Från
färger till fönsterstilar.

Det finns tre sätt som teman kan förpackas:

1. **Enkel filtema** (.yml -fil)
2. **Temamapp** (innehåller flera filer)
3. **Komprimerat tema** (.slu -fil - Special Seelen UI -format)

### Var du kan sätta dina teman

Alla teman går i den här mappen på din dator:

```text
C:\Users\{YOUR_USERNAME}\AppData\Roaming\com.seelen.seelen-ui\themes
```

### Temamappstruktur

Här är hur en temamapp ser ut inuti:

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

## Blir inspirerad: exempel teman

Är du inte säker på var eller hur man börjar? Seelen UI kommer med flera
inbyggda teman du Kan använda som inspiration! Kolla in
[Standardtema samling](https://github.com/eythaann/Seelen-UI/tree/master/static/themes)
för att se hur de är gjorda.

## Arbeta med färger - det är lättare än du tror!

Seelen UI plockar automatiskt upp din Windows -accentfärg och gör det Finns i
olika nyanser genom enkla färgvariabler.

### Din huvudsakliga accentfärg

Dessa variabler använder färgen du ställer in i Windows -inställningar:

- `--config-accent-color`: Den rena färgen (som #FFBBAAA)
- `--config-accent-color-rgb`: Samma färg i RGB -format (255, 187, 170)

### Den kompletta färgfamiljen

Seelen UI skapar en hel palett från din accentfärg:

![Visual guide to Seelen UI's color palette](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/colors.png)

Här är den fullständiga listan med tillgängliga färger:

- Darkest Version: `--config-accent-darkest-color`
- Mörkare version: `--config-accent-darker-color`
- Mörk version: `--config-accent-dark-color`
- Regelbunden version: `--config-accent-color`
- Lätt version: `--config-accent-light-color`
- Lättare version: `--config-accent-lighter-color`
- Lättaste version: `--config-accent-lightest-color`

Varje färg har också en RGB -version (med -RGB i slutet). Detta är användbart
för skapa lutningar och andra färgeffekter.

Som exempelinställningar en bakgrundsfärg med opacitet:

```css
background-color: rbga(var(--config-accent-darkest-color-rgb), 0.5);
```

### Ännu fler färgalternativ

Vill du ha fler färgval? Seelen UI avslöjar dussintals ytterligare systemfärger.
Kolla in detta
[praktisk färgreferens](https://gist.github.com/eythaann/cd9a3cda0206ce23a17f5ea00ec2ba06)
för alla tillgängliga alternativ.

Pro Tip: När din Windows Accent Color ändras, uppdateras dina Seelen UI -tema
automatiskt!
