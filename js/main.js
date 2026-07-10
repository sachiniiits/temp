/* ============================================================
   Portfolio scroll engine
   - Global dots pattern (rises phase 1 -> 2, drifts with scroll)
   - Phase 2 crossfade (video settle -> Experience -> Projects)
   - Phase 3 scroll-scrubbed frame sequence + blur reveal
   - Proximity-based video playback
   ============================================================ */
(() => {
  'use strict';

  /* ---------- math helpers ---------- */
  const clamp = (v, lo, hi) => (v < lo ? lo : v > hi ? hi : v);
  const lerp = (a, b, t) => a + (b - a) * t;
  const smooth = (t) => { t = clamp(t, 0, 1); return t * t * (3 - 2 * t); };
  // eased ramp between two scroll-progress thresholds
  const ramp = (p, a, b) => smooth((p - a) / (b - a));
  // fade in over [a,b], hold, fade out over [c,d]
  const band = (p, a, b, c, d) => ramp(p, a, b) * (1 - ramp(p, c, d));

  /* ---------- element refs ---------- */
  const dots = document.getElementById('dots');
  const dotsTrack = document.getElementById('dotsTrack');
  const dotSegs = document.querySelectorAll('.dots__seg');
  const scrollcue = document.getElementById('scrollcue');

  const p2video = document.getElementById('p2video');
  const expPanel = document.getElementById('expPanel');
  const projPanel = document.getElementById('projPanel');

  const phase1 = document.getElementById('phase1');
  const phase2 = document.getElementById('phase2');
  const phase3 = document.getElementById('phase3');
  const phase4 = document.getElementById('phase4');

  const video1 = document.getElementById('video1');
  const video2 = document.getElementById('video2');
  const video4 = document.getElementById('video4');

  const canvas = document.getElementById('p3canvas');
  const ctx = canvas.getContext('2d', { alpha: false });
  const p3blur = document.getElementById('p3blur');
  const p3content = document.getElementById('p3content');

  /* ---------- phase 3 frame sequence ---------- */
  const FRAME_COUNT = 156;               // phase3_001 .. phase3_156
  const SCRUB_END = 0.60;                // scroll progress at which the clip finishes
  const frames = new Array(FRAME_COUNT);
  const frameReady = new Array(FRAME_COUNT).fill(false);
  let firstFrameDrawn = false;

  function frameSrc(i) {
    return 'assets/frames/phase3_' + String(i + 1).padStart(3, '0') + '.jpg';
  }
  function preloadFrames() {
    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.decoding = 'async';
      img.onload = () => {
        frameReady[i] = true;
        if (i === 0 && !firstFrameDrawn) { drawFrame(0); firstFrameDrawn = true; }
      };
      img.src = frameSrc(i);
      frames[i] = img;
    }
  }

  /* ---------- canvas sizing + cover draw ---------- */
  let cw = 0, ch = 0, dpr = 1;
  let lastDrawn = -1;

  function sizeCanvas() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    cw = window.innerWidth;
    ch = window.innerHeight;
    canvas.width = Math.round(cw * dpr);
    canvas.height = Math.round(ch * dpr);
    canvas.style.width = cw + 'px';
    canvas.style.height = ch + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    lastDrawn = -1;                       // force redraw at new size
  }

  function drawFrame(i) {
    i = clamp(Math.round(i), 0, FRAME_COUNT - 1);
    let img = frames[i];
    if (!img || !frameReady[i]) {          // fall back to nearest loaded frame below
      let j = i;
      while (j > 0 && !frameReady[j]) j--;
      if (!frameReady[j]) return;
      img = frames[j]; i = j;
    }
    if (i === lastDrawn) return;
    lastDrawn = i;

    const iw = img.naturalWidth, ih = img.naturalHeight;
    const ir = iw / ih, cr = cw / ch;
    let dw, dh, dx, dy;
    if (cr > ir) { dw = cw; dh = cw / ir; dx = 0; dy = (ch - dh) / 2; }
    else { dh = ch; dw = ch * ir; dy = 0; dx = (cw - dw) / 2; }
    ctx.drawImage(img, dx, dy, dw, dh);
  }

  /* ---------- dots strip ---------- */
  let segWidth = 1;
  const DRIFT = 0.34;                      // px of horizontal drift per px scrolled

  function buildDots() {
    // enough dots to exceed the viewport width even after drift
    const approx = Math.ceil(window.innerWidth / 14) + 40;
    const str = '.'.repeat(approx);
    dotSegs.forEach((s) => { s.textContent = str; });
    segWidth = dotSegs[0].getBoundingClientRect().width || 1;
  }

  /* ---------- cached metrics ---------- */
  let vh = window.innerHeight;
  let m = { p2Top: 0, p2Range: 1, p3Top: 0, p3Range: 1, p4Top: 0 };

  function measure() {
    vh = window.innerHeight;
    m.p2Top = phase2.offsetTop;
    m.p2Range = Math.max(1, phase2.offsetHeight - vh);
    m.p3Top = phase3.offsetTop;
    m.p3Range = Math.max(1, phase3.offsetHeight - vh);
    m.p4Top = phase4.offsetTop;
  }

  /* ---------- video playback (proximity) ---------- */
  function safePlay(v) { const p = v.play(); if (p && p.catch) p.catch(() => {}); }
  const playing = new WeakSet();
  function setPlay(v, on) {
    if (!v) return;
    if (on && !playing.has(v)) { safePlay(v); playing.add(v); }
    else if (!on && playing.has(v)) { v.pause(); playing.delete(v); }
  }
  function updateVideos(y) {
    setPlay(video1, y < vh * 1.3);
    setPlay(video2, y > m.p2Top - vh && y < m.p2Top + phase2.offsetHeight);
    setPlay(video4, y > m.p4Top - vh * 1.3);
  }

  /* ---------- per-frame state guards (avoid redundant writes) ---------- */
  let last = { dotsTop: -1, dotsX: -1, cue: -1, sv: -1, exp: -1, proj: -1,
               blur: -1, content: -1, frame: 0 };

  function setStyleNum(prev, next, apply, eps = 0.004) {
    if (Math.abs(prev - next) < eps) return prev;
    apply(next);
    return next;
  }

  /* ---------- the update pass ---------- */
  function update() {
    const y = window.scrollY || window.pageYOffset;

    /* -- dots vertical rise: bottom in phase 1, top from phase 2 on -- */
    const rise = smooth((y - vh * 0.45) / (vh * 0.55));
    const topPx = lerp(vh - 52, 18, rise);
    last.dotsTop = setStyleNum(last.dotsTop, topPx, (v) => { dots.style.top = v + 'px'; }, 0.5);

    /* -- dots horizontal drift (seamless via modulo of one segment) -- */
    let offX = (y * DRIFT) % segWidth;
    if (offX < 0) offX += segWidth;
    last.dotsX = setStyleNum(last.dotsX, offX, (v) => {
      dotsTrack.style.transform = 'translate3d(' + (-v) + 'px,0,0)';
    }, 0.25);

    /* -- scroll cue fades out once we leave the top -- */
    const cueOp = clamp(1 - y / (vh * 0.25), 0, 1);
    last.cue = setStyleNum(last.cue, cueOp, (v) => { scrollcue.style.opacity = v; });

    /* -- phase 2: video settle -> Experience -> Projects -- */
    const p2 = clamp((y - m.p2Top) / m.p2Range, 0, 1);
    const sv = smooth(clamp(p2 / 0.08, 0, 1));
    last.sv = setStyleNum(last.sv, sv, (v) => {
      p2video.style.opacity = v;
      p2video.style.transform = 'translateY(' + ((1 - v) * 4) + 'vh)';
    });
    const expOp = band(p2, 0.11, 0.21, 0.44, 0.54);
    const projOp = ramp(p2, 0.57, 0.67);
    last.exp = setStyleNum(last.exp, expOp, (v) => {
      expPanel.style.opacity = v;
      expPanel.style.transform = 'translateY(' + ((1 - v) * 22) + 'px)';
      expPanel.style.pointerEvents = v > 0.6 ? 'auto' : 'none';
    });
    last.proj = setStyleNum(last.proj, projOp, (v) => {
      projPanel.style.opacity = v;
      projPanel.style.transform = 'translateY(' + ((1 - v) * 22) + 'px)';
      projPanel.style.pointerEvents = v > 0.6 ? 'auto' : 'none';
    });

    /* -- phase 3: scrub frames, then blur + skills reveal -- */
    const p3 = clamp((y - m.p3Top) / m.p3Range, 0, 1);
    const targetFrame = clamp(p3 / SCRUB_END, 0, 1) * (FRAME_COUNT - 1);
    // gentle lerp toward the target frame for a filmic feel
    last.frame = lerp(last.frame, targetFrame, 0.35);
    if (Math.abs(last.frame - targetFrame) < 0.5) last.frame = targetFrame;
    drawFrame(last.frame);

    const blurOp = ramp(p3, 0.62, 0.74);
    const contentOp = ramp(p3, 0.68, 0.80);
    last.blur = setStyleNum(last.blur, blurOp, (v) => { p3blur.style.opacity = v; });
    last.content = setStyleNum(last.content, contentOp, (v) => {
      p3content.style.opacity = v;
      p3content.style.transform = 'translateY(' + ((1 - v) * 28) + 'px)';
      p3content.style.pointerEvents = v > 0.6 ? 'auto' : 'none';
    });

    updateVideos(y);
  }

  /* ---------- rAF loop (runs while active, idles when settled) ---------- */
  let rafId = null;
  let idleFrames = 0;
  function loop() {
    const before = last.frame;
    update();
    // keep animating a little after scroll stops so the frame lerp settles
    const moving = Math.abs(last.frame - before) > 0.01;
    idleFrames = moving ? 0 : idleFrames + 1;
    if (idleFrames > 8) { rafId = null; return; }
    rafId = requestAnimationFrame(loop);
  }
  function kick() {
    idleFrames = 0;
    if (rafId == null) rafId = requestAnimationFrame(loop);
  }

  /* ---------- wiring ---------- */
  function onResize() {
    measure();
    sizeCanvas();
    buildDots();
    lastDrawn = -1;
    // reset guards so everything re-applies at new dimensions
    last.dotsTop = last.dotsX = last.sv = last.exp = last.proj =
      last.blur = last.content = last.cue = -1;
    kick();
  }

  window.addEventListener('scroll', kick, { passive: true });
  window.addEventListener('resize', onResize, { passive: true });
  window.addEventListener('orientationchange', onResize, { passive: true });

  // initial paint
  measure();
  sizeCanvas();
  buildDots();
  preloadFrames();
  update();
  kick();

  // some browsers restore scroll after load; re-measure once fonts/layout settle
  window.addEventListener('load', () => { onResize(); });
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(() => { buildDots(); measure(); kick(); });
  }
})();
