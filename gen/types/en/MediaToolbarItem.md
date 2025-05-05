# **MediaToolbarItem**
## **Properties**:
### id: `string`
Id to identify the item, should be unique.
### template: `string`
Content to display in the item.

Should follow the [mathjs expression syntax](https://mathjs.org/docs/expressions/syntax.html).

## Media Item Scope
```ts
const volume: number; // output master volume from 0 to 1
const isMuted: boolean; // output master volume is muted
const inputVolume: number; // input master volume from 0 to 1
const inputIsMuted: boolean; // input master volume is muted

interface MediaSession {
    id: string;
    title: string;
    author: string;
    thumbnail: string | null; // path to temporal media session image
    playing: boolean;
    default: boolean;
    owner: {
        name: string;
        iconPath: string | null;
    } | null;
}

const mediaSession: MediaSession | null;
```
### tooltip: `string` | `null`
Content to display in tooltip of the item.

Should follow the [mathjs expression syntax](https://mathjs.org/docs/expressions/syntax.html).

## Media Item Scope
```ts
const volume: number; // output master volume from 0 to 1
const isMuted: boolean; // output master volume is muted
const inputVolume: number; // input master volume from 0 to 1
const inputIsMuted: boolean; // input master volume is muted

interface MediaSession {
    id: string;
    title: string;
    author: string;
    thumbnail: string | null; // path to temporal media session image
    playing: boolean;
    default: boolean;
    owner: {
        name: string;
        iconPath: string | null;
    } | null;
}

const mediaSession: MediaSession | null;
```
### badge: `string` | `null`
Badge will be displayed over the item, useful as notifications.

Should follow the [mathjs expression syntax](https://mathjs.org/docs/expressions/syntax.html).

## Media Item Scope
```ts
const volume: number; // output master volume from 0 to 1
const isMuted: boolean; // output master volume is muted
const inputVolume: number; // input master volume from 0 to 1
const inputIsMuted: boolean; // input master volume is muted

interface MediaSession {
    id: string;
    title: string;
    author: string;
    thumbnail: string | null; // path to temporal media session image
    playing: boolean;
    default: boolean;
    owner: {
        name: string;
        iconPath: string | null;
    } | null;
}

const mediaSession: MediaSession | null;
```
### onClick: `string` | `null`
Deprecated use `onClickV2` instead.
### onClickV2: `string` | `null`
This code will be parsed and executed when the item is clicked.

Should follow the [mathjs expression syntax](https://mathjs.org/docs/expressions/syntax.html).

## Media Item Scope
```ts
const volume: number; // output master volume from 0 to 1
const isMuted: boolean; // output master volume is muted
const inputVolume: number; // input master volume from 0 to 1
const inputIsMuted: boolean; // input master volume is muted

interface MediaSession {
    id: string;
    title: string;
    author: string;
    thumbnail: string | null; // path to temporal media session image
    playing: boolean;
    default: boolean;
    owner: {
        name: string;
        iconPath: string | null;
    } | null;
}

const mediaSession: MediaSession | null;
```
### style: { [key: `string`]?: [`StyleValue`](./StyleValue) | `null` }
Styles to be added to the item. This follow the same interface of React's `style` prop.
### remoteData: { [key: `string`]?: [`RemoteDataDeclaration`](./RemoteDataDeclaration) }
Remote data to be added to the item scope.
### withMediaControls: `boolean`
Show media controls popup on click