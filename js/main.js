/* =========================================================================
   Sachin Kumar — portfolio  ·  scroll engine
   One rAF loop drives phase-2 cross-fades and the phase-3 frame-sequence
   scrub (canvas) with its blur reveal.

   Phase 3 uses a decoded image sequence rather than a scrubbed <video>:
   programmatic video seeking is unreliable across servers (needs HTTP
   range support) and janks badly on mobile Safari. Drawing pre-decoded
   frames to a canvas is frame-accurate, buttery smooth, and works on any
   host and on file://.
   Everything reads real rendered pixel heights so it stays locked to the
   CSS sticky pins on any viewport (mobile svh / browser chrome included).
   ========================================================================= */
(function () {
  "use strict";

  var clamp = function (v, a, b) { return v < a ? a : v > b ? b : v; };
  var smooth = function (x, a, b) {
    if (a === b) return x < a ? 0 : 1;
    var t = clamp((x - a) / (b - a), 0, 1);
    return t * t * (3 - 2 * t);
  };

  // ---- elements ----
  var phase2      = document.getElementById("phase2");
  var panelExp    = document.getElementById("panelExp");
  var panelProj   = document.getElementById("panelProj");
  var phase3      = document.getElementById("phase3");
  var scrubCanvas = document.getElementById("scrubCanvas");
  var p3Veil      = document.getElementById("p3Veil");
  var p3Content   = document.getElementById("p3Content");

  var heroVideo   = document.getElementById("heroVideo");
  var phase2Video = document.getElementById("phase2Video");
  var footerVideo = document.getElementById("footerVideo");

  // ---------------------------------------------------------------------
  // Geometry cache (recomputed on resize / orientation change)
  // ---------------------------------------------------------------------
  var M = { p2Top: 0, p2Range: 1, p3Top: 0, p3Range: 1 };

  function measure() {
    var winH = window.innerHeight;
    var scrollY = window.scrollY || window.pageYOffset || 0;

    if (phase2) {
      var pin2 = phase2.querySelector(".phase2__pin");
      var pin2H = pin2 ? pin2.offsetHeight : winH;
      M.p2Top = phase2.getBoundingClientRect().top + scrollY;
      M.p2Range = Math.max(1, phase2.offsetHeight - pin2H);
    }
    if (phase3) {
      var pin3 = phase3.querySelector(".phase3__pin");
      var pin3H = pin3 ? pin3.offsetHeight : winH;
      M.p3Top = phase3.getBoundingClientRect().top + scrollY;
      M.p3Range = Math.max(1, phase3.offsetHeight - pin3H);
    }
  }

  // ---------------------------------------------------------------------
  // Phase 3 frame sequence
  // ---------------------------------------------------------------------
  var FRAME_COUNT = 215;
  var pad3 = function (n) { n = String(n); return n.length >= 3 ? n : ("000" + n).slice(-3); };
  var framePath = function (i) { return "media/frames3/f_" + pad3(i + 1) + ".jpg"; };

  var scrubCtx = scrubCanvas ? scrubCanvas.getContext("2d", { alpha: true, desynchronized: true }) : null;
  var frames = new Array(FRAME_COUNT);
  var frameLoaded = new Array(FRAME_COUNT);
  var framesRequested = false;
  var loadedCount = 0;
  var drawnFrame = -1;
  var easedFrame = 0;
  var targetFrame = 0;

  function requestFrames() {
    if (framesRequested || !scrubCanvas) return;
    framesRequested = true;
    for (var i = 0; i < FRAME_COUNT; i++) {
      (function (idx) {
        var img = new Image();
        img.decoding = "async";
        img.onload = function () {
          frameLoaded[idx] = true;
          loadedCount++;
          if (drawnFrame < 0) drawFrame(0); // first available paint
        };
        img.onerror = function () { frameLoaded[idx] = false; };
        img.src = framePath(idx);
        frames[idx] = img;
      })(i);
    }
  }
  window.__scrubLoaded = function () { return loadedCount; }; // test hook

  function sizeCanvas() {
    if (!scrubCanvas) return;
    var rect = scrubCanvas.getBoundingClientRect();
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var w = Math.max(1, Math.round(rect.width * dpr));
    var h = Math.max(1, Math.round(rect.height * dpr));
    if (w !== scrubCanvas.width || h !== scrubCanvas.height) {
      scrubCanvas.width = w;
      scrubCanvas.height = h;
    }
    drawnFrame = -1; // force a repaint at the new size
  }

  function nearestLoaded(idx) {
    if (frameLoaded[idx]) return idx;
    for (var r = 1; r < FRAME_COUNT; r++) {
      if (idx - r >= 0 && frameLoaded[idx - r]) return idx - r;
      if (idx + r < FRAME_COUNT && frameLoaded[idx + r]) return idx + r;
    }
    return -1;
  }

  function drawFrame(idx) {
    if (!scrubCtx) return;
    var use = nearestLoaded(idx);
    if (use < 0) return;
    var img = frames[use];
    if (!img || !img.naturalWidth) return;
    var cw = scrubCanvas.width, ch = scrubCanvas.height;
    var iw = img.naturalWidth, ih = img.naturalHeight;
    var scale = Math.max(cw / iw, ch / ih);
    var dw = iw * scale, dh = ih * scale;
    scrubCtx.drawImage(img, (cw - dw) / 2, (ch - dh) / 2, dw, dh);
    drawnFrame = use;
  }

  // ---------------------------------------------------------------------
  // Background videos: play only while on screen
  // ---------------------------------------------------------------------
  function autoManage(video) {
    if (!video) return;
    var play = function () { var p = video.play(); if (p && p.catch) p.catch(function () {}); };
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) { if (e.isIntersecting) play(); else video.pause(); });
      }, { threshold: 0.02 });
      io.observe(video);
    } else { play(); }
  }
  autoManage(heroVideo);
  autoManage(phase2Video);
  autoManage(footerVideo);

  // Gate phase-3 work + kick off frame loading when it comes near view
  var p3Active = true;
  if (phase3 && "IntersectionObserver" in window) {
    var io3 = new IntersectionObserver(function (entries) {
      p3Active = entries[0].isIntersecting;
      if (p3Active) requestFrames();
    }, { rootMargin: "150% 0px 150% 0px" });
    io3.observe(phase3);
  }
  // also begin loading on the first real interaction, so frames are ready early
  ["wheel", "touchstart", "pointerdown", "keydown"].forEach(function (ev) {
    window.addEventListener(ev, requestFrames, { once: true, passive: true });
  });

  // ---------------------------------------------------------------------
  // Render loop
  // ---------------------------------------------------------------------
  var curVeil = -1, curContent = -1;

  function frame() {
    var scrollY = window.scrollY || window.pageYOffset || 0;

    // phase 2 cross-fades
    if (panelExp && panelProj) {
      var p2 = clamp((scrollY - M.p2Top) / M.p2Range, 0, 1);
      var expO = smooth(p2, 0.0, 0.14) * (1 - smooth(p2, 0.40, 0.56));
      // projects stay lit once shown, so they ride the section up into phase 3
      // (no empty-deck dead-zone during the hand-off)
      var projO = smooth(p2, 0.40, 0.56);
      panelExp.style.opacity = expO.toFixed(3);
      panelExp.style.transform = "translateY(" + ((1 - expO) * 16).toFixed(1) + "px)";
      panelExp.style.pointerEvents = expO > 0.6 ? "auto" : "none";
      panelProj.style.opacity = projO.toFixed(3);
      panelProj.style.transform = "translateY(" + ((1 - projO) * 16).toFixed(1) + "px)";
      panelProj.style.pointerEvents = projO > 0.6 ? "auto" : "none";
    }

    // phase 3 scrub -> liquid-glass reveal -> dwell (hold) -> exit
    if (scrubCanvas && p3Active) {
      var p3 = clamp((scrollY - M.p3Top) / M.p3Range, 0, 1);

      // frames scrub across the first ~56% of the section
      var scrubP = clamp(p3 / 0.56, 0, 1);
      targetFrame = scrubP * (FRAME_COUNT - 1);
      easedFrame += (targetFrame - easedFrame) * 0.4;
      if (Math.abs(targetFrame - easedFrame) < 0.5) easedFrame = targetFrame;
      var fi = clamp(Math.round(easedFrame), 0, FRAME_COUNT - 1);
      if (fi !== drawnFrame) drawFrame(fi);

      // the video recedes into a soft frost as the clip resolves
      var veil = smooth(p3, 0.46, 0.62);
      if (Math.abs(veil - curVeil) > 0.004) {
        curVeil = veil;
        scrubCanvas.style.filter = "blur(" + (veil * 8).toFixed(2) + "px) brightness(" + (1 - veil * 0.30).toFixed(3) + ")";
        p3Veil.style.background = "rgba(10,9,8," + (veil * 0.42).toFixed(3) + ")";
        p3Veil.style.opacity = "1";
      }

      // skills glass lifts + fades in, reaches full at 0.70 and then HOLDS
      // in place until 1.0 (the pin is still stuck, so it dwells on screen)
      var content = smooth(p3, 0.56, 0.70);
      if (Math.abs(content - curContent) > 0.004) {
        curContent = content;
        p3Content.style.opacity = content.toFixed(3);
        p3Content.style.transform =
          "translateY(" + ((1 - content) * 30).toFixed(1) + "px) scale(" + (0.975 + content * 0.025).toFixed(4) + ")";
      }
    }

    requestAnimationFrame(frame);
  }

  // ---------------------------------------------------------------------
  // Boot
  // ---------------------------------------------------------------------
  function boot() {
    measure();
    sizeCanvas();
    curVeil = -1; curContent = -1;
    requestAnimationFrame(frame);
  }

  var reMeasure = (function () {
    var t;
    return function () {
      clearTimeout(t);
      t = setTimeout(function () { measure(); sizeCanvas(); curVeil = -1; curContent = -1; }, 120);
    };
  })();

  window.addEventListener("resize", reMeasure, { passive: true });
  window.addEventListener("orientationchange", function () { setTimeout(function () { measure(); sizeCanvas(); curVeil = -1; }, 250); });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(reMeasure);
  window.addEventListener("load", reMeasure);

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
