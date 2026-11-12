// Snack: Grundkarten zum Thema „Fehlermeldungen“ / core cards for this topic.
// Card format: see the header of eigene-karten.js. A text is a plain string or a pair { de: "…", en: "…" }.
(window.SNACK_KARTEN = window.SNACK_KARTEN || []).push(
  {
    id: "err-eaddrinuse", thema: "fehler", typ: "fehler",
    code: "Error: listen EADDRINUSE: address already in use :::3000",
    frage: "Was ist los?",
    optionen: [
      "Port 3000 ist schon belegt, vermutlich läuft der Server noch",
      "Die Internetverbindung ist weg, deshalb kann der Server nicht starten",
      "Eine Datei im Projekt ist kaputt und wird gerade von etwas anderem benutzt",
      "Der Rechner hat zu wenig Arbeitsspeicher für einen weiteren Server"
    ],
    richtig: 0,
    warum: {
      1: "Mit dem Internet hat das nichts zu tun. Alles passiert auf deinem Rechner.",
      2: "Keine Datei ist kaputt. Das Schlüsselwort ist „in use“, also „schon in Benutzung“."
    },
    erklaerung: "Auf Port 3000 wohnt schon ein Programm, oft dein alter Server in einem anderen Terminal.",
    prompt: "„Port 3000 ist belegt. Finde den alten Prozess und beende ihn, oder starte auf Port 3001.“"
  },
  {
    id: "err-not-found", thema: "fehler", typ: "fehler",
    code: "bash: npm: command not found",
    frage: "Was ist los?",
    optionen: [
      "Das Programm npm ist nicht installiert oder wird nicht gefunden",
      "Du hast dich beim Ordnernamen vertippt und bist im falschen Ordner",
      "In deinem Code steht ein Fehler, den npm nicht versteht",
      "npm ist abgestürzt und muss neu gestartet werden"
    ],
    richtig: 0,
    erklaerung: "„command not found“ heißt: Das Terminal kennt dieses Programm nicht. Entweder fehlt es, oder es liegt nicht im PATH (der Liste von Orten, an denen das Terminal sucht).",
    prompt: "„npm wird nicht gefunden. Wie installiere ich Node.js auf meinem System am besten?“"
  },
  {
    id: "err-permission", thema: "fehler", typ: "fehler",
    code: "bash: ./start.sh: Permission denied",
    frage: "Was ist los?",
    optionen: [
      "Die Datei darf nicht ausgeführt werden, es fehlen Rechte",
      "Die Datei start.sh existiert in diesem Ordner nicht",
      "Dein Passwort war falsch, deshalb wurde der Start abgelehnt",
      "Der Bildschirm ist gesperrt, deshalb darf nichts starten"
    ],
    richtig: 0,
    erklaerung: "Linux schützt Dateien mit Rechten. Bei Skripten fehlt oft das Ausführrecht (chmod +x). Einfach sudo davorzusetzen ist meistens die falsche Lösung.",
    prompt: "„Permission denied bei start.sh. Fehlt das Ausführrecht?“"
  },
  {
    id: "err-404", thema: "fehler", typ: "fehler",
    code: "GET http://localhost:5173/bilder/Logo.png 404 (Not Found)",
    frage: "Was sagt dir diese Zeile aus der Browser-Konsole?",
    optionen: [
      "Die Datei gibt es unter dieser Adresse nicht",
      "Der Server ist beim Laden des Bildes abgestürzt",
      "Das Bild ist zu groß und wurde abgelehnt",
      "Die Internetverbindung ist gerade weg"
    ],
    richtig: 0,
    erklaerung: "404 heißt „nicht gefunden“. Oft ist der Pfad falsch oder der Dateiname anders geschrieben: Linux unterscheidet Logo.png und logo.png.",
    prompt: "„Logo.png gibt 404. Prüf, ob Pfad und Groß-/Kleinschreibung stimmen.“"
  },
  {
    id: "err-500", thema: "fehler", typ: "fehler",
    code: "POST http://localhost:8000/api/save 500 (Internal Server Error)",
    frage: "Wo liegt das Problem?",
    optionen: [
      "Im Backend ist beim Speichern etwas abgestürzt",
      "Im CSS, weil der Speichern-Button falsch aussieht",
      "Im Browser, weil er die Seite nicht laden kann",
      "In der Adresse, die ist falsch geschrieben"
    ],
    richtig: 0,
    warum: { 3: "Bei einer falschen Adresse käme eher 404 („nicht gefunden“)." },
    erklaerung: "500er-Fehler liegen auf der Server-Seite. Die Details stehen im Terminal, in dem das Backend läuft, nicht im Browser.",
    prompt: "„/api/save gibt 500. Schau ins Backend-Log, was dort für ein Fehler steht.“"
  },
  {
    id: "err-module", thema: "fehler", typ: "fehler",
    code: "ModuleNotFoundError: No module named 'requests'",
    frage: "Was ist los?",
    optionen: [
      "Ein Python-Paket fehlt und muss installiert werden",
      "Python ist kaputt und muss neu installiert werden",
      "Die Datei requirements.txt fehlt im Projekt",
      "Die Firewall blockiert das Laden aus dem Internet"
    ],
    richtig: 0,
    erklaerung: "Das Python-Paket requests ist nicht installiert, oder es ist in einer anderen virtuellen Umgebung (venv) installiert.",
    prompt: "„requests fehlt. Installier es in der venv des Projekts, nicht systemweit.“"
  },
  {
    id: "err-syntax", thema: "fehler", typ: "fehler",
    code: "SyntaxError: Unexpected token '}' (app.js:42)",
    frage: "Was ist los?",
    optionen: [
      "Im Code fehlt ein Zeichen oder eins ist zu viel, z. B. eine Klammer",
      "Der Server ist überlastet und hat die Antwort mittendrin abgebrochen",
      "Die Datei app.js fehlt, deshalb findet der Browser Zeile 42 nicht",
      "Der Browser ist zu alt und kennt diese Schreibweise noch nicht"
    ],
    richtig: 0,
    erklaerung: "Ein Syntaxfehler ist wie ein Grammatikfehler: Das Programm versteht den Satz nicht. Die Zeilennummer (hier 42) steht direkt dabei.",
    prompt: "„In app.js Zeile 42 ist ein SyntaxError, bitte beheben.“"
  },
  {
    id: "err-undefined", thema: "fehler", typ: "fehler",
    code: "TypeError: Cannot read properties of undefined (reading 'name')",
    frage: "Was ist los?",
    optionen: [
      "Der Code will etwas aus einem Objekt lesen, das (noch) nicht da ist",
      "Ein Name im Code ist zu lang, JavaScript erlaubt nur kurze Namen",
      "Die Datenbank ist voll und kann keine weiteren Namen mehr annehmen oder speichern",
      "Die Datei mit den Namen heißt anders, als der Code erwartet"
    ],
    richtig: 0,
    erklaerung: "Der häufigste JavaScript-Fehler. Oft sind die Daten noch nicht geladen, oder ein Feld heißt anders als erwartet.",
    prompt: "„Wann genau tritt dieser TypeError auf, und wie fangen wir den Fall ab?“"
  },
  {
    id: "err-cors", thema: "fehler", typ: "fehler",
    code: "Access to fetch at 'https://api.beispiel.de' from origin 'http://localhost:5173' has been blocked by CORS policy",
    frage: "Was ist los?",
    optionen: [
      "Der fremde Server erlaubt deiner Seite nicht, seine Daten abzurufen",
      "Die API ist gerade offline, deshalb kommt gar keine Antwort zurück",
      "Dein API-Key ist falsch oder abgelaufen, deshalb lehnt der Server ab",
      "localhost ist im Browser gesperrt, weil die Seite kein https hat"
    ],
    richtig: 0,
    warum: { 2: "Ein falscher Key gibt meist 401. CORS ist eine Regel des Browsers, welche Seite fragen darf." },
    erklaerung: "CORS ist eine Sicherheitsregel des Browsers. Entweder erlaubt der Server deine Adresse, oder dein eigenes Backend holt die Daten stellvertretend.",
    prompt: "„CORS-Fehler beim Abruf der API. Brauchen wir einen Proxy in unserem Backend?“"
  },
  {
    id: "err-warning", thema: "fehler", typ: "bedeutung",
    frage: "Das Terminal zeigt gelbe Zeilen mit „warning“, aber die App läuft. Musst du sofort handeln?",
    optionen: [
      "Meistens nicht: Warnungen sind Hinweise, keine Fehler",
      "Ja, sonst geht der Rechner kaputt",
      "Ja, du musst alles neu installieren",
      "Warnungen heißen, dass ein Virus gefunden wurde"
    ],
    richtig: 0,
    erklaerung: "Error heißt: Etwas geht nicht. Warning heißt: Etwas könnte später Probleme machen, z. B. ein veraltetes Paket. Kein Grund zur Panik.",
    prompt: "„Die App läuft, aber npm zeigt Warnungen. Ist davon etwas wichtig?“"
  },
  {
    id: "err-stacktrace", thema: "fehler", typ: "bedeutung",
    frage: "Unter einer Fehlermeldung stehen 30 Zeilen, die mit „at …“ anfangen. Was schickst du Claude?",
    optionen: [
      "Alles, komplett kopiert",
      "Nur die erste Zeile",
      "Nur die letzte Zeile",
      "Einen Screenshot vom halben Fehler"
    ],
    richtig: 0,
    erklaerung: "Die vielen Zeilen heißen Stack Trace: der Weg, den der Fehler durch den Code genommen hat. Für Claude ist der ganze Text wertvoll.",
    tipp: "Text kopieren ist bei Fehlern besser als ein Screenshot, weil Claude jedes Zeichen genau lesen kann."
  },
  {
    id: "err-enoent", thema: "fehler", typ: "fehler",
    code: "Error: ENOENT: no such file or directory, open 'config.json'",
    frage: "Was ist los?",
    optionen: [
      "Die Datei config.json wird an dieser Stelle nicht gefunden",
      "config.json ist kaputt, weil darin ein Komma zu viel steht",
      "Dir fehlen die Rechte, um die Datei config.json zu öffnen",
      "Die Festplatte ist voll, deshalb kann config.json nicht entstehen"
    ],
    richtig: 0,
    erklaerung: "ENOENT heißt „Error, no entry“: nicht gefunden. Entweder fehlt die Datei, oder das Programm sucht im falschen Ordner, weil es von woanders aus gestartet wurde.",
    prompt: "„config.json wird nicht gefunden. In welchem Ordner sucht das Programm danach?“"
  },
  {
    id: "err-econnrefused", thema: "fehler", typ: "fehler",
    code: "Error: connect ECONNREFUSED 127.0.0.1:8000",
    frage: "Das Frontend will das Backend erreichen. Was ist los?",
    optionen: [
      "Auf Port 8000 läuft gerade nichts, vermutlich ist das Backend nicht gestartet",
      "Das Backend hat deine Anfrage abgelehnt, weil du nicht angemeldet bist",
      "Die Internetverbindung ist weg, deshalb erreicht das Frontend den Server nicht",
      "Port 8000 ist von der Firewall dauerhaft gesperrt und muss freigegeben werden"
    ],
    richtig: 0,
    warum: {
      1: "„Refused“ heißt hier: Da ist gar niemand. Bei fehlender Anmeldung käme eine Antwort mit 401.",
      2: "127.0.0.1 ist dein eigener Rechner. Dafür braucht es kein Internet."
    },
    erklaerung: "„Connection refused“: Unter dieser Adresse ist niemand zu Hause. 127.0.0.1 ist dein eigener Rechner, genau wie localhost. Also Backend starten oder prüfen, ob es auf einem anderen Port läuft.",
    prompt: "„ECONNREFUSED auf Port 8000. Läuft das Backend? Wenn nicht, starte es in einem eigenen Terminal.“"
  },
  {
    id: "err-exitcode", thema: "fehler", typ: "fehler",
    code: "Process exited with code 1",
    frage: "Am Ende einer langen Ausgabe steht diese Zeile. Was sagt sie dir?",
    optionen: [
      "Das Programm wurde mit einem Fehler beendet, die Ursache steht weiter oben",
      "Es gab genau einen Fehler, der Rest des Programms lief normal durch",
      "Alles hat geklappt, Code 1 heißt „erster Versuch erfolgreich“",
      "Das Programm läuft jetzt im Hintergrund weiter, als Nummer 1"
    ],
    richtig: 0,
    warum: { 1: "Die 1 ist kein Zähler. Jede Zahl außer 0 heißt einfach: Es ging schief.", 2: "Erfolg wäre Code 0." },
    erklaerung: "Exit-Code 0 heißt Erfolg, alles andere Fehler. Die eigentliche Fehlermeldung steht fast immer ein Stück weiter oben. Die letzte Zeile ist nur die Zusammenfassung.",
    tipp: "Scroll hoch bis zur ersten Zeile mit „Error“. Die ist meistens die wichtigste."
  },
  {
    id: "err-r-vorgehen", thema: "fehler", form: "reihenfolge",
    frage: {
      de: "Im Terminal steht ein roter Fehler. Was ist eine gute Reihenfolge?",
      en: "A red error shows up in the terminal. What is a good order?"
    },
    schritte: {
      de: [
        "Die Meldung einmal ganz lesen",
        "Den kompletten Text kopieren",
        "An Claude schicken, dazu: was du gerade gemacht hast",
        "Claudes Lösung ausprobieren und testen"
      ],
      en: [
        "Read the whole message once",
        "Copy the complete text",
        "Send it to Claude, plus what you just did",
        "Try Claude's fix and test it"
      ]
    },
    erklaerung: {
      de: "Erst lesen, dann komplett weitergeben. Oft steht die Ursache schon in der Meldung, und Claude braucht den genauen Text.",
      en: "Read first, then pass it on in full. The cause is often in the message, and Claude needs the exact text."
    }
  },
  {
    id: "err-z-tippfehler", thema: "fehler", form: "zeile",
    code: {
      de: "let punkte = 0;\npunkte = punkte + 10;\nconsole.log(pukte);",
      en: "let points = 0;\npoints = points + 10;\nconsole.log(pints);"
    },
    codeLabel: "Code",
    frage: {
      de: "Die Konsole meldet `ReferenceError: pukte is not defined`. Welche Zeile ist schuld?",
      en: "The console says `ReferenceError: pints is not defined`. Which line is to blame?"
    },
    zeile: 2,
    erklaerung: {
      de: "„is not defined“ heißt: Diesen Namen kennt das Programm nicht. Fast immer ist es ein Tippfehler, hier fehlt ein Buchstabe.",
      en: "“is not defined” means the program does not know this name. It is almost always a typo, here a letter is missing."
    },
    prompt: {
      de: "„ReferenceError: pukte is not defined. Such nach Tippfehlern in den Variablennamen.“",
      en: "“ReferenceError: pints is not defined. Look for typos in the variable names.”"
    }
  }
);
