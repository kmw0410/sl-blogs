# SEELEN UI: Motīvu pamati - Pielāgojiet savu darbvirsmu kā profesionālis!

![A beautifully customized desktop using Seelen UI themes](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/image.png)

Vai vēlaties savam Windows darbvirsmai piešķirt jaunu jaunu izskatu? Seelen UI
padara to vieglu ar tā jaudīgā tēmu sistēma. Šis ceļvedis iepazīstinās jūs ar
pamatiem, kā Tēmas darbs - nav nepieciešama kodēšanas pieredze!

## Īpaša atkļūdošanas versija tēmu veidotājiem

Pirms mēs sākam, tēmas veidotājiem būtu jāzina par mūsu īpašo **atkļūdošanas
versija** no Seelen Ui! Šī versija ļauj jums:

- Pārbaudiet elementus tāpat kā tīmekļa lapu (Ctrl+Shift+I atver izstrādātāja
  rīkus)
- Skatīt tiešās HTML/CSS izmaiņas
- Testa tēmas modifikācijas uzreiz
- Atkļūdošanas stila jautājumi viegli

Lejupielādējiet atkļūdošanas versiju no mūsu
[Nakts izlaiž kanālu](https://seelen.io/apps/seelen-ui/releases/nightly)
(meklējiet failus, kas beidzas ar `-debug.exe`, piemēram
`Seelen.UI_2.2.8+20250410073056_x64-setup-debug.exe`).

### Vai vēlaties uzzināt vairāk par nakts būvniecību?

Pārbaudiet mūsu
[Nakts būvniecības paskaidrots](https://seelen.io/blog/seelen-ui-nightly)
raksts!

## Izpratne par motīvu failiem

Padomājiet par Seelen UI tēmām, piemēram, krāsas slāņiem. Jūs varat izmantot
vairākas tēmas vietnē Reiz, un tāpat kā gleznošanai, kārtībai ir nozīme! Motīvi
var mainīt visu no krāsām līdz logu stiliem.

Ir trīs veidi, kā var iesaiņot tēmas:

1. **Viena faila tēma** (.yml fails)
2. **Tematikas mape** (satur vairākus failus)
3. **Saspiesta tēma** (.SLU fails - īpašs Seelen UI formāts)

### Kur ievietot savas tēmas

Visas tēmas iet šajā mapē jūsu datorā:

```text
C:\Users\{YOUR_USERNAME}\AppData\Roaming\com.seelen.seelen-ui\themes
```

### Tēmas mapes struktūra

Lūk, kā iekšpusē izskatās motīva mape:

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

## Iedvesmojoties: piemēru tēmas

Nezināt, kur vai kā sākt? Seelen ui nāk ar vairākām iebūvētām tēmām Var izmantot
kā iedvesmu! Pārbaudiet
[Noklusējuma tēmu kolekcija](https://github.com/eythaann/Seelen-UI/tree/master/static/themes)
Lai redzētu, kā viņi ir izgatavoti.

## Darbs ar krāsām - tas ir vieglāk, nekā jūs domājat!

Seelen UI automātiski paņem jūsu Windows Accent krāsu un padara to Pieejams
dažādos toņos, izmantojot vienkāršus krāsu mainīgos.

### Jūsu galvenā akcenta krāsa

Šie mainīgie izmanto iestatīto krāsu Windows iestatījumos:

- `--config-accent-color`: Tīra krāsa (piemēram, #ffbbaa)
- `--config-accent-color-rgb`: Tāda pati krāsa RGB formātā (255, 187, 170)

### Pilnīga krāsu ģimene

Seelen UI rada veselu paleti no jūsu akcenta krāsas:

![Visual guide to Seelen UI's color palette](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/colors.png)

Šeit ir pilns pieejamo krāsu saraksts:

- Tumšākā versija: `--config-accent-darkest-color`
- Tumšāka versija: `--config-accent-darker-color`
- Tumšā versija: `--config-accent-dark-color`
- Regulārā versija: `--config-accent-color`
- Viegla versija: `--config-accent-light-color`
- Vieglāka versija: `--config-accent-lighter-color`
- Vieglākā versija: `--config-accent-lightest-color`

Katrā krāsā ir arī RGB versija (ar -rgb beigās). Tas ir noderīgi Gradientu un
citu krāsu efektu izveidošana.

Kā piemērs iestatījumiem fona krāsa ar necaurredzamību:

```css
background-color: rbga(var(--config-accent-darkest-color-rgb), 0.5);
```

### Vēl vairāk krāsu opciju

Vai vēlaties vairāk krāsu izvēles? Seelen UI pakļauj desmitiem papildu sistēmas
krāsu. Pārbaudiet šo
[parocīga krāsu atsauce](https://gist.github.com/eythaann/cd9a3cda0206ce23a17f5ea00ec2ba06)
par visām pieejamajām iespējām.

Pro padoms: kad mainās jūsu Windows Accent Color, jūsu Seelen UI motīva
atjauninājumi automātiski!
