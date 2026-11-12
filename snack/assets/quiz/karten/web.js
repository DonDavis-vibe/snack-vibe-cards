// Snack: Grundkarten zum Thema „Web-Basics“ / core cards for this topic.
// Card format: see the header of eigene-karten.js. A text is a plain string or a pair { de: "…", en: "…" }.
(window.SNACK_KARTEN = window.SNACK_KARTEN || []).push(
  {
    id: "web-frontend", thema: "web", typ: "bedeutung",
    frage: "Was ist das Frontend?",
    optionen: [
      "Alles, was im Browser läuft und du siehst: Buttons, Layout, Farben",
      "Der Server, der im Hintergrund Daten speichert und Logins prüft",
      "Die Datenbank, in der alle Inhalte der Seite liegen",
      "Die Startseite einer Website, also das Allererste, was Besucher zu sehen bekommen"
    ],
    richtig: 0,
    erklaerung: "Frontend ist das, was Nutzer sehen und anklicken. Backend ist das, was im Hintergrund auf dem Server passiert, z. B. Daten speichern und Logins prüfen.",
    prompt: "„Das ist ein Frontend-Problem: Der Button sieht falsch aus, aber die Daten stimmen.“"
  },
  {
    id: "web-backend", thema: "web", typ: "bedeutung",
    frage: "Ein Login soll prüfen, ob das Passwort stimmt. Wo muss das passieren?",
    optionen: ["Im Backend auf dem Server", "Im Frontend im Browser", "In der CSS-Datei", "Im Browser-Verlauf"],
    richtig: 0,
    warum: { 1: "Im Browser kann jeder den Code lesen und die Prüfung umgehen." },
    erklaerung: "Alles im Frontend kann der Nutzer sehen und verändern. Prüfungen, die sicher sein müssen, gehören ins Backend.",
    prompt: "„Die Passwortprüfung muss im Backend passieren, nicht im Frontend.“"
  },
  {
    id: "web-api", thema: "web", typ: "bedeutung",
    frage: "Was ist eine API?",
    optionen: [
      "Eine Schnittstelle, über die Programme miteinander reden, z. B. Frontend und Backend",
      "Ein Programm, das deine App automatisch auf Fehler prüft, bevor sie veröffentlicht wird",
      "Ein Speicherort im Browser, in dem eine Webseite Daten für später ablegt",
      "Eine Programmiersprache, die speziell für Server entwickelt wurde"
    ],
    richtig: 0,
    erklaerung: "Eine API ist wie die Speisekarte im Restaurant: Sie sagt, was man bestellen kann und wie. Wie die Küche arbeitet, musst du nicht wissen.",
    prompt: "„Hol die Wetterdaten über die API von Open-Meteo und zeig sie als Karte an.“"
  },
  {
    id: "web-localhost", thema: "web", typ: "bedeutung",
    code: "Local: http://localhost:5173/",
    frage: "Claude startet deine App und das Terminal zeigt diese Zeile. Was heißt das?",
    optionen: [
      "Die App läuft nur auf deinem eigenen Rechner, an Port 5173",
      "Die App ist jetzt im Internet für alle erreichbar",
      "Die App läuft auf einem Server in den USA",
      "Die Adresse ist kaputt"
    ],
    richtig: 0,
    erklaerung: "localhost ist dein eigener Rechner. Die Zahl nach dem Doppelpunkt ist der Port. Andere Leute können diese Adresse nicht öffnen.",
    prompt: "„Öffne localhost:5173 im Browser und schau, ob die Seite lädt.“"
  },
  {
    id: "web-port", thema: "web", typ: "bedeutung",
    frage: "Was ist ein Port, z. B. das :3000 in einer Adresse?",
    optionen: [
      "Eine Art Hausnummer für Programme auf einem Rechner",
      "Ein USB-Anschluss",
      "Die Geschwindigkeit der Internetverbindung",
      "Ein Passwort für den Server"
    ],
    richtig: 0,
    erklaerung: "Ein Rechner hat eine Adresse, und jedes Programm darauf lauscht an einer eigenen Hausnummer. Zwei Programme können nicht dieselbe Nummer belegen.",
    prompt: "„Starte das Backend auf Port 8000 und das Frontend auf Port 5173.“"
  },
  {
    id: "web-dependency", thema: "web", typ: "bedeutung",
    frage: "Was sind Dependencies (Abhängigkeiten)?",
    optionen: [
      "Fertige Code-Pakete von anderen, die dein Projekt benutzt",
      "Fehler, die von anderen Fehlern abhängen und nur zusammen auftreten",
      "Die Reihenfolge, in der die Dateien beim Start geladen werden",
      "Andere Programmierer, deren Mitarbeit das Projekt braucht"
    ],
    richtig: 0,
    erklaerung: "Statt alles selbst zu bauen, nutzt man Pakete, z. B. für Diagramme. npm install oder pip install lädt sie herunter. Sie stehen in package.json oder requirements.txt.",
    prompt: "„Bitte ohne neue Dependencies lösen, wenn es einfach geht.“"
  },
  {
    id: "web-deploy", thema: "web", typ: "bedeutung",
    frage: "Was heißt „deployen“?",
    optionen: [
      "Die App auf einen Server bringen, damit andere sie im Internet nutzen können",
      "Die App in eine fertige Datei packen, die man auf dem eigenen Rechner installiert",
      "Alle Fehler suchen und beheben, bevor die App fertig ist",
      "Den Code aufräumen und einheitlich formatieren, damit er lesbar bleibt"
    ],
    richtig: 0,
    erklaerung: "Deploy heißt veröffentlichen. Solange die App nur auf localhost läuft, sieht sie niemand außer dir.",
    prompt: "„Wie kann ich das kostenlos deployen, z. B. auf GitHub Pages oder Netlify?“"
  },
  {
    id: "web-css", thema: "web", typ: "bedeutung",
    frage: "Eine Webseite besteht aus HTML, CSS und JavaScript. Was macht CSS?",
    optionen: [
      "Das Aussehen: Farben, Abstände, Schriften, Layout",
      "Die Struktur: Überschriften, Texte, Buttons",
      "Das Verhalten: was beim Klick passiert",
      "Die Datenbank"
    ],
    richtig: 0,
    warum: { 1: "Das ist HTML, das Gerüst.", 2: "Das ist JavaScript." },
    erklaerung: "HTML ist das Skelett, CSS die Kleidung, JavaScript die Muskeln. Wenn etwas nur falsch aussieht, ist es meistens CSS.",
    prompt: "„Das ist nur ein CSS-Problem: Der Abstand zwischen den Karten ist zu groß.“"
  },
  {
    id: "web-responsive", thema: "web", typ: "bedeutung",
    frage: "Was heißt „responsive“?",
    optionen: [
      "Die Seite passt sich an die Bildschirmgröße an, vom Handy bis zum großen Monitor",
      "Die Seite reagiert schnell auf Klicks, ohne dass man warten muss",
      "Die Seite antwortet automatisch auf Nachrichten, wie ein Chat-Bot",
      "Die Seite funktioniert auch ohne Internet, weil sie alles zwischenspeichert"
    ],
    richtig: 0,
    warum: { 1: "Klingt nach dem Wort, gemeint ist aber die Anpassung an die Bildschirmbreite." },
    erklaerung: "Responsive Design ordnet Elemente je nach Breite neu an, z. B. drei Spalten am PC und eine am Handy.",
    prompt: "„Mach die Kartenübersicht responsive: drei Spalten am Desktop, eine auf dem Handy.“"
  },
  {
    id: "web-cache", thema: "web", typ: "bedeutung",
    frage: "Du hast etwas geändert, aber im Browser sieht alles noch alt aus. Was ist der häufigste Grund?",
    optionen: [
      "Der Browser zeigt eine zwischengespeicherte Version (Cache)",
      "Die Änderung wurde nicht gespeichert, weil die Datei schreibgeschützt ist",
      "Das Internet ist zu langsam, die neue Version ist noch unterwegs",
      "Der Grafiktreiber zeigt noch das alte Bild, bis man den Rechner neu startet"
    ],
    richtig: 0,
    erklaerung: "Der Browser speichert Dateien zwischen, damit Seiten schneller laden. Strg + Umschalt + R lädt die Seite komplett neu.",
    prompt: "„Ich sehe die Änderung nicht, obwohl ich mit Strg + Umschalt + R neu geladen habe. Läuft der Dev-Server noch?“"
  },
  {
    id: "web-https", thema: "web", typ: "bedeutung",
    frage: "Was bedeutet das „s“ in https:// (und das Schloss in der Adresszeile)?",
    optionen: [
      "Die Verbindung ist verschlüsselt, unterwegs kann niemand mitlesen",
      "Die Seite wurde geprüft und ist garantiert seriös und vertrauenswürdig",
      "Die Seite lädt schneller, weil sie einen besseren Server benutzt",
      "Die Seite ist kostenlos und zeigt keine Werbung"
    ],
    richtig: 0,
    warum: { 1: "Auch Betrugsseiten haben ein Schloss. Es sagt nur: Die Verbindung ist verschlüsselt." },
    erklaerung: "Das s steht für „secure“. Ohne s gehen Daten, auch Passwörter, lesbar durchs Netz. Auf localhost ist http normal, im Internet sollte es immer https sein."
  },
  {
    id: "web-devtools", thema: "web", typ: "bedeutung",
    frage: "Was öffnet sich im Browser, wenn du F12 drückst?",
    optionen: [
      "Die Entwicklertools: Konsole, Elemente, Netzwerk und mehr",
      "Die Browser-Einstellungen mit Datenschutz und Startseite",
      "Der Vollbildmodus, der alle Leisten ausblendet",
      "Ein privates Fenster, das keinen Verlauf speichert"
    ],
    richtig: 0,
    warum: { 2: "Vollbild ist F11, direkt daneben." },
    erklaerung: "Die Entwicklertools (DevTools) zeigen, was hinter einer Seite passiert. Für dich am wichtigsten ist die Konsole, denn dort stehen die Fehlermeldungen.",
    tipp: "Rechtsklick auf ein Element → „Untersuchen“ zeigt genau dieses Element im Code."
  },
  {
    id: "web-server", thema: "web", typ: "bedeutung",
    frage: "Was ist ein Server?",
    optionen: [
      "Ein Programm oder Rechner, der auf Anfragen wartet und Daten zurückschickt",
      "Ein besonders schneller Router, der das Internet an mehrere Geräte verteilt",
      "Ein Speicher im Browser, der besuchte Webseiten für später aufhebt",
      "Ein Kabel oder Funknetz, das zwei Computer miteinander verbindet"
    ],
    richtig: 0,
    erklaerung: "Server heißt „Diener“: Er bedient Anfragen. Das kann ein großer Rechner im Rechenzentrum sein oder ein kleines Programm auf deinem PC, wie der Dev-Server."
  },
  {
    id: "web-upgrade-handy", thema: "web", typ: "upgrade",
    frage: "Am Handy sieht deine Seite kaputt aus. Welcher Prompt hilft Claude am meisten?",
    optionen: [
      "Am Handy ist alles kaputt.",
      "Bei Handy-Breite (ca. 375 px) ragt die Tabelle rechts aus dem Bildschirm, man muss seitlich scrollen. Die Spalten sollen dort untereinander stehen.",
      "Auf dem Handy sieht die Seite leider gar nicht gut aus. Bitte mach sie so, dass sie auf jedem Gerät richtig toll aussieht."
    ],
    richtig: 1,
    warum: {
      0: "Was genau ist kaputt? Claude kann dein Handy nicht sehen.",
      2: "Freundlich, aber Claude weiß immer noch nicht, welches Element was falsch macht."
    },
    erklaerung: "Gut: Bildschirmbreite nennen, das Element benennen, das Problem beschreiben und sagen, wie es stattdessen sein soll. Ein Screenshot vom Handy hilft zusätzlich.",
    prompt: "Formel: „Bei [Breite] macht [Element] [Problem]. Stattdessen soll [Wunsch].“"
  },
  {
    id: "web-l-localhost", thema: "web", form: "luecke",
    code: "http://___:3000",
    codeLabel: { de: "Adresse im Browser", en: "Address in the browser" },
    frage: {
      de: "Dein Projekt läuft auf deinem eigenen Rechner auf Port 3000. Was gehört in die Adresse?",
      en: "Your project runs on your own computer on port 3000. What goes into the address?"
    },
    optionen: ["localhost", "www", "online", "browser"],
    richtig: 0,
    warum: {
      1: {
        de: "`www` ist nur ein üblicher Namensanfang von Webseiten im Internet.",
        en: "`www` is just a common start of website names on the internet."
      }
    },
    erklaerung: {
      de: "`localhost` heißt „dieser Rechner hier“. Die Zahl nach dem Doppelpunkt ist der Port, also die Tür, hinter der dein Programm lauscht.",
      en: "`localhost` means “this computer here”. The number after the colon is the port, the door your program listens behind."
    },
    prompt: {
      de: "„Starte den Server und sag mir, unter welcher localhost-Adresse ich die Seite öffne.“",
      en: "“Start the server and tell me which localhost address opens the page.”"
    }
  },
  {
    id: "web-r-seitenaufruf", thema: "web", form: "reihenfolge",
    frage: {
      de: "Du tippst eine Adresse in den Browser. Was passiert der Reihe nach?",
      en: "You type an address into the browser. What happens, in order?"
    },
    schritte: {
      de: [
        "DNS liefert zur Adresse die IP des Servers",
        "Der Browser schickt eine Anfrage an den Server",
        "Der Server antwortet mit HTML",
        "Der Browser baut daraus die Seite"
      ],
      en: [
        "DNS returns the server's IP for the address",
        "The browser sends a request to the server",
        "The server answers with HTML",
        "The browser builds the page from it"
      ]
    },
    erklaerung: {
      de: "DNS ist das Telefonbuch des Internets. Danach läuft alles als Anfrage und Antwort zwischen Browser und Server.",
      en: "DNS is the phone book of the internet. After that, everything runs as request and response between browser and server."
    }
  },
  {
    id: "web-m-frontend", thema: "web", form: "mehrfach",
    frage: {
      de: "Was davon läuft im Browser, also im Frontend?",
      en: "Which of these run in the browser, in the frontend?"
    },
    optionen: {
      de: ["HTML", "CSS", "Die Datenbank", "JavaScript für Knöpfe und Menüs", "Die Prüfung von Passwörtern"],
      en: ["HTML", "CSS", "The database", "JavaScript for buttons and menus", "Checking passwords"]
    },
    richtige: [0, 1, 3],
    erklaerung: {
      de: "Frontend ist alles, was der Browser anzeigt und ausführt. Datenbank und Passwort-Prüfung liegen auf dem Server, im Backend.",
      en: "The frontend is everything the browser shows and runs. The database and password checks live on the server, in the backend."
    }
  },
  {
    id: "web-z-html-link", thema: "web", form: "zeile",
    code: {
      de: "<nav>\n  <a href=\"index.html\">Start</a>\n  <a href=\"kontakt.html>Kontakt</a>\n</nav>",
      en: "<nav>\n  <a href=\"index.html\">Home</a>\n  <a href=\"contact.html>Contact</a>\n</nav>"
    },
    codeLabel: "HTML",
    frage: {
      de: "Der zweite Link funktioniert nicht. In welcher Zeile steckt der Fehler?",
      en: "The second link does not work. Which line has the mistake?"
    },
    zeile: 2,
    erklaerung: {
      de: "Hinter `kontakt.html` fehlt das schließende Anführungszeichen. Der Browser liest dadurch den Rest als Teil der Adresse.",
      en: "The closing quote after `contact.html` is missing. The browser reads the rest as part of the address."
    }
  },
  {
    id: "web-p-status", thema: "web", form: "paare",
    frage: { de: "Welcher Statuscode bedeutet was?", en: "Which status code means what?" },
    paare: [
      ["200", { de: "alles in Ordnung", en: "everything is fine" }],
      ["404", { de: "Seite nicht gefunden", en: "page not found" }],
      ["403", { de: "Zugriff verboten", en: "access forbidden" }],
      ["500", { de: "Fehler auf dem Server", en: "error on the server" }]
    ],
    erklaerung: {
      de: "Die erste Ziffer verrät die Richtung: 2 heißt geklappt, 4 heißt Fehler in der Anfrage, 5 heißt Fehler beim Server.",
      en: "The first digit tells the direction: 2 means it worked, 4 means the request was wrong, 5 means the server failed."
    }
  }
);
