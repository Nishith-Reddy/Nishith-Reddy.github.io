/* ============================================
   SCROLL REVEAL (main content cards)
   ============================================ */
const revealEls = document.querySelectorAll('.featured-card, .project-card');
revealEls.forEach(el => el.classList.add('reveal'));

const revealObserver = new IntersectionObserver(
  entries => entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revealObserver.unobserve(e.target);
    }
  }),
  { threshold: 0.1 }
);

revealEls.forEach(el => revealObserver.observe(el));

/* ============================================
   ACTIVE SIDEBAR NAV (scroll spy)
   Uses sidebar's scroll position since main
   content is one continuous column
   ============================================ */
const sidebarSections = document.querySelectorAll('.sidebar-section[id], main[id]');
const snavLinks = document.querySelectorAll('.snav-link');

const setActive = (id) => {
  snavLinks.forEach(link => {
    const isActive = link.getAttribute('href') === `#${id}`;
    link.classList.toggle('active', isActive);
  });
};

const sectionObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) setActive(entry.target.id);
    });
  },
  { rootMargin: '-30% 0px -60% 0px' }
);

sidebarSections.forEach(s => sectionObserver.observe(s));

/* ============================================
   GOOGLE ANALYTICS — EVENT TRACKING
   ============================================ */
document.querySelectorAll('a[data-ga-label]').forEach(link => {
  link.addEventListener('click', () => {
    if (typeof gtag === 'function') {
      gtag('event', 'click', {
        event_category: 'outbound',
        event_label: link.dataset.gaLabel,
        transport_type: 'beacon',
      });
    }
  });
});

document.querySelectorAll('.snav-link').forEach(link => {
  link.addEventListener('click', () => {
    if (typeof gtag === 'function') {
      gtag('event', 'nav_click', {
        event_category: 'navigation',
        event_label: link.textContent.trim(),
      });
    }
  });
});

document.querySelector('.btn-primary')?.addEventListener('click', () => {
  if (typeof gtag === 'function') {
    gtag('event', 'cta_click', {
      event_category: 'engagement',
      event_label: 'get_in_touch',
    });
  }
});