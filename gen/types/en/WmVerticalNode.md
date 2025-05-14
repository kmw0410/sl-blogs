# **WmVerticalNode**

## **Kind: TypeAlias**

## **Properties**:

### subtype: [`NodeSubtype`](./NodeSubtype)

### priority: `number`

Order in how the tree will be traversed (1 = first, 2 = second, etc.)

### growFactor: `number`

How much of the remaining space this node will take

### condition: `string` | `null`

Math Condition for the node to be shown, e.g: n >= 3

### children: `Array`<[`WmNode`](./WmNode)>
