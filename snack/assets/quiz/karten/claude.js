// Snack: Grundkarten zum Thema „Claude Code bedienen“ / core cards for this topic.
// Card format: see the header of eigene-karten.js. A text is a plain string or a pair { de: "…", en: "…" }.
(window.SNACK_KARTEN = window.SNACK_KARTEN || []).push(
  {
    id: "cc-plan", thema: "claude", typ: "bedeutung",
    frage: "Was macht der Plan-Modus in Claude Code?",
    optionen: [
      "Claude liest und schreibt einen Plan, ändert aber nichts, bis du zustimmst",
      "Claude arbeitet schneller, weil es Schritte überspringt, die es für unnötig hält",
      "Claude plant Termine und Erinnerungen in deinem Kalender ein",
      "Claude darf alles ohne Nachfrage, weil der Plan vorher feststeht"
    ],
    richtig: 0,
    erklaerung: "Im Plan-Modus liest Claude nur und denkt nach. Du prüfst den Plan, und erst nach deinem OK wird gebaut. Ideal für größere Änderungen.",
    tipp: "Im Terminal wechselst du mit Umschalt + Tab zwischen den Modi, in der App über die Modus-Auswahl am Eingabefeld."
  },
  {
    id: "cc-esc", thema: "claude", typ: "bedeutung",
    frage: "Claude läuft gerade in die falsche Richtung. Wie unterbrichst du sofort?",
    optionen: [
      "Esc drücken (in der App: der Stopp-Knopf)",
      "Das Fenster schließen",
      "Strg + Alt + Entf",
      "Abwarten, bis Claude fertig ist, und dann korrigieren"
    ],
    richtig: 0,
    warum: {
      1: "Dann ist auch das laufende Gespräch unterbrochen, und du musst neu einsteigen.",
      2: "Das ist für hängende Systeme gedacht, viel zu grob.",
      3: "Je länger Claude in die falsche Richtung läuft, desto mehr musst du später rückgängig machen."
    },
    erklaerung: "Esc stoppt Claude, ohne das Gespräch zu verlieren. Danach kannst du sofort korrigieren.",
    prompt: "„Stopp, falsche Richtung. Ich meinte nur den Button, nicht die ganze Seite.“"
  },
  {
    id: "cc-clear", thema: "claude", typ: "bedeutung",
    frage: "Du bist mit einer Aufgabe fertig und fängst etwas völlig anderes an. Was ist sinnvoll?",
    optionen: [
      "Eine neue Session oder `/clear`, damit der alte Verlauf nicht stört",
      "Im selben Gespräch weitermachen, damit Claude alles Bisherige weiß",
      "Claude Code neu installieren, damit es wieder frisch ist",
      "`/compact`, damit Claude das alte Thema kurz zusammenfasst"
    ],
    richtig: 0,
    warum: {
      1: "Geht, aber der alte Verlauf füllt den Kontext und kann Claude auf falsche Fährten bringen.",
      3: "/compact behält das alte Thema als Zusammenfassung. Für etwas völlig Neues ist ein leerer Start besser."
    },
    erklaerung: "/clear leert das Gespräch, CLAUDE.md und Memory bleiben. Ein frischer Start ohne alten Ballast bringt oft bessere Ergebnisse."
  },
  {
    id: "cc-compact", thema: "claude", typ: "bedeutung",
    frage: "Was macht der Befehl `/compact`?",
    optionen: [
      "Er fasst das bisherige Gespräch zusammen, damit wieder Platz im Kontext ist",
      "Er packt deine Projektdateien in eine Zip-Datei, damit sie weniger Platz brauchen",
      "Er löscht das Gespräch komplett, nur CLAUDE.md und Memory bleiben",
      "Er macht die Ansicht kompakter, damit mehr Text auf den Bildschirm passt"
    ],
    richtig: 0,
    warum: { 2: "Komplett leeren macht /clear." },
    erklaerung: "Bei langen Sessions wird der Platz knapp. /compact fasst zusammen, und es geht weiter. Du kannst dazuschreiben, was in der Zusammenfassung unbedingt drinbleiben soll.",
    prompt: "„/compact Behalte die Entscheidungen zum Kartenformat und die offenen Punkte.“"
  },
  {
    id: "cc-kontext", thema: "claude", typ: "bedeutung",
    frage: "Was ist das Kontextfenster?",
    optionen: [
      "Claudes Arbeitsgedächtnis für diese Session: alles, was es gerade „im Kopf“ hat",
      "Das Eingabefeld, in das du deine Nachrichten an Claude tippst",
      "Claudes Notizen über dich, die über alle Sessions hinweg erhalten bleiben",
      "Die Leiste am Rand, die zeigt, welche Dateien im Projekt geöffnet sind"
    ],
    richtig: 0,
    warum: { 2: "Das ist die Memory. Das Kontextfenster gilt nur für die aktuelle Session." },
    erklaerung: "Gespräch, gelesene Dateien und Befehlsausgaben füllen das Kontextfenster. Ist es voll, wird zusammengefasst, und Details können verloren gehen. Wichtiges gehört deshalb in Dateien wie todo.md.",
    tipp: "Lange Logs und riesige Dateien füllen den Kontext schnell. Lieber gezielt nach der wichtigen Stelle fragen."
  },
  {
    id: "cc-rewind", thema: "claude", typ: "bedeutung",
    frage: "Claude hat gerade etwas umgebaut, und jetzt ist es schlechter. Gibt es einen Rückgängig-Knopf?",
    optionen: [
      "Ja: Zurückspulen (`/rewind` oder zweimal Esc) setzt Gespräch und Dateien zurück",
      "Nein, Claude Code kann nichts rückgängig machen, nur Git kann das",
      "Ja, Strg + Z im Terminal macht Claudes letzte Änderung rückgängig",
      "Ja, aber nur, wenn du vor der Änderung einen Screenshot gemacht hast"
    ],
    richtig: 0,
    warum: {
      1: "Git hilft auch, aber Claude Code hat eigene Prüfpunkte zum Zurückspulen.",
      2: "Strg + Z pausiert im Terminal ein Programm. Rückgängig macht es nichts."
    },
    erklaerung: "Claude Code setzt bei jeder Nachricht einen Prüfpunkt (Checkpoint). Achtung: Was über Terminal-Befehle passiert ist, z. B. gelöschte Dateien, holt es nicht zurück. Git bleibt dein Sicherheitsnetz."
  },
  {
    id: "cc-at-datei", thema: "claude", typ: "bedeutung",
    frage: "Wofür ist das @ im Prompt, z. B. `@quiz-app/karten.js`?",
    optionen: [
      "Es hängt diese Datei direkt an, damit Claude sie sofort kennt",
      "Es schickt die Datei per E-Mail an dich, damit du sie unterwegs hast",
      "Es markiert die Datei als wichtig, damit Claude sie nicht verändert",
      "Es löscht die Datei und legt sie danach frisch neu an"
    ],
    richtig: 0,
    warum: { 2: "Schützen tut das @ nichts. Es zeigt Claude nur, welche Datei du meinst." },
    erklaerung: "Tipp @ und ein paar Buchstaben, dann schlägt Claude Code passende Dateien vor. So muss Claude nicht erst suchen, welche Datei du meinst.",
    prompt: "„In @quiz-app/karten.js fehlt bei einer Karte die Erklärung. Finde sie.“"
  },
  {
    id: "cc-claude-md-orte", thema: "claude", typ: "bedeutung",
    frage: "Es gibt eine CLAUDE.md in `~/.claude/` und eine im Projektordner. Was ist der Unterschied?",
    optionen: [
      "Die in ~/.claude gilt für alle Projekte, die im Projektordner nur für dieses Projekt",
      "Die im Projektordner ist eine automatische Sicherheitskopie der globalen Datei",
      "Die globale ist für Linux-Befehle, die im Projekt für Claudes Verhalten",
      "Claude liest nur die im Projektordner, die globale ist bloß eine Vorlage"
    ],
    richtig: 0,
    erklaerung: "Allgemeine Regeln wie „erklär mir Fachbegriffe“ kommen in die globale Datei. Projektwissen wie „starten mit npm run dev“ kommt in die Projekt-CLAUDE.md.",
    prompt: "„Schreib in die Projekt-CLAUDE.md, wie man das Projekt startet und testet.“"
  },
  {
    id: "cc-init", thema: "claude", typ: "bedeutung",
    frage: "Was macht `/init` in einem Projekt?",
    optionen: [
      "Claude schaut sich den Code an und legt eine CLAUDE.md mit dem Wichtigsten an",
      "Es installiert Claude Code neu und setzt alle Einstellungen zurück",
      "Es löscht den Projektordner und legt ein leeres Projekt an",
      "Es macht aus dem Ordner ein Git-Repo, damit Versionen gespeichert werden"
    ],
    richtig: 0,
    warum: { 3: "Ein Git-Repo erstellt git init. Ähnlicher Name, andere Sache." },
    erklaerung: "Praktisch bei Projekten, die es schon gibt. Die Datei kannst du danach selbst ergänzen."
  },
  {
    id: "cc-mcp", thema: "claude", typ: "bedeutung",
    frage: "Was ist MCP?",
    optionen: [
      "Ein Standard, über den Claude an Werkzeuge wie Browser oder Kalender angeschlossen wird",
      "Eine eigene Programmiersprache, in der Claude Code geschrieben ist und Erweiterungen gebaut werden",
      "Das Format, in dem Claude Code deine Gespräche und Einstellungen auf der Festplatte speichert",
      "Ein Sicherheitsmodus, der verhindert, dass Claude ohne Erlaubnis ins Internet geht"
    ],
    richtig: 0,
    erklaerung: "MCP (Model Context Protocol) ist wie eine Steckdosen-Norm: Jedes Werkzeug mit passendem Stecker lässt sich an Claude anschließen. Die Browser-Steuerung in deiner Claude-App läuft zum Beispiel darüber."
  },
  {
    id: "cc-nicht-mehr-fragen", thema: "claude", typ: "bedeutung",
    frage: "Claude fragt, ob es `npm test` ausführen darf. Du wählst „Ja, und nicht mehr fragen“. Was passiert?",
    optionen: [
      "Dieser Befehl ist künftig ohne Nachfrage erlaubt, die Regel wird gespeichert",
      "Claude fragt ab jetzt bei gar keinem Befehl mehr nach, auch nicht bei gefährlichen",
      "Nur diesmal erlaubt, beim nächsten Mal wird wieder gefragt",
      "Der Befehl wird gesperrt"
    ],
    richtig: 0,
    erklaerung: "Die Erlaubnis gilt für diesen einen Befehl, meist nur im aktuellen Projekt, und landet in einer settings-Datei. Gut für harmlose Befehle wie Tests oder git status."
  },
  {
    id: "cc-upgrade-selbst-testen", thema: "claude", typ: "upgrade",
    frage: "Claude soll einen Fehler beheben. Welcher Prompt spart dir am meisten Hin und Her?",
    optionen: [
      "Fix den Fehler.",
      "Fix den Fehler beim Speichern. Starte danach die App, probier das Speichern selbst aus und melde dich erst, wenn es klappt.",
      "Fix den Fehler, und zwar diesmal richtig und gründlich! Das ist schon das dritte Mal, ich will das vom Tisch haben."
    ],
    richtig: 1,
    warum: {
      0: "Dann bist du der Tester und meldest jeden neuen Fehler selbst zurück.",
      2: "Der Nachdruck hilft nicht. Ein Prüfauftrag schon."
    },
    erklaerung: "Claude kann oft selbst testen: Befehle ausführen, Tests starten, im Browser nachsehen. Sag ihm, woran es merkt, dass es wirklich klappt.",
    prompt: "Formel: „[Aufgabe]. Prüf danach selbst mit [Test] und melde dich erst, wenn es klappt.“"
  },
  {
    id: "cc-subagent", thema: "claude", typ: "bedeutung",
    frage: "Wann lohnt sich ein Subagent in Claude Code?",
    optionen: [
      "Wenn eine Teilaufgabe viel liest oder sucht und nur das Ergebnis ins Gespräch soll",
      "Wenn die Aufgabe so schwer ist, dass Claude sie allein sicher nicht schafft",
      "Wenn jemand anderes den fertigen Code prüfen und freigeben soll",
      "Immer bei jeder Frage, weil er automatisch schneller und billiger ist"
    ],
    richtig: 0,
    warum: {
      1: "Schwere Aufgaben löst ein Subagent nicht besser. Er ist ein Helfer für getrennte Arbeit.",
      2: "Prüfen und freigeben bleibt bei dir. Ein Subagent liefert nur ein Ergebnis zurück.",
      3: "Nicht immer: Jeder Subagent muss sich erst einlesen, bei kleinen Fragen ist er ein Umweg."
    },
    erklaerung: "Ein Subagent arbeitet in einem eigenen Gedächtnis. Alles, was er liest, bleibt dort, nur die Zusammenfassung kommt zurück. Dein Kontextfenster bleibt frei, ideal zum Durchsuchen großer Projekte.",
    prompt: "„Lass einen Subagent alle Stellen suchen, die die Datenbank ansprechen, und gib mir nur die Zusammenfassung.“"
  },
  {
    id: "cc-md-kurz", thema: "claude", typ: "bedeutung",
    frage: "Was gehört in eine gute CLAUDE.md?",
    optionen: [
      "Kurze, dauerhafte Regeln: Startbefehle, Stil, was Claude nie tun soll",
      "Das komplette Gespräch der letzten Session, damit nichts verloren geht",
      "Der gesamte Quellcode, damit Claude ihn nicht mehr einlesen muss",
      "Deine Passwörter und Keys, damit Claude sich selbst anmelden kann"
    ],
    richtig: 0,
    warum: {
      1: "Ein Gespräch ist zu lang und veraltet schnell. Dafür gibt es Zusammenfassungen oder `/compact`.",
      2: "Den Code liest Claude selbst. Eine zu lange CLAUDE.md kostet bei jeder Session Platz.",
      3: "Keys gehören nie in eine Datei, die im Projekt liegt und in Git landen kann."
    },
    erklaerung: "Die CLAUDE.md wird zu Beginn jeder Session gelesen und belegt Platz. Darum kurz halten: nur, was Claude immer wissen muss. Alles Geheime gehört in die .env.",
    prompt: "„Schreib in die CLAUDE.md, wie man das Projekt startet und testet. Halte es auf höchstens zehn Zeilen.“"
  },
  {
    id: "cc-r-plan", thema: "claude", form: "reihenfolge",
    frage: {
      de: "Eine größere Änderung steht an. Was ist eine gute Reihenfolge mit Claude Code?",
      en: "A bigger change is coming up. What is a good order with Claude Code?"
    },
    schritte: {
      de: [
        "Ziel beschreiben",
        "Plan zeigen lassen",
        "Plan prüfen und freigeben",
        "Umsetzen lassen",
        "Ergebnis selbst ausprobieren"
      ],
      en: [
        "Describe the goal",
        "Ask for a plan",
        "Review and approve the plan",
        "Let Claude build it",
        "Try the result yourself"
      ]
    },
    erklaerung: {
      de: "Im Plan-Modus ändert Claude nichts, bis du den Plan freigibst. Fehler im Ansatz fallen so auf, bevor Code entsteht.",
      en: "In plan mode Claude changes nothing until you approve the plan. Flaws in the approach show up before any code exists."
    },
    prompt: {
      de: "„Geh in den Plan-Modus und zeig mir erst, was du ändern willst.“",
      en: "“Switch to plan mode and show me first what you want to change.”"
    }
  }
);
