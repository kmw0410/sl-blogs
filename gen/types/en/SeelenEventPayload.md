# **SeelenEventPayload**

{ workspaces-changed: `Array`<[`DesktopWorkspace`](./DesktopWorkspace)> }

| { active-workspace-changed: [`WorkspaceId`](./WorkspaceId) }

| { global-focus-changed: [`FocusedApp`](./FocusedApp) }

| { global-mouse-move: [`number`, `number`] }

| { handle-layered: `boolean` }

| { system::monitors-changed: `Array`<[`PhysicalMonitor`](./PhysicalMonitor)> }

| { system::languages-changed: `Array`<[`SystemLanguage`](./SystemLanguage)> }

| { user-changed: [`User`](./User) }

| { user-folder-changed: [`FolderChangedArgs`](./FolderChangedArgs) }

| { bluetooth-devices-changed: `Array`<[`BluetoothDevice`](./BluetoothDevice)> }

| { bluetooth-discovered-devices-changed:
`Array`<[`BluetoothDevice`](./BluetoothDevice)> }

| { bluetooth-pair-show-pin:
[`BluetoothDevicePairShowPinRequest`](./BluetoothDevicePairShowPinRequest) }

| { bluetooth-pair-request-pin: `null` }

| { media-sessions: `Array`<[`MediaPlayer`](./MediaPlayer)> }

| { media-inputs: `Array`<[`MediaDevice`](./MediaDevice)> }

| { media-outputs: `Array`<[`MediaDevice`](./MediaDevice)> }

| { network-default-local-ip: `string` }

| { network-adapters: `Array`<[`NetworkAdapter`](./NetworkAdapter)> }

| { network-internet-connection: `boolean` }

| { wlan-scanned: `Array`<[`WlanBssEntry`](./WlanBssEntry)> }

| { notifications: `Array`<[`AppNotification`](./AppNotification)> }

| { power-status: [`PowerStatus`](./PowerStatus) }

| { power-mode: [`PowerMode`](./PowerMode) }

| { batteries-status: `Array`<[`Battery`](./Battery)> }

| { colors-changed: [`UIColors`](./UIColors) }

| { tray-info: `Array`<[`TrayIcon`](./TrayIcon)> }

| { set-auto-hide: `boolean` }

| { set-auto-hide: `boolean` }

| { weg::instance-changed: [`WegItems`](./WegItems) }

| { set-reservation: `null` }

| { wm-force-retiling: `null` }

| { wm-set-layout: [`WmNode`](./WmNode) | `null` }

| { wm-set-overlay-visibility: `boolean` }

| { wm-set-active-window: `number` }

| { wall-stop: `boolean` }

| { settings-changed: [`Settings`](./Settings) }

| { weg-items: [`WegItems`](./WegItems) }

| { toolbar-items: [`Placeholder`](./Placeholder) }

| { themes: `Array`<[`Theme`](./Theme)> }

| { settings-by-app: `Array`<[`AppConfig`](./AppConfig)> }

| { history: [`LauncherHistory`](./LauncherHistory) }

| { icon-packs: `Array`<[`IconPack`](./IconPack)> }

| { plugins-changed: `Array`<[`Plugin`](./Plugin)> }

| { widgets-changed: `Array`<[`Widget`](./Widget)> }

| { profiles-changed: `Array`<[`Profile`](./Profile)> }
