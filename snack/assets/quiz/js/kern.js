// Snack – Kern: Einstellungen, Texte, Speicher, Karten laden, Runde zusammenstellen, Lernstand buchen.
// Diese Datei fasst die Seite selbst nicht an. So kann scripts/sim.js denselben Code ohne Browser testen.
window.Snack = (function () {
  'use strict';

  // ───────── Grundeinstellungen ─────────
  const THEMEN = {
    gui:        { de: "GUI-Elemente",          en: "UI elements" },
    terminal:   { de: "Terminal",              en: "Terminal" },
    dateien:    { de: "Dateien und Formate",   en: "Files and formats" },
    git:        { de: "Git",                   en: "Git" },
    web:        { de: "Web-Basics",            en: "Web basics" },
    code:       { de: "Code-Grundbegriffe",    en: "Code basics" },
    fehler:     { de: "Fehlermeldungen",       en: "Error messages" },
    sicherheit: { de: "Sicherheit",            en: "Security" },
    prompten:   { de: "Gut prompten",          en: "Prompting well" },
    claude:     { de: "Claude Code bedienen",  en: "Using Claude Code" },
    projekte:   { de: "Aus deinen Projekten",  en: "From your projects" },
    sessions:   { de: "Aus deinen Sessions",   en: "From your sessions" }
  };
  const TYPEN = {   // Inhalt einer klassischen Karte (form "wahl")
    benennen:  { de: "Wie heißt das?",     en: "What's it called?" },
    upgrade:   { de: "Prompt-Upgrade",     en: "Prompt upgrade" },
    erlauben:  { de: "Erlauben?",          en: "Allow it?" },
    fehler:    { de: "Fehler übersetzen",  en: "Decode the error" },
    bedeutung: { de: "Was bedeutet das?",  en: "What does it mean?" }
  };
  const FORMEN = {  // Art, wie eine Karte beantwortet wird
    wahl:        { de: "Eine Antwort",       en: "Pick one" },
    wf:          { de: "Wahr oder falsch",   en: "True or false" },
    luecke:      { de: "Lücke füllen",       en: "Fill the gap" },
    mehrfach:    { de: "Mehrere richtig",    en: "Select all" },
    reihenfolge: { de: "Reihenfolge",        en: "Put in order" },
    zeile:       { de: "Fehlerzeile finden", en: "Spot the line" },
    bild:        { de: "Ins Bild tippen",    en: "Tap the picture" },
    paare:       { de: "Paare zuordnen",     en: "Match pairs" }
  };
  const ERLAUBEN = { de: ["Erlauben", "Erst nachfragen", "Ablehnen"], en: ["Allow", "Ask first", "Deny"] };
  const LAENGEN = [5, 9, 15];                          // Karten pro Runde, auf der Startseite wählbar
  const MODI = ["mix", "neu", "schwach"];              // Gemischt · Neues entdecken · Schwächen üben
  const NEU_ANTEIL = 2 / 3;                            // so viel einer gemischten Runde ist neu, solange es Neues gibt
  const PAUSE = 3;                                     // nach einer Antwort setzt die Karte die nächsten PAUSE - 1 Runden aus
  const INTERVALL = { 1: 0, 2: 1, 3: 3, 4: 7, 5: 16 }; // Fach → Tage bis zur nächsten Wiederholung
  const GELERNT_AB = 3;                                // ab diesem Fach gilt eine Karte als gelernt
  const VERLAUF_MAX = 30;                              // so viele Runden merkt sich der Rückblick
  const KEY = "snack.v1", ALT_KEY = "vibeQuiz.v1";     // ALT_KEY: Lernstand aus der Zeit vor Snack, wird einmal übernommen

  // Teile der Szenen fürs „Ins Bild tippen“. ref = die GUI-Karte, die Namen und Erklärung liefert.
  const SZENEN = {
    app:      ["navbar", "hamburger", "badge", "breadcrumb", "tabs", "toast", "footer"],
    formular: ["placeholder", "focus", "dropdown", "toggle", "slider", "radio", "checkbox", "disabled"],
    liste:    ["sidebar", "chips", "kebab", "skeleton", "progress", "pagination"],
    dialog:   ["overlay", "modal", "spinner", "tooltip"]
  };

  const FALLBACK = [
    { de: "Ein Programm, das Bilder kleiner macht.",               en: "A program that makes images smaller." },
    { de: "Ein Befehl, der den Rechner neu startet.",              en: "A command that restarts the computer." },
    { de: "Ein Ordner, in dem gelöschte Dateien landen.",          en: "A folder where deleted files end up." },
    { de: "Ein Werkzeug, das die Internetgeschwindigkeit misst.",  en: "A tool that measures your internet speed." },
    { de: "Eine Liste aller installierten Schriftarten.",          en: "A list of all installed fonts." },
    { de: "Ein Fehler, der nur bei langsamem Internet auftritt.",  en: "An error that only shows up on slow internet." },
    { de: "Ein Server, der nur E-Mails verschickt.",               en: "A server that only sends email." },
    { de: "Eine Tastenkombination zum Umbenennen von Dateien.",    en: "A keyboard shortcut for renaming files." }
  ];

  // Abzeichen: kleine Meilensteine. pruef(z) bekommt Zahlen zum Lernstand (siehe abzeichenStand) und sagt, ob es verdient ist.
  const ABZEICHEN = [
    { id: "start",    zeichen: "1",   de: ["Erste Runde", "Eine Runde zu Ende gespielt"],           en: ["First round", "Finished one round"],                  pruef: z => z.runden >= 1 },
    { id: "runden25", zeichen: "25",  de: ["Dranbleiber", "25 Runden gespielt"],                    en: ["Regular", "Played 25 rounds"],                        pruef: z => z.runden >= 25 },
    { id: "k50",      zeichen: "50",  de: ["50 Karten", "50 verschiedene Karten gesehen"],          en: ["50 cards", "Seen 50 different cards"],                pruef: z => z.gesehen >= 50 },
    { id: "k100",     zeichen: "100", de: ["100 Karten", "100 verschiedene Karten gesehen"],        en: ["100 cards", "Seen 100 different cards"],              pruef: z => z.gesehen >= 100 },
    { id: "k250",     zeichen: "250", de: ["250 Karten", "250 verschiedene Karten gesehen"],        en: ["250 cards", "Seen 250 different cards"],              pruef: z => z.gesehen >= 250 },
    { id: "serie3",   zeichen: { de: "3T", en: "3d" }, de: ["3 Tage Serie", "An 3 Tagen hintereinander gespielt"], en: ["3-day streak", "Played 3 days in a row"], pruef: z => z.serie >= 3 },
    { id: "serie7",   zeichen: { de: "7T", en: "7d" }, de: ["7 Tage Serie", "An 7 Tagen hintereinander gespielt"], en: ["7-day streak", "Played 7 days in a row"], pruef: z => z.serie >= 7 },
    { id: "perfekt",  zeichen: "★",   de: ["Fehlerfrei", "Eine Runde ohne Fehler"],                 en: ["Flawless", "A round without mistakes"],               pruef: z => z.perfekt >= 1 },
    { id: "arten",    zeichen: "8×",  de: ["Alles probiert", "Jede Kartenart einmal gespielt"],     en: ["Tried it all", "Played every kind of card once"],     pruef: z => z.arten >= Object.keys(FORMEN).length },
    { id: "thema",    zeichen: "✓",   de: ["Thema gemeistert", "Alle Karten eines Themas gelernt"], en: ["Topic mastered", "Learned every card of one topic"],  pruef: z => z.themaFertig },
    { id: "schwach5", zeichen: "↻",   de: ["Nachgeschärft", "5 Runden „Schwächen üben“"],           en: ["Sharpened", "5 rounds of “Practice weak spots”"],     pruef: z => z.schwach >= 5 },
    { id: "neu5",     zeichen: "+",   de: ["Entdecker", "5 Runden „Neues entdecken“"],              en: ["Explorer", "5 rounds of “Discover new”"],             pruef: z => z.neu >= 5 }
  ];

  // ───────── Texte der Oberfläche ─────────
  const TEXTE = {
    de: {
      titel_bereit: "Bereit für eine Runde?", titel_noch: "Noch eine Runde?", titel_fertig: "Alles erledigt für heute",
      sub_fertig: "Nichts ist fällig. Eine Extra-Runde festigt, was du schon kannst.",
      sub: "{n} Karten · ca. {min} Min. · {teile}",
      neu_n: "{x} neu", wdh_1: "1 Wiederholung", wdh_n: "{x} Wiederholungen", extra_n: "{x} Extra-Übung",
      start: "Runde starten", extra_runde: "Extra-Runde",
      modus_mix: "Gemischt", modus_neu: "Neues entdecken", modus_schwach: "Schwächen üben",
      modus_lbl: "Art der Runde", laenge_lbl: "Karten pro Runde",
      hinweis_neu_leer: "Du hast schon jede Karte gesehen. Diese Runde nimmt Karten, die du selten hattest.",
      hinweis_neu_teil: "Nur noch {x} neue. Den Rest füllen Karten auf, die du selten hattest.",
      hinweis_schwach_leer: "Noch keine Fehler gemacht. Diese Runde nimmt stattdessen andere Karten.",
      hinweis_schwach_teil: "{x} mit Fehlern. Den Rest füllen andere Karten auf.",
      serie_1: "Tag Serie", serie_n: "Tage Serie", heute_ok: " · heute ✓",
      gelernt: "Karten gelernt", faellig: "heute fällig",
      themen_titel: "Oder nur ein Thema üben",
      leer_sessions: "noch leer, wächst mit deinen Claude-Sessions", leer_projekte: "noch leer, /snack füllt es aus deinem Projekt", leer: "noch leer",
      thema_sub: "{g} von {t} gelernt", thema_faellig: " · {f} fällig",
      tasten: "<kbd>1</kbd>–<kbd>9</kbd> antworten · <kbd>Enter</kbd> weiter · <kbd>Esc</kbd> zur Übersicht",
      reset: "Fortschritt zurücksetzen", reset_frage: "Wirklich den ganzen Fortschritt löschen? Das kann nicht rückgängig gemacht werden.",
      design: "Design: {x}", design_auto: "Auto", design_light: "Hell", design_dark: "Dunkel",
      sprache: "Deutsch", system: "System: {x}",
      verlauf_titel: "Letzte Runden", verlauf_zeile: "{r} von {n} richtig", abgebrochen: "abgebrochen", verlauf_alles: "Alles richtig.",
      banner_karten: "Die Karten konnten nicht geladen werden. Liegt der Ordner karten/ neben index.html?",
      banner_begriffe: "begriffe.js fehlt oder enthält einen Tippfehler. Die Karten „Aus deinen Sessions“ sind gerade aus. Sag Claude: „Prüf bitte begriffe.js im Quiz-Ordner auf Fehler.“",
      banner_eigene: "eigene-karten.js enthält einen Tippfehler. Die Karten „Aus deinen Projekten“ sind gerade aus. Sag Claude: „Prüf bitte eigene-karten.js im Quiz-Ordner auf Fehler.“",
      banner_speicher: "Dein Browser erlaubt hier kein Speichern. Du kannst üben, aber der Fortschritt geht beim Schließen verloren.",
      zurueck: "← Übersicht", extra_tag: "Extra-Übung",
      richtig: "Richtig!", auch_ok: "Auch okay!", falsch: "Nicht ganz.",
      richtig_ist: "Richtig ist:", besser: "Noch besser wäre:",
      so_promptest: "So promptest du’s", kopieren: "Kopieren", kopiert: "Kopiert ✓", ging_nicht: "Ging nicht", probier: "Probier’s aus",
      weiter: "Weiter →", ergebnis: "Ergebnis ansehen →", pruefen: "Prüfen",
      befehl: "Befehl", ausgabe: "Ausgabe",
      wf_frage: "Stimmt diese Antwort?", wf_antwort: "Antwort", wf_ja: "Stimmt", wf_nein: "Stimmt nicht",
      wf_war_ja: "Die gezeigte Antwort stimmt.", wf_war_nein: "Die gezeigte Antwort stimmt nicht.",
      mehrfach_hinweis: "Mehrere Antworten sind richtig. Wähle alle aus.",
      reihe_hinweis: "Tippe die Schritte in der richtigen Reihenfolge an.", reihe_leer: "Tippe unten den ersten Schritt an.",
      reihe_richtig: "Richtige Reihenfolge",
      zeile_hinweis: "Tippe auf die Zeile mit dem Fehler.",
      bild_frage: "Tippe auf: {name}", bild_getippt: "Du hast getippt auf: {name}",
      paare_frage: "Was gehört zusammen?", paare_hinweis: "Tippe erst links, dann rechts.",
      begriff_frage: "Was bedeutet „{w}“?",
      begriff_erkl_d: "Dieser Begriff kam am {d} in einer deiner Sessions vor.", begriff_erkl: "Dieser Begriff kam in einer deiner Sessions vor.",
      ende_perfekt: "Perfekt, alles richtig!", ende_stark: "Stark gemacht!", ende_gut: "Gut, dass du drangeblieben bist!",
      ende_falsch_1: "1 Karte kommt in ein paar Runden wieder. Genau so lernt man.",
      ende_falsch_n: "{x} Karten kommen in ein paar Runden wieder. Genau so lernt man.",
      ende_ok: "Diese Karten kommen erst in ein paar Tagen wieder.",
      serie_zeile_1: "Serie: 1 Tag", serie_zeile_n: "Serie: {x} Tage",
      nochmal: "Noch eine Runde", uebersicht: "Zur Übersicht", merken: "Zum Merken",
      abzeichen_titel: "Abzeichen", abzeichen_neu: "Neues Abzeichen", effekte: "Effekte: {x}", an: "an", aus: "aus"
    },
    en: {
      titel_bereit: "Ready for a round?", titel_noch: "One more round?", titel_fertig: "All done for today",
      sub_fertig: "Nothing is due. An extra round strengthens what you already know.",
      sub: "{n} cards · about {min} min · {teile}",
      neu_n: "{x} new", wdh_1: "1 review", wdh_n: "{x} reviews", extra_n: "{x} extra practice",
      start: "Start round", extra_runde: "Extra round",
      modus_mix: "Mixed", modus_neu: "Discover new", modus_schwach: "Practice weak spots",
      modus_lbl: "Kind of round", laenge_lbl: "Cards per round",
      hinweis_neu_leer: "You have seen every card. This round uses cards you have rarely had.",
      hinweis_neu_teil: "Only {x} new left. Cards you have rarely had fill the rest.",
      hinweis_schwach_leer: "No mistakes yet. This round uses other cards instead.",
      hinweis_schwach_teil: "{x} with mistakes. Other cards fill the rest.",
      serie_1: "day streak", serie_n: "day streak", heute_ok: " · today ✓",
      gelernt: "cards learned", faellig: "due today",
      themen_titel: "Or practice one topic",
      leer_sessions: "empty for now, grows with your Claude sessions", leer_projekte: "empty for now, /snack fills it from your project", leer: "empty for now",
      thema_sub: "{g} of {t} learned", thema_faellig: " · {f} due",
      tasten: "<kbd>1</kbd>–<kbd>9</kbd> answer · <kbd>Enter</kbd> next · <kbd>Esc</kbd> overview",
      reset: "Reset progress", reset_frage: "Really delete all your progress? This cannot be undone.",
      design: "Theme: {x}", design_auto: "Auto", design_light: "Light", design_dark: "Dark",
      sprache: "English", system: "System: {x}",
      verlauf_titel: "Recent rounds", verlauf_zeile: "{r} of {n} correct", abgebrochen: "stopped early", verlauf_alles: "All correct.",
      banner_karten: "The cards could not be loaded. Is the karten/ folder next to index.html?",
      banner_begriffe: "begriffe.js is missing or has a typo. The “From your sessions” cards are off for now. Tell Claude: “Please check begriffe.js in the quiz folder for errors.”",
      banner_eigene: "eigene-karten.js has a typo. The “From your projects” cards are off for now. Tell Claude: “Please check eigene-karten.js in the quiz folder for errors.”",
      banner_speicher: "Your browser does not allow saving here. You can practice, but progress is lost when you close the page.",
      zurueck: "← Overview", extra_tag: "Extra practice",
      richtig: "Correct!", auch_ok: "Also fine!", falsch: "Not quite.",
      richtig_ist: "The right answer:", besser: "Even better:",
      so_promptest: "How to prompt it", kopieren: "Copy", kopiert: "Copied ✓", ging_nicht: "Didn't work", probier: "Try it",
      weiter: "Next →", ergebnis: "See result →", pruefen: "Check",
      befehl: "Command", ausgabe: "Output",
      wf_frage: "Is this answer right?", wf_antwort: "Answer", wf_ja: "True", wf_nein: "False",
      wf_war_ja: "The answer shown is right.", wf_war_nein: "The answer shown is wrong.",
      mehrfach_hinweis: "More than one answer is right. Select all of them.",
      reihe_hinweis: "Tap the steps in the right order.", reihe_leer: "Tap the first step below.",
      reihe_richtig: "Correct order",
      zeile_hinweis: "Tap the line with the mistake.",
      bild_frage: "Tap: {name}", bild_getippt: "You tapped: {name}",
      paare_frage: "What belongs together?", paare_hinweis: "Tap left first, then right.",
      begriff_frage: "What does “{w}” mean?",
      begriff_erkl_d: "This term came up in one of your sessions on {d}.", begriff_erkl: "This term came up in one of your sessions.",
      ende_perfekt: "Perfect, all correct!", ende_stark: "Nicely done!", ende_gut: "Good on you for sticking with it!",
      ende_falsch_1: "1 card will come back in a few rounds. That is how learning works.",
      ende_falsch_n: "{x} cards will come back in a few rounds. That is how learning works.",
      ende_ok: "These cards will not be back for a few days.",
      serie_zeile_1: "Streak: 1 day", serie_zeile_n: "Streak: {x} days",
      nochmal: "Another round", uebersicht: "Back to overview", merken: "Worth remembering",
      abzeichen_titel: "Badges", abzeichen_neu: "New badge", effekte: "Effects: {x}", an: "on", aus: "off"
    }
  };

  // ───────── Hilfsfunktionen ─────────
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const fmt = s => esc(s).replace(/`([^`]+)`/g, "<code>$1</code>");
  function shuffle(a) { const b = a.slice(); for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; } return b; }
  // Gewichtetes Losen: Karten mit hohem Gewicht landen eher vorn, aber nie sicher. So entsteht keine feste Reihenfolge.
  function ziehen(liste, gewicht) {
    return liste.map(k => ({ k, z: Math.pow(Math.random(), 1 / Math.max(gewicht(k), 0.0001)) })).sort((a, b) => b.z - a.z).map(x => x.k);
  }
  function slug(s) { return String(s).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""); }
  function tagStr(d) { return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0"); }

  // Testhilfe: ?heute=2026-11-20 tut so, als wäre ein anderer Tag
  let OVR = null;
  try { const p = new URLSearchParams(location.search).get("heute") || ""; if (/^\d{4}-\d{2}-\d{2}$/.test(p)) OVR = p; } catch (e) { /* ohne Adresszeile, z. B. im Test */ }
  function basis() { if (OVR) { const [y, m, d] = OVR.split("-").map(Number); return new Date(y, m - 1, d); } return new Date(); }
  const heute = () => tagStr(basis());
  function plusTage(n) { const d = basis(); d.setDate(d.getDate() + n); return tagStr(d); }
  function datumKurz(s) {
    const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(s || ""); if (!m) return "";
    return lang() === "de" ? m[3] + "." + m[2] + "." + m[1] : new Date(+m[1], +m[2] - 1, +m[3]).toLocaleDateString("en", { year: "numeric", month: "short", day: "numeric" });
  }

  // ───────── Speicher ─────────
  function leer() {
    return { karten: {}, serie: { tage: 0, letzter: null }, runden: 0, theme: "auto", sprache: null, system: null,
      laenge: 9, modus: "mix", verlauf: [], abzeichen: {}, zaehler: {}, arten: {}, effekte: true };
  }
  let speicherOk = true;
  try { localStorage.setItem(KEY + ".test", "1"); localStorage.removeItem(KEY + ".test"); } catch (e) { speicherOk = false; }
  function lesen(key) { try { const s = JSON.parse(localStorage.getItem(key)); return s && typeof s === "object" ? s : null; } catch (e) { return null; } }
  function laden() {
    const s = lesen(KEY) || lesen(ALT_KEY), d = leer();
    if (!s) return d;
    const o = { ...d, ...s, serie: { ...d.serie, ...(s.serie || {}) }, karten: s.karten || {} };
    if (!LAENGEN.includes(o.laenge)) o.laenge = d.laenge;
    if (!MODI.includes(o.modus)) o.modus = d.modus;
    if (!Array.isArray(o.verlauf)) o.verlauf = [];
    ["abzeichen", "zaehler", "arten"].forEach(f => { if (!o[f] || typeof o[f] !== "object") o[f] = {}; });
    return o;
  }
  let S = laden();
  function speichern() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { speicherOk = false; } }
  function zuruecksetzen() {
    const alt = S; S = leer();
    ["theme", "sprache", "system", "laenge", "modus", "effekte"].forEach(k => { S[k] = alt[k]; });
    speichern();
  }

  // ───────── Sprache und System ─────────
  const browserSprache = (() => { try { return /^de/i.test(navigator.language || "") ? "de" : "en"; } catch (e) { return "de"; } })();
  const lang = () => (S.sprache === "de" || S.sprache === "en") ? S.sprache : browserSprache;
  const systemGeraten = (() => { try { const p = (navigator.userAgent || "") + " " + (navigator.platform || ""); return /Win/i.test(p) ? "windows" : /Mac|iPhone|iPad/i.test(p) ? "mac" : "linux"; } catch (e) { return "linux"; } })();
  const system = () => ["linux", "mac", "windows"].includes(S.system) ? S.system : systemGeraten;
  function T(key, v) {
    let s = TEXTE[lang()][key]; if (s == null) s = TEXTE.de[key]; if (s == null) return key;
    return v ? s.replace(/\{(\w+)\}/g, (m, k) => (v[k] != null ? v[k] : m)) : s;
  }
  // Ein Kartentext ist entweder ein Text (gilt für beide Sprachen) oder ein Paar { de, en }.
  const istPaar = v => v && typeof v === "object" && !Array.isArray(v) && ("de" in v || "en" in v);
  function tx(v) { if (istPaar(v)) { const l = lang(); return v[l] != null ? v[l] : (v.de != null ? v.de : v.en); } return v == null ? "" : v; }
  function liste(v) { if (Array.isArray(v)) return v.map(tx); if (istPaar(v)) { const a = tx(v); return Array.isArray(a) ? a.map(tx) : []; } return []; }
  const opts = k => (k.typ === "erlauben" && !k.optionen) ? ERLAUBEN[lang()] : liste(k.optionen);
  const schritte = k => liste(k.schritte);
  const paare = k => (Array.isArray(k.paare) ? k.paare : []).map(p => [tx(p[0]), tx(p[1])]);
  const zeilen = k => String(tx(k.code)).split("\n");

  // ───────── Karten zusammenstellen ─────────
  const hatText = v => typeof v === "string" ? !!v.trim() : istPaar(v);
  const idxOk = (i, n) => Number.isInteger(i) && i >= 0 && i < n;
  function gueltig(k) {
    if (!k || typeof k.id !== "string" || !THEMEN[k.thema]) return false;
    const f = k.form || "wahl";
    if (f === "wahl") return !!TYPEN[k.typ] && (hatText(k.frage) || !!k.begriff) && opts(k).length >= 2 && idxOk(k.richtig, opts(k).length);
    if (f === "luecke") return hatText(k.frage) && String(tx(k.code)).includes("___") && opts(k).length >= 2 && idxOk(k.richtig, opts(k).length);
    if (f === "mehrfach") return hatText(k.frage) && opts(k).length >= 3 && Array.isArray(k.richtige) && k.richtige.length >= 1 &&
      k.richtige.length < opts(k).length && k.richtige.every(i => idxOk(i, opts(k).length));
    if (f === "reihenfolge") return hatText(k.frage) && schritte(k).length >= 3;
    if (f === "zeile") return hatText(k.frage) && hatText(k.code) && zeilen(k).length >= 2 && idxOk(k.zeile, zeilen(k).length);
    if (f === "paare") return paare(k).length >= 3;
    if (f === "bild") return !!SZENEN[k.szene] && SZENEN[k.szene].includes(k.ziel);
    return false;
  }
  const kartenGeladen = Array.isArray(window.SNACK_KARTEN) && window.SNACK_KARTEN.length > 0;
  const eigeneGeladen = Array.isArray(window.SNACK_EIGENE);
  const begriffeGeladen = Array.isArray(window.BEGRIFFE);

  function begriffKarten() {
    const roh = [], ids = new Set();
    (begriffeGeladen ? window.BEGRIFFE : []).forEach(b => {
      if (!b || typeof b.wort !== "string" || typeof b.erklaerung !== "string" || !slug(b.wort)) return;
      const id = "begriff-" + slug(b.wort);
      if (ids.has(id)) return;
      ids.add(id); roh.push({ ...b, id });
    });
    return roh.map(b => {
      const andere = shuffle(roh.filter(x => x.id !== b.id).map(x => x.erklaerung)).concat(shuffle(FALLBACK));
      const falsche = andere.filter((t, i, a) => t !== b.erklaerung && a.indexOf(t) === i).slice(0, 3);
      return { id: b.id, thema: "sessions", typ: "bedeutung", begriff: b.wort, datum: b.datum,
        optionen: [b.erklaerung].concat(falsche), richtig: 0, prompt: b.prompt ? "„" + b.prompt + "“" : undefined };
    });
  }
  // Aus jedem Teil einer Szene wird eine Karte „Tippe auf: …“. Name und Erklärung kommen von der passenden GUI-Karte.
  function bildKarten(vorhandene) {
    const out = [];
    Object.keys(SZENEN).forEach(sz => SZENEN[sz].forEach(teil => {
      const ref = vorhandene.find(k => k.id === "gui-" + teil);
      if (ref) out.push({ id: "bild-" + sz + "-" + teil, thema: "gui", form: "bild", szene: sz, ziel: teil, ref: ref.id, os: ref.os });
    }));
    return out;
  }

  const ALLE = [], nachId = {};
  function aufnehmen(k) {
    if (!gueltig(k)) { console.warn("Snack: Karte übersprungen, Format stimmt nicht:", k); return; }
    if (nachId[k.id]) { console.warn("Snack: doppelte id übersprungen:", k.id); return; }
    ALLE.push(k); nachId[k.id] = k;
  }
  (kartenGeladen ? window.SNACK_KARTEN : []).forEach(aufnehmen);
  (eigeneGeladen ? window.SNACK_EIGENE : []).forEach(aufnehmen);
  bildKarten(ALLE).forEach(aufnehmen);
  begriffKarten().forEach(aufnehmen);

  const passtOs = k => !Array.isArray(k.os) || k.os.includes(system());
  const pool = thema => ALLE.filter(k => passtOs(k) && (!thema || k.thema === thema));
  const formVon = k => k.form || "wahl";
  const teilName = teil => { const r = nachId["gui-" + teil]; return r ? opts(r)[r.richtig] : teil; };

  // Texte einer Karte in der aktuellen Sprache
  function frageText(k) {
    if (k.begriff) return T("begriff_frage", { w: k.begriff });
    if (formVon(k) === "bild") return T("bild_frage", { name: teilName(k.ziel) });
    if (formVon(k) === "paare" && !hatText(k.frage)) return T("paare_frage");
    return tx(k.frage);
  }
  function erklaerungText(k) {
    if (k.begriff) return k.datum ? T("begriff_erkl_d", { d: datumKurz(k.datum) }) : T("begriff_erkl");
    if (k.ref && nachId[k.ref]) return tx(nachId[k.ref].erklaerung);
    return tx(k.erklaerung);
  }
  const promptText = k => (k.ref && nachId[k.ref]) ? tx(nachId[k.ref].prompt) : tx(k.prompt);
  // Die richtige Antwort als kurzer Text, für „Zum Merken“ und den Rückblick
  function loesung(k) {
    const f = formVon(k);
    if (f === "mehrfach") return k.richtige.map(i => opts(k)[i]).join(" · ");
    if (f === "reihenfolge") return schritte(k).join(" → ");
    if (f === "zeile") return zeilen(k)[k.zeile].trim();
    if (f === "bild") return teilName(k.ziel);
    if (f === "paare") return paare(k).map(p => p[0] + " = " + p[1]).join(" · ");
    return opts(k)[k.richtig];
  }
  // Darf eine klassische Karte bei der Wiederholung als „Wahr oder falsch“ kommen?
  const wfFaehig = k => formVon(k) === "wahl" && ["bedeutung", "fehler", "benennen"].includes(k.typ) && !(k.auchOk && k.auchOk.length) && opts(k).length >= 2;
  // In welcher Form die Karte diesmal erscheint: neue Karten immer klassisch, bekannte möglichst anders als zuletzt
  function formFuer(k, s) {
    const f = formVon(k);
    if (f !== "wahl" || !s || !wfFaehig(k)) return f;
    if (s.form === "wf") return "wahl";
    return Math.random() < 0.6 ? "wf" : "wahl";
  }

  // ───────── Auswertung ─────────
  function stats(thema) {
    const h = heute(); let gelernt = 0, faellig = 0, neu = 0, gesehen = 0, total = 0, schwach = 0;
    pool(thema).forEach(k => {
      total++;
      const s = S.karten[k.id];
      if (!s) { neu++; return; }
      gesehen++;
      if (s.box >= GELERNT_AB) gelernt++;
      if (s.due <= h) faellig++;
      if (s.falsch > 0) schwach++;
    });
    return { total, gelernt, faellig, neu, gesehen, schwach };
  }
  function serieJetzt() { const l = S.serie.letzter; return (l === heute() || l === plusTage(-1)) ? S.serie.tage : 0; }

  // ───────── Runde zusammenstellen ─────────
  function mischeThemen(karten) {      // abwechselnd aus jedem Thema, damit kein Thema eine Runde füllt
    const g = {}; karten.forEach(k => (g[k.thema] = g[k.thema] || []).push(k));
    const keys = shuffle(Object.keys(g)), out = [];
    for (let i = 0; out.length < karten.length; i++) { const t = g[keys[i % keys.length]]; if (t.length) out.push(t.shift()); }
    return out;
  }
  // Stellt eine Runde zusammen. o = { thema, modus, n }. Ergebnis: { items, info }.
  // Ein item ist { k, form, frueh } oder ein Paare-Bündel { form: "paare", teile: [{ k, frueh }] }.
  // frueh = Karte ist noch nicht fällig: Extra-Übung, eine richtige Antwort ändert das Fach nicht.
  function rundeWaehlen(o) {
    o = o || {};
    const thema = o.thema || null, modus = MODI.includes(o.modus) ? o.modus : S.modus, n = LAENGEN.includes(o.n) ? o.n : S.laenge;
    const h = heute(), P = pool(thema), st = k => S.karten[k.id];
    // In einem kleinen Vorrat (ein einzelnes Thema) pausieren Karten kürzer. Sonst bleiben nur die Karten übrig,
    // die schon einmal zusammen dran waren, und sie kämen als feste Gruppe zurück.
    const pause = P.length >= 5 * n ? PAUSE : P.length >= 3 * n ? 2 : 1;
    const pausiert = k => { const s = st(k); return !!s && s.zuletzt != null && S.runden - s.zuletzt < pause; };
    const istFaellig = k => { const s = st(k); return !!s && s.due <= h; };
    const her = k => { const s = st(k); return s && s.zuletzt != null ? S.runden - s.zuletzt + 1 : S.runden + 1; };   // Runden seit dem letzten Mal
    const fach = k => 6 - Math.min(5, Math.max(1, st(k).box || 1));                                                 // niedriges Fach = dringender
    const nurBegriffe = thema === "sessions";

    const sel = [];
    const zahl = { thema: {}, form: {}, gruppe: {}, frage: new Set(), kenn: new Set(), begriff: 0 };
    const capThema = thema ? Infinity : Math.ceil(n / 3);
    const capForm = f => f === "wahl" ? Math.ceil(n / 2) : Math.ceil(n / 3);
    const capGruppe = n >= 15 ? 2 : 1;                 // höchstens so viele Karten, die schon einmal zusammen in einer Runde waren
    const capBegriff = nurBegriffe ? Infinity : 1;
    const kenn = k => k.ref || k.id;                   // eine Bild-Karte und ihre GUI-Karte gelten als dieselbe Sache
    const frageKey = k => String(frageText(k)).toLowerCase();

    // stufe 0 = alle Regeln · 1 = ohne Themen- und Art-Grenze · ab 2 = nur noch „keine Karte doppelt“ und die
    // Gruppen-Grenze, die mit jeder Stufe um eins wächst. So verteilt sich Auffüllen auf möglichst viele frühere Runden.
    function passt(k, form, stufe) {
      if (zahl.kenn.has(kenn(k))) return false;
      const s = st(k);
      if (s && s.zuletzt != null && (zahl.gruppe[s.zuletzt] || 0) >= capGruppe + Math.max(0, stufe - 1)) return false;
      if (stufe >= 2) return true;
      if (zahl.frage.has(frageKey(k))) return false;
      if (k.thema === "sessions" && zahl.begriff >= capBegriff) return false;
      if (stufe >= 1) return true;
      return (zahl.thema[k.thema] || 0) < capThema && (zahl.form[form] || 0) < capForm(form);
    }
    function rein(k, form, frueh) {
      sel.push({ k, form, frueh });
      zahl.kenn.add(kenn(k)); zahl.frage.add(frageKey(k));
      zahl.thema[k.thema] = (zahl.thema[k.thema] || 0) + 1;
      zahl.form[form] = (zahl.form[form] || 0) + 1;
      if (k.thema === "sessions") zahl.begriff++;
      const s = st(k); if (s && s.zuletzt != null) zahl.gruppe[s.zuletzt] = (zahl.gruppe[s.zuletzt] || 0) + 1;
    }
    // Füllt die Runde aus mehreren Quellen, in dieser Reihenfolge. Jede Quelle versucht es erst mit allen Regeln
    // und dann ohne Themen- und Art-Grenze (ihr Anteil ist wichtiger als die Mischung der Arten).
    // Erst wenn alle Quellen durch sind, lockert sich die Gruppen-Grenze: lieber eine andere Quelle als eine alte Gruppe.
    function fuellen(quellen) {
      quellen.forEach(q => { q.drin = 0; });
      const folge = [[0, 1]];
      for (let s = 2; s <= n + 1; s++) folge.push([s]);
      for (const stufen of folge) {
        for (const q of quellen) {
          for (const stufe of stufen) {
            for (const k of q.karten) {
              if (sel.length >= n) return;
              if (q.drin >= q.ziel) break;
              const form = formFuer(k, st(k));
              if (!passt(k, form, stufe)) continue;
              rein(k, form, q.frueh ? q.frueh(k) : false); q.drin++;
            }
          }
        }
      }
    }
    // Session-Begriffe kommen zu viert als „Paare zuordnen“. Das zählt als eine Karte.
    // In einem Bündel landen höchstens zwei Begriffe, die schon einmal zusammen dran waren.
    function buendel(max, kandidaten) {
      for (let b = 0; b < max && kandidaten.length >= 4 && sel.length < n; b++) {
        const vier = [], gruppe = {};
        for (const grenze of [2, 4]) {
          for (const k of kandidaten) {
            if (vier.length >= 4) break;
            if (vier.includes(k)) continue;
            const s = st(k), g = s && s.zuletzt != null ? s.zuletzt : null;
            if (g != null && (gruppe[g] || 0) >= grenze) continue;
            vier.push(k); if (g != null) gruppe[g] = (gruppe[g] || 0) + 1;
          }
        }
        vier.forEach(k => kandidaten.splice(kandidaten.indexOf(k), 1));
        const teile = vier.map(k => ({ k, frueh: !!st(k) && !istFaellig(k) }));
        sel.push({ form: "paare", teile, frueh: teile.every(t => t.frueh) });
        teile.forEach(t => zahl.kenn.add(t.k.id));
        zahl.form.paare = (zahl.form.paare || 0) + 1;
      }
    }

    const frei = P.filter(k => !pausiert(k));
    const neu = mischeThemen(shuffle(frei.filter(k => !st(k))));
    const faellig = ziehen(frei.filter(istFaellig), fach);
    const spaeter = ziehen(frei.filter(k => st(k) && !istFaellig(k)), her);
    const notfall = ziehen(P.filter(pausiert), her);                       // gerade erst gesehen: nur, wenn sonst nichts da ist
    const nichtFaellig = k => !istFaellig(k);
    const terme = frei.filter(k => k.thema === "sessions");
    const info = { modus, n, hinweis: null };

    if (modus === "neu") {
      if (!thema || nurBegriffe) buendel(nurBegriffe ? Math.floor(n / 2) : 1, shuffle(terme.filter(k => !st(k))));
      const selten = ziehen(frei.filter(k => st(k)), k => 1 / (1 + st(k).ok + st(k).falsch));
      fuellen([{ karten: neu, ziel: n }, { karten: selten, ziel: n, frueh: nichtFaellig }]);
      fuellen([{ karten: notfall, ziel: n, frueh: nichtFaellig }]);
    } else if (modus === "schwach") {
      const quote = k => { const s = st(k); return s.falsch / Math.max(1, s.ok + s.falsch) + (s.box <= 1 ? 0.5 : 0) + 0.05; };
      const schwach = ziehen(frei.filter(k => st(k) && st(k).falsch > 0), quote);
      fuellen([{ karten: schwach, ziel: n, frueh: nichtFaellig }, { karten: faellig, ziel: n }, { karten: neu, ziel: n }, { karten: spaeter, ziel: n, frueh: nichtFaellig }]);
      fuellen([{ karten: ziehen(notfall.filter(k => st(k).falsch > 0), quote).concat(notfall), ziel: n, frueh: nichtFaellig }]);
    } else {
      if (!thema || nurBegriffe) {
        const t = ziehen(terme.filter(istFaellig), fach).concat(shuffle(terme.filter(k => !st(k))));
        buendel(nurBegriffe ? Math.floor(n / 2) : 1, nurBegriffe ? t.concat(ziehen(terme.filter(k => st(k) && !istFaellig(k)), her)) : t);
      }
      const platz = n - sel.length, zielNeu = Math.min(neu.length, Math.round(platz * NEU_ANTEIL));
      fuellen([
        { karten: faellig, ziel: platz - zielNeu }, { karten: neu, ziel: zielNeu },
        { karten: neu, ziel: n }, { karten: faellig, ziel: n }, { karten: spaeter, ziel: n, frueh: nichtFaellig }
      ]);
      fuellen([{ karten: notfall, ziel: n, frueh: nichtFaellig }]);
    }

    const items = shuffle(sel);
    const istNeu = it => it.teile ? it.teile.every(t => !st(t.k)) : !st(it.k);
    info.neu = items.filter(istNeu).length;
    info.extra = items.filter(it => !istNeu(it) && it.frueh).length;
    info.alt = items.length - info.neu - info.extra;
    info.schwach = items.filter(it => !it.teile && st(it.k) && st(it.k).falsch > 0).length;
    if (modus === "neu" && info.neu < items.length) info.hinweis = info.neu ? T("hinweis_neu_teil", { x: info.neu }) : T("hinweis_neu_leer");
    if (modus === "schwach" && info.schwach < items.length) info.hinweis = info.schwach ? T("hinweis_schwach_teil", { x: info.schwach }) : T("hinweis_schwach_leer");
    return { items, info };
  }

  // ───────── Runde spielen und Lernstand buchen ─────────
  function rundeNeu(o, fertig) {
    const r = fertig || rundeWaehlen(o);
    return { thema: (o && o.thema) || null, modus: r.info.modus, items: r.items, info: r.info, i: 0, richtig: 0, falsch: [], log: [], beantwortet: 0, zu: false };
  }
  function buchen(k, ok, frueh, form) {
    const s = S.karten[k.id] || { box: 0, ok: 0, falsch: 0 };
    s.zuletzt = S.runden;                     // in welcher Runde die Karte zuletzt dran war
    s.form = form;                            // in welcher Form, damit sie nächstes Mal anders kommen kann
    if (ok) {
      s.ok++;
      if (!frueh || !s.due) { s.box = Math.min(5, Math.max(s.box, 1) + 1); s.due = plusTage(INTERVALL[s.box]); }
    } else { s.falsch++; s.box = 1; s.due = plusTage(INTERVALL[1]); }
    S.karten[k.id] = s;
  }
  // erg = { ok } für eine Karte, bei einem Paare-Bündel zusätzlich { teile: [true, false, …] } je Begriff
  function werten(R, item, erg) {
    if (item.teile) item.teile.forEach((t, i) => { buchen(t.k, !!erg.teile[i], t.frueh, "paare"); R.log.push([t.k.id, "paare", erg.teile[i] ? 1 : 0]); });
    else { buchen(item.k, !!erg.ok, item.frueh, item.form); R.log.push([item.k.id, item.form, erg.ok ? 1 : 0]); }
    if (erg.ok) R.richtig++; else R.falsch.push(item);
    R.beantwortet++;
    S.arten[item.form] = 1;                   // welche Kartenarten schon gespielt wurden (für ein Abzeichen)
    speichern();
  }
  // Schließt die Runde ab und schreibt sie in den Verlauf. abbruch = vorzeitig verlassen (zählt nicht für die Serie).
  function rundeEnde(R, abbruch) {
    if (R.zu || !R.beantwortet) return;
    R.zu = true;
    if (!abbruch) {
      const h = heute();
      if (S.serie.letzter !== h) { S.serie.tage = (S.serie.letzter === plusTage(-1)) ? S.serie.tage + 1 : 1; S.serie.letzter = h; }
    }
    S.verlauf.push({ r: S.runden, d: heute(), m: R.modus, t: R.thema, n: abbruch ? R.beantwortet : R.items.length, ok: R.richtig, ab: abbruch ? 1 : 0, k: R.log });
    if (S.verlauf.length > VERLAUF_MAX) S.verlauf = S.verlauf.slice(-VERLAUF_MAX);
    S.runden++;
    if (!abbruch) {
      S.zaehler[R.modus] = (S.zaehler[R.modus] || 0) + 1;
      R.perfekt = R.richtig === R.items.length;
      if (R.perfekt && R.items.length >= 5) S.zaehler.perfekt = (S.zaehler.perfekt || 0) + 1;
      R.neueAbzeichen = abzeichenPruefen();
    }
    speichern();
  }

  // ───────── Abzeichen ─────────
  function abzeichenStand() {
    const themaFertig = Object.keys(THEMEN).some(t => { const s = stats(t); return s.total >= 10 && s.gelernt === s.total; });
    return { runden: S.runden, gesehen: Object.keys(S.karten).length, serie: serieJetzt(), perfekt: S.zaehler.perfekt || 0,
      arten: Object.keys(S.arten).length, themaFertig, schwach: S.zaehler.schwach || 0, neu: S.zaehler.neu || 0 };
  }
  function abzeichenPruefen() {               // vergibt neu verdiente Abzeichen und gibt sie zurück
    const z = abzeichenStand(), neu = [];
    ABZEICHEN.forEach(a => { if (!S.abzeichen[a.id] && a.pruef(z)) { S.abzeichen[a.id] = heute(); neu.push(a); } });
    return neu;
  }

  return {
    THEMEN, TYPEN, FORMEN, LAENGEN, MODI, SZENEN, GELERNT_AB, ABZEICHEN,
    get S() { return S; }, speichern, zuruecksetzen,
    get speicherOk() { return speicherOk; }, kartenGeladen, eigeneGeladen, begriffeGeladen,
    lang, system, T, tx, opts, schritte, paare, zeilen, esc, fmt, shuffle, datumKurz,
    ALLE, nachId, pool, formVon, teilName, frageText, erklaerungText, promptText, loesung,
    stats, serieJetzt, heute, plusTage, setHeute(d) { OVR = d; },
    rundeWaehlen, rundeNeu, werten, rundeEnde
  };
})();
