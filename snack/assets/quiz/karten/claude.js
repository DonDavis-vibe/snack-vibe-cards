// Snack: Grundkarten zum Thema „Claude Code bedienen“ / core cards for this topic.
// Card format: see the header of eigene-karten.js. A text is a plain string or a pair { de: "…", en: "…" }.
(window.SNACK_KARTEN = window.SNACK_KARTEN || []).push(
  {
    id: "cc-plan", thema: "claude", typ: "bedeutung",
    frage: { de: "Was macht der Plan-Modus in Claude Code?", en: "What does plan mode do in Claude Code?" },
    optionen: {
      de: [
        "Claude liest und schreibt einen Plan, ändert aber nichts, bis du zustimmst",
        "Claude arbeitet schneller, weil es Schritte überspringt, die es für unnötig hält",
        "Claude plant Termine und Erinnerungen in deinem Kalender ein",
        "Claude darf alles ohne Nachfrage, weil der Plan vorher feststeht"
      ],
      en: [
        "Claude reads and writes a plan but changes nothing until you approve",
        "Claude works faster because it skips steps it considers unnecessary",
        "Claude schedules appointments and reminders in your calendar",
        "Claude may do anything without asking because the plan is already set"
      ]
    },
    richtig: 0,
    erklaerung: {
      de: "Im Plan-Modus liest Claude nur und denkt nach. Du prüfst den Plan, und erst nach deinem OK wird gebaut. Ideal für größere Änderungen.",
      en: "In plan mode, Claude only reads and thinks. You review the plan, and building starts only after your OK. Ideal for bigger changes."
    },
    tipp: {
      de: "Im Terminal wechselst du mit Umschalt + Tab zwischen den Modi, in der App über die Modus-Auswahl am Eingabefeld.",
      en: "In the terminal, press Shift + Tab to switch between modes. In the app, use the mode selector next to the input box."
    }
  },
  {
    id: "cc-esc", thema: "claude", typ: "bedeutung",
    frage: {
      de: "Claude läuft gerade in die falsche Richtung. Wie unterbrichst du sofort?",
      en: "Claude is heading in the wrong direction. How do you interrupt it right away?"
    },
    optionen: {
      de: [
        "Esc drücken (in der App: der Stopp-Knopf)",
        "Das Fenster schließen",
        "Strg + Alt + Entf",
        "Abwarten, bis Claude fertig ist, und dann korrigieren"
      ],
      en: [
        "Press Esc (in the app: the stop button)",
        "Close the window",
        "Ctrl + Alt + Del",
        "Wait until Claude is finished, then correct it"
      ]
    },
    richtig: 0,
    warum: {
      1: {
        de: "Dann ist auch das laufende Gespräch unterbrochen, und du musst neu einsteigen.",
        en: "That cuts off the running conversation too, and you have to find your way back in."
      },
      2: {
        de: "Das ist für hängende Systeme gedacht, viel zu grob.",
        en: "That is meant for frozen systems. Far too heavy-handed."
      },
      3: {
        de: "Je länger Claude in die falsche Richtung läuft, desto mehr musst du später rückgängig machen.",
        en: "The longer Claude heads the wrong way, the more you have to undo later."
      }
    },
    erklaerung: {
      de: "Esc stoppt Claude, ohne das Gespräch zu verlieren. Danach kannst du sofort korrigieren.",
      en: "Esc stops Claude without losing the conversation. Then you can correct it right away."
    },
    prompt: {
      de: "„Stopp, falsche Richtung. Ich meinte nur den Button, nicht die ganze Seite.“",
      en: "“Stop, wrong direction. I only meant the button, not the whole page.”"
    }
  },
  {
    id: "cc-clear", thema: "claude", typ: "bedeutung",
    frage: {
      de: "Du bist mit einer Aufgabe fertig und fängst etwas völlig anderes an. Was ist sinnvoll?",
      en: "You have finished a task and are starting something completely different. What makes sense?"
    },
    optionen: {
      de: [
        "Eine neue Session oder `/clear`, damit der alte Verlauf nicht stört",
        "Im selben Gespräch weitermachen, damit Claude alles Bisherige weiß",
        "Claude Code neu installieren, damit es wieder frisch ist",
        "`/compact`, damit Claude das alte Thema kurz zusammenfasst"
      ],
      en: [
        "A new session or `/clear`, so the old history doesn't get in the way",
        "Keep going in the same conversation, so Claude knows everything so far",
        "Reinstall Claude Code, so it is fresh again",
        "`/compact`, so Claude briefly summarizes the old topic"
      ]
    },
    richtig: 0,
    warum: {
      1: {
        de: "Geht, aber der alte Verlauf füllt den Kontext und kann Claude auf falsche Fährten bringen.",
        en: "It works, but the old history fills the context and can send Claude down the wrong track."
      },
      3: {
        de: "/compact behält das alte Thema als Zusammenfassung. Für etwas völlig Neues ist ein leerer Start besser.",
        en: "/compact keeps the old topic as a summary. For something completely new, an empty start is better."
      }
    },
    erklaerung: {
      de: "/clear leert das Gespräch, CLAUDE.md und Memory bleiben. Ein frischer Start ohne alten Ballast bringt oft bessere Ergebnisse.",
      en: "/clear empties the conversation; CLAUDE.md and memory stay. A fresh start without old baggage often gives better results."
    }
  },
  {
    id: "cc-compact", thema: "claude", typ: "bedeutung",
    frage: { de: "Was macht der Befehl `/compact`?", en: "What does the `/compact` command do?" },
    optionen: {
      de: [
        "Er fasst das bisherige Gespräch zusammen, damit wieder Platz im Kontext ist",
        "Er packt deine Projektdateien in eine Zip-Datei, damit sie weniger Platz brauchen",
        "Er löscht das Gespräch komplett, nur CLAUDE.md und Memory bleiben",
        "Er macht die Ansicht kompakter, damit mehr Text auf den Bildschirm passt"
      ],
      en: [
        "It summarizes the conversation so far to free up space in the context",
        "It packs your project files into a zip file so they take up less space",
        "It deletes the conversation completely; only CLAUDE.md and memory stay",
        "It makes the view more compact so more text fits on the screen"
      ]
    },
    richtig: 0,
    warum: { 2: { de: "Komplett leeren macht /clear.", en: "Emptying it completely is what /clear does." } },
    erklaerung: {
      de: "Bei langen Sessions wird der Platz knapp. /compact fasst zusammen, und es geht weiter. Du kannst dazuschreiben, was in der Zusammenfassung unbedingt drinbleiben soll.",
      en: "In long sessions, space runs short. /compact summarizes, and you carry on. You can add a note saying what must stay in the summary."
    },
    prompt: {
      de: "„/compact Behalte die Entscheidungen zum Kartenformat und die offenen Punkte.“",
      en: "“/compact Keep the decisions about the card format and the open items.”"
    }
  },
  {
    id: "cc-kontext", thema: "claude", typ: "bedeutung",
    frage: { de: "Was ist das Kontextfenster?", en: "What is the context window?" },
    optionen: {
      de: [
        "Claudes Arbeitsgedächtnis für diese Session: alles, was es gerade „im Kopf“ hat",
        "Das Eingabefeld, in das du deine Nachrichten an Claude tippst",
        "Claudes Notizen über dich, die über alle Sessions hinweg erhalten bleiben",
        "Die Leiste am Rand, die zeigt, welche Dateien im Projekt geöffnet sind"
      ],
      en: [
        "Claude's working memory for this session: everything it has “in mind” right now",
        "The input box where you type your messages to Claude",
        "Claude's notes about you, which are kept across all of your sessions",
        "The bar at the side that shows which files are open in the project"
      ]
    },
    richtig: 0,
    warum: {
      2: {
        de: "Das ist die Memory. Das Kontextfenster gilt nur für die aktuelle Session.",
        en: "That is memory. The context window only applies to the current session."
      }
    },
    erklaerung: {
      de: "Gespräch, gelesene Dateien und Befehlsausgaben füllen das Kontextfenster. Ist es voll, wird zusammengefasst, und Details können verloren gehen. Wichtiges gehört deshalb in Dateien wie todo.md.",
      en: "The conversation, files Claude has read and command output fill the context window. When it is full, it gets summarized, and details can get lost. That is why important things belong in files like todo.md."
    },
    tipp: {
      de: "Lange Logs und riesige Dateien füllen den Kontext schnell. Lieber gezielt nach der wichtigen Stelle fragen.",
      en: "Long logs and huge files fill the context fast. Better to ask specifically for the part that matters."
    }
  },
  {
    id: "cc-rewind", thema: "claude", typ: "bedeutung",
    frage: {
      de: "Claude hat gerade etwas umgebaut, und jetzt ist es schlechter. Gibt es einen Rückgängig-Knopf?",
      en: "Claude just rebuilt something, and now it is worse. Is there an undo button?"
    },
    optionen: {
      de: [
        "Ja: Zurückspulen (`/rewind` oder zweimal Esc) setzt Gespräch und Dateien zurück",
        "Nein, Claude Code kann nichts rückgängig machen, nur Git kann das",
        "Ja, Strg + Z im Terminal macht Claudes letzte Änderung rückgängig",
        "Ja, aber nur, wenn du vor der Änderung einen Screenshot gemacht hast"
      ],
      en: [
        "Yes: rewind (`/rewind` or Esc twice) resets conversation and files",
        "No, Claude Code can't undo anything by itself, only Git can do that",
        "Yes, Ctrl + Z in the terminal undoes Claude's last change",
        "Yes, but only if you took a screenshot before the change"
      ]
    },
    richtig: 0,
    warum: {
      1: {
        de: "Git hilft auch, aber Claude Code hat eigene Prüfpunkte zum Zurückspulen.",
        en: "Git helps too, but Claude Code has its own checkpoints for rewinding."
      },
      2: {
        de: "Strg + Z pausiert im Terminal ein Programm. Rückgängig macht es nichts.",
        en: "Ctrl + Z pauses a program in the terminal. It doesn't undo anything."
      }
    },
    erklaerung: {
      de: "Claude Code setzt bei jeder Nachricht einen Prüfpunkt (Checkpoint). Achtung: Was über Terminal-Befehle passiert ist, z. B. gelöschte Dateien, holt es nicht zurück. Git bleibt dein Sicherheitsnetz.",
      en: "Claude Code sets a checkpoint with every message. Careful: it does not bring back what happened through terminal commands, such as deleted files. Git remains your safety net."
    }
  },
  {
    id: "cc-at-datei", thema: "claude", typ: "bedeutung",
    frage: {
      de: "Wofür ist das @ im Prompt, z. B. `@quiz-app/karten.js`?",
      en: "What is the @ in a prompt for, e.g. `@quiz-app/cards.js`?"
    },
    optionen: {
      de: [
        "Es hängt diese Datei direkt an, damit Claude sie sofort kennt",
        "Es schickt die Datei per E-Mail an dich, damit du sie unterwegs hast",
        "Es markiert die Datei als wichtig, damit Claude sie nicht verändert",
        "Es löscht die Datei und legt sie danach frisch neu an"
      ],
      en: [
        "It attaches this file directly, so Claude knows it right away",
        "It emails the file to you, so you have it with you on the go",
        "It marks the file as important, so Claude doesn't change it",
        "It deletes the file and then creates it fresh again"
      ]
    },
    richtig: 0,
    warum: {
      2: {
        de: "Schützen tut das @ nichts. Es zeigt Claude nur, welche Datei du meinst.",
        en: "The @ doesn't protect anything. It only shows Claude which file you mean."
      }
    },
    erklaerung: {
      de: "Tipp @ und ein paar Buchstaben, dann schlägt Claude Code passende Dateien vor. So muss Claude nicht erst suchen, welche Datei du meinst.",
      en: "Type @ and a few letters, and Claude Code suggests matching files. That way Claude doesn't have to search for the file you mean."
    },
    prompt: {
      de: "„In @quiz-app/karten.js fehlt bei einer Karte die Erklärung. Finde sie.“",
      en: "“One card in @quiz-app/cards.js is missing its explanation. Find it.”"
    }
  },
  {
    id: "cc-claude-md-orte", thema: "claude", typ: "bedeutung",
    frage: {
      de: "Es gibt eine CLAUDE.md in `~/.claude/` und eine im Projektordner. Was ist der Unterschied?",
      en: "There is one CLAUDE.md in `~/.claude/` and one in the project folder. What is the difference?"
    },
    optionen: {
      de: [
        "Die in ~/.claude gilt für alle Projekte, die im Projektordner nur für dieses Projekt",
        "Die im Projektordner ist eine automatische Sicherheitskopie der globalen Datei",
        "Die globale ist für Linux-Befehle, die im Projekt für Claudes Verhalten",
        "Claude liest nur die im Projektordner, die globale ist bloß eine Vorlage"
      ],
      en: [
        "The one in ~/.claude covers all projects, the project one only this project",
        "The one in the project folder is an automatic backup copy of the global file",
        "The global one is for Linux commands, the project one for Claude's behavior",
        "Claude only reads the one in the project folder, the global one is just a template"
      ]
    },
    richtig: 0,
    erklaerung: {
      de: "Allgemeine Regeln wie „erklär mir Fachbegriffe“ kommen in die globale Datei. Projektwissen wie „starten mit npm run dev“ kommt in die Projekt-CLAUDE.md.",
      en: "General rules like “explain technical terms to me” go in the global file. Project knowledge like “start with npm run dev” goes in the project's CLAUDE.md."
    },
    prompt: {
      de: "„Schreib in die Projekt-CLAUDE.md, wie man das Projekt startet und testet.“",
      en: "“Write in the project's CLAUDE.md how to start and test the project.”"
    }
  },
  {
    id: "cc-init", thema: "claude", typ: "bedeutung",
    frage: { de: "Was macht `/init` in einem Projekt?", en: "What does `/init` do in a project?" },
    optionen: {
      de: [
        "Claude schaut sich den Code an und legt eine CLAUDE.md mit dem Wichtigsten an",
        "Es installiert Claude Code neu und setzt alle Einstellungen zurück",
        "Es löscht den Projektordner und legt ein leeres Projekt an",
        "Es macht aus dem Ordner ein Git-Repo, damit Versionen gespeichert werden"
      ],
      en: [
        "Claude looks at the code and creates a CLAUDE.md with the essentials",
        "It reinstalls Claude Code and resets all of your settings",
        "It deletes the project folder and creates an empty project",
        "It turns the folder into a Git repo, so versions of your files get saved"
      ]
    },
    richtig: 0,
    warum: {
      3: {
        de: "Ein Git-Repo erstellt git init. Ähnlicher Name, andere Sache.",
        en: "A Git repo is created by git init. Similar name, different thing."
      }
    },
    erklaerung: {
      de: "Praktisch bei Projekten, die es schon gibt. Die Datei kannst du danach selbst ergänzen.",
      en: "Handy for projects that already exist. You can add to the file yourself afterwards."
    }
  },
  {
    id: "cc-mcp", thema: "claude", typ: "bedeutung",
    frage: { de: "Was ist MCP?", en: "What is MCP?" },
    optionen: {
      de: [
        "Ein Standard, über den Claude an Werkzeuge wie Browser oder Kalender angeschlossen wird",
        "Eine eigene Programmiersprache, in der Claude Code geschrieben ist und Erweiterungen gebaut werden",
        "Das Format, in dem Claude Code deine Gespräche und Einstellungen auf der Festplatte speichert",
        "Ein Sicherheitsmodus, der verhindert, dass Claude ohne Erlaubnis ins Internet geht"
      ],
      en: [
        "A standard for connecting Claude to tools like a browser or a calendar",
        "A separate programming language that Claude Code is written in and extensions are built with",
        "The format in which Claude Code stores your conversations and settings on disk",
        "A security mode that keeps Claude from going online without permission"
      ]
    },
    richtig: 0,
    erklaerung: {
      de: "MCP (Model Context Protocol) ist wie eine Steckdosen-Norm: Jedes Werkzeug mit passendem Stecker lässt sich an Claude anschließen. Die Browser-Steuerung in deiner Claude-App läuft zum Beispiel darüber.",
      en: "MCP (Model Context Protocol) is like a power outlet standard: any tool with a matching plug can be connected to Claude. The browser control in your Claude app, for example, runs through it."
    }
  },
  {
    id: "cc-nicht-mehr-fragen", thema: "claude", typ: "bedeutung",
    frage: {
      de: "Claude fragt, ob es `npm test` ausführen darf. Du wählst „Ja, und nicht mehr fragen“. Was passiert?",
      en: "Claude asks whether it may run `npm test`. You choose “Yes, and don't ask again.” What happens?"
    },
    optionen: {
      de: [
        "Dieser Befehl ist künftig ohne Nachfrage erlaubt, die Regel wird gespeichert",
        "Claude fragt ab jetzt bei gar keinem Befehl mehr nach, auch nicht bei gefährlichen",
        "Nur diesmal erlaubt, beim nächsten Mal wird wieder gefragt",
        "Der Befehl wird gesperrt"
      ],
      en: [
        "This command is allowed without asking from now on; the rule is saved",
        "From now on Claude doesn't ask about any command at all, not even dangerous ones",
        "Allowed only this time; next time it asks again",
        "The command gets blocked"
      ]
    },
    richtig: 0,
    erklaerung: {
      de: "Die Erlaubnis gilt für diesen einen Befehl, meist nur im aktuellen Projekt, und landet in einer settings-Datei. Gut für harmlose Befehle wie Tests oder git status.",
      en: "The permission applies to this one command, usually only in the current project, and ends up in a settings file. Good for harmless commands like tests or git status."
    }
  },
  {
    id: "cc-upgrade-selbst-testen", thema: "claude", typ: "upgrade",
    frage: {
      de: "Claude soll einen Fehler beheben. Welcher Prompt spart dir am meisten Hin und Her?",
      en: "Claude is supposed to fix a bug. Which prompt saves you the most back-and-forth?"
    },
    optionen: {
      de: [
        "Fix den Fehler.",
        "Fix den Fehler beim Speichern. Starte danach die App, probier das Speichern selbst aus und melde dich erst, wenn es klappt.",
        "Fix den Fehler, und zwar diesmal richtig und gründlich! Das ist schon das dritte Mal, ich will das vom Tisch haben."
      ],
      en: [
        "Fix the bug.",
        "Fix the save bug. Then start the app, try saving yourself, and only get back to me once it works.",
        "Fix the bug, and this time do it properly and thoroughly! This is the third time already, I want it off my plate."
      ]
    },
    richtig: 1,
    warum: {
      0: {
        de: "Dann bist du der Tester und meldest jeden neuen Fehler selbst zurück.",
        en: "Then you are the tester and have to report every new bug back yourself."
      },
      2: {
        de: "Der Nachdruck hilft nicht. Ein Prüfauftrag schon.",
        en: "Pushing harder doesn't help. Asking Claude to check does."
      }
    },
    erklaerung: {
      de: "Claude kann oft selbst testen: Befehle ausführen, Tests starten, im Browser nachsehen. Sag ihm, woran es merkt, dass es wirklich klappt.",
      en: "Claude can often test things itself: run commands, start tests, look in the browser. Tell it how it will know that it really works."
    },
    prompt: {
      de: "Formel: „[Aufgabe]. Prüf danach selbst mit [Test] und melde dich erst, wenn es klappt.“",
      en: "Formula: “[Task]. Then check it yourself with [test] and only get back to me once it works.”"
    }
  },
  {
    id: "cc-subagent", thema: "claude", typ: "bedeutung",
    frage: { de: "Wann lohnt sich ein Subagent in Claude Code?", en: "When is a subagent worth it in Claude Code?" },
    optionen: {
      de: [
        "Wenn eine Teilaufgabe viel liest oder sucht und nur das Ergebnis ins Gespräch soll",
        "Wenn die Aufgabe so schwer ist, dass Claude sie allein sicher nicht schafft",
        "Wenn jemand anderes den fertigen Code prüfen und freigeben soll",
        "Immer bei jeder Frage, weil er automatisch schneller und billiger ist"
      ],
      en: [
        "When a subtask reads or searches a lot and you only want the result back",
        "When the task is so hard that Claude certainly can't manage it on its own",
        "When someone else should review and approve the finished code",
        "Always, for every question, because it is automatically faster and cheaper"
      ]
    },
    richtig: 0,
    warum: {
      1: {
        de: "Schwere Aufgaben löst ein Subagent nicht besser. Er ist ein Helfer für getrennte Arbeit.",
        en: "A subagent doesn't solve hard tasks any better. It is a helper for separate work."
      },
      2: {
        de: "Prüfen und freigeben bleibt bei dir. Ein Subagent liefert nur ein Ergebnis zurück.",
        en: "Reviewing and approving stays with you. A subagent only hands back a result."
      },
      3: {
        de: "Nicht immer: Jeder Subagent muss sich erst einlesen, bei kleinen Fragen ist er ein Umweg.",
        en: "Not always: every subagent has to read up first, so for small questions it is a detour."
      }
    },
    erklaerung: {
      de: "Ein Subagent arbeitet in einem eigenen Gedächtnis. Alles, was er liest, bleibt dort, nur die Zusammenfassung kommt zurück. Dein Kontextfenster bleibt frei, ideal zum Durchsuchen großer Projekte.",
      en: "A subagent works in its own memory. Everything it reads stays there; only the summary comes back. Your context window stays free, which is ideal for searching large projects."
    },
    prompt: {
      de: "„Lass einen Subagent alle Stellen suchen, die die Datenbank ansprechen, und gib mir nur die Zusammenfassung.“",
      en: "“Have a subagent find all the places that talk to the database, and give me only the summary.”"
    }
  },
  {
    id: "cc-md-kurz", thema: "claude", typ: "bedeutung",
    frage: { de: "Was gehört in eine gute CLAUDE.md?", en: "What belongs in a good CLAUDE.md?" },
    optionen: {
      de: [
        "Kurze, dauerhafte Regeln: Startbefehle, Stil, was Claude nie tun soll",
        "Das komplette Gespräch der letzten Session, damit nichts verloren geht",
        "Der gesamte Quellcode, damit Claude ihn nicht mehr einlesen muss",
        "Deine Passwörter und Keys, damit Claude sich selbst anmelden kann"
      ],
      en: [
        "Short, lasting rules: start commands, style, what Claude should never do",
        "The complete conversation from the last session, so that nothing gets lost",
        "The entire source code, so Claude doesn't have to read it in again",
        "Your passwords and keys, so Claude can log in by itself"
      ]
    },
    richtig: 0,
    warum: {
      1: {
        de: "Ein Gespräch ist zu lang und veraltet schnell. Dafür gibt es Zusammenfassungen oder `/compact`.",
        en: "A conversation is too long and goes stale fast. That is what summaries or `/compact` are for."
      },
      2: {
        de: "Den Code liest Claude selbst. Eine zu lange CLAUDE.md kostet bei jeder Session Platz.",
        en: "Claude reads the code itself. A CLAUDE.md that is too long costs space in every session."
      },
      3: {
        de: "Keys gehören nie in eine Datei, die im Projekt liegt und in Git landen kann.",
        en: "Keys never belong in a file that sits in the project and can end up in Git."
      }
    },
    erklaerung: {
      de: "Die CLAUDE.md wird zu Beginn jeder Session gelesen und belegt Platz. Darum kurz halten: nur, was Claude immer wissen muss. Alles Geheime gehört in die .env.",
      en: "CLAUDE.md is read at the start of every session and takes up space. So keep it short: only what Claude always needs to know. Anything secret belongs in the .env file."
    },
    prompt: {
      de: "„Schreib in die CLAUDE.md, wie man das Projekt startet und testet. Halte es auf höchstens zehn Zeilen.“",
      en: "“Write in CLAUDE.md how to start and test the project. Keep it to ten lines at most.”"
    }
  },
  {
    id: "cc-r-plan", thema: "claude", form: "reihenfolge",
    frage: {
      de: "Eine größere Änderung steht an. Was ist eine gute Reihenfolge mit Claude Code?",
      en: "A bigger change is coming up. What is a good order with Claude Code?"
    },
    schritte: {
      de: [
        "Ziel beschreiben",
        "Plan zeigen lassen",
        "Plan prüfen und freigeben",
        "Umsetzen lassen",
        "Ergebnis selbst ausprobieren"
      ],
      en: [
        "Describe the goal",
        "Ask for a plan",
        "Review and approve the plan",
        "Let Claude build it",
        "Try the result yourself"
      ]
    },
    erklaerung: {
      de: "Im Plan-Modus ändert Claude nichts, bis du den Plan freigibst. Fehler im Ansatz fallen so auf, bevor Code entsteht.",
      en: "In plan mode Claude changes nothing until you approve the plan. Flaws in the approach show up before any code exists."
    },
    prompt: {
      de: "„Geh in den Plan-Modus und zeig mir erst, was du ändern willst.“",
      en: "“Switch to plan mode and show me first what you want to change.”"
    }
  }
);
