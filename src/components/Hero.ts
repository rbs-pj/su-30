import { su30Data } from '../data/su30.ts';

export function renderHeroSection(): string {
  const { aircraft, project } = su30Data;

  return `
  <section class="hero-section" id="hero" aria-labelledby="hero-title">
    <div class="hero-background-effects">
      <div class="hero-grid-mesh"></div>
      <div class="hero-glow-orb hero-glow-1"></div>
      <div class="hero-glow-orb hero-glow-2"></div>
      <div class="hero-telemetry">
        <span class="telemetry-item">LAT: 10°58'N // LONG: 106°49'E</span>
        <span class="telemetry-item">RADAR: ACTIVE AIRSPACE MONITORING</span>
        <span class="telemetry-item">AIRFRAME: SUKHOI FLANKER-G+</span>
      </div>
    </div>

    <div class="hero-container">
      <div class="hero-badge-group">
        <span class="museum-badge">${project.name}</span>
        <span class="theme-badge">${project.theme}</span>
      </div>

      <div class="hero-content">
        <h1 class="hero-title" id="hero-title">
          <span class="hero-code">${aircraft.designation}</span>
          <span class="hero-name">${aircraft.fullName}</span>
        </h1>
        <p class="hero-role-tag">${aircraft.role}</p>

        <p class="hero-lead">
          ${aircraft.introSummary}
        </p>

        <div class="hero-actions">
          <a href="#overview" class="btn btn-primary">
            <span>Khám Phá Hiện Vật</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
            </svg>
          </a>
          <a href="#anatomy" class="btn btn-outline">
            <span>Sơ Đồ Cấu Tạo 2D</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 8v8M8 12h8"/>
            </svg>
          </a>
        </div>
      </div>

      <!-- Quick Identification Ribbon -->
      <div class="hero-stats-ribbon" role="region" aria-label="Thông tin nhận diện nhanh hiện vật">
        <div class="stat-card">
          <span class="stat-label">Xuất Xứ Thiết Kế</span>
          <span class="stat-val">${aircraft.originCountry}</span>
          <span class="stat-sub">${aircraft.designBureau}</span>
        </div>
        <div class="stat-card">
          <span class="stat-label">Cơ Sở Chế Tạo</span>
          <span class="stat-val">Nhà Máy KnAAPO</span>
          <span class="stat-sub">Komsomolsk-on-Amur</span>
        </div>
        <div class="stat-card">
          <span class="stat-label">Cấu Hình Tổ Lái</span>
          <span class="stat-val">02 Người</span>
          <span class="stat-sub">Phi công & Sĩ quan điều phối</span>
        </div>
        <div class="stat-card">
          <span class="stat-label">Động Lực Đẩy</span>
          <span class="stat-val">2 × AL-31F</span>
          <span class="stat-sub">Tuốc-bin phản lực tăng lực</span>
        </div>
        <div class="stat-card">
          <span class="stat-label">Khối Lượng Cất Cánh Max</span>
          <span class="stat-val">34.500 kg</span>
          <span class="stat-sub">Rosoboronexport công bố</span>
        </div>
      </div>
    </div>
  </section>`;
}
