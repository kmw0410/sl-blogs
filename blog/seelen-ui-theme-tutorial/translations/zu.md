# I-Seelen UI: Isifundo se-Basics ye-Theme - Yenza ngokwezifiso ideskithophu yakho njenge-pro!

![A beautifully customized desktop using Seelen UI themes](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/image.png)

Ufuna ukunikeza i-desktop yakho yeWindows Presh Ukubukeka okusha? I-Seelen UI
yenza kube lula nge uhlelo lwayo olunamandla lwetimu. Lo mhlahlandlela
uzokuhamba ngezisekelo zendlela Izindikimba ziyasebenza - akukho okuhlangenwe
nakho kwamakhodi okudingekayo!

## Inguqulo ekhethekile ye-debug yabadali be-theme

Ngaphambi kokuthi siqale, abadali betimu kufanele bazi ngokukhethekile kwethu
**Uhlobo lwe-Debug** ye-Seelen UI! Le nguqulo ikuvumela:

- Hlola izinto njengekhasi le-web (Ctrl + Shift + ivula amathuluzi onjiniyela)
- Bheka Izinguquko ze-HTML / CSS bukhoma
- Hlola ukuguqulwa kwengqikithi ngokushesha
- Izingqinamba Zokwenza iphutha

Landa i-Debug Version kusuka kwethu
[Isiteshi sokukhipha sasebusuku](https://seelen.io/apps/seelen-ui/releases/nightly)
(Bheka amafayela aphela nge `-debug.exe`, njenge
`Seelen.UI_2.2.8+20250410073056_x64-setup-debug.exe`).

### Ufuna ukufunda kabanzi mayelana nokwakhiwa ebusuku?

Bheka kwethu
[Kwachaza ukwakhiwa ebusuku](https://seelen.io/blog/seelen-ui-nightly) Isigaba!

## Ukuqonda amafayela e-Theme

Cabanga nge-Seelen UI Themes njengezendlalelo zopende. Ungafaka izindikimba
eziningi ku- Kanye, futhi njengokupenda, izindaba ze-oda! Izindikimba
zingashintsha konke Kusuka kwimibala kuya ezitayeleni zewindi.

Kunezindlela ezintathu zezindlela ezingafakwa ngazo:

1. **Ingqikithi yefayela elilodwa** (.yml file)
2. **Ifolda ye-theme** (iqukethe amafayela amaningi)
3. **Isihloko esicindezelwe** (.slu ifayili - ifomethi ye-weelen ui ekhethekile)

### Lapho ubeka khona izingqikithi zakho

Zonke izingqikithi ziya kule folda kwikhompyutha yakho:

```text
C:\Users\{YOUR_USERNAME}\AppData\Roaming\com.seelen.seelen-ui\themes
```

### Isethi yefolda yefolda

Nakhu ifolda yengqikimba ebukeka ngaphakathi:

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

## Ukuphefumulelwa: Izindikimba ze-Isibonelo

Awunaso isiqiniseko sokuthi ungaqala kuphi noma kanjani? I-Seelen UI iza
nezindikimba ezakhelwe ngaphakathi Ungasebenzisa njengokuphefumulelwa! Bheka
[Ukuqoqwa kwezindikimba ezenzakalelayo](https://github.com/eythaann/Seelen-UI/tree/master/static/themes)
ukubona ukuthi zenziwa kanjani.

## Ukusebenza ngemibala - kulula ukwedlula indlela ocabanga ngayo!

I-Seelen UI ithatha ngokuzenzakalelayo umbala wakho we-Windows Accent futhi
yenze Kutholakala ngemithunzi ehlukene ngokusebenzisa okuhlukahlukene kombala.

### Umbala wakho we-Accent Omukhulu

Lezi zinhlobonhlobo zisebenzisa umbala owubekile kuzilungiselelo zeWindows:

- `--config-accent-color`: Umbala ohlanzekile (njenge #ffbbaa)
- `--config-accent-color-rgb`: Umbala ofanayo ngefomethi ye-RGB (255, 187, 170)

### Umndeni ophelele wemibala

I-Seelen UI idala iphalethi lonke kusuka kumbala wakho we-accent:

![Visual guide to Seelen UI's color palette](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/colors.png)

Nalu uhlu oluphelele lwemibala etholakalayo:

- Uhlobo olumnyama kakhulu: `--config-accent-darkest-color`
- Uhlobo lwe-Breaker: `--config-accent-darker-color`
- Uhlobo Olumnyama: `--config-accent-dark-color`
- Uhlobo Lwesikhathi Esijwayelekile: `--config-accent-color`
- Uhlobo olukhanyayo: `--config-accent-light-color`
- I-Light Floghter version: `--config-accent-lighter-color`
- Uhlobo Olukhanyayo: `--config-accent-lightest-color`

Umbala ngamunye uphinde ube nenguqulo ye-RGB (ene -rgb ekugcineni). Lokhu
kuyasiza ukudala ama-gradients neminye imiphumela yombala.

Njengezilungiselelo zesibonelo ngombala wangemuva nge-opacity:

```css
background-color: rbga(var(--config-accent-darkest-color-rgb), 0.5);
```

### Izinketho eziningi zemibala

Ufuna izinqumo zemibala eminingi? I-Seelen UI idalula inqwaba yemibala yohlelo
eyengeziwe. Bheka lokhu
[Inkomba yombala elusizo](https://gist.github.com/eythaann/cd9a3cda0206ce23a17f5ea00ec2ba06)
Kuzo zonke izinketho ezitholakalayo.

Ithiphu ye-Pro: Uma umbala wakho we-Windows Accent Ushintsho, izibuyekezo zakho
ze-Seelen UI Ngokuzenzakalelayo!
