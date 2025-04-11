# Seelen UI: Teema põhitõdede õpetus - kohandage oma töölaua nagu profiatass!

![A beautifully customized desktop using Seelen UI themes](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/image.png)

Kas soovite anda oma Windowsi töölauale uue uue ilme? Seelen UI teeb selle
lihtsaks selle võimas teemasüsteem. See juhend tutvustab teid põhitõdedest,
kuidas Teemad töötavad - kodeerimise kogemust pole vaja!

## Teemade loojate spetsiaalne silumisversioon

Enne alustamist peaksid teema loojad teadma meie erilist **silumisversioon**
Seelen Ui! See versioon võimaldab teil:

- Kontrollige elemente nagu veebileht (Ctrl+Shift+I avab arendaja tööriistad)
- Vaadake reaalajas HTML/CSS muudatusi
- Testiteema muudatused koheselt
- Silumise kujundamise probleemid hõlpsalt

Laadige silumisversioon alla meie
[Öösed vabastavad kanal](https://seelen.io/apps/seelen-ui/releases/nightly)
(Otsige faile, mis lõpevad `-debug.exe`, nagu
`Seelen.UI_2.2.8+20250410073056_x64-setup-debug.exe`).

### Kas soovite rohkem teada saada öiseid ehitusi?

Vaadake meie
[Öösed ehitused selgitasid](https://seelen.io/blog/seelen-ui-nightly) Artikkel!

## Teemafailide mõistmine

Mõelge Seeleni kasutajaliidese teemadele nagu värvikihid. Saate rakendada mitut
teemat aadressil Kord ja nagu maalimine, on tellimus oluline! Teemad võivad
kõike muuta Värvidest aknastiilideni.

Teemasid saab pakendada kolmel viisil:

1. **Ühe faili teema** (.yml -fail)
2. **Teemakaust** (sisaldab mitu faili)
3. **Tihendatud teema** (.slu fail - Special Seeleni kasutajaliidese vorming)

### Kuhu oma teemad panna

Kõik teemad lähevad teie arvutis sellesse kausta:

```text
C:\Users\{YOUR_USERNAME}\AppData\Roaming\com.seelen.seelen-ui\themes
```

### Teemakausta struktuur

See on teema kaust seestpoolt:

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

## Inspireerimine: näiteteemad

Kas pole kindel, kust või kuidas alustada? Seeleni kasutajaliidel on mitu
sisseehitatud teemat saab kasutada inspiratsioonina! Vaadake
[Vaiketeemade kogumine](https://github.com/eythaann/Seelen-UI/tree/master/static/themes)
et näha, kuidas nad on tehtud.

## Värvidega töötamine - see on lihtsam kui arvate!

Seelen UI võtab automaatselt teie Windowsi aktsentvärvi üles ja teeb selle
Saadaval erinevates toonides lihtsate värvimuutujate kaudu.

### Teie peamine aktsentvärv

Need muutujad kasutavad Windowsi sätetes seatud värvi:

- `--config-accent-color`: Puhas värv (nagu #FFBBAA)
- `--config-accent-color-rgb`: Sama värv RGB -vormingus (255, 187, 170)

### Täielik värviperekond

Seelen UI loob teie aktsendivärvist terve paleti:

![Visual guide to Seelen UI's color palette](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/colors.png)

Siin on täielik saadaolevate värvide loetelu:

- Tumedam versioon: `--config-accent-darkest-color`
- Tumedam versioon: `--config-accent-darker-color`
- Tume versioon: `--config-accent-dark-color`
- Regulaarne versioon: `--config-accent-color`
- Kerge versioon: `--config-accent-light-color`
- Heledam versioon: `--config-accent-lighter-color`
- Kergeim versioon: `--config-accent-lightest-color`

Igal värvil on ka RGB versioon (mille lõpus on -RGB). See on kasulik Gradientide
ja muude värviefektide loomine.

Näitena seadistab läbipaistmatuse taustvärvi:

```css
background-color: rbga(var(--config-accent-darkest-color-rgb), 0.5);
```

### Veel rohkem värvivalikuid

Kas soovite rohkem värvivalikuid? Seelen UI paljastab kümneid täiendavaid
süsteemi värve. Vaadake seda
[käepärane värvi viide](https://gist.github.com/eythaann/cd9a3cda0206ce23a17f5ea00ec2ba06)
Kõigi saadaolevate valikute jaoks.

Pro näpunäide: kui teie Windowsi aktsentvärv muutub, värskendused Seeleni
kasutajaliidese teema värskendused Automaatselt!
