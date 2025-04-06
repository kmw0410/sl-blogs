---
author: Eythaann
published: 13-02-2025
lastRevision: 13-02-2025
title: Saluran pengedaran ui seelen
description: Ketahui mengenai saluran pengedaran yang berbeza untuk Seelen UI

---

# Seelen UI: Kaedah pemasangan dan saluran kemas kini

## Pilihan pemasangan

### Kedai Microsoft (MSIX)

Muat turun versi terkini dari
[Kedai Microsoft](https://www.microsoft.com/store). Ini adalah yang paling selamat dan
 Pilihan mesra pengguna, dengan kemas kini automatik.

**Kelebihan:**

* Kemas kini automatik
* Disahkan dan diluluskan oleh Microsoft
* Keselamatan dan kebolehpercayaan yang tinggi
* Versi ringan daripada .exe pemasang (tiada simbol debug termasuk)

**Keburukan:**

* Kemas kini mungkin mengambil masa 1-3 hari perniagaan untuk kelulusan Microsoft
* Lebih sukar untuk debug dan melaporkan masalah

***

### Winget (MSIX)

Pasang versi terkini menggunakan arahan berikut:

> Pemasangan Winget --d seelen.seelenui

Menawarkan faedah yang sama seperti versi kedai Microsoft dengan ditambah
 kemudahan pemasangan baris arahan.

***

### .exe Installer

Muat turun pemasang setup.exe dari
[Halaman siaran](https://github.com/eythaann/Seelen-UI/releases) dan jalankan.

**Kelebihan:**

* Kemas kini segera tersedia
* Menerima pemberitahuan kemas kini sebaik sahaja versi baru dikeluarkan
* Lebih baik untuk tujuan debug

**Keburukan:**

* Boleh mencetuskan amaran antivirus (tidak ditandatangani secara digital)
* Saiz fail yang lebih besar (termasuk simbol debug)

## Kemas kini saluran

> Tidak kira saluran kemas kini yang anda pilih, semua versi menerima automatik
>  kemas kini. Saluran yang tidak stabil juga menerima kemas kini dari saluran yang lebih stabil
>  (mis., Malam menerima kemas kini dari kedua -dua malam dan beta/pelepasan).

### Siaran (stabil)

Saluran yang paling selamat dan disyorkan untuk semua pengguna.

**Ciri -ciri:**

* Diuji dengan teliti tanpa pepijat kritikal
* Sesuai untuk pengeluaran dan penggunaan seharian
* Tersedia di Microsoft Store, Winget (.six), dan As.

### Beta

Bagi pengguna yang mahukan akses awal kepada ciri -ciri baru sebelum pelepasan rasmi.

**Ciri -ciri:**

* Termasuk ciri -ciri yang akan datang di bawah ujian
* Mungkin mengandungi pepijat kecil
* Kemas kini yang lebih kerap daripada stabil
* Hanya tersedia sebagai pemasangan .exe

### Setiap malam

Bagi pengguna lanjutan dan pemaju yang menginginkan perubahan terkini.

**Ciri -ciri:**

* Mengandungi perubahan terbaru dan belum diuji
* Mungkin termasuk pepijat atau ciri yang tidak lengkap
* Dikemas kini setiap hari atau dengan setiap perubahan kod penting
* Hanya tersedia sebagai pemasangan .exe

Ketahui lebih lanjut mengenai saluran malam di kami
[Seelen ui setiap malam](https://seelen.io/blog/nightly) dokumentasi.

## Mekanisme Kemas kini: Setup.exe vs MSIX

* **MSIX:** Kemas kini diuruskan secara automatik oleh Microsoft Store
* **Setup.exe:** Termasuk pengemaskini terbina dalam yang memberitahu anda apabila kemas kini
   Terdapat

![Seelen UI update notification](https://github.com/Seelen-Inc/slu-blog/blob/master/blog/seelen-ui-distribution-channels/image.png?raw=true)

Apabila kemas kini tersedia:

1. Klik pemberitahuan
2. Pengemas kini akan memuat turun dan memasang kemas kini
3. Permohonan akan dimulakan semula secara automatik
