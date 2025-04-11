# SEELEN UI: Temaşekirina bassên bingehîn - sermaseya xwe mîna pro-yê xweş bikin!

![A beautifully customized desktop using Seelen UI themes](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/image.png)

Dixwazin ku hûn Windows Desktopek nû ya nû ya nû ya nû bidin? Seelen UI bi wî re
hêsantir dike pergala mijara wê ya hêzdar. Ev Rêber dê di nav rêzikên Howawa de
bi we re bimeşe Temayên xebatê - Tecrubeya kodkirinê tune!

## Guhertoya Debugê ya Taybet ji bo Afirînerên Mijarê

Berî ku em dest pê bikin, dê afirînerên mijarê li ser taybetî ya me zanibin
**Guhertoya Debug** of seelen ui! Ev guhertoya we dihêle:

- Elementên wekî rûpelek malperê (Ctrl + Shift + i amûrên pêşdebiran vedike)
- HTML / CSS-ya bijî bibînin
- Guhertinên mijarê tavilê bikin
- Pirsgirêkên Debug bi hêsanî

Guhertoya debug ji ya me dakêşin
[Kanala şevê vedibêje](https://seelen.io/apps/seelen-ui/releases/nightly) (Li
pelên bi dawî bigerin `-debug.exe`, Lînî
`Seelen.UI_2.2.8+20250410073056_x64-setup-debug.exe`).

### Dixwazin ku di derheqê avahiyên şevê de bêtir fêr bibin?

Va kontrol bikin
[Avakirina şevê ravekirin](https://seelen.io/blog/seelen-ui-nightly) tişt!

## Famkirina pelên mijarê

Li ser mijarên Seelen UI-yê mîna pêlavên rengîn difikirin. Hûn dikarin gelek
mijarên li ser bicîh bikin Carekê, û mîna wêneyan, fermanê dide! Temayên her
tiştî dikarin biguhezînin ji rengên ji bo şêwazên pencereyê.

Sê awayên ku dikarin bêne pak kirin hene:

1. **Mijara pelê yekane** (.ml pelê)
2. **Peldanka Mijarê** (pelên pirjimar tê de hene)
3. **Mijara tevlihevkirî** (.Slu File - Formatek taybetî ya Seelen UI)

### Li ku derê mijarên xwe danîn

Hemî mijar di vê peldanka li ser komputera xwe de diçin:

```text
C:\Users\{YOUR_USERNAME}\AppData\Roaming\com.seelen.seelen-ui\themes
```

### Struktura peldanka mijarê

Li vir e ku peldanka mijarê li hundur xuya dike:

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

## Inspirasyonê digirin: Mijarên mînak

Ne bawer e an çawa dest pê dike? Seelen UI bi çend mijarên çêkirî yên we re tê
dikare wekî îlhamê bikar bîne! Vedigerin
[berhevoka mijarên xwerû](https://github.com/eythaann/Seelen-UI/tree/master/static/themes)
dîtina ka ew çawa têne çêkirin.

## Bi rengan re dixebite - ew ji ya ku hûn difikirin hêsantir e!

Seelen UI bixweber rengê windows-ê ya windows-ê digire û dike di nav cûrbecûr
cûrbecûr cûrbecûr rengên hêsan de hene.

### Rengê xweya bingehîn

Van guherbaran rengê ku hûn di Mîhengên Windows-ê de destnîşan dikin bikar
tînin:

- `--config-accent-color`: Rengê pak (mîna #ffbbaa)
- `--config-accent-color-rgb`: Di forma RGB de heman rengê (255, 187, 170)

### Malbata rengîn a bêkêmasî

Seelen UI ji rengê xwe ya bîhnxweş paletek tevahî diafirîne:

![Visual guide to Seelen UI's color palette](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/colors.png)

Li vir navnîşa tevahî ya rengên heyî hene:

- Guhertoya Darkest: `--config-accent-darkest-color`
- Guhertoya Darker: `--config-accent-darker-color`
- Guhertoya tarî: `--config-accent-dark-color`
- Guhertoya birêkûpêk: `--config-accent-color`
- Guhertoya sivik: `--config-accent-light-color`
- Guhertoya sivik: `--config-accent-lighter-color`
- Guhertoya sivik: `--config-accent-lightest-color`

Her reng jî guhertoyek RGB heye (bi -rgb di dawiyê de). Ev ji bo kêrhatî ye bi
afirandina hûrgelan û bandorên rengîn ên din.

Wekî mînak mîhengek rengek paşîn bi opacity:

```css
background-color: rbga(var(--config-accent-darkest-color-rgb), 0.5);
```

### Vebijarkên bêtir rengîn

Hilbijarkên rengîntir dixwazin? Seelen UI bi dehan rengên pergala zêde zêde
dike. Vê yekê kontrol bikin
[Referansa Rengê rengîn](https://gist.github.com/eythaann/cd9a3cda0206ce23a17f5ea00ec2ba06)
ji bo hemî vebijarkên berdest.

Pro Tip: Dema ku rengê rengê windows-ê diguhere, nûvekirinên mijara weya Seelen
Ui bixweber!
