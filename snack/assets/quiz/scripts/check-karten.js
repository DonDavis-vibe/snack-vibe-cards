// Prüft alle Karten im Quiz-Ordner gegen die Regeln der App.
// Aufruf im Quiz-Ordner:  node scripts/check-karten.js .            (Fehler im Format)
//                         node scripts/check-karten.js . --zweisprachig   (zusätzlich: jede Grundkarte braucht DE + EN)
const fs = require("fs"), vm = require("vm"), path = require("path");
const dir = process.argv[2] || ".", STRENG = process.argv.includes("--zweisprachig");
const lies = f => fs.readFileSync(path.join(dir, f), "utf8");

const ctx = { console }; ctx.window = ctx; vm.createContext(ctx);
const kartenDir = path.join(dir, "karten");
const dateien = fs.readdirSync(kartenDir).filter(f => f.endsWith(".js")).sort();
dateien.forEach(f => vm.runInContext(lies(path.join("karten", f)), ctx, { filename: f }));
["eigene-karten.js", "begriffe.js"].forEach(f => { if (fs.existsSync(path.join(dir, f))) vm.runInContext(lies(f), ctx, { filename: f }); });
const GRUND = ctx.SNACK_KARTEN || [], EIGENE = ctx.SNACK_EIGENE || [], BEGRIFFE = ctx.BEGRIFFE || [];

// Themen, Mini-Oberflächen und Farben direkt aus dem Code der App lesen, damit die Prüfung nicht veraltet
const block = (src, start) => { const i = src.indexOf(start); return i < 0 ? "" : src.slice(i, src.indexOf("\n  };", i)); };
const keys = src => [...src.matchAll(/^\s{4}([a-z]+)\s*:/gm)].map(m => m[1]);
const kern = lies("js/kern.js"), formen = lies("js/formen.js"), html = lies("index.html");
const THEMEN = keys(block(kern, "const THEMEN = {")), MOCKUPS = keys(block(formen, "const MOCKUPS = {"));
const TYPEN = ["benennen", "upgrade", "erlauben", "fehler", "bedeutung"];
const FORMEN = ["wahl", "luecke", "mehrfach", "reihenfolge", "zeile", "paare"];
const FELDER = ["id", "thema", "typ", "form", "projekt", "os", "frage", "mockup", "hl", "code", "codeLabel", "optionen", "richtig", "richtige", "auchOk",
  "schritte", "paare", "zeile", "warum", "erklaerung", "prompt", "tipp"];
const OS = ["linux", "mac", "windows"];
const SPRACHEN = ["de", "en"];

const fehler = [], ids = new Set();
const f = (k, msg) => fehler.push((k && k.id || "?") + ": " + msg);
THEMEN.forEach(t => { if (!html.includes("--t-" + t + ":")) f(null, "Farbe --t-" + t + " fehlt in index.html"); });
dateien.forEach(d => { if (!html.includes('src="karten/' + d + '"')) f(null, "karten/" + d + " ist in index.html nicht eingebunden"); });

const istPaar = v => v && typeof v === "object" && !Array.isArray(v) && ("de" in v || "en" in v);
const tx = (v, l) => istPaar(v) ? (v[l] != null ? v[l] : (v.de != null ? v.de : v.en)) : v;
const liste = (v, l) => Array.isArray(v) ? v.map(x => tx(x, l)) : istPaar(v) ? (tx(v, l) || []).map(x => tx(x, l)) : [];
const text = v => typeof v === "string" && v.trim().length > 0;
// Alle Texte einer Karte in einer Sprache, für Backtick- und Leer-Prüfung
function texte(k, l) {
  return [tx(k.frage, l), tx(k.erklaerung, l), tx(k.tipp, l), ...liste(k.optionen, l), ...liste(k.schritte, l),
    ...Object.values(k.warum || {}).map(w => tx(w, l)), ...(k.paare || []).flatMap(p => [tx(p[0], l), tx(p[1], l)])].filter(t => t != null);
}

function pruefe(k, grund) {
  Object.keys(k).forEach(x => { if (!FELDER.includes(x)) f(k, "unbekanntes Feld " + x); });
  if (typeof k.id !== "string" || !k.id) return f(k, "id fehlt");
  if (ids.has(k.id)) f(k, "doppelte id"); ids.add(k.id);
  if (!THEMEN.includes(k.thema) || k.thema === "sessions") f(k, "unbekanntes Thema " + k.thema);
  if (grund && k.thema === "projekte") f(k, "Thema projekte gehört in eigene-karten.js");
  const form = k.form || "wahl";
  if (!FORMEN.includes(form)) return f(k, "unbekannte form " + form);
  if (k.os && (!Array.isArray(k.os) || !k.os.length || k.os.some(o => !OS.includes(o)))) f(k, "os muss eine Liste aus linux, mac, windows sein");
  if (k.codeLabel && !k.code) f(k, "codeLabel ohne code");
  if (k.hl && !k.mockup) f(k, "hl ohne mockup");
  if (k.mockup && !MOCKUPS.includes(k.mockup)) f(k, "Mini-Oberfläche fehlt: " + k.mockup);

  SPRACHEN.forEach(l => {
    const o = liste(k.optionen, l), s = liste(k.schritte, l), code = tx(k.code, l);
    if (form !== "paare" && !text(tx(k.frage, l))) f(k, "frage fehlt (" + l + ")");
    if (!text(tx(k.erklaerung, l))) f(k, "erklaerung fehlt (" + l + ")");
    const p = tx(k.prompt, l);
    if (p != null && !/^[„“][\s\S]*[“”]$/.test(p) && !/^(Formel|Formula):/.test(p)) f(k, "prompt-Format (" + l + ")");
    texte(k, l).forEach(t => {
      if (typeof t !== "string" || !t.trim()) f(k, "leerer Text (" + l + ")");
      else if ((t.match(/`/g) || []).length % 2) f(k, "Backticks unpaarig (" + l + "): " + t.slice(0, 40));
    });
    const idx = (i, n) => Number.isInteger(i) && i >= 0 && i < n;
    if (form === "wahl" || form === "luecke" || form === "mehrfach") {
      const erlauben = form === "wahl" && k.typ === "erlauben";
      if (erlauben) { if (k.optionen) f(k, "erlauben hat keine eigenen optionen"); if (!k.code) f(k, "erlauben braucht code"); if (!idx(k.richtig, 3)) f(k, "richtig außerhalb"); }
      else {
        const max = form === "mehrfach" ? 5 : 4, min = form === "mehrfach" ? 3 : 2;
        if (o.length < min || o.length > max) f(k, min + " bis " + max + " Optionen nötig (" + l + ")");
        if (new Set(o).size !== o.length) f(k, "doppelte Option (" + l + ")");
      }
      const n = erlauben ? 3 : o.length;
      if (form !== "mehrfach" && !erlauben && !idx(k.richtig, n)) f(k, "richtig außerhalb");
      (k.auchOk || []).forEach(i => { if (!idx(i, n) || i === k.richtig) f(k, "auchOk ungültig: " + i); });
      Object.keys(k.warum || {}).forEach(i => { if (!idx(+i, n)) f(k, "warum-Index ungültig: " + i); if (form !== "mehrfach" && +i === k.richtig) f(k, "warum für die richtige Antwort"); });
    }
    if (form === "wahl") {
      if (!TYPEN.includes(k.typ)) f(k, "unbekannter typ " + k.typ);
      if (k.typ === "upgrade" && o.length !== 3) f(k, "upgrade hat 3 Optionen");
      if (k.typ === "benennen" && !k.mockup) f(k, "benennen ohne mockup");
    }
    if (form === "luecke" && (typeof code !== "string" || code.split("___").length !== 2)) f(k, "luecke braucht code mit genau einer Lücke ___ (" + l + ")");
    if (form === "mehrfach") {
      const r = k.richtige;
      if (!Array.isArray(r) || r.length < 1 || r.length >= o.length || new Set(r).size !== r.length || r.some(i => !idx(i, o.length))) f(k, "richtige ungültig (mindestens 1, nicht alle)");
    }
    if (form === "reihenfolge" && (s.length < 3 || s.length > 5 || new Set(s).size !== s.length)) f(k, "reihenfolge braucht 3 bis 5 verschiedene schritte (" + l + ")");
    if (form === "zeile") {
      const z = typeof code === "string" ? code.split("\n") : [];
      if (z.length < 2 || z.length > 9) f(k, "zeile braucht code mit 2 bis 9 Zeilen (" + l + ")");
      if (!idx(k.zeile, z.length)) f(k, "zeile außerhalb");
      (k.auchOk || []).forEach(i => { if (!idx(i, z.length) || i === k.zeile) f(k, "auchOk ungültig: " + i); });
    }
    if (form === "paare") {
      const p2 = k.paare;
      if (!Array.isArray(p2) || p2.length < 3 || p2.length > 5 || p2.some(x => !Array.isArray(x) || x.length !== 2)) f(k, "paare braucht 3 bis 5 Paare [links, rechts]");
      else if (new Set(p2.map(x => tx(x[0], l))).size !== p2.length || new Set(p2.map(x => tx(x[1], l))).size !== p2.length) f(k, "paare: doppelter Eintrag (" + l + ")");
    }
  });
  // Beide Sprachen müssen gleich viele Optionen und Schritte haben
  if (liste(k.optionen, "de").length !== liste(k.optionen, "en").length) f(k, "optionen: de und en sind verschieden lang");
  if (liste(k.schritte, "de").length !== liste(k.schritte, "en").length) f(k, "schritte: de und en sind verschieden lang");
}
GRUND.forEach(k => pruefe(k, true));
EIGENE.forEach(k => pruefe(k, false));

// Begriffe
const worte = new Set();
BEGRIFFE.forEach((b, i) => {
  if (!b || !text(b.wort) || !text(b.erklaerung)) return fehler.push("begriffe.js Eintrag " + (i + 1) + ": wort oder erklaerung fehlt");
  const w = b.wort.toLowerCase(); if (worte.has(w)) fehler.push("begriffe.js: doppelt: " + b.wort); worte.add(w);
  if (b.datum && !/^\d{4}-\d{2}-\d{2}$/.test(b.datum)) fehler.push("begriffe.js: datum-Format bei " + b.wort);
});

// Zweisprachigkeit der Grundkarten: Frage und Erklärung müssen ein Paar { de, en } sein
const voll = v => istPaar(v) && text(v.de) && text(v.en);
const einsprachig = GRUND.filter(k => !((k.form === "paare" && !k.frage) || voll(k.frage)) || !voll(k.erklaerung));
if (STRENG) einsprachig.forEach(k => f(k, "nicht zweisprachig"));

// Übersicht
const zaehl = (liste2, fn) => liste2.reduce((a, k) => { const x = fn(k); a[x] = (a[x] || 0) + 1; return a; }, {});
console.log("Grundkarten:", GRUND.length, "| eigene:", EIGENE.length, "| Begriffe:", BEGRIFFE.length);
console.log("Themen:", JSON.stringify(zaehl(GRUND, k => k.thema)));
console.log("Kartenarten:", JSON.stringify(zaehl(GRUND.concat(EIGENE), k => k.form || "wahl")));
console.log("Grundkarten nur in einer Sprache:", einsprachig.length, STRENG ? "" : "(mit --zweisprachig wird das ein Fehler)");
// Wie oft ist die richtige Antwort die längste? Einmal für die Grundkarten je Sprache, einmal für die eigenen Karten.
function laengenTest(name, karten, l) {
  const basis = karten.filter(k => (k.form || "wahl") === "wahl" && k.typ !== "erlauben");
  const laengste = basis.filter(k => { const n = liste(k.optionen, l).map(x => String(x).length), r = n[k.richtig]; return n.every((x, i) => i === k.richtig || x < r); }).length;
  if (!basis.length) return;
  console.log("Richtige Antwort ist die längste (" + name + "):", laengste, "von", basis.length, "(Ziel: höchstens ca. 40 %, sonst kann man nach Länge raten)");
  if (basis.length >= 5 && laengste / basis.length > 0.4) console.log("WARNUNG (" + name + "): Zu oft ist die richtige Antwort die längste. Falsche Antworten ähnlich lang und glaubwürdig machen.");
}
SPRACHEN.forEach(l => laengenTest("Grundkarten, " + l, GRUND.filter(k => l === "de" || voll(k.frage)), l));
laengenTest("eigene Karten", EIGENE, "de");
console.log(fehler.length ? "FEHLER:\n" + fehler.join("\n") : "Alles ok.");
process.exit(fehler.length ? 1 : 0);
