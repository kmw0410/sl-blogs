# Seelen UI: Mafunzo ya Misingi ya Mada - Badilisha desktop yako kama pro!

![A beautifully customized desktop using Seelen UI themes](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/image.png)

Unataka kutoa desktop yako ya windows sura mpya? Seelen UI hufanya iwe rahisi na
Mfumo wake wa mada wenye nguvu. Mwongozo huu utakutembea kupitia misingi ya
jinsi Mada zinafanya kazi - hakuna uzoefu wa kuweka coding!

## Toleo maalum la Debug kwa waundaji wa mandhari

Kabla ya kuanza, waundaji wa mada wanapaswa kujua kuhusu maalum yetu **Toleo la
Debug** ya Seelen Ui! Toleo hili hukuruhusu:

- Chunguza vitu kama ukurasa wa wavuti (Ctrl+Shift+i inafungua zana za msanidi
  programu)
- Tazama mabadiliko ya moja kwa moja ya HTML/CSS
- Marekebisho ya mandhari ya mtihani mara moja
- Debug Styling maswala kwa urahisi

Pakua toleo la Debug kutoka kwetu
[Kituo cha Kutoa Usiku](https://seelen.io/apps/seelen-ui/releases/nightly)
(Tafuta faili zinazoishia na `-debug.exe`, kama
`Seelen.UI_2.2.8+20250410073056_x64-setup-debug.exe`).

### Unataka kujifunza zaidi juu ya kujenga usiku?

Angalia yetu
[Kuunda usiku kunafafanuliwa](https://seelen.io/blog/seelen-ui-nightly) Kifungu!

## Kuelewa faili za mandhari

Fikiria mada za Seelen UI kama tabaka za rangi. Unaweza kutumia mada nyingi saa
Mara moja, na kama uchoraji, Agizo la Agizo! Mada zinaweza kubadilisha kila kitu
Kutoka kwa rangi hadi mitindo ya dirisha.

Kuna njia tatu za mada zinaweza kusanikishwa:

1. **Mandhari moja ya faili** (faili ya .yml)
2. **Folda ya mandhari** (Inayo faili nyingi)
3. **Mada iliyokandamizwa** (Faili ya .slu - muundo maalum wa UI)

### Wapi kuweka mada zako

Mada zote zinaenda kwenye folda hii kwenye kompyuta yako:

```text
C:\Users\{YOUR_USERNAME}\AppData\Roaming\com.seelen.seelen-ui\themes
```

### Muundo wa folda ya mandhari

Hapa kuna nini folda ya mandhari inaonekana ndani:

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

## Kupata msukumo: Mada za mfano

Sijui ni wapi au jinsi ya kuanza? Seelen UI inakuja na mada kadhaa zilizojengwa
ndani yako Inaweza kutumia kama msukumo! Angalia
[Mkusanyiko wa Mada za Default](https://github.com/eythaann/Seelen-UI/tree/master/static/themes)
kuona jinsi wameumbwa.

## Kufanya kazi na rangi - ni rahisi kuliko vile unavyofikiria!

Seelen UI huchukua moja kwa moja rangi yako ya lafudhi ya windows na inafanya
hivyo Inapatikana katika vivuli tofauti kupitia vijiti rahisi vya rangi.

### Rangi yako kuu ya lafudhi

Lahaja hizi hutumia rangi uliyoweka kwenye Mipangilio ya Windows:

- `--config-accent-color`: Rangi safi (kama #ffbbaa)
- `--config-accent-color-rgb`: Rangi sawa katika muundo wa RGB (255, 187, 170)

### Familia kamili ya rangi

Seelen UI inaunda palette nzima kutoka kwa rangi yako ya lafudhi:

![Visual guide to Seelen UI's color palette](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/colors.png)

Hapa kuna orodha kamili ya rangi zinazopatikana:

- Toleo la giza zaidi: `--config-accent-darkest-color`
- Toleo la giza: `--config-accent-darker-color`
- Toleo la Giza: `--config-accent-dark-color`
- Toleo la kawaida: `--config-accent-color`
- Toleo nyepesi: `--config-accent-light-color`
- Toleo nyepesi: `--config-accent-lighter-color`
- Toleo nyepesi zaidi: `--config-accent-lightest-color`

Kila rangi pia ina toleo la RGB (na -RGB mwishoni). Hii ni muhimu kwa Kuunda
gradients na athari zingine za rangi.

Mfano Mipangilio rangi ya nyuma na opacity:

```css
background-color: rbga(var(--config-accent-darkest-color-rgb), 0.5);
```

### Chaguzi zaidi za rangi

Unataka chaguo zaidi za rangi? Seelen UI inafichua rangi kadhaa za mfumo.
Angalia hii
[Rejea ya rangi inayofaa](https://gist.github.com/eythaann/cd9a3cda0206ce23a17f5ea00ec2ba06)
Kwa chaguzi zote zinazopatikana.

Kidokezo cha Pro: Wakati rangi yako ya lafudhi ya windows inapobadilika, sasisho
zako za mandhari ya seelen UI moja kwa moja!
