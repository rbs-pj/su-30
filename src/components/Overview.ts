import { su30Data } from '../data/su30.ts';

export function renderOverviewSection(): string {
  const { aircraft } = su30Data;

  return `
  <section class="overview-section" id="overview" aria-labelledby="overview-heading">
    <div class="overview-container">
      <div class="section-header">
        <span class="section-label">Section 02 — Tổng Quan Hiện Vật</span>
        <h2 class="section-title" id="overview-heading">Hồ Sơ Nhận Diện Tiêm Kích Su-30MK2</h2>
        <p class="section-subtitle">
          Tìm hiểu nguồn gốc thiết kế, giải mã hệ thống định danh kỹ thuật và phân biệt chuẩn xác biến thể Su-30MK2 với các dòng tiêm kích khác trong gia đình Su-30.
        </p>
      </div>

      <div class="overview-grid">
        <!-- Artifact ID Dossier Card -->
        <div class="dossier-card">
          <div class="dossier-header">
            <div class="dossier-stamp">ARCHIVE // VPAF-SU30</div>
            <div class="dossier-code">REF-DOC: ROSOBORON-MK2</div>
          </div>
          <h3 class="dossier-title">Chứng Minh Thư Hiện Vật Hàng Không</h3>

          <div class="dossier-specs-list">
            <div class="dossier-item">
              <span class="d-label">Tên gọi quốc tế:</span>
              <span class="d-value">Sukhoi Su-30MK2 (Flanker-G+)</span>
            </div>
            <div class="dossier-item">
              <span class="d-label">Phân loại kỹ thuật:</span>
              <span class="d-value">${aircraft.role}</span>
            </div>
            <div class="dossier-item">
              <span class="d-label">Phòng thiết kế gốc:</span>
              <span class="d-value">${aircraft.designBureau}</span>
            </div>
            <div class="dossier-item">
              <span class="d-label">Cơ sở sản xuất:</span>
              <span class="d-value">${aircraft.manufacturer}</span>
            </div>
            <div class="dossier-item">
              <span class="d-label">Tổ hợp động lực:</span>
              <span class="d-value">${aircraft.engines}</span>
            </div>
            <div class="dossier-item">
              <span class="d-label">Biến thể tại Việt Nam:</span>
              <span class="d-value">Su-30MK2 (Không quân Nhân dân Việt Nam)</span>
            </div>
          </div>

          <div class="dossier-footer">
            <p class="dossier-note">
              * Dữ liệu trích xuất từ tài liệu giới thiệu chính thức của Rosoboronexport và hồ sơ lịch sử hàng không quân sự.
            </p>
          </div>
        </div>

        <!-- Editorial Context & Etymology -->
        <div class="overview-editorial">
          <div class="editorial-block">
            <h3 class="block-title">Giải Mã Danh Xưng "SU-30MK2"</h3>
            <div class="etymology-items">
              <div class="etymology-box">
                <span class="etymology-term">SU</span>
                <p class="etymology-desc">${aircraft.nameEtymology.su}</p>
              </div>
              <div class="etymology-box">
                <span class="etymology-term">30</span>
                <p class="etymology-desc">${aircraft.nameEtymology.number}</p>
              </div>
              <div class="etymology-box">
                <span class="etymology-term">MK2</span>
                <p class="etymology-desc">${aircraft.nameEtymology.mk2}</p>
              </div>
            </div>
          </div>

          <!-- Crucial Variants Distinction Box -->
          <div class="variants-distinction-box">
            <div class="warning-badge">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
              </svg>
              <span>Nguyên Tắc Phân Biệt Biến Thể</span>
            </div>
            <h4 class="distinction-heading">Không Đánh Đồng Su-30MK2 Với Các Phiên Bản Khác</h4>
            <p class="distinction-body">
              ${aircraft.nameEtymology.variantsDistinction}
            </p>
            <div class="variant-comparisons">
              <div class="v-pill">
                <strong>Su-30MK2</strong>: Nhánh KnAAPO, không cánh mũi, tối ưu hải quân & xuất khẩu.
              </div>
              <div class="v-pill">
                <strong>Su-30MKI</strong>: Nhánh Irkut (Ấn Độ), có cánh mũi (canards), động cơ vector lực đẩy AL-31FP.
              </div>
              <div class="v-pill">
                <strong>Su-30SM</strong>: Biến thể nội địa Nga phát triển từ khung thân MKI cho Không quân Nga.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>`;
}
