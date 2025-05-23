# Seelen ui: Суулгах аргууд ба шинэчлэх суваг

## Сууцт суулгах Сторал

### Microsoft Store (MSIX)

Хамгийн сүүлийн хувилбарыг татаж авах
[Micox СУЗ](https://www.microsoft.com/store)Байна уу. Энэ бол хамгийн найдвартай
бөгөөд хэрэглэгчийн ээлтэй сонголт, автомат шинэчлэлттэй.

**Ашиг:**

- Автомат шинэчлэлтүүд
- Баталгаажуулалт, Microsoft-ийн батлагдсан
- Өндөр аюулгүй байдал, найдвартай байдал
- .Exe суулгагчтай харьцуулахад илүү хөнгөн хувилбар (дибаг хийх тэмдэг байхгүй)

**ХОЛБОО:**

- Шинэчлэлтүүд Microsoft-ийн зөвшөөрөл авахад 1-3 ажлын өдөр шаардагдана
- Дибаг хийх, асуудлыг мэдээлэхэд илүү хэцүү байдаг

---

### Winget (MSIX)

Дараах командыг ашиглан хамгийн сүүлийн хувилбарыг суулгана уу.

> Winget суулгах --ид seelen.seeLenui

Нэмэгдсэн тусламжтайгаар Microsoft Store-ийн хувилбарын хувилбарыг санал болгож
байна командын шугам суурилуулах тохь тух.

---

### .exe суулгагч

Setup.exe суулгагчийг татаж аваарай
[Хуудсыг гаргадаг](https://github.com/eythaann/Seelen-UI/releases) тэгээд
ажиллуул.

**Ашиг:**

- Шууд шинэчлэлт боломжтой
- Шинэ хувилбарууд гарсан даруйд шинэчлэх мэдэгдлийг шинэчлэх
- Дебаг хийх зорилгоор илүү сайн

**ХОЛБОО:**

- Антивирусын анхааруулгыг өдөөж магадгүй (дижитал гарын үсэг зураагүй)
- Илүү том файлын хэмжээ (дибаг хийх тэмдэг орно)

## Суваг шинэчлэх

> Сонгосон шинэчлэлтээс үл хамааран бүх хувилбарыг автоматаар авдаг
> шинэчлэлтүүд. Тогтворгүй суваг нь илүү тогтвортой сувгаас шинэчлэлтүүдийг
> хүлээн авдаг (E.G., шөнийн болон бета / хувилбарын хоёроос эхлэн шөнийн
> шинэчлэлтийг хүлээн авдаг).

### Суллах (тогтвортой)

Бүх хэрэглэгчдэд хамгийн найдвартай, санал болгож буй суваг.

**Онцлог:**

- Шүүмжлэлтэй алдаануудгүйгээр сайтар туршиж үзсэн
- Үйлдвэрлэл, өдөр тутмын хэрэглээнд хамгийн тохиромжтой
- Microsoft Store, Winget (.MSIX) -ийг (.msix) авах боломжтой

### Бёа

Албан ёсны хувилбараас өмнө шинэ боломжууд руу эрт нэвтрэхийг хүсч байгаа
хэрэглэгчдийн хувьд.

**Онцлог:**

- Туршилтын дор удахгүй болох онцлогийг багтаана
- Бага зэргийн алдаануудыг агуулж болно
- Тогтвортой илүү олон удаа байнга шинэчлэгддэг
- Зөвхөн .exe суулгагч болгон ашиглах боломжтой

### Муу

Хамгийн сүүлийн өөрчлөлтийг хүсч буй дэвшилтэт хэрэглэгчид, хөгжүүлэгчдэд
зориулсан.

**Онцлог:**

- Хамгийн сүүлийн үеийн,
- Алдаа эсвэл бүрэн бус шинж чанаруудыг агуулж болно
- Өдөр бүр шинэчлэгдсэн эсвэл чухал кодын өөрчлөлт тус бүрээр шинэчлэгдсэн
- Зөвхөн .exe суулгагч болгон ашиглах боломжтой

Бидний шөнийн сувгийн талаар илүү ихийг олж мэдэх
[Seelen ui шөнийн цагаар](https://seelen.io/blog/nightly) баримт бичиг.

## Шинэчлэх механизм: Setup.exe vs msix

- **MSIX:** Шинэчлэлт нь Microsoft Store-ээр автоматаар удирддаг
- **Setup.exe:** Шинэчлэлт байх үед танд мэдэгдсэн шинэчлэлтийг багтаасан болно
  бэлнээр байгаа

![Seelen UI update notification](https://github.com/Seelen-Inc/slu-blog/blob/master/blog/seelen-ui-distribution-channels/image.png?raw=true)

Шинэчлэлт хийх боломжтой бол:

1. Мэдэгдэл дээр дарна уу
2. Шинэчлэгч шинэчлэлтийг татаж аваад суулгах болно
3. Програм автоматаар дахин эхлүүлэх болно
