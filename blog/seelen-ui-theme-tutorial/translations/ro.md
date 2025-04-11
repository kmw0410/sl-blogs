# Seelen UI: Tutorial de bază pentru temă - Personalizați -vă desktopul ca un profesionist!

![A beautifully customized desktop using Seelen UI themes](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/image.png)

Doriți să oferiți desktop -ului dvs. Windows un aspect nou? Seelen UI îl face
ușor cu Sistemul său tematic puternic. Acest ghid te va parcurge prin elementele
de bază ale modului în care Temele funcționează - nu este necesară experiență de
codare!

## Versiune specială de depanare pentru creatorii de teme

Înainte de a începe, creatorii tematici ar trebui să știe despre specialul
nostru special **versiunea de depanare** din Seelen ui! Această versiune vă
permite:

- Inspectați elementele la fel ca o pagină web (CTRL+SHIFT+I deschide
  instrumente pentru dezvoltatori)
- Vezi schimbările Live HTML/CSS
- Modificări ale temelor de testare instantaneu
- Problemele de styling de depanare ușor

Descărcați versiunea de depanare din
[Noaptea lansează canalul](https://seelen.io/apps/seelen-ui/releases/nightly)
(căutați fișiere care se termină cu `-debug.exe`, ca
`Seelen.UI_2.2.8+20250410073056_x64-setup-debug.exe`)

### Vrei să afli mai multe despre construcțiile de noapte?

Vezi -ne
[Construiri de noapte explicate](https://seelen.io/blog/seelen-ui-nightly)
articol!

## Înțelegerea fișierelor tematice

Gândiți -vă la teme de UI Seelen precum straturi de vopsea. Puteți aplica mai
multe teme la Odată, și la fel ca pictura, ordinea contează! Temele pot schimba
totul De la culori la stiluri de ferestre.

Există trei moduri în care temele pot fi ambalate:

1. **Tema unui singur fișier** (fișier .yml)
2. **Folder tematic** (conține mai multe fișiere)
3. **Tema comprimată** (.SLU File - Format special SEELEN UI)

### Unde să -ți pui temele

Toate temele intră în acest folder de pe computer:

```text
C:\Users\{YOUR_USERNAME}\AppData\Roaming\com.seelen.seelen-ui\themes
```

### Structura folderului tematic

Iată cum arată un folder tematic în interior:

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

## Inspiratul: Teme de exemplu

Nu sunteți sigur de unde sau cum să începeți? Seelen UI vine cu mai multe teme
încorporate pe care le Poate folosi ca inspirație! Vezi
[Colecția de teme implicite](https://github.com/eythaann/Seelen-UI/tree/master/static/themes)
Pentru a vedea cum sunt făcute.

## Lucrând cu culori - este mai ușor decât crezi!

Seelen UI îți ridică automat culoarea accentului Windows și o face Disponibil în
diferite nuanțe prin variabile simple de culoare.

### Culoarea principală de accent

Aceste variabile folosesc culoarea pe care o setați în setările Windows:

- `--config-accent-color`: Culoarea pură (ca #ffbbaa)
- `--config-accent-color-rgb`: Aceeași culoare în format RGB (255, 187, 170)

### Familia de culori complete

Seelen UI creează o paletă întreagă din culoarea accentului:

![Visual guide to Seelen UI's color palette](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/colors.png)

Iată lista completă de culori disponibile:

- Cea mai întunecată versiune: `--config-accent-darkest-color`
- Versiune mai întunecată: `--config-accent-darker-color`
- Versiunea întunecată: `--config-accent-dark-color`
- Versiune obișnuită: `--config-accent-color`
- Versiune ușoară: `--config-accent-light-color`
- Versiune mai ușoară: `--config-accent-lighter-color`
- Cea mai ușoară versiune: `--config-accent-lightest-color`

Fiecare culoare are, de asemenea, o versiune RGB (cu -RGB la sfârșit). Acest
lucru este util pentru Crearea de gradienți și alte efecte de culoare.

Ca exemplu setări o culoare de fundal cu opacitate:

```css
background-color: rbga(var(--config-accent-darkest-color-rgb), 0.5);
```

### Și mai multe opțiuni de culoare

Vrei mai multe opțiuni de culoare? Seelen UI expune zeci de culori suplimentare
ale sistemului. Vezi acest lucru
[Referință la color la îndemână](https://gist.github.com/eythaann/cd9a3cda0206ce23a17f5ea00ec2ba06)
pentru toate opțiunile disponibile.

Sfat Pro: Când se schimbă culoarea accentului Windows, se actualizează tema UI
SEELEN Automat!
