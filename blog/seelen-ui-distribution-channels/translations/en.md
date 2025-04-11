# Seelen UI: Installation Methods and Update Channels

## Installation Options

### Microsoft Store (MSIX)

Download the latest version from the
[Microsoft Store](https://www.microsoft.com/store). This is the most secure and
user-friendly option, with automatic updates.

**Pros:**

- Automatic updates
- Verified and approved by Microsoft
- High security and reliability
- Lighter version than .exe installer (no debug symbols included)

**Cons:**

- Updates may take 1-3 business days for Microsoft approval
- More difficult to debug and report issues

---

### Winget (MSIX)

Install the latest version using the following command:

> winget install --id Seelen.SeelenUI

Offers the same benefits as the Microsoft Store version with the added
convenience of command-line installation.

---

### .exe Installer

Download the setup.exe installer from the
[Releases page](https://github.com/eythaann/Seelen-UI/releases) and run it.

**Pros:**

- Immediate updates available
- Receives update notifications as soon as new versions are released
- Better for debugging purposes

**Cons:**

- May trigger antivirus warnings (not digitally signed)
- Larger file size (includes debug symbols)

## Update Channels

> Regardless of your chosen update channel, all versions receive automatic
> updates. Unstable channels also receive updates from more stable channels
> (e.g., Nightly receives updates from both Nightly and Beta/Release).

### Release (Stable)

The most secure and recommended channel for all users.

**Features:**

- Thoroughly tested with no critical bugs
- Ideal for production and everyday use
- Available on Microsoft Store, Winget (.msix), and as .exe installer

### Beta

For users who want early access to new features before official release.

**Features:**

- Includes upcoming features under testing
- May contain minor bugs
- More frequent updates than Stable
- Available only as .exe installer

### Nightly

For advanced users and developers wanting the latest changes.

**Features:**

- Contains most recent, untested changes
- May include bugs or incomplete features
- Updated daily or with each significant code change
- Available only as .exe installer

Learn more about the Nightly channel in our
[Seelen UI Nightly](https://seelen.io/blog/nightly) documentation.

## Update Mechanism: Setup.exe vs MSIX

- **MSIX:** Updates managed automatically by Microsoft Store
- **Setup.exe:** Includes built-in updater that notifies you when updates are
  available

![Seelen UI update notification](https://github.com/Seelen-Inc/slu-blog/blob/master/blog/seelen-ui-distribution-channels/image.png?raw=true)

When an update is available:

1. Click the notification
2. The updater will download and install the update
3. Application will restart automatically
