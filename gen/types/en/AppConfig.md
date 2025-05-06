# **AppConfig**

## **Properties**:

### name: `string`

name of the app

### category: `string` | `null`

category to group the app under

### boundMonitor: `number` | `null`

monitor index that the app should be bound to

### boundWorkspace: `number` | `null`

workspace index that the app should be bound to

### identifier: [`AppIdentifier`](./AppIdentifier)

app identifier

### options: `Array`<[`AppExtraFlag`](./AppExtraFlag)>

extra specific options/settings for the app

### isBundled: `boolean`

is this config bundled with seelen ui.
