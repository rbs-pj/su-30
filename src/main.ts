import './styles/theme.css';
import './styles/header.css';
import './styles/sections.css';
import './styles/anatomy.css';
import './styles/footer.css';

import { renderHeader, initHeaderEvents } from './components/Header.ts';
import { renderHeroSection } from './components/Hero.ts';
import { renderOverviewSection } from './components/Overview.ts';
import { renderHistoryTimelineSection, initHistoryEvents } from './components/HistoryTimeline.ts';
import { renderRoleMissionSection } from './components/RoleMission.ts';
import { renderAnatomySection, initAnatomyEvents } from './components/Anatomy.ts';
import { renderTechSpecsSection } from './components/TechSpecs.ts';
import { renderVietnamServiceSection } from './components/VietnamService.ts';
import { renderConclusionSection } from './components/Conclusion.ts';
import { renderReferencesSection } from './components/References.ts';
import { renderFooter, initFooterEvents } from './components/Footer.ts';
import { initScrollSpy, initBackToTop } from './utils/scrollspy.ts';

function initApp(): void {
  const app = document.getElementById('app');
  if (!app) return;

  app.innerHTML = `
    ${renderHeader()}
    <main id="main-content">
      ${renderHeroSection()}
      ${renderOverviewSection()}
      ${renderHistoryTimelineSection()}
      ${renderRoleMissionSection()}
      ${renderAnatomySection()}
      ${renderTechSpecsSection()}
      ${renderVietnamServiceSection()}
      ${renderConclusionSection()}
      ${renderReferencesSection()}
    </main>
    ${renderFooter()}
  `;

  // Initialize interactive event listeners
  initHeaderEvents();
  initHistoryEvents();
  initAnatomyEvents();
  initFooterEvents();
  initScrollSpy();
  initBackToTop();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
