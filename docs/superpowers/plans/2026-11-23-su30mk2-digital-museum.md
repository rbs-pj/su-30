# Su-30MK2 Digital Military Museum Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Xây dựng và triển khai website bảo tàng số hiện vật tiêm kích Su-30MK2 Không quân Nhân dân Việt Nam ("EM LÀ NHÀ SÁNG TẠO – BẢO TÀNG QUỐC PHÒNG VIỆT NAM") lên GitHub Pages tại repo `rbs-pj/su-30`.

**Architecture:** Website tĩnh SPA hướng biên tập triển lãm số (Contemporary Military Museum × Aviation Editorial), xây dựng bằng Vite + TypeScript + Native CSS Modules / CSS Variables. Toàn bộ nội dung dữ liệu biên tập tách biệt trong `src/data/su30.ts` dựa trên tài liệu chuẩn `SU30.docx`. Sơ đồ cấu tạo tương tác 2D SVG vector có 8 điểm hotspot tương tác.

**Tech Stack:** Vite, TypeScript, Vanilla DOM / Modern CSS (Grid/Flexbox/CSS Custom Properties), SVG vector visualization, GitHub Actions (`actions/upload-pages-artifact@v3`, `actions/deploy-pages@v4`), GitHub Pages.

**Spec:** `extracted_su30_content.txt` và Master Prompt đính kèm.

## Global Constraints

- Không sửa đổi thông tin lịch sử hoặc bịa đặt số liệu kỹ thuật. Chỉ dùng dữ liệu Rosoboronexport, CNA, ODIN, Báo QĐND từ văn bản nguồn.
- Không đồng nhất Su-30MK2 với Su-30MKI, Su-30SM hay Su-30MKK.
- Thiết kế chuẩn bảo tàng số editorial: Palette Midnight Navy (`#080e18`), Slate (`#15202e`), Ivory (`#f1f5f9`), Metallic Champagne (`#d4af37`), Steel Blue (`#38bdf8`).
- Chuẩn Responsive trên điện thoại (360px–430px), tablet (768px–1024px), laptop (1280px–1440px), màn hình lớn (1600px+).
- Hỗ trợ đầy đủ `prefers-reduced-motion` và accessibility (WCAG AA tương phản màu sắc, semantic HTML).
- Tương thích đường dẫn GitHub Pages subpath: `base: '/su-30/'`.
- Deploy qua GitHub Actions lên GitHub Pages; repo `rbs-pj/su-30`.

## Review Focus

- **GitHub Pages Subpath Assets:** Đường dẫn assets, favicons, internal anchor links phải chạy đúng khi base URL là `/su-30/`.
- **Anatomy SVG Hotspot Interaction:** Nhấn vào từng điểm (mũi, buồng lái, cánh, đuôi đứng, đuôi ngang, cửa hút khí, động cơ AL-31F, càng đáp) hiển thị thẻ thông tin tương ứng chuẩn xác trên cả màn hình cảm ứng điện thoại và chuột máy tính.
- **Data Fidelity:** 100% nội dung và 8 liên kết tham khảo giữ nguyên nguồn gốc và URL xác minh.
- **Zero Framework Bloat:** Không cài framework nặng; bundle build gọn dưới 200KB JS/CSS.
- **Responsive Mobile Navigation:** Menu đóng/mở mượt mà trên màn hình nhỏ, khóa cuộn khi mở menu, tự đóng khi click liên kết.

---

### Task 1: Scaffolding Dự Án Vite + TypeScript & Base Config

**Files:**
- Create: `package.json`
- Create: `tsconfig.json`
- Create: `vite.config.ts`
- Create: `index.html`
- Create: `src/main.ts`
- Create: `src/styles/theme.css`

- [ ] **Step 1: Khởi tạo package.json và cài đặt Vite, TypeScript**
- [ ] **Step 2: Cấu hình `vite.config.ts` với `base: '/su-30/'`**
- [ ] **Step 3: Cấu hình theme CSS variables (Midnight Navy, Champagne, Typography)**
- [ ] **Step 4: Chạy `npm run build` kiểm tra scaffold**
- [ ] **Step 5: Git commit scaffold**

---

### Task 2: Cấu Trúc Hóa Dữ Liệu Hồ Sơ Hiện Vật (`src/data/su30.ts`)

**Files:**
- Create: `src/types.ts`
- Create: `src/data/su30.ts`
- Test: `tests/data.test.ts`

- [ ] **Step 1: Định nghĩa types cho Timeline, AnatomyPart, SpecItem, Reference, ExhibitData**
- [ ] **Step 2: Chuyển toàn bộ 6 chương và 8 tài liệu tham khảo từ `extracted_su30_content.txt` vào `src/data/su30.ts`**
- [ ] **Step 3: Viết test kiểm tra tính toàn vẹn của dữ liệu (đủ 8 hotspot, đủ 8 tài liệu tham khảo, đủ 6 mốc lịch sử)**
- [ ] **Step 4: Chạy test xác nhận dữ liệu chuẩn**
- [ ] **Step 5: Commit dữ liệu**

---

### Task 3: Hệ Thống Giao Diện & Điều Hướng (Navigation & Header)

**Files:**
- Create: `src/components/Header.ts`
- Create: `src/components/Footer.ts`
- Create: `src/styles/header.css`
- Create: `src/styles/footer.css`

- [ ] **Step 1: Xây dựng Sticky Header với logo dự án "BẢO TÀNG QUỐC PHÒNG VIỆT NAM", danh sách 8 section, scroll indicator**
- [ ] **Step 2: Xây dựng Mobile Drawer Navigation có toggle icon, xử lý phím Esc và click ngoài**
- [ ] **Step 3: Xây dựng Footer bảo tàng với ghi công, nhận diện chuyên đề và liên kết điều hướng**
- [ ] **Step 4: Xây dựng nút Back-to-top xuất hiện khi cuộn qua 400px**
- [ ] **Step 5: Commit layout & navigation**

---

### Task 4: Sơ Đồ Cấu Tạo Vector Tương Tác (Anatomy Component)

**Files:**
- Create: `src/components/Anatomy.ts`
- Create: `src/styles/anatomy.css`

- [ ] **Step 1: Xây dựng bản vẽ kỹ thuật SVG vector Su-30MK2 (silhouette top-view khí động học 2 động cơ, cánh delta xuôi, 2 đuôi đứng, buồng lái đôi)**
- [ ] **Step 2: Đặt 8 hotspot tương tác với tọa độ chính xác: Mũi & thân, Buồng lái 2 chỗ, Cánh chính, 2 Đuôi đứng, Đuôi ngang, 2 Cửa hút khí, 2 Động cơ phản lực AL-31F, Càng đáp**
- [ ] **Step 3: Tích hợp bảng thông tin động khi click/hover vào hotspot (tiêu đề, vai trò kỹ thuật, ghi chú chuyên sâu)**
- [ ] **Step 4: Tối ưu tương thích cho mobile touch (danh sách tab/chip hỗ trợ lựa chọn bộ phận trực tiếp)**
- [ ] **Step 5: Commit Anatomy component**

---

### Task 5: Triển Khai Toàn Bộ Các Section Triển Lãm Editorial

**Files:**
- Create: `src/components/Hero.ts`
- Create: `src/components/Overview.ts`
- Create: `src/components/HistoryTimeline.ts`
- Create: `src/components/RoleMission.ts`
- Create: `src/components/TechSpecs.ts`
- Create: `src/components/VietnamService.ts`
- Create: `src/components/Conclusion.ts`
- Create: `src/components/References.ts`
- Create: `src/styles/sections.css`

- [ ] **Step 1: Section 01 - Hero: Banner điện ảnh, tiêu đề SU-30MK2, quick badges, dẫn nhập**
- [ ] **Step 2: Section 02 - Overview: Thẻ hồ sơ hiện vật bảo tàng (định danh, xuất xứ, nhà máy KnAAPO)**
- [ ] **Step 3: Section 03 - History: Interactive Vertical Timeline từ Su-27 -> Su-30MKK -> Su-30MK2 -> Lô 2004 đến 2016 tại Việt Nam**
- [ ] **Step 4: Section 04 - Role & Mission: Bố cục tạp chí quân sự về nhiệm vụ bảo vệ vùng trời, tuần tra biển đảo**
- [ ] **Step 5: Section 06 - Technical Specs: Infographic bảng dữ liệu kỹ thuật Rosoboronexport**
- [ ] **Step 6: Section 07 - Vietnam Service: Trung đoàn 935, Trung đoàn 927, công tác kỹ thuật, con người làm chủ trang bị**
- [ ] **Step 7: Section 08 - Conclusion: Đánh giá giá trị lịch sử và hiện đại hóa quốc phòng**
- [ ] **Step 8: Section 09 - References: Danh mục 8 tài liệu kiểm chứng kèm liên kết ngoài chuẩn**
- [ ] **Step 9: Commit các section**

---

### Task 6: Tối Ưu Tương Tác, Hiệu Ứng Scroll & Accessibility

**Files:**
- Create: `src/utils/scrollspy.ts`
- Modify: `src/styles/theme.css`
- Modify: `index.html` (SEO, Open Graph, meta tags)

- [ ] **Step 1: Intersection Observer scrollspy cập nhật active menu item khi cuộn qua từng section**
- [ ] **Step 2: Hiệu ứng chuyển động nhẹ fade/slide-up theo scroll; tôn trọng `prefers-reduced-motion`**
- [ ] **Step 3: Hoàn thiện SEO meta tags tiếng Việt, Open Graph, Twitter cards, favicon SVG hình máy bay**
- [ ] **Step 4: Kiểm tra khả năng điều hướng bàn phím (tabindex, focus ring)**
- [ ] **Step 5: Commit tối ưu trải nghiệm**

---

### Task 7: Kiểm Thử Toàn Diện & Build Production

**Files:**
- Test: Build output `dist/`
- Check: Link checker script `scripts/verify.ts`

- [ ] **Step 1: Chạy type-check `tsc --noEmit`**
- [ ] **Step 2: Chạy `npm run build` và kiểm tra tài nguyên output trong `dist/`**
- [ ] **Step 3: Kiểm tra link nội bộ và base path `/su-30/` trong `dist/index.html`**
- [ ] **Step 4: Kiểm tra responsive layout trên các breakpoint 390px, 768px, 1366px, 1920px**
- [ ] **Step 5: Commit kết quả build và xác nhận readiness**

---

### Task 8: Thiết Lập GitHub Actions CI/CD & Deploy GitHub Pages

**Files:**
- Create: `.github/workflows/deploy.yml`
- Create: `README.md`
- Create: `.gitignore`

- [ ] **Step 1: Tạo workflow GitHub Actions `.github/workflows/deploy.yml` với `pages-build-deployment`**
- [ ] **Step 2: Viết README.md đầy đủ giới thiệu dự án, công nghệ, cấu trúc, hướng dẫn chạy và link deploy**
- [ ] **Step 3: Push toàn bộ mã nguồn lên nhánh `main` của remote `origin` (repo `rbs-pj/su-30`)**
- [ ] **Step 4: Cấu hình GitHub Pages trên repo qua `gh api` / `gh repo edit`**
- [ ] **Step 5: Theo dõi workflow execution qua `gh run watch`**
- [ ] **Step 6: Xác minh website trực tuyến tại `https://rbs-pj.github.io/su-30/`**
