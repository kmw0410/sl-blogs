# **Seelen kullanıcı arayüzü: kurulum yöntemleri ve güncelleme kanalları**

## **Kurulum Seçenekleri**

### **Microsoft Store (MSIX)**

Microsoft mağazasından en son sürümü indirin. Bu en güvenli
 ve otomatik güncellemelerle kullanıcı dostu seçenek.

*   Artıları:
    *   Otomatik güncellemeler.
    *   Microsoft tarafından doğrulandı ve onaylandı.
    *   Yüksek güvenlik ve güvenilirlik.
    *   Bu sürüm değil çünkü .exe yükleyiciden Lightweighter sürümü
         hata ayıklama sembolleri içerir.
*   Eksileri:
    *   Güncellemelerin onaylanması 1-3 iş günü sürebilir.
    *   Sorunları hata ayıklamak ve raporlamak daha zor.

***

### **Winget (MSIX)**

Son sürümü aşağıdaki komutu kullanarak yükleyin:

```pwsh
winget install --id Seelen.SeelenUI
```

Microsoft Store'un aynı artıları ve eksileri, hızlı bir kurulumla artı
 komut satırı.

***

### \*\*. exe yükleyici \*\*

Sürümler sayfasından setup.exe yükleyicisini indirin ve çalıştırın.

*   Artıları:
    *   Anında güncellemelerle daha hızlı kurulum.
    *   Mevcut oldukları anda yeni sürümler için bildirim alır.
*   Eksileri:
    *   Dijital olarak imzalanmamış, bu da antivirüs uyarılarını tetikleyebilir.
    *   Bu sürüm hata ayıklama içerdiğinden MSIX yükleyicisinden daha az hafif
         semboller.

## **Kanalları Güncelle**

> Güncelleme kanalının indenpententeri tüm sürümler otomatik güncellemeleri alıyor,
>  Ayrıca, dengesiz bir güncelleme kanalı kullanıyorsanız,
>  Daha Kararlı Güncelleme Kanalları, Örnek: Gece Güncellemeleri Gece Geri Al ancak
>  Ayrıca beta ve sürümden

### **Sürüm (Kararlı)**

Tüm kullanıcılar için en güvenli ve önerilen kanal.

*   Özellikler:
    *   Kritik hata olmadan iyice test edilmiştir.
    *   Üretim ve günlük kullanım için idealdir.
    *   Microsoft Store, Winget, .msix ve .exe'de mevcuttur.

### **Beta**

Resmi olarak piyasaya sürülmeden önce yeni özellikleri denemek isteyen kullanıcıları hedefliyor.
 Bu kanal betas ve yayın adaylarını içerir.

*   Özellikler:
    *   Test altında yeni özellikler içerir.
    *   Küçük hatalar olabilir.
    *   Kararlı sürümden daha sık güncelleme.
    *   Yalnızca .exe olarak kullanılabilir.

### **Her gece**

En son değişikliklere erişim isteyen ileri düzey kullanıcılar ve geliştiriciler için ve
 deneysel özellikler.

*   Özellikler:
    *   En son değişiklikleri içerir, ancak iyice test edilmez.
    *   Hatalar veya bitmemiş özellikler içerebilir.
    *   Günlük veya her önemli kod değişikliği ile güncellendi.
    *   Yalnızca .exe olarak kullanılabilir.

Onda daha fazla bilgi edinin [Seelen ui](./nightly.md)

## **Setup.exe vs MSIX'te güncellemeleri alma**

MSIX'te güncellemeler Microsoft Store tarafından yönetilir, ancak setup.exe'de bunlar
 Değil, bu nedenle bir güncelleyici, bu size bir
 Bir güncelleme mevcut olduğunda bildirim.

![Seelen UI update notification on settings window](https://github.com/Seelen-Inc/slu-blog/blob/master/blog/seelen-ui-distribution-channels/image.png?raw=true)

Bildirime tıklarsanız, indirmeye ve yüklemeye başlar.
 daha sonra uygulamayı otomatik olarak yeniden başlatacaktır.
