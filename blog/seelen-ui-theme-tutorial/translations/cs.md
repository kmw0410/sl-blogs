# Seelen UI: Výukový program pro základny témat - Přizpůsobte si plochu jako profesionál!

![A beautifully customized desktop using Seelen UI themes](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/image.png)

Chcete dát svému Windows Desktop nový vzhled? SEELEN UI to usnadňuje jeho
výkonný motivový systém. Tato příručka vás provede základy toho, jak Témata
funguje - není nutné žádné zkušenosti s kódováním!

## Speciální verze ladění pro tvůrce motivů

Než začneme, tvůrci témat by měli vědět o našem speciálním **ladění verze**
Seelen UI! Tato verze vám umožňuje:

- Zkontrolujte prvky stejně jako webová stránka (Ctrl+Shift+I Otevře se nástroje
  pro vývojáře)
- Viz živé změny HTML/CSS
- Okamžitě testujte modifikace motivu
- Problémy s stylem ladění snadno

Stáhněte si debug verzi z našeho
[NIGHTLY Uvolňuje kanál](https://seelen.io/apps/seelen-ui/releases/nightly)
(Hledejte soubory končící s `-debug.exe`, jako
`Seelen.UI_2.2.8+20250410073056_x64-setup-debug.exe`).

### Chcete se dozvědět více o nočních sestavách?

Podívejte se na naše
[Vysvětleny noční stavby](https://seelen.io/blog/seelen-ui-nightly) článek!

## Porozumění souborům motivu

Pomyslete na témata Seelen UI, jako jsou vrstvy barvy. Můžete použít více témat
na Jednou a stejně jako malování, na pořadí záleží! Témata mohou všechno změnit
Od barev po styly oken.

Existují tři způsoby, jak lze zabalit témata:

1. **Téma jednoho souboru** (soubor .yml)
2. **Složka motivu** (obsahuje více souborů)
3. **Komprimované téma** (.SLU soubor - Speciální formát uživatelského rozhraní
   Seelen)

### Kam dát své témata

Všechna témata jdou v této složce na vašem počítači:

```text
C:\Users\{YOUR_USERNAME}\AppData\Roaming\com.seelen.seelen-ui\themes
```

### Struktura složky motivu

Zde je, jak vypadá složka tématu uvnitř:

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

## Inspirovat se: Příklad témata

Nejste si jisti, kde a jak začít? Seelen UI přichází s několika vestavěnými
tématy může použít jako inspiraci! Podívejte se na
[Kolekce výchozích témat](https://github.com/eythaann/Seelen-UI/tree/master/static/themes)
Chcete -li vidět, jak jsou vyrobeny.

## Práce s barvami - je to snazší, než si myslíte!

UI Seelen automaticky zvedne barvu přízvuku okna a dělá ji K dispozici v různých
odstínech prostřednictvím jednoduchých barevných proměnných.

### Vaše hlavní barva přízvuku

Tyto proměnné používají barvu, kterou nastavíte v nastavení Windows:

- `--config-accent-color`: Čistá barva (jako #FFBBAA)
- `--config-accent-color-rgb`: Stejná barva ve formátu RGB (255, 187, 170)

### Kompletní barevná rodina

UI Seelen vytvoří celou paletu z vaší akcentové barvy:

![Visual guide to Seelen UI's color palette](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/colors.png)

Zde je úplný seznam dostupných barev:

- Nejtemnější verze: `--config-accent-darkest-color`
- Tmavší verze: `--config-accent-darker-color`
- Tmavá verze: `--config-accent-dark-color`
- Pravidelná verze: `--config-accent-color`
- Světlá verze: `--config-accent-light-color`
- Světlejší verze: `--config-accent-lighter-color`
- Nejlehčí verze: `--config-accent-lightest-color`

Každá barva má také verzi RGB (s -rgb na konci). To je užitečné pro Vytváření
gradientů a dalších barevných efektů.

Jako příklad nastaví barvu pozadí s neprůhledností:

```css
background-color: rbga(var(--config-accent-darkest-color-rgb), 0.5);
```

### Ještě více barevných možností

Chcete více barevných možností? Seelen UI odhaluje desítky dalších barev
systému. Podívejte se na to
[praktický odkaz na barev](https://gist.github.com/eythaann/cd9a3cda0206ce23a17f5ea00ec2ba06)
Pro všechny dostupné možnosti.

Pro tip: Když se změní vaše barva přízvuku Windows, aktualizace motivu UI Seelen
automaticky!
