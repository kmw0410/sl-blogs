# Seelen UI: Tutorial Asas Tema - Sesuaikan desktop anda seperti pro!

![A beautifully customized desktop using Seelen UI themes](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/image.png)

Ingin memberikan desktop Windows anda kelihatan baru? Seelen UI memudahkan
Sistem tema yang kuat. Panduan ini akan membimbing anda melalui asas -asas
bagaimana Tema kerja - tiada pengalaman pengekodan diperlukan!

## Versi debug khas untuk pencipta tema

Sebelum kita memulakan, pencipta tema harus tahu mengenai istimewa kami **versi
debug** Seelen UI! Versi ini membolehkan anda:

- Periksa elemen seperti laman web (Ctrl+Shift+I membuka alat pemaju)
- Lihat perubahan HTML/CSS secara langsung
- Pengubahsuaian tema ujian dengan serta -merta
- Gaya Debug Masalah dengan mudah

Muat turun versi debug dari kami
[Saluran Saluran Malam](https://seelen.io/apps/seelen-ui/releases/nightly) (Cari
fail yang berakhir dengan `-debug.exe`, seperti
`Seelen.UI_2.2.8+20250410073056_x64-setup-debug.exe`).

### Ingin mengetahui lebih lanjut mengenai membina setiap malam?

Lihat kami [Binaan malam dijelaskan](https://seelen.io/blog/seelen-ui-nightly)
Artikel!

## Memahami fail tema

Fikirkan tema Seelen UI seperti lapisan cat. Anda boleh menggunakan pelbagai
tema di Sekali, dan seperti lukisan, perkara penting! Tema boleh mengubah
segalanya Dari warna ke gaya tingkap.

Terdapat tiga cara tema boleh dibungkus:

1. **Tema fail tunggal** (.yml file)
2. **Folder Tema** (Mengandungi pelbagai fail)
3. **Tema termampat** (Fail .slu - format ui seelen khas)

### Di mana untuk meletakkan tema anda

Semua tema masuk dalam folder ini di komputer anda:

```text
C:\Users\{YOUR_USERNAME}\AppData\Roaming\com.seelen.seelen-ui\themes
```

### Struktur folder tema

Inilah folder tema seperti di dalam:

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

## Mendapat Inspirasi: Contoh Tema

Tidak pasti di mana atau bagaimana untuk memulakan? Seelen UI dilengkapi dengan
beberapa tema terbina dalam anda boleh digunakan sebagai inspirasi! Lihat
[Koleksi Tema Lalai](https://github.com/eythaann/Seelen-UI/tree/master/static/themes)
untuk melihat bagaimana mereka dibuat.

## Bekerja dengan warna - lebih mudah daripada yang anda fikirkan!

Seelen UI secara automatik mengambil warna aksen Windows anda dan menjadikannya
Terdapat dalam pelbagai warna melalui pembolehubah warna mudah.

### Warna aksen utama anda

Pembolehubah ini menggunakan warna yang anda tetapkan dalam tetapan Windows:

- `--config-accent-color`: Warna tulen (seperti #ffbbaa)
- `--config-accent-color-rgb`: Warna yang sama dalam format RGB (255, 187, 170)

### Keluarga Warna Lengkap

Seelen UI mencipta keseluruhan palet dari warna aksen anda:

![Visual guide to Seelen UI's color palette](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/colors.png)

Inilah senarai penuh warna yang ada:

- Versi paling gelap: `--config-accent-darkest-color`
- Versi yang lebih gelap: `--config-accent-darker-color`
- Versi Gelap: `--config-accent-dark-color`
- Versi biasa: `--config-accent-color`
- Versi Cahaya: `--config-accent-light-color`
- Versi lebih ringan: `--config-accent-lighter-color`
- Versi paling ringan: `--config-accent-lightest-color`

Setiap warna juga mempunyai versi RGB (dengan -RGB pada akhir). Ini berguna
untuk mewujudkan kecerunan dan kesan warna lain.

Sebagai contoh tetapan warna latar dengan kelegapan:

```css
background-color: rbga(var(--config-accent-darkest-color-rgb), 0.5);
```

### Lebih banyak pilihan warna

Mahukan lebih banyak pilihan warna? Seelen UI mendedahkan berpuluh -puluh warna
sistem tambahan. Lihat ini
[Rujukan warna berguna](https://gist.github.com/eythaann/cd9a3cda0206ce23a17f5ea00ec2ba06)
Untuk semua pilihan yang ada.

Petua Pro: Apabila warna aksen Windows anda berubah, kemas kini tema Seelen UI
anda secara automatik!
