// Snack – Ansichten: Startseite, Karte, Ergebnis und die Bedienung per Klick und Tastatur.
(function () {
  'use strict';
  const K = window.Snack, F = window.SnackFormen, T = K.T, esc = K.esc, fmt = K.fmt, tx = K.tx;
  const app = document.getElementById("app");
  const reduziert = !!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  const MINUTEN = { 5: 2, 9: 3, 15: 5 };
  const SYSTEME = { linux: "Linux", mac: "macOS", windows: "Windows" };
  const BUENDEL = { thema: "sessions", form: "paare" };     // steht für ein Paare-Bündel, das aus vier Begriffen besteht
  let ansicht = "start";
  let R = null;            // die laufende Runde
  let bereit = null;       // die schon ausgeloste nächste Runde, damit die Vorschau auf der Startseite stimmt

  // ───────── Runde ─────────
  function starten(thema) {
    const o = { thema: thema || null, modus: K.S.modus, n: K.S.laenge };
    const r = K.rundeNeu(o, !thema && bereit ? bereit : null);
    bereit = null;
    if (!r.items.length) return;
    R = r; zeige();
  }
  function zeige() {
    const it = R.items[R.i];
    R.z = F.formen[it.form].start(it);
    R.antwort = null;
    ansicht = "karte";
    renderKarte(true);
  }
  // erg = Ergebnis der Kartenart, sobald beantwortet. null = nur neu zeichnen (z. B. nach dem Ankreuzen).
  function ergebnis(erg) {
    if (erg) {
      const it = R.items[R.i]; it.erg = erg; R.antwort = erg;
      if (R.probe) { if (erg.ok) R.richtig++; else R.falsch.push(it); }      // Vorschau: nichts im Lernstand buchen
      else K.werten(R, it, erg);
    }
    renderKarte(false);
  }
  function weiter() {
    if (!R || !R.antwort) return;
    if (R.i < R.items.length - 1) { R.i++; zeige(); return; }
    if (!R.probe) K.rundeEnde(R, false);
    ansicht = "ende";
    renderEnde();
  }
  function home() {
    if (R && ansicht === "karte" && !R.probe) K.rundeEnde(R, true);     // abgebrochene Runde zählt für Verlauf und Mischen mit
    ansicht = "start";
    renderStart();
  }
  // Vorschau einzelner Karten, ohne den Lernstand zu ändern: index.html?karten=git-l-commit,gui-toast:wf
  // ":wf" zeigt die Karte als „Wahr oder falsch“, "begriffe" ein Paare-Bündel aus vier Session-Begriffen.
  function vorschau() {
    let p = "";
    try { p = new URLSearchParams(location.search).get("karten") || ""; } catch (e) { /* ohne Adresszeile */ }
    const items = p.split(",").map(x => {
      const [id, form] = x.trim().split(":");
      if (id === "begriffe") { const t = K.shuffle(K.pool("sessions")).slice(0, 4); return t.length === 4 ? { form: "paare", teile: t.map(k => ({ k, frueh: false })), frueh: false } : null; }
      const k = K.nachId[id];
      return k ? { k, form: form === "wf" ? "wf" : K.formVon(k), frueh: false } : null;
    }).filter(Boolean);
    if (!items.length) return false;
    R = K.rundeNeu({ thema: null }, { items, info: { modus: "mix", n: items.length } });
    R.probe = true;
    zeige();
    return true;
  }

  // ───────── Ansichten ─────────
  function banner() {
    let h = "";
    if (!K.kartenGeladen) h += '<div class="banner">' + esc(T("banner_karten")) + "</div>";
    if (!K.eigeneGeladen) h += '<div class="banner">' + esc(T("banner_eigene")) + "</div>";
    if (!K.begriffeGeladen) h += '<div class="banner">' + esc(T("banner_begriffe")) + "</div>";
    if (!K.speicherOk) h += '<div class="banner">' + esc(T("banner_speicher")) + "</div>";
    return h;
  }
  function themeAnwenden() {
    const th = K.S.theme;
    if (th === "light" || th === "dark") document.documentElement.dataset.theme = th;
    else delete document.documentElement.dataset.theme;
    document.documentElement.lang = K.lang();
  }
  const seg = (aktion, werte, aktiv, label) => '<div class="seg" role="group" aria-label="' + esc(label) + '">' + werte.map(w =>
    '<button class="seg-b' + (w.v === aktiv ? " on" : "") + '" data-action="' + aktion + '" data-wert="' + w.v + '" aria-pressed="' + (w.v === aktiv) + '">' + esc(w.t) + "</button>").join("") + "</div>";
  // Eine Zeile „Frage → richtige Antwort“ für „Zum Merken“ und den Rückblick
  function merkZeile(k) {
    const code = K.formVon(k) === "wahl" ? String(tx(k.code) || "") : "";
    let frage = code && !code.includes("\n") ? "<code>" + esc(code) + "</code>" : fmt(K.frageText(k)), antwort = fmt(K.loesung(k));
    if (K.formVon(k) === "bild") {                       // „Tippe auf: Toast → Toast“ sagt nichts, darum Name und erster Satz der Erklärung
      frage = fmt(K.teilName(k.ziel)); antwort = fmt(String(K.erklaerungText(k)).split(/(?<=[.!?])\s/)[0]);
    }
    return '<li><span class="dot" style="--c:var(--t-' + k.thema + ')"></span><div><div class="rv-q">' + frage + '</div><div class="rv-a">' + antwort + "</div></div></li>";
  }

  const medaille = (a, hat) => '<div class="medaille' + (hat ? " hat" : "") + '"><span class="abz-kreis">' + esc(tx(a.zeichen)) + '</span><span class="abz-text"><b>' +
    esc(a[K.lang()][0]) + "</b><span>" + esc(a[K.lang()][1]) + "</span></span></div>";
  // Buntes Papier von oben, nur nach einer fehlerfreien Runde und nur, wenn Effekte an sind
  function konfetti() {
    if (!K.S.effekte || reduziert) return;
    const farben = ["var(--accent)", "var(--ok)", "var(--hl)", "var(--t-git)", "var(--t-web)", "var(--t-sessions)"];
    const box = document.createElement("div");
    box.className = "konfetti"; box.setAttribute("aria-hidden", "true");
    for (let i = 0; i < 36; i++) {
      const p = document.createElement("i");
      p.style.left = Math.random() * 100 + "%";
      p.style.background = farben[i % farben.length];
      p.style.animationDuration = 1.6 + Math.random() * 1.4 + "s";
      p.style.animationDelay = Math.random() * 0.5 + "s";
      box.appendChild(p);
    }
    document.body.appendChild(box);
    setTimeout(() => box.remove(), 3800);
  }

  function renderStart(fokus) {
    const S = K.S, g = K.stats(null), serie = K.serieJetzt(), heuteDa = S.serie.letzter === K.heute();
    bereit = K.rundeWaehlen({ thema: null });
    const inf = bereit.info, nichtsOffen = g.faellig === 0 && g.neu === 0, teile = [];
    if (inf.neu) teile.push(T("neu_n", { x: inf.neu }));
    if (inf.alt) teile.push(inf.alt === 1 ? T("wdh_1") : T("wdh_n", { x: inf.alt }));
    if (inf.extra) teile.push(T("extra_n", { x: inf.extra }));
    const sub = nichtsOffen && S.modus === "mix" ? T("sub_fertig") : T("sub", { n: bereit.items.length, min: MINUTEN[S.laenge] || 3, teile: teile.join(", ") });

    const rows = Object.keys(K.THEMEN).map(t => {
      const s = K.stats(t), leerT = s.total === 0, wachsend = t === "sessions" || t === "projekte";
      if (leerT && !wachsend) return "";
      const subT = leerT ? T(t === "sessions" ? "leer_sessions" : "leer_projekte")
        : T("thema_sub", { g: s.gelernt, t: s.total }) + (s.faellig ? T("thema_faellig", { f: s.faellig }) : "");
      const pSeen = s.total ? Math.round(s.gesehen / s.total * 100) : 0, pLearn = s.total ? Math.round(s.gelernt / s.total * 100) : 0;
      return '<button class="topic" data-action="start" data-thema="' + t + '" style="--c:var(--t-' + t + ')"' + (leerT ? " disabled" : "") + ">" +
        '<span class="dot"></span><span class="t-main"><span class="t-name">' + esc(tx(K.THEMEN[t])) + '</span><span class="t-sub">' + esc(subT) + "</span></span>" +
        '<span class="bar"><i class="seen" style="width:' + pSeen + '%"></i><i class="learned" style="width:' + pLearn + '%"></i></span>' +
        '<span class="chev" aria-hidden="true">›</span></button>';
    }).join("");

    const runden = S.verlauf.slice(-6).reverse();
    const rueckblick = !runden.length ? "" : '<h2 class="section-title mt">' + T("verlauf_titel") + '</h2><div class="rb">' + runden.map(v => {
      const falsche = (v.k || []).filter(x => !x[2]).map(x => K.nachId[x[0]]).filter(Boolean);
      const kopf = [K.datumKurz(v.d), T("modus_" + v.m), v.t && K.THEMEN[v.t] ? tx(K.THEMEN[v.t]) : "", T("verlauf_zeile", { r: v.ok, n: v.n }), v.ab ? T("abgebrochen") : ""].filter(Boolean).join(" · ");
      return "<details><summary>" + esc(kopf) + "</summary>" + (falsche.length ? "<ul>" + falsche.map(merkZeile).join("") + "</ul>" : '<p class="rb-ok">' + T("verlauf_alles") + "</p>") + "</details>";
    }).join("") + "</div>";

    app.innerHTML =
      '<header class="top"><div class="logo"><span class="logo-mark">S</span>Snack</div><div class="top-r">' +
      '<button class="btn ghost small" data-action="sprache">' + T("sprache") + "</button>" +
      '<button class="btn ghost small" data-action="theme">' + T("design", { x: T("design_" + (S.theme || "auto")) }) + "</button></div></header>" +
      banner() +
      '<section class="card hero"><div><h1>' + (nichtsOffen && S.modus === "mix" ? T("titel_fertig") : heuteDa ? T("titel_noch") : T("titel_bereit")) + "</h1><p>" + esc(sub) + "</p>" +
      (inf.hinweis ? '<p class="hinweis">' + esc(inf.hinweis) + "</p>" : "") + "</div>" +
      '<div class="hero-wahl"><div class="wahl-zeile"><span class="wahl-lbl">' + T("modus_lbl") + "</span>" +
      seg("modus", K.MODI.map(v => ({ v, t: T("modus_" + v) })), S.modus, T("modus_lbl")) + "</div>" +
      '<div class="wahl-zeile"><span class="wahl-lbl">' + T("laenge_lbl") + "</span>" +
      seg("laenge", K.LAENGEN.map(v => ({ v, t: String(v) })), S.laenge, T("laenge_lbl")) + "</div></div>" +
      '<button class="btn primary big" data-action="start" id="los"' + (bereit.items.length ? "" : " disabled") + ">" + (nichtsOffen && S.modus === "mix" ? T("extra_runde") : T("start")) + "</button></section>" +
      '<section class="stats">' +
      '<div class="stat"><div class="num">' + serie + '</div><div class="lbl">' + (serie === 1 ? T("serie_1") : T("serie_n")) + (heuteDa ? T("heute_ok") : "") + "</div></div>" +
      '<div class="stat"><div class="num">' + g.gelernt + "<span>/" + g.total + '</span></div><div class="lbl">' + T("gelernt") + "</div></div>" +
      '<div class="stat"><div class="num">' + g.faellig + '</div><div class="lbl">' + T("faellig") + "</div></div>" +
      "</section>" +
      '<details class="abz"><summary>' + T("abzeichen_titel") + " " + K.ABZEICHEN.filter(a => S.abzeichen[a.id]).length + "/" + K.ABZEICHEN.length +
      '</summary><div class="abz-liste">' + K.ABZEICHEN.map(a => medaille(a, !!S.abzeichen[a.id])).join("") + "</div></details>" +
      '<h2 class="section-title">' + T("themen_titel") + '</h2><div class="topics">' + rows + "</div>" +
      rueckblick +
      '<footer class="foot"><span>' + T("tasten") + '</span><span class="foot-r">' +
      '<button class="linkish neutral" data-action="system">' + T("system", { x: SYSTEME[K.system()] }) + "</button>" +
      '<button class="linkish neutral" data-action="effekte">' + T("effekte", { x: T(S.effekte ? "an" : "aus") }) + "</button>" +
      '<button class="linkish" data-action="reset">' + T("reset") + "</button></span></footer>";
    const ziel = (fokus && app.querySelector(fokus)) || document.getElementById("los");
    if (ziel) ziel.focus({ preventScroll: true });
  }

  function renderKarte(neu) {
    const it = R.items[R.i], k = it.k || BUENDEL, f = F.formen[it.form], a = R.antwort, n = R.items.length;
    const fortschritt = Math.round((R.i + (a ? 1 : 0)) / n * 100);
    const art = it.form === "wahl" ? tx(K.TYPEN[k.typ]) : tx(K.FORMEN[it.form]);
    const frage = it.k ? K.frageText(k) : T("paare_frage");

    let fb = "";
    if (a) {
      const erkl = it.k ? K.erklaerungText(k) : "", tipp = it.k ? tx(k.tipp) : "";
      fb = '<div class="fb ' + (a.ok ? "ok" : "no") + '"><div class="fb-head">' + (a.best ? T("richtig") : a.ok ? T("auch_ok") : T("falsch")) + "</div>" +
        (f.fb ? f.fb(it, R.z, a) : "") +
        (erkl ? "<p>" + fmt(erkl) + "</p>" : "") +
        F.promptBlock(it.k ? K.promptText(k) : "") +
        (tipp ? '<div><div class="lbl">' + T("probier") + '</div><div class="tipp">' + fmt(tipp) + "</div></div>" : "") +
        "</div>" +
        '<div class="next-row"><span class="hint">Enter</span><button class="btn primary" data-action="next" id="weiter">' +
        (R.i < n - 1 ? T("weiter") : T("ergebnis")) + "</button></div>";
    }

    app.innerHTML =
      '<div class="round-top"><button class="btn ghost small" data-action="home">' + T("zurueck") + "</button>" +
      '<div class="progress" role="progressbar" aria-valuenow="' + fortschritt + '" aria-valuemin="0" aria-valuemax="100"><i style="width:' + fortschritt + '%"></i></div>' +
      '<span class="count">' + (R.i + 1) + "/" + n + "</span></div>" +
      '<div class="' + (a ? "answered" : "") + '">' +
      '<div class="tags"><span class="tag" style="--c:var(--t-' + k.thema + ')"><span class="dot"></span>' + esc(tx(K.THEMEN[k.thema])) + "</span>" +
      '<span class="tag">' + esc(art) + "</span>" + (k.projekt ? '<span class="tag">' + esc(k.projekt) + "</span>" : "") +
      (it.frueh ? '<span class="tag soft">' + T("extra_tag") + "</span>" : "") + "</div>" +
      '<h2 class="frage">' + fmt(frage) + "</h2>" + F.mock(k) + (f.code ? f.code(it, R.z, a) : F.codeBlock(k)) +
      (f.hinweis && !a ? '<p class="hinweis">' + T(f.hinweis) + "</p>" : "") +
      f.html(it, R.z, a) + fb + "</div>";

    if (neu) window.scrollTo(0, 0);
    if (a) {
      const w = document.getElementById("weiter");
      w.focus({ preventScroll: true });
      w.scrollIntoView({ block: "nearest", behavior: reduziert ? "auto" : "smooth" });
    }
  }

  function renderEnde() {
    const n = R.items.length, r = R.richtig, f = R.falsch.length, serie = K.serieJetzt();
    const titel = r === n ? T("ende_perfekt") : r >= Math.ceil(n * 2 / 3) ? T("ende_stark") : T("ende_gut");
    const text = f ? (f === 1 ? T("ende_falsch_1") : T("ende_falsch_n", { x: f })) : T("ende_ok");
    const liste = R.falsch.map(it => it.teile ? it.teile.filter((t, i) => !it.erg.teile[i]).map(t => merkZeile(t.k)).join("") : merkZeile(it.k)).join("");

    app.innerHTML =
      '<section class="card end"><div class="big">' + r + "<span> / " + n + "</span></div><h1>" + titel + "</h1><p>" + esc(text) + "</p>" +
      '<p style="margin-top:6px">' + (serie === 1 ? T("serie_zeile_1") : T("serie_zeile_n", { x: serie })) + "</p>" +
      (R.neueAbzeichen && R.neueAbzeichen.length ? '<div class="abz-neu"><div class="lbl">' + T("abzeichen_neu") + "</div>" + R.neueAbzeichen.map(a => medaille(a, true)).join("") + "</div>" : "") +
      '<div class="end-btns"><button class="btn primary" data-action="again" id="nochmal">' + T("nochmal") + "</button>" +
      '<button class="btn" data-action="home">' + T("uebersicht") + "</button></div></section>" +
      (liste ? '<section class="review"><h2 class="section-title">' + T("merken") + "</h2><ul>" + liste + "</ul></section>" : "");
    window.scrollTo(0, 0);
    document.getElementById("nochmal").focus({ preventScroll: true });
    if (r === n && n >= 3) konfetti();
  }

  // ───────── Bedienung ─────────
  async function kopieren(text, btn) {
    let ok = false;
    try { await navigator.clipboard.writeText(text); ok = true; }
    catch (e) {
      try {
        const ta = document.createElement("textarea");
        ta.value = text; ta.style.position = "fixed"; ta.style.opacity = "0";
        document.body.appendChild(ta); ta.select(); ok = document.execCommand("copy"); ta.remove();
      } catch (e2) { ok = false; }
    }
    btn.textContent = ok ? T("kopiert") : T("ging_nicht");
    setTimeout(() => { btn.textContent = T("kopieren"); }, 1500);
  }
  const naechster = (liste, jetzt) => liste[(liste.indexOf(jetzt) + 1) % liste.length];

  app.addEventListener("click", e => {
    const el = e.target.closest("[data-action]");
    if (!el || el.disabled) return;
    const act = el.dataset.action, S = K.S;
    if (act === "f") {
      if (ansicht !== "karte" || R.antwort) return;
      const it = R.items[R.i];
      ergebnis(F.formen[it.form].klick(it, R.z, el));
    }
    else if (act === "start") starten(el.dataset.thema);
    else if (act === "next") weiter();
    else if (act === "home") home();
    else if (act === "again") { if (R && R.probe) { if (!vorschau()) home(); } else starten(R && R.thema); }
    else if (act === "copy") kopieren(el.dataset.text, el);
    else if (act === "modus") { S.modus = el.dataset.wert; K.speichern(); renderStart('[data-action="modus"].on'); }
    else if (act === "laenge") { S.laenge = Number(el.dataset.wert); K.speichern(); renderStart('[data-action="laenge"].on'); }
    else if (act === "sprache") { S.sprache = K.lang() === "de" ? "en" : "de"; K.speichern(); themeAnwenden(); renderStart('[data-action="sprache"]'); }
    else if (act === "system") { S.system = naechster(Object.keys(SYSTEME), K.system()); K.speichern(); renderStart('[data-action="system"]'); }
    else if (act === "effekte") { S.effekte = !S.effekte; K.speichern(); renderStart('[data-action="effekte"]'); }
    else if (act === "theme") { S.theme = naechster(["auto", "light", "dark"], S.theme || "auto"); themeAnwenden(); K.speichern(); renderStart('[data-action="theme"]'); }
    else if (act === "reset") { if (confirm(T("reset_frage"))) { K.zuruecksetzen(); renderStart(); } }
  });

  document.addEventListener("keydown", e => {
    if (e.altKey || e.ctrlKey || e.metaKey) return;
    const t = e.target, bestaetigen = e.key === "Enter" || e.key === " ";
    const aufKnopf = !!(t.closest && t.closest("button, summary"));
    if (ansicht === "karte") {
      if (e.key === "Escape") { home(); return; }
      if (R.antwort) { if (e.key === "Enter" && !aufKnopf) { e.preventDefault(); weiter(); } return; }
      const teil = t.closest && t.closest('[role="button"][data-action]');       // antippbares Teil einer Szene
      if (teil && bestaetigen) { e.preventDefault(); teil.click(); return; }
      if (aufKnopf && bestaetigen) return;                                       // der Knopf reagiert selbst
      const it = R.items[R.i], f = F.formen[it.form];
      const erg = f.taste ? f.taste(it, R.z, e.key) : undefined;                 // undefined = Taste gehört nicht zur Karte
      if (erg !== undefined) { e.preventDefault(); ergebnis(erg); }
    } else if (ansicht === "ende") {
      if (e.key === "Escape") home();
    }
  });

  themeAnwenden();
  if (!vorschau()) renderStart();
})();
