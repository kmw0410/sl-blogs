# **DeviceToolbarItem**

## **Properties**:

### id: `string`

Id to identify the item, should be unique.

### template: `string`

Content to display in the item.

Should follow the
[mathjs expression syntax](https://mathjs.org/docs/expressions/syntax.html).

## Device Item Scope

this module does no expand the scope of the item

### tooltip: `string` | `null`

Content to display in tooltip of the item.

Should follow the
[mathjs expression syntax](https://mathjs.org/docs/expressions/syntax.html).

## Device Item Scope

this module does no expand the scope of the item

### badge: `string` | `null`

Badge will be displayed over the item, useful as notifications.

Should follow the
[mathjs expression syntax](https://mathjs.org/docs/expressions/syntax.html).

## Device Item Scope

this module does no expand the scope of the item

### onClick: `string` | `null`

Deprecated use `onClickV2` instead.

### onClickV2: `string` | `null`

This code will be parsed and executed when the item is clicked.

Should follow the
[mathjs expression syntax](https://mathjs.org/docs/expressions/syntax.html).

## Device Item Scope

this module does no expand the scope of the item

### style: { [key: `string`]?: [`StyleValue`](./StyleValue) | `null` }

Styles to be added to the item. This follow the same interface of React's
`style` prop.

### remoteData: { [key: `string`]?: [`RemoteDataDeclaration`](./RemoteDataDeclaration) }

Remote data to be added to the item scope.
