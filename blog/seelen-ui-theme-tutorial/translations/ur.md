# سیلین UI: تھیم بیسک ٹیوٹوریل - اپنے ڈیسک ٹاپ کو کسی پرو کی طرح اپنی مرضی کے مطابق بنائیں!

![A beautifully customized desktop using Seelen UI themes](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/image.png)

اپنے ونڈوز ڈیسک ٹاپ کو ایک نئی نئی شکل دینا چاہتے ہو؟ سیلین UI اس کے ساتھ آسان بنا دیتا ہے
اس کا طاقتور تھیم سسٹم۔ یہ گائیڈ آپ کو کس طرح کی بنیادی باتوں سے گزرے گا
تھیمز کام کرتے ہیں - کوڈنگ کے کسی تجربے کی ضرورت نہیں ہے!

## تھیم تخلیق کاروں کے لئے خصوصی ڈیبگ ورژن

اس سے پہلے کہ ہم شروع کریں ، تھیم تخلیق کاروں کو ہمارے خصوصی کے بارے میں جاننا چاہئے **ڈیبگ ورژن**
سیلین UI کے! یہ ورژن آپ کو اجازت دیتا ہے:

* عناصر کا معائنہ بالکل اسی طرح جیسے ویب پیج (Ctrl+Shift+I ڈویلپر ٹولز کھولتا ہے)
* براہ راست HTML/CSS تبدیلیاں دیکھیں
* ٹیسٹ تھیم میں ترمیم فوری طور پر
* اسٹائل کے مسائل آسانی سے ڈیبگ کریں

ہمارے سے ڈیبگ ورژن ڈاؤن لوڈ کریں
[رات کے وقت چینل جاری کرتا ہے](https://seelen.io/apps/seelen-ui/releases/nightly)
(ختم ہونے والی فائلوں کی تلاش کریں `-debug.exe`، جیسے
`Seelen.UI_2.2.8+20250410073056_x64-setup-debug.exe`)

### رات کی تعمیر کے بارے میں مزید معلومات حاصل کرنا چاہتے ہو؟

ہمارے چیک کریں
[رات کی تعمیر کی وضاحت کی گئی](https://seelen.io/blog/seelen-ui-nightly) مضمون!

## تھیم فائلوں کو سمجھنا

پینٹ کی پرتوں کی طرح سیلین UI تھیمز کے بارے میں سوچئے۔ آپ ایک سے زیادہ تھیمز کا اطلاق کرسکتے ہیں
ایک بار ، اور پینٹنگ کی طرح ، آرڈر کی اہمیت ہے! تھیمز سب کچھ بدل سکتے ہیں
رنگوں سے ونڈو شیلیوں تک۔

تھیمز کو پیک کیا جاسکتا ہے تین طریقے ہیں:

1. **سنگل فائل تھیم** (.iml فائل)
2. **تھیم فولڈر** (متعدد فائلوں پر مشتمل ہے)
3. **کمپریسڈ تھیم** (.SLU فائل - خصوصی سیلین UI فارمیٹ)

### اپنے موضوعات کو کہاں رکھنا ہے

تمام تھیمز آپ کے کمپیوٹر پر اس فولڈر میں جاتے ہیں:

```text
C:\Users\{YOUR_USERNAME}\AppData\Roaming\com.seelen.seelen-ui\themes
```

### تھیم فولڈر کا ڈھانچہ

یہاں ایک تھیم فولڈر اندر کی طرح دکھتا ہے:

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

## حوصلہ افزائی کرنا: مثال کے موضوعات

یقین نہیں ہے کہ کہاں یا کیسے شروع کریں؟ سیلین UI آپ کے متعدد بلٹ ان تھیمز کے ساتھ آتا ہے
الہام کے طور پر استعمال کر سکتے ہیں! چیک کریں
[پہلے سے طے شدہ موضوعات کا مجموعہ](https://github.com/eythaann/Seelen-UI/tree/master/static/themes)
یہ دیکھنے کے لئے کہ وہ کیسے بنائے گئے ہیں۔

## رنگوں کے ساتھ کام کرنا - یہ آپ کے خیال سے کہیں زیادہ آسان ہے!

سیلین UI خود بخود آپ کے ونڈوز لہجے کا رنگ چنتا ہے اور اسے بنا دیتا ہے
سادہ رنگ متغیر کے ذریعہ مختلف رنگوں میں دستیاب ہے۔

### آپ کا بنیادی لہجہ رنگ

یہ متغیرات ونڈوز کی ترتیبات میں آپ کے رنگ کے رنگ کا استعمال کرتے ہیں:

* `--config-accent-color`: خالص رنگ (جیسے #ffbbaa)
* `--config-accent-color-rgb`: آرجیبی فارمیٹ میں ایک ہی رنگ (255 ، 187 ، 170)

### مکمل رنگین کنبہ

سیلین UI آپ کے لہجے کے رنگ سے ایک پورا پیلیٹ تیار کرتا ہے:

![Visual guide to Seelen UI's color palette](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/colors.png)

دستیاب رنگوں کی مکمل فہرست یہ ہے:

* تاریک ترین ورژن: `--config-accent-darkest-color`
* گہرا ورژن: `--config-accent-darker-color`
* تاریک ورژن: `--config-accent-dark-color`
* باقاعدہ ورژن: `--config-accent-color`
* لائٹ ورژن: `--config-accent-light-color`
* ہلکا ورژن: `--config-accent-lighter-color`
* ہلکا ترین ورژن: `--config-accent-lightest-color`

ہر رنگ کا ایک آر جی بی ورژن بھی ہوتا ہے (آخر میں -RGB کے ساتھ)۔ یہ مفید ہے
میلان اور دیگر رنگ اثرات پیدا کرنا۔

مثال کے طور پر ترتیبات دھندلاپن کے ساتھ ایک پس منظر کا رنگ:

```css
background-color: rbga(var(--config-accent-darkest-color-rgb), 0.5);
```

### اس سے بھی زیادہ رنگ کے اختیارات

مزید رنگ کے انتخاب چاہتے ہیں؟ سیلن UI نے نظام کے درجنوں رنگوں کو بے نقاب کیا۔
یہ چیک کریں
[آسان رنگ کا حوالہ](https://gist.github.com/eythaann/cd9a3cda0206ce23a17f5ea00ec2ba06)
تمام دستیاب اختیارات کے لئے۔

پرو ٹپ: جب آپ کے ونڈوز لہجے کا رنگ بدل جاتا ہے تو ، آپ کے سیلین UI تھیم کی تازہ کاری ہوتی ہے
خود بخود!
