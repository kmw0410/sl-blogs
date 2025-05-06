# SEELEN UI: Threat BASIC TURIPART - تخصيص سطح المكتب مثل المحترف!

![A beautifully customized desktop using Seelen UI themes](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/image.png)

هل تريد إعطاء سطح مكتب Windows الخاص بك مظهرًا جديدًا جديدًا؟ Seelen UI يجعل الأمر
سهلاً مع نظام موضوعه القوي. هذا الدليل سيمشي بك من خلال أساسيات كيف موضوعات العمل -
لا توجد تجربة ترميز مطلوبة!

## نسخة تصحيح خاصة لمبدعو السمة

قبل أن نبدأ ، يجب أن يعرف المبدعون الموضوعات الخاصة بنا **نسخة تصحيح** من سيلن
واجهة المستخدم! يتيح لك هذا الإصدار:

- فحص العناصر تمامًا مثل صفحة الويب (CTRL+Shift+I Opens Developer Tools)
- انظر تغييرات HTML/CSS الحية
- اختبار تعديلات موضوع على الفور
- قضايا تصحيح التصحيح بسهولة

قم بتنزيل نسخة التصحيح من
[القناة الإصدارات الليلية](https://seelen.io/apps/seelen-ui/releases/nightly)
(ابحث عن الملفات التي تنتهي `-debug.exe`، يحب
`Seelen.UI_2.2.8+20250410073056_x64-setup-debug.exe`).

### هل تريد معرفة المزيد عن التصميم الليلي؟

تحقق من لدينا [شرح البناء الليلي](https://seelen.io/blog/seelen-ui-nightly) شرط!

## فهم ملفات الموضوع

فكر في مواضيع Seelen واجهة المستخدم مثل طبقات الطلاء. يمكنك تطبيق سمات متعددة على
مرة واحدة ، ومثل الرسم ، فإن الأمر مهم! يمكن أن تغير الموضوعات كل شيء من الألوان
إلى أنماط النوافذ.

هناك ثلاث طرق يمكن تعبئة الموضوعات:

1. **موضوع ملف واحد** (ملف .YML)
2. **مجلد الموضوع** (يحتوي على ملفات متعددة)
3. **موضوع مضغوط** (

### أين تضع موضوعاتك

جميع الموضوعات تذهب في هذا المجلد على جهاز الكمبيوتر الخاص بك:

```text
C:\Users\{YOUR_USERNAME}\AppData\Roaming\com.seelen.seelen-ui\themes
```

### بنية مجلد الموضوع

إليك ما يبدو عليه مجلد السمة في الداخل:

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

## الحصول على إلهام: مثال على السمات

لست متأكدا من أين أو كيف تبدأ؟ يأتي Seelen UI مع العديد من الموضوعات المدمجة لك
يمكن أن تستخدم كمصدر إلهام! تحقق من
[مجموعة الموضوعات الافتراضية](https://github.com/eythaann/Seelen-UI/tree/master/static/themes)
لنرى كيف صنعوا.

## العمل مع الألوان - إنه أسهل مما تعتقد!

تقوم Seelen UI تلقائيًا بتقاط لون لهجة Windows ويجعله متوفر في ظلال مختلفة من خلال
متغيرات الألوان البسيطة.

### لون لهجتك الرئيسي

تستخدم هذه المتغيرات اللون الذي تقوم بتعيينه في إعدادات Windows:

- `--config-accent-color`: اللون النقي (مثل #ffbbaa)
- `--config-accent-color-rgb`: نفس اللون بتنسيق RGB (255 ، 187 ، 170)

### عائلة اللون الكاملة

Seelen UI تنشئ لوحة كاملة من لون لهجتك:

![Visual guide to Seelen UI's color palette](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/colors.png)

إليك القائمة الكاملة للألوان المتاحة:

- أحلك نسخة: `--config-accent-darkest-color`
- نسخة أغمق: `--config-accent-darker-color`
- النسخة المظلمة: `--config-accent-dark-color`
- نسخة منتظمة: `--config-accent-color`
- نسخة الضوء: `--config-accent-light-color`
- نسخة أخف: `--config-accent-lighter-color`
- أخف نسخة: `--config-accent-lightest-color`

يحتوي كل لون أيضًا على إصدار RGB (مع -RGB في النهاية). هذا مفيد ل خلق التدرجات
وتأثيرات الألوان الأخرى.

كمثال على إعداد لون الخلفية مع العتامة:

```css
background-color: rbga(var(--config-accent-darkest-color-rgb), 0.5);
```

### حتى المزيد من خيارات الألوان

تريد المزيد من خيارات الألوان؟ Seelen UI تكشف العشرات من ألوان النظام الإضافية.
تحقق من هذا
[مرجع لون مفيد](https://gist.github.com/eythaann/cd9a3cda0206ce23a17f5ea00ec2ba06)
لجميع الخيارات المتاحة.

نصيحة للمحترفين: عندما يتغير لون Windows لهجة ، تحديثات سمة Seelen UI الخاصة بك
تلقائيا!
