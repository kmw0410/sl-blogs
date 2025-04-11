# SELEN UI: TILMAAMAHA TALEE EE MADAXWEYNAHA - U habee Desktop-kaaga sida Pro!

![A beautifully customized desktop using Seelen UI themes](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/image.png)

Ma dooneysaa inaad siiso daaqadahaaga desktop-kaaga muuqaal cusub oo cusub?
Selelen Ui Ui fududahay Nidaamkeeda mawduuca xoogga badan. Tilmaamahan ayaa kugu
dhex socon doona aasaaska sida Mawduucyada ayaa shaqeeya - Ma jiro khibrad
lambar ah oo loo baahan yahay!

## Nooca gaarka ah ee 'Debug' oo loogu talagalay hal abuurka

Kahor intaanan bilaabin, hal abuurka mawduucyadu waa inay ogaadaan wax ku
saabsan qaaska **Kitaabka Quduuska ah** ee Selen Ui! Noocan ayaa kuu
oggolaanaya:

- U fiirso walxaha sida bogga oo kale (Ctrl + Shift + Waxaan furaa aaladaha
  horumarinta)
- Eeg isbeddelada tooska ah ee HTML / CSS
- Imtixaanka wax ka beddelidda mawduucyada isla markiiba
- DIIWAAN GELINTA ARDIbta si fudud

Soo dejiso nooca DEBUG ee laga bilaabo
[Habeenkii Cadaadiska](https://seelen.io/apps/seelen-ui/releases/nightly) (Ka
eeg faylalka ku dhammaanaya `-debug.exe`, sida
`Seelen.UI_2.2.8+20250410073056_x64-setup-debug.exe`).

### Ma dooneysaa inaad waxbadan ka ogaato wax badan oo ku saabsan dhisitaanka habeenkii?

Hubi [Habeenkiiba waxaa lagu sharxay](https://seelen.io/blog/seelen-ui-nightly)
maqaal!

## Fahmitaanka faylasha mowduucyada

Ka fikir mowduucyada selen Ui sida lakabyada rinjiga. Waxaad ku dalban kartaa
mowduucyo badan at Mar, iyo sida rinjiyeynta, arrimaha amarku! Mawduucyada wax
walba way beddeli karaan midabada ilaa qaababka daaqada.

Waxaa jira seddex jidad oo mawduuc ah oo la soo diyaarin karo:

1. **Hal fayl oo fayl ah** (galka .yml
2. **Faylka mowska** (waxaa ku jira faylal badan)
3. **Mowduuc isku cadaadiyey** (.Slu feyl - Qaabka gaarka ah ee Selen Ui

### Halka laga dhigo mowduucyadaada

Dhammaan mawduucyada ayaa ku dhex jira faylkaan kombiyuutarkaaga:

```text
C:\Users\{YOUR_USERNAME}\AppData\Roaming\com.seelen.seelen-ui\themes
```

### Qaab dhismeedka faylka

Waa tan waxa faylka mowduuca u eg yahay gudaha:

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

## Soo-jeedinta: Tusaalaha mawduucyada

Ma hubo meesha ama sida loo bilaabayo? Selen Ui wuxuu la socdaa dhowr mawduuc oo
lagu dhisay u isticmaali kartaa sida dhiirigelin! Hubi
[Ururinta mawduucyada](https://github.com/eythaann/Seelen-UI/tree/master/static/themes)
si loo arko sida loo sameeyay.

## La shaqeynta midabada - way ka sahlan tahay sidaad u malaynayso!

Selelen Ui si otomaatig ah ayuu u qaadayaa midabkaaga Windows-ka oo ka dhigaysa
Waxaa lagu heli karaa hadhka kaladuwan iyada oo loo marayo doorsoomayaal midab
fudud ah.

### Midabkaaga ugu weyn

Doorsoomayaashaas waxay adeegsadaan midabka aad ku dhexjirto dejinta daaqadaha:

- `--config-accent-color`: Midabka saafiga ah (sida #ffbBaa)
- `--config-accent-color-rgb`: Midab isku mid ah qaab RGB ah (255, 187, 170)

### Qoyska buuxa ee qoyska

Selelen Ui wuxuu ka abuuraa palette oo dhan midabkaaga:

![Visual guide to Seelen UI's color palette](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/colors.png)

Waa tan liiska buuxa ee midabada la heli karo:

- Nooca ugu madow: `--config-accent-darkest-color`
- Nooca mugdiga ah: `--config-accent-darker-color`
- Nooca mugdiga ah: `--config-accent-dark-color`
- Nooca caadiga ah: `--config-accent-color`
- Nooca fudud: `--config-accent-light-color`
- Nooca fudud: `--config-accent-lighter-color`
- Nooca ugu fudud: `--config-accent-lightest-color`

Midab kasta wuxuu kaloo leeyahay nooc RGB ah (oo leh -rgb dhamaadka). Tani waxay
waxtar u leedahay abuurista darajooyin iyo saamayn kale oo midab leh.

Sida tusaale ahaan dejinta midab asal ah oo leh opaces

```css
background-color: rbga(var(--config-accent-darkest-color-rgb), 0.5);
```

### Xitaa xulashooyinka midabka ka badan

Ma dooneysaa xulashooyin badan oo midab ah? Selelen Ui wuxuu daaha ka qaadayaa
daraasiin midabo dheeri ah. Hubi tan
[Tixraac midab leh](https://gist.github.com/eythaann/cd9a3cda0206ce23a17f5ea00ec2ba06)
dhammaan xulashooyinka la heli karo.

Pro Tilmaanta: Marka midabka xiisahaagu isbedelo, thelen ui themeates-ka Si
otomaatig ah!
