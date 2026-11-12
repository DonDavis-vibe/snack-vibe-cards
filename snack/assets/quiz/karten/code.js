// Snack: Grundkarten zum Thema „Code-Grundbegriffe“ / core cards for this topic.
// Card format: see the header of eigene-karten.js. A text is a plain string or a pair { de: "…", en: "…" }.
(window.SNACK_KARTEN = window.SNACK_KARTEN || []).push(
  {
    id: "code-variable", thema: "code", typ: "bedeutung",
    code: { de: "let preis = 20;", en: "let price = 20;" },
    codeLabel: "Code",
    frage: { de: "Was ist `preis` in dieser Zeile?", en: "What is `price` in this line?" },
    optionen: {
      de: [
        "Eine Variable: ein Name, unter dem ein Wert gespeichert ist",
        "Eine Funktion, die den Preis berechnet, sobald man sie aufruft",
        "Ein Befehl, der die Zahl 20 auf dem Bildschirm anzeigt",
        "Ein fester Text, den das Programm nie mehr ändern darf"
      ],
      en: [
        "A variable: a name under which a value is stored",
        "A function that calculates the price as soon as you call it",
        "A command that shows the number 20 on the screen",
        "A fixed text that the program may never change again"
      ]
    },
    richtig: 0,
    erklaerung: {
      de: "Eine Variable ist wie eine beschriftete Schachtel. Wo im Code preis steht, wird 20 eingesetzt, bis jemand den Wert ändert.",
      en: "A variable is like a labeled box. Wherever the code says price, 20 is filled in, until someone changes the value."
    }
  },
  {
    id: "code-funktion", thema: "code", typ: "bedeutung",
    code: {
      de: "function begruessen(name) {\n  return \"Hallo \" + name;\n}",
      en: "function greet(name) {\n  return \"Hello \" + name;\n}"
    },
    codeLabel: "Code",
    frage: { de: "Was ist das?", en: "What is this?" },
    optionen: {
      de: [
        "Eine Funktion: ein benannter Arbeitsschritt, den man immer wieder aufrufen kann",
        "Eine Variable, in der der Begrüßungstext und ein Name dauerhaft gespeichert werden",
        "Ein Kommentar, der erklärt, wie man Leute im Programm begrüßen sollte",
        "Eine Fehlermeldung, weil nach „return“ noch eine Klammer fehlt"
      ],
      en: [
        "A function: a named piece of work that you can call again and again",
        "A variable in which the greeting text and a name are permanently stored",
        "A comment that explains how to greet people in the program",
        "An error message, because a parenthesis is missing after “return”"
      ]
    },
    richtig: 0,
    erklaerung: {
      de: "begruessen(\"Ada\") ergibt „Hallo Ada“. Was in den Klammern steht (name), heißt Parameter: die Zutat, die man jedes Mal mitgibt.",
      en: "greet(\"Ada\") gives “Hello Ada”. What is in the parentheses (name) is called a parameter: the ingredient you pass in each time."
    },
    prompt: {
      de: "„Lagere die Preisberechnung in eine eigene Funktion aus, damit wir sie an beiden Stellen benutzen können.“",
      en: "“Move the price calculation into its own function, so we can use it in both places.”"
    }
  },
  {
    id: "code-if", thema: "code", typ: "bedeutung",
    code: {
      de: "if (alter >= 18) {\n  zeige(\"Willkommen\");\n} else {\n  zeige(\"Leider zu jung\");\n}",
      en: "if (age >= 18) {\n  show(\"Welcome\");\n} else {\n  show(\"Sorry, too young\");\n}"
    },
    codeLabel: "Code",
    frage: { de: "Was macht dieser Code?", en: "What does this code do?" },
    optionen: {
      de: [
        "Er entscheidet: Ist alter mindestens 18, kommt „Willkommen“, sonst „Leider zu jung“",
        "Er zeigt beide Meldungen nacheinander an, erst „Willkommen“, dann die andere",
        "Er zählt von 0 bis 18 hoch und zeigt bei jeder Zahl eine Meldung",
        "Er speichert das Alter, damit man es später nicht noch mal eingeben muss"
      ],
      en: [
        "It decides: if age is 18 or more, “Welcome”, otherwise “Sorry, too young”",
        "It shows both messages one after the other, first “Welcome”, then the other one",
        "It counts up from 0 to 18 and shows a message for each number",
        "It stores the age, so you don't have to enter it again later"
      ]
    },
    richtig: 0,
    erklaerung: {
      de: "if/else heißt wenn/sonst. So trifft ein Programm Entscheidungen. Fast jede „Wenn X, dann Y“-Bitte an Claude wird im Code zu so einem if.",
      en: "if/else reads as “if this, otherwise that”. This is how a program makes decisions. Almost every “if X, then Y” request to Claude turns into an if like this in the code."
    }
  },
  {
    id: "code-schleife", thema: "code", typ: "bedeutung",
    code: {
      de: "for (const karte of karten) {\n  zeige(karte);\n}",
      en: "for (const card of cards) {\n  show(card);\n}"
    },
    codeLabel: "Code",
    frage: { de: "Was macht dieser Code?", en: "What does this code do?" },
    optionen: {
      de: [
        "Er wiederholt etwas: Für jede Karte in der Liste wird zeige aufgerufen",
        "Er zeigt nur die erste Karte und wartet dann auf einen Klick für die nächste",
        "Er prüft, ob es Karten gibt, und zeigt sie nur, wenn die Liste nicht leer ist",
        "Er sortiert die Karten der Reihe nach und speichert die neue Reihenfolge"
      ],
      en: [
        "It repeats something: show is called for every card in the list",
        "It shows only the first card and then waits for a click for the next one",
        "It checks whether there are cards and shows them only if the list is not empty",
        "It sorts the cards in order and saves the new order"
      ]
    },
    richtig: 0,
    erklaerung: {
      de: "Das ist eine Schleife. Sie erledigt dieselbe Arbeit für jedes Element einer Liste, egal ob es 3 oder 3000 Karten sind.",
      en: "This is a loop. It does the same work for every item in a list, whether there are 3 or 3,000 cards."
    }
  },
  {
    id: "code-array", thema: "code", typ: "bedeutung",
    code: { de: "const farben = [\"rot\", \"grün\", \"blau\"];", en: "const colors = [\"red\", \"green\", \"blue\"];" },
    codeLabel: "Code",
    frage: { de: "Was steht hier in den eckigen Klammern?", en: "What is inside the square brackets here?" },
    optionen: {
      de: [
        "Ein Array: eine geordnete Liste von Werten",
        "Drei einzelne Variablen in einer Zeile",
        "Ein Objekt: drei Werte, jeder mit einem Namen",
        "Ein Kommentar mit drei Lieblingsfarben"
      ],
      en: [
        "An array: an ordered list of values",
        "Three separate variables on one line",
        "An object: three values, each with a name",
        "A comment with three favorite colors"
      ]
    },
    richtig: 0,
    warum: {
      2: {
        de: "Ein Objekt hat geschweifte Klammern und Namen, z. B. { name: \"Ada\" }.",
        en: "An object has curly braces and names, e.g. { name: \"Ada\" }."
      }
    },
    erklaerung: {
      de: "Ein Array (in Python: Liste) hält mehrere Werte in fester Reihenfolge. Gezählt wird ab 0: farben[0] ist „rot“.",
      en: "An array (in Python: list) holds several values in a fixed order. Counting starts at 0: colors[0] is “red”."
    }
  },
  {
    id: "code-objekt", thema: "code", typ: "bedeutung",
    code: { de: "const nutzer = { name: \"Ada\", alter: 36 };", en: "const user = { name: \"Ada\", age: 36 };" },
    codeLabel: "Code",
    frage: { de: "Was ist `nutzer`?", en: "What is `user`?" },
    optionen: {
      de: [
        "Ein Objekt: zusammengehörige Werte, jeder mit einem Namen",
        "Eine Liste: zwei Werte in fester Reihenfolge, ohne eigene Namen",
        "Eine Funktion, die einen neuen Nutzer anlegt, wenn man sie aufruft",
        "Eine kleine Datenbank, die Nutzer dauerhaft auf der Festplatte speichert"
      ],
      en: [
        "An object: values that belong together, each with a name",
        "A list: two values in a fixed order, without names of their own",
        "A function that creates a new user when you call it",
        "A small database that permanently stores users on the hard drive"
      ]
    },
    richtig: 0,
    warum: {
      1: {
        de: "Eine Liste (Array) hat eckige Klammern. Hier hat jeder Wert einen Namen.",
        en: "A list (array) has square brackets. Here every value has a name."
      }
    },
    erklaerung: {
      de: "Ein Objekt (in Python: Dictionary) bündelt Eigenschaften. nutzer.name ergibt „Ada“. JSON-Dateien sehen fast genauso aus.",
      en: "An object (in Python: dictionary) bundles properties. user.name gives “Ada”. JSON files look almost the same."
    }
  },
  {
    id: "code-string", thema: "code", typ: "bedeutung",
    code: { de: "\"2\" + \"2\"   // ergibt \"22\"", en: "\"2\" + \"2\"   // gives \"22\"" },
    codeLabel: "Code",
    frage: {
      de: "Warum ergibt das in JavaScript „22“ statt 4?",
      en: "Why does this give “22” instead of 4 in JavaScript?"
    },
    optionen: {
      de: [
        "Die Anführungszeichen machen daraus Text, und Text wird aneinandergehängt",
        "JavaScript rechnet absichtlich ungenau, damit Programme schneller laufen",
        "Das Pluszeichen heißt in JavaScript immer „hintereinander schreiben“",
        "Das ist ein Tippfehler im Code, es müsste 2 * 2 heißen"
      ],
      en: [
        "The quotes turn it into text, and text gets joined together",
        "JavaScript calculates imprecisely on purpose, so programs run faster",
        "The plus sign in JavaScript always means “write one after the other”",
        "That is a typo in the code, it should say 2 * 2"
      ]
    },
    richtig: 0,
    warum: {
      2: {
        de: "Bei echten Zahlen rechnet + ganz normal: 2 + 2 ergibt 4. Nur Text wird aneinandergehängt.",
        en: "With real numbers, + does normal math: 2 + 2 gives 4. Only text gets joined together."
      }
    },
    erklaerung: {
      de: "Text heißt im Code String, Zahlen heißen Number. Werte aus Eingabefeldern sind oft Text und müssen erst in Zahlen umgewandelt werden.",
      en: "In code, text is called a string; numbers are a separate type called number. Values from input fields are often text and must be converted to numbers first."
    },
    prompt: {
      de: "„Die Summe zeigt 1020 statt 30. Werden die Eingaben als Text statt als Zahl behandelt?“",
      en: "“The total shows 1020 instead of 30. Are the inputs being treated as text instead of numbers?”"
    }
  },
  {
    id: "code-framework", thema: "code", typ: "bedeutung",
    frage: {
      de: "Was ist der Unterschied zwischen einer Bibliothek und einem Framework?",
      en: "What is the difference between a library and a framework?"
    },
    optionen: {
      de: [
        "Eine Bibliothek benutzt du bei Bedarf, ein Framework gibt das Gerüst für deinen Code vor",
        "Bibliotheken sind kostenlos und frei, Frameworks kosten meistens Geld",
        "Eine Bibliothek ist für kleine Projekte, ein Framework nur für große Firmen",
        "Kein echter Unterschied, das sind zwei Namen für dasselbe"
      ],
      en: [
        "You use a library when needed; a framework sets the structure of your code",
        "Libraries are free and open for everyone, frameworks usually cost money",
        "A library is meant for small hobby projects, a framework only for big companies",
        "No real difference, they are two names for the same thing"
      ]
    },
    richtig: 0,
    erklaerung: {
      de: "Eine Bibliothek ist wie ein Akkuschrauber, den du holst, wenn du ihn brauchst. Ein Framework ist wie ein Fertighaus-Bausatz, der vorgibt, wo was hinkommt. Beispiele für Frameworks: Next.js, Django.",
      en: "A library is like a cordless drill that you grab when you need it. A framework is like a prefab house kit that dictates what goes where. Examples of frameworks: Next.js, Django."
    },
    prompt: {
      de: "„Brauchen wir dafür wirklich ein Framework, oder reicht einfaches HTML und JavaScript?“",
      en: "“Do we really need a framework for this, or is plain HTML and JavaScript enough?”"
    }
  },
  {
    id: "code-datenbank", thema: "code", typ: "bedeutung",
    frage: { de: "Wann braucht eine App eine Datenbank?", en: "When does an app need a database?" },
    optionen: {
      de: [
        "Wenn viele Daten dauerhaft gespeichert, durchsucht und geteilt werden sollen",
        "Immer, denn ohne Datenbank kann sich eine App überhaupt nichts merken, nicht mal Einstellungen",
        "Sobald die App Bilder oder Videos anzeigen soll, egal wie viele",
        "Erst wenn die App im Internet veröffentlicht wird, vorher nie"
      ],
      en: [
        "When lots of data should be stored permanently, searched and shared",
        "Always, because without a database an app can't remember anything at all, not even settings",
        "As soon as the app should show images or videos, no matter how many",
        "Only once the app is published on the internet, never before"
      ]
    },
    richtig: 0,
    warum: {
      1: {
        de: "Kleine Apps merken sich Dinge auch ohne Datenbank, z. B. im localStorage oder in einer Datei.",
        en: "Small apps can remember things without a database too, e.g. in localStorage or in a file."
      }
    },
    erklaerung: {
      de: "Eine Datenbank speichert viele Daten und macht sie schnell durchsuchbar. Für eine kleine App nur für dich reichen oft localStorage oder eine Datei. SQLite ist eine einfache Datenbank in einer einzigen Datei.",
      en: "A database stores lots of data and makes it fast to search. For a small app just for you, localStorage or a file is often enough. SQLite is a simple database in a single file."
    },
    prompt: {
      de: "„Reicht für meine App localStorage, oder brauchen wir eine Datenbank? Was wäre am einfachsten?“",
      en: "“Is localStorage enough for my app, or do we need a database? What would be simplest?”"
    }
  },
  {
    id: "code-test", thema: "code", typ: "bedeutung",
    frage: { de: "Was ist ein automatischer Test?", en: "What is an automated test?" },
    optionen: {
      de: [
        "Ein kleines Programm, das prüft, ob dein Code das Richtige tut",
        "Ein Mensch, der die App vor der Veröffentlichung ausprobiert",
        "Ein Virenscan, der den Code nach Schadsoftware durchsucht",
        "Eine Messung, wie schnell die App auf deinem Rechner lädt"
      ],
      en: [
        "A small program that checks if your code does what it should",
        "A person who tries out the app by hand before it gets released",
        "A virus scan that searches the code for malware",
        "A measurement of how fast the app loads on your computer"
      ]
    },
    richtig: 0,
    erklaerung: {
      de: "Ein Test sagt z. B.: „Wenn ich 2 und 3 addiere, muss 5 rauskommen.“ Ändert Claude später etwas, zeigen die Tests sofort, ob dabei etwas kaputtging.",
      en: "A test says, for example: “If I add 2 and 3, the result must be 5.” If Claude changes something later, the tests show right away whether something broke."
    },
    prompt: {
      de: "„Schreib Tests für die Preisberechnung und lass sie nach jeder Änderung laufen.“",
      en: "“Write tests for the price calculation and run them after every change.”"
    }
  },
  {
    id: "code-kommentar", thema: "code", typ: "bedeutung",
    code: {
      de: "// Rabatt nur für Stammkunden\nif (stammkunde) preis = preis * 0.9;",
      en: "// Discount only for regular customers\nif (regularCustomer) price = price * 0.9;"
    },
    codeLabel: "Code",
    frage: {
      de: "Was ist die erste Zeile mit den zwei Schrägstrichen?",
      en: "What is the first line with the two slashes?"
    },
    optionen: {
      de: [
        "Ein Kommentar: eine Notiz für Menschen, die der Computer ignoriert",
        "Ein Befehl, der den Rabatt nur für Stammkunden einschaltet",
        "Eine Fehlermeldung, die beim Ausführen der nächsten Zeile erscheint",
        "Eine Überschrift, die auf der Webseite über dem Preis angezeigt wird"
      ],
      en: [
        "A comment: a note for humans that the computer ignores",
        "A command that turns on the discount only for regular customers",
        "An error message that appears when the next line runs",
        "A heading that is shown above the price on the web page"
      ]
    },
    richtig: 0,
    erklaerung: {
      de: "In JavaScript beginnen Kommentare mit //, in Python und Bash mit #. Gute Kommentare erklären, warum der Code etwas tut.",
      en: "In JavaScript, comments start with //, in Python and Bash with #. Good comments explain why the code does something."
    },
    prompt: {
      de: "„Kommentier die schwierigen Stellen kurz auf Deutsch.“",
      en: "“Add short comments to the tricky parts, in plain English.”"
    }
  },
  {
    id: "code-upgrade-erklaeren", thema: "code", typ: "upgrade",
    frage: {
      de: "Du willst verstehen, was eine Stelle im Code macht. Welcher Prompt hilft am meisten?",
      en: "You want to understand what a part of the code does. Which prompt helps the most?"
    },
    optionen: {
      de: [
        "Was macht der Code?",
        "Erklär mir die Funktion berechnePreis in app.js Schritt für Schritt, ohne Fachwörter. Was kommt rein, was kommt raus?",
        "Ich verstehe den Code überhaupt nicht. Kannst du mir bitte alles erklären, was da passiert?"
      ],
      en: [
        "What does the code do?",
        "Explain the calculatePrice function in app.js step by step, without jargon. What goes in, what comes out?",
        "I don't understand this code at all. Could you please explain to me everything that is going on in there?"
      ]
    },
    richtig: 1,
    warum: {
      0: {
        de: "Welcher Code? Ein Projekt hat schnell Tausende Zeilen.",
        en: "Which code? A project quickly has thousands of lines."
      },
      2: {
        de: "„Alles“ heißt: Tausende Zeilen. Besser eine Stelle nach der anderen.",
        en: "“Everything” means thousands of lines. Better one part at a time."
      }
    },
    erklaerung: {
      de: "Die Stelle genau benennen und sagen, wie du die Erklärung willst. Die Frage „Was kommt rein, was kommt raus?“ passt bei fast jeder Funktion.",
      en: "Name the exact spot and say how you want the explanation. The question “What goes in, what comes out?” fits almost every function."
    },
    prompt: {
      de: "Formel: „Erklär mir [Stelle] Schritt für Schritt, ohne Fachwörter. Was kommt rein, was kommt raus?“",
      en: "Formula: “Explain [part] to me step by step, without jargon. What goes in, what comes out?”"
    }
  },
  {
    id: "code-return", thema: "code", typ: "bedeutung",
    code: {
      de: "function mehrwertsteuer(preis) {\n  return preis * 0.19;\n}",
      en: "function salesTax(price) {\n  return price * 0.19;\n}"
    },
    codeLabel: "Code",
    frage: { de: "Was macht `return` in dieser Funktion?", en: "What does `return` do in this function?" },
    optionen: {
      de: [
        "Es gibt das Ergebnis an die Stelle zurück, die die Funktion aufgerufen hat",
        "Es zeigt das Ergebnis der Rechnung direkt auf dem Bildschirm an",
        "Es startet die Funktion immer wieder von vorn, bis das Ergebnis stimmt",
        "Es speichert das Ergebnis dauerhaft in einer Datei auf der Festplatte"
      ],
      en: [
        "It hands the result back to the place that called the function",
        "It shows the result of the calculation directly on the screen",
        "It restarts the function over and over until the result is right",
        "It saves the result permanently in a file on the hard drive"
      ]
    },
    richtig: 0,
    warum: {
      1: {
        de: "Anzeigen würde `console.log` oder eine Ausgabe auf der Seite. `return` gibt nur zurück.",
        en: "Showing it would be `console.log` or output on the page. `return` only hands it back."
      },
      2: {
        de: "Wiederholen würde eine Schleife. return beendet die Funktion und liefert den Wert.",
        en: "Repeating would be a loop. return ends the function and delivers the value."
      },
      3: {
        de: "Gespeichert wird nichts. Wer die Funktion aufgerufen hat, entscheidet, was mit dem Wert passiert.",
        en: "Nothing is saved. Whoever called the function decides what happens with the value."
      }
    },
    erklaerung: {
      de: "Eine Funktion ist wie ein Automat: Du wirfst einen Wert hinein (`preis`), und `return` liefert das Ergebnis zurück. Danach ist die Funktion zu Ende.",
      en: "A function is like a vending machine: you put a value in (`price`), and `return` delivers the result. After that, the function is over."
    },
    prompt: {
      de: "„Gib das Ergebnis mit return zurück, statt es direkt auf der Seite auszugeben.“",
      en: "“Return the result with return instead of printing it directly on the page.”"
    }
  },
  {
    id: "code-console-log", thema: "code", typ: "bedeutung",
    code: { de: "console.log('karten:', karten);", en: "console.log('cards:', cards);" },
    codeLabel: "Code",
    frage: { de: "Wozu schreibt man das in den Code?", en: "Why do people put this in the code?" },
    optionen: {
      de: [
        "Um einen Wert in der Browser-Konsole anzuzeigen und nachzusehen",
        "Um den Wert dauerhaft in einer Log-Datei auf dem Server zu speichern",
        "Um den Wert für Besucher sichtbar auf der Seite einzublenden",
        "Um den Fehler zu beheben, der genau an dieser Stelle auftritt"
      ],
      en: [
        "To show a value in the browser console so you can check it",
        "To store the value permanently in a log file on the web server",
        "To display the value on the page where visitors can see it",
        "To fix the error that occurs at exactly this spot"
      ]
    },
    richtig: 0,
    warum: {
      1: {
        de: "Eine Datei entsteht nicht. Die Ausgabe erscheint nur in der Konsole des Browsers (F12).",
        en: "No file is created. The output only appears in the browser's console (F12)."
      },
      2: {
        de: "Besucher sehen das nicht, nur wer die Entwicklertools öffnet.",
        en: "Visitors don't see it, only people who open the developer tools."
      },
      3: {
        de: "Das Anzeigen behebt nichts. Es hilft nur, die Ursache zu finden.",
        en: "Showing it fixes nothing. It only helps find the cause."
      }
    },
    erklaerung: {
      de: "`console.log` ist das Stethoskop des Programmierers: Du siehst, was an einer Stelle gerade in einer Variable steckt. Claude nutzt es oft, um Fehler einzukreisen. Danach wieder entfernen.",
      en: "`console.log` is the programmer's stethoscope: you see what is inside a variable at a given spot. Claude often uses it to narrow down bugs. Remove it again afterwards."
    },
    prompt: {
      de: "„Gib mit console.log aus, was in karten steht, bevor die Schleife startet, und sag mir, was du siehst.“",
      en: "“Use console.log to print what is in cards before the loop starts, and tell me what you see.”"
    }
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
  },
  {
    id: "code-l-aufruf", thema: "code", form: "luecke",
    code: {
      de: "function heute() {\n  return \"Montag\";\n}\nconst tag = heute___;",
      en: "function today() {\n  return \"Monday\";\n}\nconst day = today___;"
    },
    codeLabel: "Code",
    frage: {
      de: "Die Funktion soll jetzt laufen, damit in `tag` der Text „Montag“ landet. Welche Klammern fehlen?",
      en: "The function should run now so that `day` ends up holding the text “Monday”. Which brackets are missing?"
    },
    optionen: ["()", "[]", "{}", "<>"],
    richtig: 0,
    warum: {
      1: {
        de: "Eckige Klammern holen ein Element aus einer Liste, z. B. `farben[0]`.",
        en: "Square brackets fetch an item from a list, as in `colors[0]`."
      },
      2: {
        de: "Geschweifte Klammern umschließen einen Block oder ein Objekt.",
        en: "Curly braces wrap a block or an object."
      },
      3: {
        de: "Spitze Klammern gehören zu HTML-Tags wie `<p>`.",
        en: "Angle brackets belong to HTML tags like `<p>`."
      }
    },
    erklaerung: {
      de: "Runde Klammern hinter dem Namen heißen „jetzt ausführen“. Ohne sie steckt in `tag` die Funktion selbst und nicht ihr Ergebnis.",
      en: "Parentheses after the name mean “run it now”. Without them, `day` holds the function itself and not its result."
    }
  },
  {
    id: "code-l-let", thema: "code", form: "luecke",
    code: { de: "___ punkte = 0;\npunkte = punkte + 10;", en: "___ points = 0;\npoints = points + 10;" },
    codeLabel: "Code",
    frage: {
      de: "Der Punktestand ändert sich in Zeile 2. Welches Wort muss deshalb am Anfang stehen?",
      en: "The score changes in line 2. Which word has to come first because of that?"
    },
    optionen: ["let", "const", "function", "return"],
    richtig: 0,
    warum: {
      1: {
        de: "Bei `const` darf der Variable später nichts Neues zugewiesen werden. Zeile 2 würde mit einem Fehler abbrechen.",
        en: "With `const`, nothing new may be assigned to the variable later. Line 2 would stop with an error."
      },
      2: {
        de: "`function` legt eine Funktion an, also einen Arbeitsschritt, keinen Wert.",
        en: "`function` creates a function, a piece of work, not a value."
      },
      3: {
        de: "`return` gibt am Ende einer Funktion ein Ergebnis zurück.",
        en: "`return` hands back a result at the end of a function."
      }
    },
    erklaerung: {
      de: "`let` erlaubt, der Variable später einen neuen Wert zu geben, `const` nicht. Die Meldung „Assignment to constant variable“ heißt: Hier wurde ein `const` geändert.",
      en: "`let` allows giving the variable a new value later, `const` does not. The message “Assignment to constant variable” means a `const` was changed here."
    },
    prompt: {
      de: "„Nimm const für alles, was sich nicht ändert, und let nur dort, wo es nötig ist.“",
      en: "“Use const for everything that does not change, and let only where it is needed.”"
    }
  },
  {
    id: "code-m-strings", thema: "code", form: "mehrfach",
    frage: {
      de: "Welche dieser Werte sind in JavaScript Text, also Strings?",
      en: "Which of these values are text, that is strings, in JavaScript?"
    },
    optionen: {
      de: ["`\"42\"`", "`'Hallo Welt'`", "`42`", "`true`", "`\"true\"`"],
      en: ["`\"42\"`", "`'Hello world'`", "`42`", "`true`", "`\"true\"`"]
    },
    richtige: [0, 1, 4],
    erklaerung: {
      de: "Anführungszeichen machen jeden Inhalt zu Text, egal ob einfache oder doppelte. Ohne sie ist `42` eine Zahl und `true` ein Wahrheitswert.",
      en: "Quotes turn any content into text, single or double. Without them, `42` is a number and `true` is a true/false value."
    }
  },
  {
    id: "code-z-zuweisung", thema: "code", form: "zeile",
    code: {
      de: "let rolle = \"gast\";\nif (rolle = \"admin\") {\n  zeige(\"Alles löschen\");\n}",
      en: "let role = \"guest\";\nif (role = \"admin\") {\n  show(\"Delete everything\");\n}"
    },
    codeLabel: "Code",
    frage: {
      de: "Auch Gäste sehen den Knopf „Alles löschen“, der nur für Admins gedacht ist. Welche Zeile enthält den Fehler?",
      en: "Guests also see the “Delete everything” button that is meant for admins only. Which line contains the mistake?"
    },
    zeile: 1,
    erklaerung: {
      de: "Mit einem einzelnen `=` wird `rolle` auf „admin“ gesetzt statt verglichen, dadurch gilt die Bedingung immer. Vergleichen heißt `===`.",
      en: "A single `=` sets `role` to “admin” instead of comparing, so the condition is always true. Comparing is `===`."
    },
    prompt: {
      de: "„Gäste sehen den Admin-Knopf. Prüf die Bedingung: Steht dort = statt ===?“",
      en: "“Guests see the admin button. Check the condition: does it say = instead of ===?”"
    }
  }
);
