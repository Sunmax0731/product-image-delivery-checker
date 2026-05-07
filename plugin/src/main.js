import { analyzeItems, renderMarkdownReport } from '../../src/checker.mjs';

document.getElementById('run').addEventListener('click', () => {
  const report = analyzeItems({ items: [{"id":"photoshop-image-1","title":"商品画像納品チェッカー サンプル 1","fileName":"product-main.psd","width":1200,"height":1200,"colorProfile":"sRGB IEC61966-2.1","exportPreset":"PNG transparent"}, {"id":"photoshop-image-missing-required","title":"必須項目不足サンプル","width":1200,"height":1200,"colorProfile":"sRGB IEC61966-2.1","exportPreset":"PNG transparent"}] });
  document.getElementById('result').textContent = renderMarkdownReport(report);
});
