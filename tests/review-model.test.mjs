import test from 'node:test';
import assert from 'node:assert/strict';
import { analyzeItems, buildReviewModel, renderHtmlReport } from '../src/checker.mjs';

test('review model exposes status cards and next actions', () => {
  const report = analyzeItems({ items: [{
  "id": "product-image-delivery-checker-missing-required",
  "title": "必須項目不足サンプル",
  "status": "ready",
  "width": 1200,
  "height": 1200,
  "colorProfile": "sRGB IEC61966-2.1",
  "exportPreset": "PNG transparent"
}] });
  const model = buildReviewModel(report);
  assert.equal(model.statusLabel, '修正が必要');
  assert.ok(model.completionRate < 100);
  assert.ok(model.cards.length >= 4);
  assert.match(renderHtmlReport(report), /Next Actions/);
});
