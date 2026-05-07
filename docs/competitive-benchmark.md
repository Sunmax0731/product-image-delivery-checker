# 競合・公式基準ベンチマーク

## 比較方針

商品画像納品チェッカー は、競合の全機能を再実装するのではなく、画像処理CLIではなく、Photoshopパネル内で制作者が納品条件を直接確認できる。

| 参照先 | URL | 競合・公式標準の強み | 採用する評価基準 | 差別化 |
| --- | --- | --- | --- | --- |
| Adobe Photoshop UXP | https://developer.adobe.com/photoshop/uxp/ | Photoshop向けパネル、manifest、ホスト連携を公式SDKとして提供している。 | メディア属性と出力条件を確認できること。 | 画像処理CLIではなく、Photoshopパネル内で制作者が納品条件を直接確認できる。 |
| ImageMagick | https://imagemagick.org/script/command-line-tools.php | 画像サイズ、形式、変換、検査をCLIから扱える。 | メディア属性と出力条件を確認できること。 | 画像処理CLIではなく、Photoshopパネル内で制作者が納品条件を直接確認できる。 |
| MediaInfo | https://mediaarea.net/en/MediaInfo | 動画・音声ファイルのコーデック、解像度、ビットレートなどのメタデータを確認できる。 | メディア属性と出力条件を確認できること。 | 画像処理CLIではなく、Photoshopパネル内で制作者が納品条件を直接確認できる。 |

## 改善へ反映した点

- QCDS評価に競合比較と公式標準の確認を追加した。
- 実装だけでなく、README、導入手順、ユーザーガイド、手動テスト、リリース前資料を評価対象にした。
- 文字化けをQCDSのQuality/Satisfactionリスクとして検出する。
