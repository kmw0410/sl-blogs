# **PowerToolbarItem**

## **Kind: TypeAlias**

## **Properties**:

### id: `string`

Id to identify the item, should be unique.

### template: `string`

Content to display in the item.

Should follow the
[mathjs expression syntax](https://mathjs.org/docs/expressions/syntax.html).

## Power Item Scope

```ts
interface PowerStatus {
  acLineStatus: number;
  batteryFlag: number;
  batteryLifePercent: number;
  systemStatusFlag: number;
  batteryLifeTime: number;
  batteryFullLifeTime: number;
}

enum PowerPlan {
  Balanced = "Balanced",
  BatterySaver = "BatterySaver",
  BetterBattery = "BetterBattery",
  GameMode = "GameMode",
  HighPerformance = "HighPerformance",
  MaxPerformance = "MaxPerformance",
  MixedReality = "MixedReality",
}

interface Battery {
  // Static info
  vendor: string | null;
  model: string | null;
  serialNumber: string | null;
  technology: string;

  // Common information
  state: string;
  capacity: number;
  temperature: number | null;
  percentage: number;
  cycleCount: number | null;
  smartCharging: boolean;

  // Energy stats
  energy: number;
  energyFull: number;
  energyFullDesign: number;
  energyRate: number;
  voltage: number;

  // Charge stats
  timeToFull: number | null;
  timeToEmpty: number | null;
}

const power: PowerStatus;
const powerPlan: PowerPlan;
const batteries: Battery[];
const battery: Battery | null;
```

### tooltip: `string` | `null`

Content to display in tooltip of the item.

Should follow the
[mathjs expression syntax](https://mathjs.org/docs/expressions/syntax.html).

## Power Item Scope

```ts
interface PowerStatus {
  acLineStatus: number;
  batteryFlag: number;
  batteryLifePercent: number;
  systemStatusFlag: number;
  batteryLifeTime: number;
  batteryFullLifeTime: number;
}

enum PowerPlan {
  Balanced = "Balanced",
  BatterySaver = "BatterySaver",
  BetterBattery = "BetterBattery",
  GameMode = "GameMode",
  HighPerformance = "HighPerformance",
  MaxPerformance = "MaxPerformance",
  MixedReality = "MixedReality",
}

interface Battery {
  // Static info
  vendor: string | null;
  model: string | null;
  serialNumber: string | null;
  technology: string;

  // Common information
  state: string;
  capacity: number;
  temperature: number | null;
  percentage: number;
  cycleCount: number | null;
  smartCharging: boolean;

  // Energy stats
  energy: number;
  energyFull: number;
  energyFullDesign: number;
  energyRate: number;
  voltage: number;

  // Charge stats
  timeToFull: number | null;
  timeToEmpty: number | null;
}

const power: PowerStatus;
const powerPlan: PowerPlan;
const batteries: Battery[];
const battery: Battery | null;
```

### badge: `string` | `null`

Badge will be displayed over the item, useful as notifications.

Should follow the
[mathjs expression syntax](https://mathjs.org/docs/expressions/syntax.html).

## Power Item Scope

```ts
interface PowerStatus {
  acLineStatus: number;
  batteryFlag: number;
  batteryLifePercent: number;
  systemStatusFlag: number;
  batteryLifeTime: number;
  batteryFullLifeTime: number;
}

enum PowerPlan {
  Balanced = "Balanced",
  BatterySaver = "BatterySaver",
  BetterBattery = "BetterBattery",
  GameMode = "GameMode",
  HighPerformance = "HighPerformance",
  MaxPerformance = "MaxPerformance",
  MixedReality = "MixedReality",
}

interface Battery {
  // Static info
  vendor: string | null;
  model: string | null;
  serialNumber: string | null;
  technology: string;

  // Common information
  state: string;
  capacity: number;
  temperature: number | null;
  percentage: number;
  cycleCount: number | null;
  smartCharging: boolean;

  // Energy stats
  energy: number;
  energyFull: number;
  energyFullDesign: number;
  energyRate: number;
  voltage: number;

  // Charge stats
  timeToFull: number | null;
  timeToEmpty: number | null;
}

const power: PowerStatus;
const powerPlan: PowerPlan;
const batteries: Battery[];
const battery: Battery | null;
```

### onClick: `string` | `null`

Deprecated use `onClickV2` instead.

### onClickV2: `string` | `null`

This code will be parsed and executed when the item is clicked.

Should follow the
[mathjs expression syntax](https://mathjs.org/docs/expressions/syntax.html).

## Power Item Scope

```ts
interface PowerStatus {
  acLineStatus: number;
  batteryFlag: number;
  batteryLifePercent: number;
  systemStatusFlag: number;
  batteryLifeTime: number;
  batteryFullLifeTime: number;
}

enum PowerPlan {
  Balanced = "Balanced",
  BatterySaver = "BatterySaver",
  BetterBattery = "BetterBattery",
  GameMode = "GameMode",
  HighPerformance = "HighPerformance",
  MaxPerformance = "MaxPerformance",
  MixedReality = "MixedReality",
}

interface Battery {
  // Static info
  vendor: string | null;
  model: string | null;
  serialNumber: string | null;
  technology: string;

  // Common information
  state: string;
  capacity: number;
  temperature: number | null;
  percentage: number;
  cycleCount: number | null;
  smartCharging: boolean;

  // Energy stats
  energy: number;
  energyFull: number;
  energyFullDesign: number;
  energyRate: number;
  voltage: number;

  // Charge stats
  timeToFull: number | null;
  timeToEmpty: number | null;
}

const power: PowerStatus;
const powerPlan: PowerPlan;
const batteries: Battery[];
const battery: Battery | null;
```

### style: { [key: `string`]?: [`StyleValue`](./StyleValue) | `null` }

Styles to be added to the item. This follow the same interface of React's
`style` prop.

### remoteData: { [key: `string`]?: [`RemoteDataDeclaration`](./RemoteDataDeclaration) }

Remote data to be added to the item scope.
