# Seelen UI: Tiwtorial Hanfodion Thema - Addaswch eich bwrdd gwaith fel pro!

![A beautifully customized desktop using Seelen UI themes](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/image.png)

Am roi gwedd newydd ffres i'ch bwrdd gwaith Windows? Mae Seelen UI yn ei gwneud
hi'n hawdd gyda ei system thema bwerus. Bydd y canllaw hwn yn eich cerdded trwy
hanfodion sut Gwaith Themâu - Nid oes angen profiad codio!

## Fersiwn dadfygio arbennig ar gyfer crewyr thema

Cyn i ni ddechrau, dylai crewyr thema wybod am ein arbennig **Fersiwn Debug** o
Seelen UI! Mae'r fersiwn hon yn gadael i chi:

- Archwiliwch elfennau yn union fel tudalen we (ctrl+shift+i yn agor offer
  datblygwr)
- Gweler newidiadau html/css byw
- Profi addasiadau thema ar unwaith
- Materion steilio dadfygio'n hawdd

Dadlwythwch y fersiwn dadfygio o'n
[Yn rhyddhau sianel](https://seelen.io/apps/seelen-ui/releases/nightly)
(Chwiliwch am ffeiliau sy'n gorffen gyda `-debug.exe`, fel
`Seelen.UI_2.2.8+20250410073056_x64-setup-debug.exe`).

### Am ddysgu mwy am adeiladau nos?

Edrychwch ar ein [Esboniadau NOSONE](https://seelen.io/blog/seelen-ui-nightly)
Erthygl!

## Deall ffeiliau thema

Meddyliwch am themâu Seelen UI fel haenau o baent. Gallwch gymhwyso sawl thema
yn Unwaith, ac yn union fel paentio, mae'r archeb yn bwysig! Gall themâu newid
popeth o liwiau i arddulliau ffenestri.

Mae tair ffordd y gellir pecynnu themâu:

1. **Thema ffeil sengl** (ffeil .yml)
2. **Ffolder thema** (yn cynnwys ffeiliau lluosog)
3. **Thema gywasgedig** (Ffeil .slu - Fformat UI SEELEN ARBENNIG)

### Ble i roi eich themâu

Mae pob thema yn mynd yn y ffolder hon ar eich cyfrifiadur:

```text
C:\Users\{YOUR_USERNAME}\AppData\Roaming\com.seelen.seelen-ui\themes
```

### Strwythur ffolder thema

Dyma sut olwg sydd ar ffolder thema y tu mewn:

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

## Cael eich ysbrydoli: themâu enghreifftiol

Ddim yn siŵr ble neu sut i ddechrau? Mae Seelen UI yn dod gyda sawl thema
adeiledig i chi yn gallu defnyddio fel ysbrydoliaeth! Edrychwch ar y
[casgliad themâu diofyn](https://github.com/eythaann/Seelen-UI/tree/master/static/themes)
i weld sut maen nhw'n cael eu gwneud.

## Gweithio gyda lliwiau - mae'n haws nag yr ydych chi'n meddwl!

Mae Seelen UI yn codi'ch lliw acen ffenestri yn awtomatig ac yn ei wneud Ar gael
mewn gwahanol arlliwiau trwy newidynnau lliw syml.

### Eich prif liw acen

Mae'r newidynnau hyn yn defnyddio'r lliw rydych chi'n ei osod mewn gosodiadau
Windows:

- `--config-accent-color`: Y lliw pur (fel #ffbbaa)
- `--config-accent-color-rgb`: Yr un lliw ar ffurf RGB (255, 187, 170)

### Y teulu lliw cyflawn

Mae Seelen UI yn creu palet cyfan o'ch lliw acen:

![Visual guide to Seelen UI's color palette](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/colors.png)

Dyma'r rhestr lawn o'r lliwiau sydd ar gael:

- Fersiwn dywyllaf: `--config-accent-darkest-color`
- Fersiwn dywyllach: `--config-accent-darker-color`
- Fersiwn dywyll: `--config-accent-dark-color`
- Fersiwn reolaidd: `--config-accent-color`
- Fersiwn ysgafn: `--config-accent-light-color`
- Fersiwn ysgafnach: `--config-accent-lighter-color`
- Fersiwn ysgafnaf: `--config-accent-lightest-color`

Mae gan bob lliw fersiwn RGB hefyd (gyda -RGB ar y diwedd). Mae hyn yn
ddefnyddiol ar gyfer creu graddiannau ac effeithiau lliw eraill.

Fel gosodiadau enghreifftiol lliw cefndir ag didwylledd:

```css
background-color: rbga(var(--config-accent-darkest-color-rgb), 0.5);
```

### Hyd yn oed mwy o opsiynau lliw

Am gael mwy o ddewisiadau lliw? Mae Seelen UI yn datgelu dwsinau o liwiau system
ychwanegol. Edrychwch ar hyn
[cyfeirnod lliw defnyddiol](https://gist.github.com/eythaann/cd9a3cda0206ce23a17f5ea00ec2ba06)
ar gyfer yr holl opsiynau sydd ar gael.

Awgrym Pro: Pan fydd eich lliw acen ffenestri yn newid, mae eich thema Seelen UI
yn diweddaru yn awtomatig!
