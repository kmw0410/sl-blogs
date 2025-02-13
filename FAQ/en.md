# **Frequently Asked Questions**

## **Common Questions**

### **What is Seelen UI?**
Seelen UI is a desktop application that allows you to customize your Windows 10/11 experience. It provides a wide range of themes, widgets, and plugins to enhance your desktop environment.

---

### **Is Seelen UI a free software?**
Yes, Seelen UI is a free software. You can download and use Seelen UI free of charge.

---

### **Does Seelen UI modify my operating system?**

No, **Seelen UI does not modify your operating system**. It works by subscribing to Windows' native events and interpreting them as needed to display the appropriate content. Seelen UI reads system settings and extends them within its own settings, but it **does not alter or modify any core system files or registry entries**. The app strictly adheres to Windows APIs and only interacts with the system in ways that Windows itself allows.

---

### **Can Seelen UI break my operating system?**

No, **Seelen UI cannot break your operating system**. Since it does not modify any core system files or settings (as explained in the previous question), there is no risk of it causing damage to your OS. Seelen UI is designed to work seamlessly within the boundaries of Windows APIs, ensuring a safe and stable experience.

---

### **Can a Windows update break Seelen UI?**

No, **it is not likely** that a standard Windows update will break Seelen UI. However, there is always a small risk, especially if you are using **experimental builds** like Windows Insider builds. These builds often include unfinished or unstable changes that could potentially affect third-party applications like Seelen UI. For the most stable experience, it is recommended to use stable versions of Windows.

---

### **How to download Seelen UI?**
You can download Seelen UI from the [official website](https://seelen.io).

## **Common User Issues**

### **Gray/Dark Screen Issue**
Some users experience a gray or dark screen when using Seelen UI. This issue is often caused by third-party applications that modify Windows' appearance, such as **MicaForEveryone**.

**Solution**:
- Disable these types of applications.
- If the app allows it, add Seelen UI to an exclusion list to prevent conflicts.

---

### **System Tray Not Working Properly**
If the system tray in Seelen UI is not functioning correctly, it may be due to conflicts with third-party applications that modify the Windows taskbar, such as **Start11**, **StartAllBack**, or similar tools.

**Why does this happen?**  
Seelen UI's tray module requires access to the **tray overflow** to work properly. These applications can interfere with this functionality.

**Solution**:
- Disable or uninstall any third-party taskbar modification tools before using Seelen UI.
- Ensure Seelen UI has full access to the native system tray.

---

### **Anti-Cheat Triggered by AHK**
Some anti-cheat systems may detect the use of **AutoHotkey (AHK)**, which Seelen UI relies on for shortcuts, as a potential cheat.

**Solution**:
- Disable Seelen UI's shortcuts from the settings before launching games with anti-cheat systems.
- Re-enable the shortcuts after you finish gaming.
