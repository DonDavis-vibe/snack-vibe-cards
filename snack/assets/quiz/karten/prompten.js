// Snack: Grundkarten zum Thema „Gut prompten“ / core cards for this topic.
// Card format: see the header of eigene-karten.js. A text is a plain string or a pair { de: "…", en: "…" }.
(window.SNACK_KARTEN = window.SNACK_KARTEN || []).push(
  {
    id: "pr-bug-report", thema: "prompten", typ: "upgrade",
    frage: "Ein Button tut nichts. Welche Nachricht führt am schnellsten zur Lösung?",
    optionen: [
      "Der Button geht nicht.",
      "Wenn ich auf „Speichern“ klicke, passiert nichts. Erwartet hätte ich den Toast „Gespeichert“. In der Browser-Konsole (F12) steht: (Fehlertext)",
      "Bitte schnell helfen, das ist dringend!! Beim Speichern funktioniert seit vorhin irgendwas nicht mehr richtig."
    ],
    richtig: 1,
    warum: {
      0: "Welcher Button? Was sollte passieren? Claude muss raten.",
      2: "Viel Dringlichkeit, aber kaum Infos: Was hast du geklickt, was sollte passieren, was steht in der Konsole?"
    },
    erklaerung: "Ein guter Bug-Report sagt: Was hast du gemacht? Was ist passiert? Was hast du erwartet? Dazu die Fehlermeldung, falls es eine gibt.",
    prompt: "Formel: „Wenn ich [Aktion], passiert [Ist]. Erwartet: [Soll]. Fehler: [Text].“"
  },
  {
    id: "pr-error-text", thema: "prompten", typ: "upgrade",
    frage: "Im Terminal kommt ein Fehler. Was ist die beste Nachricht an Claude?",
    optionen: [
      "Geht nicht.",
      "Ich hab npm run dev im Ordner quiz-app ausgeführt, das kam raus: (kompletter Fehlertext)",
      "Da kommt irgendein roter Fehler mit npm, ziemlich lang und kompliziert. Ich glaube, irgendwas mit einem Modul oder so, kannst du mal schauen?"
    ],
    richtig: 1,
    warum: {
      0: "Claude sieht dein Terminal nicht und weiß nicht, was du gemacht hast.",
      2: "„Irgendein Fehler“ reicht nicht. Der genaue Text ist der Schlüssel."
    },
    erklaerung: "Befehl, Ordner und kompletter Fehlertext: So sieht Claude genau, was du siehst. Lieber zu viel kopieren als zu wenig.",
    prompt: "Formel: „Ich hab [Befehl] in [Ordner] ausgeführt, das kam raus: [Fehlertext].“"
  },
  {
    id: "pr-screenshot", thema: "prompten", typ: "bedeutung",
    frage: "Wann ist ein Screenshot besser als Text?",
    optionen: [
      "Bei Layout-Problemen: etwas überlappt, ist verschoben oder sieht falsch aus",
      "Bei Fehlermeldungen im Terminal, weil man dann auch die Farben sieht",
      "Bei langem Code, weil ein Bild weniger Platz im Chat braucht als Text",
      "Immer, denn Bilder versteht Claude grundsätzlich besser als Text"
    ],
    richtig: 0,
    warum: { 1: "Fehlertext lieber kopieren. Claude kann jedes Zeichen genau lesen und danach suchen." },
    erklaerung: "Optik zeigst du am besten als Bild, gern mit Pfeil oder Kreis auf der Stelle. Fehlermeldungen und Code lieber als Text kopieren.",
    prompt: "„Siehe Screenshot: Im roten Kreis überlappt die Sidebar den Inhalt.“"
  },
  {
    id: "pr-one-thing", thema: "prompten", typ: "upgrade",
    frage: "Welcher Prompt funktioniert meistens am besten?",
    optionen: [
      "Lass uns erst nur das Login bauen. Wenn das läuft, kommt das Profil.",
      "Bau Login, Profil, Dunkelmodus, Datenbank, Export und ein neues Design.",
      "Mach mal, du weißt schon, was ich meine."
    ],
    richtig: 0,
    warum: {
      1: "Zehn Dinge auf einmal: Wenn etwas kaputt ist, weiß niemand, welches es war.",
      2: "Claude kann keine Gedanken lesen."
    },
    erklaerung: "Kleine Schritte lassen sich einzeln testen. So findest du Probleme sofort statt am Ende.",
    prompt: "„Lass uns erst nur das Login bauen. Den Rest machen wir danach.“"
  },
  {
    id: "pr-acceptance", thema: "prompten", typ: "upgrade",
    frage: "Du willst eine Suchfunktion. Welcher Prompt sagt Claude, wann es fertig ist?",
    optionen: [
      "Bau eine Suche.",
      "Bau eine Suche über der Projektliste. Fertig ist es, wenn: Tippen filtert sofort, Groß-/Kleinschreibung ist egal, bei 0 Treffern steht „Nichts gefunden“.",
      "Bau eine richtig gute, schnelle und moderne Suche, so wie bei Google, die immer genau das findet, was man sucht."
    ],
    richtig: 1,
    warum: {
      0: "Wo soll die Suche hin, und was soll sie können?",
      2: "„Wie Google“ ist riesig. Claude weiß nicht, was du davon wirklich brauchst."
    },
    erklaerung: "Akzeptanzkriterien beschreiben, woran man erkennt, dass etwas fertig ist. Claude kann sie dann auch selbst testen.",
    prompt: "Formel: „Fertig ist es, wenn: [1], [2], [3].“"
  },
  {
    id: "pr-plan-first", thema: "prompten", typ: "bedeutung",
    frage: "Vor einer großen Änderung: Was hilft, bevor Claude losschreibt?",
    optionen: [
      "Claude erst einen Plan machen lassen und ihn lesen",
      "Sofort loslegen lassen, das spart Zeit",
      "Mehrere Sessions gleichzeitig dasselbe machen lassen",
      "Den Prompt in Großbuchstaben schreiben"
    ],
    richtig: 0,
    erklaerung: "Ein Plan kostet eine Minute und zeigt Missverständnisse, bevor 500 Zeilen falscher Code entstehen. Genau das steht auch in deiner CLAUDE.md.",
    prompt: "„Mach erst einen Plan und zeig ihn mir, bevor du Code änderst.“"
  },
  {
    id: "pr-context", thema: "prompten", typ: "upgrade",
    frage: "Nach einer Pause startest du eine neue Session. Welcher Einstieg ist am besten?",
    optionen: [
      "Mach weiter.",
      "Wir bauen das Quiz in quiz-app/. Stand: Runden laufen. Als Nächstes kommt die Themenauswahl. Lies zuerst tasks/todo.md.",
      "Hallo! Wir haben ja gestern schon eine ganze Menge zusammen gemacht. Mach einfach da weiter, wo wir aufgehört haben, du weißt schon."
    ],
    richtig: 1,
    warum: {
      0: "Eine neue Session weiß nicht, womit sie weitermachen soll.",
      2: "Freundlich, aber eine neue Session kennt das Gespräch von gestern nicht. Ordner, Stand und nächster Schritt fehlen."
    },
    erklaerung: "Eine neue Session kennt das letzte Gespräch nicht, nur CLAUDE.md und Memory. Ordner, Stand und nächster Schritt ersparen viel Raten.",
    prompt: "Formel: „Projekt: [Ordner]. Stand: [was geht]. Nächster Schritt: [was].“"
  },
  {
    id: "pr-explain", thema: "prompten", typ: "bedeutung",
    frage: "Claude schlägt etwas vor, das du nicht verstehst. Was tust du?",
    optionen: [
      "Nachfragen, bis du es verstehst",
      "Einfach zustimmen, wird schon passen",
      "Die Session schließen",
      "Den Vorschlag ignorieren"
    ],
    richtig: 0,
    erklaerung: "Du bist der Chef im Projekt. Verstehen gehört zum Job, und Claude erklärt gern, auch mehrmals.",
    prompt: "„Erklär mir das in zwei Sätzen, ohne Fachbegriffe. Was wäre die Alternative?“"
  },
  {
    id: "pr-verify", thema: "prompten", typ: "upgrade",
    frage: "Claude sagt „Fertig!“. Was ist der beste nächste Prompt?",
    optionen: [
      "Danke!",
      "Zeig mir, wie du getestet hast, dass es funktioniert.",
      "Super, danke! Dann bauen wir direkt als Nächstes den Export und den Dunkelmodus."
    ],
    richtig: 1,
    warum: {
      0: "Höflich, aber „fertig“ heißt nicht automatisch „getestet“.",
      2: "Erst prüfen, dann weiterbauen. Sonst stapeln sich Fehler."
    },
    erklaerung: "„Fertig“ heißt nicht „getestet“. Lass dir zeigen, dass es läuft, oder probier es selbst kurz aus.",
    prompt: "„Zeig mir, wie du getestet hast, dass es funktioniert.“"
  },
  {
    id: "pr-grenzen", thema: "prompten", typ: "upgrade",
    frage: "Claude soll den Header umgestalten, aber deine Navigation funktioniert gerade endlich. Welcher Prompt schützt sie?",
    optionen: [
      "Mach den Header neu.",
      "Gestalte den Header neu: dunkler Hintergrund, Logo links. Ändere nur header.css, fass die Navigation in nav.js nicht an.",
      "Mach den Header neu und moderner, aber pass gut auf, dass nichts kaputtgeht, vor allem nicht die Navigation."
    ],
    richtig: 1,
    warum: {
      0: "Claude könnte nebenbei auch die Navigation „verbessern“.",
      2: "„Pass auf“ ist ein Wunsch, keine klare Grenze. Und wie der neue Header aussehen soll, steht auch nicht drin."
    },
    erklaerung: "Sag auch, was nicht passieren soll. Grenzen wie „nur diese Datei“ verhindern, dass Claude nebenbei andere Dinge umbaut.",
    prompt: "Formel: „Ändere nur [Datei]. Fass [Bereich] nicht an.“"
  },
  {
    id: "pr-nachsteuern", thema: "prompten", typ: "upgrade",
    frage: "Claude hat eine Seite gebaut. Fast perfekt, nur der Header ist zu dunkel. Was schreibst du?",
    optionen: [
      "Nee, mach nochmal ganz neu.",
      "Gut so! Nur der Header soll hellgrau statt schwarz sein, der Rest bleibt.",
      "Hm, irgendwie gefällt mir das noch nicht so richtig. Kannst du es noch mal ein bisschen anders machen?"
    ],
    richtig: 1,
    warum: {
      0: "Dann ist auch das Gute weg, und das Ergebnis wird ganz anders.",
      2: "Was genau? Claude weiß nicht, was es ändern soll."
    },
    erklaerung: "Kleine, gezielte Korrekturen sind schneller und sicherer als ein Neustart. Sag, was bleiben soll und was sich ändern soll.",
    prompt: "Formel: „Gut so! Nur [Element] soll [anders] sein, der Rest bleibt.“"
  },
  {
    id: "pr-rueckfragen", thema: "prompten", typ: "bedeutung",
    frage: "Du hast eine Idee, aber sie ist noch unscharf. Was hilft am meisten?",
    optionen: [
      "Claude bitten, dir erst ein paar Fragen zu stellen",
      "Einfach losbauen lassen, Claude wird schon verstehen",
      "Warten, bis die Idee bis ins Detail fertig ist",
      "Die Idee in einem einzigen kurzen Satz beschreiben"
    ],
    richtig: 0,
    erklaerung: "Claude fragt dann gezielt nach dem Wichtigen: Für wen ist es, auf welchem Gerät, was genau soll es können? So wird aus einer Idee ein klarer Auftrag.",
    prompt: "„Ich will eine App für meine Einkaufsliste. Stell mir erst 5 Fragen, bevor du etwas baust.“"
  },
  {
    id: "pr-im-kreis", thema: "prompten", typ: "bedeutung",
    frage: "Claude versucht zum dritten Mal denselben Fix, und der Fehler bleibt. Was tust du?",
    optionen: [
      "Stoppen und Claude erst die Ursache erklären lassen, bevor es weiterprobiert",
      "Weiter „versuch’s nochmal“ schreiben, irgendwann klappt es schon",
      "Den Rechner neu starten, damit Claude einen frischen Kopf bekommt",
      "Aufgeben, das Problem ist für Claude offenbar zu schwer"
    ],
    richtig: 0,
    erklaerung: "Wer im Kreis läuft, braucht einen Schritt zurück. Frag nach der Ursache und nach anderen Ansätzen. Oder fang eine frische Session mit einer kurzen Zusammenfassung an.",
    prompt: "„Stopp. Was ist die eigentliche Ursache? Nenn mir zwei andere Ansätze, bevor du weitermachst.“"
  },
  {
    id: "pr-halluzination", thema: "prompten", typ: "bedeutung",
    frage: "Claude empfiehlt eine Funktion `quizHelper.mischen()`, die es in der Bibliothek gar nicht gibt. Was ist passiert?",
    optionen: [
      "Claude hat sich etwas ausgedacht, das plausibel klingt. Das nennt man Halluzination",
      "Die Bibliothek ist veraltet, und Claude hat nur eine alte Version erwischt",
      "Claudes Internetverbindung war schlecht, und die Antwort kam unvollständig an",
      "Du hast den Prompt zu kurz geschrieben, deshalb hat Claude einen Fehler gemacht"
    ],
    richtig: 0,
    warum: {
      1: "Das kann vorkommen, ist aber etwas anderes. Hier gab es die Funktion nie.",
      2: "Antworten werden nicht zerstückelt. Sie waren inhaltlich einfach falsch.",
      3: "Auch mit perfektem Prompt kann Claude Dinge erfinden. Das liegt nicht an dir."
    },
    erklaerung: "Claude schreibt das, was am wahrscheinlichsten klingt, und klingt dabei oft sicher. Prüf Namen von Funktionen und Paketen kurz nach (Doku lesen, Code ausführen). Läuft es nicht, war es erfunden.",
    prompt: "„Prüf, ob diese Funktion in der installierten Version der Bibliothek wirklich existiert. Schau in der Doku oder im Code nach.“"
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
  }
);
