# Упатство за теми: Упатство за основни теми - Прилагодете ја вашата работна површина како професионалец!

![A beautifully customized desktop using Seelen UI themes](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/image.png)

Дали сакате да му дадете на вашиот Windows Desktop нов нов изглед? Селен Уи го
олеснува неговиот моќен систем на теми. Овој водич ќе ве прошета низ основите
како Теми работат - не е потребно искуство за кодирање!

## Специјална верзија за дебагирање за креатори на теми

Пред да започнеме, креаторите на теми треба да знаат за нашите специјални
**верзија за дебагирање** на Селен Уи! Оваа верзија ви дозволува:

- Проверете ги елементите исто како и веб -страницата (Ctrl+Shift+I ги отвора
  алатките за развивачи)
- Погледнете ги промените во живо HTML/CSS
- Тест тематски модификации веднаш
- Лесно ги издава стилизирањето на дебагирање

Преземете ја верзијата за дебагирање од нашата
[Ноќно издава канал](https://seelen.io/apps/seelen-ui/releases/nightly)
(Побарајте датотеки што завршуваат со `-debug.exe`, како
`Seelen.UI_2.2.8+20250410073056_x64-setup-debug.exe`).

### Дали сакате да дознаете повеќе за ноќните гради?

Проверете го нашиот
[Објаснети ноќни гради](https://seelen.io/blog/seelen-ui-nightly) напис!

## Разбирање на датотеки со теми

Помислете на теми за UI на Селен како слоеви на боја. Можете да нанесете повеќе
теми на Еднаш, и исто како и сликањето, редот е важен! Темите можат да променат
сè Од бои до стилови на прозорецот.

Постојат три начини на кои може да се спакуваат темите:

1. **Тема на единечна датотека** (.имл датотека)
2. **Папка со теми** (содржи повеќе датотеки)
3. **Компресирана тема** (.slu датотека - Специјален формат на UI на Seelen)

### Каде да ги ставите вашите теми

Сите теми одат во оваа папка на вашиот компјутер:

```text
C:\Users\{YOUR_USERNAME}\AppData\Roaming\com.seelen.seelen-ui\themes
```

### Структура на папката со теми

Еве како изгледа папката со теми внатре:

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

## Инспирирани: Теми за пример

Не сте сигурни од каде или како да се започне? Селен Уи доаѓа со неколку
вградени теми може да се користи како инспирација! Проверете го
[Стандардна колекција на теми](https://github.com/eythaann/Seelen-UI/tree/master/static/themes)
Да се ​​види како се направени.

## Работа со бои - полесно е отколку што мислите!

Селен UI автоматски ја собира бојата на акцентот на прозорците и ја прави
Достапно во различни нијанси преку едноставни променливи во боја.

### Вашата главна боја на акцент

Овие променливи ја користат бојата што ја поставивте во поставките за Windows:

- `--config-accent-color`: Чистата боја (како #ffbbaa)
- `--config-accent-color-rgb`: Иста боја во формат RGB (255, 187, 170)

### Комплетното семејство во боја

Seelen UI создава цела палета од вашата боја на акцент:

![Visual guide to Seelen UI's color palette](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/colors.png)

Еве го целиот список на достапни бои:

- Најтемна верзија: `--config-accent-darkest-color`
- Потемна верзија: `--config-accent-darker-color`
- Темна верзија: `--config-accent-dark-color`
- Редовна верзија: `--config-accent-color`
- Лесна верзија: `--config-accent-light-color`
- Полесна верзија: `--config-accent-lighter-color`
- Најлесна верзија: `--config-accent-lightest-color`

Секоја боја има и верзија RGB (со -RGB на крајот). Ова е корисно за создавање
градиенти и други ефекти во боја.

Како пример поставува постава боја во позадина со непроирност:

```css
background-color: rbga(var(--config-accent-darkest-color-rgb), 0.5);
```

### Уште повеќе опции во боја

Сакате повеќе избори во боја? UI на Seelen изложува десетици дополнителни
системски бои. Проверете го ова
[корисна референца во боја](https://gist.github.com/eythaann/cd9a3cda0206ce23a17f5ea00ec2ba06)
За сите достапни опции.

Совет за про: Кога се менува бојата на акцентот на Windows, ажурирањата на
темата за UI на Seelen Автоматски!
