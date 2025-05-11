# **Perpustakaan SLU: Jenis dan Antara muka**

The `types` Modul Perpustakaan SLU menyediakan koleksi jenis penting Definisi
dan antara muka yang berfungsi sebagai asas untuk pembangunan widget. Modul ini
direka untuk:

- Menawarkan definisi jenis standard yang digunakan sepanjang ekosistem Seelen
  UI
- Sediakan antara muka untuk pelaksanaan widget yang konsisten
- Dayakan Keselamatan Jenis Di Seluruh Pembangunan Widget
- Berkhidmat sebagai kontrak bersama antara aplikasi teras dan widget

## **Penggunaan**

```ts
import { StructInterface } from "@seelen-ui/lib/types";

const myObject: StructInterface = { ... }
```

## **Ciri -ciri utama:**

- **Definisi jenis teras**: Jenis asas yang digunakan oleh aplikasi Seelen UI
- **Kontrak widget**: Antara muka yang mesti dilaksanakan widget untuk
  keserasian
- **Model Dikongsi**: Struktur data biasa yang digunakan di seluruh platform
- **Jenis utiliti**: Jenis penolong untuk pembangunan widget

Jenis ini dimakan secara dalaman oleh aplikasi dan terdedah untuk Pemaju widget
luaran untuk memastikan konsistensi jenis di seluruh ekosistem.
