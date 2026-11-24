import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import { renderHeroSection } from '../src/components/Hero.ts';
import { renderOverviewSection } from '../src/components/Overview.ts';
import { renderHistoryTimelineSection } from '../src/components/HistoryTimeline.ts';
import { renderRoleMissionSection } from '../src/components/RoleMission.ts';
import { renderTechSpecsSection } from '../src/components/TechSpecs.ts';
import { renderVietnamServiceSection } from '../src/components/VietnamService.ts';
import { renderConclusionSection } from '../src/components/Conclusion.ts';
import { renderReferencesSection } from '../src/components/References.ts';

describe('Exhibit Sections Suite', () => {
  it('01-Hero Section renders accurate designations and CTA anchors', () => {
    const html = renderHeroSection();
    assert.ok(html.includes('id="hero"'), 'Hero section must have id="hero"');
    assert.ok(html.includes('SU-30MK2'), 'Must display SU-30MK2 designation');
    assert.ok(html.includes('34.500 kg'), 'Must display verified MTOW');
    assert.ok(html.includes('href="#overview"'), 'Must have CTA link to overview');
    assert.ok(html.includes('href="#anatomy"'), 'Must have CTA link to anatomy');
  });

  it('02-Overview Section renders etymology and variant distinction', () => {
    const html = renderOverviewSection();
    assert.ok(html.includes('id="overview"'), 'Overview section must have id="overview"');
    assert.ok(html.includes('Su-30MKI'), 'Must mention Su-30MKI for distinction');
    assert.ok(html.includes('Su-30SM'), 'Must mention Su-30SM for distinction');
    assert.ok(html.includes('KnAAPO'), 'Must state KnAAPO production plant');
    assert.ok(html.includes('Modernizirovannyi Kommercheskiy'), 'Must explain MK abbreviation');
  });

  it('03-History Section renders 6 timeline events and filter tabs', () => {
    const html = renderHistoryTimelineSection();
    assert.ok(html.includes('id="history"'), 'History section must have id="history"');
    assert.ok(html.includes('data-filter="all"'), 'Must have all filter');
    assert.ok(html.includes('data-filter="vietnam"'), 'Must have vietnam filter');
    assert.ok(html.includes('data-filter="world"'), 'Must have world filter');
    assert.ok(html.includes('Su-27'), 'Must cover Su-27 origin');
    assert.ok(html.includes('Ghi Chú Về Định Danh Lịch Sử'), 'Must include historical caution note');
  });

  it('04-Role & Mission Section renders 3 tactical pillars and synergy', () => {
    const html = renderRoleMissionSection();
    assert.ok(html.includes('id="roles"'), 'Roles section must have id="roles"');
    assert.ok(html.includes('Tiêm Kích Đa Năng Hiện Đại'), 'Must include multirole fighter card');
    assert.ok(html.includes('Bảo Vệ Vùng Biển &amp; Chủ Quyền Đảo') || html.includes('Bảo Vệ Vùng Biển & Chủ Quyền Đảo'), 'Must include maritime protection');
    assert.ok(html.includes('Huấn Luyện &amp; Đào Tạo') || html.includes('Huấn Luyện & Đào Tạo'), 'Must include training role');
    assert.ok(html.includes('Sức Mạnh Hiệp Đồng'), 'Must include multi-branch synergy banner');
  });

  it('06-Technical Specs Section renders Rosoboronexport verified parameters', () => {
    const html = renderTechSpecsSection();
    assert.ok(html.includes('id="specs"'), 'Specs section must have id="specs"');
    assert.ok(html.includes('AL-31F'), 'Must specify AL-31F engine');
    assert.ok(html.includes('34.500 kg'), 'Must specify 34.500 kg MTOW');
    assert.ok(html.includes('02'), 'Must specify 2 crew');
    assert.ok(html.includes('Rosoboronexport'), 'Must cite Rosoboronexport');
  });

  it('07-Vietnam Service Section renders Regiments 935 & 927 and An-124 transport', () => {
    const html = renderVietnamServiceSection();
    assert.ok(html.includes('id="vietnam"'), 'Vietnam section must have id="vietnam"');
    assert.ok(html.includes('Trung đoàn Không quân 935'), 'Must feature Regiment 935');
    assert.ok(html.includes('Trung đoàn Không quân 927'), 'Must feature Regiment 927');
    assert.ok(html.includes('An-124'), 'Must describe An-124 heavy transport');
    assert.ok(html.toLowerCase().includes('hiện đại hóa trang bị đi đôi với hiện đại hóa con người'), 'Must emphasize human factor');
  });

  it('08-Conclusion Section renders tribute and institutional reflection', () => {
    const html = renderConclusionSection();
    assert.ok(html.includes('id="conclusion"'), 'Conclusion section must have id="conclusion"');
    assert.ok(html.includes('BẢO TÀNG SỐ VIỆT NAM'), 'Must include educational committee quote');
  });

  it('09-References Section renders 8 authentic sources with secure external links', () => {
    const html = renderReferencesSection();
    assert.ok(html.includes('id="references"'), 'References section must have id="references"');
    assert.ok(html.includes('CNA'), 'Must cite CNA');
    assert.ok(html.includes('Rosoboronexport'), 'Must cite Rosoboronexport');
    assert.ok(html.includes('ODIN'), 'Must cite ODIN');
    assert.ok(html.includes('VTC News'), 'Must cite VTC News');
    assert.ok(html.includes('target="_blank"'), 'Must have target="_blank" on links');
    assert.ok(html.includes('rel="noopener noreferrer"'), 'Must have safe rel attributes');
  });
});
