import { su30Data } from '../data/su30.ts';

export function renderTechSpecsSection(): string {
  const { specs } = su30Data;

  const tableRows = specs
    .map(
      (spec) => `
    <tr class="spec-table-row">
      <td class="spec-col-param">
        <span class="param-title">${spec.parameter}</span>
      </td>
      <td class="spec-col-value">
        <span class="value-highlight">${spec.value}</span>
      </td>
      <td class="spec-col-meaning">
        <span class="meaning-text">${spec.meaning}</span>
      </td>
    </tr>`
    )
    .join('');

  return `
  <section class="specs-section" id="specs" aria-labelledby="specs-heading">
    <div class="specs-container">
      <div class="section-header">
        <span class="section-label">Section 06 — Đặc Điểm Kỹ Thuật</span>
        <h2 class="section-title" id="specs-heading">Thông Số Nhận Diện Cấu Hình Tiêu Biểu</h2>
        <p class="section-subtitle">
          Bảng dữ liệu trích xuất trực tiếp từ tài liệu công bố chính thức của Rosoboronexport, ưu tiên các chỉ số nhận diện cấu hình nền tảng đã được kiểm chứng khoa học.
        </p>
      </div>

      <!-- Quick Infographic Cards -->
      <div class="specs-visual-cards">
        <div class="visual-card">
          <div class="vcard-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
          </div>
          <span class="vcard-value">02</span>
          <span class="vcard-label">Thành Viên Tổ Lái</span>
          <span class="vcard-sub">Bố trí buồng lái nối tiếp (Tandem)</span>
        </div>

        <div class="visual-card">
          <div class="vcard-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="3"/>
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
            </svg>
          </div>
          <span class="vcard-value">2 × AL-31F</span>
          <span class="vcard-label">Động Cơ Phản Lực</span>
          <span class="vcard-sub">Tuốc-bin 2 luồng có buồng đốt tăng lực</span>
        </div>

        <div class="visual-card">
          <div class="vcard-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
            </svg>
          </div>
          <span class="vcard-value">34.500 kg</span>
          <span class="vcard-label">Khối Lượng Cất Cánh Max</span>
          <span class="vcard-sub">Trọng tải cất cánh tối đa công bố</span>
        </div>
      </div>

      <!-- Main Specifications Table -->
      <div class="table-responsive-wrapper">
        <table class="specs-table" aria-label="Bảng thông số kỹ thuật máy bay Su-30MK2">
          <thead>
            <tr>
              <th scope="col" style="width: 25%;">Tên Thông Số</th>
              <th scope="col" style="width: 25%;">Giá Trị Chuẩn Xác</th>
              <th scope="col" style="width: 50%;">Ý Nghĩa Kỹ Thuật & Khai Thác</th>
            </tr>
          </thead>
          <tbody>
            ${tableRows}
          </tbody>
        </table>
      </div>

      <!-- Verification Notice -->
      <div class="specs-footer-notice">
        <p>
          <strong>Nguyên tắc kiểm chứng:</strong> Các thông số trên áp dụng riêng cho cấu hình nguyên mẫu Su-30MK2 xuất xưởng từ Rosoboronexport. Bảo tàng kiên quyết không tự ý bổ sung các thông số trần bay, tốc độ Mach, tầm bay không đối chứng hoặc suy đoán từ các biến thể Su-30MKI / Su-30SM.
        </p>
      </div>
    </div>
  </section>`;
}
