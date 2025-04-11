# Seelen UI: Výukový program Základy témy - Prispôsobte svoju pracovnú plochu ako profesionál!

![A beautifully customized desktop using Seelen UI themes](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/image.png)

Chcete dať svojmu pracovnému počítaču Windows nový nový vzhľad? Seelen UI to
uľahčuje jeho výkonný tematický systém. Tento sprievodca vás prevedie základmi
ako Témy fungujú - nevyžadujú sa žiadne skúsenosti s kódovaním!

## Špeciálna ladenie verzie pre tvorcov témy

Skôr ako začneme, tvorcovia tém by mali vedieť o našom špeciálnom **ladenie**
Seelen UI! Táto verzia vám umožňuje:

- Skontrolujte prvky rovnako ako webová stránka (Ctrl+Shift+I Otvára nástroje
  vývojárov)
- Pozri Live HTML/CSS Zmeny
- Okamžite testujte úpravy témy
- Problémy s ladením ľahko

Stiahnite si verziu ladenia z nášho
[Nightly vydáva kanál](https://seelen.io/apps/seelen-ui/releases/nightly)
(Vyhľadajte súbory končiace pomocou `-debug.exe`ako
`Seelen.UI_2.2.8+20250410073056_x64-setup-debug.exe`).

### Chcete sa dozvedieť viac o nočných stavoch?

Pozrite sa na naše
[Vysvetlili sa nočné zostavy](https://seelen.io/blog/seelen-ui-nightly) článok!

## Pochopenie tematických súborov

Pomysli na témy Seelen UI, ako sú vrstvy farby. Môžete použiť viac tém na adrese
Raz a rovnako ako maľba, na objednávke záleží! Témy môžu zmeniť všetko Od farieb
po štýly okien.

Existujú tri spôsoby tém, ktoré je možné zabaliť:

1. **Téma s jedným súborom** (.yml súbor)
2. **Priečinok** (obsahuje viac súborov)
3. **Komprimovaná téma** (.SLU File - Špeciálny formát používateľského rozhrania
   Seelen)

### Kam dať svoje témy

Všetky témy idú v tomto priečinku v počítači:

```text
C:\Users\{YOUR_USERNAME}\AppData\Roaming\com.seelen.seelen-ui\themes
```

### Štruktúra priečinka témy

Tu je, ako vyzerá priečinok témy vo vnútri:

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

## Inšpirovanie: Príkladové témy

Nie ste si istí, kde alebo ako začať? Seelen UI prichádza s niekoľkými
vstavanými témami Môže použiť ako inšpiráciu! Skontrolovať
[Zbierka predvolených tém](https://github.com/eythaann/Seelen-UI/tree/master/static/themes)
vidieť, ako sú vyrobené.

## Práca s farbami - je to jednoduchšie, ako si myslíte!

Seelen UI automaticky vyzdvihuje vašu farbu prízvuku Windows a vytvára ju K
dispozícii v rôznych odtieňoch prostredníctvom jednoduchých farebných
premenných.

### Vaša hlavná farba prízvuku

Tieto premenné používajú farbu, ktorú ste nastavili v nastaveniach systému
Windows:

- `--config-accent-color`: Čistá farba (ako #ffbbaa)
- `--config-accent-color-rgb`: Rovnaká farba vo formáte RGB (255, 187, 170)

### Kompletná farebná rodina

Seelen UI vytvára celú paletu z vašej farby prízvuku:

![Visual guide to Seelen UI's color palette](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/colors.png)

Tu je úplný zoznam dostupných farieb:

- Najtemnejšia verzia: `--config-accent-darkest-color`
- Tmavšia verzia: `--config-accent-darker-color`
- Temná verzia: `--config-accent-dark-color`
- Bežná verzia: `--config-accent-color`
- Ľahká verzia: `--config-accent-light-color`
- Ľahšia verzia: `--config-accent-lighter-color`
- Najľahšia verzia: `--config-accent-lightest-color`

Každá farba má tiež verziu RGB (s -RGB na konci). Toto je užitočné pre
Vytváranie gradientov a ďalšie farebné efekty.

Ako príklad nastavuje farbu pozadia s nepriehľadnosťou:

```css
background-color: rbga(var(--config-accent-darkest-color-rgb), 0.5);
```

### Ešte viac možností farieb

Chcete viac možností farieb? Seelen UI odhaľuje desiatky ďalších farieb systému.
Pozrite sa na toto
[praktický farebný odkaz](https://gist.github.com/eythaann/cd9a3cda0206ce23a17f5ea00ec2ba06)
Pre všetky dostupné možnosti.

Tip: Keď sa zmení farebná farba vášho systému Windows Accent, aktualizuje vaše
téma používateľského rozhrania Seelen Automaticky!
