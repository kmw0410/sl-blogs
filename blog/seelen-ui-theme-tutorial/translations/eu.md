# Seelen UI: Gaiaren oinarriak Tutoretza - Pertsonalizatu zure mahaigaina Pro bezala!

![A beautifully customized desktop using Seelen UI themes](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/image.png)

Zure Windows mahaigainari itxura berri berri bat eman nahi al diozu? Seelen Ui
erraza da bere gai sistema indartsua. Gida honek nola ibiliko zaitu oinarriak
Gaiak lan egitea - ez da kodeketarik behar!

## Gaiaren sortzaileentzako arazketa bertsioa

Hasi baino lehen, gai sortzaileek gure berezi jakin beharko lukete **arazketa
bertsioa** de Seelen UI! Bertsio honek aukera ematen dizu:

- Ikuskatu elementuak web orri bat bezala (Ctrl + Maius + i garatzaileen tresnak
  irekitzen ditu)
- Ikusi Live HTML / CSS aldaketak
- Probatu gaia aldaketak berehala
- Arazteko gaiak erraz

Deskargatu arazketa bertsioa guregandik
[Gaueko kaleratze kanala](https://seelen.io/apps/seelen-ui/releases/nightly)
(Bilatu amaitzen diren fitxategiak `-debug.exe`, Atsegin
`Seelen.UI_2.2.8+20250410073056_x64-setup-debug.exe`).

### Gaueko eraikuntzak gehiago ikasi nahi dituzu?

Begiratu gurea
[Gaueko eraikuntzak azaldu dira](https://seelen.io/blog/seelen-ui-nightly)
Artikulua!

## Gaiaren fitxategiak ulertzea

Pentsa ezazu pintura geruzak bezala Seelen UI gaiak. Hainbat gai aplikatu
ditzakezu Behin, eta pintura bezala, ordena gaiak! Gaiek dena alda dezakete
koloreetatik leiho estiloetara.

Hiru modu daude gaiak paketatu daitezke:

1. **Fitxategi bakarreko gaia** (.YML fitxategia)
2. **Gaiaren karpeta** (Fitxategi anitz ditu)
3. **Konprimitutako gaia** (.slu fitxategia - Seelen UI formatu berezia)

### Non jarri zure gaiak

Gai guztiak karpeta honetan doaz ordenagailuan:

```text
C:\Users\{YOUR_USERNAME}\AppData\Roaming\com.seelen.seelen-ui\themes
```

### Gaiaren karpetaren egitura

Hona hemen zer itxura duen karpeta bat:

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

## Inspiratuz: adibide gaiak

Ez al dakizu non edo nola hasi? Seelen Ui hainbat gai integratorekin dator
inspirazio gisa erabil dezake! Begiratu
[Lehenetsitako Gaiak Bilduma](https://github.com/eythaann/Seelen-UI/tree/master/static/themes)
nola egiten diren ikusteko.

## Koloreekin lan egitea - uste baino errazagoa da!

Seelen UIk automatikoki zure Windows azentuaren kolorea jasotzen du eta egiten
du Itzal desberdinetan eskuragarri kolore aldagai sinpleen bidez.

### Zure azentu kolore nagusia

Aldagai hauek Windows ezarpenetan ezarritako kolorea erabiltzen duzu:

- `--config-accent-color`: Kolore hutsa (#ffbbaa bezala)
- `--config-accent-color-rgb`: Kolore bereko RGB formatuan (255, 187, 170)

### Kolore familia osoa

Seelen Ui paleta osoa sortzen du azentuaren koloretik:

![Visual guide to Seelen UI's color palette](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/colors.png)

Hona hemen eskuragarri dauden koloreen zerrenda osoa:

- Bertsio ilunena: `--config-accent-darkest-color`
- Bertsio ilunagoa: `--config-accent-darker-color`
- Bertsio iluna: `--config-accent-dark-color`
- Ohiko bertsioa: `--config-accent-color`
- Argiaren bertsioa: `--config-accent-light-color`
- Bertsio arinagoa: `--config-accent-lighter-color`
- Bertsio arinena: `--config-accent-lightest-color`

Kolore bakoitzak RGB bertsioa ere badu (-rGB amaieran). Hau erabilgarria da
Gradienteak eta kolorearen beste efektuak sortuz.

Adibide gisa, Atzeko planoaren kolorea opakutasunarekin:

```css
background-color: rbga(var(--config-accent-darkest-color-rgb), 0.5);
```

### Are kolore aukera gehiago

Kolore aukera gehiago nahi dituzu? Seelen UIk dozenaka sistema osagarri ditu.
Begiratu hau
[kolorearen erreferentzia erabilgarria](https://gist.github.com/eythaann/cd9a3cda0206ce23a17f5ea00ec2ba06)
Eskuragarri dauden aukera guztietarako.

Aholkua: zure Windows azentuaren kolore aldaketak egiten dituzunean, zure Seelen
UI gaia eguneratzeak automatikoki!
