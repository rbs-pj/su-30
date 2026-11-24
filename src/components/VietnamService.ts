import { su30Data } from '../data/su30.ts';

export function renderVietnamServiceSection(): string {
  const { vietnamService } = su30Data;

  const unitCards = vietnamService.units
    .map(
      (unit) => `
    <div class="service-unit-card">
      <div class="unit-card-header">
        <span class="unit-regiment">${unit.regiment}</span>
        <span class="unit-division">${unit.division}</span>
        <span class="unit-location">Căn cứ: ${unit.location}</span>
      </div>
      <div class="unit-body">
        <div class="unit-mission-block">
          <strong>Trọng trách tác chiến:</strong>
          <p>${unit.mission}</p>
        </div>
        <div class="unit-training-block">
          <strong>Huấn luyện & Chuyển loại:</strong>
          <p>${unit.trainingRole}</p>
        </div>
      </div>
      <div class="unit-footer">
        <span class="doc-badge">Nguồn xác minh: ${unit.referenceDoc}</span>
      </div>
    </div>`
    )
    .join('');

  return `
  <section class="vietnam-section" id="vietnam" aria-labelledby="vietnam-heading">
    <div class="vietnam-container">
      <div class="section-header">
        <span class="section-label">Section 07 — Hiện Diện Tại Việt Nam</span>
        <h2 class="section-title" id="vietnam-heading">Su-30MK2 & Không Quân Nhân Dân Việt Nam</h2>
        <p class="section-subtitle">
          Dấu ấn bước ngoặt trong lộ trình hiện đại hóa lực lượng phòng thủ đường không và bảo vệ toàn vẹn chủ quyền biển đảo thiêng liêng của Tổ quốc trong thế kỷ XXI.
        </p>
      </div>

      <!-- Historical Modernization Narrative -->
      <div class="vietnam-editorial-layout">
        <div class="editorial-col main-narrative">
          <h3 class="narrative-heading">Bước Chuyển Mình Của Lực Lượng Không Quân Thế Kỷ XXI</h3>
          <p class="narrative-p">
            ${vietnamService.overview}
          </p>
          <p class="narrative-p">
            ${vietnamService.inductionProcess}
          </p>

          <div class="induction-callout">
            <div class="callout-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                <line x1="12" y1="22.08" x2="12" y2="12"/>
              </svg>
            </div>
            <div class="callout-text">
              <strong>Vận chuyển & Bàn giao bằng An-124 Ruslan:</strong> Những chiếc tiêm kích Su-30 đầu tiên vượt hàng ngàn cây số trong khoang hàng vận tải cơ khổng lồ An-124, được lắp ráp và cân chỉnh tỉ mỉ tại sân bay quân sự Việt Nam dưới sự hiệp đồng giữa kỹ sư hai nước.
            </div>
          </div>
        </div>

        <div class="editorial-col human-focus">
          <div class="human-factor-card">
            <span class="pillar-label">Yếu Tố Quyết Định</span>
            <h3 class="pillar-heading">Hiện Đại Hóa Trang Bị Đi Đôi Với Hiện Đại Hóa Con Người</h3>
            <p class="pillar-body">
              ${vietnamService.humanFactor}
            </p>
            <div class="human-metrics">
              <div class="metric-item">
                <span class="metric-num">100%</span>
                <span class="metric-desc">Tự chủ quy trình bảo dưỡng kỹ thuật định kỳ</span>
              </div>
              <div class="metric-item">
                <span class="metric-num">Thường Xuyên</span>
                <span class="metric-desc">Kiểm tra phân cấp kỹ thuật phi công theo quy chuẩn nghiêm ngặt</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Frontline Regiments Showcase -->
      <div class="units-showcase-section">
        <h3 class="units-section-title">Các Đơn Vị Không Quân Nòng Cốt Trực Tiếp Làm Chủ Khí Tài</h3>
        <div class="units-grid">
          ${unitCards}
        </div>
      </div>
    </div>
  </section>`;
}
