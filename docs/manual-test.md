# 手動テスト

## 準備

- リポジトリ: `D:\AI\AdobePlugin\Photoshop\product-image-delivery-checker`
- `npm test` が成功していること
- PhotoshopとUXP Developer Toolが必要です
- 読み込み対象: `D:\AI\AdobePlugin\Photoshop\product-image-delivery-checker\plugin`
- ローカルサーバーは不要です

## 手順

1. UXP Developer Toolで `plugin` フォルダをAdd Pluginする
2. Photoshopを起動し、プラグインパネルを開く
3. `サンプル検証` を押す
4. カードとMarkdownレポートに必須項目不足が表示されることを確認する
5. Photoshopを閉じてもファイルが破壊的に変更されていないことを確認する

## 期待結果

- 必須項目不足が分かる形で表示される。
- 次アクションがユーザーに理解できる。
- 実行ログ、出力ファイル、または画面表示をリリース前確認に使える。

## 厳格QCDS補足

- 追加の確認観点は docs/strict-manual-test-addendum.md を参照してください。
