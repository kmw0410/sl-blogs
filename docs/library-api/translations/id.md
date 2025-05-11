# **Perpustakaan SLU: Referensi API**

Modul API menyediakan implementasi konkret dan kelas utilitas itu Abstrak API
Aplikasi Raw, berfungsi sebagai fasad yang ramah pengembang integrasi widget.

## **Tujuan**

- Mengimplementasikan antarmuka dari `/types` dengan kelas siap pakai
- Abstrak kompleksitas API tingkat rendah
- Memberikan metode utilitas untuk operasi umum
- Berfungsi sebagai lapisan interaksi utama antara widget dan SLU aplikasi

## **Penggunaan**

Anda dapat menggunakan perpustakaan sesuai kebutuhan. Inilah contoh dasar:

```ts
import { StructClass } from "@seelen-ui/lib/api";

const widgetApi: StructClass = await StructClass.geAsync();
const something = widgetApi.getSomething();
const somethingAsync = await widgetApi.getSomethingAsync();

await widgetApi.doSomething();
```

## **Catatan Penting:**

1. Perpustakaan API ini hanya berfungsi saat berjalan di dalam eksekusi widget
   UI Seelen lingkungan
2. Mencoba menggunakannya di Node.js atau konteks browser standar akan melempar
   kesalahan
3. Widget menggunakan API ini perlu memperbaruinya agar dapat bekerja dengan
   baik Versi terakhir dari Seelen UI
