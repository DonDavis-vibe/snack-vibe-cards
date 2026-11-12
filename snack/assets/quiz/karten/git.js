// Snack: Grundkarten zum Thema „Git“ / core cards for this topic.
// Card format: see the header of eigene-karten.js. A text is a plain string or a pair { de: "…", en: "…" }.
(window.SNACK_KARTEN = window.SNACK_KARTEN || []).push(
  {
    id: "git-repo", thema: "git", typ: "bedeutung",
    frage: "Was ist ein Repository (kurz: Repo)?",
    optionen: [
      "Ein Projektordner, dessen komplette Änderungsgeschichte Git speichert",
      "Ein Server im Internet, auf dem deine fertige Website läuft",
      "Eine Sicherheitskopie des Projekts auf einem USB-Stick oder in der Cloud",
      "Ein Ordner, in dem Git nur Bilder und große Dateien ablegt"
    ],
    richtig: 0,
    erklaerung: "Ein Repo ist dein Projekt plus Gedächtnis. Git merkt sich jede gespeicherte Version, und du kannst jederzeit zurück.",
    prompt: "„Mach aus diesem Ordner ein Git-Repo, damit wir Versionen speichern können.“"
  },
  {
    id: "git-commit", thema: "git", typ: "bedeutung",
    frage: "Was ist ein Commit?",
    optionen: [
      "Ein gespeicherter Zwischenstand mit kurzer Beschreibung",
      "Das Hochladen deiner geänderten Dateien auf GitHub",
      "Eine Notiz im Code, die erklärt, was eine Stelle tut",
      "Ein neuer Ordner, in dem Git eine Kopie aller Dateien ablegt"
    ],
    richtig: 0,
    warum: { 1: "Hochladen ist „push“. Ein Commit bleibt erst mal nur auf deinem Rechner." },
    erklaerung: "Ein Commit ist wie ein Speicherpunkt im Spiel. Geht später etwas kaputt, kannst du dorthin zurück.",
    prompt: "„Das funktioniert jetzt. Mach einen Commit, bevor wir das nächste Feature anfangen.“"
  },
  {
    id: "git-push", thema: "git", typ: "bedeutung",
    code: "git push",
    frage: "Was macht dieser Befehl?",
    optionen: [
      "Lädt deine Commits auf GitHub (oder einen anderen Server) hoch",
      "Holt die neuesten Änderungen vom Server auf deinen Rechner",
      "Schiebt den letzten Commit zurück, um ihn rückgängig zu machen",
      "Erstellt einen neuen Branch und wechselt direkt dorthin"
    ],
    richtig: 0,
    warum: { 1: "Holen ist `git pull`." },
    erklaerung: "push heißt hochschieben, pull heißt runterziehen. Erst nach dem Push sind deine Commits online gesichert.",
    prompt: "„Push den aktuellen Stand auf GitHub.“"
  },
  {
    id: "git-branch", thema: "git", typ: "bedeutung",
    frage: "Was ist ein Branch?",
    optionen: [
      "Eine Abzweigung, auf der du etwas ausprobierst, ohne die Hauptversion zu ändern",
      "Eine Sicherheitskopie des ganzen Projekts auf einem anderen Rechner oder Server",
      "Ein gespeicherter Zwischenstand mit kurzer Beschreibung",
      "Die Liste aller Dateien, die Git im Projekt beobachtet"
    ],
    richtig: 0,
    warum: { 2: "Das ist ein Commit. Ein Branch ist eine ganze Abzweigung, auf der viele Commits liegen können." },
    erklaerung: "Ein Branch ist eine Parallelwelt. Klappt das Experiment, wird er mit main zusammengeführt (Merge). Sonst wirfst du ihn einfach weg.",
    prompt: "„Probier das neue Design auf einem eigenen Branch, damit main sicher bleibt.“"
  },
  {
    id: "git-status", thema: "git", typ: "bedeutung",
    frage: "Du willst sehen, welche Dateien sich seit dem letzten Commit geändert haben. Welcher Befehl?",
    optionen: ["git status", "git log", "git push", "git clone"],
    richtig: 0,
    warum: {
      1: "git log zeigt die Liste der bisherigen Commits.",
      2: "git push lädt hoch.",
      3: "git clone lädt ein Repo herunter."
    },
    erklaerung: "git status ist immer sicher: Es schaut nur und ändert nichts. Gut, um vor einem Commit zu sehen, was passiert ist.",
    prompt: "„Zeig mir git status und erklär kurz, was sich geändert hat.“"
  },
  {
    id: "git-clone", thema: "git", typ: "bedeutung",
    code: "git clone https://github.com/beispiel/tool.git",
    frage: "Was macht dieser Befehl?",
    optionen: [
      "Lädt das Repo komplett auf deinen Rechner herunter",
      "Kopiert dein Projekt von deinem Rechner auf GitHub",
      "Erstellt eine Kopie des letzten Commits",
      "Verdoppelt alle Dateien im Ordner"
    ],
    richtig: 0,
    erklaerung: "clone holt ein ganzes Repo samt Geschichte. Typisch, wenn du ein Projekt von GitHub ausprobieren willst.",
    prompt: "„Klon dieses Repo in meinen Projekte-Ordner und sag mir, wie man es startet.“"
  },
  {
    id: "git-gitignore", thema: "git", typ: "bedeutung",
    frage: "Wofür ist die Datei `.gitignore`?",
    optionen: [
      "Sie listet Dateien, die Git nicht speichern soll, z. B. .env und node_modules",
      "Sie schaltet Git für dieses Projekt komplett aus, solange sie existiert",
      "Sie sammelt Warnungen von Git, die man vorerst ignorieren kann",
      "Sie versteckt das Repo auf GitHub, sodass fremde Leute es nicht finden können"
    ],
    richtig: 0,
    erklaerung: "Was in .gitignore steht, landet nie in einem Commit. Wichtig für .env-Dateien mit Schlüsseln und für riesige Ordner wie node_modules.",
    prompt: "„Prüf, ob .env und node_modules in der .gitignore stehen.“"
  },
  {
    id: "git-status-erlauben", thema: "git", typ: "erlauben",
    code: "git status && git diff",
    frage: "Claude möchte das hier ausführen:",
    richtig: 0,
    auchOk: [1],
    warum: {
      1: "Nachfragen schadet nicht, ist hier aber unnötig.",
      2: "Zu vorsichtig: Beide Befehle schauen nur und ändern nichts."
    },
    erklaerung: "git status zeigt, was sich geändert hat, git diff zeigt die Änderungen im Detail. Beides liest nur.",
    tipp: "Bei reinen Lese-Befehlen kannst du in Claude Code auch „nicht mehr fragen“ wählen."
  },
  {
    id: "git-force", thema: "git", typ: "erlauben",
    code: "git push --force",
    frage: "Claude möchte das hier ausführen:",
    richtig: 1,
    auchOk: [2],
    warum: {
      0: "Riskant: --force überschreibt den Stand auf dem Server, auch Commits, die nur dort liegen.",
      2: "Ablehnen ist auch okay. Besser ist aber, erst zu fragen, warum Claude das will."
    },
    erklaerung: "--force überschreibt die Geschichte auf dem Server mit deiner. Allein im eigenen Projekt ist das manchmal nötig, aber erst fragen: Warum? Geht es auch anders?",
    prompt: "„Warum ist --force nötig? Gibt es einen sichereren Weg, z. B. --force-with-lease?“"
  },
  {
    id: "git-reset-hard", thema: "git", typ: "erlauben",
    code: "git reset --hard HEAD~3",
    frage: "Claude möchte das hier ausführen:",
    richtig: 1,
    auchOk: [2],
    warum: {
      0: "Vorsicht: Das wirft die letzten 3 Commits und alle ungespeicherten Änderungen weg.",
      2: "Ablehnen ist okay. Vielleicht ist es aber genau richtig, also erst nachfragen."
    },
    erklaerung: "HEAD~3 heißt „drei Commits zurück“, --hard heißt „alles danach wegwerfen“. Kann richtig sein, aber nur, wenn du genau das willst.",
    prompt: "„Was genau geht dabei verloren? Mach vorher einen Backup-Branch.“"
  },
  {
    id: "git-conflict", thema: "git", typ: "fehler",
    code: "CONFLICT (content): Merge conflict in index.html",
    frage: "Was ist hier los?",
    optionen: [
      "Beide Seiten haben dieselbe Stelle geändert, Git weiß nicht, welche gilt",
      "Die Datei index.html ist kaputt und muss neu geschrieben werden",
      "GitHub ist nicht erreichbar, deshalb konnte nichts zusammengeführt werden",
      "Dir fehlen die Rechte, um index.html zu ändern oder zu überschreiben"
    ],
    richtig: 0,
    erklaerung: "Ein Merge-Konflikt ist normal und kein Drama. Jemand muss entscheiden, welche Version bleibt, oder beide kombinieren.",
    prompt: "„Es gibt einen Merge-Konflikt in index.html. Zeig mir beide Versionen und schlag vor, wie wir sie zusammenführen.“"
  },
  {
    id: "git-pull", thema: "git", typ: "bedeutung",
    frage: "Du hast am Laptop gearbeitet und gepusht. Am PC willst du jetzt diesen neuen Stand haben. Welcher Befehl?",
    optionen: ["git pull", "git push", "git clone", "git commit"],
    richtig: 0,
    warum: {
      1: "push schiebt deine Commits hoch. Du willst aber etwas herunterholen.",
      2: "clone brauchst du nur beim allerersten Mal, wenn das Projekt noch gar nicht auf dem PC ist.",
      3: "commit speichert einen Zwischenstand, holt aber nichts."
    },
    erklaerung: "git pull holt neue Commits vom Server und führt sie mit deinem Stand zusammen. Gute Gewohnheit: erst pull, dann weiterarbeiten.",
    prompt: "„Mach erst git pull, damit wir auf dem neuesten Stand sind.“"
  },
  {
    id: "git-github", thema: "git", typ: "bedeutung",
    frage: "Was ist der Unterschied zwischen Git und GitHub?",
    optionen: [
      "Git ist das Werkzeug auf deinem Rechner, GitHub eine Website für Repos",
      "Dasselbe Programm: Git ist der alte Name, GitHub der neue",
      "GitHub ist die kostenpflichtige Profi-Version von Git mit mehr Funktionen",
      "Git speichert Bilder und Dokumente, GitHub ist nur für Code gedacht"
    ],
    richtig: 0,
    erklaerung: "Git funktioniert auch ganz ohne Internet. GitHub (oder GitLab, Codeberg) ist ein Ort, an dem du Repos sicherst, teilst und mit anderen bearbeitest.",
    prompt: "„Leg auf GitHub ein privates Repo an und push das Projekt dorthin.“"
  },
  {
    id: "git-message", thema: "git", typ: "upgrade",
    frage: "Welche Commit-Nachricht hilft dir in drei Monaten am meisten?",
    optionen: [
      "Änderungen",
      "Suche über der Projektliste eingebaut, filtert beim Tippen",
      "Verschiedene Verbesserungen und Anpassungen an mehreren Stellen im Projekt vorgenommen"
    ],
    richtig: 1,
    warum: {
      0: "Jeder Commit enthält Änderungen. Welche, verrät die Nachricht nicht.",
      2: "Lang, aber nichtssagend. Was wurde verbessert? In drei Monaten weißt du es nicht mehr."
    },
    erklaerung: "Eine gute Commit-Nachricht sagt in einem Satz, was sich geändert hat. Dann findest du später schnell den Stand, zu dem du zurück willst.",
    prompt: "„Commit mit einer kurzen Nachricht, die sagt, was sich geändert hat.“"
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
