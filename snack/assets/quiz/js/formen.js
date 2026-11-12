// Snack – Kartenarten: Mini-Oberflächen, Szenen und je Kartenart das Anzeigen und Auswerten.
// Jede Art hat: start(item) → Zustand z · html(item, z, a) → Antwortbereich · klick(item, z, el) und taste(item, z, key)
// → Ergebnis { ok, best, … } sobald beantwortet, sonst null (nur neu zeichnen) · fb(item, z, a) → Zusatz in der Rückmeldung.
// a ist das Ergebnis, sobald die Karte beantwortet ist, vorher null.
window.SnackFormen = (function () {
  'use strict';
  const K = window.Snack, T = K.T, esc = K.esc, fmt = K.fmt, tx = K.tx, shuffle = K.shuffle;
  const m = (de, en) => esc(K.lang() === "de" ? de : en);          // Text in einer Mini-Oberfläche
  const ERLAUBEN_SYMBOL = ["✓", "?", "✕"];

  // ───────── Mini-Oberflächen ─────────
  const P = {
    trash: '<path d="M4 7h16M10 11v6M14 11v6M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-12M9 7V4h6v3"/>',
    pencil: '<path d="M4 20h4L19 9l-4-4L4 16v4z"/>',
    download: '<path d="M12 4v11M7 10l5 5 5-5M5 20h14"/>',
    bell: '<path d="M6 16v-5a6 6 0 0 1 12 0v5l2 2H4l2-2zM10 20a2 2 0 0 0 4 0"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    search: '<circle cx="11" cy="11" r="6"/><path d="M20 20l-4-4"/>',
    up: '<path d="M6 15l6-6 6 6"/>',
    down: '<path d="M6 9l6 6 6-6"/>',
    check: '<path d="M5 12l5 5L20 7"/>',
    x: '<path d="M6 6l12 12M18 6L6 18"/>',
    kebab: '<circle cx="12" cy="5" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="12" cy="19" r="1"/>',
    folder: '<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>'
  };
  const ico = n => '<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + P[n] + "</svg>";
  const cursor = '<svg class="m-cursor" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 3l14 8-6.5 1.8L9.5 19z" fill="#111" stroke="#fff" stroke-width="1.5" stroke-linejoin="round"/></svg>';
  const L = w => '<span class="m-line" style="width:' + w + '%"></span>';
  const frame = (inner, flush, cls) => '<div class="mock' + (cls ? " " + cls : "") + '"><div class="mock-bar" aria-hidden="true"><i></i><i></i><i></i></div><div class="mock-body' + (flush ? " flush" : "") + '">' + inner + "</div></div>";

  const MOCKUPS = {
    toast: () => frame('<b class="m-title">' + m("Mein Profil", "My profile") + "</b>" + L(85) + L(70) + L(40) + '<div class="m-toast hl">' + ico("check") + m("Gespeichert", "Saved") + "</div>"),
    modal: hl => frame('<b class="m-title">' + m("Projekte", "Projects") + "</b>" + L(85) + L(70) + L(55) + L(40) +
      '<div class="m-overlay' + (hl === "overlay" ? " hl" : "") + '"><div class="m-dialog' + (hl === "dialog" ? " hl" : "") +
      '"><b>' + m("Wirklich löschen?", "Really delete?") + "</b><span>" + m("Das kann nicht rückgängig gemacht werden.", "This cannot be undone.") +
      '</span><div class="m-row"><span class="m-btn">' + m("Abbrechen", "Cancel") + '</span><span class="m-btn danger">' + m("Löschen", "Delete") + "</span></div></div></div>"),
    dropdown: () => frame('<div class="m-row between"><b class="m-title">' + m("Projekte", "Projects") + '</b><div class="m-dd-wrap hl"><span class="m-btn">' + m("Sortieren: Neueste", "Sort: Newest") + " " + ico("down") +
      '</span><div class="m-dd"><span class="on">' + m("Neueste", "Newest") + "</span><span>" + m("Älteste", "Oldest") + "</span><span>A–Z</span></div></div></div>" + L(60)),
    tooltip: () => frame('<div class="m-row" style="margin-top:30px"><span class="m-icon-btn">' + ico("pencil") + '</span><span class="m-tip-wrap"><span class="m-tip hl">' + m("Löschen", "Delete") + '</span><span class="m-icon-btn">' +
      ico("trash") + '</span></span><span class="m-icon-btn">' + ico("download") + "</span></div>" + L(85) + L(60)),
    sidebar: () => frame('<div class="m-split"><div class="m-side hl"><span class="on">' + m("Übersicht", "Overview") + "</span><span>" + m("Projekte", "Projects") + "</span><span>" + m("Einstellungen", "Settings") + "</span><span>" + m("Hilfe", "Help") +
      '</span></div><div class="m-main"><b class="m-title">' + m("Übersicht", "Overview") + "</b>" + L(90) + L(75) + L(60) + "</div></div>", true),
    hamburger: () => frame('<div class="m-nav"><span class="m-icon-btn hl">' + ico("menu") + '</span><b>Vibe-App</b><span class="m-icon-btn">' + ico("search") + "</span></div>" + L(80) + L(60) + L(70)),
    tabs: () => frame('<b class="m-title">' + m("Projekt „Quiz“", "Project “Quiz”") + '</b><div class="m-tabs hl"><span class="on">' + m("Übersicht", "Overview") + "</span><span>" + m("Einstellungen", "Settings") + "</span><span>" + m("Verlauf", "History") + "</span></div>" + L(85) + L(60) + L(70)),
    accordion: () => frame('<b class="m-title">' + m("Häufige Fragen", "FAQ") + '</b><div class="m-acc hl"><div class="m-acc-item"><div class="m-acc-q">' + m("Was kostet das?", "What does it cost?") + " " + ico("up") +
      '</div><div class="m-acc-a">' + m("Nichts, es ist kostenlos.", "Nothing, it is free.") + '</div></div><div class="m-acc-item"><div class="m-acc-q">' + m("Geht das am Handy?", "Does it work on a phone?") + " " + ico("down") +
      '</div></div><div class="m-acc-item"><div class="m-acc-q">' + m("Wo sind meine Daten?", "Where is my data?") + " " + ico("down") + "</div></div></div>"),
    toggle: () => frame('<b class="m-title">' + m("Einstellungen", "Settings") + '</b><div class="m-setting"><span>' + m("Benachrichtigungen", "Notifications") + '</span><span class="m-check on">✓</span></div><div class="m-setting"><span>' +
      m("Dunkelmodus", "Dark mode") + '</span><span class="m-switch on hl"><i></i></span></div><div class="m-setting"><span>' + m("Sprache", "Language") + '</span><span class="m-btn">' + m("Deutsch", "English") + " " + ico("down") + "</span></div>"),
    radio: hl => frame('<div class="m-groups"><div class="m-group' + (hl === "extras" ? "" : " hl") + '"><b>' + m("Versand", "Shipping") + '</b><span class="m-opt"><span class="m-radio on"></span>Standard</span><span class="m-opt"><span class="m-radio"></span>Express</span><span class="m-opt"><span class="m-radio"></span>' + m("Abholung", "Pickup") + "</span></div>" +
      '<div class="m-group' + (hl === "extras" ? " hl" : "") + '"><b>Extras</b><span class="m-opt"><span class="m-check on">✓</span>' + m("Geschenkpapier", "Gift wrap") + '</span><span class="m-opt"><span class="m-check on">✓</span>' + m("Rechnung beilegen", "Include invoice") +
      '</span><span class="m-opt"><span class="m-check"></span>Newsletter</span></div></div>'),
    placeholder: () => frame('<b class="m-title">' + m("Anmelden", "Sign in") + '</b><div class="m-field"><span class="m-label">' + m("E-Mail", "Email") + '</span><span class="m-input"><span class="m-ph hl">' + m("name@beispiel.de", "name@example.com") +
      '</span></span></div><div class="m-field"><span class="m-label">' + m("Passwort", "Password") + '</span><span class="m-input">••••••••</span></div><div><span class="m-btn primary">' + m("Anmelden", "Sign in") + "</span></div>"),
    badge: () => frame('<div class="m-nav"><b>Vibe-App</b><span class="m-row"><span class="m-icon-btn">' + ico("search") + '</span><span class="m-bell">' + ico("bell") + '<span class="m-badge hl">3</span></span></span></div>' + L(80) + L(60) + L(45)),
    skeleton: () => frame('<div class="m-skel-wrap hl"><div class="m-skel-card"><span class="m-skel circle"></span><div class="m-skel-lines"><span class="m-skel" style="width:55%"></span><span class="m-skel" style="width:90%"></span><span class="m-skel" style="width:70%"></span></div></div>' +
      '<div class="m-skel-card"><span class="m-skel circle"></span><div class="m-skel-lines"><span class="m-skel" style="width:45%"></span><span class="m-skel" style="width:80%"></span></div></div></div>'),
    breadcrumb: () => frame('<div class="m-crumbs hl"><a>Start</a>›<a>' + m("Projekte", "Projects") + "</a>›<span>Quiz</span></div><b class=\"m-title\">Quiz</b>" + L(85) + L(60) + L(70)),
    hover: () => frame('<div class="m-hover-demo"><figure><span class="m-btn primary">' + m("Speichern", "Save") + "</span><figcaption>" + m("Maus woanders", "Mouse elsewhere") + '</figcaption></figure><figure><span class="m-hover-wrap hl"><span class="m-btn primary hovered">' +
      m("Speichern", "Save") + "</span>" + cursor + "</span><figcaption>" + m("Maus drüber", "Mouse over it") + "</figcaption></figure></div>"),
    navbar: () => frame('<div class="m-nav hl"><b>Vibe-App</b><span class="m-links"><span>Start</span><span>' + m("Projekte", "Projects") + '</span></span><span class="m-btn primary">Login</span></div>' + L(80) + L(60) + L(70)),
    footer: () => frame('<b class="m-title">' + m("Über uns", "About us") + "</b>" + L(85) + L(70) + L(55) +
      '<div class="m-footer hl"><span>© 2026 Vibe-App</span><span class="m-links"><a>' + m("Impressum", "Imprint") + "</a><a>" + m("Datenschutz", "Privacy") + "</a><a>" + m("Kontakt", "Contact") + "</a></span></div>"),
    chips: () => frame('<b class="m-title">' + m("Aufgaben", "Tasks") + '</b><div class="m-chips hl"><span class="on">' + m("Alle", "All") + "</span><span>" + m("Offen", "Open") + "</span><span>" + m("Erledigt", "Done") + "</span><span>" + m("Wichtig", "Important") + "</span></div>" + L(85) + L(70) + L(60)),
    pagination: () => frame('<b class="m-title">' + m("Suchergebnisse", "Search results") + "</b>" + L(85) + L(75) + L(60) + L(70) +
      '<div class="m-pages hl"><span>‹</span><span class="on">1</span><span>2</span><span>3</span><span class="dots">…</span><span>12</span><span>›</span></div>'),
    slider: () => frame('<b class="m-title">' + m("Ton", "Sound") + '</b><div class="m-setting"><span>' + m("Lautstärke", "Volume") + '</span><span class="m-slider hl"><i style="width:65%"></i><b style="left:65%"></b></span></div>' +
      '<div class="m-setting"><span>' + m("Klickgeräusche", "Click sounds") + '</span><span class="m-switch"><i></i></span></div>'),
    spinner: () => frame('<div class="m-spin-wrap"><span class="m-spinner hl"></span><span class="m-muted">' + m("Lädt …", "Loading …") + "</span></div>"),
    kebab: () => frame('<b class="m-title">' + m("Projekte", "Projects") + '</b><div class="m-list"><div class="m-list-row"><span>Quiz</span><span class="m-icon-btn hl">' + ico("kebab") +
      '</span></div><div class="m-list-row"><span>' + m("Wetter-App", "Weather app") + '</span><span class="m-icon-btn">' + ico("kebab") + '</span></div><div class="m-list-row"><span>' + m("Notizen", "Notes") + '</span><span class="m-icon-btn">' + ico("kebab") + "</span></div></div>"),
    disabled: () => frame('<b class="m-title">' + m("Konto erstellen", "Create account") + '</b><div class="m-field"><span class="m-label">' + m("E-Mail", "Email") + '</span><span class="m-input"><span class="m-ph">' + m("name@beispiel.de", "name@example.com") + "</span></span></div>" +
      '<span class="m-opt"><span class="m-check"></span>' + m("Ich akzeptiere die Nutzungsbedingungen", "I accept the terms of use") + '</span><div><span class="m-btn primary disabled hl">' + m("Weiter", "Continue") + "</span></div>"),
    focus: () => frame('<b class="m-title">' + m("Anmelden", "Sign in") + '</b><div class="m-field"><span class="m-label">' + m("E-Mail", "Email") + '</span><span class="m-input focus hl">' + m("ich@beispiel.de", "me@example.com") + '<span class="m-caret"></span></span></div>' +
      '<div class="m-field"><span class="m-label">' + m("Passwort", "Password") + '</span><span class="m-input"></span></div>'),
    empty: () => frame('<b class="m-title">' + m("Projekte", "Projects") + '</b><div class="m-empty hl">' + ico("folder") + "<b>" + m("Noch keine Projekte", "No projects yet") + "</b><span>" +
      m("Leg dein erstes Projekt an, dann erscheint es hier.", "Create your first project and it will show up here.") + '</span><span class="m-btn primary">' + m("Neues Projekt", "New project") + "</span></div>"),
    progress: () => frame('<b class="m-title">Upload</b><div class="m-field"><span class="m-row between" style="font-size:13px"><span>' + m("urlaub.mp4", "holiday.mp4") + '</span><span class="m-muted">62 %</span></span><span class="m-progress hl"><i style="width:62%"></i></span></div>' + L(70) + L(50))
  };
  const mock = k => (k.mockup && MOCKUPS[k.mockup]) ? MOCKUPS[k.mockup](k.hl) : "";

  // ───────── Szenen fürs „Ins Bild tippen“ ─────────
  // t(name) liefert die Attribute und Klassen eines antippbaren Teils. Nach der Antwort leuchtet das Ziel grün, ein Fehlgriff rot.
  function szene(name, ziel, a) {
    const t = (teil, cls) => ' class="' + (cls || "") + " teil" + (a ? (teil === ziel ? " hl-ok" : (teil === a.teil ? " hl-no" : "")) : "") +
      '" data-action="f" data-teil="' + teil + '"' + (a ? "" : ' role="button" tabindex="0"');
    if (name === "app") return frame(
      "<div" + t("navbar", "m-nav") + "><span" + t("hamburger", "m-icon-btn") + ">" + ico("menu") + '</span><b>Vibe-App</b><span class="m-bell">' + ico("bell") + "<span" + t("badge", "m-badge") + ">3</span></span></div>" +
      "<div" + t("breadcrumb", "m-crumbs") + "><a>Start</a>›<a>" + m("Projekte", "Projects") + "</a>›<span>Quiz</span></div>" +
      "<div" + t("tabs", "m-tabs") + '><span class="on">' + m("Übersicht", "Overview") + "</span><span>" + m("Einstellungen", "Settings") + "</span><span>" + m("Verlauf", "History") + "</span></div>" +
      L(85) + L(60) +
      "<div" + t("toast", "m-toast") + ">" + ico("check") + m("Gespeichert", "Saved") + "</div>" +
      "<div" + t("footer", "m-footer") + '><span>© 2026 Vibe-App</span><span class="m-links"><a>' + m("Impressum", "Imprint") + "</a><a>" + m("Datenschutz", "Privacy") + "</a></span></div>", false, "sz sz-app");
    if (name === "formular") return frame(
      '<b class="m-title">' + m("Konto", "Account") + "</b>" +
      '<div class="m-field"><span class="m-label">' + m("E-Mail", "Email") + "</span><span" + t("placeholder", "m-input") + '><span class="m-ph">' + m("name@beispiel.de", "name@example.com") + "</span></span></div>" +
      '<div class="m-field"><span class="m-label">Name</span><span' + t("focus", "m-input focus") + '>Alex<span class="m-caret"></span></span></div>' +
      '<div class="m-setting"><span>' + m("Sprache", "Language") + "</span><span" + t("dropdown", "m-btn") + ">" + m("Deutsch", "English") + " " + ico("down") + "</span></div>" +
      '<div class="m-setting"><span>' + m("Dunkelmodus", "Dark mode") + "</span><span" + t("toggle", "m-switch on") + "><i></i></span></div>" +
      '<div class="m-setting"><span>' + m("Lautstärke", "Volume") + "</span><span" + t("slider", "m-slider") + '><i style="width:65%"></i><b style="left:65%"></b></span></div>' +
      '<div class="m-groups"><div' + t("radio", "m-group") + "><b>" + m("Versand", "Shipping") + '</b><span class="m-opt"><span class="m-radio on"></span>Standard</span><span class="m-opt"><span class="m-radio"></span>Express</span></div>' +
      "<div" + t("checkbox", "m-group") + '><b>Extras</b><span class="m-opt"><span class="m-check on">✓</span>' + m("Geschenkpapier", "Gift wrap") + '</span><span class="m-opt"><span class="m-check"></span>Newsletter</span></div></div>' +
      "<div><span" + t("disabled", "m-btn primary disabled") + ">" + m("Weiter", "Continue") + "</span></div>", false, "sz sz-formular");
    if (name === "liste") return frame(
      '<div class="m-split"><div' + t("sidebar", "m-side") + '><span class="on">' + m("Projekte", "Projects") + "</span><span>" + m("Archiv", "Archive") + "</span><span>" + m("Hilfe", "Help") + "</span></div>" +
      '<div class="m-main"><div' + t("chips", "m-chips") + '><span class="on">' + m("Alle", "All") + "</span><span>" + m("Offen", "Open") + "</span><span>" + m("Fertig", "Done") + "</span></div>" +
      '<div class="m-list"><div class="m-list-row"><span>' + m("Wetter-App", "Weather app") + "</span><span" + t("kebab", "m-icon-btn") + ">" + ico("kebab") + '</span></div><div class="m-list-row"><span>' + m("Notizen", "Notes") + "</span><span" + t("kebab", "m-icon-btn") + ">" + ico("kebab") + "</span></div></div>" +
      "<div" + t("skeleton", "m-skel-card") + '><span class="m-skel circle"></span><div class="m-skel-lines"><span class="m-skel" style="width:55%"></span><span class="m-skel" style="width:85%"></span></div></div>' +
      "<div" + t("progress", "m-field") + '><span class="m-row between" style="font-size:13px"><span>upload.zip</span><span class="m-muted">62 %</span></span><span class="m-progress"><i style="width:62%"></i></span></div>' +
      "<div" + t("pagination", "m-pages") + '><span>‹</span><span class="on">1</span><span>2</span><span>3</span><span>›</span></div></div></div>', true, "sz sz-liste");
    if (name === "dialog") return frame(
      '<b class="m-title">' + m("Projekte", "Projects") + "</b>" + L(85) + L(70) + L(55) + L(40) + L(65) +
      "<div" + t("overlay", "m-overlay") + "><div" + t("modal", "m-dialog") + '><div class="m-row between"><b>' + m("Wird gelöscht …", "Deleting …") + '</b><span class="m-tip-wrap"><span' + t("tooltip", "m-tip") + ">" + m("Schließen", "Close") +
      '</span><span class="m-icon-btn">' + ico("x") + '</span></span></div><div class="m-row"><span' + t("spinner", "m-spinner") + "></span><span>" + m("Bitte kurz warten.", "Please wait a moment.") + "</span></div></div></div>", false, "sz sz-dialog");
    return "";
  }

  // ───────── Bausteine ─────────
  function codeBlock(k, inhalt) {
    const code = tx(k.code);
    if (!code) return "";
    // codeLabel (z. B. "Code" oder "package.json") überschreibt die automatische Erkennung
    const befehl = !k.codeLabel && k.typ !== "fehler" && /^(ls|cd|sudo|rm|chmod|git|npm|curl|cat|pip|dnf|pwd|mv|cp|kill|mkdir|echo|tar|python3?|node|claude|ffmpeg|flatpak)\b/.test(code);
    return '<div class="code-wrap"><div class="code-lbl">' + esc(tx(k.codeLabel) || (befehl ? T("befehl") : T("ausgabe"))) + '</div><code class="code">' +
      (befehl ? '<span class="sign">$</span>' : "") + (inhalt != null ? inhalt : esc(code)) + "</code></div>";
  }
  function promptBlock(p) {
    if (!p) return "";
    const mm = /^[„“]([\s\S]*)[“”]$/.exec(p);
    if (mm) {
      return '<div><div class="lbl">' + T("so_promptest") + '</div><div class="bubble"><span>' + fmt(mm[1]) +
        '</span><button class="copy" data-action="copy" data-text="' + esc(mm[1]) + '">' + T("kopieren") + "</button></div></div>";
    }
    return '<div><div class="lbl">' + T("so_promptest") + '</div><div class="formel">' + fmt(p) + "</div></div>";
  }
  const zahlTaste = key => /^[1-9]$/.test(key) ? Number(key) - 1 : -1;
  const richtigIst = text => "<p>" + T("richtig_ist") + " <b>" + fmt(text) + "</b></p>";
  const pruefKnopf = (aktiv, a) => a ? "" : '<div class="pruef-row"><button class="btn primary" data-action="f" data-pruefen="1" id="pruefen"' + (aktiv ? "" : " disabled") + ">" + T("pruefen") + "</button></div>";
  // Antwort-Knopf wie bei der klassischen Karte
  function knopf(pos, text, cls, a, attr) {
    return '<button class="opt ' + cls + '" data-action="f" ' + attr + (a ? " disabled" : "") + '><span class="key">' + (pos + 1) + "</span><span>" + text + "</span></button>";
  }

  // ───────── Die Kartenarten ─────────
  const wahl = {
    start(it) { const n = K.opts(it.k).length, idx = Array.from({ length: n }, (_, i) => i); return { order: it.k.typ === "erlauben" ? idx : shuffle(idx) }; },
    html(it, z, a) {
      const k = it.k, o = K.opts(k);
      return '<div class="opts">' + z.order.map((idx, pos) => {
        let cls = "";
        if (a) cls = idx === k.richtig ? "ok" : idx === a.idx ? (a.ok ? "ok" : "no") : "dim";
        if (a && idx === a.idx && a.ok) cls += " pop";
        return knopf(pos, fmt((k.typ === "erlauben" ? ERLAUBEN_SYMBOL[idx] + "  " : "") + o[idx]), cls, a, 'data-pos="' + pos + '"');
      }).join("") + "</div>";
    },
    klick(it, z, el) {
      const pos = Number(el.dataset.pos); if (!(pos >= 0 && pos < z.order.length)) return null;
      const idx = z.order[pos], best = idx === it.k.richtig;
      return { ok: best || (it.k.auchOk || []).includes(idx), best, idx };
    },
    taste(it, z, key) { const p = zahlTaste(key); return p >= 0 && p < z.order.length ? this.klick(it, z, { dataset: { pos: p } }) : undefined; },
    fb(it, z, a) {
      const k = it.k, o = K.opts(k), warum = k.warum && k.warum[a.idx];
      return (warum ? "<p>" + fmt(tx(warum)) + "</p>" : "") + (!a.ok ? richtigIst(o[k.richtig]) : "") +
        (a.ok && !a.best ? "<p>" + T("besser") + " <b>" + fmt(o[k.richtig]) + "</b></p>" : "");
    }
  };

  const wf = {
    start(it) {
      const k = it.k, n = K.opts(k).length;
      if (Math.random() < 0.5) return { kand: k.richtig };
      const falsche = Array.from({ length: n }, (_, i) => i).filter(i => i !== k.richtig);
      return { kand: falsche[Math.floor(Math.random() * falsche.length)] };
    },
    html(it, z, a) {
      const stimmt = z.kand === it.k.richtig;
      const b = (wert, text, pos) => {
        let cls = "";
        if (a) cls = (wert === stimmt) ? "ok" : (a.ja === wert ? "no" : "dim");
        return knopf(pos, text, cls, a, 'data-ja="' + (wert ? 1 : 0) + '"');
      };
      return '<div class="kandidat"><div class="lbl">' + T("wf_antwort") + "</div><div>" + fmt(K.opts(it.k)[z.kand]) + '</div></div><p class="hinweis">' + T("wf_frage") +
        '</p><div class="opts zwei">' + b(true, T("wf_ja"), 0) + b(false, T("wf_nein"), 1) + "</div>";
    },
    klick(it, z, el) {
      if (el.dataset.ja == null) return null;
      const ja = el.dataset.ja === "1", ok = ja === (z.kand === it.k.richtig);
      return { ok, best: ok, ja };
    },
    taste(it, z, key) { return key === "1" ? this.klick(it, z, { dataset: { ja: "1" } }) : key === "2" ? this.klick(it, z, { dataset: { ja: "0" } }) : undefined; },
    fb(it, z) {
      const k = it.k, stimmt = z.kand === k.richtig, warum = !stimmt && k.warum && k.warum[z.kand];
      return "<p>" + T(stimmt ? "wf_war_ja" : "wf_war_nein") + "</p>" + (warum ? "<p>" + fmt(tx(warum)) + "</p>" : "") + (!stimmt ? richtigIst(K.opts(k)[k.richtig]) : "");
    }
  };

  const luecke = {
    start(it) { return { order: shuffle(K.opts(it.k).map((_, i) => i)) }; },
    code(it, z, a) {
      const k = it.k, o = K.opts(k);
      const teil = a ? '<span class="gap ok">' + esc(o[k.richtig]) + "</span>" : '<span class="gap">&nbsp;?&nbsp;</span>';   // nach der Antwort steht immer das Richtige drin
      return codeBlock(k, esc(tx(k.code)).replace("___", teil));
    },
    html(it, z, a) {
      const k = it.k, o = K.opts(k);
      return '<div class="chips-wahl">' + z.order.map((idx, pos) => {
        let cls = "";
        if (a) cls = idx === k.richtig ? "ok" : idx === a.idx ? "no" : "dim";
        return '<button class="chip ' + cls + '" data-action="f" data-pos="' + pos + '"' + (a ? " disabled" : "") + '><span class="key">' + (pos + 1) + "</span><code>" + esc(o[idx]) + "</code></button>";
      }).join("") + "</div>";
    },
    klick: wahl.klick, taste: wahl.taste, fb: wahl.fb
  };

  const mehrfach = {
    hinweis: "mehrfach_hinweis",
    start(it) { return { order: shuffle(K.opts(it.k).map((_, i) => i)), an: {} }; },
    html(it, z, a) {
      const k = it.k, o = K.opts(k);
      return '<div class="opts">' + z.order.map((idx, pos) => {
        const soll = k.richtige.includes(idx), ist = !!z.an[idx];
        let cls = ist ? "an" : "";
        if (a) cls = soll && ist ? "ok" : soll ? "fehlt" : ist ? "no" : "dim";
        return '<button class="opt mf ' + cls + '" data-action="f" data-pos="' + pos + '"' + (a ? " disabled" : "") + ' aria-pressed="' + ist + '"><span class="box">' + (ist ? "✓" : "") +
          "</span><span>" + fmt(o[idx]) + "</span></button>";
      }).join("") + "</div>" + pruefKnopf(Object.keys(z.an).length > 0, a);
    },
    klick(it, z, el) {
      if (el.dataset.pruefen) {
        const an = Object.keys(z.an).map(Number);
        if (!an.length) return null;
        const ok = an.length === it.k.richtige.length && an.every(i => it.k.richtige.includes(i));
        return { ok, best: ok, an };
      }
      const pos = Number(el.dataset.pos); if (!(pos >= 0 && pos < z.order.length)) return null;
      const idx = z.order[pos]; if (z.an[idx]) delete z.an[idx]; else z.an[idx] = true;
      return null;
    },
    taste(it, z, key) {
      if (key === "Enter") return Object.keys(z.an).length ? this.klick(it, z, { dataset: { pruefen: "1" } }) : undefined;
      const p = zahlTaste(key); return p >= 0 && p < z.order.length ? this.klick(it, z, { dataset: { pos: p } }) : undefined;
    },
    fb(it, z, a) { return a.ok ? "" : richtigIst(K.loesung(it.k)); }
  };

  const reihenfolge = {
    hinweis: "reihe_hinweis",
    start(it) {
      const n = K.schritte(it.k).length, idx = Array.from({ length: n }, (_, i) => i);
      let pool = shuffle(idx);
      for (let v = 0; v < 5 && pool.every((x, i) => x === i); v++) pool = shuffle(idx);     // nicht schon richtig sortiert anbieten
      return { pool, wahl: [] };
    },
    html(it, z, a) {
      const s = K.schritte(it.k);
      const oben = z.wahl.length
        ? z.wahl.map((idx, i) => '<button class="schritt ' + (a ? (idx === i ? "ok" : "no") : "") + '" data-action="f" data-weg="' + i + '"' + (a ? " disabled" : "") +
            '><span class="nr">' + (i + 1) + "</span><span>" + fmt(s[idx]) + "</span></button>").join("")
        : '<div class="schritt leer">' + T("reihe_leer") + "</div>";
      const offen = z.pool.filter(idx => !z.wahl.includes(idx));
      const unten = a ? "" : '<div class="vorrat">' + offen.map((idx, pos) =>
        '<button class="chip" data-action="f" data-idx="' + idx + '"><span class="key">' + (pos + 1) + "</span><span>" + fmt(s[idx]) + "</span></button>").join("") + "</div>";
      return '<div class="reihe">' + oben + "</div>" + unten + pruefKnopf(z.wahl.length === s.length, a);
    },
    klick(it, z, el) {
      const n = K.schritte(it.k).length;
      if (el.dataset.pruefen) { if (z.wahl.length !== n) return null; const ok = z.wahl.every((idx, i) => idx === i); return { ok, best: ok }; }
      if (el.dataset.weg != null) { z.wahl.splice(Number(el.dataset.weg), 1); return null; }
      const idx = Number(el.dataset.idx);
      if (idx >= 0 && idx < n && !z.wahl.includes(idx)) z.wahl.push(idx);
      return null;
    },
    taste(it, z, key) {
      if (key === "Enter") return z.wahl.length === K.schritte(it.k).length ? this.klick(it, z, { dataset: { pruefen: "1" } }) : undefined;
      if (key === "Backspace") { if (z.wahl.length) z.wahl.pop(); return null; }
      const offen = z.pool.filter(idx => !z.wahl.includes(idx)), p = zahlTaste(key);
      return p >= 0 && p < offen.length ? this.klick(it, z, { dataset: { idx: offen[p] } }) : undefined;
    },
    fb(it, z, a) {
      if (a.ok) return "";
      return '<div><div class="lbl">' + T("reihe_richtig") + '</div><ol class="loesung">' + K.schritte(it.k).map(t => "<li>" + fmt(t) + "</li>").join("") + "</ol></div>";
    }
  };

  const zeile = {
    hinweis: "zeile_hinweis",
    start() { return {}; },
    code() { return ""; },                                   // der Code steht hier als antippbare Zeilen im Antwortbereich
    html(it, z, a) {
      const k = it.k;
      return '<div class="code-wrap"><div class="code-lbl">' + esc(tx(k.codeLabel) || "Code") + '</div><div class="code zeilen">' + K.zeilen(k).map((t, i) => {
        let cls = "";
        if (a) cls = i === k.zeile ? "ok" : i === a.idx ? (a.ok ? "ok" : "no") : "";
        return '<button class="zl ' + cls + '" data-action="f" data-pos="' + i + '"' + (a ? " disabled" : "") + '><span class="nr">' + (i + 1) + '</span><span class="tx">' + (esc(t) || "&nbsp;") + "</span></button>";
      }).join("") + "</div></div>";
    },
    klick(it, z, el) {
      const pos = Number(el.dataset.pos); if (!(pos >= 0 && pos < K.zeilen(it.k).length)) return null;
      const best = pos === it.k.zeile;
      return { ok: best || (it.k.auchOk || []).includes(pos), best, idx: pos };
    },
    taste(it, z, key) { const p = zahlTaste(key); return p >= 0 && p < K.zeilen(it.k).length ? this.klick(it, z, { dataset: { pos: p } }) : undefined; },
    fb(it, z, a) {
      if (a.best) return "";
      const zeileText = (it.k.zeile + 1) + ": `" + K.zeilen(it.k)[it.k.zeile].trim() + "`";
      return a.ok ? "<p>" + T("besser") + " <b>" + fmt(zeileText) + "</b></p>" : richtigIst(zeileText);
    }
  };

  const bild = {
    start() { return {}; },
    html(it, z, a) { return szene(it.k.szene, it.k.ziel, a); },
    klick(it, z, el) { const teil = el.dataset.teil; if (!teil) return null; const ok = teil === it.k.ziel; return { ok, best: ok, teil }; },
    fb(it, z, a) { return a.ok ? "" : "<p>" + T("bild_getippt", { name: "<b>" + esc(K.teilName(a.teil)) + "</b>" }) + "</p>"; }
  };

  // Paare: entweder ein Bündel aus vier Session-Begriffen (it.teile) oder eine handgeschriebene Karte (it.k.paare)
  const paarListe = it => it.teile ? it.teile.map(t => [t.k.begriff, K.opts(t.k)[0]]) : K.paare(it.k);
  const paare = {
    hinweis: "paare_hinweis",
    start(it) { const idx = paarListe(it).map((_, i) => i); return { links: shuffle(idx), rechts: shuffle(idx), fest: {}, fehl: {}, aktiv: null, daneben: null }; },
    html(it, z, a) {
      const p = paarListe(it), nr = i => z.links.indexOf(i) + 1;
      const li = z.links.map((i, pos) => '<button class="paar l ' + (z.fest[i] ? (z.fehl[i] ? "halb" : "ok") : z.aktiv === i ? "an" : "") + '" data-action="f" data-l="' + i + '"' + (z.fest[i] || a ? " disabled" : "") +
        '><span class="key">' + (pos + 1) + "</span><span>" + fmt(p[i][0]) + "</span></button>").join("");
      const re = z.rechts.map((i, pos) => '<button class="paar r ' + (z.fest[i] ? (z.fehl[i] ? "halb" : "ok") : z.daneben === i ? "no" : "") + '" data-action="f" data-r="' + i + '"' + (z.fest[i] || a ? " disabled" : "") +
        '><span class="key">' + (z.fest[i] ? nr(i) : "abcdefgh"[pos]) + "</span><span>" + fmt(p[i][1]) + "</span></button>").join("");
      return '<div class="paare"><div class="spalte">' + li + '</div><div class="spalte">' + re + "</div></div>";
    },
    klick(it, z, el) {
      const p = paarListe(it);
      z.daneben = null;
      if (el.dataset.l != null) { const i = Number(el.dataset.l); if (!z.fest[i]) z.aktiv = i; return null; }
      if (el.dataset.r == null || z.aktiv == null) return null;
      const r = Number(el.dataset.r);
      if (z.fest[r]) return null;
      if (r !== z.aktiv) { z.fehl[z.aktiv] = true; z.daneben = r; return null; }
      z.fest[r] = true; z.aktiv = null;
      if (Object.keys(z.fest).length < p.length) return null;
      const teile = p.map((_, i) => !z.fehl[i]), ok = teile.every(Boolean);
      return { ok, best: ok, teile };
    },
    taste(it, z, key) {
      const p = zahlTaste(key), q = "abcdefgh".indexOf(String(key).toLowerCase());
      if (p >= 0 && p < z.links.length) return this.klick(it, z, { dataset: { l: z.links[p] } });
      if (q >= 0 && q < z.rechts.length) return this.klick(it, z, { dataset: { r: z.rechts[q] } });
      return undefined;
    },
    fb(it, z, a) {
      if (a.ok) return "";
      const p = paarListe(it);
      return '<div><div class="lbl">' + T("merken") + '</div><ul class="loesung">' + p.map((x, i) => a.teile[i] ? "" : "<li><b>" + fmt(x[0]) + "</b>: " + fmt(x[1]) + "</li>").join("") + "</ul></div>";
    }
  };

  return { formen: { wahl, wf, luecke, mehrfach, reihenfolge, zeile, bild, paare }, mock, codeBlock, promptBlock };
})();
