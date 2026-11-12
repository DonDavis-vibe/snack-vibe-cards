// Snack: Grundkarten zum Thema „Terminal“ / core cards for this topic.
// Card format: see the header of eigene-karten.js. A text is a plain string or a pair { de: "…", en: "…" }.
(window.SNACK_KARTEN = window.SNACK_KARTEN || []).push(
  {
    id: "term-ls", thema: "terminal", typ: "bedeutung",
    code: "ls -la",
    frage: { de: "Was macht dieser Befehl?", en: "What does this command do?" },
    optionen: {
      de: [
        "Zeigt die Dateien im aktuellen Ordner",
        "Löscht alle Dateien, auch die versteckten",
        "Startet das Programm neu",
        "Zeigt die Internetverbindung"
      ],
      en: [
        "Shows the files in the current folder",
        "Deletes all files, including hidden ones",
        "Restarts the program",
        "Shows the internet connection"
      ]
    },
    richtig: 0,
    warum: {
      1: {
        de: "Löschen wäre `rm`. `ls` schaut nur, es ändert nichts.",
        en: "Deleting would be `rm`. `ls` only looks, it changes nothing."
      }
    },
    erklaerung: {
      de: "ls steht für „list“. Mit -la siehst du auch versteckte Dateien und Details wie Größe und Datum.",
      en: "ls stands for “list”. With -la you also see hidden files and details like size and date."
    },
    prompt: {
      de: "„Zeig mir mit ls -la, was im Projektordner liegt, auch die versteckten Dateien.“",
      en: "“Use ls -la to show me what is in the project folder, including hidden files.”"
    }
  },
  {
    id: "term-cd", thema: "terminal", typ: "bedeutung",
    code: { de: "cd ~/Projekte/quiz", en: "cd ~/projects/quiz" },
    frage: { de: "Was passiert bei diesem Befehl?", en: "What happens with this command?" },
    optionen: {
      de: [
        "Du wechselst in diesen Ordner",
        "Der Ordner wird erstellt",
        "Der Ordner wird auf eine CD gebrannt",
        "Der Ordner wird kopiert"
      ],
      en: [
        "You switch to this folder",
        "The folder is created",
        "The folder is burned onto a CD",
        "The folder is copied"
      ]
    },
    richtig: 0,
    warum: {
      1: { de: "Erstellen wäre `mkdir` (make directory).", en: "Creating would be `mkdir` (make directory)." },
      2: {
        de: "Netter Gedanke, aber cd heißt „change directory“.",
        en: "Nice thought, but cd means “change directory”."
      },
      3: { de: "Kopieren wäre `cp`.", en: "Copying would be `cp`." }
    },
    erklaerung: {
      de: "cd heißt „change directory“, also Ordner wechseln. Die Tilde ~ ist die Abkürzung für deinen Home-Ordner (z. B. /home/alex).",
      en: "cd means “change directory”, so you switch folders. The tilde ~ is short for your home folder (for example /home/alex)."
    },
    prompt: {
      de: "„Wechsel erst mit cd in den Projektordner, bevor du den Befehl ausführst.“",
      en: "“First use cd to switch to the project folder before you run the command.”"
    }
  },
  {
    id: "term-sudo", thema: "terminal", typ: "bedeutung",
    code: "sudo nano /etc/hosts",
    frage: { de: "Was bedeutet das `sudo` am Anfang?", en: "What does the `sudo` at the start mean?" },
    optionen: {
      de: [
        "Der Befehl läuft mit Admin-Rechten",
        "Der Befehl läuft besonders schnell",
        "Der Befehl wird nur simuliert",
        "Der Befehl läuft im Hintergrund"
      ],
      en: [
        "The command runs with admin rights",
        "The command runs especially fast",
        "The command is only simulated",
        "The command runs in the background"
      ]
    },
    richtig: 0,
    erklaerung: {
      de: "sudo heißt „superuser do“. Damit darf ein Befehl alles, auch Systemdateien ändern. Deshalb fragt das System nach deinem Passwort.",
      en: "sudo means “superuser do”. It lets a command do anything, including changing system files. That is why the system asks for your password."
    },
    prompt: {
      de: "„Warum braucht dieser Befehl Admin-Rechte? Geht es auch ohne sudo?“",
      en: "“Why does this command need admin rights? Does it work without sudo?”"
    }
  },
  {
    id: "term-rm-node", thema: "terminal", typ: "erlauben",
    code: "rm -rf node_modules && npm install",
    frage: {
      de: "Claude fragt, ob es diesen Befehl ausführen darf:",
      en: "Claude asks whether it may run this command:"
    },
    richtig: 0,
    auchOk: [1],
    warum: {
      1: {
        de: "Nachfragen ist okay. Hier ist der Befehl aber harmlos.",
        en: "Asking is okay. But here the command is harmless."
      },
      2: {
        de: "Verständlich, rm -rf sieht gruselig aus. In diesem Fall ist es aber harmlos.",
        en: "Understandable, rm -rf looks scary. In this case it is harmless, though."
      }
    },
    erklaerung: {
      de: "rm -rf heißt „löschen ohne Nachfrage“. node_modules ist aber nur ein Ordner mit heruntergeladenen Paketen, und npm install holt sie sofort neu.",
      en: "rm -rf means “delete without asking”. But node_modules is just a folder of downloaded packages, and npm install fetches them again right away."
    },
    tipp: {
      de: "Vorsicht erst, wenn hinter rm -rf ein ~, ein / oder ein Ordner steht, den du nicht kennst.",
      en: "Only be careful when rm -rf is followed by a ~, a / or a folder you don't know."
    }
  },
  {
    id: "term-rm-home", thema: "terminal", typ: "erlauben",
    code: "rm -rf ~/",
    frage: { de: "Claude möchte aufräumen und schlägt vor:", en: "Claude wants to clean up and suggests:" },
    richtig: 2,
    warum: {
      0: {
        de: "Bloß nicht! ~ ist dein kompletter persönlicher Ordner.",
        en: "Don't! ~ is your entire personal folder."
      },
      1: {
        de: "Da gibt es nichts nachzufragen. Das ist nie die richtige Lösung.",
        en: "There is nothing to ask here. This is never the right solution."
      }
    },
    erklaerung: {
      de: "Das löscht deinen ganzen Home-Ordner: Dokumente, Bilder, Projekte. Ohne Papierkorb und ohne Rückfrage.",
      en: "This deletes your whole home folder: documents, pictures, projects. No trash and no confirmation."
    },
    prompt: {
      de: "„Stopp. Lösch nichts außerhalb des Projektordners. Was wolltest du eigentlich erreichen?“",
      en: "“Stop. Don't delete anything outside the project folder. What were you actually trying to achieve?”"
    }
  },
  {
    id: "term-chmod", thema: "terminal", typ: "bedeutung",
    code: "chmod +x start.sh",
    frage: { de: "Was macht dieser Befehl?", en: "What does this command do?" },
    optionen: {
      de: ["Macht die Datei ausführbar", "Benennt die Datei um", "Löscht die Datei", "Verschlüsselt die Datei"],
      en: ["Makes the file executable", "Gives the file a different name", "Deletes the file", "Encrypts the file"]
    },
    richtig: 0,
    erklaerung: {
      de: "chmod ändert Rechte. +x heißt: Diese Datei darf als Programm gestartet werden. Danach funktioniert ./start.sh.",
      en: "chmod changes permissions. +x means: this file may be started as a program. After that, ./start.sh works."
    },
    prompt: {
      de: "„Beim Starten kommt „Permission denied“. Mach start.sh mit chmod +x ausführbar.“",
      en: "“I get ‘Permission denied’ when I start it. Make start.sh executable with chmod +x.”"
    }
  },
  {
    id: "term-pipe", thema: "terminal", typ: "bedeutung",
    code: "ls | grep quiz",
    frage: { de: "Was macht der senkrechte Strich in der Mitte?", en: "What does the vertical bar in the middle do?" },
    optionen: {
      de: [
        "Gibt die Ausgabe des ersten Befehls an den zweiten weiter",
        "Lässt beide Befehle gleichzeitig nebeneinander laufen",
        "Macht alles dahinter zu einem Kommentar, der ignoriert wird",
        "Speichert das Ergebnis von ls in eine Datei namens grep"
      ],
      en: [
        "Passes the first command's output on to the second",
        "Makes both commands run side by side at the same time",
        "Turns everything after it into a comment that is ignored",
        "Saves the result of ls to a file named grep"
      ]
    },
    richtig: 0,
    warum: {
      3: {
        de: "In eine Datei speichern wäre das Größer-Zeichen >.",
        en: "Saving to a file would be the greater-than sign >."
      }
    },
    erklaerung: {
      de: "Der Strich heißt Pipe. Die Ausgabe von ls fließt in grep, das nur Zeilen mit „quiz“ übrig lässt. Wie ein Rohr zwischen zwei Programmen.",
      en: "The bar is called a pipe. The output of ls flows into grep, which keeps only the lines containing “quiz”. Like a tube connecting two programs."
    },
    tipp: {
      de: "Selbst bauen musst du so etwas nicht. Aber jetzt kannst du solche Befehle lesen, bevor du sie erlaubst.",
      en: "You don't have to build something like this yourself. But now you can read such commands before you allow them."
    }
  },
  {
    id: "term-ctrl-c", thema: "terminal", typ: "bedeutung",
    frage: {
      de: "Ein Server läuft im Terminal und du willst ihn stoppen. Was drückst du?",
      en: "A server is running in the terminal and you want to stop it. What do you press?"
    },
    optionen: { de: ["Strg + C", "Strg + Z", "Strg + S", "Esc"], en: ["Ctrl + C", "Ctrl + Z", "Ctrl + S", "Esc"] },
    richtig: 0,
    warum: {
      1: {
        de: "Strg + Z hält das Programm nur an. Es läuft nicht weiter, blockiert aber seinen Port.",
        en: "Ctrl + Z only suspends the program. It stops running but keeps blocking its port."
      },
      2: {
        de: "Strg + S friert die Ausgabe im Terminal ein. Strg + Q löst das wieder.",
        en: "Ctrl + S freezes the output in the terminal. Ctrl + Q unfreezes it."
      },
      3: { de: "Esc macht im Terminal meistens gar nichts.", en: "Esc usually does nothing at all in the terminal." }
    },
    erklaerung: {
      de: "Strg + C bricht das laufende Programm im Terminal ab. Kopieren hat im Terminal deshalb eine andere Kombination, oft Strg + Umschalt + C (am Mac Cmd + C).",
      en: "Ctrl + C stops the running program in the terminal. That is why copying in a terminal uses a different shortcut, often Ctrl + Shift + C (Cmd + C on a Mac)."
    },
    prompt: {
      de: "„Ich hab den Server mit Strg + Z statt Strg + C beendet. Räum den alten Prozess bitte auf.“",
      en: "“I stopped the server with Ctrl + Z instead of Ctrl + C. Please clean up the old process.”"
    }
  },
  {
    id: "term-tab", thema: "terminal", typ: "bedeutung",
    frage: {
      de: "Welche Taste vervollständigt im Terminal Ordner- und Dateinamen?",
      en: "Which key completes folder and file names in the terminal?"
    },
    optionen: { de: ["Tab", "Enter", "Leertaste", "Strg"], en: ["Tab", "Enter", "Space bar", "Ctrl"] },
    richtig: 0,
    erklaerung: {
      de: "Tippe die ersten Buchstaben und drück Tab, dann ergänzt das Terminal den Rest. Zweimal Tab zeigt alle Möglichkeiten.",
      en: "Type the first few letters and press Tab, and the terminal fills in the rest. Pressing Tab twice shows all the options."
    },
    tipp: { de: "Probier im Terminal: cd ~/Dok und dann Tab.", en: "Try it in the terminal: cd ~/Doc and then Tab." }
  },
  {
    id: "term-pwd", thema: "terminal", typ: "bedeutung",
    frage: {
      de: "Du weißt nicht mehr, in welchem Ordner das Terminal gerade ist. Welcher Befehl verrät es?",
      en: "You no longer know which folder the terminal is in. Which command tells you?"
    },
    optionen: ["pwd", "whoami", "ls", "history"],
    richtig: 0,
    warum: {
      1: {
        de: "whoami zeigt deinen Benutzernamen, nicht den Ordner.",
        en: "whoami shows your username, not the folder."
      },
      2: {
        de: "ls zeigt, was im Ordner liegt, aber nicht, wo du bist.",
        en: "ls shows what is in the folder, but not where you are."
      },
      3: { de: "history zeigt deine letzten Befehle.", en: "history shows your most recent commands." }
    },
    erklaerung: {
      de: "pwd heißt „print working directory“: Zeig den Ordner, in dem ich gerade arbeite. Oft steht er auch schon vorne in der Eingabezeile.",
      en: "pwd means “print working directory”: show the folder I am working in right now. Often it is already shown at the start of the input line."
    },
    prompt: {
      de: "„Führ pwd aus, damit wir sicher sind, dass du im richtigen Ordner bist.“",
      en: "“Run pwd so we are sure you are in the right folder.”"
    }
  },
  {
    id: "term-mv", thema: "terminal", typ: "bedeutung",
    code: { de: "mv entwurf.txt final.txt", en: "mv draft.txt final.txt" },
    frage: { de: "Was macht dieser Befehl?", en: "What does this command do?" },
    optionen: {
      de: [
        "Benennt entwurf.txt in final.txt um",
        "Kopiert entwurf.txt nach final.txt",
        "Vergleicht die beiden Dateien",
        "Löscht beide Dateien"
      ],
      en: [
        "Renames draft.txt to final.txt",
        "Makes a copy of draft.txt called final.txt",
        "Compares the two files",
        "Deletes both files"
      ]
    },
    richtig: 0,
    warum: {
      1: {
        de: "Kopieren wäre cp. Nach mv gibt es entwurf.txt nicht mehr.",
        en: "Copying would be cp. After mv, draft.txt no longer exists."
      }
    },
    erklaerung: {
      de: "mv heißt „move“, also verschieben. Bleibt die Datei im selben Ordner, ist es ein Umbenennen. Achtung: Gibt es final.txt schon, wird sie ohne Nachfrage überschrieben.",
      en: "mv means “move”. If the file stays in the same folder, it is a rename. Careful: if final.txt already exists, it gets overwritten without asking."
    },
    tipp: {
      de: "mv -i fragt nach, bevor es eine vorhandene Datei überschreibt.",
      en: "mv -i asks before it overwrites an existing file."
    }
  },
  {
    id: "term-shell", thema: "terminal", typ: "bedeutung",
    frage: { de: "Terminal, Shell, Bash: Was ist was?", en: "Terminal, shell, Bash: what is what?" },
    optionen: {
      de: [
        "Das Terminal ist das Fenster, die Shell (z. B. Bash) führt die Befehle aus",
        "Alle drei sind dasselbe Programm, nur unter verschiedenen Namen",
        "Bash ist ein Schutzprogramm, das gefährliche Befehle im Terminal blockiert",
        "Die Shell ist der Ordner, in dem alle Befehle als Dateien gespeichert sind"
      ],
      en: [
        "The terminal is the window, the shell (e.g. Bash) runs the commands",
        "All three are the same program, just under different names",
        "Bash is a security program that blocks dangerous commands in the terminal",
        "The shell is the folder where all commands are stored as files"
      ]
    },
    richtig: 0,
    warum: {
      1: {
        de: "Im Alltag benutzt man die Wörter oft gleich, aber es sind zwei Teile.",
        en: "In everyday use, people often treat the words as the same, but they are two parts."
      }
    },
    erklaerung: {
      de: "Das Terminal zeigt nur Text an. Dahinter läuft die Shell, die deine Befehle versteht. Bash ist sehr verbreitet, andere Shells heißen zsh (Standard am Mac) oder fish.",
      en: "The terminal only displays text. Behind it runs the shell, which understands your commands. Bash is very common; other shells are zsh (the default on a Mac) or fish."
    }
  },
  {
    id: "term-kill", thema: "terminal", typ: "erlauben",
    code: "kill 48213",
    frage: {
      de: "Port 3000 ist belegt. Claude hat herausgefunden, dass dort dein alter Dev-Server mit der Nummer 48213 läuft, und möchte:",
      en: "Port 3000 is in use. Claude found out that your old dev server is running there with the number 48213, and wants to run:"
    },
    richtig: 0,
    auchOk: [1],
    warum: {
      1: {
        de: "Nachfragen ist okay, aber Claude hat schon gesagt, was dort läuft.",
        en: "Asking is okay, but Claude already told you what is running there."
      },
      2: {
        de: "Zu vorsichtig: Es geht nur um deinen eigenen alten Server.",
        en: "Too cautious: this is only about your own old server."
      }
    },
    erklaerung: {
      de: "Jedes laufende Programm hat eine Nummer, die Prozess-ID. kill beendet das Programm mit dieser Nummer. Hier ist es genau der Server, der den Port blockiert.",
      en: "Every running program has a number, the process ID. kill ends the program with that number. Here it is exactly the server that is blocking the port."
    },
    tipp: {
      de: "kill -9 würgt ein Programm hart ab. Das braucht man nur, wenn ein normales kill nicht hilft.",
      en: "kill -9 force-quits a program. You only need that when a normal kill does not help."
    }
  },
  {
    id: "term-upgrade-erklaeren", thema: "terminal", typ: "upgrade",
    frage: {
      de: "Claude möchte einen langen Befehl ausführen, den du nicht verstehst. Was schreibst du?",
      en: "Claude wants to run a long command that you don't understand. What do you write?"
    },
    optionen: {
      de: [
        "Ok, mach einfach.",
        "Erklär mir den Befehl Teil für Teil in einfachen Worten. Was ändert er, und kann man es rückgängig machen?",
        "Bitte sei vorsichtig mit solchen Befehlen und mach nichts, was irgendwie gefährlich sein könnte oder meinem Rechner schaden würde."
      ],
      en: [
        "Ok, just do it.",
        "Explain the command to me piece by piece in simple words. What does it change, and can it be undone?",
        "Please be careful with commands like this and don't do anything that could be dangerous in any way or would harm my computer."
      ]
    },
    richtig: 1,
    warum: {
      0: {
        de: "Dann weißt du nicht, was gleich auf deinem Rechner passiert.",
        en: "Then you don't know what is about to happen on your computer."
      },
      2: {
        de: "Klingt gut, aber Claude hält den Befehl ja für ungefährlich. Du weißt danach immer noch nicht, was er tut.",
        en: "Sounds good, but Claude already thinks the command is safe. You still won't know what it does."
      }
    },
    erklaerung: {
      de: "Zwei Fragen reichen fast immer: Was ändert der Befehl? Kann man es rückgängig machen? Reine Lese-Befehle sind harmlos.",
      en: "Two questions are almost always enough: What does the command change? Can it be undone? Read-only commands are harmless."
    },
    prompt: {
      de: "„Erklär mir den Befehl Teil für Teil. Was ändert er, und kann man es rückgängig machen?“",
      en: "“Explain the command to me piece by piece. What does it change, and can it be undone?”"
    }
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
