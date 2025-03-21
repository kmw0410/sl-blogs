# **SEELEN UI: Quraşdırma metodları və kanalları yeniləyin**

## **Quraşdırma seçimləri**

### **Microsoft Store (MSIX)**

Microsoft Mağazasından ən son versiyasını yükləyin. Bu ən etibarlıdır
 və istifadəçi dostu seçim, avtomatik yeniləmələrlə.

*   Pros:
    *   Avtomatik yeniləmələr.
    *   Microsoft tərəfindən təsdiqlənmiş və təsdiqlənmişdir.
    *   Yüksək təhlükəsizlik və etibarlılıq.
    *   Bu versiya olmadığı üçün .exe quraşdırıcısından daha yüngül bir versiya
         Debug rəmzləri daxildir.
*   Eksiler:
    *   Yeniləmələr təsdiqlənəcək 1-3 iş günü çəkə bilər.
    *   Problemləri debug etmək və hesabat vermək çətindir.

***

### **Winget (MSIX)**

Aşağıdakı əmrdən istifadə edərək son versiyanı quraşdırın:

```pwsh
winget install --id Seelen.SeelenUI
```

Eyni üstünlük və Microsoft mağazasının birləşməsi ilə sürətli bir quraşdırma ilə
 əmr xətti.

***

### \*\*. EXE quraşdırıcı \*\*

Setup.exe quraşdırıcısını buraxılış səhifələrindən yükləyin və işləyin.

*   Pros:
    *   Dərhal yeniləmələri daha sürətli quraşdırın.
    *   Mövcud olduqları anda yeni buraxılışlar üçün bildirişlər alır.
*   Eksiler:
    *   Rəqəmsal olaraq imzalanmamış, bu antivirus xəbərdarlıqlarına səbəb ola bilər.
    *   MSIX quraşdırıcısından daha az yüngül işıq saçır, çünki bu versiya Debug daxildir
         simvollar.

## **Kanalları yeniləyin**

> Yeniləmə kanalının innenpendenti Bütün versiyalar Avtomatik yeniləmələri alır,
>  Ayrıca qeyri-sabit bir yeniləmə kanalı istifadə edərsə də yeniləmələri alacaq
>  Daha sabit yeniləmə kanalları, nümunə: gecə gecə yenilikləri alın, ancaq
>  Beta və buraxılışdan da

### **Buraxmaq (sabit)**

Bütün istifadəçilər üçün ən etibarlı və tövsiyə olunan kanal.

*   Xüsusiyyətlər:
    *   Heç bir kritik səhv olmadan hərtərəfli sınaqdan keçirilmişdir.
    *   İstehsal və gündəlik istifadə üçün idealdır.
    *   Microsoft Store, Winget, .msix və .exe-də mövcuddur.

### **Beta**

Rəsmi olaraq sərbəst buraxılmadan əvvəl yeni xüsusiyyətləri sınamaq istəyən istifadəçilərə yönəldilmişdir.
 Bu kanal betalar daxildir və namizədləri buraxır.

*   Xüsusiyyətlər:
    *   Testin altında yeni xüsusiyyətləri ehtiva edir.
    *   Kiçik səhvlər ola bilər.
    *   Sabit buraxılışdan daha tez-tez yenilənmələr.
    *   Yalnız. Satizlər səhifəsində .exe kimi mövcuddur.

### **Gecə**

Ən son dəyişikliklərə giriş istəyən inkişaf etmiş istifadəçilər və inkişaf etdiricilər üçün və
 eksperimental xüsusiyyətlər.

*   Xüsusiyyətlər:
    *   Ən son dəyişiklikləri ehtiva edir, lakin hərtərəfli sınaqdan keçirilmədi.
    *   Bugs və ya yarımçıq xüsusiyyətləri ehtiva edə bilər.
    *   Gündəlik və ya hər əhəmiyyətli kod dəyişikliyi ilə yeniləndi.
    *   Yalnız. Satış səhifəsindəki səhifə kimi mövcuddur.

Haqqında daha çox oxuyun [Seelen ui nighly](./nightly.md)

## **Setup.exe vs msix haqqında yeniləmələri**

MSIX yeniləmələri Microsoft Mağazası tərəfindən idarə olunur, lakin Setup.exe-də
 deyil, buna görə bir updater tətbiqetməni sizə göstərəcəkdir
 bir yeniləmə olduqda bildiriş.

![Seelen UI update notification on settings window](https://github.com/Seelen-Inc/slu-blog/blob/master/blog/seelen-ui-distribution-channels/image.png?raw=true)

Bildirişi vurursan, yükləməyə və qurmağa başlayacaq
 Yeniləyin, bundan sonra tətbiq avtomatik olaraq yenidən başladın.
