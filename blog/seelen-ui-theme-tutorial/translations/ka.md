# Seelen UI: თემის საფუძვლების სახელმძღვანელო - მოაწყვეთ თქვენი სამუშაო მაგიდა, როგორც პრო!

![A beautifully customized desktop using Seelen UI themes](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/image.png)

გსურთ თქვენი Windows Desktop- ს ახალი ახალი სახე მიაწოდოთ? Seelen UI აადვილებს
მას მისი ძლიერი თემატური სისტემა. ეს სახელმძღვანელო გაგივლით საფუძვლებს, თუ
როგორ თემების მუშაობა - არ არის საჭირო კოდირების გამოცდილება!

## სპეციალური გამართვის ვერსია თემის შემქმნელებისთვის

სანამ დავიწყებთ, თემის შემქმნელებმა უნდა იცოდნენ ჩვენი სპეციალური **გამართვის
ვერსია** სელენ უი! ეს ვერსია საშუალებას გაძლევთ:

- შეამოწმეთ ელემენტები ისევე, როგორც ვებ - გვერდი (Ctrl+Shift+I ხსნის
  დეველოპერის ინსტრუმენტებს)
- იხილეთ ცოცხალი HTML/CSS ცვლილებები
- ტესტის თემის ცვლილებები მყისიერად
- გამართვის სტილის საკითხები მარტივად

ჩამოტვირთეთ Debug ვერსია ჩვენი
[ღამის გამოშვების არხი](https://seelen.io/apps/seelen-ui/releases/nightly)
(მოძებნეთ ფაილები, რომლებიც მთავრდება `-debug.exe`, მოსწონს
`Seelen.UI_2.2.8+20250410073056_x64-setup-debug.exe`).

### გსურთ გაიგოთ მეტი ღამის შენობების შესახებ?

შეამოწმეთ ჩვენი
[ღამის შენობებმა ახსნა](https://seelen.io/blog/seelen-ui-nightly) სტატია!

## თემის ფაილების გაგება

იფიქრეთ Seelen UI თემებზე, როგორიცაა საღებავის ფენები. შეგიძლიათ გამოიყენოთ
მრავალი თემა ერთხელ და ისევე, როგორც მხატვრობა, შეკვეთას მნიშვნელობა აქვს!
თემებს შეუძლიათ ყველაფერი შეცვალონ ფერებიდან ფანჯრის სტილამდე.

არსებობს სამი გზა თემის შეფუთვა:

1. **ერთი ფაილის თემა** (.MyML ფაილი)
2. **თემის საქაღალდე** (შეიცავს მრავალ ფაილს)
3. **შეკუმშული თემა** (.Slu ფაილი - სპეციალური Seelen UI ფორმატი)

### სად უნდა დააყენოთ თქვენი თემები

ყველა თემა მიდის ამ საქაღალდეში თქვენს კომპიუტერში:

```text
C:\Users\{YOUR_USERNAME}\AppData\Roaming\com.seelen.seelen-ui\themes
```

### თემის საქაღალდის სტრუქტურა

აი როგორ გამოიყურება თემის საქაღალდე შიგნით:

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

## შთაგონება: მაგალითად თემები

დარწმუნებული არ ვარ სად ან როგორ უნდა დავიწყოთ? Seelen UI გააჩნია რამდენიმე
ჩაშენებული თემით შეგიძლიათ გამოიყენოთ როგორც ინსპირაცია! შეამოწმეთ
[ნაგულისხმევი თემების კოლექცია](https://github.com/eythaann/Seelen-UI/tree/master/static/themes)
რომ ნახოთ როგორ გააკეთეს ისინი.

## ფერების მუშაობა - ეს უფრო ადვილია, ვიდრე შენ ფიქრობ!

Seelen UI ავტომატურად ირჩევს Windows Accent ფერს და ქმნის მას ხელმისაწვდომია
სხვადასხვა ჩრდილში მარტივი ფერის ცვლადის საშუალებით.

### თქვენი მთავარი აქცენტის ფერი

ეს ცვლადები იყენებენ Windows- ის პარამეტრებში მითითებულ ფერს:

- `--config-accent-color`: სუფთა ფერი (მაგალითად #ffbbaa)
- `--config-accent-color-rgb`: იგივე ფერი RGB ფორმატით (255, 187, 170)

### სრული ფერის ოჯახი

Seelen UI ქმნის მთელ პალიტრას თქვენი აქცენტის ფერისგან:

![Visual guide to Seelen UI's color palette](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/colors.png)

აქ მოცემულია ხელმისაწვდომი ფერების სრული სია:

- ყველაზე მუქი ვერსია: `--config-accent-darkest-color`
- მუქი ვერსია: `--config-accent-darker-color`
- მუქი ვერსია: `--config-accent-dark-color`
- რეგულარული ვერსია: `--config-accent-color`
- მსუბუქი ვერსია: `--config-accent-light-color`
- მსუბუქი ვერსია: `--config-accent-lighter-color`
- ყველაზე მსუბუქი ვერსია: `--config-accent-lightest-color`

თითოეულ ფერს ასევე აქვს RGB ვერსია (ბოლოს -RGB- ით). ეს სასარგებლოა გრადიენტის
და სხვა ფერის ეფექტების შექმნა.

როგორც მაგალითად, პარამეტრები ფონის ფერი გამჭვირვალეობით:

```css
background-color: rbga(var(--config-accent-darkest-color-rgb), 0.5);
```

### კიდევ უფრო ფერის ვარიანტები

გსურთ მეტი ფერის არჩევანი? Seelen UI გამოავლენს ათობით დამატებით სისტემის ფერს.
შეამოწმეთ ეს
[მოსახერხებელი ფერის მითითება](https://gist.github.com/eythaann/cd9a3cda0206ce23a17f5ea00ec2ba06)
ყველა ხელმისაწვდომი ვარიანტისთვის.

Pro რჩევა: როდესაც თქვენი Windows აქცენტი ფერი იცვლება, თქვენი Seelen UI თემის
განახლებები ავტომატურად!
