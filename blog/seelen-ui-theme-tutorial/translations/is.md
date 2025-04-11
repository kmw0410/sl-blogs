# Seelen UI: Þema grunnatriði kennsla - Sérsniðið skjáborðið þitt eins og atvinnumaður!

![A beautifully customized desktop using Seelen UI themes](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/image.png)

Viltu gefa Windows skrifborðinu þínu ferskt nýtt útlit? Seelen ui gerir það
auðvelt með öflugt þemakerfi þess. Þessi handbók mun ganga í gegnum grunnatriðin
hvernig Þemu Vinna - Engin kóðunarreynsla krafist!

## Sérstök kembiforrit fyrir þemahöfunda

Áður en við byrjum ættu þemuhöfundar að vita um okkar sérstöku **kembiforrit**
af Seelen ui! Þessi útgáfa gerir þér kleift að:

- Skoðaðu þætti rétt eins og vefsíða (Ctrl+Shift+I Opnar verkfæri verktaki)
- Sjá lifandi HTML/CSS breytingar
- Prófaðu þemabreytingar samstundis
- Kembiforrit auðveldlega

Halaðu niður kembiforritinu frá okkar
[Útgáfa á nóttunni](https://seelen.io/apps/seelen-ui/releases/nightly) (Leitaðu
að skrám sem enda með `-debug.exe`, eins og
`Seelen.UI_2.2.8+20250410073056_x64-setup-debug.exe`).

### Viltu læra meira um næturbyggingar?

Skoðaðu okkar
[Nætur byggingar útskýrðu](https://seelen.io/blog/seelen-ui-nightly) grein!

## Að skilja þemaskrár

Hugsaðu um Seelen HÍ þemu eins og mál af málningu. Þú getur beitt mörgum þemum á
Einu sinni, og alveg eins og að mála, skiptir pöntunin máli! Þemu geta breytt
öllu Frá litum til gluggastíls.

Það eru þrjár leiðir sem hægt er að pakka þemum:

1. **Stakt skráþema** (.yml skrá)
2. **Þemamappa** (inniheldur margar skrár)
3. **Þjappað þema** (.SLU File - Sérstakt SEELEN UI snið)

### Hvar á að setja þemu þína

Öll þemu fara í þessa möppu á tölvunni þinni:

```text
C:\Users\{YOUR_USERNAME}\AppData\Roaming\com.seelen.seelen-ui\themes
```

### Þemamöppu uppbygging

Svona lítur þemamappa út að innan:

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

## Að fá innblástur: Dæmi um þemu

Ertu ekki viss hvar eða hvernig á að byrja? Seelen ui kemur með nokkur innbyggð
þemu sem þú getur notað sem innblástur! Skoðaðu
[Sjálfgefið þemasöfnun](https://github.com/eythaann/Seelen-UI/tree/master/static/themes)
að sjá hvernig þeir eru gerðir.

## Að vinna með liti - það er auðveldara en þú heldur!

Seelen Ui tekur sjálfkrafa upp Windows Accent litinn þinn og gerir hann Fæst í
mismunandi tónum með einföldum litbreytum.

### Helsti hreim liturinn þinn

Þessar breytur nota litinn sem þú stillir í Windows stillingum:

- `--config-accent-color`: Hreinn litur (eins og #ffbbaa)
- `--config-accent-color-rgb`: Sami litur á RGB sniði (255, 187, 170)

### Heildarlitarfjölskyldan

Seelen UI býr til heila litatöflu frá þínum litarlit:

![Visual guide to Seelen UI's color palette](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/colors.png)

Hér er listi yfir tiltækan liti:

- Dimmasta útgáfa: `--config-accent-darkest-color`
- Dekkri útgáfa: `--config-accent-darker-color`
- Dökk útgáfa: `--config-accent-dark-color`
- Venjuleg útgáfa: `--config-accent-color`
- Ljós útgáfa: `--config-accent-light-color`
- Léttari útgáfa: `--config-accent-lighter-color`
- Léttasta útgáfa: `--config-accent-lightest-color`

Hver litur er einnig með RGB útgáfu (með -RGB í lokin). Þetta er gagnlegt fyrir
Búa til halla og önnur litáhrif.

Sem dæmi um stillingar bakgrunnslit með ógagnsæi:

```css
background-color: rbga(var(--config-accent-darkest-color-rgb), 0.5);
```

### Enn fleiri litavalkostir

Viltu fleiri litaval? Seelen UI afhjúpar fjöldann allan af viðbótarkerfislitum.
Skoðaðu þetta
[Handhæg lit tilvísun](https://gist.github.com/eythaann/cd9a3cda0206ce23a17f5ea00ec2ba06)
Fyrir alla tiltækar valkosti.

Pro Ábending: Þegar Windows Accent Color breytist, þá breytist Seelen Ui
þemauppfærslur þínar sjálfkrafa!
