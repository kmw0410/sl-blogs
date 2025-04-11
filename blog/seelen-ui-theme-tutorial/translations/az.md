# SEELEN UI: Tema əsasları Tutorial - masaüstünüzü bir pro kimi düzəldin!

![A beautifully customized desktop using Seelen UI themes](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/image.png)

Windows masaüstünüzə təzə yeni bir görünüş vermək istəyirsiniz? Seelen UI bunu
asanlaşdırır güclü tema sistemi. Bu təlimat sizi necə izah edəcəkdir Mövzular
işləyir - kodlaşdırma təcrübəsi tələb olunmur!

## Mövzu yaradıcıları üçün xüsusi debug versiyası

Başlamazdan əvvəl, mövzu yaradıcıları xüsusi olaraq bilməlidirlər **debug
versiyası** seelen ui! Bu versiya sizə imkan verir:

- Elementləri bir veb səhifə kimi yoxlayın (CTRL + Shift + Mən geliştirici
  alətləri açıram)
- Canlı HTML / CSS dəyişikliklərinə baxın
- Dərhal tema toxi dəyişiklikləri
- Debug styling problemləri asanlıqla

Debug versiyasını bizimdən yükləyin
[Gecə yayımlayır Kanal](https://seelen.io/apps/seelen-ui/releases/nightly) (İlə
bitən faylları axtarın `-debug.exe`, kimi
`Seelen.UI_2.2.8+20250410073056_x64-setup-debug.exe`).

### Gecə qurulması haqqında daha çox məlumat əldə etmək istəyirsiniz?

Yoxlamaq [Gecə qurduğu izah edildi](https://seelen.io/blog/seelen-ui-nightly)
Məqalə!

## Tema fayllarını başa düşmək

Seelen UI mövzularını boya təbəqələri kimi düşünün. Birdən çox mövzu tətbiq edə
bilərsiniz Bir dəfə və yalnız rəsm kimi, sifariş vacibdir! Mövzular hər şeyi
dəyişə bilər rənglərdən pəncərə üslublarına qədər.

Üç yol var ki, temaları qablaşdırıla bilər:

1. **Tək fayl mövzusu** (.yml faylı)
2. **Tema qovluğu** (birdən çox fayl var)
3. **Sıxılmış mövzu** (.slu faylı - Xüsusi Seelen UI formatı)

### Mövzularınızı harada qoymaq olar

Bütün mövzular bu qovluqda kompüterinizdə gedir:

```text
C:\Users\{YOUR_USERNAME}\AppData\Roaming\com.seelen.seelen-ui\themes
```

### Tema qovluq quruluşu

Budur bir mövzu qovluğu içəridə necə göründü:

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

## İlham almaq: Misal mövzular

Harada və ya necə başlamaq lazım olduğundan əmin deyilsiniz? Seelen UI sizin
üçün bir neçə daxili mövzu ilə gəlir ilham olaraq istifadə edə bilər! Yoxlamaq
[Defolt Mövzular toplusu](https://github.com/eythaann/Seelen-UI/tree/master/static/themes)
necə edildiyini görmək.

## Rənglərlə işləmək - düşündüyünüzdən daha asandır!

Seelen UI avtomatik olaraq Windows vurğu rənginizi götürür və edir Sadə rəng
dəyişənləri vasitəsilə müxtəlif çalarlarda mövcuddur.

### Əsas vurğu rənginiz

Bu dəyişənlər Windows Parametrlərində quraşdırdığınız rəngdən istifadə edir:

- `--config-accent-color`: Təmiz rəng (#ffbbaa kimi)
- `--config-accent-color-rgb`: RGB formatında eyni rəng (255, 187, 170)

### Tam rəngli ailə

Seelen UI, vurğu rənginizdən bir palitranı yaradır:

![Visual guide to Seelen UI's color palette](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/colors.png)

Mövcud rənglərin tam siyahısı:

- Ən qaranlıq versiya: `--config-accent-darkest-color`
- Tünd versiyası: `--config-accent-darker-color`
- Qaranlıq versiya: `--config-accent-dark-color`
- Daimi versiya: `--config-accent-color`
- İşıq versiyası: `--config-accent-light-color`
- Daha yüngül versiya: `--config-accent-lighter-color`
- Ən yüngül versiya: `--config-accent-lightest-color`

Hər rəngdə bir RGB versiyası da var (sonunda -RGB ilə). Bu üçün faydalıdır
Gradients və digər rəng effektləri yaratmaq.

Misal parametrləri kimi qeyri-şəffaflığı olan fon rəngi:

```css
background-color: rbga(var(--config-accent-darkest-color-rgb), 0.5);
```

### Daha da rəngli seçimlər

Daha çox rəng seçimini istəyirsiniz? Seelen UI onlarla əlavə sistem rəngini ifşa
edir. Buna baxın
[Əlverişli rəng arayışı](https://gist.github.com/eythaann/cd9a3cda0206ce23a17f5ea00ec2ba06)
Bütün mövcud seçimlər üçün.

Pro tipi: Windows-un vurğu rəngi dəyişdikdə, Seelen UI Tema yeniləmələriniz
Avtomatik!
