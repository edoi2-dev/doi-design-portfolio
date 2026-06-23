(function () {
  'use strict';

  // Don't animate if the user prefers reduced motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const STAGGER = 85; // ms between staggered siblings

  function mark(el, delay) {
    el.classList.add('js-reveal');
    if (delay) el.style.transitionDelay = delay + 'ms';
  }

  // 1. Solo reveals — elements that animate individually
  document.querySelectorAll([
    '.eyebrow',
    'section h1',
    'section h2',
    '.featured-card',
    '.skill-row',
    '.decision-step',
    '.rebuild-detail',
    'blockquote',
  ].join(',')).forEach(function (el) {
    mark(el, 0);
  });

  // 2. Staggered group reveals — siblings delay by index
  ['.work-card', '.grid-card', '.timeline-item', '.process-item'].forEach(function (sel) {
    var groups = new Map();
    document.querySelectorAll(sel).forEach(function (el) {
      var key = el.parentElement;
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key).push(el);
    });
    groups.forEach(function (group) {
      group.forEach(function (el, i) {
        mark(el, i * STAGGER);
      });
    });
  });

  // 3. Observe all marked elements
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      io.unobserve(entry.target);
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.js-reveal').forEach(function (el) {
    io.observe(el);
  });

  // 4. Nav: add subtle shadow when page is scrolled
  var nav = document.querySelector('.site-nav');
  if (nav) {
    window.addEventListener('scroll', function () {
      nav.classList.toggle('is-scrolled', window.scrollY > 10);
    }, { passive: true });
  }
})();
