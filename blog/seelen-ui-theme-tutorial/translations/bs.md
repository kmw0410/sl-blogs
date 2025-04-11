# Seelen ui: TUTORIKA TEMA OSOBE - Prilagodite radnu površinu kao pro!

![A beautifully customized desktop using Seelen UI themes](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/image.png)

Želite li dati svoj Windows Desktop svježi novi izgled? Seelen ui olakšava
Njegova moćna tematska sistema. Ovaj će se vodič prošetati kroz osnove kako Teme
rade - nije potrebno iskustvo kodiranja!

## Specijalna verzija za uklanjanje pogrešaka za tematske kreativke

Prije nego što započnemo, tematski kreativci bi trebali znati o našem posebnom
**Verzija za uklanjanje pogrešaka** Seelen Ui! Ova verzija vam omogućava:

- Pregledajte elemente baš kao i web stranica (Ctrl + Shift + Otvorim alate za
  programere)
- Pogledajte Live HTML / CSS se mijenja
- Ispitajte tematske modifikacije odmah
- Ispunjavanje debug stilova lako

Preuzmite verziju za uklanjanje pogrešaka iz naše
[Noćno objavljuje kanal](https://seelen.io/apps/seelen-ui/releases/nightly)
(Potražite datoteke koje završavaju sa `-debug.exe`, kao
`Seelen.UI_2.2.8+20250410073056_x64-setup-debug.exe`).

### Želite li saznati više o noćnim gradi?

Pogledajte naše
[Noćne grade objašnjene](https://seelen.io/blog/seelen-ui-nightly) Članak!

## Razumijevanje datoteka za temu

Razmislite o seelen ui temama poput slojeva boje. Možete primijeniti više tema
na Jednom, i baš poput slikanja, nalog je važan! Teme mogu sve promijeniti od
boja do stilova prozora.

Postoje tri načina na koji se mogu pakirati teme:

1. **Jednokratna tema datoteke** (.yml datoteka)
2. **Tematska mapa** (sadrži više datoteka)
3. **Komprimilana tema** (.SLU datoteka - specijalni seelen ui format)

### Gdje staviti svoje teme

Sve teme idu u ovu mapu na vašem računaru:

```text
C:\Users\{YOUR_USERNAME}\AppData\Roaming\com.seelen.seelen-ui\themes
```

### Struktura tematske mape

Evo kakve tematske mape izgleda iznutra:

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

## Inspiriran: Primjer tema

Niste sigurni gde ili kako započeti? Seelen UI dolazi s nekoliko ugrađenih tema
Može se koristiti kao inspiracija! Pogledajte
[Zadane kolekcija tema](https://github.com/eythaann/Seelen-UI/tree/master/static/themes)
da vidim kako su napravljeni.

## Rad sa bojama - lakše je nego što mislite!

Seelen UI automatski pokupi tvoje sustave akcentne boje i čini ga Dostupno u
različitim nijansama kroz jednostavne varijable boje.

### Vaša glavna boja naglašavanja

Ove varijable koriste boju koju ste postavili u Windows postavke:

- `--config-accent-color`: Čista boja (poput #ffbbaa)
- `--config-accent-color-rgb`: Iste boje u RGB formatu (255, 187, 170)

### Porodica kompletne boje

Seelen UI stvara čitavu paletu iz vaše akcentne boje:

![Visual guide to Seelen UI's color palette](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/colors.png)

Evo pune liste dostupnih boja:

- Najmračnija verzija: `--config-accent-darkest-color`
- Tamnija verzija: `--config-accent-darker-color`
- Tamna verzija: `--config-accent-dark-color`
- Redovna verzija: `--config-accent-color`
- Verzija svjetla: `--config-accent-light-color`
- Verzija svjetlije: `--config-accent-lighter-color`
- Najlakša verzija: `--config-accent-lightest-color`

Svaka boja također ima RGB verziju (sa -RGB na kraju). Ovo je korisno za
Stvaranje gradijenata i drugih efekata u boji.

AS primer postavke pozadine boje sa neprozirnošću:

```css
background-color: rbga(var(--config-accent-darkest-color-rgb), 0.5);
```

### Čak i više opcija boja

Želite više izbora u boji? Seelen UI izlaže desetine dodatnih boja. Pogledajte
ovo
[Prikladna referenca u boji](https://gist.github.com/eythaann/cd9a3cda0206ce23a17f5ea00ec2ba06)
Za sve dostupne opcije.

Pro Savjet: Kada se promijeni u boji u Windows Accent, vaše seelen ui tema
ažuriranja automatski!
