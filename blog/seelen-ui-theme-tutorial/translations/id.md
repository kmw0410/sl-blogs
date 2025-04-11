# Seelen UI: Tutorial Dasar Tema - Kustomisasi desktop Anda seperti seorang pro!

![A beautifully customized desktop using Seelen UI themes](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/image.png)

Ingin memberi Windows Desktop tampilan baru yang segar? Seelen UI membuatnya
mudah sistem tema yang kuat. Panduan ini akan memandu Anda melalui dasar -dasar
bagaimana Tema bekerja - tidak diperlukan pengalaman pengkodean!

## Versi Debug Khusus untuk Pembuat Tema

Sebelum kita mulai, pencipta tema harus tahu tentang spesial kita **Versi
debug** dari Seelen Ui! Versi ini memungkinkan Anda:

- Periksa elemen seperti halaman web (ctrl+shift+i membuka alat pengembang)
- Lihat Perubahan HTML/CSS Langsung
- Uji modifikasi tema secara instan
- Masalah penataan debug dengan mudah

Unduh versi debug dari kami
[Saluran Rilis Nightly](https://seelen.io/apps/seelen-ui/releases/nightly) (Cari
file yang diakhiri dengan `-debug.exe`, menyukai
`Seelen.UI_2.2.8+20250410073056_x64-setup-debug.exe`).

### Ingin mempelajari lebih lanjut tentang bangunan malam?

Lihat kami [Bangunan malam dijelaskan](https://seelen.io/blog/seelen-ui-nightly)
artikel!

## Memahami file tema

Pikirkan tema Seelen UI seperti lapisan cat. Anda dapat menerapkan beberapa tema
di Suatu kali, dan seperti melukis, pesanan itu penting! Tema bisa mengubah
segalanya Dari warna ke gaya jendela.

Ada tiga cara tema dapat dikemas:

1. **Tema file tunggal** (file .yml)
2. **Folder tema** (berisi beberapa file)
3. **Tema terkompresi** (.slu File - format UI Seelen Special)

### Dimana harus meletakkan tema Anda

Semua tema masuk ke folder ini di komputer Anda:

```text
C:\Users\{YOUR_USERNAME}\AppData\Roaming\com.seelen.seelen-ui\themes
```

### Struktur folder tema

Inilah folder tema di dalam:

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

## Terinspirasi: Tema contoh

Tidak yakin dari mana atau bagaimana memulainya? Seelen UI hadir dengan beberapa
tema bawaan Anda dapat digunakan sebagai inspirasi! Lihat
[Koleksi tema default](https://github.com/eythaann/Seelen-UI/tree/master/static/themes)
untuk melihat bagaimana mereka dibuat.

## Bekerja dengan warna - lebih mudah dari yang Anda pikirkan!

Seelen UI secara otomatis mengambil warna aksen windows Anda dan membuatnya
Tersedia dalam berbagai warna melalui variabel warna sederhana.

### Warna Aksen Utama Anda

Variabel -variabel ini menggunakan warna yang Anda atur dalam pengaturan
Windows:

- `--config-accent-color`: Warna murni (seperti #FFBBAA)
- `--config-accent-color-rgb`: Warna yang sama dalam format RGB (255, 187, 170)

### Keluarga Warna Lengkap

Seelen UI membuat seluruh palet dari warna aksen Anda:

![Visual guide to Seelen UI's color palette](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/colors.png)

Inilah daftar lengkap warna yang tersedia:

- Versi tergelap: `--config-accent-darkest-color`
- Versi Darker: `--config-accent-darker-color`
- Versi Gelap: `--config-accent-dark-color`
- Versi reguler: `--config-accent-color`
- Versi Cahaya: `--config-accent-light-color`
- Versi yang lebih ringan: `--config-accent-lighter-color`
- Versi teringan: `--config-accent-lightest-color`

Setiap warna juga memiliki versi RGB (dengan -rGB di akhir). Ini berguna untuk
membuat gradien dan efek warna lainnya.

Sebagai contoh pengaturan warna latar belakang dengan opacity:

```css
background-color: rbga(var(--config-accent-darkest-color-rgb), 0.5);
```

### Bahkan lebih banyak pilihan warna

Ingin lebih banyak pilihan warna? Seelen UI memaparkan lusinan warna sistem
tambahan. Lihat ini
[Referensi warna yang praktis](https://gist.github.com/eythaann/cd9a3cda0206ce23a17f5ea00ec2ba06)
untuk semua opsi yang tersedia.

Kiat Pro: Saat warna aksen Windows Anda berubah, pembaruan tema Seelen UI Anda
secara otomatis!
