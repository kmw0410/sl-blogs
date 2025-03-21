# **Seelen UI: Metode Instalasi dan Perbarui Saluran**

## **Opsi Instalasi**

### **Microsoft Store (MSIX)**

Unduh versi terbaru dari Microsoft Store. Ini yang paling aman
 dan opsi ramah pengguna, dengan pembaruan otomatis.

*   Pro:
    *   Pembaruan otomatis.
    *   Diverifikasi dan disetujui oleh Microsoft.
    *   Keamanan dan keandalan yang tinggi.
    *   Versi LightWeighter Dari.Exe Installer karena versi ini tidak
         Termasuk simbol debug.
*   Kontra:
    *   Pembaruan dapat memakan waktu 1-3 hari kerja untuk disetujui.
    *   Lebih sulit untuk men -debug dan melaporkan masalah.

***

### **Winget (MSIX)**

Instal versi terbaru menggunakan perintah berikut:

```pwsh
winget install --id Seelen.SeelenUI
```

Pro dan kontra yang sama dari Microsoft Store dengan plus instalasi cepat melalui
 baris perintah.

***

### \*\*. Penginstal exe \*\*

Unduh penginstal setup.exe dari halaman rilis dan jalankan.

*   Pro:
    *   Instalasi lebih cepat dengan pembaruan langsung.
    *   Menerima pemberitahuan untuk rilis baru segera setelah tersedia.
*   Kontra:
    *   Tidak ditandatangani secara digital, yang dapat memicu peringatan antivirus.
    *   Kurang ringan dari penginstal MSIX karena versi ini termasuk debug
         simbol.

## **Perbarui saluran**

> Indenpendent dari saluran pembaruan semua versi menerima pembaruan otomatis,
>  juga jika Anda menggunakan saluran pembaruan yang tidak stabil juga akan menerima pembaruan dari
>  Saluran pembaruan yang lebih stabil, Contoh: Nightly Recepieve Update dari Nightly But But
>  juga dari beta dan rilis

### **Rilis (stabil)**

Saluran yang paling aman dan direkomendasikan untuk semua pengguna.

*   Fitur:
    *   Diuji secara menyeluruh tanpa bug kritis.
    *   Ideal untuk produksi dan penggunaan sehari -hari.
    *   Tersedia di Microsoft Store, Winget, .msix, dan .exe.

### **Beta**

Ditujukan untuk pengguna yang ingin mencoba fitur baru sebelum secara resmi dirilis.
 Saluran ini termasuk beta dan rilis kandidat.

*   Fitur:
    *   Berisi fitur baru dalam pengujian.
    *   Mungkin memiliki bug kecil.
    *   Pembaruan yang lebih sering daripada rilis stabil.
    *   Tersedia hanya sebagai .exe di halaman rilis.

### **Malam**

Untuk pengguna dan pengembang tingkat lanjut yang menginginkan akses ke perubahan terbaru dan
 Fitur Eksperimental.

*   Fitur:
    *   Termasuk perubahan terbaru, tetapi tidak diuji secara menyeluruh.
    *   Mungkin berisi bug atau fitur yang belum selesai.
    *   Diperbarui setiap hari atau dengan setiap perubahan kode yang signifikan.
    *   Hanya tersedia sebagai .exe di halaman rilis.

Baca lebih lanjut tentang di [Seelen Ui Nighly](./nightly.md)

## **Menerima pembaruan di setup.exe vs MSIX**

Pada pembaruan MSIX dikelola oleh Microsoft Store, tetapi di setup.exe mereka
 Tidak, jadi pembaruan disertakan dengan aplikasi ini akan menunjukkan kepada Anda a
 Pemberitahuan saat pembaruan tersedia.

![Seelen UI update notification on settings window](https://github.com/Seelen-Inc/slu-blog/blob/master/blog/seelen-ui-distribution-channels/image.png?raw=true)

Jika Anda mengklik pemberitahuan itu akan mulai mengunduh dan menginstal
 Perbarui, setelah itu akan memulai ulang aplikasi secara otomatis.
