/**
 * main.js — 星渊科技大学招生门户 主逻辑（全面升级版）
 * 功能：搜索弹窗(Ctrl+K) | 返回顶部 | 滚动进度条 | Toast通知
 *       分数表筛选 | 专业筛选 | 校园图鉴灯箱(左右切换) | FAQ手风琴
 *       数字统计动画 | 移动菜单 | 申请表弹窗 | 报名 Toast 联动
 */

(function () {
  'use strict';

  /* ─────────────────────────────────────────────────────────
     工具函数
  ───────────────────────────────────────────────────────── */

  function $(sel, ctx = document) { return ctx.querySelector(sel); }
  function $$(sel, ctx = document) { return Array.from(ctx.querySelectorAll(sel)); }

  function refreshIcons(root = document) {
    lucide.createIcons({ nodes: root === document ? undefined : [root] });
  }

  /* ─────────────────────────────────────────────────────────
     1. 滚动进度条
  ───────────────────────────────────────────────────────── */
  const progressBar = $('#scroll-progress-bar');

  function updateProgress() {
    const scrolled = window.scrollY;
    const total = document.documentElement.scrollHeight - window.innerHeight;
    const pct = total > 0 ? (scrolled / total) * 100 : 0;
    if (progressBar) progressBar.style.width = pct + '%';
  }

  window.addEventListener('scroll', updateProgress, { passive: true });

  /* ─────────────────────────────────────────────────────────
     2. 返回顶部按钮
  ───────────────────────────────────────────────────────── */
  const backTopBtn = $('#back-to-top');

  window.addEventListener('scroll', () => {
    if (!backTopBtn) return;
    if (window.scrollY > 400) {
      backTopBtn.classList.remove('opacity-0', 'pointer-events-none');
      backTopBtn.classList.add('opacity-100');
    } else {
      backTopBtn.classList.add('opacity-0', 'pointer-events-none');
      backTopBtn.classList.remove('opacity-100');
    }
  }, { passive: true });

  if (backTopBtn) {
    backTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ─────────────────────────────────────────────────────────
     3. Toast 通知系统
  ───────────────────────────────────────────────────────── */
  const toastContainer = $('#toast-container');

  function showToast(message, type = 'info', duration = 3500) {
    if (!toastContainer) return;
    const colors = {
      info:    'bg-slate-800 border-slate-600 text-slate-200',
      success: 'bg-emerald-900/90 border-emerald-500/50 text-emerald-200',
      warning: 'bg-amber-900/90 border-amber-500/50 text-amber-200',
      error:   'bg-red-900/90 border-red-500/50 text-red-200',
    };
    const icons = { info: 'info', success: 'check-circle', warning: 'alert-triangle', error: 'x-circle' };

    const toast = document.createElement('div');
    toast.className = `flex items-center gap-3 px-4 py-3 rounded-xl border text-sm shadow-2xl backdrop-blur-md max-w-sm transform transition-all duration-300 translate-x-full opacity-0 ${colors[type] || colors.info}`;
    toast.innerHTML = `<i data-lucide="${icons[type]}" class="w-4 h-4 shrink-0"></i><span>${message}</span>`;
    toastContainer.appendChild(toast);
    refreshIcons(toast);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        toast.classList.remove('translate-x-full', 'opacity-0');
      });
    });

    setTimeout(() => {
      toast.classList.add('translate-x-full', 'opacity-0');
      setTimeout(() => toast.remove(), 300);
    }, duration);
  }

  /* ─────────────────────────────────────────────────────────
     4. 全站搜索弹窗 (Ctrl+K / ⌘K)
  ───────────────────────────────────────────────────────── */
  const searchModal       = $('#search-modal');
  const searchInput       = $('#search-modal-input');
  const searchResults     = $('#search-modal-results');
  const closeSearchBtn    = $('#close-search-modal');
  const searchTriggerBtns = $$('[data-search-trigger]');

  // 搜索索引：专业 + 新闻
  const SEARCH_INDEX = [
    ...(typeof MAJORS_DATA !== 'undefined' ? MAJORS_DATA.map(m => ({
      type: '专业', title: m.title, subtitle: m.college, href: '#majors', cat: m.cat
    })) : []),
    ...(typeof NEWS_DATA !== 'undefined' ? NEWS_DATA.map(n => ({
      type: '动态', title: n.title, subtitle: n.date, href: '#news'
    })) : []),
    ...(typeof FAQ_DATA !== 'undefined' ? FAQ_DATA.map(f => ({
      type: 'FAQ', title: f.q, subtitle: f.a.slice(0, 60) + '…', href: '#faq'
    })) : []),
    { type: '快速导航', title: '历年分数线速查', subtitle: '多省份投档线与录取位次', href: '#scores' },
    { type: '快速导航', title: '校园全景图鉴', subtitle: '科研重器、生活与书院', href: '#campus' },
    { type: '快速导航', title: '招考动态', subtitle: '简章、宣讲、少年班公告', href: '#news' },
  ];

  function openSearch() {
    if (!searchModal) return;
    searchModal.classList.remove('hidden');
    setTimeout(() => searchInput && searchInput.focus(), 50);
    renderSearchResults('');
  }

  function closeSearch() {
    if (!searchModal) return;
    searchModal.classList.add('hidden');
    if (searchInput) searchInput.value = '';
  }

  function renderSearchResults(query) {
    if (!searchResults) return;
    const q = query.trim().toLowerCase();
    const matched = q
      ? SEARCH_INDEX.filter(item =>
          item.title.toLowerCase().includes(q) || (item.subtitle && item.subtitle.toLowerCase().includes(q))
        ).slice(0, 8)
      : SEARCH_INDEX.slice(0, 6);

    if (matched.length === 0) {
      searchResults.innerHTML = `<div class="py-10 text-center text-slate-500 text-sm">未找到与「${query}」相关的内容</div>`;
      return;
    }

    searchResults.innerHTML = matched.map(item => `
      <a href="${item.href}" class="search-result-item flex items-start gap-3 px-4 py-3 hover:bg-slate-800/80 rounded-xl transition-colors group" onclick="closeSearchExternal()">
        <span class="text-[10px] mt-0.5 px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-400 font-bold shrink-0">${item.type}</span>
        <div class="flex-1 min-w-0">
          <div class="text-sm text-white group-hover:text-cyan-300 transition-colors font-medium truncate">${item.title}</div>
          <div class="text-xs text-slate-500 truncate mt-0.5">${item.subtitle || ''}</div>
        </div>
        <i data-lucide="arrow-right" class="w-4 h-4 text-slate-600 group-hover:text-cyan-400 shrink-0 mt-1 transition-colors"></i>
      </a>
    `).join('');
    refreshIcons(searchResults);
  }

  window.closeSearchExternal = closeSearch;

  if (searchInput) {
    searchInput.addEventListener('input', () => renderSearchResults(searchInput.value));
  }
  if (closeSearchBtn) closeSearchBtn.addEventListener('click', closeSearch);
  if (searchModal) {
    searchModal.addEventListener('click', e => {
      if (e.target === searchModal) closeSearch();
    });
  }
  searchTriggerBtns.forEach(btn => btn.addEventListener('click', openSearch));

  // 旧搜索按钮兼容
  const oldSearchBtn = $('#search-modal-trigger');
  if (oldSearchBtn) oldSearchBtn.addEventListener('click', openSearch);

  /* 键盘快捷键 */
  document.addEventListener('keydown', e => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      searchModal && !searchModal.classList.contains('hidden') ? closeSearch() : openSearch();
    }
    if (e.key === 'Escape') {
      closeSearch();
    }
  });

  /* ─────────────────────────────────────────────────────────
     5. 数字统计动画
  ───────────────────────────────────────────────────────── */
  let statsAnimated = false;

  function animateStats() {
    if (statsAnimated) return;
    statsAnimated = true;
    $$('.stat-number').forEach(el => {
      const target = parseFloat(el.dataset.target);
      const duration = 1800;
      let start = null;
      function step(ts) {
        if (!start) start = ts;
        const progress = Math.min((ts - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.floor(eased * target);
        if (progress < 1) requestAnimationFrame(step);
        else el.textContent = target;
      }
      requestAnimationFrame(step);
    });
  }

  /* 如果英雄区已在视口就立即执行，否则等滚动 */
  function checkStatsVisible() {
    const hero = $('#hero');
    if (!hero) return;
    if (hero.getBoundingClientRect().top < window.innerHeight * 1.2) {
      animateStats();
    }
  }

  checkStatsVisible();
  window.addEventListener('scroll', checkStatsVisible, { passive: true, once: true });

  /* ─────────────────────────────────────────────────────────
     6. 分数线大数据筛选引擎
  ───────────────────────────────────────────────────────── */
  const provinceSelect = $('#province-select');
  const streamSelect   = $('#stream-select');
  const yearSelect     = $('#year-select');
  const scoreSearch    = $('#score-search');
  const tableBody      = $('#scores-table-body');
  const noScores       = $('#no-scores-found');
  const resultsCount   = $('#results-count');

  function renderScoresTable() {
    if (!tableBody || typeof ADMISSION_DATA === 'undefined') return;

    const prov   = provinceSelect ? provinceSelect.value : 'all';
    const stream = streamSelect   ? streamSelect.value   : 'all';
    const year   = yearSelect     ? yearSelect.value     : '2025';
    const query  = scoreSearch    ? scoreSearch.value.trim().toLowerCase() : '';

    const filtered = ADMISSION_DATA.filter(r => {
      const mProv = prov === 'all' || r.province === prov;
      let mStream = true;
      if (stream !== 'all') {
        if (stream === '物化双选') {
          mStream = r.stream === '物化双选' || (r.tag && r.tag.includes('物化'));
        } else if (stream === '传统理科批') {
          mStream = r.tag && r.tag.includes('传统理科批');
        } else if (stream === '综合改革') {
          mStream = r.stream === '综合改革' || (r.tag && r.tag.includes('综合改革'));
        } else if (stream === '强基拔尖') {
          mStream = r.stream === '强基拔尖' || (r.tag && r.tag.includes('强基'));
        } else {
          mStream = r.stream === stream;
        }
      }
      const mYear   = r.year === year;
      const mQuery  = !query ||
        r.major.toLowerCase().includes(query) ||
        r.college.toLowerCase().includes(query) ||
        r.province.toLowerCase().includes(query) ||
        (r.tag && r.tag.toLowerCase().includes(query));
      return mProv && mStream && mYear && mQuery;
    });

    tableBody.innerHTML = '';

    if (filtered.length === 0) {
      noScores && noScores.classList.remove('hidden');
      if (resultsCount) resultsCount.textContent = '共匹配到 0 条招生记录';
    } else {
      noScores && noScores.classList.add('hidden');
      if (resultsCount) resultsCount.textContent = `共匹配到 ${filtered.length} 条招生记录`;

      // 按分数降序
      filtered.sort((a, b) => b.score - a.score);

      filtered.forEach((row, idx) => {
        const tr = document.createElement('tr');
        tr.className = 'hover:bg-slate-800/40 transition-colors group animate-row-in';
        tr.style.animationDelay = `${idx * 30}ms`;

        const rankBadge =
          row.score >= 690 ? '<span class="ml-1.5 text-[10px] bg-amber-500/20 text-amber-300 border border-amber-400/30 px-1.5 py-0.5 rounded font-mono">🔥拔尖</span>' :
          row.score >= 680 ? '<span class="ml-1.5 text-[10px] bg-cyan-500/10 text-cyan-300 border border-cyan-400/20 px-1.5 py-0.5 rounded font-mono">TOP</span>' : '';

        const diffDisplay = row.diff ? `+${row.diff}分` : '--';
        const batchBadge = row.batch ? `<span class="text-[10px] text-slate-400 font-mono">${row.batch}</span>` : '';
        const tagDisplay = row.tag || row.stream;

        tr.innerHTML = `
          <td class="py-4 px-5 font-semibold text-white group-hover:text-cyan-300 transition-colors">
            <div class="flex items-center gap-2">
              <span class="w-1.5 h-6 rounded-full bg-cyan-400/50 group-hover:bg-cyan-400 transition-colors flex-shrink-0"></span>
              <span class="leading-snug">${row.major}${rankBadge}</span>
            </div>
          </td>
          <td class="py-4 px-5 text-slate-300 text-xs whitespace-nowrap">${row.college}</td>
          <td class="py-4 px-5 whitespace-nowrap">
            <div class="flex flex-col">
              <span class="font-medium text-white text-xs">${row.province}</span>
              ${batchBadge}
            </div>
          </td>
          <td class="py-4 px-5 whitespace-nowrap">
            <span class="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-800 text-cyan-300 border border-slate-700/80">
              ${tagDisplay}
            </span>
          </td>
          <td class="py-4 px-5 text-center font-bold text-cyan-400 font-display text-lg whitespace-nowrap">${row.score}</td>
          <td class="py-4 px-5 text-center whitespace-nowrap">
            <span class="px-2 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 font-mono" title="超本省当年特招线/一本线分值">
              ${diffDisplay}
            </span>
          </td>
          <td class="py-4 px-5 text-center text-slate-200 font-mono text-xs whitespace-nowrap font-semibold">前 ${row.rank} 位</td>
          <td class="py-4 px-5 text-center text-slate-400 font-mono text-xs whitespace-nowrap">${row.quota} 人</td>
          <td class="py-4 px-5 text-center whitespace-nowrap">
            <button onclick="window.promptAdmissions && window.promptAdmissions('${row.major}', '${row.province}')"
              class="text-xs text-cyan-400 hover:text-white px-2.5 py-1 rounded-lg bg-cyan-500/10 hover:bg-cyan-500 transition-colors font-medium cursor-pointer">
              AI咨询
            </button>
          </td>`;
        tableBody.appendChild(tr);
      });
    }
  }

  if (provinceSelect) provinceSelect.addEventListener('change', renderScoresTable);
  if (streamSelect)   streamSelect.addEventListener('change', renderScoresTable);
  if (yearSelect)     yearSelect.addEventListener('change', renderScoresTable);
  if (scoreSearch)    scoreSearch.addEventListener('input', renderScoresTable);
  renderScoresTable();

  /* ─────────────────────────────────────────────────────────
     7. 专业分类筛选
  ───────────────────────────────────────────────────────── */
  const majorTabBtns = $$('.major-tab-btn');
  const majorItems   = $$('.major-item');

  majorTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      majorTabBtns.forEach(b => {
        b.classList.remove('active', 'bg-cyan-500', 'text-brand-darkest', 'shadow-lg', 'shadow-cyan-500/20');
        b.classList.add('bg-slate-800/80', 'text-slate-300', 'border-slate-700/60');
      });
      btn.classList.add('active', 'bg-cyan-500', 'text-brand-darkest', 'shadow-lg', 'shadow-cyan-500/20');
      btn.classList.remove('bg-slate-800/80', 'text-slate-300', 'border-slate-700/60');

      const cat = btn.dataset.cat;
      majorItems.forEach((item, i) => {
        const show = cat === 'all' || item.dataset.cat === cat;
        item.style.transitionDelay = show ? `${i * 50}ms` : '0ms';
        item.classList.toggle('hidden', !show);
      });
    });
  });

  /* ─────────────────────────────────────────────────────────
     8. 专业详情弹窗
  ───────────────────────────────────────────────────────── */
  const majorModal      = $('#major-detail-modal');
  const closeMajorModal = $('#close-major-modal');
  const modalTitle      = $('#modal-major-title');
  const modalCollege    = $('#modal-college-tag');
  const modalTags       = $('#modal-tags');
  const modalDesc       = $('#modal-desc');

  $$('.open-major-modal-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const title   = btn.dataset.title;
      const college = btn.dataset.college;
      const tags    = btn.dataset.tags.split(',');
      const desc    = btn.dataset.desc;

      if (modalTitle)   modalTitle.textContent   = title;
      if (modalCollege) modalCollege.textContent  = college;
      if (modalDesc)    modalDesc.textContent     = desc;
      if (modalTags) {
        modalTags.innerHTML = '';
        tags.forEach(t => {
          const span = document.createElement('span');
          span.className = 'px-2.5 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-400/20';
          span.textContent = t.trim();
          modalTags.appendChild(span);
        });
      }
      majorModal && majorModal.classList.remove('hidden');
    });
  });

  if (closeMajorModal) closeMajorModal.addEventListener('click', () => majorModal.classList.add('hidden'));

  const modalToScores = $('#modal-to-scores');
  if (modalToScores) modalToScores.addEventListener('click', () => majorModal && majorModal.classList.add('hidden'));

  /* 点击遮罩关闭 */
  if (majorModal) {
    majorModal.addEventListener('click', e => {
      if (e.target === majorModal) majorModal.classList.add('hidden');
    });
  }

  /* ─────────────────────────────────────────────────────────
     9. 校园图鉴：筛选 + 灯箱（支持左右切换）
  ───────────────────────────────────────────────────────── */
  const campusFilters  = $$('.campus-filter');
  const campusCards    = $$('.campus-card');
  const lightboxModal  = $('#image-lightbox-modal');
  const lightboxImg    = $('#lightbox-img');
  const lightboxTitle  = $('#lightbox-title');
  const lightboxDesc   = $('#lightbox-desc');
  const lightboxClose  = $('#close-lightbox-btn');
  const lightboxPrev   = $('#lightbox-prev');
  const lightboxNext   = $('#lightbox-next');
  const lightboxCount  = $('#lightbox-count');

  let activeCampusCards = [...campusCards];
  let lightboxIndex = 0;

  campusFilters.forEach(btn => {
    btn.addEventListener('click', () => {
      campusFilters.forEach(b => {
        b.classList.remove('active', 'bg-cyan-500', 'text-brand-darkest', 'font-bold');
        b.classList.add('bg-slate-800/90', 'text-slate-300');
      });
      btn.classList.add('active', 'bg-cyan-500', 'text-brand-darkest', 'font-bold');
      btn.classList.remove('bg-slate-800/90', 'text-slate-300');

      const f = btn.dataset.cfilter;
      campusCards.forEach(card => card.classList.toggle('hidden', !(f === 'all' || card.dataset.cgroup === f)));
      activeCampusCards = campusCards.filter(c => !c.classList.contains('hidden'));
    });
  });

  function openLightbox(index) {
    lightboxIndex = index;
    const card = activeCampusCards[index];
    if (!card || !lightboxModal) return;
    if (lightboxImg)   lightboxImg.src = card.dataset.img;
    if (lightboxTitle) lightboxTitle.textContent = card.dataset.title;
    if (lightboxDesc)  lightboxDesc.textContent  = card.dataset.caption;
    if (lightboxCount) lightboxCount.textContent = `${index + 1} / ${activeCampusCards.length}`;
    lightboxModal.classList.remove('hidden');
  }

  campusCards.forEach((card, i) => {
    card.addEventListener('click', () => {
      activeCampusCards = campusCards.filter(c => !c.classList.contains('hidden'));
      const idx = activeCampusCards.indexOf(card);
      openLightbox(idx >= 0 ? idx : 0);
    });
  });

  if (lightboxClose) lightboxClose.addEventListener('click', () => lightboxModal.classList.add('hidden'));
  if (lightboxModal) {
    lightboxModal.addEventListener('click', e => {
      if (e.target === lightboxModal) lightboxModal.classList.add('hidden');
    });
  }
  if (lightboxPrev) lightboxPrev.addEventListener('click', e => {
    e.stopPropagation();
    openLightbox((lightboxIndex - 1 + activeCampusCards.length) % activeCampusCards.length);
  });
  if (lightboxNext) lightboxNext.addEventListener('click', e => {
    e.stopPropagation();
    openLightbox((lightboxIndex + 1) % activeCampusCards.length);
  });

  /* 键盘左右 */
  document.addEventListener('keydown', e => {
    if (lightboxModal && !lightboxModal.classList.contains('hidden')) {
      if (e.key === 'ArrowLeft')  openLightbox((lightboxIndex - 1 + activeCampusCards.length) % activeCampusCards.length);
      if (e.key === 'ArrowRight') openLightbox((lightboxIndex + 1) % activeCampusCards.length);
      if (e.key === 'Escape')     lightboxModal.classList.add('hidden');
    }
  });

  /* ─────────────────────────────────────────────────────────
     10. FAQ 手风琴
  ───────────────────────────────────────────────────────── */
  $$('.faq-item').forEach(item => {
    const toggle  = item.querySelector('.faq-toggle');
    const content = item.querySelector('.faq-content');
    const iconBox = item.querySelector('.faq-icon');

    toggle.addEventListener('click', () => {
      const isOpen = !content.classList.contains('hidden');

      // 关闭所有
      $$('.faq-item').forEach(other => {
        other.querySelector('.faq-content').classList.add('hidden');
        other.querySelector('.faq-icon').innerHTML = '<i data-lucide="plus" class="w-4 h-4"></i>';
        other.classList.remove('ring-1', 'ring-cyan-400/30');
      });

      if (!isOpen) {
        content.classList.remove('hidden');
        iconBox.innerHTML = '<i data-lucide="minus" class="w-4 h-4 text-cyan-400"></i>';
        item.classList.add('ring-1', 'ring-cyan-400/30');
      }
      refreshIcons(item);
    });
  });

  /* ─────────────────────────────────────────────────────────
     11. 移动端菜单
  ───────────────────────────────────────────────────────── */
  const mobileMenuBtn  = $('#mobile-menu-btn');
  const mobileMenu     = $('#mobile-menu');
  const menuIconOpen   = $('#menu-icon-open');
  const menuIconClose  = $('#menu-icon-close');

  function closeMobileMenu() {
    mobileMenu && mobileMenu.classList.add('hidden');
    menuIconOpen  && menuIconOpen.classList.remove('hidden');
    menuIconClose && menuIconClose.classList.add('hidden');
  }

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu && mobileMenu.classList.toggle('hidden');
      menuIconOpen  && menuIconOpen.classList.toggle('hidden');
      menuIconClose && menuIconClose.classList.toggle('hidden');
    });
  }

  if (mobileMenu) {
    $$('a', mobileMenu).forEach(link => link.addEventListener('click', closeMobileMenu));
  }

  /* ─────────────────────────────────────────────────────────
     12. 申请报名弹窗（在线预报名体验）
  ───────────────────────────────────────────────────────── */
  const applyModal      = $('#apply-modal');
  const closeApplyModal = $('#close-apply-modal');
  const applyForm       = $('#apply-form');
  const applyTriggers   = $$('[data-apply-trigger]');

  applyTriggers.forEach(btn => btn.addEventListener('click', () => {
    applyModal && applyModal.classList.remove('hidden');
  }));
  if (closeApplyModal) closeApplyModal.addEventListener('click', () => applyModal.classList.add('hidden'));
  if (applyModal) {
    applyModal.addEventListener('click', e => {
      if (e.target === applyModal) applyModal.classList.add('hidden');
    });
  }

  if (applyForm) {
    applyForm.addEventListener('submit', e => {
      e.preventDefault();
      const btn = applyForm.querySelector('button[type=submit]');
      const orig = btn.textContent;
      btn.textContent = '提交中…';
      btn.disabled = true;

      setTimeout(() => {
        applyModal && applyModal.classList.add('hidden');
        btn.textContent = orig;
        btn.disabled = false;
        applyForm.reset();
        showToast('🎉 预报名成功！招生组将在 48 小时内联系您。', 'success', 5000);
      }, 1500);
    });
  }

  /* ─────────────────────────────────────────────────────────
     13. 导航滚动高亮
  ───────────────────────────────────────────────────────── */
  const navLinks = $$('nav a[href^="#"]');
  const sections = navLinks.map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);

  function updateNavHighlight() {
    let current = '';
    sections.forEach(sec => {
      if (window.scrollY + 100 >= sec.offsetTop) current = '#' + sec.id;
    });
    navLinks.forEach(a => {
      const active = a.getAttribute('href') === current;
      a.classList.toggle('active', active);
      a.classList.toggle('text-cyan-300', active);
      a.classList.toggle('bg-cyan-500/10', active);
      a.classList.toggle('border-cyan-400/20', active);
      a.classList.toggle('text-slate-400', !active);
    });
  }

  window.addEventListener('scroll', updateNavHighlight, { passive: true });

  /* ─────────────────────────────────────────────────────────
     14. 导航栏滚动缩小
  ───────────────────────────────────────────────────────── */
  const header = $('#main-header');
  window.addEventListener('scroll', () => {
    if (!header) return;
    header.classList.toggle('shadow-xl', window.scrollY > 20);
  }, { passive: true });

  /* ─────────────────────────────────────────────────────────
     15. 懒加载校园图片
  ───────────────────────────────────────────────────────── */
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
        }
        observer.unobserve(img);
      }
    });
  }, { rootMargin: '200px' });

  $$('img[data-src]').forEach(img => observer.observe(img));

  /* ─────────────────────────────────────────────────────────
     16. 出场动画（IntersectionObserver）
  ───────────────────────────────────────────────────────── */
  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        fadeObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  $$('.fade-in-up').forEach(el => fadeObserver.observe(el));

  /* ─────────────────────────────────────────────────────────
     全局初始化完成
  ───────────────────────────────────────────────────────── */
  showToast('🌌 星渊科技大学招生门户已就绪，按 Ctrl+K 可快速搜索', 'info', 4000);

})();
