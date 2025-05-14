# **WsdItemSelect**

## **Kind: TypeAlias**

## **Properties**:

### key: `string`

Unique key for this item, used to identify it in the settings

### label: `string`

Label for this item could start with the prefix `t::` for translation

example: `t::obj.inner.translation_key`

### allowSetByMonitor: `boolean`

This setting could be set by monitor on the settings by monitor section.

### dependencies: `Array`<`string`>

Keys of items to be set in order to enable this item.

it uses js logic (!!value) to determine if the item is enabled

### default: `string` | `null`

### subtype: [`WsdItemSelectSubtype`](./WsdItemSelectSubtype)

### options: `Array`<[`WsdItemSelectOption`](./WsdItemSelectOption)>
