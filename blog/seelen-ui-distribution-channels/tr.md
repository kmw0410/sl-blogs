---
author: Eşhaann
published: 13-02-2025
lastRevision: 13-02-2025
title: Seelen UI dağıtım kanalları
description: Seelen UI için mevcut farklı dağıtım kanalları hakkında bilgi edinin

---

# Seelen kullanıcı arayüzü: kurulum yöntemleri ve güncelleme kanalları

## Kurulum Seçenekleri

### Microsoft Store (MSIX)

En son sürümü şuradan indirin
[Microsoft Mağazası](https://www.microsoft.com/store). Bu en güvenli ve
Otomatik güncellemelerle kullanıcı dostu seçenek.

**Artıları:**

* Otomatik Güncellemeler
* Microsoft tarafından doğrulandı ve onaylandı
* Yüksek güvenlik ve güvenilirlik
* .Exe yükleyiciden daha hafif sürüm (hata ayıklama sembolü yok)

**Eksileri:**

* Microsoft onayı için güncellemeler 1-3 iş günü alabilir
* Hata ayıklanması ve raporlanması daha zor

***

### Winget (MSIX)

Son sürümü aşağıdaki komutu kullanarak yükleyin:

> Winget Install --id seelen.seeelenui

Eklenen Microsoft Store sürümü ile aynı avantajları sunar
Komut satırı kurulumunun rahatlığı.

***

### .exe yükleyici

Setup.exe yükleyicisini şuradan indirin
[Buluşmalar Sayfası](https://github.com/eythaann/Seelen-UI/releases) ve çalıştır.

**Artıları:**

* Anında güncellemeler mevcut
* Yeni sürümler yayınlanır yayınlanmaz güncelleme bildirimlerini alır
* Hata ayıklama amacıyla daha iyi

**Eksileri:**

* Antivirüs uyarılarını tetikleyebilir (dijital olarak imzalanmamış)
* Daha büyük dosya boyutu (hata ayıklama sembolleri içerir)

## Kanalları Güncelle

> Seçtiğiniz güncelleme kanalından bağımsız olarak, tüm sürümler otomatik olarak alır
> Güncellemeler. Kararsız kanallar ayrıca daha kararlı kanallardan güncellemeler alır
> (ör. Her gece hem gece hem de beta/sürümden güncellemeler alır).

### Sürüm (Kararlı)

Tüm kullanıcılar için en güvenli ve önerilen kanal.

**Özellikler:**

* Kritik hata olmadan iyice test edildi
* Üretim ve günlük kullanım için ideal
* Microsoft Store, Winget (.MSIX) ve AS .exe Installer'da mevcut

### Beta

Resmi sürümden önce yeni özelliklere erken erişim isteyen kullanıcılar için.

**Özellikler:**

* Test altında yaklaşan özellikleri içerir
* Küçük böcekler içerebilir
* Kararlıdan daha sık güncelleme
* Yalnızca .exe yükleyici olarak kullanılabilir

### Her gece

En son değişiklikleri isteyen gelişmiş kullanıcılar ve geliştiriciler için.

**Özellikler:**

* En son, test edilmemiş değişiklikleri içerir
* Hatalar veya eksik özellikler içerebilir
* Günlük veya her önemli kod değişikliği ile güncellendi
* Yalnızca .exe yükleyici olarak kullanılabilir

Gece kanalı hakkında daha fazla bilgi edinin.
[Seelen UI gece](https://seelen.io/blog/nightly) belgeler.

## Güncelleme mekanizması: setup.exe vs msix

* **MSIX:** Microsoft Store tarafından otomatik olarak yönetilen güncellemeler
* **Setup.exe:** Güncellemeler olduğunda sizi bilgilendiren yerleşik güncelleyici içerir
  mevcut

![Seelen UI update notification](https://github.com/Seelen-Inc/slu-blog/blob/master/blog/seelen-ui-distribution-channels/image.png?raw=true)

Bir güncelleme mevcut olduğunda:

1. Bildirimi tıklayın
2. Güncelleyici güncellemeyi indirecek ve yükleyecek
3. Uygulama otomatik olarak yeniden başlayacak
