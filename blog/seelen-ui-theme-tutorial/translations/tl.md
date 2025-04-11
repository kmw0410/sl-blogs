# Seelen UI: Mga Pangunahing Kaalaman sa Tema - Ipasadya ang iyong desktop tulad ng isang pro!

![A beautifully customized desktop using Seelen UI themes](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/image.png)

Nais mong bigyan ang iyong Windows Desktop ng isang sariwang bagong hitsura?
Ginagawang madali ng Seelen UI Ang makapangyarihang sistema ng tema nito. Ang
gabay na ito ay lalakad sa iyo sa mga pangunahing kaalaman kung paano Mga tema
na gumagana - Walang kinakailangang karanasan sa coding!

## Espesyal na bersyon ng debug para sa mga tagalikha ng tema

Bago tayo magsimula, dapat malaman ng mga tagalikha ng tema tungkol sa aming
espesyal **Bersyon ng debug** ng Seelen ui! Hinahayaan ka ng bersyon na ito:

- Suriin ang mga elemento tulad ng isang web page (ctrl+shift+binubuksan ko ang
  mga tool ng developer)
- Tingnan ang Mga Pagbabago ng Live HTML/CSS
- Agad na ang mga pagbabago sa tema ng pagsubok
- Madali ang mga isyu sa pag -istil ng pag -debug

I -download ang bersyon ng debug mula sa aming
[Gabi -gabi ay naglalabas ng channel](https://seelen.io/apps/seelen-ui/releases/nightly)
(Maghanap ng mga file na nagtatapos sa `-debug.exe`, tulad ng
`Seelen.UI_2.2.8+20250410073056_x64-setup-debug.exe`).

### Nais mong malaman ang higit pa tungkol sa Nightly Builds?

Suriin ang aming
[Nightly build ipinaliwanag](https://seelen.io/blog/seelen-ui-nightly) Artikulo!

## Pag -unawa sa mga file ng tema

Isipin ang mga tema ng Seelen UI tulad ng mga layer ng pintura. Maaari kang mag
-aplay ng maraming mga tema sa Minsan, at tulad ng pagpipinta, mahalaga ang
order! Maaaring baguhin ng mga tema ang lahat mula sa mga kulay hanggang sa mga
istilo ng window.

Mayroong tatlong mga paraan na maaaring mai -pack ang mga tema:

1. **Solong tema ng file** (.yml file)
2. **Folder ng Tema** (naglalaman ng maraming mga file)
3. **Naka -compress na tema** (.slu file - espesyal na format ng seelen ui)

### Kung saan ilalagay ang iyong mga tema

Ang lahat ng mga tema ay pumupunta sa folder na ito sa iyong computer:

```text
C:\Users\{YOUR_USERNAME}\AppData\Roaming\com.seelen.seelen-ui\themes
```

### Istraktura ng folder ng tema

Narito kung ano ang hitsura ng isang folder ng tema sa loob:

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

## Pagkuha ng inspirasyon: Halimbawa ng mga tema

Hindi sigurado kung saan o paano magsisimula? Ang Seelen UI ay may maraming mga
built-in na tema sa iyo Maaaring gamitin bilang inspirasyon! Suriin ang
[Koleksyon ng Default na Mga Tema](https://github.com/eythaann/Seelen-UI/tree/master/static/themes)
Upang makita kung paano sila ginawa.

## Nagtatrabaho sa mga kulay - mas madali kaysa sa iniisip mo!

Awtomatikong kinuha ng Seelen UI ang iyong kulay ng windows accent at ginagawa
ito Magagamit sa iba't ibang mga shade sa pamamagitan ng mga simpleng variable
na kulay.

### Ang iyong pangunahing kulay ng accent

Ang mga variable na ito ay gumagamit ng kulay na itinakda mo sa mga setting ng
Windows:

- `--config-accent-color`: Ang purong kulay (tulad ng #ffbbaa)
- `--config-accent-color-rgb`: Parehong kulay sa format na RGB (255, 187, 170)

### Ang kumpletong pamilya ng kulay

Ang Seelen UI ay lumilikha ng isang buong palette mula sa iyong kulay ng tuldik:

![Visual guide to Seelen UI's color palette](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/colors.png)

Narito ang buong listahan ng mga magagamit na kulay:

- Darkest na bersyon: `--config-accent-darkest-color`
- Mas madidilim na bersyon: `--config-accent-darker-color`
- Madilim na bersyon: `--config-accent-dark-color`
- Regular na bersyon: `--config-accent-color`
- Light Bersyon: `--config-accent-light-color`
- Mas magaan na bersyon: `--config-accent-lighter-color`
- Banayad na bersyon: `--config-accent-lightest-color`

Ang bawat kulay ay mayroon ding bersyon ng RGB (na may -RGB sa dulo). Ito ay
kapaki -pakinabang para sa paglikha ng mga gradients at iba pang mga epekto ng
kulay.

Bilang halimbawa ng mga setting ng isang kulay ng background na may opacity:

```css
background-color: rbga(var(--config-accent-darkest-color-rgb), 0.5);
```

### Kahit na higit pang mga pagpipilian sa kulay

Gusto mo ng maraming mga pagpipilian sa kulay? Ang Seelen UI ay naglalantad ng
dose -dosenang mga karagdagang kulay ng system. Suriin ito
[madaling gamiting sanggunian ng kulay](https://gist.github.com/eythaann/cd9a3cda0206ce23a17f5ea00ec2ba06)
Para sa lahat ng magagamit na mga pagpipilian.

Pro Tip: Kapag nagbabago ang kulay ng windows accent, ang iyong mga pag -update
ng tema ng Seelen UI Awtomatikong!
