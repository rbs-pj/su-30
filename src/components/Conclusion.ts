import { su30Data } from '../data/su30.ts';

export function renderConclusionSection(): string {
  const { conclusion } = su30Data;

  return `
  <section class="conclusion-section" id="conclusion" aria-labelledby="conclusion-heading">
    <div class="conclusion-container">
      <div class="conclusion-card">
        <div class="conclusion-header">
          <span class="section-label">Section 08 — Giá Trị Lịch Sử & Quốc Phòng</span>
          <h2 class="section-title" id="conclusion-heading">Sức Mạnh Khí Tài, Bản Lĩnh Con Người & Khát Vọng Hòa Bình</h2>
        </div>

        <div class="conclusion-content-grid">
          <div class="conclusion-column">
            <h3 class="conclusion-subheading">Dấu Mốc Phát Triển Hàng Không Quân Sự</h3>
            <p class="conclusion-text">
              ${conclusion.historicalSignificance}
            </p>
          </div>

          <div class="conclusion-column">
            <h3 class="conclusion-subheading">Biểu Tượng Thế Trận Quốc Phòng Toàn Dân</h3>
            <p class="conclusion-text">
              ${conclusion.defenseValue}
            </p>
          </div>
        </div>

        <div class="closing-tribute-banner">
          <div class="tribute-quote-mark">“</div>
          <p class="tribute-quote-text">
            ${conclusion.closingStatement}
          </p>
          <div class="tribute-author">
            — HỘI ĐỒNG BIÊN TẬP DỰ ÁN GIÁO DỤC BẢO TÀNG SỐ VIỆT NAM
          </div>
        </div>
      </div>
    </div>
  </section>`;
}
