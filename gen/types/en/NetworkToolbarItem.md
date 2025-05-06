# **NetworkToolbarItem**

## **Properties**:

### id: `string`

Id to identify the item, should be unique.

### template: `string`

Content to display in the item.

Should follow the
[mathjs expression syntax](https://mathjs.org/docs/expressions/syntax.html).

## Network Item Scope

```ts
interface NetworkInterface {
  name: string;
  description: string;
  status: "up" | "down";
  dnsSuffix: string;
  type: string;
  gateway: string | null;
  mac: string;
  ipv4: string | null;
  ipv6: string | null;
}
const online: boolean;
const interfaces: NetworkInterface[];
const usingInterface: NetworkInterface | null;
```

### tooltip: `string` | `null`

Content to display in tooltip of the item.

Should follow the
[mathjs expression syntax](https://mathjs.org/docs/expressions/syntax.html).

## Network Item Scope

```ts
interface NetworkInterface {
  name: string;
  description: string;
  status: "up" | "down";
  dnsSuffix: string;
  type: string;
  gateway: string | null;
  mac: string;
  ipv4: string | null;
  ipv6: string | null;
}
const online: boolean;
const interfaces: NetworkInterface[];
const usingInterface: NetworkInterface | null;
```

### badge: `string` | `null`

Badge will be displayed over the item, useful as notifications.

Should follow the
[mathjs expression syntax](https://mathjs.org/docs/expressions/syntax.html).

## Network Item Scope

```ts
interface NetworkInterface {
  name: string;
  description: string;
  status: "up" | "down";
  dnsSuffix: string;
  type: string;
  gateway: string | null;
  mac: string;
  ipv4: string | null;
  ipv6: string | null;
}
const online: boolean;
const interfaces: NetworkInterface[];
const usingInterface: NetworkInterface | null;
```

### onClick: `string` | `null`

Deprecated use `onClickV2` instead.

### onClickV2: `string` | `null`

This code will be parsed and executed when the item is clicked.

Should follow the
[mathjs expression syntax](https://mathjs.org/docs/expressions/syntax.html).

## Network Item Scope

```ts
interface NetworkInterface {
  name: string;
  description: string;
  status: "up" | "down";
  dnsSuffix: string;
  type: string;
  gateway: string | null;
  mac: string;
  ipv4: string | null;
  ipv6: string | null;
}
const online: boolean;
const interfaces: NetworkInterface[];
const usingInterface: NetworkInterface | null;
```

### style: { [key: `string`]?: [`StyleValue`](./StyleValue) | `null` }

Styles to be added to the item. This follow the same interface of React's
`style` prop.

### remoteData: { [key: `string`]?: [`RemoteDataDeclaration`](./RemoteDataDeclaration) }

Remote data to be added to the item scope.

### withWlanSelector: `boolean`

Show Wi-fi selector popup on click]
