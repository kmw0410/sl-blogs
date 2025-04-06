---
published: 13-02-2025
author: ko'zi
title: Seelen Ui tarqatish kanallari
description: Seelen UI uchun mavjud bo'lgan turli xil tarqatish kanallari haqida bilib oling
lastRevision: 13-02-2025

---

# Seelen UI: O'rnatish usullari va yangilash kanallari

## O'rnatish variantlari

### Microsoft Store (MSIXIK)

So'nggi versiyani yuklab oling
[Microsoft do'koni](https://www.microsoft.com/store). Bu eng xavfsiz va
Avtomatik yangilanishlar bilan foydalanuvchilarga do'stona variant.

**Taroziga soling:**

* Avtomatik yangilanishlar
* Microsoft tomonidan tasdiqlangan va tasdiqlangan
* Yuqori xavfsizlik va ishonchlilik
* .Exe o'rnatuvchisidan engilroq versiyasi (kiritilmagan belgilar kiritilmaydi)

**Kamchiliklari:**

* Yangilanishlar Microsoft tomonidan tasdiqlanganligi uchun 1-3 ish kunini egallashi mumkin
* Notanish va hisobot berish qiyinroq

***

### Qanot (msix)

Quyidagi buyruq yordamida so'nggi versiyani o'rnating:

> qanotni o'rnatish - Seelen.seelenui

Qo'shilgan bilan Microsoft do'kon versiyasi kabi bir xil imtiyozlarni taklif etadi
Buyruqlarni o'rnatishning qulayligi.

***

### .exe o'rnatuvchisi

Setup.exe o'rnatuvchisini yuklab oling
[Sahifani chiqaring](https://github.com/eythaann/Seelen-UI/releases) va uni ishga tushiring.

**Taroziga soling:**

* Tezkor yangilanishlar mavjud
* Yangi versiyalar chiqarilishi bilan yangilanish haqida bildirishnomalarni oladi
* Nosozliklar uchun yaxshiroq

**Kamchiliklari:**

* Antivirus ogohlantirishlarini qo'zg'atishi mumkin (raqamli imzolanmagan)
* Kattaroq fayl hajmi (doregbet belgilarini o'z ichiga oladi)

## Kanallarni yangilash

> Tanlangan yangilanish kanalidan qat'i nazar, barcha versiyalar avtomatik ravishda qabul qilinadi
> Yangilanishlar. Beqaror kanallar, shuningdek, yangilanishlar yanada barqaror kanallardan oladi
> (masalan, tungi yangilanishlarni tungi va beta-versiyadan oladi).

### Ozod qilish (barqaror)

Barcha foydalanuvchilar uchun eng xavfsiz va tavsiya etilgan kanal.

**Xususiyatlari:**

* Tanqidiy xatolarsiz sinash
* Ishlab chiqarish va kundalik foydalanish uchun ideal
* Microsoft Store, qanot (.msxix) va .exe o'rnatuvchi sifatida mavjud

### Beta

Rasmiy ozod qilishdan oldin yangi xususiyatlarga erta kirishni istagan foydalanuvchilar uchun.

**Xususiyatlari:**

* Sinov paytida bo'lajak funktsiyalarni o'z ichiga oladi
* Kichik xatolar bo'lishi mumkin
* Barqarordan ko'proq tez-tez yangilanishlar
* Faqat .exe o'rnatuvchisi sifatida mavjud

### Tungi

So'nggi o'zgarishlarni istagan ilg'or foydalanuvchilar va ishlab chiquvchilar uchun.

**Xususiyatlari:**

* Eng so'nggi va tekshirilmagan o'zgarishlar mavjud
* Xatolar yoki to'liq bo'lmagan xususiyatlarni o'z ichiga olishi mumkin
* Har kuni yangilangan yoki har bir muhim kod o'zgarishi bilan
* Faqat .exe o'rnatuvchisi sifatida mavjud

Bizda tungi kanal haqida ko'proq ma'lumot oling
[Seelen Ui tungi](https://seelen.io/blog/nightly) Hujjatlar.

## Yangilash mexanizmi: setup.exe vs msiks

* **Msiks:** Microsoft do'koni avtomatik ravishda boshqariladi
* **Setup.exe:** Yangilanishlar mavjud bo'lganda siz o'zingiz xabardor qiladigan dasturlarni o'z ichiga oladi
  mavjud

![Seelen UI update notification](https://github.com/Seelen-Inc/slu-blog/blob/master/blog/seelen-ui-distribution-channels/image.png?raw=true)

Yangilanish mavjud bo'lganda:

1. Xabarnomani bosing
2. Yangilangan dastur yangilashni yuklab oladi va o'rnatadi
3. Ilova avtomatik ravishda qayta boshlanadi
