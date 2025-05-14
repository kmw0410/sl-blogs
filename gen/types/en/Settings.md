# **Settings**

## **Kind: TypeAlias**

## **Properties**:

### monitorsV2: { [key: `string`]?: [`MonitorConfiguration`](./MonitorConfiguration) }

list of monitors and their configurations

### ahkEnabled: `boolean`

enable or disable ahk

### ahkVariables: [`AhkVarList`](./AhkVarList)

ahk variables

### selectedThemes: `Array`<`string`>

list of selected themes

### iconPacks: `Array`<`string`>

list of selected icon packs

### devTools: `boolean`

enable or disable dev tools tab in settings

### language: `string` | `null`

language to use, if null the system locale is used

### dateFormat: `string`

MomentJS date format

### virtualDesktopStrategy: [`VirtualDesktopStrategy`](./VirtualDesktopStrategy)

what virtual desktop implementation will be used, in case Native is not
available we use Seelen

### updater: [`UpdaterSettings`](./UpdaterSettings)

Updater Settings

### byWidget: [`SettingsByWidget`](./SettingsByWidget)

Custom settings for widgets

### byTheme: { [key: [`ThemeId`](./ThemeId)]?: { [key: `string`]?: `string` } }

Custom variables for themes by theme id

### example

```json
{
  "@username/themeName": {
    "--css-variable-name": "123px",
    "--css-variable-name2": "#aabbccaa"
  }
}
```
