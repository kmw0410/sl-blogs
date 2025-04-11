# Seelen ui: Ёддошти асосҳои мавзӯӣ - мизи кории худро ба монанди Pro фармоиш диҳед!

![A beautifully customized desktop using Seelen UI themes](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/image.png)

Мехоҳед, ки мизи нави Windows-и худро ба таври васеъ супоред? Uelen ui онро осон
мекунад Системаи ҳозираи мавзӯъ. Ин дастури шумо шуморо тавассути асосҳои чӣ
гуна роҳ хоҳад кард Мавзӯъҳо кор мекунанд - таҷрибаи рамзгузорӣ талаб карда
намешавад!

## Версияи Debug махсус барои эҷодкорони мавзӯъ

Пеш аз оғози сар кардани муҳити атрофиён бояд дар бораи махсуси худ огоҳ бошанд
**нусхаи debug** YELLEN UI! Ин версия ба шумо имкон медиҳад:

- Унсурҳои мисли веб-саҳифа (Ctrl + Shift + Ман абзорҳои таҳиягарро мекушояд)
- Тағироти Live Live HTML / CSS-ро бубинед
- Тағир додани мавзӯи мавзӯӣ фавран
- Масъалаҳои мубрам ба осонӣ

Нусхаи debug-ро аз мо зеркашӣ кунед
[Канали шабона вироят мекунад](https://seelen.io/apps/seelen-ui/releases/nightly)
(Барои хотима хотима диҳед `-debug.exe`мисли
`Seelen.UI_2.2.8+20250410073056_x64-setup-debug.exe`).

### Мехоҳед маълумоти бештарро дар бораи сохтани шаб ёд гиред?

Санҷед [Шаби шабона шарҳ дод](https://seelen.io/blog/seelen-ui-nightly) Мақола!

## Фаҳмидани файлҳои мавзӯъ

Дар бораи мавзӯҳои UI фикр кунед, ки мавзӯъҳои UI ба монанди қабатҳои ранг. Шумо
метавонед якчанд мавзӯъҳоро дар Боре, ва мисли ранг кардани рангҳо! Мавзӯъҳо
метавонанд ҳама чизро тағир диҳанд аз рангҳо ба услубҳои тиреза.

Се роҳи ҷойгир кардан мумкин аст:

1. **Мавзӯи ягонаи файл** (. Файл)
2. **Ҷузвдон** (дорои бисёр файлҳо)
3. **Мавзӯи фишурдашуда** (.slu файл - формати махсуси Seelen ui)

### Мавзӯъҳои худро аз куҷо ҷойгир кунед

Ҳама мавзӯъҳо дар ин папка дар компютери шумо мераванд:

```text
C:\Users\{YOUR_USERNAME}\AppData\Roaming\com.seelen.seelen-ui\themes
```

### Сохтори папкаи мавзӯъ

Ин аст он чизе, ки ҷузвдони мавзӯъ ба дохили он монанд аст:

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

## Хусусияти илҳомбахш: Мавзӯъҳо

Маълум нест, ки чӣ гуна оғоз? Yelen Ui бо якчанд мавзӯъҳои сохташуда меояд
метавонад ҳамчун ваҳй истифода барад! Санҷед
[Ҷамъоварии мавзӯъҳои пешфарз](https://github.com/eythaann/Seelen-UI/tree/master/static/themes)
то бубинед, ки чӣ гуна онҳо сохта мешаванд.

## Кор бо рангҳо - аз шумо хеле осонтар аст!

Seelen ui ба таври худкор ранги аккредитивии худро гирифта, онро месозад Бо
сояҳои гуногун тавассути тағирёбандаҳои оддии ранг дастрас аст.

### Ранги асосии шумо

Ин тағирёбандаҳо рангро дар танзимоти Windows истифода мебаранд:

- `--config-accent-color`: Ранги пок (ба монанди #ffbbaa)
- `--config-accent-color-rgb`: Ҳамон ранг дар формати RGB (255, 187, 170)

### Оилаи пурраи ранг

Uelen ui як палитраи худро аз ранги аккредити шумо эҷод мекунад:

![Visual guide to Seelen UI's color palette](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/colors.png)

Ин аст рӯйхати пурраи рангҳои мавҷуда:

- Версияи торик: `--config-accent-darkest-color`
- Версияи торик: `--config-accent-darker-color`
- Версияи торик: `--config-accent-dark-color`
- Версияи мунтазам: `--config-accent-color`
- Нусхаи сабук: `--config-accent-light-color`
- Версияи сабуктар: `--config-accent-lighter-color`
- Нусхаи сабук: `--config-accent-lightest-color`

Ҳар як ранг инчунин версияи RGB дорад (бо -rgb дар охири). Ин муфид аст эҷоди
градиентҳо ва дигар эффектҳои рангӣ.

Ҳамчун танзимоти мисол ранги замина бо меҳрубонӣ:

```css
background-color: rbga(var(--config-accent-darkest-color-rgb), 0.5);
```

### Боз як имконоти рангҳои бештар

Мехоҳед интихоби рангҳои бештар? Uelen ui даҳҳо рангҳои низоми иловагии системаи
иловагиро фош мекунад. Инро тафтиш кунед
[Истинодҳои рангҳои дастӣ](https://gist.github.com/eythaann/cd9a3cda0206ce23a17f5ea00ec2ba06)
барои ҳамаи имконоти мавҷуда.

Маслиҳат: Вақте ки Windows шумо тағирёбии рангҳои шумо, навсозиҳои мавзӯнаи UI-и
шумо Ба таври худкор!
