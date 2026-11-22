import { navSections } from './Header.ts';
import { su30Data } from '../data/su30.ts';

export function renderFooter(): string {
  const quickLinks = navSections
    .map(
      (item) => `
    <li>
      <a href="#${item.id}">
        <span style="color: var(--color-accent-gold); font-family: var(--font-mono); font-size: 11px;">${item.num}</span>
        <span>${item.label}</span>
      </a>
    </li>`
    )
    .join('');

  return `
  <footer class="footer-wrapper" id="site-footer">
    <div class="footer-container">
      <div class="footer-brand">
        <span class="footer-tag">${su30Data.project.theme}</span>
        <h3 class="footer-title">${su30Data.project.name}</h3>
        <p class="footer-desc">
          Công trình nghiên cứu và số hóa hiện vật hàng không quân sự phục vụ giáo dục quốc phòng toàn dân. Tổ chức nội dung khoa học, trực quan, tôn trọng dữ liệu lịch sử và kỹ thuật đã được kiểm chứng.
        </p>
        <div class="footer-disclaimer">
          <strong>Lưu ý học thuật:</strong> Website thuộc đề án giáo dục & nghiên cứu số hóa hiện vật "Em Là Nhà Sáng Tạo". Không phải là cổng thông tin điện tử chính thức của Bộ Quốc phòng hoặc Bảo tàng Phòng không – Không quân Việt Nam.
        </div>
      </div>

      <div class="footer-column">
        <h4 class="footer-col-title">Hồ Sơ Trưng Bày</h4>
        <ul class="footer-links">
          ${quickLinks}
        </ul>
      </div>

      <div class="footer-column">
        <h4 class="footer-col-title">Tư Liệu Xác Minh</h4>
        <ul class="footer-links">
          <li><a href="#references">Tài liệu kỹ thuật Rosoboronexport</a></li>
          <li><a href="#references">Nghiên cứu hàng không CNA</a></li>
          <li><a href="#references">Cơ sở dữ liệu ODIN Hoa Kỳ</a></li>
          <li><a href="#references">Tư liệu tiếp nhận VTC News</a></li>
          <li><a href="#references">Tư liệu Trung đoàn 935 & 927</a></li>
        </ul>
      </div>
    </div>

    <div class="footer-bottom">
      <div>
        © 2026 ${su30Data.project.name}. Mọi quyền bảo lưu nội dung giáo dục phi thương mại.
      </div>
      <button class="back-to-top-btn" id="back-to-top" aria-label="Quay lại đầu trang">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
        <span>Lên Đầu Trang</span>
      </button>
    </div>
  </footer>`;
}

export function initFooterEvents(): void {
  const backToTopBtn = document.getElementById('back-to-top');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}
