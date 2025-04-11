# Seelen UI: Основи на темата - Персонализирайте вашия работен плот като професионалист!

![A beautifully customized desktop using Seelen UI themes](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/image.png)

Искате ли да придадете на вашия Windows Desktop нов външен вид? Seelen UI го
улеснява мощната му тематична система. Това ръководство ще ви преведе през
основите на това как Теми работа - не се изисква опит за кодиране!

## Специална версия за отстраняване на грешки за създателите на теми

Преди да започнем, създателите на теми трябва да знаят за нашия специален
**Версия за отстраняване на грешки** на Seelen Ui! Тази версия ви позволява:

- Проверете елементите точно като уеб страница (Ctrl+Shift+I отваря инструменти
  за разработчици)
- Вижте HTML/CSS промени на живо
- Тест за модификации на темата незабавно
- Проблеми с стила на отстраняване на грешки лесно

Изтеглете версията за отстраняване на грешки от нашите
[Nightly освобождава канал](https://seelen.io/apps/seelen-ui/releases/nightly)
(Потърсете файлове, завършващи с `-debug.exe`, като
`Seelen.UI_2.2.8+20250410073056_x64-setup-debug.exe`).

### Искате ли да научите повече за нощните компилации?

Вижте нашите [Обясниха нощните сгради](https://seelen.io/blog/seelen-ui-nightly)
Статия!

## Разбиране на теми файлове

Помислете за теми за потребителски интерфейс като слоеве боя. Можете да
приложите множество теми на Веднъж и точно като рисуването, поръчката има
значение! Темите могат да променят всичко От цветове до стилове на прозореца.

Има три начина, по които темите могат да бъдат опаковани:

1. **Тема на един файл** (.yml файл)
2. **Тематична папка** (Съдържа множество файлове)
3. **Компресирана тема** (.slu файл - Специален формат на потребителския
   интерфейс на Seelen)

### Къде да поставите темите си

Всички теми влизат в тази папка на вашия компютър:

```text
C:\Users\{YOUR_USERNAME}\AppData\Roaming\com.seelen.seelen-ui\themes
```

### Структура на тематичните папки

Ето как изглежда папка с теми вътре:

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

## Вдъхновяване: Примерни теми

Не сте сигурни къде или как да започнете? Seelen UI се предлага с няколко
вградени теми Може да използва като вдъхновение! Вижте
[Колекция теми по подразбиране](https://github.com/eythaann/Seelen-UI/tree/master/static/themes)
за да видите как са направени.

## Работа с цветове - по -лесно е, отколкото си мислите!

Seelen потребителският интерфейс автоматично вдига цвета на вашия Windows Accent
и го прави Предлага се в различни нюанси чрез прости цветови променливи.

### Вашият основен цвят на акцент

Тези променливи използват цвета, който сте задали в настройките на Windows:

- `--config-accent-color`: Чистият цвят (като #FFBBAA)
- `--config-accent-color-rgb`: Същият цвят във формат RGB (255, 187, 170)

### Пълното семейство на цветовете

Seelen UI създава цяла палитра от вашия цвят на акцента:

![Visual guide to Seelen UI's color palette](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/colors.png)

Ето пълния списък с налични цветове:

- Най -тъмната версия: `--config-accent-darkest-color`
- По -тъмна версия: `--config-accent-darker-color`
- Тъмна версия: `--config-accent-dark-color`
- Редовна версия: `--config-accent-color`
- Лека версия: `--config-accent-light-color`
- По -лека версия: `--config-accent-lighter-color`
- Най -леката версия: `--config-accent-lightest-color`

Всеки цвят също има RGB версия (с -RGB в края). Това е полезно за Създаване на
градиенти и други цветови ефекти.

Като пример настройки цвят на фона с непрозрачност:

```css
background-color: rbga(var(--config-accent-darkest-color-rgb), 0.5);
```

### Още повече цветови опции

Искате повече избор на цвят? Seelen UI излага десетки допълнителни цветове на
системата. Вижте това
[удобна цветова справка](https://gist.github.com/eythaann/cd9a3cda0206ce23a17f5ea00ec2ba06)
За всички налични опции.

Професионален съвет: Когато цветът на вашия Windows Accent се промени, вашият
потребителски интерфейс актуализира темата за потребителския интерфейс
автоматично!
