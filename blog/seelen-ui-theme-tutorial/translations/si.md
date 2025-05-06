# සීලන් යූඅයි: තේමාව මූලික කරුණු නිබන්ධනය - ප්රෝ වැනි ඔබේ ඩෙස්ක්ටොප් එක අභිරුචිකරණය කරන්න!

![A beautifully customized desktop using Seelen UI themes](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/image.png)

ඔබේ වින්ඩෝස් ඩෙස්ක්ටොප් එක නැවුම් නව පෙනුමක් ලබා දීමට අවශ්යද? සීලන් UI එය පහසු කරයි එහි බලවත් තේමා
පද්ධතිය. මෙම මාර්ගෝපදේශය කෙසේද යන්න පිළිබඳ මූලික කරුණු හරහා ඔබව ගමන් කරනු ඇත තේමාවන් වැඩ -
කේතීකරණ අත්දැකීමක් අවශ්ය නොවේ!

## තේමා නිර්මාණකරුවන් සඳහා විශේෂ නිදොස්කාරිය

අප ආරම්භ කිරීමට පෙර, තේමාව නිර්මාණකරුවන් අපගේ විශේෂ ගැන දැන සිටිය යුතුය **නිදොස්කා අනුවාදය** සීලන් යූ!
මෙම අනුවාදය ඔබට ඔබට ඉඩ දෙයි:

- වෙබ් පිටුවක් මෙන් (Ctrl + Shift + මම සංවර්ධක මෙවලම් විවෘත කරයි) වැනි අංග පරීක්ෂා කරන්න
- සජීවී HTML / CSS වෙනස්කම් බලන්න
- තේමාව වෙනස් කිරීම් ක්ෂණිකව පරීක්ෂා කරන්න
- මෝස්තර ගැටළු පහසුවෙන් නිදොස් කිරීම

අපෙන් නිදොස්කා අනුවාදය බාගන්න
[රාත්රී නාලිකාව මුදා හැරියේය](https://seelen.io/apps/seelen-ui/releases/nightly) (අවසන් වන
ගොනු සොයන්න `-debug.exe`, වගේ
`Seelen.UI_2.2.8+20250410073056_x64-setup-debug.exe`).

### රාත්රී ගොඩනැඟිලි ගැන තව දැන ගැනීමට අවශ්යද?

අපේ බලන්න [රාත්රී ගොඩනැඟිලි පැහැදිලි කළේය](https://seelen.io/blog/seelen-ui-nightly)
ලිපිය!

## තේමා ගොනු අවබෝධ කර ගැනීම

තීන්ත ස්ථර මෙන් සීලන් යූ තේමාවන් ගැන සිතන්න. ඔබට තේමාවන් කිහිපයක් යෙදිය හැකිය වරක්, සහ පින්තාරු කිරීම
වැනි, නියෝගය වැදගත් වේ! තේමාවන් සියල්ල වෙනස් කළ හැකිය වර්ණ සිට කවුළු මෝස්තර දක්වා.

තේමාවන් ඇසුරුම් කළ හැකි ආකාර තුනක් තිබේ:

1. **තනි ගොනු තේමාව** (.ම්එල් ගොනුව)
2. **තේමා ෆෝල්ඩරය** (බහු ලිපිගොනු අඩංගු වේ)
3. **සම්පීඩිත තේමාව** (.00LU ගොනුව - විශේෂ සීලන් යූ ආකෘතිය)

### ඔබේ තේමාවන් දැමිය යුතු ස්ථානය

සියළුම තේමාවන් ඔබේ පරිගණකයේ මෙම ෆෝල්ඩරයට යන්න:

```text
C:\Users\{YOUR_USERNAME}\AppData\Roaming\com.seelen.seelen-ui\themes
```

### තේමා ෆෝල්ඩර ව්යුහය

මෙන්න තේමා ෆෝල්ඩරයක් ඇතුළත මෙන් පෙනේ:

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

## දේවානුභාවයෙන්: උදාහරණ තේමාවන්

ආරම්භ කරන්නේ කොහෙන්ද කියා විශ්වාස නැද්ද? සීලන් යූඅයි බිල්ට් තේමාවන් කිහිපයක් සමඟ ඔබ පැමිණේ දේවානුභාවයෙන්
භාවිතා කළ හැකිය! පරීක්ෂා කරන්න
[පෙරනිමි තේමාවන් එකතු කිරීම](https://github.com/eythaann/Seelen-UI/tree/master/static/themes)
ඔවුන් සෑදූ ආකාරය බලන්න.

## වර්ණ සමඟ වැඩ කිරීම - ඔබ සිතනවාට වඩා එය පහසුය!

සීලන් යූඅයි ස්වයංක්රීයව ඔබේ වින්ඩෝස් උච්පා වර්ණය පෙරළා එය සාදයි සරල වර්ණ විචල්යයන් හරහා විවිධ සෙවණැලි
වලින් ලබා ගත හැකිය.

### ඔබේ ප්රධාන උච්චාරණ වර්ණය

මෙම විචල්යයන් වින්ඩෝස් සැකසුම් වල ඔබ සකසා ඇති වර්ණය භාවිතා කරයි:

- `--config-accent-color`: පිරිසිදු වර්ණය (#fbbaaa වැනි)
- `--config-accent-color-rgb`: RGB ආකෘතියේ එකම වර්ණය (255, 187, 170)

### සම්පූර්ණ වර්ණ පවුල

සීලැන් යූඅයි ඔබේ උච්චාරණයෙන් සම්පූර්ණ පලතුරක් නිර්මාණය කරයි:

![Visual guide to Seelen UI's color palette](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/colors.png)

මෙන්න පවතින වර්ණවල සම්පූර්ණ ලැයිස්තුව:

- අඳුරුතම අනුවාදය: `--config-accent-darkest-color`
- අඳුරු අනුවාදය: `--config-accent-darker-color`
- අඳුරු අනුවාදය: `--config-accent-dark-color`
- නිත්ය අනුවාදය: `--config-accent-color`
- ආලෝක අනුවාදය: `--config-accent-light-color`
- සැහැල්ලු අනුවාදය: `--config-accent-lighter-color`
- සැහැල්ලු අනුවාදය: `--config-accent-lightest-color`

සෑම වර්ණයකටම RGB අනුවාදයක් ඇත (අවසානයේ-ජීබී සමඟ). මෙය ප්රයෝජනවත් වේ ප්රමිතීන් සහ වෙනත් වර්ණ
බලපෑම් ඇති කිරීම.

උදාහරණ සැකසීම් ප්රතිස්ථාපනය සහිත පසුබිම් වර්ණයක්:

```css
background-color: rbga(var(--config-accent-darkest-color-rgb), 0.5);
```

### ඊටත් වඩා වර්ණ විකල්ප

වැඩි වර්ණ තේරීම් අවශ්යද? සීලන් යූඅයි අතිරේක පද්ධති වර්ණ දුසිම් ගණනක් හෙළි කරයි. මෙය පරීක්ෂා කරන්න
[වර්ණ යොමු කිරීම](https://gist.github.com/eythaann/cd9a3cda0206ce23a17f5ea00ec2ba06)
පවතින සියලුම විකල්ප සඳහා.

Pro ඉඟිය: ඔබේ වින්ඩෝස් උච්චාරණ වර්ණය වෙනස් වන විට, ඔබේ සීලන් යූ තේමාවන් යාවත්කාලීන කිරීම් ස්වයංක්රීයව!
