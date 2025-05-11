# **Perpustakaan SLU: Jenis dan Antarmuka**

Itu `types` Modul Perpustakaan SLU menyediakan kumpulan tipe penting Definisi
dan antarmuka yang berfungsi sebagai dasar untuk pengembangan widget. Modul ini
dirancang untuk:

- Menawarkan definisi tipe standar yang digunakan di seluruh ekosistem Seelen UI
- Menyediakan antarmuka untuk implementasi widget yang konsisten
- Aktifkan keamanan jenis di seluruh pengembangan widget
- Berfungsi sebagai kontrak bersama antara aplikasi inti dan widget

## **Penggunaan**

```ts
import { StructInterface } from "@seelen-ui/lib/types";

const myObject: StructInterface = { ... }
```

## **Fitur Utama:**

- **Definisi tipe inti**: Tipe mendasar yang digunakan oleh aplikasi Seelen UI
- **Kontrak Widget**: Antarmuka yang harus diterapkan widget untuk
  kompatibilitas
- **Model bersama**: Struktur data umum yang digunakan di seluruh platform
- **Ketik utilitas**: Jenis penolong untuk pengembangan widget

Jenis -jenis ini dikonsumsi baik secara internal oleh aplikasi dan terpapar
Pengembang widget eksternal untuk memastikan konsistensi jenis di seluruh
ekosistem.
