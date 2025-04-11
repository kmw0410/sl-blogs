# Seelen UI: Tema -basiese tutoriaal - pas u lessenaar soos 'n pro aan!

![A beautifully customized desktop using Seelen UI themes](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/image.png)

Wil u u Windows -tafelblad 'n vars nuwe voorkoms gee? Seelen UI maak dit maklik
met sy kragtige temastelsel. Hierdie gids sal u deur die basiese beginsels van
hoe Temas werk - geen koderingservaring nodig nie!

## Spesiale ontfoutweergawe vir temaskeppers

Voordat ons begin, moet die tema -skeppers van ons spesiale weet **ontfout
weergawe** van Seelen UI! Met hierdie weergawe kan u:

- Inspekteer elemente net soos 'n webblad (CTRL+SHIFT+I Open
  ontwikkelaarstoerusting)
- Kyk Live HTML/CSS -veranderinge
- Toets tema -wysigings onmiddellik
- Ontfout -stylprobleme maklik

Laai die ontfoutweergawe van ons af
[Nightly stel kanaal vry](https://seelen.io/apps/seelen-ui/releases/nightly)
(Kyk vir lêers wat eindig met `-debug.exe`, soos
`Seelen.UI_2.2.8+20250410073056_x64-setup-debug.exe`).

### Wil u meer leer oor nagtelike gebou?

Kyk na ons
[Nightly builds verduidelik](https://seelen.io/blog/seelen-ui-nightly) artikel!

## Begrip van temalêers

Dink aan Seelen UI -temas soos lae verf. U kan verskeie temas toepas op Een
keer, en net soos om te skilder, is die orde belangrik! Temas kan alles verander
van kleure tot vensterstyle.

Daar is drie maniere waarop temas verpak kan word:

1. **Enkele lêertema** (.yml -lêer)
2. **Tema -gids** (bevat verskeie lêers)
3. **Saamgeperste tema** (.slu -lêer - Spesiale Seelen UI -formaat)

### Waar om u temas te plaas

Alle temas gaan in hierdie lêergids op u rekenaar:

```text
C:\Users\{YOUR_USERNAME}\AppData\Roaming\com.seelen.seelen-ui\themes
```

### Tema -vouerstruktuur

Hier is hoe 'n tema -lêergids binne lyk:

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

## Inspired: Voorbeeld temas

Nie seker waar of hoe om te begin nie? Seelen UI kom met verskeie ingeboude
temas wat u Kan as inspirasie gebruik! Kyk na die
[Standaardtemasversameling](https://github.com/eythaann/Seelen-UI/tree/master/static/themes)
om te sien hoe dit gemaak word.

## Werk met kleure - dit is makliker as wat jy dink!

Seelen UI tel outomaties u Windows -aksentkleur op en maak dit Beskikbaar in
verskillende skakerings deur eenvoudige kleurveranderlikes.

### U belangrikste aksentkleur

Hierdie veranderlikes gebruik die kleur wat u in Windows -instellings stel:

- `--config-accent-color`: Die suiwer kleur (soos #ffbbaa)
- `--config-accent-color-rgb`: Dieselfde kleur in RGB -formaat (255, 187, 170)

### Die volledige kleurfamilie

Seelen UI skep 'n hele palet uit u aksentkleur:

![Visual guide to Seelen UI's color palette](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/colors.png)

Hier is die volledige lys met beskikbare kleure:

- Donkerste weergawe: `--config-accent-darkest-color`
- Donkerder weergawe: `--config-accent-darker-color`
- Donker weergawe: `--config-accent-dark-color`
- Gereelde weergawe: `--config-accent-color`
- Ligte weergawe: `--config-accent-light-color`
- Ligter weergawe: `--config-accent-lighter-color`
- Ligste weergawe: `--config-accent-lightest-color`

Elke kleur het ook 'n RGB -weergawe (met -RGB aan die einde). Dit is nuttig vir
Die skep van gradiënte en ander kleureffekte.

As voorbeeldinstellings is 'n agtergrondkleur met ondeursigtigheid:

```css
background-color: rbga(var(--config-accent-darkest-color-rgb), 0.5);
```

### Nog meer kleuropsies

Wil u meer kleurkeuses hê? Seelen UI ontbloot tientalle addisionele
stelselkleure. Kyk hier na
[Handige kleurverwysing](https://gist.github.com/eythaann/cd9a3cda0206ce23a17f5ea00ec2ba06)
vir alle beskikbare opsies.

Pro -wenk: wanneer u Windows -aksentkleur verander, is u Seelen UI -tema
-opdaterings outomaties!
