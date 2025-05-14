# **IconPack**

## **Kind: TypeAlias**

## **Properties**:

### id: [`IconPackId`](./IconPackId)

### metadata: [`ResourceMetadata`](./ResourceMetadata)

### missing: [`Icon`](./Icon) | `null`

Special icon used when some other icon is not found

### apps: { [key: `string`]?: [`Icon`](./Icon) }

Key can be user model id, filename or a full path. In case of path this should
be an executable or a lnk file, otherwise use `files`.

Value is the path to the icon relative to the icon pack folder.

### files: { [key: `string`]?: [`Icon`](./Icon) }

Intended to store file icons by extension

Key is the extension, value is the relative path to the icon

### specific: { [key: `string`]?: [`Icon`](./Icon) }

Here specific icons for widgets can be stored. we recomend following the widget
id + icon name to avoid collisions e.g. "@username/widgetid::iconname" but you
can use whatever you want
