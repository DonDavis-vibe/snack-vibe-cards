// Snack: Grundkarten zum Thema „Web-Basics“ / core cards for this topic.
// Card format: see the header of eigene-karten.js. A text is a plain string or a pair { de: "…", en: "…" }.
(window.SNACK_KARTEN = window.SNACK_KARTEN || []).push(
  {
    id: "web-frontend", thema: "web", typ: "bedeutung",
    frage: { de: "Was ist das Frontend?", en: "What is the frontend?" },
    optionen: {
      de: [
        "Alles, was im Browser läuft und du siehst: Buttons, Layout, Farben",
        "Der Server, der im Hintergrund Daten speichert und Logins prüft",
        "Die Datenbank, in der alle Inhalte der Seite liegen",
        "Die Startseite einer Website, also das Allererste, was Besucher zu sehen bekommen"
      ],
      en: [
        "Everything you see that runs in the browser: buttons, layout, colors",
        "The server that stores data in the background and checks logins",
        "The database that holds all the content of the site",
        "The home page of a website, that is, the very first thing visitors get to see"
      ]
    },
    richtig: 0,
    erklaerung: {
      de: "Frontend ist das, was Nutzer sehen und anklicken. Backend ist das, was im Hintergrund auf dem Server passiert, z. B. Daten speichern und Logins prüfen.",
      en: "The frontend is what users see and click. The backend is what happens in the background on the server, for example storing data and checking logins."
    },
    prompt: {
      de: "„Das ist ein Frontend-Problem: Der Button sieht falsch aus, aber die Daten stimmen.“",
      en: "“This is a frontend problem: the button looks wrong, but the data is correct.”"
    }
  },
  {
    id: "web-backend", thema: "web", typ: "bedeutung",
    frage: {
      de: "Ein Login soll prüfen, ob das Passwort stimmt. Wo muss das passieren?",
      en: "A login needs to check whether the password is correct. Where does that have to happen?"
    },
    optionen: {
      de: ["Im Backend auf dem Server", "Im Frontend im Browser", "In der CSS-Datei", "Im Browser-Verlauf"],
      en: [
        "In the backend, on the server",
        "In the frontend, in the browser",
        "In the CSS file",
        "In the browser history"
      ]
    },
    richtig: 0,
    warum: {
      1: {
        de: "Im Browser kann jeder den Code lesen und die Prüfung umgehen.",
        en: "In the browser, anyone can read the code and get around the check."
      }
    },
    erklaerung: {
      de: "Alles im Frontend kann der Nutzer sehen und verändern. Prüfungen, die sicher sein müssen, gehören ins Backend.",
      en: "Everything in the frontend can be seen and changed by the user. Checks that must be secure belong in the backend."
    },
    prompt: {
      de: "„Die Passwortprüfung muss im Backend passieren, nicht im Frontend.“",
      en: "“The password check has to happen in the backend, not in the frontend.”"
    }
  },
  {
    id: "web-api", thema: "web", typ: "bedeutung",
    frage: { de: "Was ist eine API?", en: "What is an API?" },
    optionen: {
      de: [
        "Eine Schnittstelle, über die Programme miteinander reden, z. B. Frontend und Backend",
        "Ein Programm, das deine App automatisch auf Fehler prüft, bevor sie veröffentlicht wird",
        "Ein Speicherort im Browser, in dem eine Webseite Daten für später ablegt",
        "Eine Programmiersprache, die speziell für Server entwickelt wurde"
      ],
      en: [
        "An interface that lets programs talk to each other, like frontend and backend",
        "A program that automatically checks your app for errors before it gets published",
        "A storage place in the browser where a website keeps data for later",
        "A programming language that was developed specifically for servers"
      ]
    },
    richtig: 0,
    erklaerung: {
      de: "Eine API ist wie die Speisekarte im Restaurant: Sie sagt, was man bestellen kann und wie. Wie die Küche arbeitet, musst du nicht wissen.",
      en: "An API is like the menu in a restaurant: it tells you what you can order and how. You don't need to know how the kitchen works."
    },
    prompt: {
      de: "„Hol die Wetterdaten über die API von Open-Meteo und zeig sie als Karte an.“",
      en: "“Get the weather data from the Open-Meteo API and show it as a card.”"
    }
  },
  {
    id: "web-localhost", thema: "web", typ: "bedeutung",
    code: "Local: http://localhost:5173/",
    frage: {
      de: "Claude startet deine App und das Terminal zeigt diese Zeile. Was heißt das?",
      en: "Claude starts your app and the terminal shows this line. What does it mean?"
    },
    optionen: {
      de: [
        "Die App läuft nur auf deinem eigenen Rechner, an Port 5173",
        "Die App ist jetzt im Internet für alle erreichbar",
        "Die App läuft auf einem Server in den USA",
        "Die Adresse ist kaputt"
      ],
      en: [
        "The app runs only on your own computer, on port 5173",
        "The app is now on the internet and anyone can reach it",
        "The app is running on a server in the US",
        "The address is broken"
      ]
    },
    richtig: 0,
    erklaerung: {
      de: "localhost ist dein eigener Rechner. Die Zahl nach dem Doppelpunkt ist der Port. Andere Leute können diese Adresse nicht öffnen.",
      en: "localhost is your own computer. The number after the colon is the port. Other people cannot open this address."
    },
    prompt: {
      de: "„Öffne localhost:5173 im Browser und schau, ob die Seite lädt.“",
      en: "“Open localhost:5173 in the browser and check whether the page loads.”"
    }
  },
  {
    id: "web-port", thema: "web", typ: "bedeutung",
    frage: {
      de: "Was ist ein Port, z. B. das :3000 in einer Adresse?",
      en: "What is a port, for example the :3000 in an address?"
    },
    optionen: {
      de: [
        "Eine Art Hausnummer für Programme auf einem Rechner",
        "Ein USB-Anschluss",
        "Die Geschwindigkeit der Internetverbindung",
        "Ein Passwort für den Server"
      ],
      en: [
        "A kind of house number for programs on a computer",
        "A USB socket",
        "The speed at which your internet connection moves data",
        "A password for the server"
      ]
    },
    richtig: 0,
    erklaerung: {
      de: "Ein Rechner hat eine Adresse, und jedes Programm darauf lauscht an einer eigenen Hausnummer. Zwei Programme können nicht dieselbe Nummer belegen.",
      en: "A computer has an address, and every program on it listens at its own house number. Two programs cannot use the same number."
    },
    prompt: {
      de: "„Starte das Backend auf Port 8000 und das Frontend auf Port 5173.“",
      en: "“Start the backend on port 8000 and the frontend on port 5173.”"
    }
  },
  {
    id: "web-dependency", thema: "web", typ: "bedeutung",
    frage: { de: "Was sind Dependencies (Abhängigkeiten)?", en: "What are dependencies?" },
    optionen: {
      de: [
        "Fertige Code-Pakete von anderen, die dein Projekt benutzt",
        "Fehler, die von anderen Fehlern abhängen und nur zusammen auftreten",
        "Die Reihenfolge, in der die Dateien beim Start geladen werden",
        "Andere Programmierer, deren Mitarbeit das Projekt braucht"
      ],
      en: [
        "Ready-made code packages by others that your project uses",
        "Errors that depend on other errors and only show up together",
        "The order in which the files get loaded when the app starts",
        "Other programmers whose help the project needs"
      ]
    },
    richtig: 0,
    erklaerung: {
      de: "Statt alles selbst zu bauen, nutzt man Pakete, z. B. für Diagramme. npm install oder pip install lädt sie herunter. Sie stehen in package.json oder requirements.txt.",
      en: "Instead of building everything yourself, you use packages, for example for charts. npm install or pip install downloads them. They are listed in package.json or requirements.txt."
    },
    prompt: {
      de: "„Bitte ohne neue Dependencies lösen, wenn es einfach geht.“",
      en: "“Please solve this without new dependencies if there is a simple way.”"
    }
  },
  {
    id: "web-deploy", thema: "web", typ: "bedeutung",
    frage: { de: "Was heißt „deployen“?", en: "What does “deploy” mean?" },
    optionen: {
      de: [
        "Die App auf einen Server bringen, damit andere sie im Internet nutzen können",
        "Die App in eine fertige Datei packen, die man auf dem eigenen Rechner installiert",
        "Alle Fehler suchen und beheben, bevor die App fertig ist",
        "Den Code aufräumen und einheitlich formatieren, damit er lesbar bleibt"
      ],
      en: [
        "Putting the app on a server so others can use it on the internet",
        "Packing the app into a finished file that you install on your own computer",
        "Finding and fixing all bugs before the app is finished",
        "Cleaning up the code and formatting it consistently so it stays readable"
      ]
    },
    richtig: 0,
    erklaerung: {
      de: "Deploy heißt veröffentlichen. Solange die App nur auf localhost läuft, sieht sie niemand außer dir.",
      en: "Deploy means publish. As long as the app only runs on localhost, nobody but you can see it."
    },
    prompt: {
      de: "„Wie kann ich das kostenlos deployen, z. B. auf GitHub Pages oder Netlify?“",
      en: "“How can I deploy this for free, for example on GitHub Pages or Netlify?”"
    }
  },
  {
    id: "web-css", thema: "web", typ: "bedeutung",
    frage: {
      de: "Eine Webseite besteht aus HTML, CSS und JavaScript. Was macht CSS?",
      en: "A web page is made of HTML, CSS and JavaScript. What does CSS do?"
    },
    optionen: {
      de: [
        "Das Aussehen: Farben, Abstände, Schriften, Layout",
        "Die Struktur: Überschriften, Texte, Buttons",
        "Das Verhalten: was beim Klick passiert",
        "Die Datenbank"
      ],
      en: [
        "The look: colors, spacing, fonts, layout",
        "The structure: headings, text, buttons",
        "The behavior: what happens when you click",
        "The database"
      ]
    },
    richtig: 0,
    warum: {
      1: { de: "Das ist HTML, das Gerüst.", en: "That is HTML, the basic structure." },
      2: { de: "Das ist JavaScript.", en: "That is JavaScript." }
    },
    erklaerung: {
      de: "HTML ist das Skelett, CSS die Kleidung, JavaScript die Muskeln. Wenn etwas nur falsch aussieht, ist es meistens CSS.",
      en: "HTML is the skeleton, CSS the clothing, JavaScript the muscles. If something only looks wrong, it is usually CSS."
    },
    prompt: {
      de: "„Das ist nur ein CSS-Problem: Der Abstand zwischen den Karten ist zu groß.“",
      en: "“This is only a CSS problem: the gap between the cards is too big.”"
    }
  },
  {
    id: "web-responsive", thema: "web", typ: "bedeutung",
    frage: { de: "Was heißt „responsive“?", en: "What does “responsive” mean?" },
    optionen: {
      de: [
        "Die Seite passt sich an die Bildschirmgröße an, vom Handy bis zum großen Monitor",
        "Die Seite reagiert schnell auf Klicks, ohne dass man warten muss",
        "Die Seite antwortet automatisch auf Nachrichten, wie ein Chat-Bot",
        "Die Seite funktioniert auch ohne Internet, weil sie alles zwischenspeichert"
      ],
      en: [
        "The page adapts to the screen size, from phone to large monitor",
        "The page reacts quickly to clicks, so you never have to wait",
        "The page replies to messages automatically, like a chatbot",
        "The page also works without internet because it caches everything"
      ]
    },
    richtig: 0,
    warum: {
      1: {
        de: "Klingt nach dem Wort, gemeint ist aber die Anpassung an die Bildschirmbreite.",
        en: "It sounds like the word, but what is meant is adapting to the screen width."
      }
    },
    erklaerung: {
      de: "Responsive Design ordnet Elemente je nach Breite neu an, z. B. drei Spalten am PC und eine am Handy.",
      en: "Responsive design rearranges elements depending on the width, for example three columns on a PC and one on a phone."
    },
    prompt: {
      de: "„Mach die Kartenübersicht responsive: drei Spalten am Desktop, eine auf dem Handy.“",
      en: "“Make the card overview responsive: three columns on desktop, one on a phone.”"
    }
  },
  {
    id: "web-cache", thema: "web", typ: "bedeutung",
    frage: {
      de: "Du hast etwas geändert, aber im Browser sieht alles noch alt aus. Was ist der häufigste Grund?",
      en: "You changed something, but in the browser everything still looks old. What is the most common reason?"
    },
    optionen: {
      de: [
        "Der Browser zeigt eine zwischengespeicherte Version (Cache)",
        "Die Änderung wurde nicht gespeichert, weil die Datei schreibgeschützt ist",
        "Das Internet ist zu langsam, die neue Version ist noch unterwegs",
        "Der Grafiktreiber zeigt noch das alte Bild, bis man den Rechner neu startet"
      ],
      en: [
        "The browser is showing a stored copy from its cache",
        "The change was not saved because the file is write-protected",
        "The internet is too slow, the new version is still on its way",
        "The graphics driver keeps showing the old image until you restart the computer"
      ]
    },
    richtig: 0,
    erklaerung: {
      de: "Der Browser speichert Dateien zwischen, damit Seiten schneller laden. Strg + Umschalt + R (am Mac Cmd + Umschalt + R) lädt die Seite komplett neu.",
      en: "The browser keeps copies of files (the cache) so pages load faster. Ctrl + Shift + R (Cmd + Shift + R on a Mac) reloads the page completely."
    },
    prompt: {
      de: "„Ich sehe die Änderung nicht, obwohl ich mit Strg + Umschalt + R neu geladen habe. Läuft der Dev-Server noch?“",
      en: "“I don't see the change even though I reloaded with Ctrl + Shift + R. Is the dev server still running?”"
    }
  },
  {
    id: "web-https", thema: "web", typ: "bedeutung",
    frage: {
      de: "Was bedeutet das „s“ in https:// (und das Schloss in der Adresszeile)?",
      en: "What does the “s” in https:// mean (and the lock in the address bar)?"
    },
    optionen: {
      de: [
        "Die Verbindung ist verschlüsselt, unterwegs kann niemand mitlesen",
        "Die Seite wurde geprüft und ist garantiert seriös und vertrauenswürdig",
        "Die Seite lädt schneller, weil sie einen besseren Server benutzt",
        "Die Seite ist kostenlos und zeigt keine Werbung"
      ],
      en: [
        "The connection is encrypted, so nobody can read along on the way",
        "The site has been checked and is guaranteed to be legitimate and trustworthy",
        "The site loads faster because it uses a better server",
        "The site is free and shows no ads"
      ]
    },
    richtig: 0,
    warum: {
      1: {
        de: "Auch Betrugsseiten haben ein Schloss. Es sagt nur: Die Verbindung ist verschlüsselt.",
        en: "Scam sites have a lock too. It only says: the connection is encrypted."
      }
    },
    erklaerung: {
      de: "Das s steht für „secure“. Ohne s gehen Daten, auch Passwörter, lesbar durchs Netz. Auf localhost ist http normal, im Internet sollte es immer https sein.",
      en: "The s stands for “secure”. Without the s, data, including passwords, travels across the network in readable form. On localhost http is normal, on the internet it should always be https."
    }
  },
  {
    id: "web-devtools", thema: "web", typ: "bedeutung",
    frage: {
      de: "Was öffnet sich im Browser, wenn du F12 drückst?",
      en: "What opens in the browser when you press F12?"
    },
    optionen: {
      de: [
        "Die Entwicklertools: Konsole, Elemente, Netzwerk und mehr",
        "Die Browser-Einstellungen mit Datenschutz und Startseite",
        "Der Vollbildmodus, der alle Leisten ausblendet",
        "Ein privates Fenster, das keinen Verlauf speichert"
      ],
      en: [
        "The developer tools: console, elements, network and more",
        "The browser settings, with options for privacy and the home page",
        "Full-screen mode, which hides all the bars",
        "A private window that doesn't save any history"
      ]
    },
    richtig: 0,
    warum: { 2: { de: "Vollbild ist F11, direkt daneben.", en: "Full screen is F11, right next to it." } },
    erklaerung: {
      de: "Die Entwicklertools (DevTools) zeigen, was hinter einer Seite passiert. Für dich am wichtigsten ist die Konsole, denn dort stehen die Fehlermeldungen.",
      en: "The developer tools (DevTools) show what goes on behind a page. The most important part for you is the console, because that is where the error messages appear."
    },
    tipp: {
      de: "Rechtsklick auf ein Element → „Untersuchen“ zeigt genau dieses Element im Code.",
      en: "Right-click an element → “Inspect” shows exactly this element in the code."
    }
  },
  {
    id: "web-server", thema: "web", typ: "bedeutung",
    frage: { de: "Was ist ein Server?", en: "What is a server?" },
    optionen: {
      de: [
        "Ein Programm oder Rechner, der auf Anfragen wartet und Daten zurückschickt",
        "Ein besonders schneller Router, der das Internet an mehrere Geräte verteilt",
        "Ein Speicher im Browser, der besuchte Webseiten für später aufhebt",
        "Ein Kabel oder Funknetz, das zwei Computer miteinander verbindet"
      ],
      en: [
        "A program or computer that waits for requests and sends data back",
        "A particularly fast router that shares the internet among several devices",
        "A storage area in the browser that keeps visited web pages for later",
        "A cable or wireless network that connects two computers"
      ]
    },
    richtig: 0,
    erklaerung: {
      de: "Server heißt „Diener“: Er bedient Anfragen. Das kann ein großer Rechner im Rechenzentrum sein oder ein kleines Programm auf deinem PC, wie der Dev-Server.",
      en: "The name says it: a server serves requests. It can be a big machine in a data center or a small program on your PC, like the dev server."
    }
  },
  {
    id: "web-upgrade-handy", thema: "web", typ: "upgrade",
    frage: {
      de: "Am Handy sieht deine Seite kaputt aus. Welcher Prompt hilft Claude am meisten?",
      en: "On your phone, your page looks broken. Which prompt helps Claude the most?"
    },
    optionen: {
      de: [
        "Am Handy ist alles kaputt.",
        "Bei Handy-Breite (ca. 375 px) ragt die Tabelle rechts aus dem Bildschirm, man muss seitlich scrollen. Die Spalten sollen dort untereinander stehen.",
        "Auf dem Handy sieht die Seite leider gar nicht gut aus. Bitte mach sie so, dass sie auf jedem Gerät richtig toll aussieht."
      ],
      en: [
        "Everything is broken on my phone.",
        "At phone width (about 375 px) the table sticks out on the right, so you have to scroll sideways. The columns should stack vertically there.",
        "On my phone the page unfortunately doesn't look good at all. Please make it so that it looks really great on every device."
      ]
    },
    richtig: 1,
    warum: {
      0: {
        de: "Was genau ist kaputt? Claude kann dein Handy nicht sehen.",
        en: "What exactly is broken? Claude can't see your phone."
      },
      2: {
        de: "Freundlich, aber Claude weiß immer noch nicht, welches Element was falsch macht.",
        en: "Friendly, but Claude still doesn't know which element is doing what wrong."
      }
    },
    erklaerung: {
      de: "Gut: Bildschirmbreite nennen, das Element benennen, das Problem beschreiben und sagen, wie es stattdessen sein soll. Ein Screenshot vom Handy hilft zusätzlich.",
      en: "Good: name the screen width, name the element, describe the problem and say how it should be instead. A screenshot from the phone helps too."
    },
    prompt: {
      de: "Formel: „Bei [Breite] macht [Element] [Problem]. Stattdessen soll [Wunsch].“",
      en: "Formula: “At [width], [element] has [problem]. It should [wish] instead.”"
    }
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
