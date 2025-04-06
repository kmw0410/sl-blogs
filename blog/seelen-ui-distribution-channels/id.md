---
author: Eythaann
description: Pelajari tentang berbagai saluran distribusi yang tersedia untuk Seelen UI
title: Saluran distribusi Seelen UI
published: 13-02-2025
lastRevision: 13-02-2025

---

# Seelen UI: Metode Instalasi dan Perbarui Saluran

## Opsi Instalasi

### Microsoft Store (MSIX)

Unduh versi terbaru dari
[Microsoft Store](https://www.microsoft.com/store). Ini adalah yang paling aman dan
 Opsi ramah pengguna, dengan pembaruan otomatis.

**Pro:**

* Pembaruan otomatis
* Diverifikasi dan disetujui oleh Microsoft
* Keamanan dan keandalan yang tinggi
* Versi yang lebih ringan dari penginstal .exe (tidak termasuk simbol debug)

**Kontra:**

* Pembaruan dapat memakan waktu 1-3 hari kerja untuk persetujuan Microsoft
* Lebih sulit untuk men -debug dan melaporkan masalah

***

### Winget (MSIX)

Instal versi terbaru menggunakan perintah berikut:

> Instal Winget --ID Seelen.seelenui

Menawarkan manfaat yang sama dengan versi Microsoft Store dengan yang ditambahkan
 kenyamanan instalasi baris perintah.

***

### Pemasang .exe

Unduh penginstal setup.exe dari
[Rilis halaman](https://github.com/eythaann/Seelen-UI/releases) dan jalankan.

**Pro:**

* Pembaruan langsung tersedia
* Menerima pemberitahuan pembaruan segera setelah versi baru dirilis
* Lebih baik untuk tujuan debugging

**Kontra:**

* Dapat memicu peringatan antivirus (tidak ditandatangani secara digital)
* Ukuran file yang lebih besar (termasuk simbol debug)

## Perbarui saluran

> Terlepas dari saluran pembaruan yang Anda pilih, semua versi menerima otomatis
>  pembaruan. Saluran yang tidak stabil juga menerima pembaruan dari saluran yang lebih stabil
>  (mis., Nightly menerima pembaruan dari Nightly dan Beta/Release).

### Rilis (stabil)

Saluran yang paling aman dan direkomendasikan untuk semua pengguna.

**Fitur:**

* Diuji secara menyeluruh tanpa bug kritis
* Ideal untuk produksi dan penggunaan sehari -hari
* Tersedia di Microsoft Store, Winget (.msix), dan sebagai penginstal .exe

### Beta

Untuk pengguna yang menginginkan akses awal ke fitur baru sebelum rilis resmi.

**Fitur:**

* Termasuk fitur mendatang dalam pengujian
* Mungkin berisi serangga kecil
* Pembaruan yang lebih sering daripada stabil
* Hanya tersedia sebagai penginstal .exe

### Malam

Untuk pengguna dan pengembang tingkat lanjut yang menginginkan perubahan terbaru.

**Fitur:**

* Berisi perubahan terbaru dan belum teruji
* Mungkin termasuk bug atau fitur yang tidak lengkap
* Diperbarui setiap hari atau dengan setiap perubahan kode yang signifikan
* Hanya tersedia sebagai penginstal .exe

Pelajari lebih lanjut tentang saluran malam di kami
[Seelen Ui setiap malam](https://seelen.io/blog/nightly) dokumentasi.

## Mekanisme Pembaruan: Setup.exe vs MSIX

* **MSIX:** Pembaruan dikelola secara otomatis oleh Microsoft Store
* **Setup.exe:** Termasuk pembaruan bawaan yang memberi tahu Anda saat pembaruan
   tersedia

![Seelen UI update notification](https://github.com/Seelen-Inc/slu-blog/blob/master/blog/seelen-ui-distribution-channels/image.png?raw=true)

Saat pembaruan tersedia:

1. Klik pemberitahuannya
2. Pembaruan akan mengunduh dan menginstal pembaruan
3. Aplikasi akan restart secara otomatis
