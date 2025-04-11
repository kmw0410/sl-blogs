# د متحده ایالاتو وطن به: د تیم اساساتي زده کړه - خپل ډیسټاپ د پرو په څیر دودیز کړئ!

![A beautifully customized desktop using Seelen UI themes](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/image.png)

غواړئ خپل وینډوز ډیسټاپ یو نوی نوی وګورئ؟ سره لیدل کیږي چې تاسو سره اسانه کوي
 د دې قوي تیم سیستم. دا لارښود به تاسو د دې اساساتو له لارې تیریږي
 موضوعات کار کوي - د کوډ کولو هیڅ ډول تجربه نلري!

## د موضوع جوړونکو لپاره ځانګړي ډیبګ نسخه

مخکې لدې چې موږ پیل وکړو، د موضوع جوړونکي باید زموږ د ځانګړي په اړه پوه شي **د ډیبګ نسخه**
د ښایسته UI! دا نسخه تاسو ته اجازه درکوي:

* د پلټنې عناصر یوازې د ویب پا of ې په څیر (CTRLL + شفټ یا بدلولو سره د پراختیا کونکي وسیلې خلاصوي)
* ژوندی HTML / CSS بدلونونه وګورئ
* د ازموینې موضوع په سمدستي ډول
* په اسانۍ سره د ډیبیګ سټینګ مسلې

د ډیب ډي نسخه زموږ څخه ډاونلوډ کړئ
[د شپې خوشې کول چینل](https://seelen.io/apps/seelen-ui/releases/nightly)
(د فایلونو پای ته رسیدو لپاره وګورئ `-debug.exe`، خوښول
`Seelen.UI_2.2.8+20250410073056_x64-setup-debug.exe`).

### ایا غواړئ د شپې له خوا د شپې جوړو په اړه نور معلومات زده کړئ؟

زموږ معاینه کړه
[د شپې جوړونه تشریح شوي](https://seelen.io/blog/seelen-ui-nightly) مقاله!

## د تیمونو فایلونو پوهه

د پینټ د پرتونو په څیر د متحده ایالاتو لیدو په اړه فکر کول. تاسو کولی شئ په ډیری موضوعاتو پلي کړئ
 یوځل، او یوازې د نقاشۍ په څیر، موضوع مهموي! موضوعات کولی شي هرڅه بدل کړي
 له رنګونو څخه د وینډوز سټایلونو ته.

دلته درې لارې شتون لري چې موضوعات یې بسته کیدی شي:

1. **د فایل موضوع** (.yML دوتنه)
2. **د موضوع فولډر** (ډیری فایلونه لري)
3. **فشار تیم** (د .SULL فایل - د ځانګړي لټون UI ب format ه)

### چیرته چې خپل موضوعات ولری

ټول موضوعات په خپل کمپیوټر کې پدې فولډر کې ځي:

```text
C:\Users\{YOUR_USERNAME}\AppData\Roaming\com.seelen.seelen-ui\themes
```

### د موضوع فولډر جوړښت

دلته هغه څه دي چې د موضوع فولډر دننه ښکاري:

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

## د الهام اخیستل شوی: د مثال په توګه موضوعات

ډاډه نه یم چې چیرته یا پیل کوئ؟ تاسو ته د څو جوړ شوي موضوعاتو سره راځي
 کولی شي د الهام په توګه وکاروي! وګوره
[د تلوالو موضوعات ټولګه](https://github.com/eythaann/Seelen-UI/tree/master/static/themes)
ترڅو وګوري چې دوی څنګه جوړ شوي.

## د رنګونو سره کار کول - دا ستاسو په پرتله اسانه دي!

په اتوماتيک ډول د خپل وینډوز سرعت رنګ غوره کوي او هغه جوړوي
 د ساده رنګ تغیراتو له لارې په مختلف ډول ډولونو کې شتون لري.

### ستاسو اصلي تلفظ رنګ

دا تغیرات د وینډوز تنظیماتو کې رنګ شوي رنګ کاروي:

* `--config-accent-color`: خالص رنګ (لکه #ffbaa)
* `--config-accent-color-rgb`: د RGB ب format ه کې ورته رنګ (255، 187، 170)

### د بشپړ رنګ کورنۍ

د خپل تلفظي رنګ څخه ټول پیلوټ رامینځته کړئ:

![Visual guide to Seelen UI's color palette](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/colors.png)

دلته د شته رنګونو بشپړ لیست دی:

* ډېر نسخه: `--config-accent-darkest-color`
* توریز نسخه: `--config-accent-darker-color`
* تیاره نسخه: `--config-accent-dark-color`
* منظم نسخه: `--config-accent-color`
* د سپک نسخه: `--config-accent-light-color`
* سپک نسخه: `--config-accent-lighter-color`
* روښانه نسخه: `--config-accent-lightest-color`

هر رنګ هم د RGB نسخه هم لري (په پای کې - په پای کې). دا د دې لپاره ګټور دی
 منځګړي او د رنګ نور رنګونو رامینځته کول.

د مثال په توګه تنظیمات د شدید سره د شاليد رنګ:

```css
background-color: rbga(var(--config-accent-darkest-color-rgb), 0.5);
```

### حتی نور د رنګ اختیارونه

د رنګ ډیر انتخابونه غواړئ؟ ښایسته اینی د سیستمونه د اضافي سیستم رنګونو افشا کوي.
 دا وګوره
[د رنګ رنګ حواله](https://gist.github.com/eythaann/cd9a3cda0206ce23a17f5ea00ec2ba06)
د ټولو موجود انتخابونو لپاره.

د پروف لمبر: کله چې ستاسو د وینډوز تیزس رنګ بدلونونه، ستاسو د ښایسته UI تیم تازه معلومات
 په اتوماتيک ډول!
