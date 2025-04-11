# Seelen UI: учебник по основам темы - Настройте свой рабочий стол, как профессионал!

![A beautifully customized desktop using Seelen UI themes](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/image.png)

Хотите придать вашему настольному столу свежего нового внешнего вида?
Пользовательский интерфейс Seelen облегчает его мощная тематическая система. Это
руководство проведет вас через основы того, как Темы работают - не требуется
опыт кодирования!

## Специальная версия отладки для создателей темы

Прежде чем мы начнем, создатели тем должны знать о нашем особенном **отладочная
версия** Seelen UI! Эта версия позволяет вам:

- Осмотрите элементы, как веб -страница (Ctrl+Shift+I открывает инструменты
  разработчика)
- См. Live HTML/CSS изменения
- Тест темы мгновенно
- Легкие проблемы с стилем отладки

Скачать версию отладки с нашей
[Ночные выпуски канал](https://seelen.io/apps/seelen-ui/releases/nightly) (ищите
файлы, заканчивающиеся `-debug.exe`, нравиться
`Seelen.UI_2.2.8+20250410073056_x64-setup-debug.exe`)

### Хотите узнать больше о ночных сборках?

Проверьте наш
[Ночные сборки объяснены](https://seelen.io/blog/seelen-ui-nightly) статья!

## Понимание файлов тем

Подумайте о темах пользовательского интерфейса Seelen, таких как слои краски. Вы
можете применить несколько тем в Однажды, и, как и рисование, порядок имеет
значение! Темы могут изменить все От цветов до стилей окна.

Есть три способа упакованных тем:

1. **Тема единого файла** (.yml file)
2. **Тематическая папка** (содержит несколько файлов)
3. **Сжатая тема** (.SLU FILE - Специальный формат пользовательского интерфейса
   SEELEN)

### Куда поместить свои темы

Все темы идут в этой папке на вашем компьютере:

```text
C:\Users\{YOUR_USERNAME}\AppData\Roaming\com.seelen.seelen-ui\themes
```

### Структура папки темы

Вот как выглядит папка темы:

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

## Вдохновление: примеры темы

Не уверены, с чего или как начать? Пользовательский интерфейс Seelen
поставляется с несколькими встроенными темами, которые вы может использовать как
вдохновение! Проверьте
[Коллекция тем по умолчанию](https://github.com/eythaann/Seelen-UI/tree/master/static/themes)
Чтобы увидеть, как они сделаны.

## Работа с цветами - это проще, чем вы думаете!

Пользовательский интерфейс Seelen автоматически собирает ваш акцент Windows и
делает его Доступно в разных оттенках через простые цветовые переменные.

### Ваш основной цвет акцента

Эти переменные используют цвет, который вы устанавливаете в настройках Windows:

- `--config-accent-color`: Чистый цвет (как #ffbbaa)
- `--config-accent-color-rgb`: Тот же цвет в формате RGB (255, 187, 170)

### Полная цветная семья

Пользовательский интерфейс Seelen создает целую палитру из вашего акцентного
цвета:

![Visual guide to Seelen UI's color palette](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/colors.png)

Вот полный список доступных цветов:

- Темная версия: `--config-accent-darkest-color`
- Более темная версия: `--config-accent-darker-color`
- Темная версия: `--config-accent-dark-color`
- Регулярная версия: `--config-accent-color`
- Световая версия: `--config-accent-light-color`
- Более легкая версия: `--config-accent-lighter-color`
- Самая легкая версия: `--config-accent-lightest-color`

Каждый цвет также имеет версию RGB (с -RGB в конце). Это полезно для Создание
градиентов и других цветовых эффектов.

В качестве примера настройки цвета фона с непрозрачностью:

```css
background-color: rbga(var(--config-accent-darkest-color-rgb), 0.5);
```

### Еще больше вариантов цвета

Хотите больше выбора цвета? Пользовательский интерфейс Seelen обнажает десятки
дополнительных цветов системы. Проверьте это
[Удобная цветная ссылка](https://gist.github.com/eythaann/cd9a3cda0206ce23a17f5ea00ec2ba06)
Для всех доступных вариантов.

Совет профессионала: Когда ваш акцент Windows меняется, обновления темы
пользовательского интерфейса Seelen автоматически!
