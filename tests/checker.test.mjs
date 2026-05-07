import test from 'node:test';
import assert from 'node:assert/strict';
import { analyzeItems, renderMarkdownReport } from '../src/checker.mjs';

test('valid sample passes required field checks', () => {
  const report = analyzeItems({ items: [{
  "id": "product-image-delivery-checker-1",
  "title": "商品画像納品チェッカー サンプル1",
  "status": "ready",
  "fileName": "product-main.psd",
  "width": 1200,
  "height": 1200,
  "colorProfile": "sRGB IEC61966-2.1",
  "exportPreset": "PNG transparent"
}] });
  assert.equal(report.summary.result, 'passed');
  assert.equal(report.summary.errors, 0);
});

test('missing required field is reported', () => {
  const report = analyzeItems({ items: [{
  "id": "product-image-delivery-checker-missing-required",
  "title": "必須項目不足サンプル",
  "status": "ready",
  "width": 1200,
  "height": 1200,
  "colorProfile": "sRGB IEC61966-2.1",
  "exportPreset": "PNG transparent"
}] });
  assert.equal(report.summary.result, 'failed');
  assert.equal(report.summary.errors, 1);
  assert.match(renderMarkdownReport(report), /未設定/);
});
