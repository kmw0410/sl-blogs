# Seelen UI: روش های نصب و کانال های به روزرسانی

## گزینه های نصب

### فروشگاه مایکروسافت (MSIX)

آخرین نسخه را از [فروشگاه مایکروسافت](https://www.microsoft.com/store)بشر این
امن ترین است و گزینه کاربر پسند ، با به روزرسانی های خودکار.

**جوانب مثبت:**

- به روزرسانی های خودکار
- تأیید و تأیید شده توسط مایکروسافت
- امنیت و قابلیت اطمینان بالا
- نسخه سبک تر از نصب .exe (بدون نماد اشکال زدایی شامل)

**منفی ها:**

- به روزرسانی ها ممکن است 1-3 روز کاری برای تأیید مایکروسافت طول بکشد
- اشکال زدایی و گزارش مسائل دشوارتر است

---

### Winget (MSIX)

آخرین نسخه را با استفاده از دستور زیر نصب کنید:

> نصب بال -id seelen.seelenui

همان مزایای نسخه Microsoft Store را با اضافه شده ارائه می دهد راحتی نصب خط
فرمان.

---

### نصب کننده

نصب Setup.exe را از
[صفحه انتشار](https://github.com/eythaann/Seelen-UI/releases) و آن را اجرا کنید.

**جوانب مثبت:**

- به روزرسانی های فوری موجود است
- به محض انتشار نسخه های جدید اعلان های به روزرسانی را دریافت می کند
- برای اهداف اشکال زدایی بهتر است

**منفی ها:**

- ممکن است هشدارهای آنتی ویروس را تحریک کند (به صورت دیجیتالی امضا نشده است)
- اندازه پرونده بزرگتر (شامل نمادهای اشکال زدایی)

## کانال ها را به روز کنید

> صرف نظر از کانال به روزرسانی انتخاب شده شما ، همه نسخه ها خودکار دریافت می
> کنند به روز رسانی کانال های ناپایدار همچنین به روزرسانی هایی از کانال های
> پایدار دریافت می کنند (به عنوان مثال ، شبانه به روزرسانی هایی را از هر دو شب و
> بتا/انتشار دریافت می کند).

### انتشار (پایدار)

امن ترین و توصیه شده ترین کانال برای همه کاربران.

**ویژگی ها:**

- کاملاً آزمایش شده و بدون اشکال مهم
- ایده آل برای تولید و استفاده روزمره
- موجود در فروشگاه مایکروسافت ، Winget (.msix) و As .exe نصب کننده

### بتا

برای کاربرانی که می خواهند قبل از انتشار رسمی ، دسترسی زودهنگام به ویژگی های
جدید داشته باشند.

**ویژگی ها:**

- شامل ویژگی های آینده تحت آزمایش است
- ممکن است دارای اشکالات جزئی باشد
- به روزرسانی های مکرر نسبت به پایدار
- فقط به عنوان نصب کننده .exe در دسترس است

### شبانه

برای کاربران پیشرفته و توسعه دهندگان که مایل به آخرین تغییرات هستند.

**ویژگی ها:**

- شامل جدیدترین تغییرات آزمایش نشده است
- ممکن است شامل اشکالات یا ویژگی های ناقص باشد
- روزانه یا با هر تغییر کد قابل توجه به روز شده است
- فقط به عنوان نصب کننده .exe در دسترس است

درباره کانال شبانه در ما بیشتر بدانید
[شبانه Seelen ui](https://seelen.io/blog/nightly) مستندات

## مکانیسم به روزرسانی: setup.exe vs msix

- **MSIX:** به روزرسانی ها به طور خودکار توسط Microsoft Store اداره می شوند
- **setup.exe:** شامل بروزرسانی داخلی است که هنگام بروزرسانی به شما اطلاع می دهد
  موجود

![Seelen UI update notification](https://github.com/Seelen-Inc/slu-blog/blob/master/blog/seelen-ui-distribution-channels/image.png?raw=true)

وقتی به روزرسانی در دسترس است:

1. روی اعلان کلیک کنید
2. به روزرسانی به روزرسانی را بارگیری و نصب می کند
3. برنامه به طور خودکار مجدداً راه اندازی می شود
