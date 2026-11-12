// Snack: Grundkarten zum Thema „Dateien und Formate“ / core cards for this topic.
// Card format: see the header of eigene-karten.js. A text is a plain string or a pair { de: "…", en: "…" }.
(window.SNACK_KARTEN = window.SNACK_KARTEN || []).push(
  {
    id: "dat-pfad-absolut", thema: "dateien", typ: "bedeutung",
    frage: "Was ist der Unterschied zwischen `/home/alex/bilder/logo.png` und `bilder/logo.png`?",
    optionen: [
      "Der erste ist absolut (gilt überall), der zweite relativ zum aktuellen Ordner",
      "Der erste funktioniert nur unter Linux, der zweite auch unter Windows",
      "Der zweite ist unvollständig und führt deshalb immer zu einem Fehler",
      "Kein Unterschied: Linux ergänzt den fehlenden Anfang automatisch"
    ],
    richtig: 0,
    erklaerung: "Ein absoluter Pfad beginnt mit / und funktioniert von überall aus. Ein relativer Pfad hängt davon ab, wo du gerade bist. Fehler wie „Datei nicht gefunden“ kommen oft daher."
  },
  {
    id: "dat-punkt-punkt", thema: "dateien", typ: "bedeutung",
    code: "cd ../bilder",
    frage: "Was bedeuten die zwei Punkte `..` in diesem Pfad?",
    optionen: [
      "Eine Ebene höher, also der übergeordnete Ordner",
      "Der aktuelle Ordner, in dem du gerade bist",
      "Alle Unterordner auf einmal, egal wie tief",
      "Ein versteckter Ordner, der mit Punkten beginnt"
    ],
    richtig: 0,
    warum: { 1: "Der aktuelle Ordner ist ein einzelner Punkt: ./" },
    erklaerung: "../bilder heißt: eine Ebene hoch und dort in den Ordner bilder. ../../ geht zwei Ebenen hoch."
  },
  {
    id: "dat-endungen", thema: "dateien", typ: "bedeutung",
    frage: "In welcher Datei steckt Python-Code?",
    optionen: ["main.py", "main.js", "main.html", "main.md"],
    richtig: 0,
    warum: {
      1: ".js ist JavaScript.",
      2: ".html ist das Gerüst einer Webseite.",
      3: ".md ist Markdown, also formatierter Text."
    },
    erklaerung: "Die Endung verrät die Art der Datei. Häufig: .py Python, .js JavaScript, .ts TypeScript, .css Aussehen, .json Daten, .sh Terminal-Skript."
  },
  {
    id: "dat-json", thema: "dateien", typ: "bedeutung",
    code: "{\n  \"name\": \"Quiz\",\n  \"karten\": 200,\n  \"fertig\": false\n}",
    codeLabel: "Datei",
    frage: "In welchem Format sind diese Daten geschrieben?",
    optionen: ["JSON", "HTML", "CSV", "Python"],
    richtig: 0,
    warum: {
      1: "HTML erkennt man an spitzen Klammern wie <div>.",
      2: "CSV ist eine Tabelle mit Trennzeichen, ganz ohne geschweifte Klammern.",
      3: "Python sieht manchmal ähnlich aus, aber das hier ist eine reine Daten-Datei."
    },
    erklaerung: "JSON speichert Daten als Name-Wert-Paare in geschweiften Klammern. Programme tauschen darüber Daten aus, z. B. mit APIs. Die Namen stehen immer in doppelten Anführungszeichen."
  },
  {
    id: "dat-yaml", thema: "dateien", typ: "bedeutung",
    code: "name: Tests\non:\n  push:\n    branches: [main]",
    codeLabel: "Datei",
    frage: "Diese Datei endet auf `.yml`. Was ist das für ein Format?",
    optionen: [
      "YAML: ein Format für Einstellungen, bei dem die Einrückung zählt",
      "Python-Code: Doppelpunkte und Einrückungen sind typisch für Python",
      "Markdown: eine Textdatei, in der Einrückungen Listen erzeugen",
      "CSV: eine Tabelle, bei der Doppelpunkte die Spalten trennen"
    ],
    richtig: 0,
    warum: { 1: "Python sieht ähnlich aus, aber hier steht kein Befehl, nur Einstellungen mit Namen und Werten." },
    erklaerung: "YAML benutzt Einrückungen statt Klammern. Ein falsches Leerzeichen kann die Bedeutung ändern. Typisch für Einstellungen, z. B. bei GitHub Actions oder Docker."
  },
  {
    id: "dat-csv", thema: "dateien", typ: "bedeutung",
    code: "name;stadt;punkte\nAda;Berlin;42\nLinus;Hamburg;37",
    codeLabel: "Datei",
    frage: "Was ist das für eine Datei?",
    optionen: [
      "Eine CSV-Datei: eine Tabelle als reiner Text",
      "Eine JSON-Datei mit Semikolons statt Kommas",
      "Ein Python-Skript, das drei Personen anlegt",
      "Eine Log-Datei mit den Fehlern der letzten Tage"
    ],
    richtig: 0,
    erklaerung: "CSV heißt „durch Kommas getrennte Werte“. In Deutschland steht oft ein Semikolon dazwischen. LibreOffice Calc öffnet CSV als Tabelle, und Programme lesen es leicht ein.",
    prompt: "„Exportier die Ergebnisse als CSV, damit ich sie in LibreOffice öffnen kann.“"
  },
  {
    id: "dat-package-json", thema: "dateien", typ: "bedeutung",
    code: "\"scripts\": {\n  \"dev\": \"vite\",\n  \"build\": \"vite build\"\n}",
    codeLabel: "package.json",
    frage: "Das steht in der package.json. Was passiert bei `npm run dev`?",
    optionen: [
      "npm schaut unter scripts nach „dev“ und startet vite",
      "npm installiert ein Paket mit dem Namen „dev“",
      "npm baut die fertige Version der App fürs Internet",
      "npm lädt die package.json auf GitHub hoch"
    ],
    richtig: 0,
    erklaerung: "Die package.json ist der Steckbrief eines JavaScript-Projekts: Name, benutzte Pakete (dependencies) und Abkürzungen für Befehle (scripts).",
    tipp: "Bei einem fremden Projekt verrät ein Blick in die scripts, wie man es startet."
  },
  {
    id: "dat-lockfile", thema: "dateien", typ: "bedeutung",
    frage: "Was ist die riesige Datei `package-lock.json`?",
    optionen: [
      "Sie hält die genauen Paketversionen fest, damit überall dasselbe installiert wird",
      "Ein Passwortschutz, der verhindert, dass fremde Leute dein Projekt heimlich verändern",
      "Ein automatisches Backup der package.json, falls die mal kaputtgeht",
      "Ein Protokoll aller Fehler, die beim letzten npm install aufgetreten sind"
    ],
    richtig: 0,
    erklaerung: "npm schreibt sie automatisch. Nicht von Hand bearbeiten, aber mit committen. Dann läuft das Projekt auch nächstes Jahr noch mit denselben Versionen."
  },
  {
    id: "dat-leerzeichen", thema: "dateien", typ: "fehler",
    code: "cd Mein Projekt",
    codeLabel: "Befehl",
    frage: "Warum klappt dieser Befehl nicht?",
    optionen: [
      "Das Leerzeichen trennt: cd sieht zwei Wörter, „Mein“ und „Projekt“",
      "Ordnernamen dürfen unter Linux nicht mit einem Großbuchstaben anfangen",
      "cd funktioniert nur mit Namen, die komplett kleingeschrieben sind",
      "Unter Linux dürfen Ordnernamen grundsätzlich keine Leerzeichen enthalten"
    ],
    richtig: 0,
    warum: { 3: "Erlaubt ist das schon. Das Terminal braucht dann nur Anführungszeichen." },
    erklaerung: "Richtig wäre cd \"Mein Projekt\". Deshalb nehmen Programmierer lieber Bindestriche oder Unterstriche: mein-projekt, mein_projekt.",
    tipp: "Mit der Tab-Taste vervollständigt das Terminal den Namen und setzt die nötigen Zeichen von selbst."
  },
  {
    id: "dat-umlaute", thema: "dateien", typ: "fehler",
    code: "SchÃ¶ne GrÃ¼ÃŸe aus MÃ¼nchen",
    frage: "Statt „Schöne Grüße aus München“ zeigt deine App das hier. Was ist los?",
    optionen: [
      "Die Zeichenkodierung passt nicht: Der Text ist UTF-8, wird aber anders gelesen",
      "Der Schriftart fehlen die deutschen Umlaute, deshalb ersetzt sie die Zeichen",
      "Der Text wurde beim Speichern verschlüsselt und nicht wieder entschlüsselt",
      "Der Browser ist auf Englisch eingestellt und kann deshalb kein Deutsch anzeigen"
    ],
    richtig: 0,
    erklaerung: "Umlaute werden je nach Kodierung unterschiedlich gespeichert. Heute ist UTF-8 Standard. Taucht so ein Zeichensalat auf, liest irgendwer die Datei mit der falschen Kodierung.",
    prompt: "„Die Umlaute sind kaputt. Sorg dafür, dass überall UTF-8 benutzt wird.“"
  },
  {
    id: "dat-png-jpg", thema: "dateien", typ: "bedeutung",
    frage: "Du machst einen Screenshot mit viel Text und Linien. Welches Format hält ihn am schärfsten?",
    optionen: [
      "PNG: verlustfrei, Kanten und Schrift bleiben scharf",
      "JPG: Es ist das Standardformat für alle Bilder",
      "GIF: Es hat die beste Qualität für Screenshots",
      "SVG: Jedes Bild lässt sich verlustfrei darin speichern"
    ],
    richtig: 0,
    warum: {
      1: "JPG verwischt feine Kanten und Schrift. Es ist für Fotos gedacht.",
      2: "GIF hat nur 256 Farben und ist eher für kurze Animationen bekannt.",
      3: "SVG speichert Formen, keine Pixelbilder. Ein Screenshot wird dadurch nicht schärfer."
    },
    erklaerung: "PNG speichert jeden Pixel exakt, ideal für Screenshots, Logos und Grafiken. JPG rechnet Bilder kleiner und verliert dabei Details: Bei Fotos fällt das kaum auf, bei Text sehr wohl.",
    prompt: "„Speicher die Screenshots als PNG, nicht als JPG, damit die Schrift lesbar bleibt.“"
  },
  {
    id: "dat-markdown", thema: "dateien", typ: "bedeutung",
    code: "# Einkaufsliste\n\n- Milch\n- **Brot**\n- Äpfel",
    codeLabel: "liste.md",
    frage: "Diese Datei heißt `liste.md`. Was ist das für ein Format?",
    optionen: [
      "Markdown: einfacher Text, bei dem `#` Überschriften und `-` Listen macht",
      "HTML: eine Webseite, die nur noch nicht im Browser geöffnet wurde",
      "YAML: eine Einstellungsdatei mit Einrückungen",
      "CSV: eine Tabelle, die man in Excel öffnen kann"
    ],
    richtig: 0,
    warum: {
      1: "HTML würde Tags wie `<h1>` enthalten. Hier stehen nur einfache Zeichen.",
      2: "YAML kennt `name: wert`. Hier steht weder ein Doppelpunkt noch eine Einrückung.",
      3: "CSV trennt mit Kommas oder Semikolons. Hier gibt es keine Spalten."
    },
    erklaerung: "Markdown ist ein Textformat, das man auch ungerendert gut lesen kann. GitHub, Claude und viele Notiz-Apps wandeln es in formatierten Text um. Darum sind README-Dateien oft `.md`.",
    prompt: "„Schreib die Anleitung als Markdown-Datei README.md mit Überschriften und einer Liste.“"
  },
  {
    id: "dat-grossklein", thema: "dateien", typ: "bedeutung",
    frage: "Auf Windows lädt deine Seite `Logo.png`, auf einem Linux-Server nicht. Die Datei heißt `logo.png`. Warum?",
    optionen: [
      "Linux unterscheidet Groß- und Kleinschreibung, Windows meist nicht",
      "Windows kennt keine PNG-Dateien mit Kleinbuchstaben",
      "Linux zeigt Bilder nur an, wenn sie im Ordner „bilder“ liegen",
      "Die Datei wurde beim Hochladen beschädigt und ist nur lokal intakt"
    ],
    richtig: 0,
    warum: {
      1: "PNG-Dateien sind überall dieselben. Es geht nur um die Schreibweise des Namens.",
      2: "Der Ordner ist egal. Linux findet die Datei, wenn der Name genau stimmt.",
      3: "Beschädigt ist nichts. Linux sucht schlicht nach genau `Logo.png` und findet es nicht."
    },
    erklaerung: "Auf Linux sind `Logo.png` und `logo.png` zwei verschiedene Dateien. Windows wirft sie meist in einen Topf. Darum: Dateinamen im Projekt einheitlich kleinschreiben, dann gibt es beim Deployen keine Überraschungen.",
    prompt: "„Benenne alle Bilddateien in Kleinbuchstaben um und passe die Verweise im Code an.“"
  },
  {
    id: "dat-readme", thema: "dateien", typ: "bedeutung",
    frage: "Was gehört in die `README.md` eines Projekts?",
    optionen: [
      "Kurz: Was das Projekt ist und wie man es startet",
      "Der komplette Quellcode des Projekts in lesbarer Form",
      "Die Passwörter und Keys, die man zum Starten braucht",
      "Eine Liste aller Commits, damit man den Verlauf kennt"
    ],
    richtig: 0,
    warum: {
      1: "Der Code steht in den Dateien. Die README ist die Eingangstür, nicht die ganze Wohnung.",
      2: "Geheimnisse gehören nicht in eine Datei, die jeder auf GitHub lesen kann.",
      3: "Den Verlauf liefert Git selbst. In die README gehört, was ein Neuling sofort braucht."
    },
    erklaerung: "Die README ist die Visitenkarte: Wer das Projekt öffnet, liest sie zuerst, GitHub zeigt sie gleich an. Was ist es, wie startet man es, was muss man vorher installieren? In drei Monaten bist du selbst der Neuling.",
    prompt: "„Schreib eine README.md: Was das Projekt macht, wie man es installiert und wie man es startet.“"
  },
  {
    id: "dat-l-json-zahl", thema: "dateien", form: "luecke",
    code: "{\n  \"name\": \"Quiz\",\n  \"karten\": ___\n}",
    codeLabel: { de: "Datei", en: "File" },
    frage: {
      de: "Die 40 soll als Zahl gespeichert werden, nicht als Text. Was gehört in die Lücke?",
      en: "The 40 should be stored as a number, not as text. What goes into the gap?"
    },
    optionen: ["40", "\"40\"", { de: "vierzig", en: "forty" }, "40,"],
    richtig: 0,
    warum: {
      1: {
        de: "In Anführungszeichen ist es Text. Rechnen kann ein Programm damit nicht direkt.",
        en: "In quotes it is text. A program cannot calculate with it directly."
      },
      2: {
        de: "Ein Wort ohne Anführungszeichen ist in JSON nicht erlaubt.",
        en: "A word without quotes is not allowed in JSON."
      },
      3: {
        de: "Nach dem letzten Eintrag darf in JSON kein Komma stehen.",
        en: "JSON does not allow a comma after the last entry."
      }
    },
    erklaerung: {
      de: "In JSON stehen Zahlen ohne Anführungszeichen, Text mit. Der Unterschied entscheidet, ob ein Programm rechnen kann.",
      en: "In JSON, numbers have no quotes and text does. The difference decides whether a program can calculate."
    }
  },
  {
    id: "dat-z-json-komma", thema: "dateien", form: "zeile",
    code: "{\n  \"name\": \"Quiz\",\n  \"karten\": 40\n  \"fertig\": false\n}",
    codeLabel: "daten.json",
    frage: {
      de: "Diese JSON-Datei lässt sich nicht laden. In welcher Zeile fehlt etwas?",
      en: "This JSON file will not load. Which line is missing something?"
    },
    auchOk: [3],
    zeile: 2,
    erklaerung: {
      de: "Hinter `40` fehlt das Komma. Programme melden so einen Fehler oft erst in der Zeile danach, weil er ihnen dort auffällt.",
      en: "The comma after `40` is missing. Programs often report this on the next line, because that is where they notice it."
    },
    prompt: {
      de: "„Die JSON-Datei lädt nicht. Prüf sie auf fehlende Kommas und Klammern.“",
      en: "“The JSON file will not load. Check it for missing commas and brackets.”"
    }
  },
  {
    id: "dat-p-endungen", thema: "dateien", form: "paare",
    frage: { de: "Welche Dateiendung enthält was?", en: "Which file extension holds what?" },
    paare: [
      [".json", { de: "Daten als Name-Wert-Paare", en: "data as name-value pairs" }],
      [".md", { de: "Text mit einfacher Formatierung", en: "text with simple formatting" }],
      [".css", { de: "das Aussehen einer Webseite", en: "the look of a web page" }],
      [".env", { de: "geheime Einstellungen und Schlüssel", en: "secret settings and keys" }]
    ],
    erklaerung: {
      de: "Die Endung sagt, wie eine Datei aufgebaut ist und welches Programm sie versteht.",
      en: "The extension tells how a file is structured and which program understands it."
    }
  }
);
