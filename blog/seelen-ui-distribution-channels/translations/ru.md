# Пользовательский интерфейс SEELEN: Методы установки и каналы обновления

## Параметры установки

### Microsoft Store (MSIX)

Загрузите последнюю версию из
[Microsoft Store](https://www.microsoft.com/store)Полем Это самый надежный и
Опция для пользователя с автоматическими обновлениями.

**Плюсы:**

- Автоматические обновления
- Проверено и одобрено Microsoft
- Высокая безопасность и надежность
- Более легкая версия, чем установщик .exe (не включены символы отладки)

**Минусы:**

- Обновления могут занять 1-3 рабочих дней для одобрения Microsoft
- Труднее отладить и сообщать о проблемах

---

### Вингет (MSIX)

Установите последнюю версию, используя следующую команду:

> Установка Winget -seelen.seelenui

Предлагает те же преимущества, что и версия Microsoft Store с добавлением
Удобство установки командной строки.

---

### .exe установщик

Загрузите установщик setup.exe из
[Страница выпуска](https://github.com/eythaann/Seelen-UI/releases) и запустить
это.

**Плюсы:**

- Доступны немедленные обновления
- Получает уведомления об обновлении, как только будут выпущены новые версии
- Лучше для отладки целей

**Минусы:**

- Может вызвать антивирусные предупреждения (не подписано в цифровом виде)
- Больший размер файла (включает символы отладки)

## Обновление каналов

> Независимо от выбранного вами канала обновления, все версии получают
> автоматический обновления. Нестабильные каналы также получают обновления от
> более стабильных каналов (например, Nightly получает обновления как от ночной,
> так и от бета -версии/релиза).

### Выпуск (стабильный)

Самый безопасный и рекомендуемый канал для всех пользователей.

**Функции:**

- Тщательно протестировано без критических ошибок
- Идеально подходит для производства и повседневного использования
- Доступно на Microsoft Store, Winget (.msix) и AS.

### Бета

Для пользователей, которые хотят ранний доступ к новым функциям до официального
выпуска.

**Функции:**

- Включает в себя предстоящие функции под тестированием
- Может содержать незначительные ошибки
- Более частые обновления, чем стабильные
- Доступно только как установщик .exe

### Ночью

Для продвинутых пользователей и разработчиков, желающих последних изменений.

**Функции:**

- Содержит самые последние, непроверенные изменения
- Может включать ошибки или неполные функции
- Обновляется ежедневно или с каждым значительным изменением кода
- Доступно только как установщик .exe

Узнайте больше о ночном канале в нашем
[Seelen UI ночью](https://seelen.io/blog/nightly) документация.

## Механизм обновления: setup.exe vs msix

- **MSIX:** Обновления автоматически управляются Microsoft Store
- **Setup.exe:** Включает в себя встроенный обновление, который уведомляет вас,
  когда обновления доступный

![Seelen UI update notification](https://github.com/Seelen-Inc/slu-blog/blob/master/blog/seelen-ui-distribution-channels/image.png?raw=true)

Когда доступно обновление:

1. Нажмите на уведомление
2. Updater загрузит и установит обновление
3. Приложение будет перезагружаться автоматически
