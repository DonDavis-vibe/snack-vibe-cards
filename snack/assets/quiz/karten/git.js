// Snack: Grundkarten zum Thema „Git“ / core cards for this topic.
// Card format: see the header of eigene-karten.js. A text is a plain string or a pair { de: "…", en: "…" }.
(window.SNACK_KARTEN = window.SNACK_KARTEN || []).push(
  {
    id: "git-repo", thema: "git", typ: "bedeutung",
    frage: { de: "Was ist ein Repository (kurz: Repo)?", en: "What is a repository (repo for short)?" },
    optionen: {
      de: [
        "Ein Projektordner, dessen komplette Änderungsgeschichte Git speichert",
        "Ein Server im Internet, auf dem deine fertige Website läuft",
        "Eine Sicherheitskopie des Projekts auf einem USB-Stick oder in der Cloud",
        "Ein Ordner, in dem Git nur Bilder und große Dateien ablegt"
      ],
      en: [
        "A project folder whose full change history Git saves",
        "A server on the internet where your finished website runs",
        "A backup copy of the project on a USB stick or in the cloud",
        "A folder where Git stores only images and large files"
      ]
    },
    richtig: 0,
    erklaerung: {
      de: "Ein Repo ist dein Projekt plus Gedächtnis. Git merkt sich jede gespeicherte Version, und du kannst jederzeit zurück.",
      en: "A repo is your project plus a memory. Git remembers every saved version, and you can go back at any time."
    },
    prompt: {
      de: "„Mach aus diesem Ordner ein Git-Repo, damit wir Versionen speichern können.“",
      en: "“Turn this folder into a Git repo so we can save versions.”"
    }
  },
  {
    id: "git-commit", thema: "git", typ: "bedeutung",
    frage: { de: "Was ist ein Commit?", en: "What is a commit?" },
    optionen: {
      de: [
        "Ein gespeicherter Zwischenstand mit kurzer Beschreibung",
        "Das Hochladen deiner geänderten Dateien auf GitHub",
        "Eine Notiz im Code, die erklärt, was eine Stelle tut",
        "Ein neuer Ordner, in dem Git eine Kopie aller Dateien ablegt"
      ],
      en: [
        "A saved snapshot with a short description",
        "Uploading your changed files to GitHub",
        "A note in the code that explains what a part does",
        "A new folder where Git puts a copy of all your files"
      ]
    },
    richtig: 0,
    warum: {
      1: {
        de: "Hochladen ist „push“. Ein Commit bleibt erst mal nur auf deinem Rechner.",
        en: "Uploading is “push.” A commit stays only on your computer for now."
      }
    },
    erklaerung: {
      de: "Ein Commit ist wie ein Speicherpunkt im Spiel. Geht später etwas kaputt, kannst du dorthin zurück.",
      en: "A commit is like a save point in a game. If something breaks later, you can go back to it."
    },
    prompt: {
      de: "„Das funktioniert jetzt. Mach einen Commit, bevor wir das nächste Feature anfangen.“",
      en: "“This works now. Make a commit before we start the next feature.”"
    }
  },
  {
    id: "git-push", thema: "git", typ: "bedeutung",
    code: "git push",
    frage: { de: "Was macht dieser Befehl?", en: "What does this command do?" },
    optionen: {
      de: [
        "Lädt deine Commits auf GitHub (oder einen anderen Server) hoch",
        "Holt die neuesten Änderungen vom Server auf deinen Rechner",
        "Schiebt den letzten Commit zurück, um ihn rückgängig zu machen",
        "Erstellt einen neuen Branch und wechselt direkt dorthin"
      ],
      en: [
        "Uploads your commits to GitHub (or another server)",
        "Downloads the latest changes from the server to your computer",
        "Pushes the last commit back in order to undo it",
        "Creates a new branch and switches to it right away"
      ]
    },
    richtig: 0,
    warum: { 1: { de: "Holen ist `git pull`.", en: "Downloading is `git pull`." } },
    erklaerung: {
      de: "push heißt hochschieben, pull heißt runterziehen. Erst nach dem Push sind deine Commits online gesichert.",
      en: "push means sending up, pull means bringing down. Your commits are only backed up online after the push."
    },
    prompt: { de: "„Push den aktuellen Stand auf GitHub.“", en: "“Push the current state to GitHub.”" }
  },
  {
    id: "git-branch", thema: "git", typ: "bedeutung",
    frage: { de: "Was ist ein Branch?", en: "What is a branch?" },
    optionen: {
      de: [
        "Eine Abzweigung, auf der du etwas ausprobierst, ohne die Hauptversion zu ändern",
        "Eine Sicherheitskopie des ganzen Projekts auf einem anderen Rechner oder Server",
        "Ein gespeicherter Zwischenstand mit kurzer Beschreibung",
        "Die Liste aller Dateien, die Git im Projekt beobachtet"
      ],
      en: [
        "A side path for trying things out without changing the main version",
        "A backup copy of your whole project that lives on another computer or server",
        "A saved snapshot with a short description",
        "The list of all files that Git watches in the project"
      ]
    },
    richtig: 0,
    warum: {
      2: {
        de: "Das ist ein Commit. Ein Branch ist eine ganze Abzweigung, auf der viele Commits liegen können.",
        en: "That is a commit. A branch is a whole side path that can hold many commits."
      }
    },
    erklaerung: {
      de: "Ein Branch ist eine Parallelwelt. Klappt das Experiment, wird er mit main zusammengeführt (Merge). Sonst wirfst du ihn einfach weg.",
      en: "A branch is a parallel world. If the experiment works, it gets combined with main (a merge). If not, you just throw it away."
    },
    prompt: {
      de: "„Probier das neue Design auf einem eigenen Branch, damit main sicher bleibt.“",
      en: "“Try the new design on its own branch so main stays safe.”"
    }
  },
  {
    id: "git-status", thema: "git", typ: "bedeutung",
    frage: {
      de: "Du willst sehen, welche Dateien sich seit dem letzten Commit geändert haben. Welcher Befehl?",
      en: "You want to see which files have changed since the last commit. Which command?"
    },
    optionen: ["git status", "git log", "git push", "git clone"],
    richtig: 0,
    warum: {
      1: { de: "git log zeigt die Liste der bisherigen Commits.", en: "git log shows the list of commits so far." },
      2: { de: "git push lädt hoch.", en: "git push uploads." },
      3: { de: "git clone lädt ein Repo herunter.", en: "git clone downloads a repo." }
    },
    erklaerung: {
      de: "git status ist immer sicher: Es schaut nur und ändert nichts. Gut, um vor einem Commit zu sehen, was passiert ist.",
      en: "git status is always safe: it only looks and changes nothing. Good for seeing what happened before you commit."
    },
    prompt: {
      de: "„Zeig mir git status und erklär kurz, was sich geändert hat.“",
      en: "“Show me git status and briefly explain what changed.”"
    }
  },
  {
    id: "git-clone", thema: "git", typ: "bedeutung",
    code: { de: "git clone https://github.com/beispiel/tool.git", en: "git clone https://github.com/example/tool.git" },
    frage: { de: "Was macht dieser Befehl?", en: "What does this command do?" },
    optionen: {
      de: [
        "Lädt das Repo komplett auf deinen Rechner herunter",
        "Kopiert dein Projekt von deinem Rechner auf GitHub",
        "Erstellt eine Kopie des letzten Commits",
        "Verdoppelt alle Dateien im Ordner"
      ],
      en: [
        "Downloads the whole repo to your computer",
        "Copies your project from your computer to GitHub",
        "Creates a copy of the last commit",
        "Duplicates all files in the folder"
      ]
    },
    richtig: 0,
    erklaerung: {
      de: "clone holt ein ganzes Repo samt Geschichte. Typisch, wenn du ein Projekt von GitHub ausprobieren willst.",
      en: "clone gets a whole repo, history included. Typical when you want to try out a project from GitHub."
    },
    prompt: {
      de: "„Klon dieses Repo in meinen Projekte-Ordner und sag mir, wie man es startet.“",
      en: "“Clone this repo into my projects folder and tell me how to start it.”"
    }
  },
  {
    id: "git-gitignore", thema: "git", typ: "bedeutung",
    frage: { de: "Wofür ist die Datei `.gitignore`?", en: "What is the `.gitignore` file for?" },
    optionen: {
      de: [
        "Sie listet Dateien, die Git nicht speichern soll, z. B. .env und node_modules",
        "Sie schaltet Git für dieses Projekt komplett aus, solange sie existiert",
        "Sie sammelt Warnungen von Git, die man vorerst ignorieren kann",
        "Sie versteckt das Repo auf GitHub, sodass fremde Leute es nicht finden können"
      ],
      en: [
        "It lists files Git should not save, like .env and node_modules",
        "It turns Git off completely for this project as long as it exists",
        "It collects warnings from Git that you can ignore for now",
        "It hides the repo on GitHub so that strangers cannot find it"
      ]
    },
    richtig: 0,
    erklaerung: {
      de: "Was in .gitignore steht, landet nie in einem Commit. Wichtig für .env-Dateien mit Schlüsseln und für riesige Ordner wie node_modules.",
      en: "Anything listed in .gitignore never ends up in a commit. Important for .env files with keys and for huge folders like node_modules."
    },
    prompt: {
      de: "„Prüf, ob .env und node_modules in der .gitignore stehen.“",
      en: "“Check whether .env and node_modules are in the .gitignore.”"
    }
  },
  {
    id: "git-status-erlauben", thema: "git", typ: "erlauben",
    code: "git status && git diff",
    frage: { de: "Claude möchte das hier ausführen:", en: "Claude wants to run this:" },
    richtig: 0,
    auchOk: [1],
    warum: {
      1: {
        de: "Nachfragen schadet nicht, ist hier aber unnötig.",
        en: "Asking does no harm, but it is not needed here."
      },
      2: {
        de: "Zu vorsichtig: Beide Befehle schauen nur und ändern nichts.",
        en: "Too cautious: both commands only look and change nothing."
      }
    },
    erklaerung: {
      de: "git status zeigt, was sich geändert hat, git diff zeigt die Änderungen im Detail. Beides liest nur.",
      en: "git status shows what has changed, git diff shows the changes in detail. Both only read."
    },
    tipp: {
      de: "Bei reinen Lese-Befehlen kannst du in Claude Code auch „nicht mehr fragen“ wählen.",
      en: "For read-only commands, you can also choose “don’t ask again” in Claude Code."
    }
  },
  {
    id: "git-force", thema: "git", typ: "erlauben",
    code: "git push --force",
    frage: { de: "Claude möchte das hier ausführen:", en: "Claude wants to run this:" },
    richtig: 1,
    auchOk: [2],
    warum: {
      0: {
        de: "Riskant: --force überschreibt den Stand auf dem Server, auch Commits, die nur dort liegen.",
        en: "Risky: --force overwrites what is on the server, including commits that exist only there."
      },
      2: {
        de: "Ablehnen ist auch okay. Besser ist aber, erst zu fragen, warum Claude das will.",
        en: "Denying is fine too. But it is better to ask first why Claude wants this."
      }
    },
    erklaerung: {
      de: "--force überschreibt die Geschichte auf dem Server mit deiner. Allein im eigenen Projekt ist das manchmal nötig, aber erst fragen: Warum? Geht es auch anders?",
      en: "--force overwrites the history on the server with yours. When you work alone on your own project, that is sometimes needed, but ask first: Why? Is there another way?"
    },
    prompt: {
      de: "„Warum ist --force nötig? Gibt es einen sichereren Weg, z. B. --force-with-lease?“",
      en: "“Why is --force needed? Is there a safer way, such as --force-with-lease?”"
    }
  },
  {
    id: "git-reset-hard", thema: "git", typ: "erlauben",
    code: "git reset --hard HEAD~3",
    frage: { de: "Claude möchte das hier ausführen:", en: "Claude wants to run this:" },
    richtig: 1,
    auchOk: [2],
    warum: {
      0: {
        de: "Vorsicht: Das wirft die letzten 3 Commits und alle ungespeicherten Änderungen weg.",
        en: "Careful: this throws away the last 3 commits and all changes you have not committed yet."
      },
      2: {
        de: "Ablehnen ist okay. Vielleicht ist es aber genau richtig, also erst nachfragen.",
        en: "Denying is fine. But it may be exactly the right thing, so ask first."
      }
    },
    erklaerung: {
      de: "HEAD~3 heißt „drei Commits zurück“, --hard heißt „alles danach wegwerfen“. Kann richtig sein, aber nur, wenn du genau das willst.",
      en: "HEAD~3 means “three commits back,” --hard means “throw away everything after that.” It can be right, but only if that is exactly what you want."
    },
    prompt: {
      de: "„Was genau geht dabei verloren? Mach vorher einen Backup-Branch.“",
      en: "“What exactly gets lost? Make a backup branch first.”"
    }
  },
  {
    id: "git-conflict", thema: "git", typ: "fehler",
    code: "CONFLICT (content): Merge conflict in index.html",
    frage: { de: "Was ist hier los?", en: "What is going on here?" },
    optionen: {
      de: [
        "Beide Seiten haben dieselbe Stelle geändert, Git weiß nicht, welche gilt",
        "Die Datei index.html ist kaputt und muss neu geschrieben werden",
        "GitHub ist nicht erreichbar, deshalb konnte nichts zusammengeführt werden",
        "Dir fehlen die Rechte, um index.html zu ändern oder zu überschreiben"
      ],
      en: [
        "Both sides changed the same spot, and Git can’t tell which to keep",
        "The file index.html is broken and has to be rewritten from scratch",
        "GitHub cannot be reached right now, so the merge could not be completed",
        "You lack the permissions to change or overwrite index.html"
      ]
    },
    richtig: 0,
    erklaerung: {
      de: "Ein Merge-Konflikt ist normal und kein Drama. Jemand muss entscheiden, welche Version bleibt, oder beide kombinieren.",
      en: "A merge conflict is normal and no big deal. Someone has to decide which version stays, or combine both."
    },
    prompt: {
      de: "„Es gibt einen Merge-Konflikt in index.html. Zeig mir beide Versionen und schlag vor, wie wir sie zusammenführen.“",
      en: "“There is a merge conflict in index.html. Show me both versions and suggest how to merge them.”"
    }
  },
  {
    id: "git-pull", thema: "git", typ: "bedeutung",
    frage: {
      de: "Du hast am Laptop gearbeitet und gepusht. Am PC willst du jetzt diesen neuen Stand haben. Welcher Befehl?",
      en: "You worked on your laptop and pushed. Now you want that latest version on your PC. Which command?"
    },
    optionen: ["git pull", "git push", "git clone", "git commit"],
    richtig: 0,
    warum: {
      1: {
        de: "push schiebt deine Commits hoch. Du willst aber etwas herunterholen.",
        en: "push sends your commits up. But you want to bring something down."
      },
      2: {
        de: "clone brauchst du nur beim allerersten Mal, wenn das Projekt noch gar nicht auf dem PC ist.",
        en: "You only need clone the very first time, when the project is not on the PC at all yet."
      },
      3: {
        de: "commit speichert einen Zwischenstand, holt aber nichts.",
        en: "commit saves a snapshot, but it does not download anything."
      }
    },
    erklaerung: {
      de: "git pull holt neue Commits vom Server und führt sie mit deinem Stand zusammen. Gute Gewohnheit: erst pull, dann weiterarbeiten.",
      en: "git pull downloads new commits from the server and merges them with your work. Good habit: pull first, then keep working."
    },
    prompt: {
      de: "„Mach erst git pull, damit wir auf dem neuesten Stand sind.“",
      en: "“Run git pull first so we are up to date.”"
    }
  },
  {
    id: "git-github", thema: "git", typ: "bedeutung",
    frage: {
      de: "Was ist der Unterschied zwischen Git und GitHub?",
      en: "What is the difference between Git and GitHub?"
    },
    optionen: {
      de: [
        "Git ist das Werkzeug auf deinem Rechner, GitHub eine Website für Repos",
        "Dasselbe Programm: Git ist der alte Name, GitHub der neue",
        "GitHub ist die kostenpflichtige Profi-Version von Git mit mehr Funktionen",
        "Git speichert Bilder und Dokumente, GitHub ist nur für Code gedacht"
      ],
      en: [
        "Git is the tool on your computer, GitHub a website for repos",
        "The same program: Git is the old name, GitHub the new one",
        "GitHub is the paid pro version of Git, with a lot more features",
        "Git stores images and documents, GitHub is meant only for code"
      ]
    },
    richtig: 0,
    erklaerung: {
      de: "Git funktioniert auch ganz ohne Internet. GitHub (oder GitLab, Codeberg) ist ein Ort, an dem du Repos sicherst, teilst und mit anderen bearbeitest.",
      en: "Git also works with no internet at all. GitHub (or GitLab, Codeberg) is a place where you back up repos, share them and work on them with others."
    },
    prompt: {
      de: "„Leg auf GitHub ein privates Repo an und push das Projekt dorthin.“",
      en: "“Create a private repo on GitHub and push the project there.”"
    }
  },
  {
    id: "git-message", thema: "git", typ: "upgrade",
    frage: {
      de: "Welche Commit-Nachricht hilft dir in drei Monaten am meisten?",
      en: "Which commit message helps you most three months from now?"
    },
    optionen: {
      de: [
        "Änderungen",
        "Suche über der Projektliste eingebaut, filtert beim Tippen",
        "Verschiedene Verbesserungen und Anpassungen an mehreren Stellen im Projekt vorgenommen"
      ],
      en: [
        "Changes",
        "Added search above the project list, filters as you type",
        "Made various improvements and adjustments in several places in the project"
      ]
    },
    richtig: 1,
    warum: {
      0: {
        de: "Jeder Commit enthält Änderungen. Welche, verrät die Nachricht nicht.",
        en: "Every commit contains changes. The message does not say which ones."
      },
      2: {
        de: "Lang, aber nichtssagend. Was wurde verbessert? In drei Monaten weißt du es nicht mehr.",
        en: "Long, but it says nothing. What was improved? In three months you will not remember."
      }
    },
    erklaerung: {
      de: "Eine gute Commit-Nachricht sagt in einem Satz, was sich geändert hat. Dann findest du später schnell den Stand, zu dem du zurück willst.",
      en: "A good commit message says in one sentence what changed. Then you can quickly find the version you want to go back to later."
    },
    prompt: {
      de: "„Commit mit einer kurzen Nachricht, die sagt, was sich geändert hat.“",
      en: "“Commit with a short message that says what changed.”"
    }
  },
  {
    id: "git-l-commit", thema: "git", form: "luecke",
    code: { de: "git ___ -m \"Login repariert\"", en: "git ___ -m \"Fix login\"" },
    frage: {
      de: "Du willst die vorgemerkten Änderungen als Zwischenstand speichern. Was fehlt?",
      en: "You want to save the staged changes as a snapshot. What is missing?"
    },
    optionen: ["commit", "push", "add", "save"],
    richtig: 0,
    warum: {
      1: {
        de: "`push` lädt fertige Commits hoch. Erst muss es einen Commit geben.",
        en: "`push` uploads finished commits. There has to be a commit first."
      },
      2: {
        de: "`add` merkt Änderungen nur vor. Gespeichert ist damit noch nichts.",
        en: "`add` only stages changes. Nothing is saved yet."
      },
      3: { de: "Einen Befehl `git save` gibt es nicht.", en: "There is no `git save` command." }
    },
    erklaerung: {
      de: "`git commit -m \"…\"` speichert alles Vorgemerkte als Zwischenstand. Der Text hinter `-m` beschreibt kurz, was sich geändert hat.",
      en: "`git commit -m \"…\"` saves everything staged as a snapshot. The text after `-m` says briefly what changed."
    },
    prompt: {
      de: "„Mach einen Commit mit einer kurzen Beschreibung dessen, was wir geändert haben.“",
      en: "“Make a commit with a short description of what we changed.”"
    }
  },
  {
    id: "git-r-ablauf", thema: "git", form: "reihenfolge",
    frage: {
      de: "Du hast etwas geändert und willst es auf GitHub haben. In welcher Reihenfolge?",
      en: "You changed something and want it on GitHub. In which order?"
    },
    schritte: {
      de: [
        "Datei ändern und speichern",
        "`git add`: Änderung vormerken",
        "`git commit`: Zwischenstand speichern",
        "`git push`: zu GitHub hochladen"
      ],
      en: [
        "Edit the file and save it",
        "`git add`: stage the change",
        "`git commit`: save a snapshot",
        "`git push`: upload to GitHub"
      ]
    },
    erklaerung: {
      de: "Vormerken, speichern, hochladen. Ohne Commit hat `push` nichts zum Hochladen.",
      en: "Stage, save, upload. Without a commit, `push` has nothing to upload."
    },
    prompt: {
      de: "„Committe die Änderungen und push sie zu GitHub.“",
      en: "“Commit the changes and push them to GitHub.”"
    }
  },
  {
    id: "git-m-gitignore", thema: "git", form: "mehrfach",
    frage: {
      de: "Was gehört in die `.gitignore`, damit es nicht auf GitHub landet?",
      en: "What belongs in `.gitignore` so it does not end up on GitHub?"
    },
    optionen: {
      de: [
        "`.env` mit API-Schlüsseln",
        "`node_modules/`",
        "`index.html`",
        "`README.md`",
        "Datenbank mit echten Nutzerdaten"
      ],
      en: ["`.env` with API keys", "`node_modules/`", "`index.html`", "`README.md`", "Database with real user data"]
    },
    richtige: [0, 1, 4],
    erklaerung: {
      de: "In die `.gitignore` kommt Geheimes, Privates und alles, was sich neu erzeugen lässt. Dein eigener Code und die README gehören ins Repo.",
      en: "`.gitignore` is for secrets, private data and anything that can be regenerated. Your own code and the README belong in the repo."
    },
    prompt: {
      de: "„Prüf, ob in der .gitignore alles Geheime und Erzeugte steht.“",
      en: "“Check that .gitignore covers everything secret and generated.”"
    }
  },
  {
    id: "git-p-befehle", thema: "git", form: "paare",
    frage: { de: "Welcher Git-Befehl macht was?", en: "Which Git command does what?" },
    paare: [
      ["git add", { de: "merkt Änderungen vor", en: "stages changes" }],
      ["git commit", { de: "speichert einen Zwischenstand", en: "saves a snapshot" }],
      ["git push", { de: "lädt Commits zu GitHub hoch", en: "uploads commits to GitHub" }],
      ["git pull", { de: "holt neue Commits von GitHub", en: "fetches new commits from GitHub" }]
    ],
    erklaerung: {
      de: "`add` und `commit` arbeiten nur auf deinem Rechner. `push` und `pull` gleichen mit GitHub ab.",
      en: "`add` and `commit` only work on your computer. `push` and `pull` sync with GitHub."
    }
  }
);
