// ============================================================
//  AL-FOLIO INSPIRED THEME — main.js
// ============================================================

(function () {
  'use strict';

  // ── THEME TOGGLE ──────────────────────────────────────────
  const btn = document.getElementById('themeToggle');
  const icon = btn ? btn.querySelector('i') : null;

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    if (icon) {
      icon.className = theme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    }
  }

  const saved = localStorage.getItem('theme') ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  applyTheme(saved);

  if (btn) {
    btn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      applyTheme(current === 'dark' ? 'light' : 'dark');
    });
  }

  // ── ABSTRACT TOGGLES ──────────────────────────────────────
  document.querySelectorAll('.abstract-toggle').forEach(function (toggle) {
    toggle.addEventListener('click', function (e) {
      e.preventDefault();
      const pubBody = toggle.closest('.pub-body');
      const abstract = pubBody ? pubBody.querySelector('.pub-abstract') : null;
      if (!abstract) return;
      const isHidden = abstract.classList.contains('hidden');
      abstract.classList.toggle('hidden', !isHidden);
      toggle.textContent = isHidden ? 'Abstract ▴' : 'Abstract ▾';
    });
  });

  // ── PUBLICATION FILTER ────────────────────────────────────
  const filterBtns = document.querySelectorAll('.filter-btn');
  const pubItems = document.querySelectorAll('.pub-item[data-type]');

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      filterBtns.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      pubItems.forEach(function (item) {
        item.style.display =
          filter === 'all' || item.dataset.type === filter ? '' : 'none';
      });
    });
  });

  // ── ACTIVE NAV LINK ───────────────────────────────────────
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(function (a) {
    const href = a.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      a.classList.add('active');
    } else {
      a.classList.remove('active');
    }
  });

})();
