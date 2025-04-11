# СЕЕЛЕН УИ: Туториал теме теме - прилагодите радну површину као про!

![A beautifully customized desktop using Seelen UI themes](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/image.png)

Желите ли дати свој Виндовс Расктоп нови нови изглед? Сеелен уи олакшава њен
моћни систем тема. Овај водич ће вас прошетати кроз основе како ТЕМЕС РАД - Није
потребно искуство кодирања!

## Специјална верзија за уклањање погрешака за теме тема

Пре него што почнемо, ствараоци теме би требали знати о нашем посебном **верзија
за уклањање погрешака** од Сеелена УИ! Ова верзија вам омогућава:

- Прегледајте елементе баш као и веб страница (Цтрл + Схифт + И Отвара алате за
  програмере)
- Погледајте ХТМЛ / ЦСС промене уживо
- Испитајте теме тестирање одмах
- Лако испит за уклањање погрешака

Преузмите верзију за уклањање погрешака
[Ноћни издања канала](https://seelen.io/apps/seelen-ui/releases/nightly)
(Потражите датотеке које завршавају `-debug.exe`, као
`Seelen.UI_2.2.8+20250410073056_x64-setup-debug.exe`).

### Желите да сазнате више о ноћним грађевинама?

Погледајте наше [Ноћно објашњено](https://seelen.io/blog/seelen-ui-nightly)
Чланак!

## Разумевање датотека тема

Помислите на сеелен уи теме попут слојева боје. Можете да примените више тема на
Једном, као и слично слика, наређење је важно! Теме могу све да промене од боја
до стилова прозора.

Постоје три начина на који се теме могу упаковати:

1. **Тема појединачне датотеке** (.имл датотека)
2. **Мапа теме** (Садржи више датотека)
3. **Компримована тема** (.слу датотека - Специјални СЕЕЛЕН УИ формат)

### Где да ставимо своје теме

Све теме иду у овој мапи на рачунару:

```text
C:\Users\{YOUR_USERNAME}\AppData\Roaming\com.seelen.seelen-ui\themes
```

### Структура мапе теме

Ево каква изгледа тема мапа у:

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

## Добијање инспирисања: Пример тема

Нисте сигурни где или како започети? СЕЕЛЕН УИ долази са неколико уграђених тема
Може да користи као инспирација! Погледајте
[Подразумевана колекција теме](https://github.com/eythaann/Seelen-UI/tree/master/static/themes)
да видим како су направљени.

## Рад са бојама - лакше је него што мислите!

СЕЕЛЕН УИ аутоматски подиже боју аканте за Виндовс и чини га Доступно у
различитим нијансама кроз једноставне променљиве боје.

### Твоја главна нагласка боја

Ове променљиве користе боју коју сте поставили у Виндовс Сеттингс-у:

- `--config-accent-color`: Чиста боја (попут #ФФББАА)
- `--config-accent-color-rgb`: Иста боја у РГБ формату (255, 187, 170)

### Комплетна породица у боји

СЕЕЛЕН УИ ствара целу палету из ваше нагласке боје:

![Visual guide to Seelen UI's color palette](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/colors.png)

Ево потпуне листе доступних боја:

- Најмрачнија верзија: `--config-accent-darkest-color`
- Тамнија верзија: `--config-accent-darker-color`
- Тамна верзија: `--config-accent-dark-color`
- Редовна верзија: `--config-accent-color`
- Лагана верзија: `--config-accent-light-color`
- Лакша верзија: `--config-accent-lighter-color`
- Најлакша верзија: `--config-accent-lightest-color`

Свака боја такође има РГБ верзију (са -РГБ на крају). Ово је корисно за Стварање
градијената и других ефеката боја.

Као што је пример подешавања позадинске боје са непрозирношћу:

```css
background-color: rbga(var(--config-accent-darkest-color-rgb), 0.5);
```

### Још више опција боја

Желите више избора у боји? СЕЕЛЕН УИ излаже десетине додатних боја. Погледајте
ово
[Прикладна референца боја](https://gist.github.com/eythaann/cd9a3cda0206ce23a17f5ea00ec2ba06)
За све доступне опције.

ПРО САВЕТ: Када се промјене боје Виндовс Аццент цолор, ваша датотека СЕЕЛЕН УИ
Аутоматски!
