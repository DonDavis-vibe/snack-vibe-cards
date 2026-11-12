// Snack: Grundkarten zum Thema „Dateien und Formate“ / core cards for this topic.
// Card format: see the header of eigene-karten.js. A text is a plain string or a pair { de: "…", en: "…" }.
(window.SNACK_KARTEN = window.SNACK_KARTEN || []).push(
  {
    id: "dat-pfad-absolut", thema: "dateien", typ: "bedeutung",
    frage: {
      de: "Was ist der Unterschied zwischen `/home/alex/bilder/logo.png` und `bilder/logo.png`?",
      en: "What is the difference between `/home/alex/images/logo.png` and `images/logo.png`?"
    },
    optionen: {
      de: [
        "Der erste ist absolut (gilt überall), der zweite relativ zum aktuellen Ordner",
        "Der erste funktioniert nur unter Linux, der zweite auch unter Windows",
        "Der zweite ist unvollständig und führt deshalb immer zu einem Fehler",
        "Kein Unterschied: Linux ergänzt den fehlenden Anfang automatisch"
      ],
      en: [
        "The first is absolute, the second is relative to the current folder",
        "The first only works on Linux, while the second also works on Windows",
        "The second is incomplete and therefore always leads to an error",
        "No difference: Linux fills in the missing start automatically"
      ]
    },
    richtig: 0,
    erklaerung: {
      de: "Ein absoluter Pfad beginnt mit / und funktioniert von überall aus. Ein relativer Pfad hängt davon ab, wo du gerade bist. Fehler wie „Datei nicht gefunden“ kommen oft daher.",
      en: "An absolute path starts with / and works from anywhere. A relative path depends on where you are right now. Errors like “No such file or directory” often come from this."
    }
  },
  {
    id: "dat-punkt-punkt", thema: "dateien", typ: "bedeutung",
    code: { de: "cd ../bilder", en: "cd ../images" },
    frage: {
      de: "Was bedeuten die zwei Punkte `..` in diesem Pfad?",
      en: "What do the two dots `..` mean in this path?"
    },
    optionen: {
      de: [
        "Eine Ebene höher, also der übergeordnete Ordner",
        "Der aktuelle Ordner, in dem du gerade bist",
        "Alle Unterordner auf einmal, egal wie tief",
        "Ein versteckter Ordner, der mit Punkten beginnt"
      ],
      en: [
        "One level up, meaning the parent folder",
        "The current folder you are in right now",
        "All subfolders at once, however deep",
        "A hidden folder whose name starts with dots"
      ]
    },
    richtig: 0,
    warum: { 1: { de: "Der aktuelle Ordner ist ein einzelner Punkt: ./", en: "The current folder is a single dot: ./" } },
    erklaerung: {
      de: "../bilder heißt: eine Ebene hoch und dort in den Ordner bilder. ../../ geht zwei Ebenen hoch.",
      en: "../images means: go up one level, then into the folder images. ../../ goes up two levels."
    }
  },
  {
    id: "dat-endungen", thema: "dateien", typ: "bedeutung",
    frage: { de: "In welcher Datei steckt Python-Code?", en: "Which file contains Python code?" },
    optionen: ["main.py", "main.js", "main.html", "main.md"],
    richtig: 0,
    warum: {
      1: { de: ".js ist JavaScript.", en: ".js is JavaScript." },
      2: { de: ".html ist das Gerüst einer Webseite.", en: ".html is the skeleton of a web page." },
      3: { de: ".md ist Markdown, also formatierter Text.", en: ".md is Markdown, meaning formatted text." }
    },
    erklaerung: {
      de: "Die Endung verrät die Art der Datei. Häufig: .py Python, .js JavaScript, .ts TypeScript, .css Aussehen, .json Daten, .sh Terminal-Skript.",
      en: "The extension tells you the type of file. Common ones: .py Python, .js JavaScript, .ts TypeScript, .css styling, .json data, .sh terminal script."
    }
  },
  {
    id: "dat-json", thema: "dateien", typ: "bedeutung",
    code: {
      de: "{\n  \"name\": \"Quiz\",\n  \"karten\": 200,\n  \"fertig\": false\n}",
      en: "{\n  \"name\": \"Quiz\",\n  \"cards\": 200,\n  \"done\": false\n}"
    },
    codeLabel: { de: "Datei", en: "File" },
    frage: { de: "In welchem Format sind diese Daten geschrieben?", en: "What format is this data written in?" },
    optionen: ["JSON", "HTML", "CSV", "Python"],
    richtig: 0,
    warum: {
      1: {
        de: "HTML erkennt man an spitzen Klammern wie <div>.",
        en: "You can spot HTML by angle brackets like <div>."
      },
      2: {
        de: "CSV ist eine Tabelle mit Trennzeichen, ganz ohne geschweifte Klammern.",
        en: "CSV is a table with separators, with no curly braces at all."
      },
      3: {
        de: "Python sieht manchmal ähnlich aus, aber das hier ist eine reine Daten-Datei.",
        en: "Python sometimes looks similar, but this is a pure data file."
      }
    },
    erklaerung: {
      de: "JSON speichert Daten als Name-Wert-Paare in geschweiften Klammern. Programme tauschen darüber Daten aus, z. B. mit APIs. Die Namen stehen immer in doppelten Anführungszeichen.",
      en: "JSON stores data as name-value pairs inside curly braces. Programs use it to exchange data, for example with APIs. The names are always in double quotes."
    }
  },
  {
    id: "dat-meme-json", thema: "dateien", typ: "bedeutung",
    frage: {
      de: "Ein Vibe Coder schreibt verzweifelt ins Forum: „Claude redet ständig von JSON. Wer ist JSON, und warum ist er in meinem Code?“ Was antwortest du?",
      en: "A vibe coder posts in a panic: “Claude keeps talking about JSON. Who is JSON, and why is he in my code?” What do you reply?"
    },
    optionen: {
      de: [
        "Kein Er, sondern ein Textformat, in dem Programme Daten aufschreiben",
        "Ein Praktikant von Claude, der nachts heimlich deinen Code schreibt",
        "Jason aus „Freitag der 13.“, der jetzt in deinem Projektordner wohnt",
        "Ein Virus, der sich als harmlose Datei mit der Endung .json tarnt"
      ],
      en: [
        "Not a he: a text format that programs use to write down data",
        "Claude's intern, who secretly writes your code at night",
        "Jason from “Friday the 13th”, who now lives in your project folder",
        "A virus disguised as a harmless file ending in .json"
      ]
    },
    richtig: 0,
    warum: {
      1: {
        de: "Claude hat keine Praktikanten. JSON schreibt auch nichts, es ist nur die Form, in der Daten aufgeschrieben werden.",
        en: "Claude has no interns. JSON doesn't write anything either, it is just the shape data is written in."
      },
      2: {
        de: "Der trägt eine Hockeymaske, keine geschweiften Klammern. Ausgesprochen wird JSON aber wirklich wie „Jason“.",
        en: "He wears a hockey mask, not curly braces. JSON really is pronounced like “Jason”, though."
      },
      3: {
        de: "Eine .json-Datei ist reiner Text. Sie führt nichts aus, du kannst sie in jedem Editor lesen.",
        en: "A .json file is plain text. It doesn't run anything, and you can read it in any editor."
      }
    },
    erklaerung: {
      de: "JSON steht für JavaScript Object Notation und klingt ausgesprochen wie „Jason“, daher das Meme. Sich selbst würde JSON so beschreiben: `{ \"name\": \"JSON\", \"ist_ein_mensch\": false }`",
      en: "JSON stands for JavaScript Object Notation and is pronounced like “Jason”, hence the meme. JSON would describe itself like this: `{ \"name\": \"JSON\", \"is_a_person\": false }`"
    },
    tipp: {
      de: "Öffne eine .json-Datei in einem deiner Projekte. Jason ist nicht drin, versprochen.",
      en: "Open a .json file in one of your projects. Jason isn't in there, promise."
    }
  },
  {
    id: "dat-yaml", thema: "dateien", typ: "bedeutung",
    code: "name: Tests\non:\n  push:\n    branches: [main]",
    codeLabel: { de: "Datei", en: "File" },
    frage: {
      de: "Diese Datei endet auf `.yml`. Was ist das für ein Format?",
      en: "This file ends in `.yml`. What format is it?"
    },
    optionen: {
      de: [
        "YAML: ein Format für Einstellungen, bei dem die Einrückung zählt",
        "Python-Code: Doppelpunkte und Einrückungen sind typisch für Python",
        "Markdown: eine Textdatei, in der Einrückungen Listen erzeugen",
        "CSV: eine Tabelle, bei der Doppelpunkte die Spalten trennen"
      ],
      en: [
        "YAML: a format for settings where indentation matters",
        "Python code: colons and indentation are typical for Python",
        "Markdown: a text file where indentation creates lists",
        "CSV: a table where colons separate the columns"
      ]
    },
    richtig: 0,
    warum: {
      1: {
        de: "Python sieht ähnlich aus, aber hier steht kein Befehl, nur Einstellungen mit Namen und Werten.",
        en: "Python looks similar, but there is no command here, only settings with names and values."
      }
    },
    erklaerung: {
      de: "YAML benutzt Einrückungen statt Klammern. Ein falsches Leerzeichen kann die Bedeutung ändern. Typisch für Einstellungen, z. B. bei GitHub Actions oder Docker.",
      en: "YAML uses indentation instead of brackets. One wrong space can change the meaning. Typical for settings, for example in GitHub Actions or Docker."
    }
  },
  {
    id: "dat-csv", thema: "dateien", typ: "bedeutung",
    code: {
      de: "name;stadt;punkte\nAda;Berlin;42\nLinus;Hamburg;37",
      en: "name;city;points\nAda;Berlin;42\nLinus;Hamburg;37"
    },
    codeLabel: { de: "Datei", en: "File" },
    frage: { de: "Was ist das für eine Datei?", en: "What kind of file is this?" },
    optionen: {
      de: [
        "Eine CSV-Datei: eine Tabelle als reiner Text",
        "Eine JSON-Datei mit Semikolons statt Kommas",
        "Ein Python-Skript, das drei Personen anlegt",
        "Eine Log-Datei mit den Fehlern der letzten Tage"
      ],
      en: [
        "A CSV file: a table as plain text",
        "A JSON file with semicolons instead of commas",
        "A Python script that creates three people",
        "A log file with the errors of the last few days"
      ]
    },
    richtig: 0,
    erklaerung: {
      de: "CSV heißt „durch Kommas getrennte Werte“. In Deutschland steht oft ein Semikolon dazwischen. LibreOffice Calc öffnet CSV als Tabelle, und Programme lesen es leicht ein.",
      en: "CSV stands for “comma-separated values”. Some countries, such as Germany, often use a semicolon instead, as in this file. LibreOffice Calc opens CSV as a table, and programs read it easily."
    },
    prompt: {
      de: "„Exportier die Ergebnisse als CSV, damit ich sie in LibreOffice öffnen kann.“",
      en: "“Export the results as CSV so I can open them in LibreOffice.”"
    }
  },
  {
    id: "dat-package-json", thema: "dateien", typ: "bedeutung",
    code: "\"scripts\": {\n  \"dev\": \"vite\",\n  \"build\": \"vite build\"\n}",
    codeLabel: "package.json",
    frage: {
      de: "Das steht in der package.json. Was passiert bei `npm run dev`?",
      en: "This is in the package.json. What happens when you run `npm run dev`?"
    },
    optionen: {
      de: [
        "npm schaut unter scripts nach „dev“ und startet vite",
        "npm installiert ein Paket mit dem Namen „dev“",
        "npm baut die fertige Version der App fürs Internet",
        "npm lädt die package.json auf GitHub hoch"
      ],
      en: [
        "npm looks up “dev” under scripts and starts vite",
        "npm installs a package with the name “dev”",
        "npm builds the finished version of the app for the web",
        "npm uploads the package.json to GitHub"
      ]
    },
    richtig: 0,
    erklaerung: {
      de: "Die package.json ist der Steckbrief eines JavaScript-Projekts: Name, benutzte Pakete (dependencies) und Abkürzungen für Befehle (scripts).",
      en: "The package.json is the profile of a JavaScript project: its name, the packages it uses (dependencies) and shortcuts for commands (scripts)."
    },
    tipp: {
      de: "Bei einem fremden Projekt verrät ein Blick in die scripts, wie man es startet.",
      en: "In someone else's project, a look at the scripts tells you how to start it."
    }
  },
  {
    id: "dat-lockfile", thema: "dateien", typ: "bedeutung",
    frage: { de: "Was ist die riesige Datei `package-lock.json`?", en: "What is the huge file `package-lock.json`?" },
    optionen: {
      de: [
        "Sie hält die genauen Paketversionen fest, damit überall dasselbe installiert wird",
        "Ein Passwortschutz, der verhindert, dass fremde Leute dein Projekt heimlich verändern",
        "Ein automatisches Backup der package.json, falls die mal kaputtgeht",
        "Ein Protokoll aller Fehler, die beim letzten npm install aufgetreten sind"
      ],
      en: [
        "It records the exact package versions so everyone installs the same ones",
        "A password protection that stops strangers from secretly changing your project",
        "An automatic backup of the package.json in case it ever gets damaged",
        "A log of all errors that occurred during the last npm install"
      ]
    },
    richtig: 0,
    erklaerung: {
      de: "npm schreibt sie automatisch. Nicht von Hand bearbeiten, aber mit committen. Dann läuft das Projekt auch nächstes Jahr noch mit denselben Versionen.",
      en: "npm writes it automatically. Do not edit it by hand, but do commit it. Then the project will still run with the same versions next year."
    }
  },
  {
    id: "dat-leerzeichen", thema: "dateien", typ: "fehler",
    code: { de: "cd Mein Projekt", en: "cd My Project" },
    codeLabel: { de: "Befehl", en: "Command" },
    frage: { de: "Warum klappt dieser Befehl nicht?", en: "Why does this command not work?" },
    optionen: {
      de: [
        "Das Leerzeichen trennt: cd sieht zwei Wörter, „Mein“ und „Projekt“",
        "Ordnernamen dürfen unter Linux nicht mit einem Großbuchstaben anfangen",
        "cd funktioniert nur mit Namen, die komplett kleingeschrieben sind",
        "Unter Linux dürfen Ordnernamen grundsätzlich keine Leerzeichen enthalten"
      ],
      en: [
        "The space separates: cd sees two words, “My” and “Project”",
        "On Linux, folder names must not start with a capital letter",
        "cd only works with names that are entirely lowercase",
        "On Linux, folder names must never contain any spaces"
      ]
    },
    richtig: 0,
    warum: {
      3: {
        de: "Erlaubt ist das schon. Das Terminal braucht dann nur Anführungszeichen.",
        en: "They are allowed. The terminal just needs quotes then."
      }
    },
    erklaerung: {
      de: "Richtig wäre cd \"Mein Projekt\". Deshalb nehmen Programmierer lieber Bindestriche oder Unterstriche: mein-projekt, mein_projekt.",
      en: "The correct form is cd \"My Project\". That is why programmers prefer hyphens or underscores: my-project, my_project."
    },
    tipp: {
      de: "Mit der Tab-Taste vervollständigt das Terminal den Namen und setzt die nötigen Zeichen von selbst.",
      en: "With the Tab key, the terminal completes the name and adds the needed characters by itself."
    }
  },
  {
    id: "dat-umlaute", thema: "dateien", typ: "fehler",
    code: { de: "SchÃ¶ne GrÃ¼ÃŸe aus MÃ¼nchen", en: "CrÃ¨me brÃ»lÃ©e at the cafÃ©" },
    frage: {
      de: "Statt „Schöne Grüße aus München“ zeigt deine App das hier. Was ist los?",
      en: "Instead of “Crème brûlée at the café”, your app shows this. What is going on?"
    },
    optionen: {
      de: [
        "Die Zeichenkodierung passt nicht: Der Text ist UTF-8, wird aber anders gelesen",
        "Der Schriftart fehlen die deutschen Umlaute, deshalb ersetzt sie die Zeichen",
        "Der Text wurde beim Speichern verschlüsselt und nicht wieder entschlüsselt",
        "Der Browser ist auf Englisch eingestellt und kann deshalb kein Deutsch anzeigen"
      ],
      en: [
        "Wrong text encoding: the text is UTF-8 but is read as something else",
        "The font is missing the accented letters, so it swaps in other characters",
        "The text was encrypted when it was saved and never decrypted again",
        "The browser is set to English and therefore cannot display French"
      ]
    },
    richtig: 0,
    erklaerung: {
      de: "Umlaute werden je nach Kodierung unterschiedlich gespeichert. Heute ist UTF-8 Standard. Taucht so ein Zeichensalat auf, liest irgendwer die Datei mit der falschen Kodierung.",
      en: "Accented letters are stored differently depending on the encoding. Today UTF-8 is the standard. If you see garbled characters like these, something is reading the file with the wrong encoding."
    },
    prompt: {
      de: "„Die Umlaute sind kaputt. Sorg dafür, dass überall UTF-8 benutzt wird.“",
      en: "“The accented letters are broken. Make sure UTF-8 is used everywhere.”"
    }
  },
  {
    id: "dat-png-jpg", thema: "dateien", typ: "bedeutung",
    frage: {
      de: "Du machst einen Screenshot mit viel Text und Linien. Welches Format hält ihn am schärfsten?",
      en: "You take a screenshot with lots of text and lines. Which format keeps it sharpest?"
    },
    optionen: {
      de: [
        "PNG: verlustfrei, Kanten und Schrift bleiben scharf",
        "JPG: Es ist das Standardformat für alle Bilder",
        "GIF: Es hat die beste Qualität für Screenshots",
        "SVG: Jedes Bild lässt sich verlustfrei darin speichern"
      ],
      en: [
        "PNG: lossless, edges and text stay sharp",
        "JPG: it is the standard format for all images",
        "GIF: it has the best quality for screenshots",
        "SVG: any image can be saved in it without loss"
      ]
    },
    richtig: 0,
    warum: {
      1: {
        de: "JPG verwischt feine Kanten und Schrift. Es ist für Fotos gedacht.",
        en: "JPG blurs fine edges and text. It is meant for photos."
      },
      2: {
        de: "GIF hat nur 256 Farben und ist eher für kurze Animationen bekannt.",
        en: "GIF has only 256 colors and is better known for short animations."
      },
      3: {
        de: "SVG speichert Formen, keine Pixelbilder. Ein Screenshot wird dadurch nicht schärfer.",
        en: "SVG stores shapes, not pixel images. It does not make a screenshot any sharper."
      }
    },
    erklaerung: {
      de: "PNG speichert jeden Pixel exakt, ideal für Screenshots, Logos und Grafiken. JPG rechnet Bilder kleiner und verliert dabei Details: Bei Fotos fällt das kaum auf, bei Text sehr wohl.",
      en: "PNG stores every pixel exactly, ideal for screenshots, logos and graphics. JPG shrinks images and loses detail along the way: in photos you barely notice, in text you do."
    },
    prompt: {
      de: "„Speicher die Screenshots als PNG, nicht als JPG, damit die Schrift lesbar bleibt.“",
      en: "“Save the screenshots as PNG, not JPG, so the text stays readable.”"
    }
  },
  {
    id: "dat-markdown", thema: "dateien", typ: "bedeutung",
    code: {
      de: "# Einkaufsliste\n\n- Milch\n- **Brot**\n- Äpfel",
      en: "# Shopping list\n\n- Milk\n- **Bread**\n- Apples"
    },
    codeLabel: { de: "liste.md", en: "list.md" },
    frage: {
      de: "Diese Datei heißt `liste.md`. Was ist das für ein Format?",
      en: "This file is called `list.md`. What format is it?"
    },
    optionen: {
      de: [
        "Markdown: einfacher Text, bei dem `#` Überschriften und `-` Listen macht",
        "HTML: eine Webseite, die nur noch nicht im Browser geöffnet wurde",
        "YAML: eine Einstellungsdatei mit Einrückungen",
        "CSV: eine Tabelle, die man in Excel öffnen kann"
      ],
      en: [
        "Markdown: plain text where `#` makes headings and `-` lists",
        "HTML: a web page that just has not been opened in a browser yet",
        "YAML: a settings file with indentation",
        "CSV: a table you can open in Excel"
      ]
    },
    richtig: 0,
    warum: {
      1: {
        de: "HTML würde Tags wie `<h1>` enthalten. Hier stehen nur einfache Zeichen.",
        en: "HTML would contain tags like `<h1>`. Here there are only simple characters."
      },
      2: {
        de: "YAML kennt `name: wert`. Hier steht weder ein Doppelpunkt noch eine Einrückung.",
        en: "YAML uses `name: value`. Here there is neither a colon nor any indentation."
      },
      3: {
        de: "CSV trennt mit Kommas oder Semikolons. Hier gibt es keine Spalten.",
        en: "CSV separates with commas or semicolons. There are no columns here."
      }
    },
    erklaerung: {
      de: "Markdown ist ein Textformat, das man auch ungerendert gut lesen kann. GitHub, Claude und viele Notiz-Apps wandeln es in formatierten Text um. Darum sind README-Dateien oft `.md`.",
      en: "Markdown is a text format that is easy to read even unrendered. GitHub, Claude and many note apps turn it into formatted text. That is why README files are often `.md`."
    },
    prompt: {
      de: "„Schreib die Anleitung als Markdown-Datei README.md mit Überschriften und einer Liste.“",
      en: "“Write the instructions as a Markdown file README.md with headings and a list.”"
    }
  },
  {
    id: "dat-grossklein", thema: "dateien", typ: "bedeutung",
    frage: {
      de: "Auf Windows lädt deine Seite `Logo.png`, auf einem Linux-Server nicht. Die Datei heißt `logo.png`. Warum?",
      en: "On Windows your page loads `Logo.png`, on a Linux server it does not. The file is named `logo.png`. Why?"
    },
    optionen: {
      de: [
        "Linux unterscheidet Groß- und Kleinschreibung, Windows meist nicht",
        "Windows kennt keine PNG-Dateien mit Kleinbuchstaben",
        "Linux zeigt Bilder nur an, wenn sie im Ordner „bilder“ liegen",
        "Die Datei wurde beim Hochladen beschädigt und ist nur lokal intakt"
      ],
      en: [
        "Linux tells upper and lower case apart, Windows mostly does not",
        "Windows cannot handle PNG files with lowercase letters",
        "Linux only shows images if they are in the “images” folder",
        "The file was damaged during upload and is only intact locally"
      ]
    },
    richtig: 0,
    warum: {
      1: {
        de: "PNG-Dateien sind überall dieselben. Es geht nur um die Schreibweise des Namens.",
        en: "PNG files are the same everywhere. This is only about how the name is spelled."
      },
      2: {
        de: "Der Ordner ist egal. Linux findet die Datei, wenn der Name genau stimmt.",
        en: "The folder does not matter. Linux finds the file if the name matches exactly."
      },
      3: {
        de: "Beschädigt ist nichts. Linux sucht schlicht nach genau `Logo.png` und findet es nicht.",
        en: "Nothing is damaged. Linux simply looks for exactly `Logo.png` and does not find it."
      }
    },
    erklaerung: {
      de: "Auf Linux sind `Logo.png` und `logo.png` zwei verschiedene Dateien. Windows wirft sie meist in einen Topf. Darum: Dateinamen im Projekt einheitlich kleinschreiben, dann gibt es beim Deployen keine Überraschungen.",
      en: "On Linux, `Logo.png` and `logo.png` are two different files. Windows usually treats them as the same. So keep the file names in your project consistently lowercase, and deploying holds no surprises."
    },
    prompt: {
      de: "„Benenne alle Bilddateien in Kleinbuchstaben um und passe die Verweise im Code an.“",
      en: "“Rename all image files to lowercase and update the references in the code.”"
    }
  },
  {
    id: "dat-readme", thema: "dateien", typ: "bedeutung",
    frage: { de: "Was gehört in die `README.md` eines Projekts?", en: "What belongs in a project's `README.md`?" },
    optionen: {
      de: [
        "Kurz: Was das Projekt ist und wie man es startet",
        "Der komplette Quellcode des Projekts in lesbarer Form",
        "Die Passwörter und Keys, die man zum Starten braucht",
        "Eine Liste aller Commits, damit man den Verlauf kennt"
      ],
      en: [
        "In short: what the project is and how to start it",
        "The complete source code of the project in readable form",
        "The passwords and keys you need to start it",
        "A list of all commits so you know the history"
      ]
    },
    richtig: 0,
    warum: {
      1: {
        de: "Der Code steht in den Dateien. Die README ist die Eingangstür, nicht die ganze Wohnung.",
        en: "The code lives in the files. The README is the front door, not the whole apartment."
      },
      2: {
        de: "Geheimnisse gehören nicht in eine Datei, die jeder auf GitHub lesen kann.",
        en: "Secrets do not belong in a file that anyone on GitHub can read."
      },
      3: {
        de: "Den Verlauf liefert Git selbst. In die README gehört, was ein Neuling sofort braucht.",
        en: "Git itself provides the history. The README holds what a newcomer needs right away."
      }
    },
    erklaerung: {
      de: "Die README ist die Visitenkarte: Wer das Projekt öffnet, liest sie zuerst, GitHub zeigt sie gleich an. Was ist es, wie startet man es, was muss man vorher installieren? In drei Monaten bist du selbst der Neuling.",
      en: "The README is the business card: whoever opens the project reads it first, and GitHub shows it right away. What is it, how do you start it, what needs installing first? In three months, you will be the newcomer yourself."
    },
    prompt: {
      de: "„Schreib eine README.md: Was das Projekt macht, wie man es installiert und wie man es startet.“",
      en: "“Write a README.md: what the project does, how to install it and how to start it.”"
    }
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
  },
  {
    id: "dat-l-env-zeile", thema: "dateien", form: "luecke",
    code: { de: "API_KEY___dein-schluessel-hier", en: "API_KEY___your-key-here" },
    codeLabel: ".env",
    frage: {
      de: "In der `.env` steht pro Zeile eine Einstellung: links der Name, rechts der Wert. Welches Zeichen gehört dazwischen?",
      en: "In `.env`, each line holds one setting: the name on the left, the value on the right. Which character goes in between?"
    },
    optionen: ["=", ":", "==", "=>"],
    richtig: 0,
    warum: {
      1: {
        de: "Den Doppelpunkt nehmen JSON und YAML. Die `.env` hat ihre eigene Schreibweise.",
        en: "The colon is what JSON and YAML use. `.env` has its own notation."
      },
      2: {
        de: "`==` vergleicht im Code zwei Werte. Hier wird nichts verglichen.",
        en: "`==` compares two values in code. Nothing is compared here."
      },
      3: {
        de: "`=>` ist der Pfeil einer Kurz-Funktion in JavaScript.",
        en: "`=>` is the arrow of a short function in JavaScript."
      }
    },
    erklaerung: {
      de: "Die Schreibweise ist `NAME=wert`, am besten ohne Leerzeichen um das `=`. Dein Code findet den Wert später unter genau diesem Namen.",
      en: "The notation is `NAME=value`, ideally with no spaces around the `=`. Your code later finds the value under exactly this name."
    },
    prompt: {
      de: "„Leg eine .env mit dem Eintrag API_KEY an. Den Wert trage ich selbst ein.“",
      en: "“Create a .env with an API_KEY entry. I will fill in the value myself.”"
    }
  },
  {
    id: "dat-r-pfad", thema: "dateien", form: "reihenfolge",
    frage: {
      de: "`logo.png` liegt in `bilder`, `bilder` liegt in `quiz`, und `quiz` liegt in deinem Home-Ordner. Setz den Pfad von außen nach innen zusammen.",
      en: "`logo.png` is in `images`, `images` is in `quiz`, and `quiz` is in your home folder. Build the path from the outside in."
    },
    schritte: { de: ["`~/`", "`quiz/`", "`bilder/`", "`logo.png`"], en: ["`~/`", "`quiz/`", "`images/`", "`logo.png`"] },
    erklaerung: {
      de: "Ein Pfad liest sich wie eine Wegbeschreibung: erst der äußerste Ordner, dann immer tiefer, ganz am Ende die Datei. Zusammen ergibt das `~/quiz/bilder/logo.png`.",
      en: "A path reads like directions: the outermost folder first, then deeper and deeper, the file at the very end. Together that makes `~/quiz/images/logo.png`."
    },
    prompt: {
      de: "„Das Logo liegt unter ~/quiz/bilder/logo.png. Bau es oben links in die Navbar ein.“",
      en: "“The logo is at ~/quiz/images/logo.png. Put it in the top left of the navbar.”"
    }
  },
  {
    id: "dat-m-reiner-text", thema: "dateien", form: "mehrfach",
    frage: {
      de: "Welche dieser Dateien sind reiner Text, den du in jedem Texteditor lesen kannst?",
      en: "Which of these files are plain text that you can read in any text editor?"
    },
    optionen: {
      de: ["`notizen.md`", "`daten.json`", "`brief.docx`", "`tabelle.csv`", "`logo.png`"],
      en: ["`notes.md`", "`data.json`", "`letter.docx`", "`table.csv`", "`logo.png`"]
    },
    richtige: [0, 1, 3],
    erklaerung: {
      de: "Markdown, JSON und CSV bestehen nur aus Zeichen, darum kann Claude sie direkt bearbeiten und Git zeigt Änderungen Zeile für Zeile. Eine Word-Datei enthält zwar Text, ist aber verpackt wie ein ZIP und im Texteditor nur Zeichensalat.",
      en: "Markdown, JSON and CSV consist of characters only, so Claude can edit them directly and Git shows changes line by line. A Word file does contain text, but it is packed like a ZIP and looks like gibberish in a text editor."
    },
    prompt: {
      de: "„Schreib die Notizen als Markdown-Datei, nicht als Word-Dokument.“",
      en: "“Write the notes as a Markdown file, not as a Word document.”"
    }
  }
);
