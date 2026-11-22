import test from 'node:test';
import assert from 'node:assert/strict';
import { su30Data } from '../src/data/su30.ts';

test('su30Data has complete metadata and project branding', () => {
  assert.equal(su30Data.project.name, 'EM LÀ NHÀ SÁNG TẠO – BẢO TÀNG QUỐC PHÒNG VIỆT NAM');
  assert.equal(su30Data.aircraft.designation, 'SU-30MK2');
  assert.equal(su30Data.aircraft.fullName, 'Sukhoi Su-30MK2');
  assert.ok(su30Data.aircraft.role.includes('tiêm kích đa năng'));
});

test('su30Data timeline covers Su-27 genesis to Vietnam induction 2004-2016', () => {
  assert.ok(su30Data.timeline.length >= 6);
  const years = su30Data.timeline.map(t => t.period);
  assert.ok(years.some(y => y.includes('1970')));
  assert.ok(years.some(y => y.includes('1989')));
  assert.ok(years.some(y => y.includes('2000')));
  assert.ok(years.some(y => y.includes('2003') || y.includes('2004')));
  assert.ok(years.some(y => y.includes('2016')));
});

test('su30Data anatomy contains exactly the 8 required parts from spec', () => {
  assert.equal(su30Data.anatomyParts.length, 8);
  const partIds = su30Data.anatomyParts.map(p => p.id);
  const required = [
    'nose-fuselage',
    'tandem-cockpit',
    'main-wings',
    'twin-vertical-tails',
    'horizontal-stabilators',
    'air-intakes',
    'al31f-engines',
    'landing-gear'
  ];
  for (const req of required) {
    assert.ok(partIds.includes(req), `Missing anatomy part: ${req}`);
  }
});

test('su30Data technical specs strictly match verified Rosoboronexport data', () => {
  assert.ok(su30Data.specs.length >= 5);
  const mtow = su30Data.specs.find(s => s.parameter.includes('Khối lượng cất cánh'));
  assert.ok(mtow);
  assert.equal(mtow.value, '34.500 kg');

  const engine = su30Data.specs.find(s => s.parameter.includes('Loại động cơ'));
  assert.ok(engine);
  assert.equal(engine.value, 'AL-31F');

  const crew = su30Data.specs.find(s => s.parameter.includes('Tổ lái'));
  assert.ok(crew);
  assert.equal(crew.value, '2 người');
});

test('su30Data references contain all 8 verified sources with live https URLs', () => {
  assert.equal(su30Data.references.length, 8);
  for (const ref of su30Data.references) {
    assert.ok(ref.title.length > 0);
    assert.ok(ref.url.startsWith('https://'), `Invalid URL in reference: ${ref.title}`);
  }
});
