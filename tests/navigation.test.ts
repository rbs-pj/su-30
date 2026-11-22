import test from 'node:test';
import assert from 'node:assert/strict';
import { renderHeader } from '../src/components/Header.ts';
import { renderFooter } from '../src/components/Footer.ts';

test('renderHeader returns valid HTML with nav links and scroll progress indicator', () => {
  const html = renderHeader();
  assert.ok(html.includes('id="main-header"'));
  assert.ok(html.includes('id="scroll-progress"'));
  assert.ok(html.includes('href="#hero"'));
  assert.ok(html.includes('href="#anatomy"'));
  assert.ok(html.includes('href="#references"'));
  assert.ok(html.includes('id="mobile-menu-btn"'));
});

test('renderFooter returns valid HTML with project name and citation note', () => {
  const html = renderFooter();
  assert.ok(html.includes('EM LÀ NHÀ SÁNG TẠO – BẢO TÀNG QUỐC PHÒNG VIỆT NAM'));
  assert.ok(html.includes('id="back-to-top"'));
  assert.ok(html.includes('2026'));
});
