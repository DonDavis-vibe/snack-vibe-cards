// Snack: Grundkarten zum Thema „Code-Grundbegriffe“ / core cards for this topic.
// Card format: see the header of eigene-karten.js. A text is a plain string or a pair { de: "…", en: "…" }.
(window.SNACK_KARTEN = window.SNACK_KARTEN || []).push(
  {
    id: "code-variable", thema: "code", typ: "bedeutung",
    code: "let preis = 20;",
    codeLabel: "Code",
    frage: "Was ist `preis` in dieser Zeile?",
    optionen: [
      "Eine Variable: ein Name, unter dem ein Wert gespeichert ist",
      "Eine Funktion, die den Preis berechnet, sobald man sie aufruft",
      "Ein Befehl, der die Zahl 20 auf dem Bildschirm anzeigt",
      "Ein fester Text, den das Programm nie mehr ändern darf"
    ],
    richtig: 0,
    erklaerung: "Eine Variable ist wie eine beschriftete Schachtel. Wo im Code preis steht, wird 20 eingesetzt, bis jemand den Wert ändert."
  },
  {
    id: "code-funktion", thema: "code", typ: "bedeutung",
    code: "function begruessen(name) {\n  return \"Hallo \" + name;\n}",
    codeLabel: "Code",
    frage: "Was ist das?",
    optionen: [
      "Eine Funktion: ein benannter Arbeitsschritt, den man immer wieder aufrufen kann",
      "Eine Variable, in der der Begrüßungstext und ein Name dauerhaft gespeichert werden",
      "Ein Kommentar, der erklärt, wie man Leute im Programm begrüßen sollte",
      "Eine Fehlermeldung, weil nach „return“ noch eine Klammer fehlt"
    ],
    richtig: 0,
    erklaerung: "begruessen(\"Ada\") ergibt „Hallo Ada“. Was in den Klammern steht (name), heißt Parameter: die Zutat, die man jedes Mal mitgibt.",
    prompt: "„Lagere die Preisberechnung in eine eigene Funktion aus, damit wir sie an beiden Stellen benutzen können.“"
  },
  {
    id: "code-if", thema: "code", typ: "bedeutung",
    code: "if (alter >= 18) {\n  zeige(\"Willkommen\");\n} else {\n  zeige(\"Leider zu jung\");\n}",
    codeLabel: "Code",
    frage: "Was macht dieser Code?",
    optionen: [
      "Er entscheidet: Ist alter mindestens 18, kommt „Willkommen“, sonst „Leider zu jung“",
      "Er zeigt beide Meldungen nacheinander an, erst „Willkommen“, dann die andere",
      "Er zählt von 0 bis 18 hoch und zeigt bei jeder Zahl eine Meldung",
      "Er speichert das Alter, damit man es später nicht noch mal eingeben muss"
    ],
    richtig: 0,
    erklaerung: "if/else heißt wenn/sonst. So trifft ein Programm Entscheidungen. Fast jede „Wenn X, dann Y“-Bitte an Claude wird im Code zu so einem if."
  },
  {
    id: "code-schleife", thema: "code", typ: "bedeutung",
    code: "for (const karte of karten) {\n  zeige(karte);\n}",
    codeLabel: "Code",
    frage: "Was macht dieser Code?",
    optionen: [
      "Er wiederholt etwas: Für jede Karte in der Liste wird zeige aufgerufen",
      "Er zeigt nur die erste Karte und wartet dann auf einen Klick für die nächste",
      "Er prüft, ob es Karten gibt, und zeigt sie nur, wenn die Liste nicht leer ist",
      "Er sortiert die Karten der Reihe nach und speichert die neue Reihenfolge"
    ],
    richtig: 0,
    erklaerung: "Das ist eine Schleife. Sie erledigt dieselbe Arbeit für jedes Element einer Liste, egal ob es 3 oder 3000 Karten sind."
  },
  {
    id: "code-array", thema: "code", typ: "bedeutung",
    code: "const farben = [\"rot\", \"grün\", \"blau\"];",
    codeLabel: "Code",
    frage: "Was steht hier in den eckigen Klammern?",
    optionen: [
      "Ein Array: eine geordnete Liste von Werten",
      "Drei einzelne Variablen in einer Zeile",
      "Ein Objekt: drei Werte, jeder mit einem Namen",
      "Ein Kommentar mit drei Lieblingsfarben"
    ],
    richtig: 0,
    warum: { 2: "Ein Objekt hat geschweifte Klammern und Namen, z. B. { name: \"Ada\" }." },
    erklaerung: "Ein Array (in Python: Liste) hält mehrere Werte in fester Reihenfolge. Gezählt wird ab 0: farben[0] ist „rot“."
  },
  {
    id: "code-objekt", thema: "code", typ: "bedeutung",
    code: "const nutzer = { name: \"Ada\", alter: 36 };",
    codeLabel: "Code",
    frage: "Was ist `nutzer`?",
    optionen: [
      "Ein Objekt: zusammengehörige Werte, jeder mit einem Namen",
      "Eine Liste: zwei Werte in fester Reihenfolge, ohne eigene Namen",
      "Eine Funktion, die einen neuen Nutzer anlegt, wenn man sie aufruft",
      "Eine kleine Datenbank, die Nutzer dauerhaft auf der Festplatte speichert"
    ],
    richtig: 0,
    warum: { 1: "Eine Liste (Array) hat eckige Klammern. Hier hat jeder Wert einen Namen." },
    erklaerung: "Ein Objekt (in Python: Dictionary) bündelt Eigenschaften. nutzer.name ergibt „Ada“. JSON-Dateien sehen fast genauso aus."
  },
  {
    id: "code-string", thema: "code", typ: "bedeutung",
    code: "\"2\" + \"2\"   // ergibt \"22\"",
    codeLabel: "Code",
    frage: "Warum ergibt das in JavaScript „22“ statt 4?",
    optionen: [
      "Die Anführungszeichen machen daraus Text, und Text wird aneinandergehängt",
      "JavaScript rechnet absichtlich ungenau, damit Programme schneller laufen",
      "Das Pluszeichen heißt in JavaScript immer „hintereinander schreiben“",
      "Das ist ein Tippfehler im Code, es müsste 2 * 2 heißen"
    ],
    richtig: 0,
    warum: { 2: "Bei echten Zahlen rechnet + ganz normal: 2 + 2 ergibt 4. Nur Text wird aneinandergehängt." },
    erklaerung: "Text heißt im Code String, Zahlen heißen Number. Werte aus Eingabefeldern sind oft Text und müssen erst in Zahlen umgewandelt werden.",
    prompt: "„Die Summe zeigt 1020 statt 30. Werden die Eingaben als Text statt als Zahl behandelt?“"
  },
  {
    id: "code-framework", thema: "code", typ: "bedeutung",
    frage: "Was ist der Unterschied zwischen einer Bibliothek und einem Framework?",
    optionen: [
      "Eine Bibliothek benutzt du bei Bedarf, ein Framework gibt das Gerüst für deinen Code vor",
      "Bibliotheken sind kostenlos und frei, Frameworks kosten meistens Geld",
      "Eine Bibliothek ist für kleine Projekte, ein Framework nur für große Firmen",
      "Kein echter Unterschied, das sind zwei Namen für dasselbe"
    ],
    richtig: 0,
    erklaerung: "Eine Bibliothek ist wie ein Akkuschrauber, den du holst, wenn du ihn brauchst. Ein Framework ist wie ein Fertighaus-Bausatz, der vorgibt, wo was hinkommt. Beispiele für Frameworks: Next.js, Django.",
    prompt: "„Brauchen wir dafür wirklich ein Framework, oder reicht einfaches HTML und JavaScript?“"
  },
  {
    id: "code-datenbank", thema: "code", typ: "bedeutung",
    frage: "Wann braucht eine App eine Datenbank?",
    optionen: [
      "Wenn viele Daten dauerhaft gespeichert, durchsucht und geteilt werden sollen",
      "Immer, denn ohne Datenbank kann sich eine App überhaupt nichts merken, nicht mal Einstellungen",
      "Sobald die App Bilder oder Videos anzeigen soll, egal wie viele",
      "Erst wenn die App im Internet veröffentlicht wird, vorher nie"
    ],
    richtig: 0,
    warum: { 1: "Kleine Apps merken sich Dinge auch ohne Datenbank, z. B. im localStorage oder in einer Datei." },
    erklaerung: "Eine Datenbank speichert viele Daten und macht sie schnell durchsuchbar. Für eine kleine App nur für dich reichen oft localStorage oder eine Datei. SQLite ist eine einfache Datenbank in einer einzigen Datei.",
    prompt: "„Reicht für meine App localStorage, oder brauchen wir eine Datenbank? Was wäre am einfachsten?“"
  },
  {
    id: "code-test", thema: "code", typ: "bedeutung",
    frage: "Was ist ein automatischer Test?",
    optionen: [
      "Ein kleines Programm, das prüft, ob dein Code das Richtige tut",
      "Ein Mensch, der die App vor der Veröffentlichung ausprobiert",
      "Ein Virenscan, der den Code nach Schadsoftware durchsucht",
      "Eine Messung, wie schnell die App auf deinem Rechner lädt"
    ],
    richtig: 0,
    erklaerung: "Ein Test sagt z. B.: „Wenn ich 2 und 3 addiere, muss 5 rauskommen.“ Ändert Claude später etwas, zeigen die Tests sofort, ob dabei etwas kaputtging.",
    prompt: "„Schreib Tests für die Preisberechnung und lass sie nach jeder Änderung laufen.“"
  },
  {
    id: "code-kommentar", thema: "code", typ: "bedeutung",
    code: "// Rabatt nur für Stammkunden\nif (stammkunde) preis = preis * 0.9;",
    codeLabel: "Code",
    frage: "Was ist die erste Zeile mit den zwei Schrägstrichen?",
    optionen: [
      "Ein Kommentar: eine Notiz für Menschen, die der Computer ignoriert",
      "Ein Befehl, der den Rabatt nur für Stammkunden einschaltet",
      "Eine Fehlermeldung, die beim Ausführen der nächsten Zeile erscheint",
      "Eine Überschrift, die auf der Webseite über dem Preis angezeigt wird"
    ],
    richtig: 0,
    erklaerung: "In JavaScript beginnen Kommentare mit //, in Python und Bash mit #. Gute Kommentare erklären, warum der Code etwas tut.",
    prompt: "„Kommentier die schwierigen Stellen kurz auf Deutsch.“"
  },
  {
    id: "code-upgrade-erklaeren", thema: "code", typ: "upgrade",
    frage: "Du willst verstehen, was eine Stelle im Code macht. Welcher Prompt hilft am meisten?",
    optionen: [
      "Was macht der Code?",
      "Erklär mir die Funktion berechnePreis in app.js Schritt für Schritt, ohne Fachwörter. Was kommt rein, was kommt raus?",
      "Ich verstehe den Code überhaupt nicht. Kannst du mir bitte alles erklären, was da passiert?"
    ],
    richtig: 1,
    warum: {
      0: "Welcher Code? Ein Projekt hat schnell Tausende Zeilen.",
      2: "„Alles“ heißt: Tausende Zeilen. Besser eine Stelle nach der anderen."
    },
    erklaerung: "Die Stelle genau benennen und sagen, wie du die Erklärung willst. Die Frage „Was kommt rein, was kommt raus?“ passt bei fast jeder Funktion.",
    prompt: "Formel: „Erklär mir [Stelle] Schritt für Schritt, ohne Fachwörter. Was kommt rein, was kommt raus?“"
  },
  {
    id: "code-return", thema: "code", typ: "bedeutung",
    code: "function mehrwertsteuer(preis) {\n  return preis * 0.19;\n}",
    codeLabel: "Code",
    frage: "Was macht `return` in dieser Funktion?",
    optionen: [
      "Es gibt das Ergebnis an die Stelle zurück, die die Funktion aufgerufen hat",
      "Es zeigt das Ergebnis der Rechnung direkt auf dem Bildschirm an",
      "Es startet die Funktion immer wieder von vorn, bis das Ergebnis stimmt",
      "Es speichert das Ergebnis dauerhaft in einer Datei auf der Festplatte"
    ],
    richtig: 0,
    warum: {
      1: "Anzeigen würde `console.log` oder eine Ausgabe auf der Seite. `return` gibt nur zurück.",
      2: "Wiederholen würde eine Schleife. return beendet die Funktion und liefert den Wert.",
      3: "Gespeichert wird nichts. Wer die Funktion aufgerufen hat, entscheidet, was mit dem Wert passiert."
    },
    erklaerung: "Eine Funktion ist wie ein Automat: Du wirfst einen Wert hinein (`preis`), und `return` liefert das Ergebnis zurück. Danach ist die Funktion zu Ende.",
    prompt: "„Gib das Ergebnis mit return zurück, statt es direkt auf der Seite auszugeben.“"
  },
  {
    id: "code-console-log", thema: "code", typ: "bedeutung",
    code: "console.log('karten:', karten);",
    codeLabel: "Code",
    frage: "Wozu schreibt man das in den Code?",
    optionen: [
      "Um einen Wert in der Browser-Konsole anzuzeigen und nachzusehen",
      "Um den Wert dauerhaft in einer Log-Datei auf dem Server zu speichern",
      "Um den Wert für Besucher sichtbar auf der Seite einzublenden",
      "Um den Fehler zu beheben, der genau an dieser Stelle auftritt"
    ],
    richtig: 0,
    warum: {
      1: "Eine Datei entsteht nicht. Die Ausgabe erscheint nur in der Konsole des Browsers (F12).",
      2: "Besucher sehen das nicht, nur wer die Entwicklertools öffnet.",
      3: "Das Anzeigen behebt nichts. Es hilft nur, die Ursache zu finden."
    },
    erklaerung: "`console.log` ist das Stethoskop des Programmierers: Du siehst, was an einer Stelle gerade in einer Variable steckt. Claude nutzt es oft, um Fehler einzukreisen. Danach wieder entfernen.",
    prompt: "„Gib mit console.log aus, was in karten steht, bevor die Schleife startet, und sag mir, was du siehst.“"
  },
  {
    id: "code-l-vergleich", thema: "code", form: "luecke",
    code: {
      de: "if (alter ___ 18) {\n  zeige(\"Zutritt erlaubt\");\n}",
      en: "if (age ___ 18) {\n  show(\"Access granted\");\n}"
    },
    codeLabel: "Code",
    frage: {
      de: "Zutritt soll es ab 18 geben, also auch mit genau 18. Welches Zeichen fehlt?",
      en: "Access should start at 18, so exactly 18 counts too. Which symbol is missing?"
    },
    optionen: [">=", ">", "=", "=>"],
    richtig: 0,
    warum: {
      1: {
        de: "`>` heißt „größer als“. Mit genau 18 käme man nicht rein.",
        en: "`>` means “greater than”. Exactly 18 would not get in."
      },
      2: {
        de: "Ein einzelnes `=` vergleicht nicht, es weist einen Wert zu.",
        en: "A single `=` does not compare, it assigns a value."
      },
      3: {
        de: "`=>` ist kein Vergleich, sondern der Pfeil einer Kurz-Funktion.",
        en: "`=>` is not a comparison, it is the arrow of a short function."
      }
    },
    erklaerung: {
      de: "`>=` heißt „größer oder gleich“. Solche Grenzfälle (genau 18) sind eine häufige Fehlerquelle.",
      en: "`>=` means “greater than or equal”. Edge cases like exactly 18 are a common source of bugs."
    },
    prompt: {
      de: "„Prüf die Grenzfälle: Was passiert bei genau 18?“",
      en: "“Check the edge cases: what happens at exactly 18?”"
    }
  },
  {
    id: "code-z-anfuehrung", thema: "code", form: "zeile",
    code: {
      de: "const name = \"Alex\";\nconst text = \"Hallo + name;\nconsole.log(text);",
      en: "const name = \"Alex\";\nconst text = \"Hello + name;\nconsole.log(text);"
    },
    codeLabel: "Code",
    frage: {
      de: "Der Code startet nicht. In welcher Zeile steckt der Fehler?",
      en: "The code will not start. Which line has the mistake?"
    },
    zeile: 1,
    erklaerung: {
      de: "Hinter `Hallo ` fehlt das schließende Anführungszeichen. Dadurch gilt der Rest der Zeile als Text.",
      en: "The closing quote after `Hello ` is missing. That turns the rest of the line into text."
    }
  }
);
