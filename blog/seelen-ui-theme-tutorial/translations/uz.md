# Seelen UI: Mavzular uchun qo'llanma - ish stolingizni Pro kabi sozlang!

![A beautifully customized desktop using Seelen UI themes](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/image.png)

Windows ish stolini yangi yangi ko'rinishni taklif qilmoqchimisiz? Seelen UI
buni osonlashtiradi uning kuchli mavzusi tizimi. Ushbu qo'llanma sizni qanday
qilib yuradi mavzular ishi - talab qilinadigan kodlash tajribasi yo'q!

## Mavzu ijodkorlari uchun maxsus disklar versiyasi

Boshlashdan oldin, mavzular bizning maxsusimiz haqida ma'lumot olishlari kerak
**Narx versiyasi** Seelen UI! Ushbu versiya sizga quyidagilar kiradi:

- Veb-sahifaga o'xshash elementlarni tekshirish (CTRL + Shift + men ishlab
  chiqaruvchi vositalarini ochaman)
- Jonli HTML / CSS o'zgaradi
- Darhol sinov mavzusi o'zgarishi
- Narxielly uslublar osonlikcha

Narxi versiyasini bizdan yuklab oling
[Kechasi nashr](https://seelen.io/apps/seelen-ui/releases/nightly) (bilan
tugaydigan fayllarni qidiring) `-debug.exe`, kabi
`Seelen.UI_2.2.8+20250410073056_x64-setup-debug.exe`).

### Kechasi qurish haqida ko'proq ma'lumot olishni xohlaysizmi?

Bizni tekshiring
[Nightle qurilishi izohlanadi](https://seelen.io/blog/seelen-ui-nightly) Maqola!

## Mavzu fayllarini tushunish

Seelen UI mavzularini bo'yoq qatlamlari kabi bir o'ylab ko'ring. Siz bir nechta
mavzularni qo'llashingiz mumkin Bir marta, va xuddi rasm kabi, buyurtma bir xil!
Mavzular hamma narsani o'zgartirishi mumkin ranglardan deraza uslubigacha.

Mavjud mavzular mavjud bo'lishi mumkin:

1. **Bitta fayl mavzusi** (.ML fayl)
2. **Mavzu papkasi** (bir nechta fayl mavjud)
3. **Siqilgan mavzu** (.slu fayli - maxsus Seelen Ui Format)

### Sizning mavzularingizni qayerdan qo'yish kerak

Barcha mavzular ushbu papkada kompyuteringizda:

```text
C:\Users\{YOUR_USERNAME}\AppData\Roaming\com.seelen.seelen-ui\themes
```

### Mavzu jildining tuzilishi

Mana bir mavzu papkasida nimaga o'xshaydi:

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

## Ilhomlangan: misol mavzulari

Qayerda yoki qanday boshlash kerak emasmi? Seelen UI siz bir nechta o'rnatilgan
mavzular bilan birga keladi ilhom sifatida foydalanish mumkin! Tekshiring
[Odatiy mavzular to'plami](https://github.com/eythaann/Seelen-UI/tree/master/static/themes)
nima qilishlarini ko'rish.

## Ranglar bilan ishlash - siz o'ylaganingizdan osonroq!

Seelen UI avtomatik ravishda sizning Windows urg'u rangingizni tanlaydi va uni
qiladi oddiy rang o'zgaruvchilari orqali turli soyalarda mavjud.

### Sizning asosiy urg'u rangi

Ushbu o'zgaruvchilar Windows Sozlamalarida o'rnatgan rangingizdan foydalanib:

- `--config-accent-color`: Sof rang (#FBBAA kabi)
- `--config-accent-color-rgb`: RGB formatida bir xil rang (255, 187, 170)

### To'liq rang oilasi

Seelen Ui sizning urg'u rangingizdan butun palitrani yaratadi:

![Visual guide to Seelen UI's color palette](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/colors.png)

Mana, mavjud ranglarning to'liq ro'yxati:

- Eng qorong'i versiya: `--config-accent-darkest-color`
- Quyuqroq versiya: `--config-accent-darker-color`
- Qorong'i versiyasi: `--config-accent-dark-color`
- Oddiy versiya: `--config-accent-color`
- Engil versiyasi: `--config-accent-light-color`
- Engil versiya: `--config-accent-lighter-color`
- Engil versiyasi: `--config-accent-lightest-color`

Har bir rangda ham RGB versiyasi (oxirida -RGB bilan) mavjud. Bu foydali
Gradientlar va boshqa rang effektlarini yaratish.

Missalda bo'lgan sozlamalar Tanlangan rang:

```css
background-color: rbga(var(--config-accent-darkest-color-rgb), 0.5);
```

### Yanada rang variantlari

Ko'proq ranglar tanlovini xohlaysizmi? Seelen UI o'nlab qo'shimcha tizim
ranglarini fosh qiladi. Buni tekshiring
[Qulay rang ma'lumotnomasi](https://gist.github.com/eythaann/cd9a3cda0206ce23a17f5ea00ec2ba06)
Barcha mavjud variantlar uchun.

Pro TIP: Windowsning giyohvandlik ranglari o'zgarganda, Seelen UI mavzuni
yangilanishlaringiz avtomatik ravishda!
