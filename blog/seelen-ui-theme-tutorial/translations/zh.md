# SEELEN UI：主题基础知识教程 - 自定义您的桌面就像专业人士一样！

![A beautifully customized desktop using Seelen UI themes](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/image.png)

想要给您的Windows桌面一个新的外观吗？ Seelen UI使得很容易 它强大的主题系统。
本指南将带您了解如何 主题工作 - 不需要编码经验！

## 主题创建者的特殊调试版本

在开始之前，主题创建者应该知道我们的特殊 **调试版本** Seelen UI！ 这个版本让您：

- 像网页一样检查元素（CTRL+Shift+I打开开发人员工具）
- 请参阅实时HTML/CSS更改
- 立即测试主题修改
- 调试样式问题

从我们的调试版本下载
[夜间发布频道](https://seelen.io/apps/seelen-ui/releases/nightly)
（寻找以结尾的文件 `-debug.exe`， 喜欢
`Seelen.UI_2.2.8+20250410073056_x64-setup-debug.exe`）。

### 想了解有关夜间构建的更多信息吗？

查看我们的 [夜间构建解释了](https://seelen.io/blog/seelen-ui-nightly) 文章！

## 了解主题文件

将Seelen UI主题视为油漆层。 您可以在 曾经，就像绘画一样，顺序很重要！
主题可以改变一切 从颜色到窗户样式。

主题可以包装三种方式：

1. **单文件主题** （.yml文件）
2. **主题文件夹** （包含多个文件）
3. **压缩主题** （.slu文件 - 特殊Seelen UI格式）

### 将主题放在哪里

所有主题都在计算机上的此文件夹中：

```text
C:\Users\{YOUR_USERNAME}\AppData\Roaming\com.seelen.seelen-ui\themes
```

### 主题文件夹结构

这是主题文件夹内部的样子：

```text
C:\Users\{USER}\AppData\Roaming\com.seelen.seelen-ui\themes
├── YourThemeFolder             # the name of the folder doesn't matter
│   ├── theme.yml               # Theme metadata file
│   └── seelen                  # creator's username of widgets inside
│       ├── fancy-toolbar.css   # resource's name + css extension
│       └── window-manager.scss # supports SCSS too!
├── CompactTheme.yml            # Theme metadata file with styles inside
└── CompressedTheme.slu         # Special file format used on Seelen UI
```

## 受到启发：示例主题

不确定从哪里或如何开始？ Seelen UI带有几个内置主题 可以用作灵感！ 查看
[默认主题集合](https://github.com/eythaann/Seelen-UI/tree/master/static/themes)
看看它们是如何制作的。

## 使用颜色 - 比您想象的要容易！

Seelen UI自动拾取您的Windows重音颜色并使其成为
通过简单的颜色变量提供不同的阴影。

### 您的主要重音颜色

这些变量使用您在Windows设置中设置的颜色：

- `--config-accent-color`：纯色（如#FFBBAA）
- `--config-accent-color-rgb`：RGB格式的相同颜色（255，187，170）

### 完整的颜色家族

Seelen UI从您的口音颜色中创建一个整个调色板：

![Visual guide to Seelen UI's color palette](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/colors.png)

这是可用颜色的完整列表：

- 最黑暗的版本： `--config-accent-darkest-color`
- 黑暗版本： `--config-accent-darker-color`
- 黑暗版本： `--config-accent-dark-color`
- 常规版本： `--config-accent-color`
- 轻版本： `--config-accent-light-color`
- 较轻的版本： `--config-accent-lighter-color`
- 最轻的版本： `--config-accent-lightest-color`

每种颜色还具有RGB版本（末端为-RGB）。 这对 创建梯度和其他颜色效果。

例如，设置具有不透明度的背景颜色：

```css
background-color: rbga(var(--config-accent-darkest-color-rgb), 0.5);
```

### 更多颜色选项

想要更多颜色选择吗？ Seelen UI暴露了数十种其他系统颜色。 看看这个
[方便的颜色参考](https://gist.github.com/eythaann/cd9a3cda0206ce23a17f5ea00ec2ba06)
对于所有可用选项。

专家提示：当您的Windows重音颜色更改时，您的Seelen UI主题更新 自动地！
