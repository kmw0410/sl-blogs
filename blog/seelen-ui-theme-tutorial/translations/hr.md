# Seelen UI: Vodič za osnove teme - Prilagodite radnu površinu kao Pro!

![A beautifully customized desktop using Seelen UI themes](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/image.png)

Želite li svojoj Windows radnoj površini novi izgled? Seelen UI to olakšava
Njegov moćan tematski sustav. Ovaj će vas vodič provesti kroz osnove kako Teme
rade - nije potrebno iskustvo kodiranja!

## Posebna verzija za uklanjanje pogrešaka za kreativce teme

Prije nego što započnemo, tvorci teme trebali bi znati za našu posebnu **verzija
za uklanjanje pogrešaka** od Seelen ui! Ova verzija vam omogućuje:

- Pregledajte elemente poput web stranice (Ctrl+Shift+I Otvara alate za razvojne
  programere)
- Pogledajte promjene HTML/CSS
- Ispitivanje teme odmah
- Lako se uklanjaju pogrešaka za uklanjanje pogrešaka

Preuzmite verziju za uklanjanje pogrešaka iz našeg
[Noćna izdanja kanala](https://seelen.io/apps/seelen-ui/releases/nightly)
(Potražite datoteke koje završavaju s `-debug.exe`, kao
`Seelen.UI_2.2.8+20250410073056_x64-setup-debug.exe`).

### Želite li saznati više o noćnim građevinama?

Provjerite naše
[Objašnjeni noćni građevina](https://seelen.io/blog/seelen-ui-nightly) članak!

## Razumijevanje datoteka tema

Pomislite na Seelen UI teme poput slojeva boje. Možete primijeniti više tema na
Jednom, i baš poput slikanja, redoslijed je važan! Teme mogu sve promijeniti Od
boja do stilova prozora.

Tri su načina na koje se teme mogu pakirati:

1. **Tema s jednom datotekom** (.yml datoteka)
2. **Tema mapa** (sadrži više datoteka)
3. **Komprimirana tema** (.Slu datoteka - poseban seelen ui format)

### Gdje staviti svoje teme

Sve teme idu u ovoj mapi na vašem računalu:

```text
C:\Users\{YOUR_USERNAME}\AppData\Roaming\com.seelen.seelen-ui\themes
```

### Struktura mape teme

Evo kako izgleda mapa tema iznutra:

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

## Inspiriranje: Primjeri teme

Niste sigurni gdje ili kako započeti? Seelen UI dolazi s nekoliko ugrađenih tema
može koristiti kao inspiraciju! Provjeriti
[Zbirka zadanih tema](https://github.com/eythaann/Seelen-UI/tree/master/static/themes)
vidjeti kako su napravljeni.

## Rad s bojama - lakše je nego što mislite!

Seelen UI automatski uzima vašu boju Accent Windows i čini je Dostupno u
različitim nijansama kroz jednostavne varijable boja.

### Vaša glavna boja naglaska

Ove varijable koriste boju koju ste postavili u postavkama sustava Windows:

- `--config-accent-color`: Čista boja (poput #ffbbaa)
- `--config-accent-color-rgb`: Ista boja u RGB formatu (255, 187, 170)

### Kompletna obitelj u boji

Seelen UI stvara cijelu paletu iz vaše naglaske boje:

![Visual guide to Seelen UI's color palette](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/colors.png)

Evo cjelokupnog popisa dostupnih boja:

- Najmračnija verzija: `--config-accent-darkest-color`
- Tamnija verzija: `--config-accent-darker-color`
- Tamna verzija: `--config-accent-dark-color`
- Redovna verzija: `--config-accent-color`
- Lagana verzija: `--config-accent-light-color`
- Svjetlija verzija: `--config-accent-lighter-color`
- Najlakša verzija: `--config-accent-lightest-color`

Svaka boja također ima RGB verziju (s -RGB na kraju). Ovo je korisno za
Stvaranje gradijenata i drugih efekata boja.

Kao primjer postavki boju pozadine s neprozirnošću:

```css
background-color: rbga(var(--config-accent-darkest-color-rgb), 0.5);
```

### Još više opcija u boji

Želite više izbora u boji? Seelen UI izlaže desetke dodatnih boja sustava.
Provjerite ovo
[Prikladna referenca u boji](https://gist.github.com/eythaann/cd9a3cda0206ce23a17f5ea00ec2ba06)
za sve dostupne opcije.

Pro savjet: Kada se promijeni slika naglaska za Windows, ažurira se vaše seelen
sučelja za sučelje automatski!
