# **Resource**

## **Kind: TypeAlias**

## **Properties**:

### id: `string`

### creatorId: `string`

### friendlyId: [`ResourceId`](./ResourceId)

visual id composed of creator username and resource name

### metadata: [`ResourceMetadata`](./ResourceMetadata)

### createdAt: `string`

### updatedAt: `string`

### status: [`ResourceStatus`](./ResourceStatus)

### rejectedReason: `string` | `null`

### reviewedAt: `string` | `null`

### reviewedBy: `string` | `null`

### deletedAt: `string` | `null`

should be filled if `status == ResourceStatus::Deleted`

### version: `number`

### kind: [`ResourceKind`](./ResourceKind)

### dataId: `string`

id of the document containing the resource

### stars: `number`

### downloads: `number`
