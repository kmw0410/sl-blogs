# **SLUライブラリ：APIリファレンス**

APIモジュールは、具体的な実装とユーティリティクラスを提供します
生のアプリケーションAPIを要約して、開発者に優しいファサードとして機能します
ウィジェット統合。

## **目的**

- からインターフェイスを実装します `/types` すぐに使用できるクラスで
- 低レベルのAPIの複雑さを要約します
- 共通操作にユーティリティ方法を提供します
- ウィジェットとSLUの間の主要な相互作用層として機能します 応用

## **使用法**

必要に応じてライブラリを使用できます。 これが基本的な例です。

```ts
import { StructClass } from "@seelen-ui/lib/api";

const widgetApi: StructClass = await StructClass.geAsync();
const something = widgetApi.getSomething();
const somethingAsync = await widgetApi.getSomethingAsync();

await widgetApi.doSomething();
```

## **重要なメモ：**

1. このAPIライブラリは、Seelen
   UIウィジェットの実行内で実行するときにのみ機能します 環境
2. node.jsまたは標準のブラウザのコンテキストで使用しようとすると エラー
3. このAPIを使用するウィジェットは、適切に動作するために更新する必要があります
   Seelen UIの最新バージョン
