// Misch-Test: spielt viele Runden mit dem echten Auswahl-Code aus js/kern.js und misst, wie abwechslungsreich sie sind.
// Aufruf im Quiz-Ordner:  node scripts/sim.js . [--runden 60] [--n 9] [--modus mix|neu|schwach] [--thema git] [--p 0.7] [--lesen 5]
//   --p      Anteil richtiger Antworten des gedachten Spielers
//   --lesen  so viele Runden am Ende als Fragenliste ausgeben, zum Lesen wie ein Spieler
const fs = require("fs"), vm = require("vm"), path = require("path");
const dir = process.argv[2] || ".";
const arg = (name, def) => { const i = process.argv.indexOf("--" + name); return i > 0 ? process.argv[i + 1] : def; };
const RUNDEN = +arg("runden", 60), N = +arg("n", 9), MODUS = arg("modus", "mix"), THEMA = arg("thema", null), P = +arg("p", 0.7), LESEN = +arg("lesen", 5);

const speicher = {};
const ctx = { console: { warn() {}, log() {} }, navigator: { language: "de", userAgent: "Linux" }, location: { search: "" },
  localStorage: { getItem: k => (k in speicher ? speicher[k] : null), setItem: (k, v) => { speicher[k] = String(v); }, removeItem: k => { delete speicher[k]; } } };
ctx.window = ctx; vm.createContext(ctx);
const lade = f => vm.runInContext(fs.readFileSync(path.join(dir, f), "utf8"), ctx, { filename: f });
fs.readdirSync(path.join(dir, "karten")).filter(f => f.endsWith(".js")).sort().forEach(f => lade(path.join("karten", f)));
["eigene-karten.js", "begriffe.js"].forEach(f => { if (fs.existsSync(path.join(dir, f))) lade(f); });
lade("js/kern.js");
const K = ctx.Snack;

const tag = n => { const d = new Date(2026, 0, 1 + n); return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0"); };
const idsVon = it => it.teile ? it.teile.map(t => t.k.id) : [it.k.id];
const mittel = a => a.length ? a.reduce((x, y) => x + y, 0) / a.length : 0;

const letzte = {};                    // Karten-id → Runde, in der sie zuletzt dran war
const m = { neu: [], arten: [], arten4: 0, doppelFrage: 0, gruppeMax: [], gruppePaare: [], direkt: [], themaMax: [], wahl: [] };
const protokoll = [];
for (let r = 0; r < RUNDEN; r++) {
  K.setHeute(tag(Math.floor(r / 6)));                           // sechs Runden pro Tag
  const R = K.rundeNeu({ thema: THEMA, modus: MODUS, n: N });
  const items = R.items;
  if (!items.length) break;
  const ids = items.flatMap(idsVon);
  m.neu.push(R.info.neu / items.length);
  const arten = new Set(items.map(it => it.form)); m.arten.push(arten.size); if (arten.size >= 4) m.arten4++;
  m.wahl.push(items.filter(it => it.form === "wahl").length / items.length);
  const fragen = items.filter(it => it.k).map(it => K.frageText(it.k).toLowerCase());
  m.doppelFrage += fragen.length - new Set(fragen).size;
  const gruppen = {}; ids.forEach(id => { if (letzte[id] != null) gruppen[letzte[id]] = (gruppen[letzte[id]] || 0) + 1; });
  const g = Object.values(gruppen);
  m.gruppeMax.push(g.length ? Math.max(...g) : 0);
  m.gruppePaare.push(g.reduce((s, x) => s + x * (x - 1) / 2, 0));
  m.direkt.push(ids.filter(id => letzte[id] != null && r - letzte[id] <= 2).length);
  const th = {}; items.forEach(it => { const t = it.k ? it.k.thema : "sessions"; th[t] = (th[t] || 0) + 1; });
  m.themaMax.push(Math.max(...Object.values(th)));
  protokoll.push(items.map(it => "  [" + it.form + (it.frueh ? ", extra" : "") + "] " + (it.k ? K.frageText(it.k) : "Paare: " + it.teile.map(t => t.k.begriff).join(" / "))));
  items.forEach(it => {
    const erg = it.teile ? { teile: it.teile.map(() => Math.random() < P) } : { ok: Math.random() < P };
    if (it.teile) erg.ok = erg.teile.every(Boolean);
    K.werten(R, it, erg);
  });
  K.rundeEnde(R, false);
  ids.forEach(id => { letzte[id] = r; });
}

const pz = x => Math.round(x * 100) + " %", z1 = x => x.toFixed(1);
const gespielt = m.neu.length, s = K.stats(THEMA);
console.log("Misch-Test:", gespielt, "Runden ·", N, "Karten · Modus", MODUS, "· Thema", THEMA || "alle", "· richtig", pz(P));
console.log("Karten im Vorrat:", s.total, "| am Ende gesehen:", s.gesehen, "| fällig:", s.faellig);
console.log("Neu-Anteil je Runde:            ", pz(mittel(m.neu)), "(erste 10 Runden:", pz(mittel(m.neu.slice(0, 10))) + ")");
console.log("Kartenarten je Runde:           ", z1(mittel(m.arten)), "| Runden mit mindestens 4 Arten:", pz(m.arten4 / gespielt));
console.log("Anteil klassischer Karten:      ", pz(mittel(m.wahl)));
console.log("Gleicher Fragetext in der Runde:", m.doppelFrage, "mal insgesamt");
console.log("Meiste Karten je Thema:         ", z1(mittel(m.themaMax)), "im Schnitt, höchstens", Math.max(...m.themaMax));
console.log("Karten aus derselben früheren Runde: höchstens", Math.max(...m.gruppeMax), "| Paare je Runde im Schnitt:", z1(mittel(m.gruppePaare)));
console.log("Karten aus den letzten 2 Runden:", z1(mittel(m.direkt)), "im Schnitt, höchstens", Math.max(...m.direkt));
if (LESEN > 0) {
  console.log("\nLesetest – die letzten", Math.min(LESEN, protokoll.length), "Runden als Fragenliste:");
  protokoll.slice(-LESEN).forEach((p, i) => console.log("Runde " + (gespielt - Math.min(LESEN, protokoll.length) + i + 1) + ":\n" + p.join("\n")));
}
