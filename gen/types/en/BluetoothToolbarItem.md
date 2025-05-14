# **BluetoothToolbarItem**

## **Kind: TypeAlias**

## **Properties**:

### id: `string`

Id to identify the item, should be unique.

### template: `string`

Content to display in the item.

Should follow the
[mathjs expression syntax](https://mathjs.org/docs/expressions/syntax.html).

## Bluetooth Item Scope

```ts
interface BluetoothDevice {
  id: string;
  name: string;
  address: bigint;
  majorClass: BluetoothMajor;
  minorMainClass: BluetoothMinor;
  minorSubClass: BluetoothMinor;
  connected: boolean;
  paired: boolean;
  canPair: boolean;
  isBluetoothLoweenergy: boolean;
  iconPath: string;
}

type BluetoothMajor =
  | "Miscellaneous"
  | "Computer"
  | "Phone"
  | "NetworkAccessPoint"
  | "AudioVideo"
  | "Peripheral"
  | "Imaging"
  | "Wearable"
  | "Toy"
  | "Health"
  | "Unkown";

type BluetoothMinor =
  | "Uncategorized"
  | "ComputerDesktop"
  | "ComputerServer"
  | "ComputerLaptop"
  | "ComputerHandheld"
  | "ComputerPalmSize"
  | "ComputerWearable"
  | "ComputerTablet"
  | "PhoneCellular"
  | "PhoneCordless"
  | "PhoneSmartPhone"
  | "PhoneWired"
  | "PhoneIsdn"
  | "NetworkFullyAvailable"
  | "NetworkUsed01To17Percent"
  | "NetworkUsed17To33Percent"
  | "NetworkUsed33To50Percent"
  | "NetworkUsed50To67Percent"
  | "NetworkUsed67To83Percent"
  | "NetworkUsed83To99Percent"
  | "NetworkNoServiceAvailable"
  | "AudioVideoWearableHeadset"
  | "AudioVideoHandsFree"
  | "AudioVideoMicrophone"
  | "AudioVideoLoudspeaker"
  | "AudioVideoHeadphones"
  | "AudioVideoPortableAudio"
  | "AudioVideoCarAudio"
  | "AudioVideoSetTopBox"
  | "AudioVideoHifiAudioDevice"
  | "AudioVideoVcr"
  | "AudioVideoVideoCamera"
  | "AudioVideoCamcorder"
  | "AudioVideoVideoMonitor"
  | "AudioVideoVideoDisplayAndLoudspeaker"
  | "AudioVideoVideoConferencing"
  | "AudioVideoGamingOrToy"
  | "PeripheralJoystick"
  | "PeripheralGamepad"
  | "PeripheralRemoteControl"
  | "PeripheralSensing"
  | "PeripheralDigitizerTablet"
  | "PeripheralCardReader"
  | "PeripheralDigitalPen"
  | "PeripheralHandheldScanner"
  | "PeripheralHandheldGesture"
  | "WearableWristwatch"
  | "WearablePager"
  | "WearableJacket"
  | "WearableHelmet"
  | "WearableGlasses"
  | "ToyRobot"
  | "ToyVehicle"
  | "ToyDoll"
  | "ToyController"
  | "ToyGame"
  | "HealthBloodPressureMonitor"
  | "HealthThermometer"
  | "HealthWeighingScale"
  | "HealthGlucoseMeter"
  | "HealthPulseOximeter"
  | "HealthHeartRateMonitor"
  | "HealthHealthDataDisplay"
  | "HealthStepCounter"
  | "HealthBodyCompositionAnalyzer"
  | "HealthPeakFlowMonitor"
  | "HealthMedicationMonitor"
  | "HealthKneeProsthesis"
  | "HealthAnkleProsthesis"
  | "HealthGenericHealthManager"
  | "HealthPersonalMobilityDevice"
  | "PeripheralOther"
  | "PeripheralPointer"
  | "PeripheralKeyboard"
  | "PeripheralKeyboardAndPointer";

const bluetoothState: boolean;
const devices: BluetoothDevice[];
const connectedDevices: BluetoothDevice[];
```

### tooltip: `string` | `null`

Content to display in tooltip of the item.

Should follow the
[mathjs expression syntax](https://mathjs.org/docs/expressions/syntax.html).

## Bluetooth Item Scope

```ts
interface BluetoothDevice {
  id: string;
  name: string;
  address: bigint;
  majorClass: BluetoothMajor;
  minorMainClass: BluetoothMinor;
  minorSubClass: BluetoothMinor;
  connected: boolean;
  paired: boolean;
  canPair: boolean;
  isBluetoothLoweenergy: boolean;
  iconPath: string;
}

type BluetoothMajor =
  | "Miscellaneous"
  | "Computer"
  | "Phone"
  | "NetworkAccessPoint"
  | "AudioVideo"
  | "Peripheral"
  | "Imaging"
  | "Wearable"
  | "Toy"
  | "Health"
  | "Unkown";

type BluetoothMinor =
  | "Uncategorized"
  | "ComputerDesktop"
  | "ComputerServer"
  | "ComputerLaptop"
  | "ComputerHandheld"
  | "ComputerPalmSize"
  | "ComputerWearable"
  | "ComputerTablet"
  | "PhoneCellular"
  | "PhoneCordless"
  | "PhoneSmartPhone"
  | "PhoneWired"
  | "PhoneIsdn"
  | "NetworkFullyAvailable"
  | "NetworkUsed01To17Percent"
  | "NetworkUsed17To33Percent"
  | "NetworkUsed33To50Percent"
  | "NetworkUsed50To67Percent"
  | "NetworkUsed67To83Percent"
  | "NetworkUsed83To99Percent"
  | "NetworkNoServiceAvailable"
  | "AudioVideoWearableHeadset"
  | "AudioVideoHandsFree"
  | "AudioVideoMicrophone"
  | "AudioVideoLoudspeaker"
  | "AudioVideoHeadphones"
  | "AudioVideoPortableAudio"
  | "AudioVideoCarAudio"
  | "AudioVideoSetTopBox"
  | "AudioVideoHifiAudioDevice"
  | "AudioVideoVcr"
  | "AudioVideoVideoCamera"
  | "AudioVideoCamcorder"
  | "AudioVideoVideoMonitor"
  | "AudioVideoVideoDisplayAndLoudspeaker"
  | "AudioVideoVideoConferencing"
  | "AudioVideoGamingOrToy"
  | "PeripheralJoystick"
  | "PeripheralGamepad"
  | "PeripheralRemoteControl"
  | "PeripheralSensing"
  | "PeripheralDigitizerTablet"
  | "PeripheralCardReader"
  | "PeripheralDigitalPen"
  | "PeripheralHandheldScanner"
  | "PeripheralHandheldGesture"
  | "WearableWristwatch"
  | "WearablePager"
  | "WearableJacket"
  | "WearableHelmet"
  | "WearableGlasses"
  | "ToyRobot"
  | "ToyVehicle"
  | "ToyDoll"
  | "ToyController"
  | "ToyGame"
  | "HealthBloodPressureMonitor"
  | "HealthThermometer"
  | "HealthWeighingScale"
  | "HealthGlucoseMeter"
  | "HealthPulseOximeter"
  | "HealthHeartRateMonitor"
  | "HealthHealthDataDisplay"
  | "HealthStepCounter"
  | "HealthBodyCompositionAnalyzer"
  | "HealthPeakFlowMonitor"
  | "HealthMedicationMonitor"
  | "HealthKneeProsthesis"
  | "HealthAnkleProsthesis"
  | "HealthGenericHealthManager"
  | "HealthPersonalMobilityDevice"
  | "PeripheralOther"
  | "PeripheralPointer"
  | "PeripheralKeyboard"
  | "PeripheralKeyboardAndPointer";

const bluetoothState: boolean;
const devices: BluetoothDevice[];
const connectedDevices: BluetoothDevice[];
```

### badge: `string` | `null`

Badge will be displayed over the item, useful as notifications.

Should follow the
[mathjs expression syntax](https://mathjs.org/docs/expressions/syntax.html).

## Bluetooth Item Scope

```ts
interface BluetoothDevice {
  id: string;
  name: string;
  address: bigint;
  majorClass: BluetoothMajor;
  minorMainClass: BluetoothMinor;
  minorSubClass: BluetoothMinor;
  connected: boolean;
  paired: boolean;
  canPair: boolean;
  isBluetoothLoweenergy: boolean;
  iconPath: string;
}

type BluetoothMajor =
  | "Miscellaneous"
  | "Computer"
  | "Phone"
  | "NetworkAccessPoint"
  | "AudioVideo"
  | "Peripheral"
  | "Imaging"
  | "Wearable"
  | "Toy"
  | "Health"
  | "Unkown";

type BluetoothMinor =
  | "Uncategorized"
  | "ComputerDesktop"
  | "ComputerServer"
  | "ComputerLaptop"
  | "ComputerHandheld"
  | "ComputerPalmSize"
  | "ComputerWearable"
  | "ComputerTablet"
  | "PhoneCellular"
  | "PhoneCordless"
  | "PhoneSmartPhone"
  | "PhoneWired"
  | "PhoneIsdn"
  | "NetworkFullyAvailable"
  | "NetworkUsed01To17Percent"
  | "NetworkUsed17To33Percent"
  | "NetworkUsed33To50Percent"
  | "NetworkUsed50To67Percent"
  | "NetworkUsed67To83Percent"
  | "NetworkUsed83To99Percent"
  | "NetworkNoServiceAvailable"
  | "AudioVideoWearableHeadset"
  | "AudioVideoHandsFree"
  | "AudioVideoMicrophone"
  | "AudioVideoLoudspeaker"
  | "AudioVideoHeadphones"
  | "AudioVideoPortableAudio"
  | "AudioVideoCarAudio"
  | "AudioVideoSetTopBox"
  | "AudioVideoHifiAudioDevice"
  | "AudioVideoVcr"
  | "AudioVideoVideoCamera"
  | "AudioVideoCamcorder"
  | "AudioVideoVideoMonitor"
  | "AudioVideoVideoDisplayAndLoudspeaker"
  | "AudioVideoVideoConferencing"
  | "AudioVideoGamingOrToy"
  | "PeripheralJoystick"
  | "PeripheralGamepad"
  | "PeripheralRemoteControl"
  | "PeripheralSensing"
  | "PeripheralDigitizerTablet"
  | "PeripheralCardReader"
  | "PeripheralDigitalPen"
  | "PeripheralHandheldScanner"
  | "PeripheralHandheldGesture"
  | "WearableWristwatch"
  | "WearablePager"
  | "WearableJacket"
  | "WearableHelmet"
  | "WearableGlasses"
  | "ToyRobot"
  | "ToyVehicle"
  | "ToyDoll"
  | "ToyController"
  | "ToyGame"
  | "HealthBloodPressureMonitor"
  | "HealthThermometer"
  | "HealthWeighingScale"
  | "HealthGlucoseMeter"
  | "HealthPulseOximeter"
  | "HealthHeartRateMonitor"
  | "HealthHealthDataDisplay"
  | "HealthStepCounter"
  | "HealthBodyCompositionAnalyzer"
  | "HealthPeakFlowMonitor"
  | "HealthMedicationMonitor"
  | "HealthKneeProsthesis"
  | "HealthAnkleProsthesis"
  | "HealthGenericHealthManager"
  | "HealthPersonalMobilityDevice"
  | "PeripheralOther"
  | "PeripheralPointer"
  | "PeripheralKeyboard"
  | "PeripheralKeyboardAndPointer";

const bluetoothState: boolean;
const devices: BluetoothDevice[];
const connectedDevices: BluetoothDevice[];
```

### onClick: `string` | `null`

Deprecated use `onClickV2` instead.

### onClickV2: `string` | `null`

This code will be parsed and executed when the item is clicked.

Should follow the
[mathjs expression syntax](https://mathjs.org/docs/expressions/syntax.html).

## Bluetooth Item Scope

```ts
interface BluetoothDevice {
  id: string;
  name: string;
  address: bigint;
  majorClass: BluetoothMajor;
  minorMainClass: BluetoothMinor;
  minorSubClass: BluetoothMinor;
  connected: boolean;
  paired: boolean;
  canPair: boolean;
  isBluetoothLoweenergy: boolean;
  iconPath: string;
}

type BluetoothMajor =
  | "Miscellaneous"
  | "Computer"
  | "Phone"
  | "NetworkAccessPoint"
  | "AudioVideo"
  | "Peripheral"
  | "Imaging"
  | "Wearable"
  | "Toy"
  | "Health"
  | "Unkown";

type BluetoothMinor =
  | "Uncategorized"
  | "ComputerDesktop"
  | "ComputerServer"
  | "ComputerLaptop"
  | "ComputerHandheld"
  | "ComputerPalmSize"
  | "ComputerWearable"
  | "ComputerTablet"
  | "PhoneCellular"
  | "PhoneCordless"
  | "PhoneSmartPhone"
  | "PhoneWired"
  | "PhoneIsdn"
  | "NetworkFullyAvailable"
  | "NetworkUsed01To17Percent"
  | "NetworkUsed17To33Percent"
  | "NetworkUsed33To50Percent"
  | "NetworkUsed50To67Percent"
  | "NetworkUsed67To83Percent"
  | "NetworkUsed83To99Percent"
  | "NetworkNoServiceAvailable"
  | "AudioVideoWearableHeadset"
  | "AudioVideoHandsFree"
  | "AudioVideoMicrophone"
  | "AudioVideoLoudspeaker"
  | "AudioVideoHeadphones"
  | "AudioVideoPortableAudio"
  | "AudioVideoCarAudio"
  | "AudioVideoSetTopBox"
  | "AudioVideoHifiAudioDevice"
  | "AudioVideoVcr"
  | "AudioVideoVideoCamera"
  | "AudioVideoCamcorder"
  | "AudioVideoVideoMonitor"
  | "AudioVideoVideoDisplayAndLoudspeaker"
  | "AudioVideoVideoConferencing"
  | "AudioVideoGamingOrToy"
  | "PeripheralJoystick"
  | "PeripheralGamepad"
  | "PeripheralRemoteControl"
  | "PeripheralSensing"
  | "PeripheralDigitizerTablet"
  | "PeripheralCardReader"
  | "PeripheralDigitalPen"
  | "PeripheralHandheldScanner"
  | "PeripheralHandheldGesture"
  | "WearableWristwatch"
  | "WearablePager"
  | "WearableJacket"
  | "WearableHelmet"
  | "WearableGlasses"
  | "ToyRobot"
  | "ToyVehicle"
  | "ToyDoll"
  | "ToyController"
  | "ToyGame"
  | "HealthBloodPressureMonitor"
  | "HealthThermometer"
  | "HealthWeighingScale"
  | "HealthGlucoseMeter"
  | "HealthPulseOximeter"
  | "HealthHeartRateMonitor"
  | "HealthHealthDataDisplay"
  | "HealthStepCounter"
  | "HealthBodyCompositionAnalyzer"
  | "HealthPeakFlowMonitor"
  | "HealthMedicationMonitor"
  | "HealthKneeProsthesis"
  | "HealthAnkleProsthesis"
  | "HealthGenericHealthManager"
  | "HealthPersonalMobilityDevice"
  | "PeripheralOther"
  | "PeripheralPointer"
  | "PeripheralKeyboard"
  | "PeripheralKeyboardAndPointer";

const bluetoothState: boolean;
const devices: BluetoothDevice[];
const connectedDevices: BluetoothDevice[];
```

### style: { [key: `string`]?: [`StyleValue`](./StyleValue) | `null` }

Styles to be added to the item. This follow the same interface of React's
`style` prop.

### remoteData: { [key: `string`]?: [`RemoteDataDeclaration`](./RemoteDataDeclaration) }

Remote data to be added to the item scope.

### withBluetoothSelector: `boolean`

Show bluetooth selector popup on click]
