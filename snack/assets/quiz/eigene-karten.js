// Snack: your own cards / deine eigenen Karten (topic "Aus deinen Projekten").
// /snack writes cards about your projects into this file. A Snack update never overwrites it.
//
// Card format (field names are German):
//   id          unique name, e.g. "meinprojekt-socket"
//   thema       "projekte" for own cards
//               (core topics: gui | terminal | dateien | git | web | code | fehler | sicherheit | prompten | claude)
//   projekt     (optional) project name, shown as a label on the card
//   form        how the card is answered, see below. Default: "wahl"
//   frage       the question. `Backticks` are shown as code
//   code        (optional) command, output or code. \n = new line
//   codeLabel   (optional) heading above the code. Without it: "Befehl" or "Ausgabe", chosen automatically
//   erklaerung  1 to 2 sentences, shown after answering
//   prompt      (optional) example prompt. In „…“ or “…” = real sentence with a copy button, otherwise shown as a formula
//   tipp        (optional) something to try out
//   os          (optional) show only on these systems, e.g. ["linux"] or ["linux", "mac"]
//
// Fields per form:
//   "wahl"         typ: benennen | upgrade | erlauben | fehler | bedeutung
//                  optionen: 2 to 4 answers, richtig: index of the best one (from 0),
//                  auchOk: [indexes that also count] (optional), warum: { index: "why this one fits or not" } (optional)
//                  typ "erlauben": no optionen (Allow / Ask first / Deny are added), needs code. richtig: 0 allow, 1 ask, 2 deny
//                  typ "benennen": needs mockup (name of a mini UI in js/formen.js), hl optional
//                  typ "upgrade": exactly 3 prompts to choose from
//   "luecke"       code containing ___ as the gap, optionen: short pieces to fill in, richtig: index
//   "mehrfach"     optionen: 3 to 5 answers, richtige: [indexes of ALL correct ones]
//   "reihenfolge"  schritte: 3 to 5 steps in the CORRECT order (the quiz shuffles them)
//   "zeile"        code with several lines, zeile: index of the faulty line (0 = first line)
//   "paare"        paare: [["left", "right"], …] with 3 to 5 pairs, usually 4
//
// Every text is either a plain string or a pair { de: "…", en: "…" }.
// optionen and schritte may also be { de: [...], en: [...] }. Own cards only need your own language.
// Wrong answers should be about as long and as believable as the right one.
window.SNACK_EIGENE = [
];
