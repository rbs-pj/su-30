export interface NavSection {
  id: string;
  num: string;
  label: string;
}

export const navSections: NavSection[] = [
  { id: 'hero', num: '01', label: 'Hiện Vật' },
  { id: 'overview', num: '02', label: 'Tổng Quan' },
  { id: 'history', num: '03', label: 'Lịch Sử' },
  { id: 'roles', num: '04', label: 'Vai Trò' },
  { id: 'anatomy', num: '05', label: 'Cấu Tạo' },
  { id: 'specs', num: '06', label: 'Thông Số' },
  { id: 'vietnam', num: '07', label: 'Việt Nam' },
  { id: 'conclusion', num: '08', label: 'Ý Nghĩa' },
  { id: 'references', num: '09', label: 'Tài Liệu' }
];

export function renderHeader(): string {
  const desktopLinks = navSections
    .map(
      (item) => `
    <a href="#${item.id}" class="nav-link" data-section="${item.id}">
      <span class="nav-num">${item.num}</span>
      <span>${item.label}</span>
    </a>`
    )
    .join('');

  const mobileLinks = navSections
    .map(
      (item) => `
    <a href="#${item.id}" class="mobile-nav-link" data-section="${item.id}">
      <span class="nav-num">${item.num}</span>
      <span>${item.label}</span>
    </a>`
    )
    .join('');

  return `
  <header class="header-wrapper" id="main-header">
    <div class="scroll-progress-bar" id="scroll-progress" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"></div>
    <div class="header-container">
      <a href="#hero" class="brand-emblem" aria-label="Về đầu trang hồ sơ Su-30MK2">
        <div class="brand-icon">
          <svg width="22" height="22" viewBox="0 0 100 100" fill="currentColor">
            <path d="M50 5 L55 35 L85 60 L85 68 L56 55 L56 82 L68 90 L68 95 L50 90 L32 95 L32 90 L44 82 L44 55 L15 68 L15 60 L45 35 Z"/>
          </svg>
        </div>
        <div class="brand-text">
          <span class="brand-tag">Bảo Tàng Kỹ Thuật Số</span>
          <span class="brand-title">SUKHOI SU-30MK2</span>
        </div>
      </a>

      <nav class="desktop-nav" aria-label="Điều hướng các khu vực trưng bày">
        ${desktopLinks}
      </nav>

      <button class="mobile-toggle-btn" id="mobile-menu-btn" aria-label="Mở bảng chọn điều hướng" aria-expanded="false" aria-controls="mobile-drawer">
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
      </button>
    </div>

    <div class="mobile-drawer" id="mobile-drawer" aria-hidden="true">
      ${mobileLinks}
    </div>
  </header>`;
}

export function initHeaderEvents(): void {
  const header = document.getElementById('main-header');
  const progressBar = document.getElementById('scroll-progress');
  const toggleBtn = document.getElementById('mobile-menu-btn');
  const drawer = document.getElementById('mobile-drawer');

  // Scroll Progress
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
    if (progressBar) {
      progressBar.style.width = `${progress}%`;
      progressBar.setAttribute('aria-valuenow', Math.round(progress).toString());
    }
  }, { passive: true });

  // Mobile drawer toggle
  if (toggleBtn && drawer) {
    const toggleMenu = (open?: boolean) => {
      const isOpen = open !== undefined ? open : !drawer.classList.contains('open');
      drawer.classList.toggle('open', isOpen);
      toggleBtn.setAttribute('aria-expanded', isOpen.toString());
      drawer.setAttribute('aria-hidden', (!isOpen).toString());
      document.body.style.overflow = isOpen ? 'hidden' : '';
    };

    toggleBtn.addEventListener('click', () => toggleMenu());

    // Close on mobile link click
    drawer.querySelectorAll('.mobile-nav-link').forEach((link) => {
      link.addEventListener('click', () => toggleMenu(false));
    });

    // Close on Esc key
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && drawer.classList.contains('open')) {
        toggleMenu(false);
      }
    });
  }
}
