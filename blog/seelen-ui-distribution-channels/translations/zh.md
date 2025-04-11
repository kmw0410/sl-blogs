---
title: Seelen UI分销渠道
description: 了解可用于Seelen UI的不同分销渠道
author: Eythaann
published: 13-02-2025
lastRevision: 13-02-2025
---

# Seelen UI：安装方法和更新频道

## 安装选项

### Microsoft Store（MSIX）

从 [Microsoft Store](https://www.microsoft.com/store)。 这是最安全的
用户友好的选项，具有自动更新。

**优点：**

- 自动更新
- 由Microsoft验证和批准
- 高安全性和可靠性
- 比.EXE安装程序轻的版本（不包括调试符号）

**缺点：**

- 更新可能需要1-3个工作日才能获得Microsoft批准
- 更难调试和报告问题

---

### Winget（MSIX）

使用以下命令安装最新版本：

> winget安装-ID seelen.seelenui

提供与Microsoft商店版本相同的好处 命令行安装的便利性。

---

### .EXE安装程序

从 [发行页](https://github.com/eythaann/Seelen-UI/releases) 并运行它。

**优点：**

- 可立即更新
- 一旦发布新版本，接收更新通知
- 更好地适合调试目的

**缺点：**

- 可能会触发防病毒警告（未通过数字签名）
- 较大的文件大小（包括调试符号）

## 更新频道

> 不管您选择的更新频道如何，所有版本都会收到自动 更新。
> 不稳定的频道还从更稳定的频道接收更新
> （例如，每晚都会收到来自夜间和beta/发布的更新）。

### 释放（稳定）

所有用户最安全，最推荐的渠道。

**特征：**

- 彻底测试没有关键的错误
- 适合生产和日常使用的理想
- 在Microsoft Store，Winget（.msix）和AS .EXE安装程序上可用

### beta

对于希望在官方发布之前及早访问新功能的用户。

**特征：**

- 包括即将进行测试的功能
- 可能包含小错误
- 比稳定更频繁的更新
- 仅作为.EXE安装程序可用

### 每晚

对于想要最新更改的高级用户和开发人员。

**特征：**

- 包含最近未经测试的更改
- 可能包括错误或不完整的功能
- 每天更新或随着每个重大代码更改
- 仅作为.EXE安装程序可用

了解有关我们在我们的夜间频道的更多信息
[Seelen UI每晚](https://seelen.io/blog/nightly) 文档。

## 更新机制：setup.exe vs msix

- **MSIX：** Microsoft Store自动管理更新
- **setup.exe：** 包括内置更新流，该更新器会在更新时通知您 可用的

![Seelen UI update notification](https://github.com/Seelen-Inc/slu-blog/blob/master/blog/seelen-ui-distribution-channels/image.png?raw=true)

当有更新时：

1. 单击通知
2. 更新程序将下载并安装更新
3. 应用程序将自动重新启动
