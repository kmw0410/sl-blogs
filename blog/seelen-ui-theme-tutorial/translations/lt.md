# SEELEN UI: Temos pagrindų pamoka - pritaikykite savo darbalaukį kaip profesionalas!

![A beautifully customized desktop using Seelen UI themes](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/image.png)

Norite suteikti savo „Windows“ darbalaukį naują naują išvaizdą? Seelen ui
palengvina jos galinga temų sistema. Šis vadovas apžvelgs jūsų pagrindus, kaip
Temos darbas - nereikia kodavimo patirties!

## Speciali derinimo versija temų kūrėjams

Prieš pradėdami, temos kūrėjai turėtų žinoti apie mūsų ypatingą **derinimo
versija** iš Seelen ui! Ši versija leidžia jums:

- Patikrinkite elementus kaip ir tinklalapį („Ctrl+Shift“+„I Open“ kūrėjo
  įrankiai)
- Žr. Tiesioginius HTML/CSS pakeitimus
- Testo temos modifikacijos akimirksniu
- Derinimo stiliaus problemos lengvai

Atsisiųskite derinimo versiją iš mūsų
[Naktinis kanalas](https://seelen.io/apps/seelen-ui/releases/nightly) (Ieškokite
failų, pasibaigusių `-debug.exe`, kaip
`Seelen.UI_2.2.8+20250410073056_x64-setup-debug.exe`).

### Norite sužinoti daugiau apie naktines kūrimą?

Patikrinkite mūsų [Naktys paaiškino](https://seelen.io/blog/seelen-ui-nightly)
Straipsnis!

## Temos failų supratimas

Pagalvokite apie „Seelen“ UI temas, tokias kaip dažų sluoksniai. Galite
pritaikyti kelias temas Kartą, kaip ir tapybai, tvarka yra svarbi! Temos gali
viską pakeisti Nuo spalvų iki langų stilių.

Yra trys būdai, kaip galima supakuoti:

1. **Vieno failo tema** (.ml failas)
2. **Teminis aplankas** (yra keli failai)
3. **Suspausta tema** (.SLU failas - specialus SEELEN UI formatas)

### Kur išdėstyti savo temas

Visos temos pateikiamos šiame aplanke jūsų kompiuteryje:

```text
C:\Users\{YOUR_USERNAME}\AppData\Roaming\com.seelen.seelen-ui\themes
```

### Temos aplanko struktūra

Štai kaip viduje atrodo teminis aplankas:

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

## Įkvėptas: pavyzdžių temos

Nežinote, kur ar kaip pradėti? „Seelen UI“ yra su keliomis įmontuotomis temomis
Gali naudoti kaip įkvėpimą! Peržiūrėkite
[Numatytoji temų kolekcija](https://github.com/eythaann/Seelen-UI/tree/master/static/themes)
Norėdami pamatyti, kaip jie pagaminti.

## Darbas su spalvomis - tai lengviau, nei jūs manote!

„Seelen UI“ automatiškai paima jūsų „Windows“ akcento spalvą ir daro ją Galima
įsigyti skirtingais atspalviais per paprastus spalvų kintamuosius.

### Jūsų pagrindinė akcento spalva

Šie kintamieji naudoja spalvą, kurią nustatėte „Windows“ nustatymuose:

- `--config-accent-color`: Gryna spalva (kaip #ffbbaa)
- `--config-accent-color-rgb`: Ta pati spalva RGB formatu (255, 187, 170)

### Visiška spalvų šeima

„Seelen UI“ sukuria visą paletę iš jūsų akcento spalvos:

![Visual guide to Seelen UI's color palette](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/colors.png)

Čia yra visas galimų spalvų sąrašas:

- Tamsiausia versija: `--config-accent-darkest-color`
- Tamsesnė versija: `--config-accent-darker-color`
- Tamsi versija: `--config-accent-dark-color`
- Įprasta versija: `--config-accent-color`
- Šviesos versija: `--config-accent-light-color`
- Lengvesnė versija: `--config-accent-lighter-color`
- Lengviausia versija: `--config-accent-lightest-color`

Kiekviena spalva taip pat turi RGB versiją (su -RGB gale). Tai naudinga
gradientų ir kitų spalvų efektų kūrimas.

Kaip pavyzdys nustatymas, fono spalva, turinti neskaidrumą:

```css
background-color: rbga(var(--config-accent-darkest-color-rgb), 0.5);
```

### Dar daugiau spalvų variantų

Norite daugiau spalvų pasirinkimo? SEELEN UI atskleidžia dešimtis papildomų
sistemos spalvų. Patikrinkite tai
[Patogi spalvų nuoroda](https://gist.github.com/eythaann/cd9a3cda0206ce23a17f5ea00ec2ba06)
visoms turimoms galimybėms.

Pro patarimas: Kai keičiasi jūsų „Windows“ akcento spalva, jūsų „Seelen UI“
temos atnaujinimai automatiškai!
