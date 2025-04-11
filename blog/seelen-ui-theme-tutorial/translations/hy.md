# Seelen UI: Թեմաների հիմունքների ձեռնարկ - Անհատականացրեք ձեր աշխատասեղանը որպես Pro- ի նման:

![A beautifully customized desktop using Seelen UI themes](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/image.png)

Want անկանում եք ձեր Windows Desktop- ին թարմ նոր տեսք տալ: Seelen Ui- ն
հեշտացնում է դրա հզոր թեման համակարգը: Այս ուղեցույցը ձեզ կուղեկցի հիմունքներով,
թե ինչպես Թեմաների աշխատանքներ - Կոդավորման փորձ չի պահանջվում:

## Հատուկ կարգաբերման տարբերակ թեմայի ստեղծողների համար

Նախքան սկսելը, թեմատիկ ստեղծողները պետք է իմանան մեր հատուկի մասին **կարգաբերել
տարբերակը** Seelen Ui! Այս վարկածը ձեզ թույլ է տալիս.

- Ստուգեք տարրերը այնպես, ինչպես վեբ էջը (Ctrl + Shift + I- ն բացում է մշակող
  գործիքներ)
- Տեսեք կենդանի HTML / CSS փոփոխություններ
- Ստուգեք թեմայի փոփոխությունները անմիջապես
- Կարգավորեք ոճավորումը հեշտությամբ

Ներբեռնեք կարգաբերման տարբերակը մեր կողմից
[Գիշերային թողարկումներ ալիք](https://seelen.io/apps/seelen-ui/releases/nightly)
(Փնտրեք ֆայլեր, որոնք ավարտվում են `-debug.exe`, ինչպես
`Seelen.UI_2.2.8+20250410073056_x64-setup-debug.exe`)

### Want անկանում եք ավելին իմանալ գիշերային կառուցման մասին:

Ստուգեք մեր
[Գիշերային շինություններ են բացատրվում](https://seelen.io/blog/seelen-ui-nightly)
Հոդված

## Հասկանալով թեմայի ֆայլերը

Մտածեք Seelen UI թեմաների մասին, ինչպիսիք են ներկերի շերտերը: Կարող եք կիրառել
բազմաթիվ թեմաներ Մի անգամ, եւ ճիշտ այնպես, ինչպես նկարը, կարգը կարեւոր է:
Թեմաները կարող են փոխել ամեն ինչ գույներից մինչեւ պատուհանի ոճեր:

Կան երեք եղանակներ, որոնք թեմաները կարող են փաթեթավորվել.

1. **Մեկ ֆայլի թեման** (.yml ֆայլ)
2. **Թեմաների թղթապանակ** (պարունակում է բազմաթիվ ֆայլեր)
3. **Սեղմված թեման** (.SSLU ֆայլ - հատուկ SEELEN UI ձեւաչափ)

### Որտեղ դնել ձեր թեմաները

Բոլոր թեմաները գնում են այս թղթապանակում ձեր համակարգչում.

```text
C:\Users\{YOUR_USERNAME}\AppData\Roaming\com.seelen.seelen-ui\themes
```

### Թեմաների թղթապանակի կառուցվածքը

Ահա թե ինչ տեսք ունի թեման թղթապանակը ներսում.

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

## Ոգեշնչվելով. Օրինակ թեմաներ

Վստահ չէ, թե որտեղ կամ ինչպես սկսել: Seelen UI- ն գալիս է մի քանի ներկառուցված
թեմաներ Կարող է օգտագործել որպես ոգեշնչում: Ստուգեք
[Լռելյայն թեմաների հավաքածու](https://github.com/eythaann/Seelen-UI/tree/master/static/themes)
տեսնել, թե ինչպես են դրանք պատրաստված:

## Գույների հետ աշխատելը \`դա ավելի հեշտ է, քան կարծում եք:

Seelen Ui- ն ինքնաբերաբար հավաքում է ձեր Windows շեշտադրման գույնը եւ դարձնում
այն Առկա է տարբեր երանգներով \`պարզ գույնի փոփոխականների միջոցով:

### Ձեր հիմնական շեշտադրումը գույնը

Այս փոփոխականներն օգտագործում են Windows պարամետրերում տեղադրված գույնը.

- `--config-accent-color`Մաքուր գույնը (ինչպես #ffbbaa)
- `--config-accent-color-rgb`Նույն գույնը RGB ձեւաչափով (255, 187, 170)

### Ամբողջ գունավոր ընտանիքը

Seelen Ui- ն ստեղծում է մի ամբողջ պալիտրա ձեր շեշտադրումներից.

![Visual guide to Seelen UI's color palette](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/colors.png)

Ահա մատչելի գույների ամբողջական ցուցակը.

- Darkest տարբերակը. `--config-accent-darkest-color`
- Մուգ տարբերակը. `--config-accent-darker-color`
- Մութ տարբերակ. `--config-accent-dark-color`
- Պարբերաբար տարբերակ. `--config-accent-color`
- Թեթեւ տարբերակ. `--config-accent-light-color`
- Ավելի թեթեւ տարբերակը. `--config-accent-lighter-color`
- Լուսավոր տարբերակ. `--config-accent-lightest-color`

Յուրաքանչյուր գույն ունի նաեւ RGB տարբերակ (վերջում -rgb- ով): Սա օգտակար է
Գրադիենտների ստեղծում եւ գունային այլ էֆեկտներ:

Որպես օրինակ պարամետրեր պարունակում է ֆոնային գույնը \`անթափանցիկությամբ.

```css
background-color: rbga(var(--config-accent-darkest-color-rgb), 0.5);
```

### Նույնիսկ ավելի շատ գույնի ընտրանքներ

Want անկանում եք ավելի շատ գունային ընտրություններ: Seelen Ui- ն բացահայտում է
տասնյակ լրացուցիչ համակարգի գույներ: Ստուգեք սա
[Հարմար գույնի տեղեկանք](https://gist.github.com/eythaann/cd9a3cda0206ce23a17f5ea00ec2ba06)
Բոլոր մատչելի ընտրանքների համար:

Pro Հուշում. Երբ ձեր Windows շեշտադրման գույնը փոխվում է, ձեր Seelen UI թեման
թարմացումներ ինքնաբերաբար:
