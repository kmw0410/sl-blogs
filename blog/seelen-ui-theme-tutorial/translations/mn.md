# Seelen ui: Сэдвийн үндсэн заавар: Десктопоо Pro шиг тохируулна уу!

![A beautifully customized desktop using Seelen UI themes](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/image.png)

Windows Desktop-ийг шинэ шинэ дүр төрх өгөхийг хүсч байна уу? Seelen ui нь
хялбар болгодог түүний хүчтэй сэдэв систем. Энэхүү гарын авлага нь таныг хэрхэн
яаж хийх нь таныг Сэдэвн ажил - кодчиллын туршлага шаардлагагүй!

## Загварын бүтээгчдэд зориулсан тусгай дебог хувилбар

Бид эхлэхээс өмнө сэдэв бүтээгчид өөрсдийн онцгой байдлын талаар мэдэх ёстой
**Дебаг хувилбар** seelen ui! Энэ хувилбар танд:

- Элементүүдийг вэб хуудас шиг шалгана уу (Ctrl + Shift + Би хөгжүүлэгч багаж
  хэрэгслийг нээнэ)
- Live HTML / CSS-ийн өөрчлөлтийг үзнэ үү
- Туршилтын сэдэвчилсэн өөрчлөлтийг шууд туршиж үзээрэй
- Загварын хэв маягийн асуудлыг хялбархан

Дебаг хувилбарыг манай-аас татаж аваарай
[Шөнийн цагаар суваг](https://seelen.io/apps/seelen-ui/releases/nightly)
(Дуусгах файлуудыг хайх `-debug.exe`,, ингэх
`Seelen.UI_2.2.8+20250410073056_x64-setup-debug.exe`).

### Шөнийн цагаар илүү ихийг мэдэхийг хүсч байна уу?

Бидний шалгах
[Шөнийн бүтээн байгуулалтыг тайлбарлав](https://seelen.io/blog/seelen-ui-nightly)
Нийт гэдэг!

## Сэдэв файлыг ойлгох

Seelen Ui сэдвийг будгийн давхарга шиг бод. Та олон сэдвийг ашиглаж болно
Нэгэнт, зураг зурахтай адил захиалга, захиалгын асуудал! Сэдэв нь бүх зүйлийг
өөрчилж чадна өнгөт цонх руу цонхны хэв маягаар.

Гурван арга замыг савлаж болно.

1. **Дан файлын сэдэв** (..
2. **Сэдэв хувь** (олон файл агуулсан)
3. **Шахсан сэдэв** (.slu файл - Онцгой seelen ui формат)

### Сэдвүүдийг хаана байрлуулах вэ

Бүх сэдвүүд таны компьютер дээрх энэ хавтсанд очдог:

```text
C:\Users\{YOUR_USERNAME}\AppData\Roaming\com.seelen.seelen-ui\themes
```

### Хавтасны бүтэц

Энэ сэдвийн хавтас доторх сэдэв юу вэ?

```text
C:\Users\{USER}\AppData\Roaming\com.seelen.seelen-ui\themes
├── YourThemeFolder             # the name of the folder doesn't matter
│   ├── theme.yml               # Theme metadata file
│   └── seelen                  # creator's username of widgets inside
│       ├── fancy-toolbar.css   # resource's name + css extension
│       └── window-manager.scss # supports SCSS too!
├── CompactTheme.yml            # Theme metadata file with styles inside
└── CompressedTheme.slu         # Special file format used on Seelen UI
```

## Урам зориг өгөх: жишээ нь сэдэв

Хаана эхлэхээ мэдэхгүй байна уу? Seelen ui нь танд хэд хэдэн суурилуулсан
сэдэвтэй ирдэг урам зоригоор ашиглаж болно! Байж үзээрэй
[Үндсэн сэдэв цуглуулга](https://github.com/eythaann/Seelen-UI/tree/master/static/themes)
хэрхэн бүтээсэнийг харахын тулд.

## Өнгөтэй ажиллах - Таны бодож байгаагаас илүү хялбар!

Seelen ui нь автоматаар Windows-ийн өргөлтийг автоматаар авдаг бөгөөд үүнийг
хийдэг энгийн өнгөт хувьсагчаар өөр өөр сүүдэрт байдаг.

### Таны гол өргөлтийн өнгө

Эдгээр хувьсагчууд нь Windows тохиргоонд тохируулсан өнгийг ашигладаг:

- `--config-accent-color`: Цэвэр өнгө (#FFBAA шиг)
- `--config-accent-color-rgb`: RGB форматтай ижил өнгөтэй (255, 187, 170)

### Бүрэн өнгөт гэр бүл

Seelen ui нь таны өргөлтийн өнгөнөөс бүхэл бүтэн палитр үүсгэдэг:

![Visual guide to Seelen UI's color palette](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/colors.png)

Энд байгаа өнгөнүүдийн бүрэн жагсаалтыг энд оруулав.

- Хамгийн харанхуй хувилбар: `--config-accent-darkest-color`
- Бараан хувилбар: `--config-accent-darker-color`
- Харанхуй хувилбар: `--config-accent-dark-color`
- Тогтмол хувилбар: `--config-accent-color`
- Хөнгөн хувилбар: `--config-accent-light-color`
- Хэлэн хувилбар: `--config-accent-lighter-color`
- Хамгийн хөнгөн хувилбар: `--config-accent-lightest-color`

Өнгө бүр нь RGB хувилбартай (төгсгөлд нь -rgb-тай хамт). Энэ нь ашигтай байдаг
градиент болон бусад өнгөт эффект үүсгэх.

Жишээ нь тунгалаг дэвсгэрийг тунгалаг өнгөтэй болгож тохируулна уу:

```css
background-color: rbga(var(--config-accent-darkest-color-rgb), 0.5);
```

### Илүү олон өнгөт сонголтууд

Илүү олон өнгийн сонголтыг хүсч байна уу? Seelen ui нь олон тооны нэмэлт
системийн нэмэлт өнгийг илтгэнэ. Үүнийг хий үз
[Гар өнгөний лавлагаа](https://gist.github.com/eythaann/cd9a3cda0206ce23a17f5ea00ec2ba06)
бүх боломжит сонголтуудад.

Pro Prip: Таны Windows Accent өнгө өөрчлөгдөхөд Seelen ui сэдэвчилсэн
шинэчлэлтүүд автоматаар!
