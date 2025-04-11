# ዌይ ኡ

![A beautifully customized desktop using Seelen UI themes](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/image.png)

የዊንዶውስ ዴስክቶፕዎን አዲስ አዲስ እይታ መስጠት ይፈልጋሉ? ዌይ ዌይ ቀላል ያደርገዋል
 ኃይለኛ ጭብጥ ስርዓቱ. ይህ መመሪያ እንዴት እንደሆነ መሰረታዊ ነገሮች ውስጥ ይራመዳል
 ገጽታዎች ይሰራሉ ​​- የኮድ ኮድ ተሞክሮ አያስፈልግም!

## ለጭንቀት ፈጣሪዎች ልዩ የአረም ስሪት

ከመጀመራችን በፊት ጭብጥ ፈጣሪዎች ስለ ልዩነታችን ማወቅ አለባቸው **ማረሚያ ስሪት**
leghny ui! ይህ ስሪት ያደርግልዎታል-

* እንደ ድረ-ገጽ አካላት (CTRL + Shift +) የገንቢ መሳሪያዎችን መክፈት እችላለሁ)
* የቀጥታ ኤችቲኤምኤል / CSS ለውጦች ይመልከቱ
* የሙከራ ጭብጥ ማሻሻያዎች በቅጽበት
* ቀልድ ጉዳዮችን በቀላሉ ማረም

የአረም ፍሰት ከኛ ያውርዱ
[ሌሊቱን ያሽከረክራል](https://seelen.io/apps/seelen-ui/releases/nightly)
(የሚያጠናቅቁ ፋይሎችን ይመልከቱ) `-debug.exe`, እንደ
`Seelen.UI_2.2.8+20250410073056_x64-setup-debug.exe`).

### ስለ ሌሊዊነት ግንባታ የበለጠ ማወቅ ይፈልጋሉ?

የእኛን ይመልከቱ
[የሌሊት ግንባታ አብራርተዋል](https://seelen.io/blog/seelen-ui-nightly) መጣጥፍ!

## ጭብጥ ፋይሎችን መረዳት

እንደ የቀለም ሽፋን ያሉ የእቃ መጫዎቻዎች ያስቡ. ብዙ ገጽታዎች በ ውስጥ መተግበር ይችላሉ
 አንድ ጊዜ, እና ልክ እንደ ስዕል, ትዕዛዝ ጉዳዮች! ገጽታዎች ሁሉንም ሊለውጡ ይችላሉ
 ከቀላል ቀለሞች ወደ መስኮት ቅጦች.

ሦስት መንገዶች ጭምቶች ሊታገዱ ይችላሉ-

1. **የነጠላ ፋይል ገጽታ** (.YL ፋይል)
2. **ጭብጥ አቃፊ** (ብዙ ፋይሎችን ይ contains ል)
3. **የተካተተ ጭብጥ** (.SLU ፋይል - ልዩ የአሻንጉሊት ዩቲ ቅርጸት)

### ገጽታዎችዎን የት እንደሚያስገቡ

ሁሉም ጭብጦች በኮምፒተርዎ ላይ በዚህ አቃፊ ውስጥ ይሄዳሉ-

```text
C:\Users\{YOUR_USERNAME}\AppData\Roaming\com.seelen.seelen-ui\themes
```

### ጭብጥ አቃፊ አቃፊ

አንድ ጭብጥ አቃፊ ውስጥ ውስጡ ምን እንደሚመስል እነሆ-

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

## በመንፈስ አነሳሽነት

የት ወይም እንዴት መጀመር እንዳለበት እርግጠኛ አይደሉም? ዌይ ዌይ በበርካታ አብሮ የተሠሩ ገጽታዎች ጋር ይመጣል
 እንደ መነሳሻ ሊጠቀም ይችላል! ይመልከቱ
[ነባሪ ገጽታዎች ስብስብ](https://github.com/eythaann/Seelen-UI/tree/master/static/themes)
እንዴት እንደተሠሩ ለማየት.

## ከቀለም ጋር አብሮ መሥራት - ከሚያስቡት በላይ ቀላል ነው!

ዌይ ዌይ በራስ-ሰር የእርስዎን የዊንዶውስ አዘጋጅ ቀለምዎን ያሻሽላል እና ያደርገዋል
 በቀላል ቀለም ተለዋዋጮች በኩል በተለያዩ ጥላዎች ይገኛል.

### ዋናው የአድራሻዎ ቀለም

እነዚህ ተለዋዋጮች በዊንዶውስ ቅንብሮች ውስጥ ያዘጋጃቸውን ቀለም ይጠቀማሉ-

* `--config-accent-color`: ንጹህ ቀለም (እንደ #ffbaaa)
* `--config-accent-color-rgb`: በ RGB ቅርጸት ተመሳሳይ ቀለም (255, 187, 170)

### የተሟላ የቀለም ቤተሰብ

ዌይ ዌይ ከድማማት ቀለምዎ አጠቃላይ ቤተ-ስዕል ይፈጥራል-

![Visual guide to Seelen UI's color palette](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/colors.png)

የሚገኙ ቀለሞች ሙሉ ዝርዝር እነሆ-

* በጣም ጨለማ ስሪት `--config-accent-darkest-color`
* ጠቆር ያለ ትርጉም `--config-accent-darker-color`
* ጨለማ ስሪት `--config-accent-dark-color`
* መደበኛ ስሪት `--config-accent-color`
* ቀላል ስሪት `--config-accent-light-color`
* ቀለል ያለ ስሪት `--config-accent-lighter-color`
* ቀለል ያለ ስሪት `--config-accent-lightest-color`

እያንዳንዱ ቀለም እንዲሁ የ RGB ስሪት አለው (ከ -rGB መጨረሻ ጋር). ይህ ጠቃሚ ነው
 ቀስ በቀስ እና ሌሎች የቀለም ተፅእኖዎችን መፍጠር.

ለምሳሌ ቅንብሮች እንደ የጀርባ ቀለም ከቅጥነት ጋር

```css
background-color: rbga(var(--config-accent-darkest-color-rgb), 0.5);
```

### ተጨማሪ የቀለም አማራጮችም እንኳ

ተጨማሪ የቀለም ምርጫዎችን ይፈልጋሉ? ዌይ ዌይ በደርዘን የሚቆጠሩ ተጨማሪ የስርዓት ቀለሞችን ያወጣል.
 ይህንን ይመልከቱ
[ምቹ የቀለም ማጣቀሻ](https://gist.github.com/eythaann/cd9a3cda0206ce23a17f5ea00ec2ba06)
ለሁሉም የሚገኙ አማራጮች.

Pro Pross ጠቃሚ ምክሮችዎ የቀለም ለውጦች, የእርስዎ የማይታወቁ የዩኒ ጭብጥ ዝመናዎች
 በራስ-ሰር!
