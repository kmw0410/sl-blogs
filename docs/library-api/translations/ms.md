# **Perpustakaan SLU: Rujukan API**

Modul API menyediakan pelaksanaan konkrit dan kelas utiliti yang Abstrak API
Aplikasi Raw, berkhidmat sebagai fasad mesra pemaju untuk Integrasi widget.

## **Tujuan**

- Melaksanakan antara muka dari `/types` dengan kelas siap sedia
- Abstrak kerumitan API peringkat rendah
- Menyediakan kaedah utiliti untuk operasi biasa
- Berfungsi sebagai lapisan interaksi utama antara widget dan SLU permohonan

## **Penggunaan**

Anda boleh menggunakan perpustakaan seperti yang diperlukan. Inilah contoh asas:

```ts
import { StructClass } from "@seelen-ui/lib/api";

const widgetApi: StructClass = await StructClass.geAsync();
const something = widgetApi.getSomething();
const somethingAsync = await widgetApi.getSomethingAsync();

await widgetApi.doSomething();
```

## **Nota Penting:**

1. Perpustakaan API ini hanya berfungsi ketika berjalan dalam pelaksanaan widget
   Seelen UI persekitaran
2. Cuba menggunakannya dalam node.js atau konteks penyemak imbas standard akan
   membuang Kesalahan
3. Widget yang menggunakan API ini perlu mengemas kini untuk berfungsi dengan
   baik versi terakhir Seelen UI
