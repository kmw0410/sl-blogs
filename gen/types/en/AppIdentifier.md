# **AppIdentifier**

## **Kind: TypeAlias**

## **Properties**:

### id: `string`

Depending of the kind this can be case sensitive or not.

- `class` and `title` are case sensitive
- `exe` and `path` are case insensitive

### kind: [`AppIdentifierType`](./AppIdentifierType)

the way to match the application

### matchingStrategy: [`MatchingStrategy`](./MatchingStrategy)

the strategy to use to determine if id matches with the application

### negation: `boolean`

### and: `Array`<[`AppIdentifier`](./AppIdentifier)>

### or: `Array`<[`AppIdentifier`](./AppIdentifier)>
