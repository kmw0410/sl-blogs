# **Seelen UI：安装方法和更新频道**

## **安装选项**

### **Microsoft Store（MSIX）**

从Microsoft Store下载最新版本。 这是最安全的
 和用户友好的选项，具有自动更新。

*   优点：
    *   自动更新。
    *   由Microsoft验证和批准。
    *   高安全性和可靠性。
    *   Lightweighter版本比.EXE安装程序，因为此版本没有
         包括调试符号。
*   缺点：
    *   更新可能需要1-3个工作日才能获得批准。
    *   更难调试和报告问题。

***

### **Winget（MSIX）**

使用以下命令安装最新版本：

```pwsh
winget install --id Seelen.SeelenUI
```

Microsoft商店的优点和缺点，以及通过
 命令行。

***

### \*\*。exe安装程序\*\*

从发布页面下载setup.exe安装程序并运行它。

*   优点：
    *   立即更新更快的安装。
    *   收到新版本后收到通知。
*   缺点：
    *   没有数字签名，这可能会触发防病毒警告。
    *   不如MSIX安装程序轻巧，因为此版本包括调试
         符号。

## **更新频道**

> 更新频道的indenpentent所有版本都会收到自动更新，
>  另外，如果您使用不稳定的更新频道，也会收到
>  更稳定的更新频道，例如：每晚夜间收到更新
>  也来自beta和发行

### **释放（稳定）**

所有用户最安全，最推荐的渠道。

*   特征：
    *   在没有关键错误的情况下进行了彻底测试。
    *   非常适合生产和日常使用。
    *   在Microsoft Store，Winget，.msix和.exe上可用。

### **beta**

针对想要在正式发布之前尝试尝试新功能的用户。
 该频道包括Beta和发布候选者。

*   特征：
    *   包含正在测试的新功能。
    *   可能有小错误。
    *   比稳定版本更频繁地更新。
    *   仅在版本页面上可用为.exe。

### **每晚**

对于想要访问最新更改的高级用户和开发人员
 实验特征。

*   特征：
    *   包括最新的更改，但未经过彻底的测试。
    *   可能包含错误或未完成的功能。
    *   每天更新或随着每个重要的代码更改。
    *   仅在版本页面上可用为.exe。

阅读更多有关ON的信息 [Seelen ui很少](./nightly.md)

## **在setup.exe vs msix上收回更新**

在MSIX更新上由Microsoft Store管理，但是在setup.exe上是
 不，因此应用程序中包含一个更新程序，这将向您显示
 通知有更新时。

![Seelen UI update notification on settings window](https://github.com/Seelen-Inc/slu-blog/blob/master/blog/seelen-ui-distribution-channels/image.png?raw=true)

如果您单击通知，它将开始下载和安装
 更新之后，它将自动重新启动应用程序。
