/* =========================================================
   CABALGATA PANCHO RAMOS — COMPORTAMIENTO
   No hace falta tocar este archivo para cambiar contenidos:
   editá js/config.js y js/content.js
   ========================================================= */
(function () {
  "use strict";
  var C = window.CABALGATA || {};
  var D = window.CONTENT || {};
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Imágenes ---------- */
  function img(key, w) {
    if (window.__IMG && window.__IMG[key]) return window.__IMG[key];
    return "img/" + key + "-" + (w || 1280) + ".webp";
  }
  function dim(key) {
    var s = (window.IMAGE_SIZES || {})[key];
    return s ? ' width="' + s[0] + '" height="' + s[1] + '"' : "";
  }
  function srcset(key) {
    if (window.__IMG) return "";
    return img(key, 640) + " 640w, " + img(key, 1280) + " 1280w";
  }

  /* ---------- Texto: {{VARIABLES}} y [COMPLETAR] ---------- */
  function esc(t) { return String(t).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function fmt(t) {
    var h = esc(t).replace(/\{\{(\w+)\}\}/g, function (_, k) { var v = C[k]; if (Array.isArray(v)) v = v.length > 1 ? v.slice(0, -1).join(", ") + " y " + v[v.length - 1] : v.join(""); return v != null ? esc(v) : ""; });
    h = h.replace(/\[COMPLETAR\][^.]*\.?|\[COMPLETAR\]/g, function (m) { return '<span class="is-todo">' + m + "</span>"; });
    if (C.EMAIL) h = h.split(esc(C.EMAIL)).join('<a href="mailto:' + esc(C.EMAIL) + '">' + esc(C.EMAIL) + "</a>");
    if (C.INSTAGRAM_HANDLE) h = h.split(esc(C.INSTAGRAM_HANDLE)).join('<a href="' + esc(C.INSTAGRAM_URL) + '" target="_blank" rel="noopener">' + esc(C.INSTAGRAM_HANDLE) + "</a>");
    return h;
  }

  /* ---------- Datos centrales → página ---------- */
  $$("[data-bind]").forEach(function (el) { var k = el.getAttribute("data-bind"); if (C[k] != null) el.textContent = C[k]; });
  $$("[data-link]").forEach(function (el) { var k = el.getAttribute("data-link"); if (C[k]) el.href = C[k]; });
  $$("[data-mail]").forEach(function (el) { if (C.EMAIL) el.href = "mailto:" + C.EMAIL; });

  /* ---------- Instituciones beneficiarias ---------- */
  $$("[data-beneficiaries]").forEach(function (el) {
    el.innerHTML = (C.BENEFICIARIES || []).map(function (b) { return "<li>" + esc(b) + "</li>"; }).join("");
  });

  /* ---------- Cronograma ---------- */
  var tl = $("#timeline");
  if (tl && D.SCHEDULE) tl.innerHTML = D.SCHEDULE.map(function (s, i) {
    var todo = !s.time || /x/i.test(s.time);
    var same = i > 0 && D.SCHEDULE[i - 1].time === s.time;
    return '<li class="tl reveal' + (same ? " tl--cont" : "") + '"><span class="tl__time' + (todo ? " is-todo" : "") + '">' + (same ? "" : esc(todo ? "--:--" : s.time)) +
      '</span><div><h3>' + esc(s.title) + "</h3><p>" + fmt(s.text) + "</p></div></li>";
  }).join("");

  /* ---------- Recorrido ---------- */
  var rl = $("#routeList");
  if (rl && D.ROUTE) rl.innerHTML = D.ROUTE.map(function (r, i) {
    var ico = r.icon || String(i + 1);
    return '<li><span class="ico" aria-hidden="true">' + ico + '</span><div><strong>' + esc(r.label) + '</strong><span class="t">' + fmt(r.text) + "</span></div></li>";
  }).join("");
  if (C.MAP_EMBED_URL) $("#mapBox").innerHTML = '<iframe src="' + esc(C.MAP_EMBED_URL) + '" title="Mapa del recorrido" loading="lazy" allowfullscreen></iframe>';

  /* ---------- Antes de participar ---------- */
  var bl = $("#beforeList");
  if (bl && D.BEFORE) bl.innerHTML = D.BEFORE.map(function (b) {
    return "<details><summary>" + esc(b.title) + "</summary><p>" + fmt(b.text) + "</p></details>";
  }).join("");

  /* ---------- FAQ ---------- */
  var fl = $("#faqList");
  if (fl && D.FAQ) fl.innerHTML = D.FAQ.map(function (f) {
    return '<details class="reveal"><summary>' + esc(f.q) + '</summary><div class="ans"><p>' + fmt(f.a) + "</p></div></details>";
  }).join("");

  /* ---------- Instagram ---------- */
  var ig = $("#instaGrid");
  if (ig && D.INSTAGRAM_GRID) ig.innerHTML = D.INSTAGRAM_GRID.map(function (p) {
    return '<a href="' + esc(p.link || C.INSTAGRAM_URL) + '" target="_blank" rel="noopener" aria-label="Ver en Instagram"><img src="' + img(p.img, 640) + '"' + dim(p.img) + ' alt="" loading="lazy"></a>';
  }).join("");

  /* ---------- Video ---------- */
  if (C.VIDEO_URL) {
    var vf = $("#videoFrame"), u = C.VIDEO_URL;
    vf.innerHTML = /youtu|vimeo/.test(u)
      ? '<iframe src="' + esc(u) + '" title="Video de la Cabalgata" loading="lazy" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>'
      : '<video src="' + esc(u) + '" poster="' + img("video") + '" controls playsinline preload="none"></video>';
  }

  /* ---------- Cuenta regresiva ---------- */
  var cd = $("#countdown");
  if (cd && C.EVENT_DATE) {
    var p = C.EVENT_DATE.split("-"), ev = new Date(+p[0], +p[1] - 1, +p[2]), now = new Date();
    now.setHours(0, 0, 0, 0);
    var days = Math.round((ev - now) / 864e5);
    if (days > 1) { cd.textContent = "Faltan " + days + " días"; cd.hidden = false; }
    else if (days === 1) { cd.textContent = "¡Es mañana!"; cd.hidden = false; }
    else if (days === 0) { cd.textContent = "¡Es hoy!"; cd.hidden = false; }
  }

  /* ---------- Galería ---------- */
  var INITIAL = 12, expanded = false, filter = "todas";
  var gal = (D.GALLERY || []).map(function (g) { g.tags = (g.tags || []).concat("anteriores"); return g; });
  var mas = $("#masonry"), chips = $("#chips"), more = $("#moreBtn");
  if (chips) chips.innerHTML = (D.GALLERY_FILTERS || []).map(function (f, i) {
    return '<button class="chip" role="tab" type="button" data-f="' + f.id + '" aria-selected="' + (i === 0) + '">' + esc(f.label) + "</button>";
  }).join("");
  if (mas) mas.innerHTML = gal.map(function (g, i) {
    return '<button class="tile" type="button" data-i="' + i + '" aria-label="Ampliar: ' + esc(g.alt) + '"><img src="' + img(g.img, 640) + '"' + dim(g.img) +
      (srcset(g.img) ? ' srcset="' + srcset(g.img) + '" sizes="(min-width:900px) 25vw, (min-width:600px) 33vw, 50vw"' : "") +
      ' alt="' + esc(g.alt) + '" loading="lazy"></button>';
  }).join("");
  function applyGallery(anim) {
    var shown = 0;
    $$(".tile", mas).forEach(function (t) {
      var g = gal[+t.dataset.i], match = filter === "todas" || g.tags.indexOf(filter) > -1;
      var vis = match && (expanded || filter !== "todas" || shown < INITIAL);
      if (match) shown++;
      t.classList.toggle("is-hidden", !vis);
      if (anim && vis) { t.classList.remove("fade-in"); void t.offsetWidth; t.classList.add("fade-in"); }
    });
    more.hidden = expanded || filter !== "todas" || gal.length <= INITIAL;
  }
  if (mas) {
    applyGallery(false);
    chips.addEventListener("click", function (e) {
      var b = e.target.closest(".chip"); if (!b) return;
      filter = b.dataset.f;
      $$(".chip", chips).forEach(function (c) { c.setAttribute("aria-selected", c === b); });
      applyGallery(true);
    });
    more.addEventListener("click", function () { expanded = true; applyGallery(true); });
  }

  /* ---------- Lightbox ---------- */
  var lb = $("#lightbox"), lbImg = $("#lbImg"), lbCap = $("#lbCap"), cur = [], idx = 0, lastFocus;
  function show(i) {
    idx = (i + cur.length) % cur.length;
    var g = gal[cur[idx]];
    lbImg.src = img(g.img, 1280); lbImg.alt = g.alt;
    lbCap.textContent = g.alt + " · " + (C.PHOTO_EDITION || "") + " · Foto: " + (C.PHOTO_CREDIT || "");
    lbImg.style.animation = "none"; void lbImg.offsetWidth; lbImg.style.animation = "";
  }
  function openLb(i) {
    cur = $$(".tile:not(.is-hidden)", mas).map(function (t) { return +t.dataset.i; });
    lastFocus = document.activeElement;
    lb.hidden = false; document.body.style.overflow = "hidden";
    show(cur.indexOf(i)); $("#lbClose").focus();
  }
  function closeLb() { lb.hidden = true; document.body.style.overflow = ""; if (lastFocus) lastFocus.focus(); }
  if (mas) mas.addEventListener("click", function (e) { var t = e.target.closest(".tile"); if (t) openLb(+t.dataset.i); });
  $("#lbClose").addEventListener("click", closeLb);
  $("#lbPrev").addEventListener("click", function () { show(idx - 1); });
  $("#lbNext").addEventListener("click", function () { show(idx + 1); });
  lb.addEventListener("click", function (e) { if (e.target === lb) closeLb(); });
  var tx = null;
  lb.addEventListener("touchstart", function (e) { tx = e.touches[0].clientX; }, { passive: true });
  lb.addEventListener("touchend", function (e) {
    if (tx == null) return; var dx = e.changedTouches[0].clientX - tx; tx = null;
    if (Math.abs(dx) > 45) show(idx + (dx < 0 ? 1 : -1));
  });

  /* ---------- Menú ---------- */
  var btn = $("#menuBtn"), menu = $("#menu");
  function setMenu(open) {
    btn.setAttribute("aria-expanded", open); btn.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
    menu.classList.toggle("is-open", open); document.body.classList.toggle("menu-open", open);
  }
  btn.addEventListener("click", function () { setMenu(btn.getAttribute("aria-expanded") !== "true"); });
  menu.addEventListener("click", function (e) { if (e.target.closest("a")) setMenu(false); });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") { if (!lb.hidden) closeLb(); else setMenu(false); }
    if (!lb.hidden && e.key === "ArrowRight") show(idx + 1);
    if (!lb.hidden && e.key === "ArrowLeft") show(idx - 1);
  });

  /* ---------- Aparición al hacer scroll ---------- */
  if ("IntersectionObserver" in window && !reduced) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); } });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    $$(".reveal, .reveal-img").forEach(function (el) { io.observe(el); });
  } else {
    $$(".reveal, .reveal-img").forEach(function (el) { el.classList.add("is-in"); });
  }

  /* ---------- Scroll: header, CTA flotante, parallax, huella ---------- */
  var header = $("#header"), hero = $("#inicio"), fcta = $("#floatCta"), mainCta = $("#mainCta"), contacto = $("#contacto");
  var trail = $("#trail"), fill = $("#trailFill"), par = $$("[data-parallax]"), ticking = false;
  function inView(el) { var r = el.getBoundingClientRect(); return r.top < innerHeight && r.bottom > 0; }
  function onScroll() {
    ticking = false;
    var y = scrollY, hh = hero.offsetHeight;
    header.classList.toggle("is-solid", y > hh - 90);
    fcta.classList.toggle("is-on", y > hh * 0.8 && !inView(mainCta) && !inView(contacto));
    if (!reduced) {
      par.forEach(function (el) {
        var r = el.parentElement.getBoundingClientRect();
        if (r.bottom < 0 || r.top > innerHeight) return;
        var off = (r.top + r.height / 2 - innerHeight / 2) * -0.08;
        el.style.transform = "translate3d(0," + off.toFixed(1) + "px,0)";
      });
    }
    if (trail && fill) {
      var tr = trail.getBoundingClientRect();
      var prog = Math.min(1, Math.max(0, (innerHeight * 0.6 - tr.top) / tr.height));
      fill.style.setProperty("--p", prog.toFixed(3));
    }
  }
  addEventListener("scroll", function () { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
  addEventListener("resize", onScroll);
  onScroll();
})();
