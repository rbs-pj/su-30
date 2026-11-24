import { su30Data } from '../data/su30.ts';

export function renderReferencesSection(): string {
  const { references } = su30Data;

  const referenceCards = references
    .map(
      (ref) => `
    <article class="reference-item-card" id="ref-${ref.id}">
      <div class="ref-header">
        <span class="ref-index">NGUỒN 0${ref.id}</span>
        <span class="ref-date">${ref.date}</span>
      </div>
      <h3 class="ref-title">${ref.title}</h3>
      <div class="ref-publisher">
        <strong>Xuất bản:</strong> ${ref.authorOrPublisher}
      </div>
      <p class="ref-description">${ref.description}</p>
      <div class="ref-link-action">
        <a 
          href="${ref.url}" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="ref-external-link"
          aria-label="Truy cập nguồn tài liệu ${ref.title} (mở tab mới)"
        >
          <span>${ref.linkText}</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
            <polyline points="15 3 21 3 21 9"/>
            <line x1="10" y1="14" x2="21" y2="3"/>
          </svg>
        </a>
      </div>
    </article>`
    )
    .join('');

  return `
  <section class="references-section" id="references" aria-labelledby="references-heading">
    <div class="references-container">
      <div class="section-header">
        <span class="section-label">Section 09 — Tài Liệu Tham Khảo</span>
        <h2 class="section-title" id="references-heading">Hệ Thống Thư Tịch & Nguồn Dữ Liệu Kiểm Chứng</h2>
        <p class="section-subtitle">
          Toàn bộ luận cứ lịch sử, phân định biến thể, thông số kỹ thuật và quá trình tiếp nhận của Không quân Nhân dân Việt Nam được bảo đảm tính khoa học thông qua 08 nguồn tài liệu gốc có thẩm quyền.
        </p>
      </div>

      <div class="references-grid">
        ${referenceCards}
      </div>

      <div class="references-ethics-footer">
        <div class="ethics-badge">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"/>
            <polyline points="12 6 12 12 14 14"/>
          </svg>
          <span>Tiêu Chuẩn Học Thuật Bảo Tàng</span>
        </div>
        <p class="ethics-text">
          Dự án tuân thủ nghiêm ngặt chuẩn mực trích dẫn tư liệu lịch sử hàng không. Mọi liên kết tham chiếu đều dẫn trực tiếp đến các ấn phẩm, công trình nghiên cứu và cơ quan báo chí chính thống.
        </p>
      </div>
    </div>
  </section>`;
}
