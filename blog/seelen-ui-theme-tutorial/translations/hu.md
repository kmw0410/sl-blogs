# SEELEN UI: Téma alapok bemutatása - Testreszabhatja az asztalát, mint egy pro!

![A beautifully customized desktop using Seelen UI themes](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/image.png)

Szeretné friss új megjelenést adni a Windows asztalának? A Seelen Ui megkönnyíti
Hatalmas témarendszere. Ez az útmutató végigvezeti Önt az alapjainak, hogyan
Témák munka - Nincs szükség kódolási tapasztalatra!

## Különleges hibakeresési verzió a téma készítői számára

Mielőtt elkezdenénk, a téma alkotóknak tudniuk kell a különlegesünkről
**hibakeresési változat** seelen ui! Ez a verzió lehetővé teszi:

- Ellenőrizze az elemeket, csakúgy, mint egy weboldal (Ctrl+Shift+i megnyitja a
  fejlesztői eszközöket)
- Lásd az élő HTML/CSS változtatásokat
- A teszt témájának módosításainak azonnali módosítása
- A hibakeresése stíluskibocsátási problémái könnyen

Töltse le a hibakeresési verziót a miből
[Éjszakai felszabadítja a csatornát](https://seelen.io/apps/seelen-ui/releases/nightly)
(Keresse meg a végződő fájlokat `-debug.exe`tetszik
`Seelen.UI_2.2.8+20250410073056_x64-setup-debug.exe`).

### Szeretne többet megtudni az éjszakai építkezésről?

Nézze meg a
[Éjszakai építések elmagyarázták](https://seelen.io/blog/seelen-ui-nightly)
cikk!

## A témájú fájlok megértése

Gondolj a Seelen felhasználói felület témáira, mint a festékrétegekre. Több
témát alkalmazhat a Egyszer, és csakúgy, mint a festmény, a rend számít! A témák
mindent megváltoztathatnak a színektől az ablak stílusáig.

A témák háromféle módon lehetnek csomagolni:

1. **Egyetlen fájl témája** (.yml fájl)
2. **Tematikus mappa** (Több fájlt tartalmaz)
3. **Tömörített téma** (.slu fájl - Speciális seelen felhasználói felület)

### Hova tegye a témáit

Az összes téma a számítógép ezen mappájába kerül:

```text
C:\Users\{YOUR_USERNAME}\AppData\Roaming\com.seelen.seelen-ui\themes
```

### Téma mappa felépítése

Így néz ki egy téma mappa belsejében:

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

## Inspiráció: példa témák

Nem biztos benne, hol vagy hogyan kezdje el? Seelen Ui több beépített témával
érkezik Használhatja inspirációként! Nézze meg a
[Alapértelmezett témák gyűjteménye](https://github.com/eythaann/Seelen-UI/tree/master/static/themes)
hogy lássa, hogyan készülnek.

## Színekkel való munka - könnyebb, mint gondolnád!

Seelen Ui automatikusan felveszi a Windows akcentus színét, és elkészíti
Különböző árnyalatokban kapható egyszerű színváltozókon keresztül.

### A fő akcentus színe

Ezek a változók a Windows beállításaiban beállított színt használják:

- `--config-accent-color`: A tiszta szín (mint például a #ffbbaa)
- `--config-accent-color-rgb`: Ugyanaz a szín RGB formátumban (255, 187, 170)

### A teljes színű család

Seelen Ui egész palettát hoz létre az akcentus színéből:

![Visual guide to Seelen UI's color palette](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/colors.png)

Itt található a rendelkezésre álló színek teljes listája:

- Legsötétebb verzió: `--config-accent-darkest-color`
- Sötétebb verzió: `--config-accent-darker-color`
- Sötét verzió: `--config-accent-dark-color`
- Rendszeres verzió: `--config-accent-color`
- Könnyű verzió: `--config-accent-light-color`
- Könnyebb verzió: `--config-accent-lighter-color`
- A legkönnyebb verzió: `--config-accent-lightest-color`

Mindegyik színnek van egy RGB verziója (-RGB a végén). Ez hasznos gradiensek és
egyéb színhatások létrehozása.

Példaként beállítások A háttér színe átlátszatlansággal:

```css
background-color: rbga(var(--config-accent-darkest-color-rgb), 0.5);
```

### Még több színes lehetőség

Több színválasztást szeretne? A Seelen Ui tucatnyi további rendszerszínt tesz
ki. Nézze meg ezt
[praktikus színes referencia](https://gist.github.com/eythaann/cd9a3cda0206ce23a17f5ea00ec2ba06)
Az összes rendelkezésre álló lehetőséghez.

Pro tipp: Amikor a Windows kiemelő színe megváltozik, a Seelen felhasználói
felület témája frissül automatikusan!
