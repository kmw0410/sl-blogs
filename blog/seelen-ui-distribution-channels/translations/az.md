# SEELEN UI: Quraşdırma metodları və kanalları yeniləyin

## Quraşdırma seçimləri

### Microsoft Store (MSIX)

Ən son versiyasını yükləyin
[Microsoft Mağazası](https://www.microsoft.com/store). Bu ən etibarlı və
Avtomatik yeniləmələri olan istifadəçi dostu seçim.

**Pros:**

- Avtomatik yeniləmələr
- Microsoft tərəfindən təsdiqlənmiş və təsdiqlənmişdir
- Yüksək təhlükəsizlik və etibarlılıq
- .Exe quraşdırıcısından daha yüngül versiya (heç bir debug rəmzləri daxil
  deyil)

**Eksiler:**

- Yeniləmələr Microsoft təsdiqlənməsi üçün 1-3 iş günü çəkə bilər
- Problemləri debug etmək və hesabat vermək daha çətindir

---

### Winget (MSIX)

Aşağıdakı əmrdən istifadə edərək son versiyanı quraşdırın:

> Winget Install --id seelen.seelenui

Əlavə edilmiş Microsoft Store versiyası ilə eyni faydaları təqdim edir əmr
satırının quraşdırılması rahatlığı.

---

### .exe quraşdırıcısı

Setup.exe quraşdırıcısını yükləyin
[Buraxılış səhifəsi](https://github.com/eythaann/Seelen-UI/releases) və işlədin.

**Pros:**

- Dərhal yeniləmələr mövcuddur
- Yeni versiyaların sərbəst buraxıldıqdan sonra yeniləmə bildirişlərini alır
- Məqsədləri üçün daha yaxşıdır

**Eksiler:**

- Antivirus xəbərdarlıqlarına səbəb ola bilər (rəqəmsal olaraq imzalanmır)
- Daha böyük fayl ölçüsü (debug rəmzləri daxildir)

## Kanalları yeniləyin

> Seçdiyiniz yeniləmə kanalınızdan asılı olmayaraq, bütün versiyalar avtomatik
> alır yeniləmələr. Qeyri-sabit kanallar da daha sabit kanallardan yeniləmələr
> alır (məsələn, gecə, həm gecə, həm də beta / buraxılışdan gecə yenilikləri
> alır).

### Buraxmaq (sabit)

Bütün istifadəçilər üçün ən etibarlı və tövsiyə olunan kanal.

**Xüsusiyyətlər:**

- Heç bir kritik səhv olmadan hərtərəfli sınaqdan keçirilmişdir
- İstehsal və gündəlik istifadə üçün idealdır
- Microsoft Mağazasında, Winget (.msix) və .exe quraşdırıcısı kimi mövcuddur

### Beta

Rəsmi buraxmadan əvvəl yeni xüsusiyyətlərə erkən daxil olmaq istəyən
istifadəçilər üçün.

**Xüsusiyyətlər:**

- Testin altında qarşıdakı xüsusiyyətlər daxildir
- Kiçik səhvlər ola bilər
- Sabit olduğundan daha tez-tez yeniliklər
- Yalnız .exe quraşdırıcısı kimi mövcuddur

### Gecə

Ən son dəyişiklikləri istəyən qabaqcıl istifadəçilər və inkişaf etdiricilər
üçün.

**Xüsusiyyətlər:**

- Ən son, sınanmamış dəyişiklikləri ehtiva edir
- Bugs və ya natamam xüsusiyyətlər daxil ola bilər
- Gündəlik və ya hər əhəmiyyətli kod dəyişikliyi ilə yeniləndi
- Yalnız .exe quraşdırıcısı kimi mövcuddur

Gecə kanalında daha çox məlumat əldə edin
[Seelen Ui Gecə](https://seelen.io/blog/nightly) sənədləşdirmə.

## Yeniləmə mexanizmi: Setup.exe vs msix

- **MSIX:** Microsoft Store tərəfindən avtomatik idarə olunan yeniləmələr
- **Quraşdırma.exe:** Yeniləmələr olduqda sizi xəbərdar edən daxili yeniləmə
  daxildir mövcud

![Seelen UI update notification](https://github.com/Seelen-Inc/slu-blog/blob/master/blog/seelen-ui-distribution-channels/image.png?raw=true)

Yeniləmə olduqda:

1. Bildiriş vurun
2. Yeniləmə yeniləməni yükləyəcək və quraşdıracaq
3. Tətbiq avtomatik olaraq yenidən başlayacaq
