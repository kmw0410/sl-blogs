# **SeelenCommandReturn**

Internal used as mapping of commands to their return types

{ run: `null` }

| { is_dev_mode: `boolean` }

| { is_appx_package: `boolean` }

| { open_file: `null` }

| { run_as_admin: `null` }

| { select_file_on_explorer: `null` }

| { is_virtual_desktop_supported: `boolean` }

| { get_user_envs: { [key: `string`]?: `string` } }

| { show_app_settings: `null` }

| { switch_workspace: `null` }

| { send_keys: `null` }

| { get_icon: `null` }

| { simulate_fullscreen: `null` }

| { check_for_updates: `boolean` }

| { show_desktop: `null` }

| { install_last_available_update: `null` }

| { get_foreground_window_color: [`Color`](./Color) }

| { get_connected_monitors: `Array`<[`PhysicalMonitor`](./PhysicalMonitor)> }

| { get_system_colors: [`UIColors`](./UIColors) }

| { get_system_languages: `Array`<[`SystemLanguage`](./SystemLanguage)> }

| { set_system_keyboard_layout: `null` }

| { set_auto_start: `null` }

| { get_auto_start_status: `boolean` }

| { state_get_themes: `Array`<[`Theme`](./Theme)> }

| { state_get_weg_items: [`WegItems`](./WegItems) }

| { state_write_weg_items: `null` }

| { state_get_toolbar_items: [`Placeholder`](./Placeholder) }

| { state_get_settings: [`Settings`](./Settings) }

| { state_write_settings: `null` }

| { state_get_default_settings: [`Settings`](./Settings) }

| { state_get_default_monitor_settings:
[`MonitorConfiguration`](./MonitorConfiguration) }

| { state_get_specific_apps_configurations: `Array`<[`AppConfig`](./AppConfig)>
}

| { state_get_wallpaper: `string` }

| { state_set_wallpaper: `null` }

| { state_get_history: [`LauncherHistory`](./LauncherHistory) }

| { state_get_plugins: `Array`<[`Plugin`](./Plugin)> }

| { state_get_widgets: `Array`<[`Widget`](./Widget)> }

| { state_get_icon_packs: `Array`<[`IconPack`](./IconPack)> }

| { state_get_profiles: `Array`<[`Profile`](./Profile)> }

| { state_delete_cached_icons: `null` }

| { get_user: [`User`](./User) }

| { get_user_folder_content: `Array`<[`File`](./File)> }

| { set_user_folder_limit: `null` }

| { get_connected_bluetooth_devices:
`Array`<[`BluetoothDevice`](./BluetoothDevice)> }

| { start_bluetooth_scanning: `null` }

| { stop_bluetooth_scanning: `null` }

| { pair_bluetooth_device: `null` }

| { forget_bluetooth_device: `null` }

| { confirm_bluetooth_device_pair: `null` }

| { get_media_devices: [`Array`<[`MediaDevice`](./MediaDevice)>,
`Array`<[`MediaDevice`](./MediaDevice)>] }

| { get_media_sessions: `Array`<[`MediaPlayer`](./MediaPlayer)> }

| { media_prev: `null` }

| { media_toggle_play_pause: `null` }

| { media_next: `null` }

| { set_volume_level: `null` }

| { media_toggle_mute: `null` }

| { media_set_default_device: `null` }

| { get_main_monitor_brightness: [`Brightness`](./Brightness) | `null` }

| { set_main_monitor_brightness: `null` }

| { get_power_status: [`PowerStatus`](./PowerStatus) }

| { get_power_mode: [`PowerMode`](./PowerMode) }

| { get_batteries: `Array`<[`Battery`](./Battery)> }

| { log_out: `null` }

| { suspend: `null` }

| { hibernate: `null` }

| { restart: `null` }

| { shutdown: `null` }

| { lock: `null` }

| { weg_get_items_for_widget: [`WegItems`](./WegItems) }

| { weg_close_app: `null` }

| { weg_kill_app: `null` }

| { weg_toggle_window_state: `null` }

| { weg_request_update_previews: `null` }

| { weg_pin_item: `null` }

| { set_window_position: `null` }

| { request_focus: `null` }

| { launcher_get_apps: `Array`<[`StartMenuItem`](./StartMenuItem)> }

| { get_popup_config: [`SluPopupConfig`](./SluPopupConfig) }

| { get_tray_icons: `Array`<[`TrayIcon`](./TrayIcon)> }

| { on_click_tray_icon: `null` }

| { on_context_menu_tray_icon: `null` }

| { wlan_get_profiles: `Array`<[`WlanProfile`](./WlanProfile)> }

| { wlan_start_scanning: `null` }

| { wlan_stop_scanning: `null` }

| { wlan_connect: `null` }

| { wlan_disconnect: `null` }

| { get_notifications: `Array`<[`AppNotification`](./AppNotification)> }

| { notifications_close: `null` }

| { notifications_close_all: `null` }
