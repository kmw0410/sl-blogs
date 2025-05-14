# **Widget**

## **Kind: TypeAlias**

## **Properties**:

### id: [`WidgetId`](./WidgetId)

Resource id ex: `@seelen/weg`

### icon: `string` | `null`

Optional icon to be used on settings. This have to be a valid react icon name.\
You can find all icons here: https://react-icons.github.io/react-icons/.

### metadata: [`ResourceMetadata`](./ResourceMetadata)

Widget metadata, as texts, tags, images, etc.

### settings: [`WidgetSettingsDeclarationList`](./WidgetSettingsDeclarationList)

Widget settings declaration, this is esentially a struct to be used by an
builder to create the widget settings UI on the Settings window.

### js: `string` | `null`

Optional widget js code

### css: `string` | `null`

Optional widget css

### html: `string` | `null`

Optional widget html
