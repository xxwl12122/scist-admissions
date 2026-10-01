/**
 * canvas.js — 星渊科技大学 英雄区粒子网格动画（升级版）
 * 支持鼠标互动排斥、星云爆发、自适应密度
 */

(function () {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let W = canvas.width = window.innerWidth;
  let H = canvas.height = canvas.parentElement.offsetHeight || window.innerHeight;

  let mouse = { x: W / 2, y: H / 2, active: false };
  let particles = [];
  let animFrameId;

  const CONFIG = {
    minCount: 40,
    maxCount: 90,
    connectDist: 140,
    mouseRepelDist: 100,
    baseSpeed: 0.55,
    particleColor: '#00F2FE',
    lineBaseAlpha: 0.18,
  };

  /* ── 粒子类 ─────────────────────────────────────────── */
  class Particle {
    constructor(x, y) {
      this.x = x ?? Math.random() * W;
      this.y = y ?? Math.random() * H;
      this.vx = (Math.random() - 0.5) * CONFIG.baseSpeed * 2;
      this.vy = (Math.random() - 0.5) * CONFIG.baseSpeed * 2;
      this.radius = Math.random() * 1.8 + 0.6;
      this.alpha = Math.random() * 0.6 + 0.4;
      this.pulseOffset = Math.random() * Math.PI * 2;
      this.born = performance.now();
    }

    update(t) {
      /* 鼠标排斥 */
      if (mouse.active) {
        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;
        const d2 = dx * dx + dy * dy;
        const repel = CONFIG.mouseRepelDist;
        if (d2 < repel * repel && d2 > 0) {
          const d = Math.sqrt(d2);
          const force = (repel - d) / repel * 0.06;
          this.vx += (dx / d) * force;
          this.vy += (dy / d) * force;
        }
      }

      /* 速度阻尼 */
      this.vx *= 0.995;
      this.vy *= 0.995;

      /* 最小速度维持 */
      const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
      if (speed < 0.1) {
        const angle = Math.random() * Math.PI * 2;
        this.vx += Math.cos(angle) * 0.05;
        this.vy += Math.sin(angle) * 0.05;
      }

      this.x += this.vx;
      this.y += this.vy;

      /* 边界回弹 */
      if (this.x < 0) { this.x = 0; this.vx = Math.abs(this.vx); }
      if (this.x > W) { this.x = W; this.vx = -Math.abs(this.vx); }
      if (this.y < 0) { this.y = 0; this.vy = Math.abs(this.vy); }
      if (this.y > H) { this.y = H; this.vy = -Math.abs(this.vy); }

      /* 脉冲 alpha */
      this.alpha = 0.45 + 0.35 * Math.sin(t * 0.0012 + this.pulseOffset);
    }

    draw() {
      ctx.save();
      ctx.globalAlpha = this.alpha;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = CONFIG.particleColor;
      ctx.shadowBlur = 6;
      ctx.shadowColor = CONFIG.particleColor;
      ctx.fill();
      ctx.restore();
    }
  }

  /* ── 初始化 ──────────────────────────────────────────── */
  function init() {
    const count = Math.min(
      CONFIG.maxCount,
      Math.max(CONFIG.minCount, Math.floor(W / 18))
    );
    particles = Array.from({ length: count }, () => new Particle());
  }

  /* ── 连线绘制 ────────────────────────────────────────── */
  function drawConnections() {
    const n = particles.length;
    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < CONFIG.connectDist) {
          const alpha = CONFIG.lineBaseAlpha * (1 - dist / CONFIG.connectDist);
          ctx.beginPath();
          ctx.strokeStyle = `rgba(0, 242, 254, ${alpha})`;
          ctx.lineWidth = 0.8;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
  }

  /* ── 鼠标连线 ────────────────────────────────────────── */
  function drawMouseLines() {
    if (!mouse.active) return;
    particles.forEach(p => {
      const dx = p.x - mouse.x;
      const dy = p.y - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 160) {
        const alpha = 0.25 * (1 - dist / 160);
        ctx.beginPath();
        ctx.strokeStyle = `rgba(79, 172, 254, ${alpha})`;
        ctx.lineWidth = 0.6;
        ctx.moveTo(mouse.x, mouse.y);
        ctx.lineTo(p.x, p.y);
        ctx.stroke();
      }
    });
  }

  /* ── 主循环 ──────────────────────────────────────────── */
  function loop(t) {
    ctx.clearRect(0, 0, W, H);
    drawConnections();
    drawMouseLines();
    particles.forEach(p => {
      p.update(t);
      p.draw();
    });
    animFrameId = requestAnimationFrame(loop);
  }

  /* ── 响应式 ──────────────────────────────────────────── */
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = canvas.parentElement.offsetHeight || window.innerHeight;
      init();
    }, 200);
  });

  /* ── 鼠标事件 ────────────────────────────────────────── */
  const heroSection = document.getElementById('hero');
  if (heroSection) {
    heroSection.addEventListener('mousemove', e => {
      const rect = heroSection.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    });
    heroSection.addEventListener('mouseleave', () => {
      mouse.active = false;
    });

    /* 触摸支持 */
    heroSection.addEventListener('touchmove', e => {
      e.preventDefault();
      const rect = heroSection.getBoundingClientRect();
      mouse.x = e.touches[0].clientX - rect.left;
      mouse.y = e.touches[0].clientY - rect.top;
      mouse.active = true;
    }, { passive: false });
    heroSection.addEventListener('touchend', () => {
      mouse.active = false;
    });
  }

  /* ── 点击爆发效果 ────────────────────────────────────── */
  canvas.addEventListener('click', e => {
    const rect = canvas.getBoundingClientRect();
    const cx = e.clientX - rect.left;
    const cy = e.clientY - rect.top;
    for (let i = 0; i < 8; i++) {
      const p = new Particle(cx + (Math.random() - 0.5) * 10, cy + (Math.random() - 0.5) * 10);
      const angle = (i / 8) * Math.PI * 2;
      p.vx = Math.cos(angle) * 2.5;
      p.vy = Math.sin(angle) * 2.5;
      particles.push(p);
    }
    /* 保持粒子数量上限 */
    const max = CONFIG.maxCount + 20;
    if (particles.length > max) {
      particles.splice(0, particles.length - max);
    }
  });

  init();
  animFrameId = requestAnimationFrame(loop);

  /* 页面隐藏时暂停动画，节约性能 */
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      cancelAnimationFrame(animFrameId);
    } else {
      animFrameId = requestAnimationFrame(loop);
    }
  });
})();
