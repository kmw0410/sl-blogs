# **Seelen UI: O'rnatish usullari va yangilash kanallari**

## **O'rnatish variantlari**

### **Microsoft Store (MSIXIK)**

Microsoft do'konidan eng so'nggi versiyasini yuklab oling. Bu eng xavfsiz
 va avtomatik yangilanishlar bilan foydalanuvchilarga do'stona variant.

*   Taroziga soling:
    *   Avtomatik yangilanishlar.
    *   Microsoft tomonidan tasdiqlangan va tasdiqlangan.
    *   Yuqori darajadagi xavfsizlik va ishonchlilik.
    *   .Exe o'rnatuvchisiga qaraganda engil versiyasi, chunki bu versiya bunday emas
         buzilish belgilarini o'z ichiga oladi.
*   Kamchiliklari:
    *   Yangilanishlar tasdiqlanishi kerak bo'lgan 1-3 ish kunini egallashi mumkin.
    *   Nisbatlash va hisobot berish qiyinroq.

***

### **Qanot (msix)**

Quyidagi buyruq yordamida so'nggi versiyani o'rnating:

```pwsh
winget install --id Seelen.SeelenUI
```

Microsoft do'konining plyus orqali tezkor o'rnatish va tezkor do'konga bir xil darajada
 buyruq satri.

***

### \*\*. EXE o'rnatgich \*\*

Setup.exe o'rnatuvchisini Nizomlar sahifasidan yuklab oling va uni ishga tushiring.

*   Taroziga soling:
    *   Tezroq yangilanishlar bilan tezroq o'rnatish.
    *   Ular mavjud bo'lishi bilanoq yangi relizlar uchun bildirishnomalarni oladi.
*   Kamchiliklari:
    *   TMBity imzolagan emas, bu antivirus ogohlantirishlarini qo'zg'atishi mumkin.
    *   Msiks o'rnatuvchisiga qaraganda kamroq vazni kamroq, chunki ushbu versiyada disklar kiradi
         belgilar.

## **Kanallarni yangilash**

> Yangilanish kanalining buzilishi Barcha versiyalar avtomatik yangilanishlarni qabul qiladi,
>  Shuningdek, agar sizning beqaror yangilanish kanalidan foydalanishingiz yangilanishlarni ham oladi
>  yanada barqaror yangilanishlar kanallari, masalan: Nightlarni tundan oling, ammo
>  Beta va ozod qilishdan ham

### **Ozod qilish (barqaror)**

Barcha foydalanuvchilar uchun eng xavfsiz va tavsiya etilgan kanal.

*   Xususiyatlari:
    *   Tanqidiy xatolarsiz sinchkovlik bilan sinovdan o'tkazildi.
    *   Ishlab chiqarish va kundalik foydalanish uchun ideal.
    *   Microsoft Store, qanot, .msx va .exe-da mavjud.

### **Beta**

Rasmiy ravishda ozod qilinishidan oldin yangi xususiyatlarni sinab ko'rmoqchi bo'lgan foydalanuvchilarga qaratilgan.
 Ushbu kanal beta-versiyalarni o'z ichiga oladi.

*   Xususiyatlari:
    *   Sinov paytida yangi funktsiyalarni o'z ichiga oladi.
    *   Kichik xatolar bo'lishi mumkin.
    *   Barqaror versiyadan ko'ra tez-tez tez-tez yangilanishlar.
    *   Faqat Nizomlar sahifasida mavjud.

### **Tungi**

So'nggi o'zgarishlarga kirishni istagan ilg'or foydalanuvchilar va ishlab chiquvchilar uchun va
 eksperimental xususiyatlar.

*   Xususiyatlari:
    *   Eng so'nggi o'zgarishlarni o'z ichiga oladi, ammo yaxshilab sinovdan o'tgan.
    *   Xatolar yoki tugallanmagan xususiyatlardan iborat bo'lishi mumkin.
    *   Kunlik yoki har bir muhim kod o'zgarishi bilan yangilanadi.
    *   Faqat Nizomlar sahifasida .exe.

Haqida ko'proq o'qing [Seelen ui yaqinda](./nightly.md)

## **Yangilanishlarni setup.exe vs msiks-da qabul qilish**

MSIXE yangilanishlarida Microsoft do'konida boshqariladi, ammo setup.exe-da ular
 emas, shuning uchun dasturga qo'shilishi sizga a-ni ko'rsatadi
 yangilanish mavjud bo'lganda xabarnoma.

![Seelen UI update notification on settings window](https://github.com/Seelen-Inc/slu-blog/blob/master/blog/seelen-ui-distribution-channels/image.png?raw=true)

Agar siz bildirishnomani bossangiz, uni yuklab olish va o'rnatish boshlanadi
 Yangilash, shundan so'ng u dasturni avtomatik ravishda qayta boshlaydi.
