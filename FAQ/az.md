# **Tez-tez verilən suallar**

## **Ümumi suallar**

### **Seelen UI nədir?**

Seelen UI, Windows 10/11 təcrübənizi düzəltməyə imkan verən bir masaüstü
tətbiqidir. Masaüstünüzün ətraf mühitini artırmaq üçün geniş çeşidli mövzular,
vidjetlər və plaginlər təqdim edir.

---

### **Seelen UI pulsuz bir proqramdır?**

Bəli, Seelen UI pulsuz bir proqramdır. Seelen UI-ni pulsuz yükləyə və istifadə
edə bilərsiniz.

---

### **Seelen UI əməliyyat sistemimi dəyişdirirmi?**

Xeyr**Seelen UI əməliyyat sisteminizi dəyişdirmir**. Windows'un doğma
hadisələrinə abunə olmaq və müvafiq məzmunu göstərmək üçün lazım olduqda onları
şərh etməklə işləyir. Seelen UI sistem parametrlərini oxuyur və öz parametrləri
içərisində uzanır, amma bu**Hər hansı bir əsas sistem fayllarını və ya qeyd
qeydlərini dəyişdirmir və ya dəyişdirmir**. Tətbiq, Windows API-lərə ciddi
şəkildə yapışır və yalnız Windows-un özünün icazə verdiyi şəkildə sistemlə
ünsiyyət qurur.

---

### **Seelen UI əməliyyat sistemimi poza bilərmi?**

Xeyr**Seelen UI əməliyyat sisteminizi poza bilməz**. Heç bir əsas sistem
fayllarını və ya parametrlərini dəyişdirmədiyi üçün (əvvəlki sualda izah
edildiyi kimi), OS-yə ziyan vuran bir risk yoxdur. Seelen UI, təhlükəsiz və
sabit bir təcrübə təmin edərək, Windows APIS-in sərhədləri çərçivəsində
problemsiz işləmək üçün hazırlanmışdır.

---

### **Windows yeniləmə Seelen UI-ni poza bilərmi?**

Xeyr**Bu ehtimal olunmur**standart bir Windows yeniləməsinin Seelen UI-ni
pozacağını. Ancaq hər zaman kiçik bir risk var, xüsusən istifadə
edirsinizsə**eksperimental qurur**Windows Insider qurur. Bu qurucular tez-tez
Seelen UI kimi üçüncü tərəf tətbiqlərinə təsir edə biləcək yarımçıq və ya
qeyri-sabit dəyişikliklər daxildir. Ən sabit təcrübə üçün Windows-un sabit
versiyalarından istifadə etmək tövsiyə olunur.

---

### **Seelen UI, iş üçün internet bağlantısı tələb edirmi?**

Xeyr**Seelen UI internet bağlantısı tələb etmir**fəaliyyət göstərmək. Tətbiq
quraşdırıldıqdan sonra mükəmməl oflayn işləyir. Ancaq bir internet bağlantısı
lazımdır:

- Yeni yükləyin**vidjetlər**,**plaginlər**, və ya**mövzular**rəsmi depodan.
- Tətbiqə və ya onun komponentlərinə yeniləmələri yoxlayın.

Bu fəaliyyətlərdən kənarda, Seelen UI internet bağlantısına ehtiyac olmadan
müstəqil fəaliyyət göstərir.

---

### **Mahnıları Seelen Ui necə?**

Siz Seelen UI-ni yükləyə bilərsiniz[Rəsmi veb sayt](https://seelen.io).

## **Ümumi istifadəçi problemləri**

### **Boz / Qaranlıq ekran məsələsi**

Bəzi istifadəçilər Seelen UI istifadə edərkən boz və ya qaranlıq bir ekran
yaşayırlar. Bu məsələ tez-tez Windows-un görünüşünü dəyişdirən üçüncü tərəf
tətbiqləri səbəb olur**Micaurte**.

**Həlli**:

- Bu tip tətbiqləri deaktiv edin.
- Tətbiq buna imkan verirsə, münaqişələrin qarşısını almaq üçün Seelen UI-ni
  istisna siyahısına əlavə edin.

---

### **Sistem tepsisi düzgün işləmir**

Seelen UI-də sistem tepsisi düzgün işləmirsə, bu kimi Windows tapşırıq çubuğunu
dəyişdirən üçüncü tərəf tətbiqləri olan münaqişələr səbəbindən ola
bilər**Start11**,**Başlanğıc**və ya oxşar vasitələr.

**Niyə bu baş verir?**\
Seelen UI'nin tepsisi modulu, giriş tələb edir**lövhə daşması**düzgün işləmək.
Bu tətbiqlər bu funksiyaya müdaxilə edə bilər.

**Həlli**:

- Seelen UI istifadə etməzdən əvvəl hər hansı bir üçüncü tərəf tapşırıq çubuğu
  modifikasiya alətlərini deaktiv edin və ya silmək.
- Seelen UI'nun doğma sistem tepsisinə tam girişi təmin edin.

---

### **Ahk tərəfindən tetikləndi**

Bəzi anti-fırıldaqçı sistemlərin istifadəsini aşkar edə bilər**AutoHotkey
(AHK)**, Seelen UI, potensial bir fırıldaqçı kimi qısa yollara güvənir.

**Həlli**:

- Fırıldaqçı sistemləri ilə oyun başlamazdan əvvəl Seelen UI-nin
  parametrlərindən qısa yollarını deaktiv edin.
- Oyunu bitirdikdən sonra qısa yolları yenidən aktivləşdirin.
