# 手動テスト

## 準備

- Adobe Photoshop と UXP Developer Tool を使用する。
- Plugin folder: `D:\AI\AdobePlugin\Photoshop\product-image-delivery-checker\plugin`
- ローカルサーバーは不要。

## 手順

1. PowerShellで `cd D:\AI\AdobePlugin\Photoshop\product-image-delivery-checker` を実行する。
2. `npm test` が成功することを確認する。
3. UXP Developer Tool で `D:\AI\AdobePlugin\Photoshop\product-image-delivery-checker\plugin\manifest.json` を読み込む。
4. Photoshopで任意のPSDまたは画像を開く。
5. Plugin panelを開き、サンプル検査を実行する。
6. サイズ、カラープロファイル、書き出しプリセットの不足が表示されることを確認する。

## 期待結果

- UXP pluginが読み込める。
- Photoshop上でパネルが開く。
- 商品画像チェック結果が表示される。
