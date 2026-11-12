// Snack: Grundkarten zum Thema „Fehlermeldungen“ / core cards for this topic.
// Card format: see the header of eigene-karten.js. A text is a plain string or a pair { de: "…", en: "…" }.
(window.SNACK_KARTEN = window.SNACK_KARTEN || []).push(
  {
    id: "err-eaddrinuse", thema: "fehler", typ: "fehler",
    code: "Error: listen EADDRINUSE: address already in use :::3000",
    frage: { de: "Was ist los?", en: "What is going on?" },
    optionen: {
      de: [
        "Port 3000 ist schon belegt, vermutlich läuft der Server noch",
        "Die Internetverbindung ist weg, deshalb kann der Server nicht starten",
        "Eine Datei im Projekt ist kaputt und wird gerade von etwas anderem benutzt",
        "Der Rechner hat zu wenig Arbeitsspeicher für einen weiteren Server"
      ],
      en: [
        "Port 3000 is already taken, the server is probably still running",
        "The internet connection is down, so the server cannot start",
        "A file in the project is broken and is being used by something else right now",
        "The computer has too little memory for another server"
      ]
    },
    richtig: 0,
    warum: {
      1: {
        de: "Mit dem Internet hat das nichts zu tun. Alles passiert auf deinem Rechner.",
        en: "This has nothing to do with the internet. Everything happens on your computer."
      },
      2: {
        de: "Keine Datei ist kaputt. Das Schlüsselwort ist „in use“, also „schon in Benutzung“.",
        en: "No file is broken. The key words are “in use”: the address, here the port, is already taken."
      }
    },
    erklaerung: {
      de: "Auf Port 3000 wohnt schon ein Programm, oft dein alter Server in einem anderen Terminal.",
      en: "A program already lives on port 3000, often your old server in another terminal."
    },
    prompt: {
      de: "„Port 3000 ist belegt. Finde den alten Prozess und beende ihn, oder starte auf Port 3001.“",
      en: "“Port 3000 is taken. Find the old process and stop it, or start on port 3001.”"
    }
  },
  {
    id: "err-not-found", thema: "fehler", typ: "fehler",
    code: "bash: npm: command not found",
    frage: { de: "Was ist los?", en: "What is going on?" },
    optionen: {
      de: [
        "Das Programm npm ist nicht installiert oder wird nicht gefunden",
        "Du hast dich beim Ordnernamen vertippt und bist im falschen Ordner",
        "In deinem Code steht ein Fehler, den npm nicht versteht",
        "npm ist abgestürzt und muss neu gestartet werden"
      ],
      en: [
        "The program npm is not installed or cannot be found",
        "You mistyped the folder name and are in the wrong folder",
        "There is an error in your code that npm does not understand",
        "npm has crashed and needs to be restarted"
      ]
    },
    richtig: 0,
    erklaerung: {
      de: "„command not found“ heißt: Das Terminal kennt dieses Programm nicht. Entweder fehlt es, oder es liegt nicht im PATH (der Liste von Orten, an denen das Terminal sucht).",
      en: "“command not found” means: the terminal does not know this program. Either it is missing, or it is not in the PATH (the list of places where the terminal looks)."
    },
    prompt: {
      de: "„npm wird nicht gefunden. Wie installiere ich Node.js auf meinem System am besten?“",
      en: "“npm is not found. What is the best way to install Node.js on my system?”"
    }
  },
  {
    id: "err-permission", thema: "fehler", typ: "fehler",
    code: "bash: ./start.sh: Permission denied",
    frage: { de: "Was ist los?", en: "What is going on?" },
    optionen: {
      de: [
        "Die Datei darf nicht ausgeführt werden, es fehlen Rechte",
        "Die Datei start.sh existiert in diesem Ordner nicht",
        "Dein Passwort war falsch, deshalb wurde der Start abgelehnt",
        "Der Bildschirm ist gesperrt, deshalb darf nichts starten"
      ],
      en: [
        "The file may not be run, permissions are missing",
        "The file start.sh does not exist in this folder",
        "Your password was wrong, so the start was refused",
        "The screen is locked, so nothing is allowed to start"
      ]
    },
    richtig: 0,
    erklaerung: {
      de: "Linux schützt Dateien mit Rechten. Bei Skripten fehlt oft das Ausführrecht (chmod +x). Einfach sudo davorzusetzen ist meistens die falsche Lösung.",
      en: "Linux protects files with permissions. Scripts often lack the execute permission (chmod +x). Just putting sudo in front is usually the wrong fix."
    },
    prompt: {
      de: "„Permission denied bei start.sh. Fehlt das Ausführrecht?“",
      en: "“Permission denied for start.sh. Is the execute permission missing?”"
    }
  },
  {
    id: "err-404", thema: "fehler", typ: "fehler",
    code: {
      de: "GET http://localhost:5173/bilder/Logo.png 404 (Not Found)",
      en: "GET http://localhost:5173/images/Logo.png 404 (Not Found)"
    },
    frage: {
      de: "Was sagt dir diese Zeile aus der Browser-Konsole?",
      en: "What does this line from the browser console tell you?"
    },
    optionen: {
      de: [
        "Die Datei gibt es unter dieser Adresse nicht",
        "Der Server ist beim Laden des Bildes abgestürzt",
        "Das Bild ist zu groß und wurde abgelehnt",
        "Die Internetverbindung ist gerade weg"
      ],
      en: [
        "The file does not exist at this address",
        "The server crashed while loading the image",
        "The image is too large and was rejected",
        "The internet connection is down right now"
      ]
    },
    richtig: 0,
    erklaerung: {
      de: "404 heißt „nicht gefunden“. Oft ist der Pfad falsch oder der Dateiname anders geschrieben: Linux unterscheidet Logo.png und logo.png.",
      en: "404 means “not found”. Often the path is wrong or the file name is spelled differently: Linux treats Logo.png and logo.png as two different files."
    },
    prompt: {
      de: "„Logo.png gibt 404. Prüf, ob Pfad und Groß-/Kleinschreibung stimmen.“",
      en: "“Logo.png returns 404. Check whether the path and the upper/lower case are right.”"
    }
  },
  {
    id: "err-500", thema: "fehler", typ: "fehler",
    code: "POST http://localhost:8000/api/save 500 (Internal Server Error)",
    frage: { de: "Wo liegt das Problem?", en: "Where is the problem?" },
    optionen: {
      de: [
        "Im Backend ist beim Speichern etwas abgestürzt",
        "Im CSS, weil der Speichern-Button falsch aussieht",
        "Im Browser, weil er die Seite nicht laden kann",
        "In der Adresse, die ist falsch geschrieben"
      ],
      en: [
        "In the backend, something crashed while saving",
        "In the CSS, because the save button looks wrong",
        "In the browser, because it cannot load the page",
        "In the address, which is spelled wrong"
      ]
    },
    richtig: 0,
    warum: {
      3: {
        de: "Bei einer falschen Adresse käme eher 404 („nicht gefunden“).",
        en: "A wrong address would more likely give 404 (“not found”)."
      }
    },
    erklaerung: {
      de: "500er-Fehler liegen auf der Server-Seite. Die Details stehen im Terminal, in dem das Backend läuft, nicht im Browser.",
      en: "500 errors are on the server side. The details are in the terminal where the backend runs, not in the browser."
    },
    prompt: {
      de: "„/api/save gibt 500. Schau ins Backend-Log, was dort für ein Fehler steht.“",
      en: "“/api/save returns 500. Look in the backend log to see what error is there.”"
    }
  },
  {
    id: "err-module", thema: "fehler", typ: "fehler",
    code: "ModuleNotFoundError: No module named 'requests'",
    frage: { de: "Was ist los?", en: "What is going on?" },
    optionen: {
      de: [
        "Ein Python-Paket fehlt und muss installiert werden",
        "Python ist kaputt und muss neu installiert werden",
        "Die Datei requirements.txt fehlt im Projekt",
        "Die Firewall blockiert das Laden aus dem Internet"
      ],
      en: [
        "A Python package is missing and must be installed",
        "Python is broken and needs to be reinstalled",
        "The file requirements.txt is missing from the project",
        "The firewall is blocking downloads from the internet"
      ]
    },
    richtig: 0,
    erklaerung: {
      de: "Das Python-Paket requests ist nicht installiert, oder es ist in einer anderen virtuellen Umgebung (venv) installiert.",
      en: "The Python package requests is not installed, or it is installed in a different virtual environment (venv)."
    },
    prompt: {
      de: "„requests fehlt. Installier es in der venv des Projekts, nicht systemweit.“",
      en: "“requests is missing. Install it in the project's venv, not system-wide.”"
    }
  },
  {
    id: "err-syntax", thema: "fehler", typ: "fehler",
    code: "SyntaxError: Unexpected token '}' (app.js:42)",
    frage: { de: "Was ist los?", en: "What is going on?" },
    optionen: {
      de: [
        "Im Code fehlt ein Zeichen oder eins ist zu viel, z. B. eine Klammer",
        "Der Server ist überlastet und hat die Antwort mittendrin abgebrochen",
        "Die Datei app.js fehlt, deshalb findet der Browser Zeile 42 nicht",
        "Der Browser ist zu alt und kennt diese Schreibweise noch nicht"
      ],
      en: [
        "The code has a missing or extra character, such as a bracket",
        "The server is overloaded and cut off the response midway",
        "The file app.js is missing, so the browser cannot find line 42",
        "The browser is too old and does not know this syntax yet"
      ]
    },
    richtig: 0,
    erklaerung: {
      de: "Ein Syntaxfehler ist wie ein Grammatikfehler: Das Programm versteht den Satz nicht. Die Zeilennummer (hier 42) steht direkt dabei.",
      en: "A syntax error is like a grammar mistake: the program does not understand the sentence. The line number (here 42) is right there."
    },
    prompt: {
      de: "„In app.js Zeile 42 ist ein SyntaxError, bitte beheben.“",
      en: "“There is a SyntaxError in app.js line 42, please fix it.”"
    }
  },
  {
    id: "err-undefined", thema: "fehler", typ: "fehler",
    code: "TypeError: Cannot read properties of undefined (reading 'name')",
    frage: { de: "Was ist los?", en: "What is going on?" },
    optionen: {
      de: [
        "Der Code will etwas aus einem Objekt lesen, das (noch) nicht da ist",
        "Ein Name im Code ist zu lang, JavaScript erlaubt nur kurze Namen",
        "Die Datenbank ist voll und kann keine weiteren Namen mehr annehmen oder speichern",
        "Die Datei mit den Namen heißt anders, als der Code erwartet"
      ],
      en: [
        "The code tries to read from an object that is not there (yet)",
        "A name in the code is too long, JavaScript only allows short names",
        "The database is full and cannot accept or store any more names",
        "The file with the names has a different name than the code expects"
      ]
    },
    richtig: 0,
    erklaerung: {
      de: "Einer der häufigsten JavaScript-Fehler. Oft sind die Daten noch nicht geladen, oder ein Feld heißt anders als erwartet.",
      en: "One of the most common JavaScript errors. Often the data has not loaded yet, or a field has a different name than expected."
    },
    prompt: {
      de: "„Wann genau tritt dieser TypeError auf, und wie fangen wir den Fall ab?“",
      en: "“When exactly does this TypeError occur, and how do we handle that case?”"
    }
  },
  {
    id: "err-cors", thema: "fehler", typ: "fehler",
    code: {
      de: "Access to fetch at 'https://api.beispiel.de' from origin 'http://localhost:5173' has been blocked by CORS policy",
      en: "Access to fetch at 'https://api.example.com' from origin 'http://localhost:5173' has been blocked by CORS policy"
    },
    frage: { de: "Was ist los?", en: "What is going on?" },
    optionen: {
      de: [
        "Der fremde Server erlaubt deiner Seite nicht, seine Daten abzurufen",
        "Die API ist gerade offline, deshalb kommt gar keine Antwort zurück",
        "Dein API-Key ist falsch oder abgelaufen, deshalb lehnt der Server ab",
        "localhost ist im Browser gesperrt, weil die Seite kein https hat"
      ],
      en: [
        "The other server does not allow your page to fetch its data",
        "The API is offline right now, so no response comes back at all",
        "Your API key is wrong or expired, so the server refuses",
        "localhost is blocked in the browser because the page has no https"
      ]
    },
    richtig: 0,
    warum: {
      2: {
        de: "Ein falscher Key gibt meist 401. CORS ist eine Regel des Browsers, welche Seite fragen darf.",
        en: "A wrong key usually gives 401. CORS is a browser rule about which page may ask."
      }
    },
    erklaerung: {
      de: "CORS ist eine Sicherheitsregel des Browsers. Entweder erlaubt der Server deine Adresse, oder dein eigenes Backend holt die Daten stellvertretend.",
      en: "CORS is a security rule of the browser. Either the server allows your address, or your own backend fetches the data on your behalf."
    },
    prompt: {
      de: "„CORS-Fehler beim Abruf der API. Brauchen wir einen Proxy in unserem Backend?“",
      en: "“CORS error when calling the API. Do we need a proxy in our backend?”"
    }
  },
  {
    id: "err-warning", thema: "fehler", typ: "bedeutung",
    frage: {
      de: "Das Terminal zeigt gelbe Zeilen mit „warning“, aber die App läuft. Musst du sofort handeln?",
      en: "The terminal shows yellow lines with “warning”, but the app runs. Do you have to act right away?"
    },
    optionen: {
      de: [
        "Meistens nicht: Warnungen sind Hinweise, keine Fehler",
        "Ja, sonst geht der Rechner kaputt",
        "Ja, du musst alles neu installieren",
        "Warnungen heißen, dass ein Virus gefunden wurde"
      ],
      en: [
        "Usually not: warnings are hints, not errors",
        "Yes, otherwise your computer could get damaged",
        "Yes, you have to reinstall everything",
        "Warnings mean that a virus was found"
      ]
    },
    richtig: 0,
    erklaerung: {
      de: "Error heißt: Etwas geht nicht. Warning heißt: Etwas könnte später Probleme machen, z. B. ein veraltetes Paket. Kein Grund zur Panik.",
      en: "Error means: something does not work. Warning means: something could cause problems later, for example an outdated package. No reason to panic."
    },
    prompt: {
      de: "„Die App läuft, aber npm zeigt Warnungen. Ist davon etwas wichtig?“",
      en: "“The app runs, but npm shows warnings. Is any of it important?”"
    }
  },
  {
    id: "err-stacktrace", thema: "fehler", typ: "bedeutung",
    frage: {
      de: "Unter einer Fehlermeldung stehen 30 Zeilen, die mit „at …“ anfangen. Was schickst du Claude?",
      en: "Below an error message there are 30 lines starting with “at …”. What do you send Claude?"
    },
    optionen: {
      de: [
        "Alles, komplett kopiert",
        "Nur die erste Zeile",
        "Nur die letzte Zeile",
        "Einen Screenshot vom halben Fehler"
      ],
      en: ["Everything, copied in full", "Only the first line", "Only the last line", "A screenshot of half the error"]
    },
    richtig: 0,
    erklaerung: {
      de: "Die vielen Zeilen heißen Stack Trace: der Weg, den der Fehler durch den Code genommen hat. Für Claude ist der ganze Text wertvoll.",
      en: "All those lines are called a stack trace: the path the error took through the code. For Claude, the whole text is valuable."
    },
    tipp: {
      de: "Text kopieren ist bei Fehlern besser als ein Screenshot, weil Claude jedes Zeichen genau lesen kann.",
      en: "For errors, copying the text beats a screenshot, because Claude can read every character exactly."
    }
  },
  {
    id: "err-enoent", thema: "fehler", typ: "fehler",
    code: "Error: ENOENT: no such file or directory, open 'config.json'",
    frage: { de: "Was ist los?", en: "What is going on?" },
    optionen: {
      de: [
        "Die Datei config.json wird an dieser Stelle nicht gefunden",
        "config.json ist kaputt, weil darin ein Komma zu viel steht",
        "Dir fehlen die Rechte, um die Datei config.json zu öffnen",
        "Die Festplatte ist voll, deshalb kann config.json nicht entstehen"
      ],
      en: [
        "The file config.json cannot be found in this place",
        "config.json is broken because it has one comma too many",
        "You lack the permissions to open the file config.json",
        "The disk is full, so config.json cannot be created"
      ]
    },
    richtig: 0,
    erklaerung: {
      de: "ENOENT heißt „Error, no entry“: nicht gefunden. Entweder fehlt die Datei, oder das Programm sucht im falschen Ordner, weil es von woanders aus gestartet wurde.",
      en: "ENOENT stands for “Error, no entry”: not found. Either the file is missing, or the program is looking in the wrong folder because it was started from somewhere else."
    },
    prompt: {
      de: "„config.json wird nicht gefunden. In welchem Ordner sucht das Programm danach?“",
      en: "“config.json is not found. Which folder is the program looking in?”"
    }
  },
  {
    id: "err-econnrefused", thema: "fehler", typ: "fehler",
    code: "Error: connect ECONNREFUSED 127.0.0.1:8000",
    frage: {
      de: "Das Frontend will das Backend erreichen. Was ist los?",
      en: "The frontend wants to reach the backend. What is going on?"
    },
    optionen: {
      de: [
        "Auf Port 8000 läuft gerade nichts, vermutlich ist das Backend nicht gestartet",
        "Das Backend hat deine Anfrage abgelehnt, weil du nicht angemeldet bist",
        "Die Internetverbindung ist weg, deshalb erreicht das Frontend den Server nicht",
        "Port 8000 ist von der Firewall dauerhaft gesperrt und muss freigegeben werden"
      ],
      en: [
        "Nothing is running on port 8000, the backend probably has not been started",
        "The backend rejected your request because you are not logged in",
        "The internet connection is down, so the frontend cannot reach the server",
        "Port 8000 is permanently blocked by the firewall and must be opened first"
      ]
    },
    richtig: 0,
    warum: {
      1: {
        de: "„Refused“ heißt hier: Da ist gar niemand. Bei fehlender Anmeldung käme eine Antwort mit 401.",
        en: "“Refused” here means: nobody is there at all. If you were not logged in, you would get a response with 401."
      },
      2: {
        de: "127.0.0.1 ist dein eigener Rechner. Dafür braucht es kein Internet.",
        en: "127.0.0.1 is your own computer. That needs no internet."
      }
    },
    erklaerung: {
      de: "„Connection refused“: Unter dieser Adresse ist niemand zu Hause. 127.0.0.1 ist dein eigener Rechner, genau wie localhost. Also Backend starten oder prüfen, ob es auf einem anderen Port läuft.",
      en: "“Connection refused”: nobody is home at this address. 127.0.0.1 is your own computer, just like localhost. So start the backend, or check whether it runs on a different port."
    },
    prompt: {
      de: "„ECONNREFUSED auf Port 8000. Läuft das Backend? Wenn nicht, starte es in einem eigenen Terminal.“",
      en: "“ECONNREFUSED on port 8000. Is the backend running? If not, start it in its own terminal.”"
    }
  },
  {
    id: "err-exitcode", thema: "fehler", typ: "fehler",
    code: "Process exited with code 1",
    frage: {
      de: "Am Ende einer langen Ausgabe steht diese Zeile. Was sagt sie dir?",
      en: "This line is at the end of a long output. What does it tell you?"
    },
    optionen: {
      de: [
        "Das Programm wurde mit einem Fehler beendet, die Ursache steht weiter oben",
        "Es gab genau einen Fehler, der Rest des Programms lief normal durch",
        "Alles hat geklappt, Code 1 heißt „erster Versuch erfolgreich“",
        "Das Programm läuft jetzt im Hintergrund weiter, als Nummer 1"
      ],
      en: [
        "The program ended with an error, the cause is further up",
        "There was exactly one error, the rest of the program ran normally",
        "Everything worked, code 1 means “first attempt successful”",
        "The program now keeps running in the background, as number 1"
      ]
    },
    richtig: 0,
    warum: {
      1: {
        de: "Die 1 ist kein Zähler. Jede Zahl außer 0 heißt einfach: Es ging schief.",
        en: "The 1 is not a counter. Any number other than 0 simply means: it went wrong."
      },
      2: { de: "Erfolg wäre Code 0.", en: "Success would be code 0." }
    },
    erklaerung: {
      de: "Exit-Code 0 heißt Erfolg, alles andere Fehler. Die eigentliche Fehlermeldung steht fast immer ein Stück weiter oben. Die letzte Zeile ist nur die Zusammenfassung.",
      en: "Exit code 0 means success, anything else means an error. The actual error message is almost always a bit further up. The last line is just the summary."
    },
    tipp: {
      de: "Scroll hoch bis zur ersten Zeile mit „Error“. Die ist meistens die wichtigste.",
      en: "Scroll up to the first line with “Error”. It is usually the most important one."
    }
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
  },
  {
    id: "err-m-ort", thema: "fehler", form: "mehrfach",
    code: {
      de: "TypeError: preis.toFixed is not a function\n    at zeigePreis (app.js:42:7)",
      en: "TypeError: price.toFixed is not a function\n    at showPrice (app.js:42:7)"
    },
    codeLabel: { de: "Browser-Konsole", en: "Browser console" },
    frage: {
      de: "Was verrät dir das `app.js:42:7` am Ende dieser Meldung?",
      en: "What does the `app.js:42:7` at the end of this message tell you?"
    },
    optionen: {
      de: [
        "Der Fehler trat in der Datei `app.js` auf",
        "Die Stelle liegt in Zeile 42",
        "In dieser Zeile etwa beim 7. Zeichen",
        "Die Datei enthält 42 Fehler",
        "Der Fehler kam 7-mal vor"
      ],
      en: [
        "The error happened in the file `app.js`",
        "The spot is on line 42",
        "Around the 7th character of that line",
        "The file contains 42 errors",
        "The error occurred 7 times"
      ]
    },
    richtige: [0, 1, 2],
    erklaerung: {
      de: "Das Muster heißt Datei:Zeile:Spalte. Mit dieser Angabe findet Claude die Stelle sofort, also schick sie immer mit.",
      en: "The pattern is file:line:column. With it, Claude finds the spot right away, so always pass it along."
    },
    prompt: {
      de: "„Der Fehler steht in app.js:42:7. Erklär mir, was an dieser Stelle schiefgeht.“",
      en: "“The error is at app.js:42:7. Explain to me what goes wrong at that spot.”"
    }
  },
  {
    id: "err-z-eigene-datei", thema: "fehler", form: "zeile",
    code: {
      de: "SyntaxError: Unexpected end of JSON input\n    at JSON.parse (<anonymous>)\n    at ladeStand (src/speicher.js:12:22)\n    at listOnTimeout (node:internal/timers:585:17)",
      en: "SyntaxError: Unexpected end of JSON input\n    at JSON.parse (<anonymous>)\n    at loadState (src/storage.js:12:22)\n    at listOnTimeout (node:internal/timers:585:17)"
    },
    codeLabel: "Terminal",
    frage: {
      de: "Ein Stack Trace aus dem Terminal. Welche Zeile zeigt auf eine Stelle in deinem eigenen Code?",
      en: "A stack trace from the terminal. Which line points to a spot in your own code?"
    },
    zeile: 2,
    erklaerung: {
      de: "Die oberste Zeile sagt, was schiefging, die erste Zeile mit einer Datei aus deinem Projekt sagt, wo. Zeilen mit `<anonymous>` oder `node:internal` gehören zum Unterbau von Node.",
      en: "The top line says what went wrong, the first line with a file from your project says where. Lines with `<anonymous>` or `node:internal` belong to the inner workings of Node."
    },
    prompt: {
      de: "„Der Fehler kommt aus src/speicher.js, Zeile 12. Was wird dort an JSON.parse übergeben?“",
      en: "“The error comes from src/storage.js, line 12. What gets passed to JSON.parse there?”"
    }
  },
  {
    id: "err-z-python-doppelpunkt", thema: "fehler", form: "zeile",
    code: {
      de: "preis = 20\nif preis > 10\n    print(\"teuer\")",
      en: "price = 20\nif price > 10\n    print(\"expensive\")"
    },
    codeLabel: "Python",
    frage: {
      de: "Python meldet `SyntaxError: expected ':'`. In welcher Zeile fehlt das Zeichen?",
      en: "Python reports `SyntaxError: expected ':'`. Which line is missing the character?"
    },
    zeile: 1,
    erklaerung: {
      de: "Hinter `if preis > 10` fehlt der Doppelpunkt. Python nennt hier wörtlich das Zeichen, das es erwartet hat, also lohnt es sich, die Meldung genau zu lesen.",
      en: "The colon after `if price > 10` is missing. Python names the very character it expected, so reading the message closely pays off."
    }
  },
  {
    id: "err-p-klartext", thema: "fehler", form: "paare",
    frage: { de: "Was steckt hinter diesen Fehlermeldungen?", en: "What is behind these error messages?" },
    paare: [
      ["401 Unauthorized", { de: "Anmeldung fehlt oder ist ungültig", en: "login is missing or invalid" }],
      ["not a git repository", { de: "dieser Ordner ist kein Repo", en: "this folder is not a repo" }],
      [
        "IndentationError",
        { de: "Leerzeichen am Zeilenanfang stimmen nicht", en: "wrong spaces at the line start" }
      ],
      ["ETIMEDOUT", { de: "Antwort kam nicht rechtzeitig", en: "no answer arrived in time" }]
    ],
    erklaerung: {
      de: "Solche Meldungen nennen meist schon die Richtung: API-Schlüssel prüfen, Ordner wechseln, Einrückung korrigieren. Bei `ETIMEDOUT` hilft oft ein zweiter Versuch.",
      en: "Messages like these usually point the way already: check the API key, change the folder, fix the indentation. With `ETIMEDOUT`, a second try often helps."
    }
  }
);
