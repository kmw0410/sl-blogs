# Selen UI: Basics -tutorial voor thema - Pas uw bureaublad aan als een pro!

![A beautifully customized desktop using Seelen UI themes](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/image.png)

Wilt u uw Windows -bureaublad een nieuwe nieuwe look geven? Selen UI maakt het
gemakkelijk met zijn krachtige themasysteem. Deze gids zal je door de
basisprincipes leiden van hoe Thema's werken - geen coderingservaring vereist!

## Speciale foutopsporingsversie voor thema -makers

Voordat we beginnen, moeten thema -makers weten over onze special **Debug
-versie** van selen ui! Met deze versie kunt u:

- Inspecteer elementen net als een webpagina (Ctrl+Shift+I Opens Developer
  Tools)
- Zie Live HTML/CSS -wijzigingen
- Test thema wijzigingen onmiddellijk
- Debug -styling -problemen gemakkelijk

Download de foutopsporingsversie van onze
[Nachtelijk releases kanaal](https://seelen.io/apps/seelen-ui/releases/nightly)
(Zoek naar bestanden die eindigen met `-debug.exe`, leuk vinden
`Seelen.UI_2.2.8+20250410073056_x64-setup-debug.exe`).

### Wil je meer leren over nachtelijke builds?

Bekijk onze
[Nachtelijke builds uitgelegd](https://seelen.io/blog/seelen-ui-nightly)
artikel!

## Themebestanden begrijpen

Denk aan Selen UI -thema's zoals lagen verf. U kunt meerdere thema's toepassen
op Eens, en net als schilderen, is de volgorde belangrijk! Thema's kunnen alles
veranderen Van kleuren tot raamstijlen.

Er zijn drie manieren waarop thema's kunnen worden verpakt:

1. **Enkel bestandsthema** (.yml -bestand)
2. **Themamap** (bevat meerdere bestanden)
3. **Gecomprimeerd thema** (.slu -bestand - Special Seelen UI -indeling)

### Waar je je thema's kunt plaatsen

Alle thema's gaan in deze map op uw computer:

```text
C:\Users\{YOUR_USERNAME}\AppData\Roaming\com.seelen.seelen-ui\themes
```

### Themamapstructuur

Dit is hoe een themamap eruit ziet van binnen:

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

## Geïnspireerd worden: voorbeeldthema's

Weet u niet zeker waar of hoe te beginnen? Selen UI wordt geleverd met
verschillende ingebouwde thema's kan gebruiken als inspiratie! Bekijk de
[Standaard thema's verzameling](https://github.com/eythaann/Seelen-UI/tree/master/static/themes)
om te zien hoe ze worden gemaakt.

## Werken met kleuren - het is gemakkelijker dan je denkt!

Selen UI pakt automatisch de kleur van uw Windows -accent op en maakt het
Beschikbaar in verschillende tinten via eenvoudige kleurvariabelen.

### Uw belangrijkste accentkleur

Deze variabelen gebruiken de kleur die u in Windows -instellingen hebt
ingesteld:

- `--config-accent-color`: De pure kleur (zoals #ffbbaa)
- `--config-accent-color-rgb`: Dezelfde kleur in RGB -formaat (255, 187, 170)

### De complete kleurenfamilie

Selen UI maakt een heel palet uit uw accentkleur:

![Visual guide to Seelen UI's color palette](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/colors.png)

Hier is de volledige lijst met beschikbare kleuren:

- Donkerste versie: `--config-accent-darkest-color`
- Donkere versie: `--config-accent-darker-color`
- Donkere versie: `--config-accent-dark-color`
- Regelmatige versie: `--config-accent-color`
- Lichte versie: `--config-accent-light-color`
- Lichtere versie: `--config-accent-lighter-color`
- Lichtste versie: `--config-accent-lightest-color`

Elke kleur heeft ook een RGB -versie (met -RGB aan het einde). Dit is handig
voor Drading en andere kleureffecten creëren.

Als voorbeeldinstellingen een achtergrondkleur met dekking:

```css
background-color: rbga(var(--config-accent-darkest-color-rgb), 0.5);
```

### Nog meer kleuropties

Wilt u meer kleurenkeuzes? Selen UI legt tientallen extra systeemkleuren bloot.
Bekijk dit
[Handige kleurreferentie](https://gist.github.com/eythaann/cd9a3cda0206ce23a17f5ea00ec2ba06)
voor alle beschikbare opties.

Pro -tip: wanneer uw Windows Accent -kleur verandert, updates uw Selen UI -thema
automatisch!
