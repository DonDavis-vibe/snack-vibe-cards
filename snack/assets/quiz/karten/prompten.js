// Snack: Grundkarten zum Thema „Gut prompten“ / core cards for this topic.
// Card format: see the header of eigene-karten.js. A text is a plain string or a pair { de: "…", en: "…" }.
(window.SNACK_KARTEN = window.SNACK_KARTEN || []).push(
  {
    id: "pr-bug-report", thema: "prompten", typ: "upgrade",
    frage: {
      de: "Ein Button tut nichts. Welche Nachricht führt am schnellsten zur Lösung?",
      en: "A button does nothing. Which message gets you to a fix fastest?"
    },
    optionen: {
      de: [
        "Der Button geht nicht.",
        "Wenn ich auf „Speichern“ klicke, passiert nichts. Erwartet hätte ich den Toast „Gespeichert“. In der Browser-Konsole (F12) steht: (Fehlertext)",
        "Bitte schnell helfen, das ist dringend!! Beim Speichern funktioniert seit vorhin irgendwas nicht mehr richtig."
      ],
      en: [
        "The button doesn’t work.",
        "When I click “Save,” nothing happens. I expected the “Saved” toast. The browser console (F12) says: (error text)",
        "Please help quickly, this is urgent!! Since a little while ago, something about saving just doesn’t work right anymore."
      ]
    },
    richtig: 1,
    warum: {
      0: {
        de: "Welcher Button? Was sollte passieren? Claude muss raten.",
        en: "Which button? What should have happened? Claude has to guess."
      },
      2: {
        de: "Viel Dringlichkeit, aber kaum Infos: Was hast du geklickt, was sollte passieren, was steht in der Konsole?",
        en: "Lots of urgency, but hardly any info: What did you click, what should have happened, what does the console say?"
      }
    },
    erklaerung: {
      de: "Ein guter Bug-Report sagt: Was hast du gemacht? Was ist passiert? Was hast du erwartet? Dazu die Fehlermeldung, falls es eine gibt.",
      en: "A good bug report says: What did you do? What happened? What did you expect? Plus the error message, if there is one."
    },
    prompt: {
      de: "Formel: „Wenn ich [Aktion], passiert [Ist]. Erwartet: [Soll]. Fehler: [Text].“",
      en: "Formula: “When I [action], [what happens]. Expected: [what should happen]. Error: [text].”"
    }
  },
  {
    id: "pr-error-text", thema: "prompten", typ: "upgrade",
    frage: {
      de: "Im Terminal kommt ein Fehler. Was ist die beste Nachricht an Claude?",
      en: "An error shows up in the terminal. What is the best message to Claude?"
    },
    optionen: {
      de: [
        "Geht nicht.",
        "Ich hab npm run dev im Ordner quiz-app ausgeführt, das kam raus: (kompletter Fehlertext)",
        "Da kommt irgendein roter Fehler mit npm, ziemlich lang und kompliziert. Ich glaube, irgendwas mit einem Modul oder so, kannst du mal schauen?"
      ],
      en: [
        "Doesn’t work.",
        "I ran npm run dev in the quiz-app folder, and this came out: (full error text)",
        "There’s some red error with npm, pretty long and complicated. I think it’s something about a module or so, can you take a look?"
      ]
    },
    richtig: 1,
    warum: {
      0: {
        de: "Claude sieht dein Terminal nicht und weiß nicht, was du gemacht hast.",
        en: "Claude cannot see your terminal and does not know what you did."
      },
      2: {
        de: "„Irgendein Fehler“ reicht nicht. Der genaue Text ist der Schlüssel.",
        en: "“Some error” is not enough. The exact text is the key."
      }
    },
    erklaerung: {
      de: "Befehl, Ordner und kompletter Fehlertext: So sieht Claude genau, was du siehst. Lieber zu viel kopieren als zu wenig.",
      en: "Command, folder and full error text: that way Claude sees exactly what you see. Better to copy too much than too little."
    },
    prompt: {
      de: "Formel: „Ich hab [Befehl] in [Ordner] ausgeführt, das kam raus: [Fehlertext].“",
      en: "Formula: “I ran [command] in [folder], and this came out: [error text].”"
    }
  },
  {
    id: "pr-screenshot", thema: "prompten", typ: "bedeutung",
    frage: { de: "Wann ist ein Screenshot besser als Text?", en: "When is a screenshot better than text?" },
    optionen: {
      de: [
        "Bei Layout-Problemen: etwas überlappt, ist verschoben oder sieht falsch aus",
        "Bei Fehlermeldungen im Terminal, weil man dann auch die Farben sieht",
        "Bei langem Code, weil ein Bild weniger Platz im Chat braucht als Text",
        "Immer, denn Bilder versteht Claude grundsätzlich besser als Text"
      ],
      en: [
        "For layout problems: something overlaps, is out of place or looks wrong",
        "For error messages in the terminal, because then you can see the colors too",
        "For long code, because an image takes up less space in the chat than text",
        "Always, because Claude generally understands images better than text"
      ]
    },
    richtig: 0,
    warum: {
      1: {
        de: "Fehlertext lieber kopieren. Claude kann jedes Zeichen genau lesen und danach suchen.",
        en: "Better to copy error text. Claude can read every character exactly and search for it."
      }
    },
    erklaerung: {
      de: "Optik zeigst du am besten als Bild, gern mit Pfeil oder Kreis auf der Stelle. Fehlermeldungen und Code lieber als Text kopieren.",
      en: "How something looks is best shown as an image, ideally with an arrow or circle on the spot. Error messages and code are better copied as text."
    },
    prompt: {
      de: "„Siehe Screenshot: Im roten Kreis überlappt die Sidebar den Inhalt.“",
      en: "“See screenshot: in the red circle, the sidebar overlaps the content.”"
    }
  },
  {
    id: "pr-one-thing", thema: "prompten", typ: "upgrade",
    frage: { de: "Welcher Prompt funktioniert meistens am besten?", en: "Which prompt usually works best?" },
    optionen: {
      de: [
        "Lass uns erst nur das Login bauen. Wenn das läuft, kommt das Profil.",
        "Bau Login, Profil, Dunkelmodus, Datenbank, Export und ein neues Design.",
        "Mach mal, du weißt schon, was ich meine."
      ],
      en: [
        "Let’s build just the login first. Once that works, the profile is next.",
        "Build the login, profile, dark mode, database, export and a whole new design.",
        "Just do it, you know what I mean."
      ]
    },
    richtig: 0,
    warum: {
      1: {
        de: "Sechs Dinge auf einmal: Wenn etwas kaputt ist, weiß niemand, welches es war.",
        en: "Six things at once: if something breaks, nobody knows which one it was."
      },
      2: { de: "Claude kann keine Gedanken lesen.", en: "Claude cannot read minds." }
    },
    erklaerung: {
      de: "Kleine Schritte lassen sich einzeln testen. So findest du Probleme sofort statt am Ende.",
      en: "Small steps can be tested one at a time. That way you find problems right away instead of at the end."
    },
    prompt: {
      de: "„Lass uns erst nur das Login bauen. Den Rest machen wir danach.“",
      en: "“Let’s build just the login first. We’ll do the rest afterwards.”"
    }
  },
  {
    id: "pr-acceptance", thema: "prompten", typ: "upgrade",
    frage: {
      de: "Du willst eine Suchfunktion. Welcher Prompt sagt Claude, wann es fertig ist?",
      en: "You want a search feature. Which prompt tells Claude when it is done?"
    },
    optionen: {
      de: [
        "Bau eine Suche.",
        "Bau eine Suche über der Projektliste. Fertig ist es, wenn: Tippen filtert sofort, Groß-/Kleinschreibung ist egal, bei 0 Treffern steht „Nichts gefunden“.",
        "Bau eine richtig gute, schnelle und moderne Suche, so wie bei Google, die immer genau das findet, was man sucht."
      ],
      en: [
        "Build a search.",
        "Build a search above the project list. It’s done when: typing filters instantly, case doesn’t matter, 0 results shows “Nothing found.”",
        "Build a really, really good search that is fast and modern, like the one Google has, and that always finds exactly what you’re looking for."
      ]
    },
    richtig: 1,
    warum: {
      0: {
        de: "Wo soll die Suche hin, und was soll sie können?",
        en: "Where should the search go, and what should it be able to do?"
      },
      2: {
        de: "„Wie Google“ ist riesig. Claude weiß nicht, was du davon wirklich brauchst.",
        en: "“Like Google” is huge. Claude does not know which part of that you really need."
      }
    },
    erklaerung: {
      de: "Akzeptanzkriterien beschreiben, woran man erkennt, dass etwas fertig ist. Claude kann sie dann auch selbst testen.",
      en: "Acceptance criteria describe how you can tell that something is done. Claude can then test them itself, too."
    },
    prompt: { de: "Formel: „Fertig ist es, wenn: [1], [2], [3].“", en: "Formula: “It’s done when: [1], [2], [3].”" }
  },
  {
    id: "pr-plan-first", thema: "prompten", typ: "bedeutung",
    frage: {
      de: "Vor einer großen Änderung: Was hilft, bevor Claude losschreibt?",
      en: "Before a big change: what helps before Claude starts writing?"
    },
    optionen: {
      de: [
        "Claude erst einen Plan machen lassen und ihn lesen",
        "Sofort loslegen lassen, das spart Zeit",
        "Mehrere Sessions gleichzeitig dasselbe machen lassen",
        "Den Prompt in Großbuchstaben schreiben"
      ],
      en: [
        "Have Claude make a plan first, and read it",
        "Let it start right away, that saves time",
        "Have several sessions do the same thing at once",
        "Write the prompt in capital letters"
      ]
    },
    richtig: 0,
    erklaerung: {
      de: "Ein Plan kostet eine Minute und zeigt Missverständnisse, bevor 500 Zeilen falscher Code entstehen.",
      en: "A plan takes a minute and reveals misunderstandings before 500 lines of wrong code get written."
    },
    prompt: {
      de: "„Mach erst einen Plan und zeig ihn mir, bevor du Code änderst.“",
      en: "“Make a plan first and show it to me before you change any code.”"
    }
  },
  {
    id: "pr-context", thema: "prompten", typ: "upgrade",
    frage: {
      de: "Nach einer Pause startest du eine neue Session. Welcher Einstieg ist am besten?",
      en: "After a break, you start a new session. Which opening is best?"
    },
    optionen: {
      de: [
        "Mach weiter.",
        "Wir bauen das Quiz in quiz-app/. Stand: Runden laufen. Als Nächstes kommt die Themenauswahl. Lies zuerst tasks/todo.md.",
        "Hallo! Wir haben ja gestern schon eine ganze Menge zusammen gemacht. Mach einfach da weiter, wo wir aufgehört haben, du weißt schon."
      ],
      en: [
        "Keep going.",
        "We’re building the quiz in quiz-app/. Status: rounds work. Next up is the topic picker. Read tasks/todo.md first.",
        "Hello! We already got a whole lot done together yesterday. Just pick up right where we left off, you know what I mean."
      ]
    },
    richtig: 1,
    warum: {
      0: {
        de: "Eine neue Session weiß nicht, womit sie weitermachen soll.",
        en: "A new session does not know what to keep going with."
      },
      2: {
        de: "Freundlich, aber eine neue Session kennt das Gespräch von gestern nicht. Ordner, Stand und nächster Schritt fehlen.",
        en: "Friendly, but a new session does not know yesterday’s conversation. Folder, status and next step are missing."
      }
    },
    erklaerung: {
      de: "Eine neue Session kennt das letzte Gespräch nicht, nur CLAUDE.md und Memory. Ordner, Stand und nächster Schritt ersparen viel Raten.",
      en: "A new session does not know the last conversation, only CLAUDE.md and memory. Folder, status and next step save a lot of guessing."
    },
    prompt: {
      de: "Formel: „Projekt: [Ordner]. Stand: [was geht]. Nächster Schritt: [was].“",
      en: "Formula: “Project: [folder]. Status: [what works]. Next step: [what].”"
    }
  },
  {
    id: "pr-explain", thema: "prompten", typ: "bedeutung",
    frage: {
      de: "Claude schlägt etwas vor, das du nicht verstehst. Was tust du?",
      en: "Claude suggests something you do not understand. What do you do?"
    },
    optionen: {
      de: [
        "Nachfragen, bis du es verstehst",
        "Einfach zustimmen, wird schon passen",
        "Die Session schließen",
        "Den Vorschlag ignorieren"
      ],
      en: [
        "Ask questions until you get it",
        "Just agree, it will probably be fine",
        "Close the session",
        "Ignore the suggestion"
      ]
    },
    richtig: 0,
    erklaerung: {
      de: "Du bist der Chef im Projekt. Verstehen gehört zum Job, und Claude erklärt gern, auch mehrmals.",
      en: "You are the boss of the project. Understanding is part of the job, and Claude is happy to explain, even several times."
    },
    prompt: {
      de: "„Erklär mir das in zwei Sätzen, ohne Fachbegriffe. Was wäre die Alternative?“",
      en: "“Explain that to me in two sentences, without jargon. What would the alternative be?”"
    }
  },
  {
    id: "pr-verify", thema: "prompten", typ: "upgrade",
    frage: {
      de: "Claude sagt „Fertig!“. Was ist der beste nächste Prompt?",
      en: "Claude says “Done!” What is the best next prompt?"
    },
    optionen: {
      de: [
        "Danke!",
        "Zeig mir, wie du getestet hast, dass es funktioniert.",
        "Super, danke! Dann bauen wir direkt als Nächstes den Export und den Dunkelmodus."
      ],
      en: [
        "Thanks!",
        "Show me how you tested that it works.",
        "Great, thanks! Then let’s go straight on and build the export and dark mode next."
      ]
    },
    richtig: 1,
    warum: {
      0: {
        de: "Höflich, aber „fertig“ heißt nicht automatisch „getestet“.",
        en: "Polite, but “done” does not automatically mean “tested.”"
      },
      2: {
        de: "Erst prüfen, dann weiterbauen. Sonst stapeln sich Fehler.",
        en: "Check first, then keep building. Otherwise bugs pile up."
      }
    },
    erklaerung: {
      de: "„Fertig“ heißt nicht „getestet“. Lass dir zeigen, dass es läuft, oder probier es selbst kurz aus.",
      en: "“Done” does not mean “tested.” Have Claude show you that it runs, or quickly try it yourself."
    },
    prompt: {
      de: "„Zeig mir, wie du getestet hast, dass es funktioniert.“",
      en: "“Show me how you tested that it works.”"
    }
  },
  {
    id: "pr-grenzen", thema: "prompten", typ: "upgrade",
    frage: {
      de: "Claude soll den Header umgestalten, aber deine Navigation funktioniert gerade endlich. Welcher Prompt schützt sie?",
      en: "Claude is supposed to redesign the header, but your navigation is finally working. Which prompt protects it?"
    },
    optionen: {
      de: [
        "Mach den Header neu.",
        "Gestalte den Header neu: dunkler Hintergrund, Logo links. Ändere nur header.css, fass die Navigation in nav.js nicht an.",
        "Mach den Header neu und moderner, aber pass gut auf, dass nichts kaputtgeht, vor allem nicht die Navigation."
      ],
      en: [
        "Redo the header.",
        "Redesign the header: dark background, logo on the left. Only change header.css, don’t touch the navigation in nav.js.",
        "Redo the header and make it more modern, but please be really careful that nothing breaks, especially not the navigation."
      ]
    },
    richtig: 1,
    warum: {
      0: {
        de: "Claude könnte nebenbei auch die Navigation „verbessern“.",
        en: "Claude might also “improve” the navigation along the way."
      },
      2: {
        de: "„Pass auf“ ist ein Wunsch, keine klare Grenze. Und wie der neue Header aussehen soll, steht auch nicht drin.",
        en: "“Be careful” is a wish, not a clear limit. And it does not say what the new header should look like either."
      }
    },
    erklaerung: {
      de: "Sag auch, was nicht passieren soll. Grenzen wie „nur diese Datei“ verhindern, dass Claude nebenbei andere Dinge umbaut.",
      en: "Also say what should not happen. Limits like “only this file” keep Claude from rebuilding other things along the way."
    },
    prompt: {
      de: "Formel: „Ändere nur [Datei]. Fass [Bereich] nicht an.“",
      en: "Formula: “Only change [file]. Don’t touch [area].”"
    }
  },
  {
    id: "pr-nachsteuern", thema: "prompten", typ: "upgrade",
    frage: {
      de: "Claude hat eine Seite gebaut. Fast perfekt, nur der Header ist zu dunkel. Was schreibst du?",
      en: "Claude built a page. Almost perfect, only the header is too dark. What do you write?"
    },
    optionen: {
      de: [
        "Nee, mach nochmal ganz neu.",
        "Gut so! Nur der Header soll hellgrau statt schwarz sein, der Rest bleibt.",
        "Hm, irgendwie gefällt mir das noch nicht so richtig. Kannst du es noch mal ein bisschen anders machen?"
      ],
      en: [
        "Nah, start over from scratch.",
        "Looks good! Only the header should be light gray instead of black, the rest stays.",
        "Hmm, somehow I don’t really like it that much yet. Can you do it again, just a little bit differently?"
      ]
    },
    richtig: 1,
    warum: {
      0: {
        de: "Dann ist auch das Gute weg, und das Ergebnis wird ganz anders.",
        en: "Then the good parts are gone too, and the result will be completely different."
      },
      2: {
        de: "Was genau? Claude weiß nicht, was es ändern soll.",
        en: "What exactly? Claude does not know what to change."
      }
    },
    erklaerung: {
      de: "Kleine, gezielte Korrekturen sind schneller und sicherer als ein Neustart. Sag, was bleiben soll und was sich ändern soll.",
      en: "Small, targeted corrections are faster and safer than starting over. Say what should stay and what should change."
    },
    prompt: {
      de: "Formel: „Gut so! Nur [Element] soll [anders] sein, der Rest bleibt.“",
      en: "Formula: “Looks good! Only [element] should be [different], the rest stays.”"
    }
  },
  {
    id: "pr-rueckfragen", thema: "prompten", typ: "bedeutung",
    frage: {
      de: "Du hast eine Idee, aber sie ist noch unscharf. Was hilft am meisten?",
      en: "You have an idea, but it is still fuzzy. What helps most?"
    },
    optionen: {
      de: [
        "Claude bitten, dir erst ein paar Fragen zu stellen",
        "Einfach losbauen lassen, Claude wird schon verstehen",
        "Warten, bis die Idee bis ins Detail fertig ist",
        "Die Idee in einem einzigen kurzen Satz beschreiben"
      ],
      en: [
        "Ask Claude to ask you a few questions first",
        "Just let it start building, Claude will figure it out",
        "Wait until the idea is worked out down to the last detail",
        "Describe the idea in one single short sentence"
      ]
    },
    richtig: 0,
    erklaerung: {
      de: "Claude fragt dann gezielt nach dem Wichtigen: Für wen ist es, auf welchem Gerät, was genau soll es können? So wird aus einer Idee ein klarer Auftrag.",
      en: "Claude then asks specifically about what matters: Who is it for, on which device, what exactly should it do? That turns an idea into a clear task."
    },
    prompt: {
      de: "„Ich will eine App für meine Einkaufsliste. Stell mir erst 5 Fragen, bevor du etwas baust.“",
      en: "“I want an app for my shopping list. Ask me 5 questions first before you build anything.”"
    }
  },
  {
    id: "pr-im-kreis", thema: "prompten", typ: "bedeutung",
    frage: {
      de: "Claude versucht zum dritten Mal denselben Fix, und der Fehler bleibt. Was tust du?",
      en: "Claude tries the same fix for the third time, and the error is still there. What do you do?"
    },
    optionen: {
      de: [
        "Stoppen und Claude erst die Ursache erklären lassen, bevor es weiterprobiert",
        "Weiter „versuch’s nochmal“ schreiben, irgendwann klappt es schon",
        "Den Rechner neu starten, damit Claude einen frischen Kopf bekommt",
        "Aufgeben, das Problem ist für Claude offenbar zu schwer"
      ],
      en: [
        "Stop and have Claude explain the cause before it tries anything else",
        "Keep typing “try again,” it is bound to work at some point",
        "Restart your computer so that Claude can start again with a clear head",
        "Give up, the problem is apparently too hard for Claude"
      ]
    },
    richtig: 0,
    erklaerung: {
      de: "Wer im Kreis läuft, braucht einen Schritt zurück. Frag nach der Ursache und nach anderen Ansätzen. Oder fang eine frische Session mit einer kurzen Zusammenfassung an.",
      en: "When things go in circles, it is time for a step back. Ask about the cause and about other approaches. Or start a fresh session with a short summary."
    },
    prompt: {
      de: "„Stopp. Was ist die eigentliche Ursache? Nenn mir zwei andere Ansätze, bevor du weitermachst.“",
      en: "“Stop. What is the actual cause? Give me two other approaches before you continue.”"
    }
  },
  {
    id: "pr-halluzination", thema: "prompten", typ: "bedeutung",
    frage: {
      de: "Claude empfiehlt eine Funktion `quizHelper.mischen()`, die es in der Bibliothek gar nicht gibt. Was ist passiert?",
      en: "Claude recommends a function `quizHelper.shuffle()` that does not exist in the library at all. What happened?"
    },
    optionen: {
      de: [
        "Claude hat sich etwas ausgedacht, das plausibel klingt. Das nennt man Halluzination",
        "Die Bibliothek ist veraltet, und Claude hat nur eine alte Version erwischt",
        "Claudes Internetverbindung war schlecht, und die Antwort kam unvollständig an",
        "Du hast den Prompt zu kurz geschrieben, deshalb hat Claude einen Fehler gemacht"
      ],
      en: [
        "Claude made up something that sounds right. It’s called a hallucination",
        "The library is outdated, and Claude just happened to get an old version",
        "Claude’s internet connection was bad, so only part of the answer came through",
        "Your prompt was too short, and that is why Claude ended up making a mistake"
      ]
    },
    richtig: 0,
    warum: {
      1: {
        de: "Das kann vorkommen, ist aber etwas anderes. Hier gab es die Funktion nie.",
        en: "That can happen, but it is something else. Here, the function never existed."
      },
      2: {
        de: "Antworten werden nicht zerstückelt. Sie waren inhaltlich einfach falsch.",
        en: "Answers do not get chopped up. The content was simply wrong."
      },
      3: {
        de: "Auch mit perfektem Prompt kann Claude Dinge erfinden. Das liegt nicht an dir.",
        en: "Even with a perfect prompt, Claude can make things up. That is not your fault."
      }
    },
    erklaerung: {
      de: "Claude schreibt das, was am wahrscheinlichsten klingt, und klingt dabei oft sicher. Prüf Namen von Funktionen und Paketen kurz nach (Doku lesen, Code ausführen). Läuft es nicht, war es erfunden.",
      en: "Claude writes what sounds most likely, and often sounds confident doing it. Quickly check the names of functions and packages (read the docs, run the code). If it does not run, it was made up."
    },
    prompt: {
      de: "„Prüf, ob diese Funktion in der installierten Version der Bibliothek wirklich existiert. Schau in der Doku oder im Code nach.“",
      en: "“Check whether this function really exists in the installed version of the library. Look in the docs or in the code.”"
    }
  },
  {
    id: "pr-m-fehlersuche", thema: "prompten", form: "mehrfach",
    frage: { de: "Was macht einen Prompt für die Fehlersuche besser?", en: "What makes a prompt for debugging better?" },
    optionen: {
      de: [
        "Der genaue Fehlertext",
        "Was du direkt davor getan hast",
        "Viele Ausrufezeichen",
        "Was eigentlich passieren sollte",
        "Der Satz „mach es einfach richtig“"
      ],
      en: [
        "The exact error text",
        "What you did right before",
        "Lots of exclamation marks",
        "What should have happened",
        "The sentence “just make it work”"
      ]
    },
    richtige: [0, 1, 3],
    erklaerung: {
      de: "Claude sieht deinen Bildschirm nicht. Fehlertext, letzter Schritt und erwartetes Ergebnis ersetzen das. Nachdruck hilft nicht.",
      en: "Claude cannot see your screen. Error text, last step and expected result make up for that. Emphasis does not help."
    },
    prompt: {
      de: "Formel: „Ich habe [Schritt] gemacht. Erwartet: [Ergebnis]. Stattdessen: [Fehlertext].“",
      en: "Formula: “I did [step]. Expected: [result]. Instead: [error text].”"
    }
  },
  {
    id: "pr-l-beispiel", thema: "prompten", form: "luecke",
    code: {
      de: "Zeig das Datum nicht als 2026-11-08, sondern ___.",
      en: "Do not show the date as 2026-11-08, show it ___."
    },
    codeLabel: "Prompt",
    frage: {
      de: "Claude soll nicht raten müssen, wie das Datum aussehen soll. Welches Stück macht den Prompt eindeutig?",
      en: "Claude should not have to guess what the date should look like. Which piece makes the prompt unambiguous?"
    },
    optionen: {
      de: ["als 8. November 2026", "etwas schöner", "wie üblich", "gut lesbar"],
      en: ["as November 8, 2026", "a bit nicer", "the usual way", "in a readable way"]
    },
    richtig: 0,
    warum: {
      1: {
        de: "„Schöner“ ist Geschmack. Claude muss raten, was du schön findest.",
        en: "“Nicer” is a matter of taste. Claude has to guess what you like."
      },
      2: {
        de: "Üblich ist überall anders: 08.11.2026 oder 11/08/2026?",
        en: "Usual differs by country: 11/08/2026 or 08.11.2026?"
      },
      3: { de: "Lesbar für wen? Auch 08.11.26 ist lesbar.", en: "Readable for whom? 11/8/26 is readable too." }
    },
    erklaerung: {
      de: "Ein Beispiel sagt mehr als ein Adjektiv. Aus „8. November 2026“ liest Claude das Muster ab und wendet es auf jedes Datum an.",
      en: "An example says more than an adjective. From “November 8, 2026” Claude reads the pattern and applies it to every date."
    },
    prompt: {
      de: "Formel: „Zeig [Wert] nicht als [jetzt], sondern als [Beispiel].“",
      en: "Formula: “Do not show [value] as [now], show it as [example].”"
    }
  },
  {
    id: "pr-r-nachstellen", thema: "prompten", form: "reihenfolge",
    frage: {
      de: "Claude soll deinen Fehler nachstellen können. In welcher Reihenfolge schreibst du die Sätze in den Prompt?",
      en: "Claude should be able to reproduce your bug. In which order do you write the sentences into the prompt?"
    },
    schritte: {
      de: [
        "Ich öffne die Seite „Profil“",
        "Ich ändere meinen Namen",
        "Ich klicke auf „Speichern“",
        "Statt „Gespeichert“ erscheint nichts"
      ],
      en: ["I open the “Profile” page", "I change my name", "I click “Save”", "Instead of “Saved”, nothing appears"]
    },
    erklaerung: {
      de: "Schreib die Schritte so auf, wie du sie getan hast, und zuletzt, was statt des Erwarteten passiert ist. So kann Claude den Fehler Schritt für Schritt nachstellen.",
      en: "Write the steps down the way you did them, and last what happened instead of what you expected. That lets Claude reproduce the bug step by step."
    },
    prompt: {
      de: "Formel: „1. [Schritt]. 2. [Schritt]. 3. [Schritt]. Erwartet: [Soll]. Stattdessen: [Ist].“",
      en: "Formula: “1. [step]. 2. [step]. 3. [step]. Expected: [target]. Instead: [actual].”"
    }
  },
  {
    id: "pr-r-ort", thema: "prompten", form: "reihenfolge",
    frage: {
      de: "Claude soll eine Stelle in deiner App sofort finden. Du baust den Prompt wie eine Wegbeschreibung, vom Großen zum Kleinen. In welcher Reihenfolge?",
      en: "Claude should find a spot in your app right away. You build the prompt like directions, from big to small. In which order?"
    },
    schritte: {
      de: [
        "Seite: „Einstellungen“",
        "Abschnitt: „Konto“",
        "Element: Überschrift „Profil bearbeiten“",
        "Änderung: soll „Dein Profil“ heißen"
      ],
      en: [
        "Page: “Settings”",
        "Section: “Account”",
        "Element: heading “Edit profile”",
        "Change: should say “Your profile”"
      ]
    },
    erklaerung: {
      de: "Wie bei einer Adresse: Stadt, Straße, Hausnummer. Der sichtbare Text in Anführungszeichen ist dabei Gold wert, denn danach kann Claude im Code suchen.",
      en: "Like an address: city, street, house number. The visible text in quotes is worth gold, because Claude can search the code for it."
    },
    prompt: {
      de: "Formel: „Auf [Seite], im Bereich [Abschnitt]: [Element mit Text] soll [Änderung].“",
      en: "Formula: “On [page], in the [section] area: [element with text] should [change].”"
    }
  },
  {
    id: "pr-m-erklaerung", thema: "prompten", form: "mehrfach",
    frage: {
      de: "Du hast Claudes Erklärung nicht verstanden: zu lang, zu technisch. Welche Zusätze im nächsten Prompt helfen?",
      en: "You did not understand Claude's explanation: too long, too technical. Which additions to your next prompt help?"
    },
    optionen: {
      de: [
        "Ohne Fachbegriffe",
        "Mit allen Details",
        "In höchstens fünf Sätzen",
        "Mit einem Beispiel aus dem Alltag",
        "Noch einmal ganz genau"
      ],
      en: [
        "Without jargon",
        "With all the details",
        "In five sentences at most",
        "With an everyday example",
        "Once more, very precisely"
      ]
    },
    richtige: [0, 2, 3],
    erklaerung: {
      de: "Sag, wie die Antwort aussehen soll: Länge, Niveau, Beispiel. „Noch einmal“ bringt meist dieselbe Art Antwort, nur anders formuliert.",
      en: "Say what the answer should look like: length, level, example. “Once more” usually gets you the same kind of answer in different words."
    },
    prompt: {
      de: "„Erklär mir das in höchstens fünf Sätzen, ohne Fachbegriffe, mit einem Beispiel aus dem Alltag.“",
      en: "“Explain this in five sentences at most, without jargon, with an everyday example.”"
    }
  },
  {
    id: "pr-p-zutaten", thema: "prompten", form: "paare",
    frage: {
      de: "Zutaten für einen guten Prompt: Wofür ist welche gut?",
      en: "Ingredients of a good prompt: what is each one good for?"
    },
    paare: [
      [
        { de: "Fehlertext", en: "Error text" },
        { de: "zeigt genau, was schiefging", en: "shows exactly what went wrong" }
      ],
      ["Screenshot", { de: "zeigt, wie es gerade aussieht", en: "shows what it looks like now" }],
      [
        { de: "Grenze („nur diese Datei“)", en: "Boundary (“only this file”)" },
        { de: "schützt, was schon funktioniert", en: "protects what already works" }
      ],
      [
        { de: "Akzeptanzkriterien", en: "Acceptance criteria" },
        { de: "sagen, wann es fertig ist", en: "say when it is done" }
      ]
    ],
    erklaerung: {
      de: "Du brauchst selten alle vier auf einmal. Frag dich vor dem Abschicken: Was sieht Claude nicht, was darf nicht kaputtgehen, und woran erkenne ich „fertig“?",
      en: "You rarely need all four at once. Before sending, ask yourself: what can Claude not see, what must not break, and how will I recognize “done”?"
    }
  }
);
