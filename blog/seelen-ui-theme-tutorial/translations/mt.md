# Seelen UI: Tema Basics Tutorial - Ippersonalizza d-desktop tiegħek bħal pro!

![A beautifully customized desktop using Seelen UI themes](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/image.png)

Trid tagħti d-desktop tal-Windows tiegħek dehra ġdida friska? Seelen ui
jagħmilha faċli biha is-sistema tat-tema qawwija tagħha. Din il-gwida se timxi
miegħek permezz tal-punti bażiċi ta 'kif Temi jaħdmu - l-ebda esperjenza ta
'kodifikazzjoni meħtieġa!

## Verżjoni speċjali ta 'debug għall-kreaturi tat-tema

Qabel ma nibdew, il-kreaturi tat-tema għandhom ikunu jafu dwar l-ispeċjal tagħna
**Verżjoni ta 'debug** ta 'Seelen UI! Din il-verżjoni tħallik:

- Spezzjona l-elementi eżatt bħal paġna tal-web (Ctrl + Shift + I Tiftaħ Għodda
  għall-Iżviluppaturi)
- Ara l-bidliet HTML / CSS ħajjin
- Ittestja modifiki tat-tema istantanjament
- Debug Styling joħroġ faċilment

Niżżel il-verżjoni tal-debug minn tagħna
[Kanal tar-rilaxxi ta 'bil-lejl](https://seelen.io/apps/seelen-ui/releases/nightly)
(Fittex fajls li jispiċċaw bihom `-debug.exe`, bħal
`Seelen.UI_2.2.8+20250410073056_x64-setup-debug.exe`).

### Trid titgħallem aktar dwar il-bini ta 'filgħaxija?

Iċċekkja tagħna
[Bini ta 'filgħaxija spjegati](https://seelen.io/blog/seelen-ui-nightly)
Artiklu!

## Nifhmu l-fajls tat-tema

Aħseb f'temi ta 'Seelen UI bħal saffi ta' żebgħa. Tista 'tapplika temi multipli
fi Darba, u l-istess bħall-pittura, l-ordni hija importanti! It-temi jistgħu
jibdlu kollox Minn kuluri għal stili tat-twieqi.

Hemm tliet modi kif jistgħu jiġu ppakkjati temi:

1. **Tema ta 'fajl wieħed** (.yml file)
2. **Folder tat-Tema** (fih fajls multipli)
3. **Tema Kompressata** (.SLU File - Format Speċjali Seelen UI)

### Fejn tpoġġi t-temi tiegħek

It-temi kollha jmorru f'dan il-folder fuq il-kompjuter tiegħek:

```text
C:\Users\{YOUR_USERNAME}\AppData\Roaming\com.seelen.seelen-ui\themes
```

### Struttura tal-folder tat-tema

Hawn kif jidher folder tat-tema ġewwa:

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

## Li jkollok ispirat: temi ta 'eżempju

Mhux ċert minn fejn jew kif tibda? Seelen UI tiġi b'diversi temi integrati int
tista 'tuża bħala ispirazzjoni! Iċċekkja l-
[Ġbir ta 'Temi Default](https://github.com/eythaann/Seelen-UI/tree/master/static/themes)
Biex tara kif qed isiru.

## Taħdem bil-kuluri - huwa iktar faċli milli taħseb!

Seelen UI awtomatikament jiġbor il-kulur tal-aċċent tal-Windows tiegħek u
jagħmilha Disponibbli fi sfumaturi differenti permezz ta 'varjabbli tal-kulur
sempliċi.

### Il-kulur tal-aċċent ewlieni tiegħek

Dawn il-varjabbli jużaw il-kulur li tissettja fl-issettjar tal-Windows:

- `--config-accent-color`: Il-kulur pur (bħal #ffbbaa)
- `--config-accent-color-rgb`: L-istess kulur fil-format RGB (255, 187, 170)

### Il-familja tal-kulur kompluta

Seelen UI toħloq paletta sħiħa mill-kulur tal-aċċent tiegħek:

![Visual guide to Seelen UI's color palette](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/colors.png)

Hawn il-lista sħiħa tal-kuluri disponibbli:

- Verżjoni l-iktar skura: `--config-accent-darkest-color`
- Verżjoni iktar skura: `--config-accent-darker-color`
- Verżjoni skura: `--config-accent-dark-color`
- Verżjoni regolari: `--config-accent-color`
- Verżjoni ħafifa: `--config-accent-light-color`
- Verżjoni eħfef: `--config-accent-lighter-color`
- Verżjoni l-aktar ħafifa: `--config-accent-lightest-color`

Kull kulur għandu wkoll verżjoni RGB (bi -RGB fl-aħħar). Dan huwa utli għal
Ħolqien ta 'gradjenti u effetti oħra tal-kulur.

Bħala eżempju ta 'settings ta' kulur ta 'sfond b'opaċità:

```css
background-color: rbga(var(--config-accent-darkest-color-rgb), 0.5);
```

### Saħansitra aktar għażliet ta 'kulur

Trid aktar għażliet ta 'kulur? Seelen UI jesponi għexieren ta 'kuluri
addizzjonali tas-sistema. Iċċekkja dan
[Referenza tal-kulur handy](https://gist.github.com/eythaann/cd9a3cda0206ce23a17f5ea00ec2ba06)
Għall-għażliet kollha disponibbli.

Tip Pro: Meta l-kulur tal-aċċent tal-Windows tiegħek jinbidel, l-aġġornamenti
tat-tema Seelen UI tiegħek awtomatikament!
