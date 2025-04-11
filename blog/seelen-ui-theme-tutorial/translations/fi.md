# Seelen UI: Teeman perustiedot - Mukauta työpöytäsi kuin ammattilainen!

![A beautifully customized desktop using Seelen UI themes](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/image.png)

Haluatko antaa Windows -työpöydälle uuden uuden ilmeen? Seelen UI tekee siitä
helpon Sen tehokas teemajärjestelmä. Tämä opas opastaa sinut läpi kuinka Teemat
toimivat - koodauskokemusta ei vaadita!

## Erityinen virheenkorjaus Versio teeman luojille

Ennen aloittamista teeman luojien tulisi tietää erityisestä **Debug -versio**
Seelen Ui! Tämän version avulla voit:

- Tarkasta elementit aivan kuten verkkosivu (Ctrl+Shift+I avaa
  kehittäjätyökalut)
- Katso Live HTML/CSS -muutokset
- Testaa teeman muutokset heti
- Virheenkorjauskysymykset helposti

Lataa Debug -versio meidän
[Öiset julkaisut kanava](https://seelen.io/apps/seelen-ui/releases/nightly)
(Etsi tiedostoja, jotka päättyvät `-debug.exe`kuten
`Seelen.UI_2.2.8+20250410073056_x64-setup-debug.exe`).

### Haluatko oppia lisää öisistä rakennuksista?

Katso meidän
[Yöiset rakennukset selitettiin](https://seelen.io/blog/seelen-ui-nightly)
artikla!

## Teematiedostojen ymmärtäminen

Ajattele Seelen -käyttöliittymäteemoja, kuten maalikerroksia. Voit käyttää
useita teemoja osoitteessa Kerran ja aivan kuten maalaus, järjestyksellä on
merkitystä! Teemat voivat muuttaa kaiken Väristä ikkunatyyleihin.

Teemoja voidaan pakata kolmella tavalla:

1. **Yksi tiedostoteema** (.yml -tiedosto)
2. **Teemakansio** (sisältää useita tiedostoja)
3. **Pakattu teema** (.slu -tiedosto - erityinen Seelen UI -muoto)

### Mihin laittaa teemasi

Kaikki teemat menevät tietokoneesi kansioon:

```text
C:\Users\{YOUR_USERNAME}\AppData\Roaming\com.seelen.seelen-ui\themes
```

### Teemakansion rakenne

Tässä on, mitä teemakansio näyttää sisäpuolella:

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

## Inspiroituminen: Esimerkki teemat

Etkö ole varma mistä tai miten aloittaa? Seelen UI: n mukana on useita
sisäänrakennettuja teemoja Voi käyttää inspiraatiota! Katso
[oletusteemat](https://github.com/eythaann/Seelen-UI/tree/master/static/themes)
nähdäksesi kuinka ne tehdään.

## Työskentely värien kanssa - se on helpompaa kuin luulet!

Seelen UI poimii automaattisesti Windows -aksenttivärin ja tekee sen Saatavana
eri sävyinä yksinkertaisten värimuuttujien avulla.

### Tärkein aksenttiväri

Nämä muuttujat käyttävät Windows -asetuksissa asettamasi väriä:

- `--config-accent-color`: Puhdas väri (kuten #FFBBAA)
- `--config-accent-color-rgb`: Sama väri RGB -muodossa (255, 187, 170)

### Täydellinen väriperhe

Seelen UI luo kokonaisen paletin aksenttiväristäsi:

![Visual guide to Seelen UI's color palette](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/colors.png)

Tässä on täydellinen luettelo käytettävissä olevista väreistä:

- Pimein versio: `--config-accent-darkest-color`
- Tummempi versio: `--config-accent-darker-color`
- Tumma versio: `--config-accent-dark-color`
- Säännöllinen versio: `--config-accent-color`
- Kevyt versio: `--config-accent-light-color`
- Kevyempi versio: `--config-accent-lighter-color`
- Kevyin versio: `--config-accent-lightest-color`

Jokaisessa värissä on myös RGB -versio (-RGB lopussa). Tämä on hyödyllistä
Gradienttien ja muiden väritehosteiden luominen.

Esimerkkinä asetetaan taustaväri, jolla on opasiteetti:

```css
background-color: rbga(var(--config-accent-darkest-color-rgb), 0.5);
```

### Vielä enemmän värivaihtoehtoja

Haluatko lisää värivalintoja? Seelen UI paljastaa kymmeniä lisäjärjestelmän
värejä. Katso tämä
[kätevä väriviite](https://gist.github.com/eythaann/cd9a3cda0206ce23a17f5ea00ec2ba06)
Kaikille käytettävissä oleville vaihtoehdoille.

Pro -vinkki: Kun Windows -aksenttivärisi muuttuu, Seelen
-käyttöliittymäteemapäivitykset Automaattisesti!
