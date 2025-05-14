# **ResourceMetadata**

## **Kind: TypeAlias**

## **Properties**:

### displayName: [`ResourceText`](./ResourceText)

Map of language code to display name. Could be a string, mapped to `en`.

### description: [`ResourceText`](./ResourceText)

Map of language code to description. Could be a string, mapped to `en`.

### portrait: `string` | `null`

Portrait image with aspect ratio of 1/1

### banner: `string` | `null`

Banner image with aspect ratio of 21/9, this is used when promoting the
resource.

### screenshots: `Array`<`string`>

Screenshots should use aspect ratio of 16/9

### tags: `Array`<`string`>

tags are keywords to be used for searching and indexing

### appTargetVersion: [`number`, `number`, `number`] | `null`

App target version that this resource is compatible with.\
Developers are responsible to update the resource so when resource does not
match the current app version, the resource will be shown with a warning message

### filename: `string`

internal field used by the app on load of the resource

### bundled: `boolean`

internal field that indicates if the resource is bundled
