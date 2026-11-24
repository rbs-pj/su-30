import { su30Data } from '../data/su30.ts';

export function renderRoleMissionSection(): string {
  const { roles } = su30Data;

  const roleCards = roles
    .map((role, idx) => {
      const pointsList = role.points.map((pt) => `<li>${pt}</li>`).join('');

      return `
      <article class="role-card" data-role-id="${role.id}">
        <div class="role-card-header">
          <span class="role-number">VAI TRÒ 0${idx + 1}</span>
          <h3 class="role-title">${role.title}</h3>
          <span class="role-subtitle">${role.subtitle}</span>
        </div>
        <p class="role-description">${role.description}</p>
        <div class="role-points-box">
          <span class="points-header">Đặc điểm thực thi nhiệm vụ:</span>
          <ul class="role-points-list">
            ${pointsList}
          </ul>
        </div>
      </article>`;
    })
    .join('');

  return `
  <section class="role-section" id="roles" aria-labelledby="roles-heading">
    <div class="role-container">
      <div class="section-header">
        <span class="section-label">Section 04 — Công Dụng & Vai Trò</span>
        <h2 class="section-title" id="roles-heading">Bản Chất Tiêm Kích Đa Năng Trong Chiến Lược Phòng Thủ</h2>
        <p class="section-subtitle">
          Khám phá khái niệm tiêm kích đa nhiệm (Multirole Fighter) và cách Su-30MK2 đáp ứng đồng thời yêu cầu bảo vệ không phận, bao quát vùng biển đảo và bồi dưỡng nhân lực hàng không.
        </p>
      </div>

      <div class="roles-grid">
        ${roleCards}
      </div>

      <!-- Integrated National Defense Highlight -->
      <div class="defense-synergy-banner">
        <div class="synergy-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            <path d="M9 12l2 2 4-4"/>
          </svg>
        </div>
        <div class="synergy-content">
          <h4 class="synergy-title">Sức Mạnh Hiệp Đồng Trong Hệ Thống Phòng Thủ Quốc Gia</h4>
          <p class="synergy-text">
            Bảo vệ chủ quyền không phận và lãnh hải Tổ quốc không dựa vào riêng rẽ bất kỳ một loại vũ khí nào. Su-30MK2 phát huy tối đa hiệu quả khi hoạt động trong thế trận liên hoàn, hiệp đồng chặt chẽ với lực lượng Ra-đa Cảnh giới, Tên lửa Phòng không, Pháo cao xạ, lực lượng Hải quân Nhân dân, Cảnh sát biển và thế trận quốc phòng toàn dân.
          </p>
        </div>
      </div>
    </div>
  </section>`;
}
