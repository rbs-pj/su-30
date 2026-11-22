import test from 'node:test';
import assert from 'node:assert/strict';
import { renderAnatomySection } from '../src/components/Anatomy.ts';
import { su30Data } from '../src/data/su30.ts';

test('renderAnatomySection generates SVG blueprint with 8 interactive hotspot buttons', () => {
  const html = renderAnatomySection();
  assert.ok(html.includes('id="anatomy"'));
  assert.ok(html.includes('<svg'));
  assert.ok(html.includes('class="blueprint-svg"'));
  
  // All 8 parts must have their hotspot button or selector
  for (const part of su30Data.anatomyParts) {
    assert.ok(html.includes(`data-part-id="${part.id}"`), `Missing hotspot button for: ${part.id}`);
  }

  // Must contain detail card container
  assert.ok(html.includes('id="anatomy-detail-panel"'));
});
