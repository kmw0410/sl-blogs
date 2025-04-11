# Seelen UI: Theme Basics Tutorial - Customize Your Desktop Like a Pro!

![A beautifully customized desktop using Seelen UI themes](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/theme-tutorial/image.png)

Want to give your Windows desktop a fresh new look? Seelen UI makes it easy with
its powerful theme system. This guide will walk you through the basics of how
themes work - no coding experience required!

## Special Debug Version for Theme Creators

Before we begin, theme creators should know about our special **debug version**
of Seelen UI! This version lets you:

- Inspect elements just like a web page (Ctrl+Shift+I opens Developer Tools)
- See live HTML/CSS changes
- Test theme modifications instantly
- Debug styling issues easily

Download the debug version from our
[Nightly Releases channel](https://seelen.io/apps/seelen-ui/releases/nightly)
(look for files ending with `-debug.exe`, like
`Seelen.UI_2.2.8+20250410073056_x64-setup-debug.exe`).

### Want to learn more about nightly builds?

Check out our
[Nightly Builds Explained](https://seelen.io/blog/seelen-ui-nightly) article!

## Understanding Theme Files

Think of Seelen UI themes like layers of paint. You can apply multiple themes at
once, and just like painting, the order matters! Themes can change everything
from colors to window styles.

There are three ways themes can be packaged:

1. **Single File Theme** (.yml file)
2. **Theme Folder** (contains multiple files)
3. **Compressed Theme** (.slu file - special Seelen UI format)

### Where to Put Your Themes

All themes go in this folder on your computer:

```text
C:\Users\{YOUR_USERNAME}\AppData\Roaming\com.seelen.seelen-ui\themes
```

### Theme Folder Structure

Here's what a theme folder looks like inside:

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

## Getting Inspired: Example Themes

Not sure where or how to start? Seelen UI comes with several built-in themes you
can use as inspiration! Check out the
[default themes collection](https://github.com/eythaann/Seelen-UI/tree/master/static/themes)
to see how they're made.

## Working With Colors - It's Easier Than You Think!

Seelen UI automatically picks up your Windows accent color and makes it
available in different shades through simple color variables.

### Your Main Accent Color

These variables use the color you set in Windows Settings:

- `--config-accent-color`: The pure color (like #ffbbaa)
- `--config-accent-color-rgb`: Same color in RGB format (255, 187, 170)

### The Complete Color Family

Seelen UI creates a whole palette from your accent color:

![Visual guide to Seelen UI's color palette](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/theme-tutorial/colors.png)

Here's the full list of available colors:

- Darkest version: `--config-accent-darkest-color`
- Darker version: `--config-accent-darker-color`
- Dark version: `--config-accent-dark-color`
- Regular version: `--config-accent-color`
- Light version: `--config-accent-light-color`
- Lighter version: `--config-accent-lighter-color`
- Lightest version: `--config-accent-lightest-color`

Each color also has an RGB version (with -rgb at the end). This is useful for
creating gradients and other color effects.

As example settings a background color with opacity:

```css
background-color: rbga(var(--config-accent-darkest-color-rgb), 0.5);
```

### Even More Color Options

Want more color choices? Seelen UI exposes dozens of additional system colors.
Check out this
[handy color reference](https://gist.github.com/eythaann/cd9a3cda0206ce23a17f5ea00ec2ba06)
for all available options.

Pro Tip: When your Windows accent color changes, your Seelen UI theme updates
automatically!
