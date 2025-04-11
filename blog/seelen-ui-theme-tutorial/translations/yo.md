# Sisen UI: Awọn ipilẹ ikẹkọ awọn ipilẹ awọn ipilẹ - Ṣe akanṣe tabili tabili bi pro!

![A beautifully customized desktop using Seelen UI themes](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/image.png)

Ṣe o fẹ fun tabili tabili Windows rẹ tuntun? Sielen ui jẹ ki o rọrun pẹlu eto
ipo ipo agbara rẹ. Itọsọna yii yoo rin ọ nipasẹ awọn ipilẹ ti bawo Awọn akori
ṣiṣẹ - ko si iriri idapo ti o nilo!

## Awọn ikede Dajudaju Stick Pataki fun awọn oludari Akori

Ṣaaju ki a bẹrẹ, awọn olupilẹṣẹ Akori yẹ ki o mọ nipa pataki wa **Ti ẹya
Debubu** Ti Sielen UI Ẹya yii jẹ ki o:

- Ṣayẹwo awọn eroja gẹgẹ bi oju opo wẹẹbu kan (Ctrl + Shift + Mo ṣi awọn irinṣẹ
  Olùgbéejáde)
- Wo awọn ayipada HTML / CSS CSS
- Awọn iyipada aaye idanwo lesekese
- Ẹdọmọ ṣiṣu awọn abajade ni irọrun

Ṣe igbasilẹ Ẹya Ṣatunṣe lati ọdọ wa
[Nightly tu ikanni silẹ](https://seelen.io/apps/seelen-ui/releases/nightly) (Wa
fun awọn faili ipari pẹlu `-debug.exe`, bi
`Seelen.UI_2.2.8+20250410073056_x64-setup-debug.exe`).

### Fẹ lati ni imọ siwaju sii nipa alẹ alẹ?

Ṣayẹwo wa [Night kọ salaye](https://seelen.io/blog/seelen-ui-nightly) Nkankan!

## Loye awọn faili akori

Ronu awọn meenan UI awọn akori bi awọn fẹlẹfẹlẹ ti kikun. O le lo ọpọlọpọ awọn
akori ni Ni ẹẹkan, ati pe o kan bi kikun, aṣẹ ṣe pataki! Awọn akori le yi ohun
gbogbo pada lati awọn awọ si awọn aza window.

Awọn ọna mẹta lo wa ti o le jẹ apopọ:

1. **Akori faili ẹyọkan** (faili .ymy)
2. **Folda Akori** (ni awọn faili lọpọlọpọ)
3. **Akori fisinuirindigbindi** (.ulU faili - ọna kika UI pataki)

### Ibi ti lati fi awọn akori rẹ

Gbogbo awọn akori lọ sinu folda yii lori kọnputa rẹ:

```text
C:\Users\{YOUR_USERNAME}\AppData\Roaming\com.seelen.seelen-ui\themes
```

### Akori Akori Akori

Eyi ni ohun ti folda akori dabi inu:

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

## Gbigba atilẹyin: apẹẹrẹ awọn akori

Ko daju ibi ti tabi bi o ṣe le bẹrẹ? Sielen UI wa pẹlu ọpọlọpọ awọn akori ti a
ṣe sinu rẹ le lo bi awokose! Ṣayẹwo awọn
[aifọwọyi Gbigba Gbigba Gbigba](https://github.com/eythaann/Seelen-UI/tree/master/static/themes)
lati rii bi wọn ṣe ṣe.

## Nṣiṣẹ pẹlu awọn awọ - o rọrun ju ti o ro lọ!

Sieen Ui laifọwọyi mu awọ meji rẹ ati jẹ ki o jẹ Wa ni awọn ojiji oriṣiriṣi
nipasẹ awọn iyatọ awọ ti o rọrun.

### Awọ akọkọ ti o wa

Awọn oniyipada wọnyi lo awọ ti o ṣeto ninu Eto Windows:

- `--config-accent-color`: Awọ funfun (bii #ffbbaa)
- `--config-accent-color-rgb`: Awọ kanna ni ọna kika RGB (255, 187, 170)

### Idile awọ ti o pari

Sieen ui ṣẹda gbogbo paleti kan lati awọ awọ rẹ:

![Visual guide to Seelen UI's color palette](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/colors.png)

Eyi ni atokọ ni kikun ti awọn awọ to wa:

- Ẹya dudu julọ: `--config-accent-darkest-color`
- Ẹya dudu: `--config-accent-darker-color`
- Ẹya Dudu: `--config-accent-dark-color`
- Ẹya deede: `--config-accent-color`
- Ẹya ina: `--config-accent-light-color`
- Lightr ẹya: `--config-accent-lighter-color`
- Ẹya ti o ni itanna: `--config-accent-lightest-color`

Awọ kọọkan tun ni ikede RGB kan (pẹlu -rg ni ipari). Eyi wulo fun ṣiṣẹda awọn
gradients ati awọn ipa awọ miiran.

Bii apẹẹrẹ ti awọn eto awọ ti o wa lẹhin:

```css
background-color: rbga(var(--config-accent-darkest-color-rgb), 0.5);
```

### Paapaa awọn aṣayan awọ diẹ sii

Fẹ awọn yiyan awọ diẹ sii? Sisen UI ṣafihan dosinni ti awọn awọ eto afikun.
Ṣayẹwo eyi
[Itọkasi awọ ni ọwọ](https://gist.github.com/eythaann/cd9a3cda0206ce23a17f5ea00ec2ba06)
Fun gbogbo awọn aṣayan to wa.

Awọn ayipada Pro: Nigbati awọn ayipada awọ awọ rẹ, awọn imudojuiwọn akọkọ UI UI
UI UI laifọwọyi!
