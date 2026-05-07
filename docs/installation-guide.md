# 導入手順書

## 前提

- Node.js と npm を使用します。
- 追加で開発ツールを入れる場合は `E:\DevEnv` 以下を使用します。
- リポジトリパス: `D:\AI\AdobePlugin\Photoshop\product-image-delivery-checker`

## セットアップ

```powershell
cd D:\AI\AdobePlugin\Photoshop\product-image-delivery-checker
npm install
npm test
```

## Photoshop UXPプラグインとして読み込む

UXP Developer Toolで `D:\AI\AdobePlugin\Photoshop\product-image-delivery-checker\plugin` をAdd Pluginします。

## トラブルシュート

- `npm` が見つからない場合は、Node.js のPATHを確認してください。
- 文字化けを見つけた場合は、UTF-8で再保存し、`npm test` のQCDS評価を再実行してください。
- 手動テストに迷う場合は docs/user-guide.md を先に確認してください。
