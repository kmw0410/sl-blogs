# **SeelenCommandArgument**

## **Kind: TypeAlias**

## **Description**

Internal used as mapping of commands to their arguments

{ run: [`SeelenCommandRunArgs`](./SeelenCommandRunArgs) }

| { is_dev_mode: `null` }

| { is_appx_package: `null` }

| { open_file: [`SeelenCommandOpenFileArgs`](./SeelenCommandOpenFileArgs) }

| { run_as_admin: [`SeelenCommandRunAsAdminArgs`](./SeelenCommandRunAsAdminArgs)
}

| { select_file_on_explorer:
[`SeelenCommandSelectFileOnExplorerArgs`](./SeelenCommandSelectFileOnExplorerArgs)
}

| { is_virtual_desktop_supported: `null` }

| { get_user_envs: `null` }

| { show_app_settings: `null` }

| { switch_workspace:
[`SeelenCommandSwitchWorkspaceArgs`](./SeelenCommandSwitchWorkspaceArgs) }

| { send_keys: [`SeelenCommandSendKeysArgs`](./SeelenCommandSendKeysArgs) }

| { get_icon: [`SeelenCommandGetIconArgs`](./SeelenCommandGetIconArgs) }

| { simulate_fullscreen: `null` }

| { check_for_updates: `null` }

| { show_desktop: `null` }

| { install_last_available_update: `null` }

| { get_foreground_window_color: `null` }

| { get_connected_monitors: `null` }

| { get_system_colors: `null` }

| { get_system_languages: `null` }

| { set_system_keyboard_layout:
[`SeelenCommandSystemSetKeyboardLayoutArgs`](./SeelenCommandSystemSetKeyboardLayoutArgs)
}

| { set_auto_start:
[`SeelenCommandSetAutoStartArgs`](./SeelenCommandSetAutoStartArgs) }

| { get_auto_start_status: `null` }

| { state_get_themes: `null` }

| { state_get_weg_items: `null` }

| { state_write_weg_items:
[`SeelenCommandStateWriteWegItemsArgs`](./SeelenCommandStateWriteWegItemsArgs) }

| { state_get_toolbar_items: `null` }

| { state_get_settings:
[`SeelenCommandStateGetSettingsArgs`](./SeelenCommandStateGetSettingsArgs) }

| { state_write_settings:
[`SeelenCommandStateWriteSettingsArgs`](./SeelenCommandStateWriteSettingsArgs) }

| { state_get_default_settings: `null` }

| { state_get_default_monitor_settings: `null` }

| { state_get_specific_apps_configurations: `null` }

| { state_get_wallpaper: `null` }

| { state_set_wallpaper:
[`SeelenCommandStateSetWallpaperArgs`](./SeelenCommandStateSetWallpaperArgs) }

| { state_get_history: `null` }

| { state_get_plugins: `null` }

| { state_get_widgets: `null` }

| { state_get_icon_packs: `null` }

| { state_get_profiles: `null` }

| { state_delete_cached_icons: `null` }

| { get_user: `null` }

| { get_user_folder_content:
[`SeelenCommandGetUserFolderContentArgs`](./SeelenCommandGetUserFolderContentArgs)
}

| { set_user_folder_limit:
[`SeelenCommandSetUserFolderLimitArgs`](./SeelenCommandSetUserFolderLimitArgs) }

| { get_connected_bluetooth_devices: `null` }

| { start_bluetooth_scanning: `null` }

| { stop_bluetooth_scanning: `null` }

| { pair_bluetooth_device:
[`SeelenCommandPairBluetoothDeviceArgs`](./SeelenCommandPairBluetoothDeviceArgs)
}

| { forget_bluetooth_device:
[`SeelenCommandForgetBluetoothDeviceArgs`](./SeelenCommandForgetBluetoothDeviceArgs)
}

| { confirm_bluetooth_device_pair:
[`SeelenCommandConfirmBluetoothDevicePairArgs`](./SeelenCommandConfirmBluetoothDevicePairArgs)
}

| { get_media_devices: `null` }

| { get_media_sessions: `null` }

| { media_prev: [`SeelenCommandMediaPrevArgs`](./SeelenCommandMediaPrevArgs) }

| { media_toggle_play_pause:
[`SeelenCommandMediaTogglePlayPauseArgs`](./SeelenCommandMediaTogglePlayPauseArgs)
}

| { media_next: [`SeelenCommandMediaNextArgs`](./SeelenCommandMediaNextArgs) }

| { set_volume_level:
[`SeelenCommandSetVolumeLevelArgs`](./SeelenCommandSetVolumeLevelArgs) }

| { media_toggle_mute:
[`SeelenCommandMediaToggleMuteArgs`](./SeelenCommandMediaToggleMuteArgs) }

| { media_set_default_device:
[`SeelenCommandMediaSetDefaultDeviceArgs`](./SeelenCommandMediaSetDefaultDeviceArgs)
}

| { get_main_monitor_brightness: `null` }

| { set_main_monitor_brightness:
[`SeelenCommandSetMainMonitorBrightnessArgs`](./SeelenCommandSetMainMonitorBrightnessArgs)
}

| { get_power_status: `null` }

| { get_power_mode: `null` }

| { get_batteries: `null` }

| { log_out: `null` }

| { suspend: `null` }

| { hibernate: `null` }

| { restart: `null` }

| { shutdown: `null` }

| { lock: `null` }

| { weg_get_items_for_widget: `null` }

| { weg_close_app:
[`SeelenCommandWegCloseAppArgs`](./SeelenCommandWegCloseAppArgs) }

| { weg_kill_app: [`SeelenCommandWegKillAppArgs`](./SeelenCommandWegKillAppArgs)
}

| { weg_toggle_window_state:
[`SeelenCommandWegToggleWindowStateArgs`](./SeelenCommandWegToggleWindowStateArgs)
}

| { weg_request_update_previews:
[`SeelenCommandWegRequestUpdatePreviewsArgs`](./SeelenCommandWegRequestUpdatePreviewsArgs)
}

| { weg_pin_item: [`SeelenCommandWegPinItemArgs`](./SeelenCommandWegPinItemArgs)
}

| { set_window_position:
[`SeelenCommandSetWindowPositionArgs`](./SeelenCommandSetWindowPositionArgs) }

| { request_focus:
[`SeelenCommandRequestFocusArgs`](./SeelenCommandRequestFocusArgs) }

| { launcher_get_apps: `null` }

| { get_popup_config: `null` }

| { get_tray_icons: `null` }

| { on_click_tray_icon:
[`SeelenCommandOnClickTrayIconArgs`](./SeelenCommandOnClickTrayIconArgs) }

| { on_context_menu_tray_icon:
[`SeelenCommandOnContextMenuTrayIconArgs`](./SeelenCommandOnContextMenuTrayIconArgs)
}

| { wlan_get_profiles: `null` }

| { wlan_start_scanning: `null` }

| { wlan_stop_scanning: `null` }

| { wlan_connect:
[`SeelenCommandWlanConnectArgs`](./SeelenCommandWlanConnectArgs) }

| { wlan_disconnect: `null` }

| { get_notifications: `null` }

| { notifications_close:
[`SeelenCommandNotificationsCloseArgs`](./SeelenCommandNotificationsCloseArgs) }

| { notifications_close_all: `null` }
