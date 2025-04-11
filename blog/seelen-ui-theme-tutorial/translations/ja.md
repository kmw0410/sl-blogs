# Seelen UI：テーマの基本チュートリアル - プロのようにデスクトップをカスタマイズしてください！

![A beautifully customized desktop using Seelen UI themes](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/image.png)

Windowsのデスクトップに新鮮な新しい外観を与えたいですか？ Seelen UIはそれを簡単にします
 その強力なテーマシステム。 このガイドは、どのように
 テーマは機能します - コーディングエクスペリエンスは必要ありません！

## テーマ作成者向けの特別なデバッグバージョン

私たちが始める前に、テーマの作成者は私たちの特別について知っておくべきです **デバッグバージョン**
Seelen Uiの！ このバージョンでは：

* Webページのように要素を検査します（Ctrl+Shift+開発者ツールを開きます）
* ライブHTML/CSSの変更を参照してください
* テーマの変更を即座にテストします
* スタイリングの問題を簡単にデバッグします

デバッグバージョンをダウンロードしてください
[毎晩リリースチャネル](https://seelen.io/apps/seelen-ui/releases/nightly)
（で終わるファイルを探します `-debug.exe`、 のように
`Seelen.UI_2.2.8+20250410073056_x64-setup-debug.exe`）。

### 毎晩のビルドについてもっと知りたいですか？

私たちをチェックしてください
[毎晩のビルドが説明されました](https://seelen.io/blog/seelen-ui-nightly) 記事！

## テーマファイルの理解

塗料の層のようなSeelen UIテーマを考えてください。 複数のテーマを適用できます
 一度、そして絵画のように、順序が重要です！ テーマはすべてを変えることができます
 色からウィンドウスタイルまで。

テーマをパッケージ化できる3つの方法があります。

1. **単一のファイルテーマ** （.ymlファイル）
2. **テーマフォルダー** （複数のファイルが含まれています）
3. **圧縮テーマ** （.sluファイル - 特別なSeelen UI形式）

### あなたのテーマを置く場所

すべてのテーマは、コンピューターのこのフォルダーにあります。

```text
C:\Users\{YOUR_USERNAME}\AppData\Roaming\com.seelen.seelen-ui\themes
```

### テーマフォルダー構造

これがテーマフォルダーの内部の様子です。

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

## インスピレーションを得る：テーマの例

どこから、どのように開始するかわからない？ Seelen UIには、いくつかの組み込みのテーマが付属しています
 インスピレーションとして使用できます！ をチェックしてください
[デフォルトのテーマコレクション](https://github.com/eythaann/Seelen-UI/tree/master/static/themes)
それらがどのように作られているかを見るために。

## 色を扱う - それはあなたが思っているよりも簡単です！

Seelen UIはあなたのWindowsのアクセントの色を自動的に拾い上げてそれを作ります
 シンプルなカラー変数を通じてさまざまな色合いがあります。

### メインのアクセント色

これらの変数は、Windows設定で設定した色を使用します。

* `--config-accent-color`：純粋な色（#ffbbaaのように）
* `--config-accent-color-rgb`：RGB形式の同じ色（255、187、170）

### 完全な色のファミリー

Seelen UIは、アクセントの色からパレット全体を作成します。

![Visual guide to Seelen UI's color palette](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/colors.png)

これが利用可能な色の完全なリストです：

* 最も暗いバージョン： `--config-accent-darkest-color`
* 暗いバージョン： `--config-accent-darker-color`
* ダークバージョン： `--config-accent-dark-color`
* 通常のバージョン： `--config-accent-color`
* ライトバージョン： `--config-accent-light-color`
* 軽いバージョン： `--config-accent-lighter-color`
* 最も軽いバージョン： `--config-accent-lightest-color`

各色にはRGBバージョンもあります（最後に-RGBがあります）。 これは役立ちます
 勾配やその他の色の効果を作成します。

例として設定不透明度のある背景色：

```css
background-color: rbga(var(--config-accent-darkest-color-rgb), 0.5);
```

### さらに多くのカラーオプション

より多くの色の選択が必要ですか？ Seelen UIは、数十の追加のシステム色を公開しています。
 これをチェックしてください
[便利な色の参照](https://gist.github.com/eythaann/cd9a3cda0206ce23a17f5ea00ec2ba06)
利用可能なすべてのオプション用。

プロのヒント：Windowsのアクセントの色が変わると、Seelen UIテーマの更新
 自動的に！
