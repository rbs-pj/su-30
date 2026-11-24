export function initScrollSpy(): void {
  const sections = document.querySelectorAll<HTMLElement>('section[id]');
  const desktopLinks = document.querySelectorAll<HTMLAnchorElement>('.desktop-nav .nav-link');
  const mobileLinks = document.querySelectorAll<HTMLAnchorElement>('.mobile-drawer .mobile-nav-link');

  if (!sections.length) return;

  const observerOptions: IntersectionObserverInit = {
    root: null,
    rootMargin: '-20% 0px -60% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        if (!id) return;

        // Update desktop links
        desktopLinks.forEach((link) => {
          if (link.getAttribute('data-section') === id) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });

        // Update mobile links
        mobileLinks.forEach((link) => {
          if (link.getAttribute('data-section') === id) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach((sec) => observer.observe(sec));
}

export function initBackToTop(): void {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  window.addEventListener(
    'scroll',
    () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      if (scrollY > 500) {
        btn.classList.add('visible');
      } else {
        btn.classList.remove('visible');
      }
    },
    { passive: true }
  );

  btn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}
