# ਅਧਾਰਿਤ UI: ਥੀਮ ਬੇਸਿਕ ਟਿ utorial ਟੋਰਿਅਲ - ਆਪਣੇ ਡੈਸਕਟੌਪ ਨੂੰ ਪ੍ਰੋ ਵਰਗੇ ਅਨੁਕੂਲ ਬਣਾਓ!

![A beautifully customized desktop using Seelen UI themes](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/image.png)

ਕੀਬੋਰਡ ਡੈਸਕਟਾਪ ਨੂੰ ਨਵੀਂ ਨਵੀਂ ਦਿੱਖ ਦੇਣਾ ਚਾਹੁੰਦੇ ਹੋ? ਵੇਖ ਕੇ ਇਸ ਨੂੰ ਆਸਾਨ ਬਣਾਉਂਦਾ ਹੈ
 ਇਸ ਦਾ ਸ਼ਕਤੀਸ਼ਾਲੀ ਥੀਮ ਸਿਸਟਮ. ਇਹ ਗਾਈਡ ਤੁਹਾਨੂੰ ਕਿਸ ਦੇ ਮੁ ics ਲੀਆਂ ਗੱਲਾਂ ਦੁਆਰਾ ਤੁਹਾਨੂੰ ਤੁਰਦੀ ਰਹੇਗੀ
 ਥੀਮਜ਼ ਕੰਮ - ਕੋਈ ਕੋਡਿੰਗ ਤਜਰਬਾ ਲੋੜੀਂਦਾ ਨਹੀਂ!

## ਥੀਮ ਸਿਰਜਣਹਾਰਾਂ ਲਈ ਵਿਸ਼ੇਸ਼ ਡੀਬੱਗ ਵਰਜ਼ਨ

ਸ਼ੁਰੂ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਥੀਮ ਸਿਰਜਣਹਾਰਾਂ ਨੂੰ ਸਾਡੇ ਵਿਸ਼ੇਸ਼ ਬਾਰੇ ਪਤਾ ਹੋਣਾ ਚਾਹੀਦਾ ਹੈ **ਡੀਬੱਗ ਵਰਜ਼ਨ**
ਧੁੱਪ ਦੀ ਯੂ.ਆਈ. ਇਹ ਸੰਸਕਰਣ ਤੁਹਾਨੂੰ ਆਗਿਆ ਦਿੰਦਾ ਹੈ:

* ਐਲੀਮੈਂਟਸ ਇਕ ਵੈੱਬ ਪੇਜ ਦੀ ਤਰ੍ਹਾਂ ਨਿਰੀਖਣ ਕਰੋ (Ctrl + SHIFT + I ...................
* ਲਾਈਵ HTML / CSS ਤਬਦੀਲੀਆਂ ਵੇਖੋ
* ਥੀਮ ਸੋਧਾਂ ਨੂੰ ਤੁਰੰਤ ਟੈਸਟ ਕਰੋ
* ਆਸਾਨੀ ਨਾਲ ਡੀਬੱਗ ਐਰੇਂਸਿੰਗ ਮੁੱਦੇ

ਸਾਡੇ ਤੋਂ ਡੀਬੱਗ ਵਰਜ਼ਨ ਡਾਉਨਲੋਡ ਕਰੋ
[ਰਾਤ ਨੂੰ ਛੱਡਣਾ ਚੈਨਲ](https://seelen.io/apps/seelen-ui/releases/nightly)
(ਨਾਲ ਖਤਮ ਹੋਣ ਵਾਲੀਆਂ ਫਾਈਲਾਂ ਦੀ ਭਾਲ ਕਰੋ `-debug.exe`, ਵਰਗੇ
`Seelen.UI_2.2.8+20250410073056_x64-setup-debug.exe`).

### ਰਾਤ ਦੀ ਬੰਸਰੀ ਬਾਰੇ ਹੋਰ ਜਾਣਨਾ ਚਾਹੁੰਦੇ ਹੋ?

ਸਾਡੇ ਚੈੱਕ ਕਰੋ
[ਰਾਤ ਦੀ ਵਿਆਖਿਆ ਕੀਤੀ](https://seelen.io/blog/seelen-ui-nightly) ਲੇਖ!

## ਥੀਮ ਫਾਈਲਾਂ ਨੂੰ ਸਮਝਣਾ

ਪੇਂਟ ਦੀਆਂ ਪਰਤਾਂ ਵਰਗੀ ਲੱਗਦੇ ਅਈ ਥੀਮਜ਼ ਬਾਰੇ ਸੋਚੋ. ਤੁਸੀਂ ਮਲਟੀਪਲ ਵਿਸ਼ਿਆਂ ਨੂੰ ਲਾਗੂ ਕਰ ਸਕਦੇ ਹੋ
 ਇਕ ਵਾਰ, ਅਤੇ ਸਿਰਫ ਪੇਂਟਿੰਗ ਦੀ ਤਰ੍ਹਾਂ, ਆਰਡਰ ਦੇ ਮਾਮਲੇ! ਥੀਮ ਸਭ ਕੁਝ ਬਦਲ ਸਕਦੇ ਹਨ
 ਰੰਗਾਂ ਤੋਂ ਵਿੰਡੋ ਸਟਾਈਲ ਤੱਕ.

ਥੀਮਾਂ ਨੂੰ ਤਿੰਨ ਤਰੀਕੇ ਦਿੱਤੇ ਜਾ ਸਕਦੇ ਹਨ:

1. **ਸਿੰਗਲ ਫਾਈਲ ਥੀਮ** (.mml ਫਾਈਲ)
2. **ਥੀਮ ਫੋਲਡਰ** (ਕਈ ਫਾਇਲਾਂ ਸ਼ਾਮਲ ਹਨ)
3. **ਸੰਕੁਚਿਤ ਥੀਮ** (.slu ਫਾਈਲ - ਵਿਸ਼ੇਸ਼ ਅਯੂਲੀ ਫਾਰਮੈਟ)

### ਤੁਹਾਡੇ ਥੀਮ ਕਿੱਥੇ ਰੱਖਣ ਲਈ

ਸਾਰੇ ਥੀਮ ਤੁਹਾਡੇ ਕੰਪਿ computer ਟਰ ਤੇ ਇਸ ਫੋਲਡਰ ਵਿੱਚ ਜਾਂਦੇ ਹਨ:

```text
C:\Users\{YOUR_USERNAME}\AppData\Roaming\com.seelen.seelen-ui\themes
```

### ਥੀਮ ਫੋਲਡਰ ਦਾ ਬਣਤਰ

ਇਹ ਉਹ ਹੈ ਜੋ ਇੱਕ ਥੀਮ ਫੋਲਡਰ ਅੰਦਰ ਵਰਗਾ ਦਿਸਦਾ ਹੈ:

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

## ਪ੍ਰੇਰਿਤ ਹੋਣਾ: ਉਦਾਹਰਣ ਥੀਮ

ਨਿਸ਼ਚਤ ਨਹੀਂ ਕਿ ਕਿੱਥੇ ਜਾਂ ਕਿਵੇਂ ਸ਼ੁਰੂ ਕਰਨਾ ਹੈ? ਵੇਖਿਆ UI ਤੁਹਾਨੂੰ ਕਈ ਬਿਲਟ-ਇਨ ਥੀਮਜ਼ ਨਾਲ ਆਉਂਦਾ ਹੈ
 ਪ੍ਰੇਰਣਾ ਵਜੋਂ ਵਰਤ ਸਕਦੇ ਹੋ! ਚੈੱਕ ਕਰੋ
[ਡਿਫੌਲਟ ਥੀਮ ਸੰਗ੍ਰਹਿ](https://github.com/eythaann/Seelen-UI/tree/master/static/themes)
ਇਹ ਵੇਖਣ ਲਈ ਕਿ ਉਹ ਕਿਵੇਂ ਬਣੇ ਹੋਏ ਹਨ.

## ਰੰਗਾਂ ਨਾਲ ਕੰਮ ਕਰਨਾ - ਇਹ ਤੁਹਾਡੇ ਸੋਚਣ ਨਾਲੋਂ ਸੌਖਾ ਹੈ!

ਵੇਖਿਆ ਹੋਇਆ UI ਆਪਣੇ ਆਪ ਤੁਹਾਡਾ ਵਿੰਡੋਜ਼ ਲਹਿਜ਼ਾ ਦਾ ਰੰਗ ਚੁੱਕਦਾ ਹੈ ਅਤੇ ਬਣਾਉਂਦਾ ਹੈ
 ਸਧਾਰਣ ਰੰਗ ਵੇਰੀਏਬਲ ਦੁਆਰਾ ਵੱਖ ਵੱਖ ਸ਼ੇਡ ਵਿੱਚ ਉਪਲਬਧ.

### ਤੁਹਾਡਾ ਮੁੱਖ ਲਹਿਜ਼ਾ ਰੰਗ

ਇਹ ਪਰਿਵਰਤਨ ਜੋ ਤੁਸੀਂ ਵਿੰਡੋਜ਼ ਸੈਟਿੰਗਾਂ ਵਿੱਚ ਨਿਰਧਾਰਤ ਕੀਤੇ ਰੰਗ ਦੀ ਵਰਤੋਂ ਕਰਦੇ ਹੋ:

* `--config-accent-color`: ਸ਼ੁੱਧ ਰੰਗ (ਜਿਵੇਂ # ਡੀ.ਐਫ.ਬੀ.ਬੀ.ਏ.)
* `--config-accent-color-rgb`: ਆਰਜੀਬੀ ਫਾਰਮੈਟ ਵਿੱਚ ਉਹੀ ਰੰਗ (255, 187, 170)

### ਸੰਪੂਰਨ ਰੰਗ ਪਰਿਵਾਰ

ਵੇਖਿਆ ਕਿ ਤੁਹਾਡੇ ਲਹਿਜ਼ੇ ਦੇ ਰੰਗ ਤੋਂ ਤੁਸੀਂ ਇੱਕ ਪੂਰਾ ਪੈਲੇਟ ਤਿਆਰ ਕਰਦੇ ਹੋ:

![Visual guide to Seelen UI's color palette](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/colors.png)

ਇੱਥੇ ਉਪਲਬਧ ਰੰਗਾਂ ਦੀ ਪੂਰੀ ਸੂਚੀ ਹੈ:

* ਹਨੇਰਾ ਵਰਜਨ: `--config-accent-darkest-color`
* ਗਠੀਏ ਦਾ ਸੰਸਕਰਣ: `--config-accent-darker-color`
* ਡਾਰਕ ਵਰਜ਼ਨ: `--config-accent-dark-color`
* ਨਿਯਮਤ ਸੰਸਕਰਣ: `--config-accent-color`
* ਲਾਈਟ ਵਰਜ਼ਨ: `--config-accent-light-color`
* ਹਲਕੇ ਵਰਜ਼ਨ: `--config-accent-lighter-color`
* ਹਲਕਾ ਵਰਜ਼ਨ: `--config-accent-lightest-color`

ਹਰੇਕ ਰੰਗ ਵਿੱਚ ਇੱਕ ਆਰਜੀਬੀ ਸੰਸਕਰਣ ਹੁੰਦਾ ਹੈ (ਅੰਤ ਵਿੱਚ -rgb ਦੇ ਨਾਲ). ਇਹ ਲਈ ਲਾਭਦਾਇਕ ਹੈ
 ਗਰੇਡੀਐਂਟ ਅਤੇ ਹੋਰ ਰੰਗ ਪ੍ਰਭਾਵ ਬਣਾਉਣਾ.

ਜਿਵੇਂ ਕਿ ਉਦਾਹਰਣ ਦੇ ਨਾਲ ਪਿਛੋਕੜ ਦੇ ਰੰਗ ਨੂੰ ਮਾਪਦਾ ਹੈ:

```css
background-color: rbga(var(--config-accent-darkest-color-rgb), 0.5);
```

### ਹੋਰ ਵੀ ਰੰਗ ਵਿਕਲਪ

ਹੋਰ ਰੰਗ ਦੀਆਂ ਚੋਣਾਂ ਚਾਹੁੰਦੇ ਹੋ? ਵੇਖਿਆ ਹੋਇਆ UI ਦਰਜਨਾਂ ਵਾਧੂ ਸਿਸਟਮ ਦੇ ਰੰਗ ਦਾ ਪਰਦਾਫਾਸ਼ ਕਰਦਾ ਹੈ.
 ਇਸ ਨੂੰ ਵੇਖੋ
[ਸੌਖਾ ਰੰਗ ਹਵਾਲਾ](https://gist.github.com/eythaann/cd9a3cda0206ce23a17f5ea00ec2ba06)
ਸਾਰੀਆਂ ਉਪਲਬਧ ਚੋਣਾਂ ਲਈ.

ਪ੍ਰੋ ਟਿਪ: ਜਦੋਂ ਤੁਹਾਡੇ ਵਿੰਡੋਜ਼ ਲਹਿਜ਼ੇ ਦਾ ਰੰਗ ਬਦਲਦਾ ਹੈ, ਤਾਂ ਤੁਹਾਡੇ ਸਹਿਣਸ਼ੀਲ ਥੀਮ ਅਪਡੇਟਾਂ
 ਆਪਣੇ ਆਪ!
