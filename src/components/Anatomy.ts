import { su30Data } from '../data/su30.ts';

export function renderAnatomySection(): string {
  const parts = su30Data.anatomyParts;

  // Render clickable hotspot pins on blueprint
  const hotspotPins = parts
    .map((part, index) => {
      const numStr = (index + 1).toString().padStart(2, '0');
      return `
      <button 
        class="hotspot-pin ${index === 0 ? 'active' : ''}" 
        style="left: ${part.xPercent}%; top: ${part.yPercent}%;"
        data-part-id="${part.id}"
        aria-label="Xem chi tiết ${part.vietnameseName}"
        title="${part.vietnameseName}"
      >
        <span class="hotspot-ring"></span>
        <span class="hotspot-core">${numStr}</span>
      </button>`;
    })
    .join('');

  // Render quick selector chips
  const selectorChips = parts
    .map((part, index) => {
      const numStr = (index + 1).toString().padStart(2, '0');
      return `
      <button 
        class="part-chip-btn ${index === 0 ? 'active' : ''}" 
        data-part-id="${part.id}"
      >
        ${numStr}. ${part.vietnameseName}
      </button>`;
    })
    .join('');

  const firstPart = parts[0];

  return `
  <section class="anatomy-section" id="anatomy" aria-labelledby="anatomy-heading">
    <div class="anatomy-container">
      <div class="section-header">
        <span class="section-label">Section 05 — Sơ Đồ Cấu Tạo Kỹ Thuật</span>
        <h2 class="section-title" id="anatomy-heading">Giải Phẫu Khí Động Học & Hệ Thống Động Lực Su-30MK2</h2>
        <p class="section-subtitle">
          Sơ đồ kỹ thuật 2D mô phỏng góc nhìn trên xuống (top-view), thể hiện 08 cụm bộ phận nền tảng cấu thành sức mạnh tác chiến và khả năng cơ động đa nhiệm của tiêm kích Su-30MK2.
        </p>
      </div>

      <div class="anatomy-display-grid">
        <!-- Blueprint Vector Display -->
        <div class="blueprint-canvas-wrapper" id="blueprint-canvas">
          <div class="blueprint-grid-overlay"></div>
          <div class="blueprint-reticle">TOP VIEW // SCALE 1:1 // SU-30MK2 BẢN VẼ KỸ THUẬT</div>
          <div class="blueprint-scale-tag">FLANKER-G+ // KnAAPO ARCHIVE</div>

          <!-- Precise Su-30MK2 SVG Silhouette & Schematics -->
          <svg class="blueprint-svg" viewBox="0 0 600 750" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bản vẽ kỹ thuật Su-30MK2">
            <defs>
              <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#1e293b" stop-opacity="0.8"/>
                <stop offset="100%" stop-color="#0f172a" stop-opacity="0.9"/>
              </linearGradient>
              <linearGradient id="engineGlow" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.2"/>
                <stop offset="100%" stop-color="#d4af37" stop-opacity="0.8"/>
              </linearGradient>
            </defs>

            <!-- Guide Reticle Lines -->
            <line x1="300" y1="20" x2="300" y2="730" stroke="rgba(56, 189, 248, 0.2)" stroke-dasharray="4 4" stroke-width="1"/>
            <line x1="40" y1="390" x2="560" y2="390" stroke="rgba(56, 189, 248, 0.2)" stroke-dasharray="4 4" stroke-width="1"/>
            <circle cx="300" cy="390" r="140" stroke="rgba(56, 189, 248, 0.1)" stroke-width="1"/>
            <circle cx="300" cy="390" r="240" stroke="rgba(56, 189, 248, 0.05)" stroke-width="1"/>

            <!-- Aircraft Silhouette (Su-30MK2 Airframe) -->
            <g id="aircraft-silhouette">
              <!-- Left and Right Stabilators (Tailplanes) -->
              <polygon points="170,620 230,600 240,680 140,680" fill="#111c2e" stroke="#38bdf8" stroke-width="1.5" opacity="0.85"/>
              <polygon points="430,620 370,600 360,680 460,680" fill="#111c2e" stroke="#38bdf8" stroke-width="1.5" opacity="0.85"/>

              <!-- Main Wings (Cropped Delta) -->
              <!-- Left Wing -->
              <polygon points="60,450 170,270 240,310 240,510 100,510" fill="url(#bodyGrad)" stroke="#38bdf8" stroke-width="1.8"/>
              <!-- Right Wing -->
              <polygon points="540,450 430,270 360,310 360,510 500,510" fill="url(#bodyGrad)" stroke="#38bdf8" stroke-width="1.8"/>

              <!-- Central Blended Fuselage, Nose and LERX -->
              <!-- Symmetrical path from radome tip down to tail -->
              <path d="
                M 300,50 
                C 303,80 308,120 312,170 
                C 318,220 335,260 360,310 
                L 360,570 
                C 360,585 350,600 338,600 
                L 338,640 
                L 315,640 
                L 315,670 
                C 315,675 308,680 300,680 
                C 292,680 285,675 285,670 
                L 285,640 
                L 262,640 
                L 262,600 
                C 250,600 240,585 240,570 
                L 240,310 
                C 265,260 282,220 288,170 
                C 292,120 297,80 300,50 Z" 
                fill="url(#bodyGrad)" stroke="#38bdf8" stroke-width="2"
              />

              <!-- Pitot Tube -->
              <line x1="300" y1="20" x2="300" y2="50" stroke="#d4af37" stroke-width="2.5"/>

              <!-- Tandem Cockpit Canopy (2 Seats) -->
              <path d="M 294,140 C 294,130 306,130 306,140 L 308,230 C 308,238 292,238 292,230 Z" fill="#060b13" stroke="#d4af37" stroke-width="1.8"/>
              <!-- Cockpit partition between pilot & WSO -->
              <line x1="293" y1="180" x2="307" y2="180" stroke="#d4af37" stroke-width="1.5"/>
              <!-- Front & Rear Pilot Helmets -->
              <circle cx="300" cy="160" r="4" fill="#d4af37" opacity="0.8"/>
              <circle cx="300" cy="205" r="4" fill="#38bdf8" opacity="0.8"/>

              <!-- OLS Sensor (Infrared Search and Track) on Starboard Nose -->
              <circle cx="308" cy="126" r="4.5" fill="#38bdf8" stroke="#d4af37" stroke-width="1.2"/>

              <!-- Twin Engine Nacelles (AL-31F) -->
              <!-- Left Engine Tunnel -->
              <rect x="252" y="380" width="34" height="200" rx="6" fill="#131e33" stroke="#38bdf8" stroke-width="1.5"/>
              <rect x="254" y="580" width="30" height="24" rx="2" fill="url(#engineGlow)" stroke="#d4af37" stroke-width="1.5"/>

              <!-- Right Engine Tunnel -->
              <rect x="314" y="380" width="34" height="200" rx="6" fill="#131e33" stroke="#38bdf8" stroke-width="1.5"/>
              <rect x="316" y="580" width="30" height="24" rx="2" fill="url(#engineGlow)" stroke="#d4af37" stroke-width="1.5"/>

              <!-- Central Sting / Tail Boom (Brake Chute Housing) -->
              <polygon points="288,570 312,570 308,665 292,665" fill="#1a273d" stroke="#38bdf8" stroke-width="1.2"/>

              <!-- Twin Vertical Tails (Fins) Outlines from Top -->
              <line x1="242" y1="460" x2="238" y2="580" stroke="#d4af37" stroke-width="3.5" stroke-linecap="round"/>
              <line x1="358" y1="460" x2="362" y2="580" stroke="#d4af37" stroke-width="3.5" stroke-linecap="round"/>

              <!-- Wing Pylons & Details -->
              <line x1="120" y1="440" x2="120" y2="515" stroke="rgba(56, 189, 248, 0.4)" stroke-width="1.5"/>
              <line x1="160" y1="400" x2="160" y2="515" stroke="rgba(56, 189, 248, 0.4)" stroke-width="1.5"/>
              <line x1="200" y1="360" x2="200" y2="515" stroke="rgba(56, 189, 248, 0.4)" stroke-width="1.5"/>

              <line x1="480" y1="440" x2="480" y2="515" stroke="rgba(56, 189, 248, 0.4)" stroke-width="1.5"/>
              <line x1="440" y1="400" x2="440" y2="515" stroke="rgba(56, 189, 248, 0.4)" stroke-width="1.5"/>
              <line x1="400" y1="360" x2="400" y2="515" stroke="rgba(56, 189, 248, 0.4)" stroke-width="1.5"/>

              <!-- Wingtip Launch Rails (Sorbtisya ECM or R-73 rails) -->
              <line x1="56" y1="445" x2="56" y2="475" stroke="#d4af37" stroke-width="2"/>
              <line x1="544" y1="445" x2="544" y2="475" stroke="#d4af37" stroke-width="2"/>
            </g>
          </svg>

          <!-- Interactive Hotspot Pins Overlay -->
          ${hotspotPins}
        </div>

        <!-- Detail Inspection Panel -->
        <div class="anatomy-inspection-panel" id="anatomy-detail-panel">
          <div class="anatomy-selector-chips" role="tablist" aria-label="Danh sách bộ phận Su-30MK2">
            ${selectorChips}
          </div>

          <div class="anatomy-card" id="part-detail-card" role="tabpanel">
            <div class="part-badge-row">
              <span class="part-num-badge" id="card-part-num">01 / 08</span>
              <span class="part-cat-tag" id="card-part-cat">CẤU TRÚC KHÍ ĐỘNG</span>
            </div>

            <div class="part-title-group">
              <h3 class="part-title-vi" id="card-part-vi">${firstPart.vietnameseName}</h3>
              <div class="part-title-en" id="card-part-en">${firstPart.name}</div>
            </div>

            <p class="part-summary" id="card-part-summary">
              ${firstPart.shortDesc}
            </p>

            <div class="part-detail-box">
              <p class="part-detail-text" id="card-part-desc">
                ${firstPart.detailedFunction}
              </p>
              <div class="part-tactical-value" id="card-part-tactical">
                <strong>Ý nghĩa kỹ thuật:</strong> ${firstPart.tacticalSignificance}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>`;
}

export function initAnatomyEvents(): void {
  const parts = su30Data.anatomyParts;
  const hotspotPins = document.querySelectorAll<HTMLButtonElement>('.hotspot-pin');
  const chipBtns = document.querySelectorAll<HTMLButtonElement>('.part-chip-btn');

  const cardNum = document.getElementById('card-part-num');
  const cardVi = document.getElementById('card-part-vi');
  const cardEn = document.getElementById('card-part-en');
  const cardSummary = document.getElementById('card-part-summary');
  const cardDesc = document.getElementById('card-part-desc');
  const cardTactical = document.getElementById('card-part-tactical');

  function selectPart(partId: string): void {
    const partIndex = parts.findIndex((p) => p.id === partId);
    if (partIndex === -1) return;

    const part = parts[partIndex];
    const numStr = (partIndex + 1).toString().padStart(2, '0');

    // Update active states
    hotspotPins.forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.partId === partId);
    });
    chipBtns.forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.partId === partId);
    });

    // Update Card Content with smooth update
    if (cardNum) cardNum.textContent = `${numStr} / 08`;
    if (cardVi) cardVi.textContent = part.vietnameseName;
    if (cardEn) cardEn.textContent = part.name;
    if (cardSummary) cardSummary.textContent = part.shortDesc;
    if (cardDesc) cardDesc.textContent = part.detailedFunction;
    if (cardTactical) {
      cardTactical.innerHTML = `<strong>Ý nghĩa kỹ thuật:</strong> ${part.tacticalSignificance}`;
    }
  }

  hotspotPins.forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.partId;
      if (id) selectPart(id);
    });
  });

  chipBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.partId;
      if (id) selectPart(id);
    });
  });
}
