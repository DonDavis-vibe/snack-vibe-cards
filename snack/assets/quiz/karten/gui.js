// Snack: Grundkarten zum Thema „GUI-Elemente“ / core cards for this topic.
// Card format: see the header of eigene-karten.js. A text is a plain string or a pair { de: "…", en: "…" }.
(window.SNACK_KARTEN = window.SNACK_KARTEN || []).push(
  {
    id: "gui-toast", thema: "gui", typ: "benennen", mockup: "toast",
    frage: "Die kleine Meldung unten rechts taucht kurz auf und verschwindet von selbst. Wie heißt sie?",
    optionen: ["Popup", "Toast", "Modal", "Tooltip"],
    richtig: 1,
    warum: {
      0: "„Popup“ ist zu ungenau. Claude weiß dann nicht, ob du Modal, Toast oder Tooltip meinst.",
      2: "Ein Modal blockiert alles dahinter, bis du es schließt.",
      3: "Ein Tooltip erscheint nur, wenn die Maus über etwas schwebt."
    },
    erklaerung: "Ein Toast ploppt kurz hoch wie Toast aus dem Toaster und verschwindet allein. Andere Namen dafür: Snackbar, Notification.",
    prompt: "„Zeig nach dem Speichern unten rechts einen Toast „Gespeichert“, der nach 3 Sekunden verschwindet.“"
  },
  {
    id: "gui-modal", thema: "gui", typ: "benennen", mockup: "modal", hl: "dialog",
    frage: "Das Fenster in der Mitte blockiert alles dahinter, bis du es schließt. Wie heißt es?",
    optionen: ["Modal", "Toast", "Sidebar", "Tab"],
    richtig: 0,
    warum: {
      1: "Ein Toast ist klein, blockiert nichts und verschwindet von selbst.",
      2: "Eine Sidebar ist eine Leiste am Rand.",
      3: "Tabs sind Reiter zum Umschalten zwischen Ansichten."
    },
    erklaerung: "Ein Modal (auch: Dialog) liegt über der Seite und erzwingt eine Entscheidung, z. B. „Wirklich löschen?“.",
    prompt: "„Bevor ein Projekt gelöscht wird, zeig ein Modal „Wirklich löschen?“ mit den Buttons Abbrechen und Löschen.“"
  },
  {
    id: "gui-overlay", thema: "gui", typ: "benennen", mockup: "modal", hl: "overlay",
    frage: "Wie heißt die abgedunkelte Fläche hinter dem Fenster?",
    optionen: ["Schatten", "Overlay", "Hintergrundbild", "Footer"],
    richtig: 1,
    warum: {
      0: "Ein Schatten (Shadow) ist der weiche Rand direkt um ein Element.",
      2: "Ein Hintergrundbild ist ein Bild, keine Abdunklung.",
      3: "Der Footer ist der Bereich ganz unten auf einer Seite."
    },
    erklaerung: "Das Overlay (auch: Backdrop) legt sich halbdurchsichtig über die Seite und lenkt den Blick aufs Modal.",
    prompt: "„Mach das Overlay hinter dem Modal etwas dunkler. Ein Klick darauf soll das Modal schließen.“"
  },
  {
    id: "gui-dropdown", thema: "gui", typ: "benennen", mockup: "dropdown",
    frage: "Du klickst auf „Sortieren“ und eine Liste klappt nach unten auf. Wie heißt das Element?",
    optionen: ["Accordion", "Dropdown", "Tabs", "Breadcrumb"],
    richtig: 1,
    warum: {
      0: "Ein Accordion klappt Inhalte auf der Seite auf, keine Auswahlliste.",
      2: "Tabs zeigen alle Optionen nebeneinander, ohne Aufklappen.",
      3: "Eine Breadcrumb zeigt den Pfad, wo du gerade bist."
    },
    erklaerung: "Ein Dropdown (Auswahlmenü, im Code oft „Select“) zeigt seine Optionen erst nach dem Klick.",
    prompt: "„Ersetze die drei Sortier-Buttons durch ein Dropdown mit Neueste, Älteste und A–Z.“"
  },
  {
    id: "gui-tooltip", thema: "gui", typ: "benennen", mockup: "tooltip",
    frage: "Du fährst mit der Maus über das Papierkorb-Symbol und ein kleines Schild erscheint. Wie heißt das Schild?",
    optionen: ["Toast", "Badge", "Tooltip", "Label"],
    richtig: 2,
    warum: {
      0: "Ein Toast kommt nach einer Aktion, nicht beim Drüberfahren.",
      1: "Ein Badge ist ein kleiner Zähler oder Status, z. B. eine rote 3.",
      3: "Ein Label ist eine Beschriftung, die immer sichtbar ist."
    },
    erklaerung: "Ein Tooltip erklärt ein Element, sobald die Maus darüber schwebt. Praktisch für Symbole ohne Text.",
    prompt: "„Gib allen Icon-Buttons in der Toolbar einen Tooltip mit ihrer Funktion.“"
  },
  {
    id: "gui-sidebar", thema: "gui", typ: "benennen", mockup: "sidebar",
    frage: "Wie heißt die Leiste links mit den Menüpunkten?",
    optionen: ["Sidebar", "Navbar", "Footer", "Modal"],
    richtig: 0,
    warum: {
      1: "Die Navbar ist die Leiste oben.",
      2: "Der Footer ist ganz unten.",
      3: "Ein Modal ist ein Fenster in der Mitte."
    },
    erklaerung: "Die Sidebar (Seitenleiste) sitzt am Rand, meist links, und enthält die Navigation.",
    prompt: "„Mach die Sidebar einklappbar, sodass im eingeklappten Zustand nur noch die Icons zu sehen sind.“"
  },
  {
    id: "gui-hamburger", thema: "gui", typ: "benennen", mockup: "hamburger",
    frage: "Wie heißt das Symbol mit den drei Strichen oben links?",
    optionen: ["Hamburger-Menü", "Drag-Handle", "Kebab-Menü", "Listen-Symbol"],
    richtig: 0,
    warum: {
      1: "Ein Drag-Handle (oft sechs Punkte) dient zum Verschieben.",
      2: "Das Kebab-Menü sind drei Punkte übereinander, meist für „Mehr Optionen“.",
      3: "Klingt logisch, aber mit dem Fachwort erkennt Claude sofort, was du meinst."
    },
    erklaerung: "Das Hamburger-Menü öffnet die Navigation, vor allem auf schmalen Bildschirmen. Die drei Striche erinnern an einen Burger.",
    prompt: "„Auf Handy-Breite soll die Navbar zu einem Hamburger-Menü zusammenklappen.“"
  },
  {
    id: "gui-tabs", thema: "gui", typ: "benennen", mockup: "tabs",
    frage: "„Übersicht“, „Einstellungen“, „Verlauf“: Du klickst, und der Inhalt darunter wechselt. Wie heißen diese Reiter?",
    optionen: ["Tabs", "Buttons", "Breadcrumbs", "Chips"],
    richtig: 0,
    warum: {
      1: "Technisch sind es Buttons, aber „Tabs“ sagt Claude auch, wie sie sich verhalten.",
      2: "Breadcrumbs zeigen den Pfad, keine Ansichten.",
      3: "Chips sind kleine Kapseln für Filter oder Schlagwörter."
    },
    erklaerung: "Tabs (Reiter) schalten zwischen Ansichten um, ohne die Seite zu verlassen. Der aktive Tab ist hervorgehoben.",
    prompt: "„Teile die Einstellungsseite in drei Tabs: Allgemein, Konto und Benachrichtigungen.“"
  },
  {
    id: "gui-accordion", thema: "gui", typ: "benennen", mockup: "accordion",
    frage: "Fragen, die beim Klick ihre Antwort aufklappen. Wie heißt das?",
    optionen: ["Dropdown", "Accordion", "Tabs", "Modal"],
    richtig: 1,
    warum: {
      0: "Ein Dropdown ist eine Auswahlliste, kein aufklappender Inhalt.",
      2: "Tabs stehen nebeneinander und zeigen immer genau einen Bereich.",
      3: "Ein Modal öffnet ein Fenster über der Seite."
    },
    erklaerung: "Ein Accordion (Aufklapp-Liste, wie eine Ziehharmonika) besteht aus Abschnitten, die man auf- und zuklappt. Typisch für FAQs.",
    prompt: "„Mach aus der FAQ-Liste ein Accordion, bei dem immer nur eine Antwort offen ist.“"
  },
  {
    id: "gui-toggle", thema: "gui", typ: "benennen", mockup: "toggle",
    frage: "Wie heißt der Schalter rechts neben „Dunkelmodus“?",
    optionen: ["Checkbox", "Slider", "Toggle", "Radio Button"],
    richtig: 2,
    warum: {
      0: "Eine Checkbox ist ein Kästchen mit Haken, wie bei „Benachrichtigungen“ darüber.",
      1: "Ein Slider ist ein Regler, den man stufenlos schiebt.",
      3: "Radio Buttons sind runde Punkte, von denen man genau einen wählt."
    },
    erklaerung: "Ein Toggle (Switch, Schalter) kennt nur An und Aus und wirkt sofort, ohne Speichern-Button.",
    prompt: "„Ersetze die Checkbox „Benachrichtigungen“ durch einen Toggle, der sofort speichert.“"
  },
  {
    id: "gui-radio", thema: "gui", typ: "benennen", mockup: "radio",
    frage: "Bei „Versand“ kannst du nur eine Option wählen. Wie heißen diese runden Auswahlpunkte?",
    optionen: ["Checkboxen", "Radio Buttons", "Toggles", "Chips"],
    richtig: 1,
    warum: {
      0: "Checkboxen sind eckig, und man kann mehrere anhaken, wie bei „Extras“.",
      2: "Ein Toggle ist ein einzelner An/Aus-Schalter.",
      3: "Chips sind kleine Kapseln, meist zum Filtern."
    },
    erklaerung: "Radio Buttons: genau eine Wahl aus mehreren. Checkboxen: beliebig viele.",
    prompt: "„Bei der Zahlungsart sollen Radio Buttons statt Checkboxen stehen, damit man nur eine wählen kann.“"
  },
  {
    id: "gui-placeholder", thema: "gui", typ: "benennen", mockup: "placeholder",
    frage: "Im leeren Eingabefeld steht grau „name@beispiel.de“. Sobald du tippst, verschwindet es. Wie heißt dieser graue Text?",
    optionen: ["Label", "Placeholder", "Tooltip", "Standardwert"],
    richtig: 1,
    warum: {
      0: "Das Label ist die Beschriftung über dem Feld („E-Mail“). Es bleibt stehen.",
      2: "Ein Tooltip erscheint nur, wenn die Maus darüber schwebt.",
      3: "Ein Standardwert ist echter Inhalt, der stehen bleibt, bis du ihn löschst."
    },
    erklaerung: "Der Placeholder ist ein Beispiel im leeren Feld. Er ersetzt kein Label, weil er beim Tippen verschwindet.",
    prompt: "„Gib dem E-Mail-Feld das Label „E-Mail“ und den Placeholder „name@beispiel.de“.“"
  },
  {
    id: "gui-badge", thema: "gui", typ: "benennen", mockup: "badge",
    frage: "Wie heißt die rote Zahl an der Glocke?",
    optionen: ["Badge", "Toast", "Icon", "Button"],
    richtig: 0,
    warum: {
      1: "Ein Toast ist eine Meldung, die kurz erscheint und wieder verschwindet.",
      2: "Die Glocke ist das Icon. Die Zahl daran hat einen eigenen Namen.",
      3: "Die Zahl allein ist nicht klickbar, sie ist nur ein Hinweis."
    },
    erklaerung: "Ein Badge ist ein kleiner Zähler oder Status-Aufkleber, z. B. für ungelesene Nachrichten oder „Neu“.",
    prompt: "„Zeig an der Glocke ein rotes Badge mit der Zahl ungelesener Nachrichten, ab 10 nur „9+“.“"
  },
  {
    id: "gui-skeleton", thema: "gui", typ: "benennen", mockup: "skeleton",
    frage: "Während die Seite lädt, siehst du graue Blöcke in der Form des späteren Inhalts. Wie heißt das?",
    optionen: ["Spinner", "Skeleton", "Placeholder", "Fortschrittsbalken"],
    richtig: 1,
    warum: {
      0: "Ein Spinner ist ein drehender Kreis.",
      2: "Ein Placeholder ist grauer Beispieltext in einem Eingabefeld.",
      3: "Ein Fortschrittsbalken (Progress Bar) füllt sich von links nach rechts."
    },
    erklaerung: "Ein Skeleton (Skeleton Screen) zeigt das Gerüst der Seite, bevor die Daten da sind. Das fühlt sich schneller an als ein Spinner.",
    prompt: "„Zeig beim Laden der Projektliste Skeleton-Karten statt eines Spinners.“"
  },
  {
    id: "gui-breadcrumb", thema: "gui", typ: "benennen", mockup: "breadcrumb",
    frage: "„Start › Projekte › Quiz“ oben auf der Seite. Wie heißt diese Pfad-Anzeige?",
    optionen: ["Breadcrumb", "Tabs", "Navbar", "Pagination"],
    richtig: 0,
    warum: {
      1: "Tabs schalten Ansichten um, sie zeigen keinen Pfad.",
      2: "Die Navbar ist die ganze Leiste oben mit Logo und Menü.",
      3: "Pagination ist die Seitenzahl-Leiste: 1, 2, 3 …"
    },
    erklaerung: "Eine Breadcrumb (Brotkrumen-Navigation, wie bei Hänsel und Gretel) zeigt, wo du bist. Jeder Teil ist klickbar.",
    prompt: "„Füge über dem Seitentitel eine Breadcrumb ein, in der jeder Teil zur jeweiligen Seite verlinkt.“"
  },
  {
    id: "gui-hover", thema: "gui", typ: "benennen", mockup: "hover",
    frage: "Der Button wird dunkler, sobald die Maus darüber schwebt, ganz ohne Klick. Wie heißt dieser Zustand?",
    optionen: ["Focus", "Hover", "Active", "Disabled"],
    richtig: 1,
    warum: {
      0: "Focus heißt: Das Element ist per Tastatur (Tab-Taste) ausgewählt.",
      2: "Active ist der Moment, in dem du klickst und die Maustaste gedrückt hältst.",
      3: "Disabled heißt: ausgegraut und nicht klickbar."
    },
    erklaerung: "Hover heißt: Die Maus schwebt darüber. Die Zustände Hover, Focus, Active und Disabled gibt es für fast jedes Element.",
    prompt: "„Die Karten sollen beim Hover leicht nach oben rutschen und einen Schatten bekommen.“"
  },
  {
    id: "gui-navbar", thema: "gui", typ: "benennen", mockup: "navbar",
    frage: "Wie heißt die Leiste ganz oben mit dem Namen der App, den Links und dem Login-Button?",
    optionen: ["Navbar", "Sidebar", "Footer", "Toolbar"],
    richtig: 0,
    warum: {
      1: "Die Sidebar ist eine Leiste am Rand, meist links.",
      2: "Der Footer ist ganz unten.",
      3: "Eine Toolbar enthält Werkzeug-Buttons, z. B. Fett und Kursiv in einem Editor."
    },
    erklaerung: "Die Navbar (Navigationsleiste, oft auch Header genannt) sitzt oben und sieht meist auf jeder Seite gleich aus.",
    prompt: "„Die Navbar soll beim Scrollen oben kleben bleiben (sticky).“"
  },
  {
    id: "gui-footer", thema: "gui", typ: "benennen", mockup: "footer",
    frage: "Wie heißt der Bereich ganz unten mit Impressum und Datenschutz?",
    optionen: ["Footer", "Navbar", "Fußnote", "Banner"],
    richtig: 0,
    warum: {
      1: "Die Navbar ist oben.",
      2: "Eine Fußnote ist eine kleine Anmerkung zu einer Textstelle, kein Seitenbereich.",
      3: "Ein Banner ist ein auffälliger Hinweis-Streifen, meist oben."
    },
    erklaerung: "Der Footer (Fußzeile) steht am Ende jeder Seite. Typisch: Impressum, Datenschutz, Kontakt, Copyright.",
    prompt: "„Füge einen Footer mit Links zu Impressum und Datenschutz hinzu, der auf jeder Seite gleich ist.“"
  },
  {
    id: "gui-chips", thema: "gui", typ: "benennen", mockup: "chips",
    frage: "„Alle“, „Offen“, „Erledigt“: Wie heißen diese kleinen runden Filter-Knöpfe?",
    optionen: ["Chips", "Tabs", "Badges", "Radio Buttons"],
    richtig: 0,
    warum: {
      1: "Tabs wechseln zwischen ganzen Ansichten und sitzen meist auf einer Linie.",
      2: "Badges sind kleine Zähler oder Status-Aufkleber, nicht zum Anklicken.",
      3: "Radio Buttons sind runde Punkte mit Beschriftung daneben."
    },
    erklaerung: "Chips (auch Pills oder Tags) sind kleine Kapseln, meist zum Filtern oder für Schlagwörter. Oft können mehrere gleichzeitig aktiv sein.",
    prompt: "„Über der Aufgabenliste sollen Filter-Chips stehen: Alle, Offen, Erledigt. Der aktive Chip ist farbig.“"
  },
  {
    id: "gui-pagination", thema: "gui", typ: "benennen", mockup: "pagination",
    frage: "Wie heißt die Leiste mit den Seitenzahlen unter den Suchergebnissen?",
    optionen: ["Pagination", "Breadcrumb", "Stepper", "Scrollbar"],
    richtig: 0,
    warum: {
      1: "Eine Breadcrumb zeigt den Pfad: Start › Projekte › …",
      2: "Ein Stepper zeigt die Schritte eines Ablaufs, z. B. 1 Adresse, 2 Bezahlen.",
      3: "Die Scrollbar ist der Balken am Rand zum Scrollen."
    },
    erklaerung: "Pagination (Seitennummerierung) teilt lange Listen in Seiten. Die Alternativen sind ein Button „Mehr laden“ oder endloses Scrollen (Infinite Scroll).",
    prompt: "„Zeig 20 Ergebnisse pro Seite und darunter eine Pagination.“"
  },
  {
    id: "gui-slider", thema: "gui", typ: "benennen", mockup: "slider",
    frage: "Wie heißt der Regler bei „Lautstärke“, den man mit der Maus hin und her zieht?",
    optionen: ["Slider", "Toggle", "Fortschrittsbalken", "Scrollbar"],
    richtig: 0,
    warum: {
      1: "Ein Toggle kennt nur An und Aus, wie bei „Klickgeräusche“.",
      2: "Ein Fortschrittsbalken zeigt nur etwas an. Ziehen kann man ihn nicht.",
      3: "Mit der Scrollbar bewegst du die Seite, keinen Wert."
    },
    erklaerung: "Ein Slider (Schieberegler) wählt einen Wert aus einem Bereich, z. B. 0 bis 100. Gut, wenn der genaue Wert nicht so wichtig ist.",
    prompt: "„Füge einen Slider für die Schriftgröße hinzu, von 14 bis 24 px, und zeig den Wert daneben an.“"
  },
  {
    id: "gui-checkbox", thema: "gui", typ: "benennen", mockup: "radio", hl: "extras",
    frage: "Bei „Extras“ kannst du mehrere Dinge anhaken. Wie heißen diese Kästchen?",
    optionen: ["Checkboxen", "Radio Buttons", "Toggles", "Buttons"],
    richtig: 0,
    warum: {
      1: "Radio Buttons sind rund und erlauben nur eine Wahl, wie bei „Versand“.",
      2: "Ein Toggle ist ein Schiebeschalter für An und Aus.",
      3: "Buttons lösen eine Aktion aus, sie haken nichts an."
    },
    erklaerung: "Checkboxen (Kontrollkästchen) erlauben beliebig viele Häkchen. Eine einzelne Checkbox passt für Ja/Nein-Fragen wie „Ich akzeptiere die AGB“.",
    prompt: "„Unter dem Formular soll eine Checkbox „Newsletter abonnieren“ stehen, anfangs nicht angehakt.“"
  },
  {
    id: "gui-spinner", thema: "gui", typ: "benennen", mockup: "spinner",
    frage: "Wie heißt der drehende Kreis, der zeigt, dass etwas lädt?",
    optionen: ["Spinner", "Skeleton", "Fortschrittsbalken", "Cursor"],
    richtig: 0,
    warum: {
      1: "Ein Skeleton zeigt graue Blöcke in der Form des späteren Inhalts.",
      2: "Ein Fortschrittsbalken zeigt, wie viel schon geschafft ist, z. B. 62 %.",
      3: "Der Cursor ist dein Mauszeiger."
    },
    erklaerung: "Ein Spinner (Ladekreis) sagt nur „bitte warten“, aber nicht, wie lange noch. Für längere Vorgänge ist ein Fortschrittsbalken besser.",
    prompt: "„Zeig im Button „Speichern“ einen kleinen Spinner, solange gespeichert wird, und sperr den Button so lange.“"
  },
  {
    id: "gui-kebab", thema: "gui", typ: "benennen", mockup: "kebab",
    frage: "Wie heißt das Symbol mit den drei Punkten übereinander neben jedem Projekt?",
    optionen: ["Kebab-Menü", "Hamburger-Menü", "Drag-Handle", "Scrollbar"],
    richtig: 0,
    warum: {
      1: "Das Hamburger-Menü hat drei waagerechte Striche und öffnet die Navigation.",
      2: "Ein Drag-Handle hat meist sechs Punkte und dient zum Verschieben.",
      3: "Die Scrollbar ist ein Balken am Rand."
    },
    erklaerung: "Das Kebab-Menü (Drei-Punkte-Menü, wie ein Spieß) öffnet weitere Aktionen für genau dieses Element, z. B. Umbenennen oder Löschen. Liegen die Punkte nebeneinander, heißt es Meatball-Menü.",
    prompt: "„Gib jeder Zeile in der Projektliste ein Kebab-Menü mit Umbenennen, Duplizieren und Löschen.“"
  },
  {
    id: "gui-disabled", thema: "gui", typ: "benennen", mockup: "disabled",
    frage: "Der Button „Weiter“ ist grau und lässt sich nicht anklicken, solange die Checkbox leer ist. Wie heißt dieser Zustand?",
    optionen: ["Disabled", "Hover", "Focus", "Hidden"],
    richtig: 0,
    warum: {
      1: "Hover heißt: Die Maus schwebt darüber.",
      2: "Focus heißt: Das Element ist gerade ausgewählt, z. B. per Tab-Taste.",
      3: "Hidden heißt unsichtbar. Der Button ist aber sichtbar, nur gesperrt."
    },
    erklaerung: "Disabled (deaktiviert) heißt: sichtbar, aber gesperrt. Gut ist ein kurzer Hinweis, warum. Sonst klicken Leute verwirrt herum.",
    prompt: "„Der Button „Weiter“ soll disabled sein, bis die Checkbox angehakt ist.“"
  },
  {
    id: "gui-focus", thema: "gui", typ: "benennen", mockup: "focus",
    frage: "Du hast ins E-Mail-Feld geklickt. Es hat jetzt einen farbigen Rahmen und einen blinkenden Strich. Wie heißt dieser Zustand?",
    optionen: ["Focus", "Hover", "Active", "Selected"],
    richtig: 0,
    warum: {
      1: "Hover heißt nur: Die Maus schwebt darüber, ohne Klick.",
      2: "Active ist nur der kurze Moment, in dem die Maustaste gedrückt ist.",
      3: "Selected passt eher zu markierten Einträgen in einer Liste."
    },
    erklaerung: "Focus heißt: Dieses Element empfängt gerade deine Eingaben. Mit der Tab-Taste springt der Focus zum nächsten Feld. Ein sichtbarer Rahmen hilft allen, die mit der Tastatur arbeiten.",
    prompt: "„Gib allen Eingabefeldern einen gut sichtbaren Focus-Rahmen in der Akzentfarbe.“"
  },
  {
    id: "gui-empty", thema: "gui", typ: "benennen", mockup: "empty",
    frage: "Die Liste ist noch leer. Statt einer weißen Fläche siehst du einen Hinweis mit Button. Wie heißt so eine Ansicht?",
    optionen: ["Empty State", "Fehlerseite", "Skeleton", "Modal"],
    richtig: 0,
    warum: {
      1: "Eine Fehlerseite (z. B. 404) kommt, wenn etwas schiefgeht. Leer sein ist kein Fehler.",
      2: "Ein Skeleton zeigt Platzhalter, während Daten laden.",
      3: "Ein Modal liegt als Fenster über der Seite."
    },
    erklaerung: "Ein Empty State (Leerzustand) erklärt, warum nichts da ist und was man tun kann. Viel freundlicher als eine leere Fläche.",
    prompt: "„Wenn es noch keine Projekte gibt, zeig einen Empty State mit kurzer Erklärung und dem Button „Neues Projekt“.“"
  },
  {
    id: "gui-progress", thema: "gui", typ: "benennen", mockup: "progress",
    frage: "Wie heißt der Balken, der beim Hochladen von links nach rechts voll wird?",
    optionen: ["Fortschrittsbalken", "Slider", "Spinner", "Scrollbar"],
    richtig: 0,
    warum: {
      1: "Einen Slider ziehst du selbst. Dieser Balken füllt sich von allein.",
      2: "Ein Spinner dreht sich nur und zeigt nicht, wie weit es ist.",
      3: "Die Scrollbar zeigt, wo du auf der Seite bist."
    },
    erklaerung: "Ein Fortschrittsbalken (Progress Bar) zeigt, wie viel schon geschafft ist. Ideal für Uploads, Downloads und Installationen.",
    prompt: "„Zeig beim Upload einen Fortschrittsbalken mit der Prozentzahl daneben.“"
  }
);
