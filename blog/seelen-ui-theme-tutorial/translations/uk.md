# SEELEN UI: Підручник з основ основ - Налаштуйте свій робочий стіл, як професіонал!

![A beautifully customized desktop using Seelen UI themes](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/image.png)

Хочете надати робочому столу Windows свіжий новий вигляд? Eelen ui полегшує його
потужна тематична система. Цей посібник проведе вас через основи того, як Теми
працюють - не потрібен досвід кодування!

## Спеціальна версія налагодження для творців теми

Перш ніж ми розпочнемо, творці теми повинні знати про наш особливий **версія
налагодження** Seelen ui! Ця версія дозволяє вам:

- Перевірте елементи так само, як веб -сторінка (Ctrl+Shift+I відкриває
  інструменти розробника)
- Див. Зміни HTML/CSS
- Миттєво тестуйте модифікації теми
- Проблеми стилю налагодження легко

Завантажте версію налагодження з нашого
[Нічний випуск канал](https://seelen.io/apps/seelen-ui/releases/nightly)
(Шукайте файли, що закінчуються `-debug.exe`, як
`Seelen.UI_2.2.8+20250410073056_x64-setup-debug.exe`.).

### Хочете дізнатися більше про нічні будівлі?

Перевірте наш [Нічні будівлі пояснені](https://seelen.io/blog/seelen-ui-nightly)
Стаття!

## Розуміння тематичних файлів

Подумайте про те, що Seelen ui теми, як шари фарби. Ви можете застосувати кілька
тем на Одного разу, і як і живопис, замовлення має значення! Теми можуть все
змінити від кольорів до стилів вікон.

Можна упаковати три теми:

1. **Тема єдиного файлу** (.yml файл)
2. **Тематична папка** (містить кілька файлів)
3. **Стисна тема** (.

### Де поставити свої теми

Усі теми йдуть у цій папці на вашому комп’ютері:

```text
C:\Users\{YOUR_USERNAME}\AppData\Roaming\com.seelen.seelen-ui\themes
```

### Структура папки теми

Ось як виглядає папка теми всередині:

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

## Натхненний: Приклад теми

Не впевнені, з чого чи як почати? Eelen ui постачається з декількома вбудованими
тематиками Можна використовувати як натхнення! Перевірте
[Колекція тем за замовчуванням](https://github.com/eythaann/Seelen-UI/tree/master/static/themes)
Щоб побачити, як вони зроблені.

## Робота з кольорами - це простіше, ніж ви думаєте!

Користувальницький інтерфейс Seelen автоматично підбирає свій акцентний колір
Windows і робить його Доступний у різних відтінках через прості кольорові
змінні.

### Ваш головний акцентний колір

Ці змінні використовують колір, встановлений у налаштуваннях Windows:

- `--config-accent-color`: Чистий колір (як #ffbaa)
- `--config-accent-color-rgb`: Той же колір у форматі RGB (255, 187, 170)

### Повна сімейство кольору

UI Seelen створює цілу палітру від вашого акценту:

![Visual guide to Seelen UI's color palette](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/colors.png)

Ось повний список доступних кольорів:

- Найтемніша версія: `--config-accent-darkest-color`
- Темніша версія: `--config-accent-darker-color`
- Темна версія: `--config-accent-dark-color`
- Регулярна версія: `--config-accent-color`
- Світла версія: `--config-accent-light-color`
- Легша версія: `--config-accent-lighter-color`
- Найлегша версія: `--config-accent-lightest-color`

Кожен колір також має версію RGB (з -rgb в кінці). Це корисно для Створення
градієнтів та інших кольорових ефектів.

Як приклад налаштування кольору фону з непрозорістю:

```css
background-color: rbga(var(--config-accent-darkest-color-rgb), 0.5);
```

### Ще більше варіантів кольорів

Хочете більше вибору кольору? SEELEN UI розкриває десятки додаткових кольорів
системи. Перевірте це
[Зручна довідка про кольори](https://gist.github.com/eythaann/cd9a3cda0206ce23a17f5ea00ec2ba06)
Для всіх доступних варіантів.

Порада: Коли змінюється колір акценту Windows, оновлення вашої теми SEELEN
Автоматично!
