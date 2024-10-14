# Seelen U : Installation Methods and Update Channels

## Installation Options

### Microsoft Store (MSIX)
Download the latest version from the Microsoft Store. This is the most secure and user-friendly option, with automatic updates.  

- Pros:
  - Automatic updates.
  - Verified and approved by Microsoft.
  - High security and reliability.
  - Lightweighter version than .exe installer because this version doesn't includes debug symbols.
- Cons:
  - Updates may take 1-3 business days to be approved.
  - Harder to debug and report issues.

---

### Winget (MSIX)
Install the latest version using the following command:

```pwsh
winget install --id Seelen.SeelenUI
```
Same pros and cons of Microsoft Store with the plus of a quick installation via command line.

---

### .exe Installer  
Download the setup.exe installer from the Releases page and run it.

- Pros:  
  - Faster installation with immediate updates.
  - Receives notifications for new releases as soon as they are available.
- Cons:
  - Not digitally signed, which may trigger antivirus warnings.
  - Less lightweight than the MSIX installer because this version includes debug symbols.

## Update Channels
> Indenpendent of the update channel all versions recieve automatic updates, also if your using a unstable update channel also will recieve updates of the more stable update channels, example:
Nightly recieve updates from Nightly but also from Beta and Release

### Release (Stable)
The most secure and recommended channel for all users.

- Features:
  - Thoroughly tested with no critical bugs.
  - Ideal for production and everyday use.
  - Available on Microsoft Store, Winget, .msix, and .exe.

### Beta
Aimed at users who want to try new features before they are officially released. This channel includes betas and release candidates.

- Features:
  - Contains new features under testing.
  - Might have minor bugs.
  - More frequent updates than the stable release.
  - Available only as .exe on the releases page.

### Nightly
For advanced users and developers who want access to the latest changes and experimental features.

- Features:
  - Includes the most recent changes, but not thoroughly tested.
  - May contain bugs or unfinished features.
  - Updated daily or with every significant code change.
  - Only available as .exe on the Releases page.

## Recieving Updates on Setup.exe vs MSIX
On msix updates are managed by the Microsoft Store, but on Setup.exe they are not, so an updater is included with the application this will show you a notification when an update is available.

![Seelen UI update notification on settings window](image.png)

If you click on the notification it will start downloading and installing the update, after which it will restart the application automatically.