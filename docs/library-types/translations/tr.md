# **SLU Kütüphanesi: Türler ve Arayüzler**

. `types` SLU Kütüphanesinin Modülü, temel tipte bir koleksiyon sağlar 
Widget geliştirmenin temelini oluşturan tanımlar ve arayüzler. 
Bu modül aşağıdakiler için tasarlanmıştır:

* Seelen UI ekosistemi boyunca kullanılan standart tür tanımları sunun
* Tutarlı widget uygulaması için arayüzler sağlayın
* Widget geliştirme için tür güvenliğini etkinleştirin
* Çekirdek uygulama ve widget'lar arasında paylaşılan sözleşmeler olarak hizmet veriyor

## **Kullanım**

```ts
import { StructInterface } from "@seelen-ui/lib/types";

const myObject: StructInterface = { ... }
```

## **Temel Özellikler:**

* **Çekirdek Tip Tanımları**: Seelen UI uygulaması tarafından kullanılan temel türler
* **Widget Sözleşmeleri**: Widget'ların uyumluluk için uygulaması gereken arayüzler
* **Paylaşılan Modeller**: Platformda kullanılan yaygın veri yapıları
* **Yardımcı programlar yazın**: Widget geliştirme için yardımcı türler

Bu türler hem uygulama tarafından içsel olarak tüketilir hem de maruz bırakılır. 
Ekosistem boyunca tür tutarlılığı sağlamak için harici widget geliştiricileri.
