// Richtet das Snack-Quiz in einem Ordner ein oder bringt es dort auf den neuesten Stand.
// Sets up the Snack quiz in a folder, or updates it there.
// Aufruf / usage:  node scripts/einrichten.js <zielordner>
//
// Kopiert die App und die Grundkarten. eigene-karten.js und begriffe.js werden nur angelegt, wenn sie fehlen,
// und danach nie wieder angefasst. Der Lernstand liegt im Browser und bleibt ebenfalls unberührt.
const fs = require("fs"), path = require("path");
const quelle = path.resolve(__dirname, "..");
if (!process.argv[2]) { console.error("Aufruf / usage: node scripts/einrichten.js <zielordner>"); process.exit(1); }
const ziel = path.resolve(process.argv[2]);
if (ziel === quelle) { console.error("Ziel und Quelle sind derselbe Ordner. / Target and source are the same folder."); process.exit(1); }

const APP = ["index.html", "VERSION", "js", "karten", "scripts"];        // gehört Snack, wird überschrieben
const ORDNER = ["js", "karten", "scripts"];
const EIGENE = ["eigene-karten.js", "begriffe.js"];                      // gehört dem Nutzer, wird nie überschrieben
const version = d => { try { return fs.readFileSync(path.join(d, "VERSION"), "utf8").trim(); } catch (e) { return null; } };
const gibt = n => fs.existsSync(path.join(ziel, n));

// Nie über etwas Fremdes installieren: Liegt im Ziel schon eine index.html, aber keine VERSION, ist es kein Snack-Quiz.
const vorher = version(ziel);
if (!vorher && gibt("index.html")) {
  console.error("Abbruch: In " + ziel + " liegt schon eine index.html, die nicht von Snack stammt. Bitte einen anderen Ordner wählen.");
  console.error("Stopped: " + ziel + " already holds an index.html that is not from Snack. Please choose another folder.");
  process.exit(2);
}

fs.mkdirSync(ziel, { recursive: true });
// Dateien, die es in der neuen Version nicht mehr gibt, wandern nach _alt/ statt gelöscht zu werden.
const veraltet = [];
ORDNER.forEach(o => {
  if (!gibt(o)) return;
  fs.readdirSync(path.join(ziel, o)).forEach(n => {
    if (fs.existsSync(path.join(quelle, o, n))) return;
    fs.mkdirSync(path.join(ziel, "_alt", o), { recursive: true });
    fs.renameSync(path.join(ziel, o, n), path.join(ziel, "_alt", o, n));
    veraltet.push(o + "/" + n);
  });
});
APP.forEach(n => fs.cpSync(path.join(quelle, n), path.join(ziel, n), { recursive: true, force: true }));
const neu = [];
EIGENE.forEach(n => { if (!gibt(n)) { fs.copyFileSync(path.join(quelle, n), path.join(ziel, n)); neu.push(n); } });
// Übliche Rechte setzen (Ordner 755, Dateien 644), egal wie die Quelle sie hatte. Wo das nicht geht, einfach weiter.
const rechte = p => {
  try {
    const st = fs.statSync(p);
    fs.chmodSync(p, st.isDirectory() ? 0o755 : 0o644);
    if (st.isDirectory()) fs.readdirSync(p).forEach(n => rechte(path.join(p, n)));
  } catch (e) { /* z. B. auf Laufwerken ohne Rechte */ }
};
APP.concat(neu).forEach(n => rechte(path.join(ziel, n)));

console.log(vorher ? "Aktualisiert (updated): " + vorher + " → " + version(ziel) : "Eingerichtet (installed): Version " + version(ziel));
console.log("Ordner (folder): " + ziel);
console.log(neu.length ? "Neu angelegt (created): " + neu.join(", ") : "Eigene Karten und Begriffe: unverändert (own cards and terms: untouched)");
if (veraltet.length) console.log("Nach _alt/ verschoben (moved to _alt/): " + veraltet.join(", "));
console.log("Öffnen (open): " + path.join(ziel, "index.html"));
