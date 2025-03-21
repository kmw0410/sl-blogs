# **Seelen UI: Kaedah pemasangan dan saluran kemas kini**

## **Pilihan pemasangan**

### **Kedai Microsoft (MSIX)**

Muat turun versi terkini dari kedai Microsoft. Ini adalah yang paling selamat
 dan pilihan mesra pengguna, dengan kemas kini automatik.

*   Kelebihan:
    *   Kemas kini automatik.
    *   Disahkan dan diluluskan oleh Microsoft.
    *   Keselamatan dan kebolehpercayaan yang tinggi.
    *   Versi ringan daripada .exe pemasang kerana versi ini tidak
         Termasuk simbol debug.
*   Keburukan:
    *   Kemas kini mungkin mengambil masa 1-3 hari perniagaan untuk diluluskan.
    *   Lebih sukar untuk debug dan melaporkan isu.

***

### **Winget (MSIX)**

Pasang versi terkini menggunakan arahan berikut:

```pwsh
winget install --id Seelen.SeelenUI
```

Kebaikan dan keburukan yang sama di Microsoft Store dengan ditambah dengan pemasangan cepat melalui
 baris arahan.

***

### \*\*. Exe Installer \*\*

Muat turun pemasang setup.exe dari halaman siaran dan jalankannya.

*   Kelebihan:
    *   Pemasangan lebih cepat dengan kemas kini segera.
    *   Menerima pemberitahuan untuk siaran baru sebaik sahaja ia tersedia.
*   Keburukan:
    *   Tidak ditandatangani secara digital, yang boleh mencetuskan amaran antivirus.
    *   Kurang ringan daripada pemasang msix kerana versi ini termasuk debug
         simbol.

## **Kemas kini saluran**

> Indenpendent saluran kemas kini semua versi menerima kemas kini automatik,
>  Juga jika anda menggunakan saluran kemas kini yang tidak stabil juga akan menerima kemas kini
>  Saluran kemas kini yang lebih stabil, Contoh: Malam menerima kemas kini dari setiap malam tetapi
>  juga dari beta dan melepaskan

### **Siaran (stabil)**

Saluran yang paling selamat dan disyorkan untuk semua pengguna.

*   Ciri -ciri:
    *   Diuji dengan teliti tanpa pepijat kritikal.
    *   Ideal untuk pengeluaran dan penggunaan sehari -hari.
    *   Boleh didapati di Microsoft Store, Winget, .six, dan .exe.

### **Beta**

Bertujuan untuk pengguna yang ingin mencuba ciri -ciri baru sebelum dibebaskan secara rasmi.
 Saluran ini termasuk betas dan calon pelepasan.

*   Ciri -ciri:
    *   Mengandungi ciri -ciri baru di bawah ujian.
    *   Mungkin mempunyai pepijat kecil.
    *   Kemas kini yang lebih kerap daripada pelepasan yang stabil.
    *   Hanya tersedia sebagai .exe pada halaman siaran.

### **Setiap malam**

Untuk pengguna lanjutan dan pemaju yang mahukan akses kepada perubahan terkini dan
 Ciri -ciri eksperimen.

*   Ciri -ciri:
    *   Termasuk perubahan yang paling terkini, tetapi tidak diuji dengan teliti.
    *   Mungkin mengandungi pepijat atau ciri yang belum selesai.
    *   Dikemaskini setiap hari atau dengan setiap perubahan kod penting.
    *   Hanya tersedia sebagai .exe pada halaman siaran.

Baca lebih lanjut mengenai pada [Seelen ui dengan teliti](./nightly.md)

## **Menerima kemas kini mengenai persediaan.exe vs msix**

Pada kemas kini MSIX diuruskan oleh kedai Microsoft, tetapi pada persediaan.exe mereka
 tidak, jadi pengemaskinian disertakan dengan aplikasi ini akan menunjukkan kepada anda
 Pemberitahuan apabila kemas kini tersedia.

![Seelen UI update notification on settings window](https://github.com/Seelen-Inc/slu-blog/blob/master/blog/seelen-ui-distribution-channels/image.png?raw=true)

Sekiranya anda mengklik pemberitahuan, ia akan mula memuat turun dan memasang
 Kemas kini, selepas itu ia akan memulakan semula aplikasi secara automatik.
