# Seeen UI: ការបង្រៀនមូលដ្ឋានគ្រឹះនៃប្រធានបទ - ប្តូរលើផ្ទៃតុរបស់អ្នកដូចជាការគាំទ្រ!

![A beautifully customized desktop using Seelen UI themes](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/image.png)

ចង់ផ្តល់ឱ្យផ្ទៃតុវីនដូរបស់អ្នកនូវរូបរាងថ្មីស្រស់ស្អាតទេ? Seeen UI ធ្វើឱ្យវាងាយស្រួលជាមួយ
 ប្រព័ន្ធស្បែកដែលមានឥទ្ធិពលរបស់វា។ មគ្គុទេសក៍នេះនឹងដើរអ្នកតាមរយៈមូលដ្ឋានគ្រឹះនៃរបៀប
 ការងារស្បែក - មិនមានបទពិសោធសរសេរកូដទេ!

## កំណែបំបាត់កំហុសពិសេសសម្រាប់អ្នកបង្កើតស្បែក

មុនពេលយើងចាប់ផ្តើមអ្នកបង្កើតប្រធានបទគួរតែដឹងអំពីលក្ខណៈពិសេសរបស់យើង **កំណែបំបាត់កំហុស**
នៃ Seeen UI! កំណែនេះអនុញ្ញាតឱ្យអ្នក:

* ពិនិត្យធាតុដូចគ្នានឹងទំព័របណ្តាញអ៊ីនធឺណេត (បញ្ជា (Ctrl) + ប្ដូរ (Shift) + ខ្ញុំបើកឧបករណ៍អភិវឌ្ឍន៍អ្នកអភិវឌ្ឍន៍)
* សូមមើលការផ្លាស់ប្តូរ HTML / CSS ផ្ទាល់
* ការកែប្រែស្បែកសាកល្បងភ្លាមៗ
* បំបាត់កំហុសបញ្ហាងាយស្រួល

ទាញយកកំណែបំបាត់កំហុសពីរបស់យើង
[ការចេញផ្សាយនៅពេលយប់](https://seelen.io/apps/seelen-ui/releases/nightly)
(រកមើលឯកសារបញ្ចប់ដោយ `-debug.exe`ដូចជា
`Seelen.UI_2.2.8+20250410073056_x64-setup-debug.exe`) ។

### ចង់រៀនបន្ថែមទៀតអំពីការស្ថាបនាពេលយប់?

ពិនិត្យមើលរបស់យើង
[ការស្ថាបនាពេលយប់បានពន្យល់](https://seelen.io/blog/seelen-ui-nightly) អត្ថបទ!

## ស្វែងយល់ពីឯកសារស្បែក

គិតអំពីស្បែករបស់ Seelen UI ដូចជាស្រទាប់ថ្នាំលាប។ អ្នកអាចអនុវត្តស្បែកច្រើននៅ
 ម្តងហើយគ្រាន់តែចូលចិត្តការគូរគំនូរ, លំដាប់លំដោយបញ្ហា! ស្បែកអាចផ្លាស់ប្តូរអ្វីៗទាំងអស់
 ពីពណ៌ទៅរចនាប័ទ្មបង្អួច។

វាមានខ្លឹមសារបីយ៉ាងអាចត្រូវបានខ្ចប់:

1. **ស្បែកឯកសារតែមួយ** (ឯកសារ .myml)
2. **ថតស្បែក** (មានឯកសារច្រើន)
3. **ស្បែកដែលបានបង្រួម** (ឯកសារ .slu - ទម្រង់ពិសេស SELEN UI UI)

### កន្លែងដែលត្រូវដាក់ប្រធានបទរបស់អ្នក

ស្បែកទាំងអស់ចូលក្នុងថតឯកសារនេះនៅលើកុំព្យូទ័ររបស់អ្នក:

```text
C:\Users\{YOUR_USERNAME}\AppData\Roaming\com.seelen.seelen-ui\themes
```

### រចនាសម្ព័ន្ធថតស្បែក

នេះជាអ្វីដែលថតស្បែកមើលទៅដូចជាខាងក្នុង:

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

## ទទួលបានការបំផុសគំនិត: ឧទាហរណ៍ស្បែក

មិនប្រាកដថាកន្លែងណាឬរបៀបចាប់ផ្តើម? Seeen UI ភ្ជាប់មកជាមួយស្បែកដែលមានស្រាប់ជាច្រើន
 អាចប្រើជាការបំផុសគំនិត! ពិនិត្យមើលឯកសារ
[ការប្រមូលស្បែកលំនាំដើម](https://github.com/eythaann/Seelen-UI/tree/master/static/themes)
ដើម្បីមើលពីរបៀបដែលពួកគេបានធ្វើ។

## ធ្វើការជាមួយពណ៌ - វាងាយស្រួលជាងអ្វីដែលអ្នកគិត!

Seeen UI រើសពណ៌សង្កត់សំឡេងវីនដូរបស់អ្នកដោយស្វ័យប្រវត្តិហើយធ្វើឱ្យវា
 មាននៅក្នុងស្រមោលផ្សេងៗតាមរយៈអថេរពណ៌សាមញ្ញ។

### ពណ៌សង្កត់សំឡេងសំខាន់របស់អ្នក

អថេរទាំងនេះប្រើពណ៌ដែលអ្នកបានកំណត់នៅក្នុងការកំណត់វីនដូ:

* `--config-accent-color`: ពណ៌សុទ្ធ (ដូចជា #ffbbbaa)
* `--config-accent-color-rgb`: មានពណ៌ដូចគ្នាក្នុងទំរង់ RGB (255, 187, 170)

### គ្រួសារពណ៌ពេញលេញ

Seeen UI បង្កើតក្ដារលាយទាំងមូលពីពណ៌សង្កត់សំឡេងរបស់អ្នក:

![Visual guide to Seelen UI's color palette](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/colors.png)

នេះជាបញ្ជីពណ៌ដែលមានពេញលេញ:

* កំណែខ្មៅបំផុត: `--config-accent-darkest-color`
* កំណែងងឹត: `--config-accent-darker-color`
* កំណែងងឹត: `--config-accent-dark-color`
* កំណែធម្មតា: `--config-accent-color`
* ជំនាន់ពន្លឺ: `--config-accent-light-color`
* កំណែស្រាលជាងមុន: `--config-accent-lighter-color`
* កំណែស្រាលបំផុត: `--config-accent-lightest-color`

ពណ៌នីមួយៗក៏មានកំណែ RGB ដែរ (ជាមួយ -rgb នៅចុងបញ្ចប់) ។ នេះមានប្រយោជន៍សម្រាប់
 ការបង្កើតជម្រាលនិងផលប៉ះពាល់ពណ៌ផ្សេងទៀត។

ជាឧទាហរណ៍ការកំណត់ផ្ទៃខាងក្រោយដែលមានភាពស្រអាប់:

```css
background-color: rbga(var(--config-accent-darkest-color-rgb), 0.5);
```

### ជម្រើសពណ៌កាន់តែច្រើន

ចង់បានជម្រើសពណ៌ច្រើនទេ? Seeen Ui លាតត្រដាងពណ៌បន្ថែមរាប់សិបពណ៌បន្ថែមទៀត។
 ពិនិត្យមើលនេះ
[ឯកសារយោងពណ៌ងាយស្រួល](https://gist.github.com/eythaann/cd9a3cda0206ce23a17f5ea00ec2ba06)
សម្រាប់ជម្រើសដែលមានទាំងអស់។

គន្លឹះគាំទ្រ: នៅពេលដែលការផ្លាស់ប្តូរពណ៌របស់វីនដូរបស់អ្នកផ្លាស់ប្តូរការធ្វើបច្ចុប្បន្នភាពស្បែករបស់អ្នក
 ដោយស្វ័យប្រវត្តិ!
