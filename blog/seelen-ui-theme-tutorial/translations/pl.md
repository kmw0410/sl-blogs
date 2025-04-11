# Seelen UI: Samouczek podstawowych podstaw - Dostosuj swój pulpit jak profesjonalista!

![A beautifully customized desktop using Seelen UI themes](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/image.png)

Chcesz nadać swojemu komputerowi systemu Windows nowy nowy wygląd? Seelen UI
ułatwia to jego potężny system motywu. Ten przewodnik poprowadzi Cię przez
podstawy, jak Tematy działają - brak doświadczenia kodowania!

## Specjalna wersja debugowania dla twórców motywów

Zanim zaczniemy, twórcy motywów powinni wiedzieć o naszym specjalnym **wersja
debugowania** Seelen UI! Ta wersja pozwala ci:

- Sprawdź elementy, podobnie jak strona internetowa (CTRL+Shift+I Otwiera
  narzędzia programistów)
- Zobacz Live HTML/CSS Zmiany
- Natychmiastowe modyfikacje motywu testu
- Łatwe problemy z stylem debugowania

Pobierz wersję debugowania z naszej
[Nocne uwalnia kanał](https://seelen.io/apps/seelen-ui/releases/nightly)
(Poszukaj plików kończących się `-debug.exe`, tak jak
`Seelen.UI_2.2.8+20250410073056_x64-setup-debug.exe`).

### Chcesz dowiedzieć się więcej o nocnych kompilacjach?

Sprawdź nasze
[Wyjaśnione nocne kompilacje](https://seelen.io/blog/seelen-ui-nightly) artykuł!

## Zrozumienie plików motywów

Pomyśl o motywach UI Seelen, takich jak warstwy farby. Możesz zastosować wiele
motywów pod adresem Raz i po prostu malowanie, zamówienie ma znaczenie! Tematy
mogą wszystko zmienić Od kolorów po style okien.

Istnieją trzy sposoby, w jakie można pakować tematy:

1. **Motyw pojedynczego pliku** (plik .yml)
2. **Folder motywu** (zawiera wiele plików)
3. **Motyw skompresowany** (Plik .slu - specjalny format interfejsu użytkownika)

### Gdzie umieścić swoje motywy

Wszystkie motywy trafiają w ten folder na komputerze:

```text
C:\Users\{YOUR_USERNAME}\AppData\Roaming\com.seelen.seelen-ui\themes
```

### Struktura folderu motywu

Oto, jak wygląda folder motywu w środku:

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

## Inspiracja: przykładowe motywy

Nie wiesz, od czego i jak zacząć? Seelen UI ma kilka wbudowanych motywów Może
użyć jako inspiracji! Sprawdź
[Domyślna kolekcja motywów](https://github.com/eythaann/Seelen-UI/tree/master/static/themes)
Aby zobaczyć, jak są stworzone.

## Praca z kolorami - jest to łatwiejsze niż myślisz!

Seelen interfejs użytkownika automatycznie podnosi kolor akcentu Windows i robi
to Dostępne w różnych odcieniach poprzez proste zmienne kolorów.

### Twój główny kolor akcentu

Te zmienne używają koloru ustawionego w ustawieniach systemu Windows:

- `--config-accent-color`: Czysty kolor (jak #ffbbaa)
- `--config-accent-color-rgb`: Ten sam kolor w formacie RGB (255, 187, 170)

### Kompletna rodzina kolorów

Seelen UI tworzy całą paletę z twojego koloru akcentu:

![Visual guide to Seelen UI's color palette](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/colors.png)

Oto pełna lista dostępnych kolorów:

- Najciemniejsza wersja: `--config-accent-darkest-color`
- Ciemniejsza wersja: `--config-accent-darker-color`
- Ciemna wersja: `--config-accent-dark-color`
- Wersja zwykła: `--config-accent-color`
- Wersja lekka: `--config-accent-light-color`
- Lżejsza wersja: `--config-accent-lighter-color`
- Najlżejsza wersja: `--config-accent-lightest-color`

Każdy kolor ma również wersję RGB (z -rgb na końcu). To jest przydatne dla
Tworzenie gradientów i innych efektów kolorów.

Jako przykładowe ustawienia kolor tła z krycie:

```css
background-color: rbga(var(--config-accent-darkest-color-rgb), 0.5);
```

### Jeszcze więcej opcji kolorów

Chcesz więcej wyborów kolorów? Seelen UI odsłania dziesiątki dodatkowych kolorów
systemu. Sprawdź to
[Przydatne odniesienie do kolorów](https://gist.github.com/eythaann/cd9a3cda0206ce23a17f5ea00ec2ba06)
Dla wszystkich dostępnych opcji.

Wskazówka: Gdy zmienia się kolor systemu Windows, aktualizacje motywu SEELEN
automatycznie!
