import { analyzeItems, buildReviewModel, renderMarkdownReport } from '../../src/checker.mjs';

const sample = {
  "items": [
    {
      "id": "product-image-delivery-checker-1",
      "title": "商品画像納品チェッカー サンプル1",
      "status": "ready",
      "fileName": "product-main.psd",
      "width": 1200,
      "height": 1200,
      "colorProfile": "sRGB IEC61966-2.1",
      "exportPreset": "PNG transparent"
    },
    {
      "id": "product-image-delivery-checker-missing-required",
      "title": "必須項目不足サンプル",
      "status": "ready",
      "width": 1200,
      "height": 1200,
      "colorProfile": "sRGB IEC61966-2.1",
      "exportPreset": "PNG transparent"
    }
  ]
};
const badge = document.getElementById('badge');
const cards = document.getElementById('cards');
const result = document.getElementById('result');

document.getElementById('run').addEventListener('click', () => {
  const report = analyzeItems(sample);
  const model = buildReviewModel(report);
  badge.textContent = model.statusLabel;
  cards.innerHTML = model.cards.map((card) => `<div class="card"><span>${card.label}</span><strong>${card.value}</strong></div>`).join('');
  result.textContent = renderMarkdownReport(report);
});
