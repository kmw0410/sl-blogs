# Seelen UI: آموزش اصول اولیه - دسک تاپ خود را مانند یک حرفه ای سفارشی کنید!

![A beautifully customized desktop using Seelen UI themes](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/image.png)

آیا می خواهید به دسکتاپ ویندوز خود ظاهری جدید جدید بدهید؟ Seelen UI این کار را با آن آسان می کند
 سیستم موضوعی قدرتمند آن. این راهنما شما را از طریق اصول اولیه چگونه طی می کند
 مضامین کار می کنند - هیچ تجربه برنامه نویسی لازم نیست!

## نسخه اشکال زدایی ویژه برای سازندگان تم

قبل از شروع ، سازندگان تم باید در مورد ویژه ما بدانند **نسخه اشکال زدایی**
از Seelen Ui! این نسخه به شما امکان می دهد:

* عناصر را دقیقاً مانند یک صفحه وب بازرسی کنید (Ctrl+Shift+I ابزارهای توسعه دهنده را باز می کند)
* تغییرات زنده HTML/CSS را مشاهده کنید
* اصلاحات موضوع را فوراً آزمایش کنید
* مسائل یک ظاهر طراحی شده اشکال زدایی به راحتی

نسخه اشکال زدایی را از ما بارگیری کنید
[کانال منتشر شده شبانه](https://seelen.io/apps/seelen-ui/releases/nightly)
(به دنبال پرونده هایی باشید که با پایان `-debug.exe`، مانند
`Seelen.UI_2.2.8+20250410073056_x64-setup-debug.exe`).

### آیا می خواهید در مورد ساخت های شبانه اطلاعات بیشتری کسب کنید؟

ما را بررسی کنید
[ساختهای شبانه توضیح داده شده است](https://seelen.io/blog/seelen-ui-nightly) مقاله!

## درک پرونده های تم

به مضامین Seelen UI مانند لایه های رنگ فکر کنید. می توانید چندین موضوع را در
 یک بار ، و درست مثل نقاشی ، سفارش اهمیت دارد! مضامین می توانند همه چیز را تغییر دهند
 از رنگ ها تا سبک های پنجره.

سه روش وجود دارد که می توان بسته بندی کرد:

1. **موضوع یک پرونده** (پرونده .yml)
2. **پوشه** (حاوی چندین پرونده است)
3. **تم فشرده** (پرونده SLU - فرمت ویژه Seelen UI)

### مضامین خود را از کجا قرار دهید

همه مضامین در این پوشه روی رایانه شما می روند:

```text
C:\Users\{YOUR_USERNAME}\AppData\Roaming\com.seelen.seelen-ui\themes
```

### ساختار پوشه تم

در اینجا یک پوشه تم به نظر می رسد:

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

## الهام گرفتن: مضامین مثال

مطمئن نیستید از کجا یا چگونه شروع کنیم؟ Seelen UI با چندین موضوع داخلی شما همراه است
 می تواند به عنوان الهام استفاده کند! بررسی کنید
[مجموعه تم های پیش فرض](https://github.com/eythaann/Seelen-UI/tree/master/static/themes)
برای دیدن نحوه ساخت آنها.

## کار با رنگ ها - این آسانتر از آن است که فکر می کنید!

Seelen UI به طور خودکار رنگ لهجه ویندوز شما را جمع می کند و آن را می سازد
 در سایه های مختلف از طریق متغیرهای رنگی ساده موجود است.

### رنگ اصلی لهجه شما

این متغیرها از رنگی که در تنظیمات ویندوز تنظیم کرده اید استفاده می کنند:

* `--config-accent-color`: رنگ خالص (مانند #ffbbaa)
* `--config-accent-color-rgb`: همان رنگ در قالب RGB (255 ، 187 ، 170)

### خانواده رنگی کامل

Seelen UI یک پالت کامل از رنگ لهجه شما ایجاد می کند:

![Visual guide to Seelen UI's color palette](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/colors.png)

در اینجا لیست کاملی از رنگهای موجود وجود دارد:

* تاریک ترین نسخه: `--config-accent-darkest-color`
* نسخه تاریک تر: `--config-accent-darker-color`
* نسخه تاریک: `--config-accent-dark-color`
* نسخه منظم: `--config-accent-color`
* نسخه سبک: `--config-accent-light-color`
* نسخه سبک تر: `--config-accent-lighter-color`
* سبکترین نسخه: `--config-accent-lightest-color`

هر رنگ همچنین دارای نسخه RGB (با -rgb در پایان) است. این برای
 ایجاد شیب و سایر جلوه های رنگی.

به عنوان مثال تنظیمات یک رنگ پس زمینه با کدورت:

```css
background-color: rbga(var(--config-accent-darkest-color-rgb), 0.5);
```

### حتی گزینه های رنگی بیشتر

انتخاب رنگ بیشتری می خواهید؟ Seelen UI ده ها رنگ سیستم اضافی را در معرض دید قرار می دهد.
 این را بررسی کنید
[مرجع رنگ مفید](https://gist.github.com/eythaann/cd9a3cda0206ce23a17f5ea00ec2ba06)
برای همه گزینه های موجود

نکته حرفه ای: وقتی رنگ لهجه ویندوز شما تغییر می کند ، موضوع Seelen UI شما به روز می شود
 به طور خودکار!
