# **SLU Kütüphanesi: API referansı**

API modülü, somut uygulamalar ve yardımcı programlar sağlar. 
Özet Ham Uygulama API'sı, geliştirici dostu bir cephe olarak hizmet vermektedir. 
Widget entegrasyonu.

## **Amaç**

* Arayüzleri uygular `/types` kullanıma hazır sınıflarla
* Soyutlar Düşük seviyeli API karmaşıklıkları
* Ortak işlemler için fayda yöntemleri sağlar
* Widget'lar ve SLU arasında birincil etkileşim katmanı görevi görür 
  başvuru

## **Kullanım**

Kütüphaneyi gerektiği gibi kullanabilirsiniz. İşte temel bir örnek:

```ts
import { StructClass } from "@seelen-ui/lib/api";

const widgetApi: StructClass = await StructClass.geAsync();
const something = widgetApi.getSomething();
const somethingAsync = await widgetApi.getSomethingAsync();

await widgetApi.doSomething();
```

## **Önemli Notlar:**

1. Bu API kütüphanesi yalnızca bir Seelen UI widget yürütme içinde çalışırken çalışır 
   çevre
2. Node.js veya standart tarayıcı bağlamlarında kullanmaya çalışmak atacaktır 
   hatalar
3. Bu API kullanan widget'ların, düzgün bir şekilde çalışmak için güncellemesi gerekir. 
   Seelen UI'nin en son sürümü
