# **KeyboardToolbarItem**

## **Properties**:

### id: `string`

Id to identify the item, should be unique.

### template: `string`

Content to display in the item.

Should follow the
[mathjs expression syntax](https://mathjs.org/docs/expressions/syntax.html).

## Keyboard Item Scope

```ts
interface KeyboardLayout {
  id: string;
  handle: string;
  displayName: string;
  active: boolean;
}

interface SystemLanguage {
  id: string;
  code: string;
  name: string;
  nativeName: string;
  inputMethods: KeyboardLayout[];
}

const languages: Language[];
const activeLang: Language;
const activeKeyboard: KeyboardLayout;
const activeLangPrefix: string;
const activeKeyboardPrefix: string;
```

### tooltip: `string` | `null`

Content to display in tooltip of the item.

Should follow the
[mathjs expression syntax](https://mathjs.org/docs/expressions/syntax.html).

## Keyboard Item Scope

```ts
interface KeyboardLayout {
  id: string;
  handle: string;
  displayName: string;
  active: boolean;
}

interface SystemLanguage {
  id: string;
  code: string;
  name: string;
  nativeName: string;
  inputMethods: KeyboardLayout[];
}

const languages: Language[];
const activeLang: Language;
const activeKeyboard: KeyboardLayout;
const activeLangPrefix: string;
const activeKeyboardPrefix: string;
```

### badge: `string` | `null`

Badge will be displayed over the item, useful as notifications.

Should follow the
[mathjs expression syntax](https://mathjs.org/docs/expressions/syntax.html).

## Keyboard Item Scope

```ts
interface KeyboardLayout {
  id: string;
  handle: string;
  displayName: string;
  active: boolean;
}

interface SystemLanguage {
  id: string;
  code: string;
  name: string;
  nativeName: string;
  inputMethods: KeyboardLayout[];
}

const languages: Language[];
const activeLang: Language;
const activeKeyboard: KeyboardLayout;
const activeLangPrefix: string;
const activeKeyboardPrefix: string;
```

### onClick: `string` | `null`

Deprecated use `onClickV2` instead.

### onClickV2: `string` | `null`

This code will be parsed and executed when the item is clicked.

Should follow the
[mathjs expression syntax](https://mathjs.org/docs/expressions/syntax.html).

## Keyboard Item Scope

```ts
interface KeyboardLayout {
  id: string;
  handle: string;
  displayName: string;
  active: boolean;
}

interface SystemLanguage {
  id: string;
  code: string;
  name: string;
  nativeName: string;
  inputMethods: KeyboardLayout[];
}

const languages: Language[];
const activeLang: Language;
const activeKeyboard: KeyboardLayout;
const activeLangPrefix: string;
const activeKeyboardPrefix: string;
```

### style: { [key: `string`]?: [`StyleValue`](./StyleValue) | `null` }

Styles to be added to the item. This follow the same interface of React's
`style` prop.

### remoteData: { [key: `string`]?: [`RemoteDataDeclaration`](./RemoteDataDeclaration) }

Remote data to be added to the item scope.
