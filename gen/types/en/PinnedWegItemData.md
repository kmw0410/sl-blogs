# **PinnedWegItemData**

## **Properties**:

### id: `string`

internal UUID to differentiate items

### subtype: [`WegItemSubtype`](./WegItemSubtype)

Subtype of the item (mandatory, but is optional for backward compatibility)

### umid: `string` | `null`

Application user model id.

### path: `string`

path to file, forder or program.

### relaunchProgram: `string`

program to be executed

### relaunchArgs: [`RelaunchArguments`](./RelaunchArguments) | `null`

arguments to be passed to the relaunch program

### relaunchIn: `string` | `null`

path where ejecute the relaunch command

### displayName: `string`

display name of the item

### windows: `Array`<[`WegAppGroupItem`](./WegAppGroupItem)>

Window handles in the app group, in case of pinned file/dir always will be empty

### pinDisabled: `boolean`

This intention is to prevent pinned state change, when this is neccesary
