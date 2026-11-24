import { su30Data } from '../data/su30.ts';

export function renderHistoryTimelineSection(): string {
  const { timeline } = su30Data;

  const timelineItems = timeline
    .map((item, index) => {
      const scopeBadge =
        item.scope === 'vietnam'
          ? '<span class="timeline-badge badge-vn">Dấu ấn Không quân Việt Nam</span>'
          : '<span class="timeline-badge badge-world">Phát triển Quốc tế</span>';

      return `
      <div class="timeline-node ${item.scope === 'vietnam' ? 'node-vn' : 'node-world'}" data-scope="${item.scope}">
        <div class="timeline-marker">
          <div class="marker-dot">
            <span class="dot-inner"></span>
          </div>
          <span class="timeline-period">${item.period}</span>
        </div>

        <div class="timeline-card">
          <div class="card-meta">
            ${scopeBadge}
            <span class="node-index">Mốc ${index + 1}/6</span>
          </div>
          <h3 class="timeline-node-title">${item.title}</h3>
          <p class="timeline-node-summary">${item.summary}</p>
          <div class="timeline-node-details">
            <p>${item.details}</p>
          </div>
          <div class="timeline-node-takeaway">
            <strong>Ý nghĩa trọng yếu:</strong> ${item.keyTakeaway}
          </div>
        </div>
      </div>`;
    })
    .join('');

  return `
  <section class="history-section" id="history" aria-labelledby="history-heading">
    <div class="history-container">
      <div class="section-header">
        <span class="section-label">Section 03 — Hành Trình Lịch Sử</span>
        <h2 class="section-title" id="history-heading">Từ Khởi Nguyên Su-27 Đến Bầu Trời Việt Nam</h2>
        <p class="section-subtitle">
          Biên niên sử phát triển liên tục: sự chuyển hóa từ tiêm kích đánh chặn Liên Xô sang nền tảng tiêm kích đa nhiệm xuất khẩu, và hành trình trang bị, làm chủ Su-30 tại Việt Nam.
        </p>

        <!-- Scope Filter Tabs -->
        <div class="timeline-filters" role="tablist" aria-label="Bộ lọc dòng thời gian">
          <button class="filter-tab active" data-filter="all" role="tab" aria-selected="true">
            Tất Cả Mốc Lịch Sử (06)
          </button>
          <button class="filter-tab" data-filter="world" role="tab" aria-selected="false">
            Lịch Sử Quốc Tế (03)
          </button>
          <button class="filter-tab" data-filter="vietnam" role="tab" aria-selected="false">
            Hành Trình Tại Việt Nam (03)
          </button>
        </div>
      </div>

      <div class="timeline-tree-wrapper">
        <div class="timeline-spine"></div>
        <div class="timeline-nodes-container" id="timeline-nodes">
          ${timelineItems}
        </div>
      </div>

      <!-- Critical Historical Cautionary Note -->
      <div class="history-methodology-note">
        <div class="note-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"/>
            <line x1="12" y1="16" x2="12" y2="12"/>
            <line x1="12" y1="8" x2="12.01" y2="8"/>
          </svg>
        </div>
        <div class="note-content">
          <h4>Ghi Chú Về Định Danh Lịch Sử</h4>
          <p>
            Các nguồn tư liệu báo chí công khai có sự khác biệt nhỏ về cách gọi lô 4 máy bay đầu tiên chuyển giao năm 2004 (một số nguồn gọi là Su-30MK, các lô sau là Su-30MK2; trong khi VTC News năm 2024 gọi toàn bộ 36 chiếc là Su-30MK2). Để bảo đảm tính chính xác khoa học lịch sử khi chưa có hồ sơ gốc giải mật, bảo tàng ghi nhận thận trọng lô đầu tiên là <em>"những máy bay đầu tiên thuộc dòng Su-30"</em>.
          </p>
        </div>
      </div>
    </div>
  </section>`;
}

export function initHistoryEvents(): void {
  const filterBtns = document.querySelectorAll<HTMLButtonElement>('.timeline-filters .filter-tab');
  const nodes = document.querySelectorAll<HTMLElement>('.timeline-node');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const filter = btn.dataset.filter || 'all';

      nodes.forEach((node) => {
        const scope = node.dataset.scope;
        if (filter === 'all' || filter === scope) {
          node.style.display = 'grid';
          node.classList.add('fade-in');
        } else {
          node.style.display = 'none';
        }
      });
    });
  });
}
