// Snack: Grundkarten zum Thema „Terminal“ / core cards for this topic.
// Card format: see the header of eigene-karten.js. A text is a plain string or a pair { de: "…", en: "…" }.
(window.SNACK_KARTEN = window.SNACK_KARTEN || []).push(
  {
    id: "term-ls", thema: "terminal", typ: "bedeutung",
    code: "ls -la",
    frage: "Was macht dieser Befehl?",
    optionen: [
      "Zeigt die Dateien im aktuellen Ordner",
      "Löscht alle Dateien, auch die versteckten",
      "Startet das Programm neu",
      "Zeigt die Internetverbindung"
    ],
    richtig: 0,
    warum: { 1: "Löschen wäre `rm`. `ls` schaut nur, es ändert nichts." },
    erklaerung: "ls steht für „list“. Mit -la siehst du auch versteckte Dateien und Details wie Größe und Datum.",
    prompt: "„Zeig mir mit ls -la, was im Projektordner liegt, auch die versteckten Dateien.“"
  },
  {
    id: "term-cd", thema: "terminal", typ: "bedeutung",
    code: "cd ~/Projekte/quiz",
    frage: "Was passiert bei diesem Befehl?",
    optionen: [
      "Du wechselst in diesen Ordner",
      "Der Ordner wird erstellt",
      "Der Ordner wird auf eine CD gebrannt",
      "Der Ordner wird kopiert"
    ],
    richtig: 0,
    warum: {
      1: "Erstellen wäre `mkdir` (make directory).",
      2: "Netter Gedanke, aber cd heißt „change directory“.",
      3: "Kopieren wäre `cp`."
    },
    erklaerung: "cd heißt „change directory“, also Ordner wechseln. Die Tilde ~ ist die Abkürzung für deinen Home-Ordner (z. B. /home/alex).",
    prompt: "„Wechsel erst mit cd in den Projektordner, bevor du den Befehl ausführst.“"
  },
  {
    id: "term-sudo", thema: "terminal", typ: "bedeutung",
    code: "sudo nano /etc/hosts",
    frage: "Was bedeutet das `sudo` am Anfang?",
    optionen: [
      "Der Befehl läuft mit Admin-Rechten",
      "Der Befehl läuft besonders schnell",
      "Der Befehl wird nur simuliert",
      "Der Befehl läuft im Hintergrund"
    ],
    richtig: 0,
    erklaerung: "sudo heißt „superuser do“. Damit darf ein Befehl alles, auch Systemdateien ändern. Deshalb fragt das System nach deinem Passwort.",
    prompt: "„Warum braucht dieser Befehl Admin-Rechte? Geht es auch ohne sudo?“"
  },
  {
    id: "term-rm-node", thema: "terminal", typ: "erlauben",
    code: "rm -rf node_modules && npm install",
    frage: "Claude fragt, ob es diesen Befehl ausführen darf:",
    richtig: 0,
    auchOk: [1],
    warum: {
      1: "Nachfragen ist okay. Hier ist der Befehl aber harmlos.",
      2: "Verständlich, rm -rf sieht gruselig aus. In diesem Fall ist es aber harmlos."
    },
    erklaerung: "rm -rf heißt „löschen ohne Nachfrage“. node_modules ist aber nur ein Ordner mit heruntergeladenen Paketen, und npm install holt sie sofort neu.",
    tipp: "Vorsicht erst, wenn hinter rm -rf ein ~, ein / oder ein Ordner steht, den du nicht kennst."
  },
  {
    id: "term-rm-home", thema: "terminal", typ: "erlauben",
    code: "rm -rf ~/",
    frage: "Claude möchte aufräumen und schlägt vor:",
    richtig: 2,
    warum: {
      0: "Bloß nicht! ~ ist dein kompletter persönlicher Ordner.",
      1: "Da gibt es nichts nachzufragen. Das ist nie die richtige Lösung."
    },
    erklaerung: "Das löscht deinen ganzen Home-Ordner: Dokumente, Bilder, Projekte. Ohne Papierkorb und ohne Rückfrage.",
    prompt: "„Stopp. Lösch nichts außerhalb des Projektordners. Was wolltest du eigentlich erreichen?“"
  },
  {
    id: "term-chmod", thema: "terminal", typ: "bedeutung",
    code: "chmod +x start.sh",
    frage: "Was macht dieser Befehl?",
    optionen: ["Macht die Datei ausführbar", "Benennt die Datei um", "Löscht die Datei", "Verschlüsselt die Datei"],
    richtig: 0,
    erklaerung: "chmod ändert Rechte. +x heißt: Diese Datei darf als Programm gestartet werden. Danach funktioniert ./start.sh.",
    prompt: "„Beim Starten kommt „Permission denied“. Mach start.sh mit chmod +x ausführbar.“"
  },
  {
    id: "term-pipe", thema: "terminal", typ: "bedeutung",
    code: "ls | grep quiz",
    frage: "Was macht der senkrechte Strich in der Mitte?",
    optionen: [
      "Gibt die Ausgabe des ersten Befehls an den zweiten weiter",
      "Lässt beide Befehle gleichzeitig nebeneinander laufen",
      "Macht alles dahinter zu einem Kommentar, der ignoriert wird",
      "Speichert das Ergebnis von ls in eine Datei namens grep"
    ],
    richtig: 0,
    warum: { 3: "In eine Datei speichern wäre das Größer-Zeichen >." },
    erklaerung: "Der Strich heißt Pipe. Die Ausgabe von ls fließt in grep, das nur Zeilen mit „quiz“ übrig lässt. Wie ein Rohr zwischen zwei Programmen.",
    tipp: "Selbst bauen musst du so etwas nicht. Aber jetzt kannst du solche Befehle lesen, bevor du sie erlaubst."
  },
  {
    id: "term-ctrl-c", thema: "terminal", typ: "bedeutung",
    frage: "Ein Server läuft im Terminal und du willst ihn stoppen. Was drückst du?",
    optionen: ["Strg + C", "Strg + Z", "Strg + S", "Esc"],
    richtig: 0,
    warum: {
      1: "Strg + Z pausiert das Programm nur und schiebt es in den Hintergrund. Es blockiert dann weiter seinen Port.",
      2: "Strg + S friert die Ausgabe im Terminal ein. Strg + Q löst das wieder.",
      3: "Esc macht im Terminal meistens gar nichts."
    },
    erklaerung: "Strg + C bricht das laufende Programm im Terminal ab. Kopieren geht im Terminal deshalb mit Strg + Umschalt + C.",
    prompt: "„Ich hab den Server mit Strg + Z statt Strg + C beendet. Räum den alten Prozess bitte auf.“"
  },
  {
    id: "term-tab", thema: "terminal", typ: "bedeutung",
    frage: "Welche Taste vervollständigt im Terminal Ordner- und Dateinamen?",
    optionen: ["Tab", "Enter", "Leertaste", "Strg"],
    richtig: 0,
    erklaerung: "Tippe die ersten Buchstaben und drück Tab, dann ergänzt das Terminal den Rest. Zweimal Tab zeigt alle Möglichkeiten.",
    tipp: "Probier im Terminal: cd ~/Dok und dann Tab."
  },
  {
    id: "term-pwd", thema: "terminal", typ: "bedeutung",
    frage: "Du weißt nicht mehr, in welchem Ordner das Terminal gerade ist. Welcher Befehl verrät es?",
    optionen: ["pwd", "whoami", "ls", "history"],
    richtig: 0,
    warum: {
      1: "whoami zeigt deinen Benutzernamen, nicht den Ordner.",
      2: "ls zeigt, was im Ordner liegt, aber nicht, wo du bist.",
      3: "history zeigt deine letzten Befehle."
    },
    erklaerung: "pwd heißt „print working directory“: Zeig den Ordner, in dem ich gerade arbeite. Oft steht er auch schon vorne in der Eingabezeile.",
    prompt: "„Führ pwd aus, damit wir sicher sind, dass du im richtigen Ordner bist.“"
  },
  {
    id: "term-mv", thema: "terminal", typ: "bedeutung",
    code: "mv entwurf.txt final.txt",
    frage: "Was macht dieser Befehl?",
    optionen: [
      "Benennt entwurf.txt in final.txt um",
      "Kopiert entwurf.txt nach final.txt",
      "Vergleicht die beiden Dateien",
      "Löscht beide Dateien"
    ],
    richtig: 0,
    warum: { 1: "Kopieren wäre cp. Nach mv gibt es entwurf.txt nicht mehr." },
    erklaerung: "mv heißt „move“, also verschieben. Bleibt die Datei im selben Ordner, ist es ein Umbenennen. Achtung: Gibt es final.txt schon, wird sie ohne Nachfrage überschrieben.",
    tipp: "mv -i fragt nach, bevor es eine vorhandene Datei überschreibt."
  },
  {
    id: "term-shell", thema: "terminal", typ: "bedeutung",
    frage: "Terminal, Shell, Bash: Was ist was?",
    optionen: [
      "Das Terminal ist das Fenster, die Shell (z. B. Bash) führt die Befehle aus",
      "Alle drei sind dasselbe Programm, nur unter verschiedenen Namen",
      "Bash ist ein Schutzprogramm, das gefährliche Befehle im Terminal blockiert",
      "Die Shell ist der Ordner, in dem alle Befehle als Dateien gespeichert sind"
    ],
    richtig: 0,
    warum: { 1: "Im Alltag benutzt man die Wörter oft gleich, aber es sind zwei Teile." },
    erklaerung: "Das Terminal zeigt nur Text an. Dahinter läuft die Shell, die deine Befehle versteht. Bash ist die häufigste Shell, andere heißen zsh oder fish."
  },
  {
    id: "term-kill", thema: "terminal", typ: "erlauben",
    code: "kill 48213",
    frage: "Port 3000 ist belegt. Claude hat herausgefunden, dass dort dein alter Dev-Server mit der Nummer 48213 läuft, und möchte:",
    richtig: 0,
    auchOk: [1],
    warum: {
      1: "Nachfragen ist okay, aber Claude hat schon gesagt, was dort läuft.",
      2: "Zu vorsichtig: Es geht nur um deinen eigenen alten Server."
    },
    erklaerung: "Jedes laufende Programm hat eine Nummer, die Prozess-ID. kill beendet das Programm mit dieser Nummer. Hier ist es genau der Server, der den Port blockiert.",
    tipp: "kill -9 würgt ein Programm hart ab. Das braucht man nur, wenn ein normales kill nicht hilft."
  },
  {
    id: "term-upgrade-erklaeren", thema: "terminal", typ: "upgrade",
    frage: "Claude möchte einen langen Befehl ausführen, den du nicht verstehst. Was schreibst du?",
    optionen: [
      "Ok, mach einfach.",
      "Erklär mir den Befehl Teil für Teil in einfachen Worten. Was ändert er, und kann man es rückgängig machen?",
      "Bitte sei vorsichtig mit solchen Befehlen und mach nichts, was irgendwie gefährlich sein könnte oder meinem Rechner schaden würde."
    ],
    richtig: 1,
    warum: {
      0: "Dann weißt du nicht, was gleich auf deinem Rechner passiert.",
      2: "Klingt gut, aber Claude hält den Befehl ja für ungefährlich. Du weißt danach immer noch nicht, was er tut."
    },
    erklaerung: "Zwei Fragen reichen fast immer: Was ändert der Befehl? Kann man es rückgängig machen? Reine Lese-Befehle sind harmlos.",
    prompt: "„Erklär mir den Befehl Teil für Teil. Was ändert er, und kann man es rückgängig machen?“"
  },
  {
    id: "term-l-cd-hoch", thema: "terminal", form: "luecke",
    code: "cd ___",
    frage: {
      de: "Du bist im Ordner `projekte/quiz` und willst einen Ordner nach oben, also nach `projekte`. Was fehlt?",
      en: "You are in the folder `projects/quiz` and want to go up one level, to `projects`. What is missing?"
    },
    optionen: ["..", "~", "/", "up"],
    richtig: 0,
    warum: {
      1: {
        de: "`~` führt in deinen Home-Ordner, nicht eine Ebene nach oben.",
        en: "`~` takes you to your home folder, not one level up."
      },
      2: { de: "`/` ist der oberste Ordner des ganzen Systems.", en: "`/` is the top folder of the whole system." },
      3: { de: "`cd up` sucht einen Ordner, der „up“ heißt.", en: "`cd up` looks for a folder named “up”." }
    },
    erklaerung: {
      de: "Zwei Punkte stehen für den Ordner darüber. `cd ..` geht eine Ebene nach oben, `cd ../..` zwei.",
      en: "Two dots stand for the folder above. `cd ..` goes up one level, `cd ../..` two."
    }
  }
);
