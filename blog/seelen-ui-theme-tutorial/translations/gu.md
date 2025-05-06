# સીલેન UI: થીમ બેઝિક્સ ટ્યુટોરિયલ - તમારા ડેસ્કટને પ્રો જેવા કસ્ટમાઇઝ કરો!

![A beautifully customized desktop using Seelen UI themes](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/image.png)

તમારા વિંડોઝ ડેસ્કટ? પને એક નવો નવો દેખાવ આપવા માંગો છો? સીલેન યુઆઈ તેને સરળ બનાવે છે તેની
શક્તિશાળી થીમ સિસ્ટમ. આ માર્ગદર્શિકા તમને કેવી રીતેની મૂળભૂત બાબતોમાં આગળ વધશે થીમ્સ કામ કરે
છે - કોઈ કોડિંગ અનુભવ જરૂરી નથી!

## થીમ નિર્માતાઓ માટે વિશેષ ડિબગ સંસ્કરણ

આપણે પ્રારંભ કરતા પહેલા, થીમ નિર્માતાઓએ આપણા વિશેષ વિશે જાણવું જોઈએ **ઉઘાડું સંસ્કરણ** સીલેન
યુઆઈ! આ સંસ્કરણ તમને મંજૂરી આપે છે:

- વેબ પૃષ્ઠની જેમ તત્વોનું નિરીક્ષણ કરો (સીટીઆરએલ+શિફ્ટ+હું વિકાસકર્તા ટૂલ્સ ખોલે છે)
- લાઇવ એચટીએમએલ/સીએસએસ ફેરફારો જુઓ
- પરીક્ષણ થીમ ફેરફારો તરત જ
- ડીબગ સ્ટાઇલ ઇશ્યૂ સરળતાથી

અમારામાંથી ડિબગ સંસ્કરણ ડાઉનલોડ કરો
[નાઇટલી રિલીઝ ચેનલ](https://seelen.io/apps/seelen-ui/releases/nightly) (સમાપ્ત થતી
ફાઇલો માટે જુઓ `-debug.exe`, જેમ
`Seelen.UI_2.2.8+20250410073056_x64-setup-debug.exe`).

### રાત્રિના બિલ્ડ્સ વિશે વધુ જાણવા માંગો છો?

અમારા તપાસો [રાત્રિના બિલ્ડ્સ સમજાવી](https://seelen.io/blog/seelen-ui-nightly) લેખ!

## થીમ ફાઇલો સમજવી

પેઇન્ટના સ્તરો જેવા સીલેન યુઆઈ થીમ્સ વિશે વિચારો. તમે બહુ બહુવિધ થીમ્સ લાગુ કરી શકો છો એકવાર,
અને પેઇન્ટિંગની જેમ જ, ઓર્ડર મહત્વપૂર્ણ છે! થીમ્સ બધું બદલી શકે છે રંગોથી વિંડો શૈલીઓ સુધી.

ત્યાં થીમ્સ પેક કરી શકાય ત્યાં ત્રણ રીતો છે:

1. **એક ફાઇલ થીમ** (.એમએલ ફાઇલ)
2. **થીમ ફોલ્ડર** (બહુવિધ ફાઇલો શામેલ છે)
3. **સંકુચિત થીમ** (.slu ફાઇલ - વિશેષ સીલેન UI ફોર્મેટ)

### તમારી થીમ્સ ક્યાં મૂકવા

બધા થીમ્સ તમારા કમ્પ્યુટર પર આ ફોલ્ડરમાં જાય છે:

```text
C:\Users\{YOUR_USERNAME}\AppData\Roaming\com.seelen.seelen-ui\themes
```

### થીમ ફોલ્ડર માળખું

અહીં થીમ ફોલ્ડર જેવું દેખાય છે તે અહીં છે:

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

## પ્રેરણા મેળવવી: ઉદાહરણ થીમ્સ

ખાતરી નથી કે ક્યાં અથવા કેવી રીતે શરૂ કરવું? સીલેન યુઆઈ તમને ઘણા બિલ્ટ-ઇન થીમ્સ સાથે આવે છે
પ્રેરણા તરીકે ઉપયોગ કરી શકે છે! તપાસો
[ડિફોલ્ટ થીમ્સ સંગ્રહ](https://github.com/eythaann/Seelen-UI/tree/master/static/themes)
તેઓ કેવી રીતે બનાવવામાં આવે છે તે જોવા માટે.

## રંગો સાથે કામ કરવું - તે તમારા વિચારો કરતાં વધુ સરળ છે!

સીલેન યુઆઈ આપમેળે તમારા વિંડોઝ ઉચ્ચારનો રંગ ચૂંટે છે અને તેને બનાવે છે સરળ રંગ ચલો દ્વારા વિવિધ
શેડ્સમાં ઉપલબ્ધ છે.

### તમારો મુખ્ય ઉચ્ચાર રંગ

આ ચલો વિંડોઝ સેટિંગ્સમાં તમે સેટ કરેલા રંગનો ઉપયોગ કરો:

- `--config-accent-color`: શુદ્ધ રંગ (જેમ કે #ffbbaa)
- `--config-accent-color-rgb`: આરજીબી ફોર્મેટમાં સમાન રંગ (255, 187, 170)

### સંપૂર્ણ રંગ પરિવાર

સીલેન યુઆઈ તમારા ઉચ્ચાર રંગથી આખી પેલેટ બનાવે છે:

![Visual guide to Seelen UI's color palette](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/colors.png)

અહીં ઉપલબ્ધ રંગોની સંપૂર્ણ સૂચિ છે:

- ડાર્કસ્ટ વર્ઝન: `--config-accent-darkest-color`
- ઘાટા સંસ્કરણ: `--config-accent-darker-color`
- ડાર્ક વર્ઝન: `--config-accent-dark-color`
- નિયમિત સંસ્કરણ: `--config-accent-color`
- પ્રકાશ સંસ્કરણ: `--config-accent-light-color`
- હળવા સંસ્કરણ: `--config-accent-lighter-color`
- હળવા સંસ્કરણ: `--config-accent-lightest-color`

દરેક રંગમાં આરજીબી સંસ્કરણ પણ હોય છે (અંતમાં -આરજીબી સાથે). આ માટે ઉપયોગી છે grad ાળ અને અન્ય
રંગ અસરો બનાવવી.

ઉદાહરણ તરીકે, અસ્પષ્ટ સાથે પૃષ્ઠભૂમિ રંગ સેટ કરો:

```css
background-color: rbga(var(--config-accent-darkest-color-rgb), 0.5);
```

### વધુ રંગ વિકલ્પો

વધુ રંગ પસંદગીઓ જોઈએ છે? સીલેન યુઆઈ ડઝનેક વધારાના સિસ્ટમ રંગોને છતી કરે છે. આ તપાસો
[હાથ](https://gist.github.com/eythaann/cd9a3cda0206ce23a17f5ea00ec2ba06) બધા
ઉપલબ્ધ વિકલ્પો માટે.

પ્રો ટીપ: જ્યારે તમારી વિંડોઝ ઉચ્ચાર રંગ બદલાય છે, ત્યારે તમારી સીલેન યુઆઈ થીમ અપડેટ્સ આપમેળે!
