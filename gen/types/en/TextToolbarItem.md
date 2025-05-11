# **TextToolbarItem**

## **Properties**:

### id: `string`

Id to identify the item, should be unique.

### template: `string`

Content to display in the item.

Should follow the
[mathjs expression syntax](https://mathjs.org/docs/expressions/syntax.html).

## Base Item Scope

Have all icons defined on
[React Icons](https://react-icons.github.io/react-icons) as properties of the
object.

```js
const icon: object;
```

Haves all environment variables defined on the system as properties of the
object.

```js
const env: object;
```

Functions to add images to the item.

```js
function getIcon(name: string, size: number = 16): string
function imgFromUrl (url: string, size: number = 16): string
function imgFromPath (path: string, size: number = 16): string
function imgFromExe (exe_path: string, size: number = 16): string
function t(path: string): string
```

### tooltip: `string` | `null`

Content to display in tooltip of the item.

Should follow the
[mathjs expression syntax](https://mathjs.org/docs/expressions/syntax.html).

## Base Item Scope

Have all icons defined on
[React Icons](https://react-icons.github.io/react-icons) as properties of the
object.

```js
const icon: object;
```

Haves all environment variables defined on the system as properties of the
object.

```js
const env: object;
```

Functions to add images to the item.

```js
function getIcon(name: string, size: number = 16): string
function imgFromUrl (url: string, size: number = 16): string
function imgFromPath (path: string, size: number = 16): string
function imgFromExe (exe_path: string, size: number = 16): string
function t(path: string): string
```

### badge: `string` | `null`

Badge will be displayed over the item, useful as notifications.

Should follow the
[mathjs expression syntax](https://mathjs.org/docs/expressions/syntax.html).

## Base Item Scope

Have all icons defined on
[React Icons](https://react-icons.github.io/react-icons) as properties of the
object.

```js
const icon: object;
```

Haves all environment variables defined on the system as properties of the
object.

```js
const env: object;
```

Functions to add images to the item.

```js
function getIcon(name: string, size: number = 16): string
function imgFromUrl (url: string, size: number = 16): string
function imgFromPath (path: string, size: number = 16): string
function imgFromExe (exe_path: string, size: number = 16): string
function t(path: string): string
```

### onClick: `string` | `null`

Deprecated use `onClickV2` instead.

### onClickV2: `string` | `null`

This code will be parsed and executed when the item is clicked.

Should follow the
[mathjs expression syntax](https://mathjs.org/docs/expressions/syntax.html).

## Base Item Scope

Have all icons defined on
[React Icons](https://react-icons.github.io/react-icons) as properties of the
object.

```js
const icon: object;
```

Haves all environment variables defined on the system as properties of the
object.

```js
const env: object;
```

Functions to add images to the item.

```js
function getIcon(name: string, size: number = 16): string
function imgFromUrl (url: string, size: number = 16): string
function imgFromPath (path: string, size: number = 16): string
function imgFromExe (exe_path: string, size: number = 16): string
function t(path: string): string
```

### style: { [key: `string`]?: [`StyleValue`](./StyleValue) | `null` }

Styles to be added to the item. This follow the same interface of React's
`style` prop.

### remoteData: { [key: `string`]?: [`RemoteDataDeclaration`](./RemoteDataDeclaration) }

Remote data to be added to the item scope.
