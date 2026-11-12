// Richtet das Snack-Quiz in einem Ordner ein oder bringt es dort auf den neuesten Stand.
// Aufruf:  node scripts/einrichten.js <zielordner>
// Kopiert die App und die Grundkarten. eigene-karten.js und begriffe.js werden nur angelegt, wenn sie fehlen,
// und danach nie wieder angefasst. Der Lernstand liegt im Browser und bleibt ebenfalls unberührt.
const fs = require("fs"), path = require("path");
const quelle = path.resolve(__dirname, "..");
if (!process.argv[2]) { console.error("Aufruf: node scripts/einrichten.js <zielordner>"); process.exit(1); }
const ziel = path.resolve(process.argv[2]);
if (ziel === quelle) { console.error("Ziel und Quelle sind derselbe Ordner."); process.exit(1); }

const APP = ["index.html", "VERSION", "js", "karten", "scripts"];        // gehört Snack, wird überschrieben
const EIGENE = ["eigene-karten.js", "begriffe.js"];                      // gehört dem Nutzer, wird nie überschrieben
const version = d => { try { return fs.readFileSync(path.join(d, "VERSION"), "utf8").trim(); } catch (e) { return null; } };

const vorher = version(ziel);
fs.mkdirSync(ziel, { recursive: true });
APP.forEach(n => fs.cpSync(path.join(quelle, n), path.join(ziel, n), { recursive: true, force: true }));
const neu = [];
EIGENE.forEach(n => { if (!fs.existsSync(path.join(ziel, n))) { fs.copyFileSync(path.join(quelle, n), path.join(ziel, n)); neu.push(n); } });
// Übliche Rechte setzen (Ordner 755, Dateien 644), egal wie die Quelle sie hatte. Wo das nicht geht, einfach weiter.
const rechte = p => {
  try {
    const st = fs.statSync(p);
    fs.chmodSync(p, st.isDirectory() ? 0o755 : 0o644);
    if (st.isDirectory()) fs.readdirSync(p).forEach(n => rechte(path.join(p, n)));
  } catch (e) { /* z. B. auf Laufwerken ohne Rechte */ }
};
APP.concat(neu).forEach(n => rechte(path.join(ziel, n)));

console.log(vorher ? "Aktualisiert: " + vorher + " → " + version(ziel) : "Eingerichtet: Version " + version(ziel));
console.log("Ordner: " + ziel);
console.log(neu.length ? "Neu angelegt: " + neu.join(", ") : "Eigene Karten und Begriffe: unverändert");
console.log("Öffnen: " + path.join(ziel, "index.html"));
