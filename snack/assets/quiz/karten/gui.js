// Snack: Grundkarten zum Thema „GUI-Elemente“ / core cards for this topic.
// Card format: see the header of eigene-karten.js. A text is a plain string or a pair { de: "…", en: "…" }.
(window.SNACK_KARTEN = window.SNACK_KARTEN || []).push(
  {
    id: "gui-toast", thema: "gui", typ: "benennen", mockup: "toast",
    frage: {
      de: "Die kleine Meldung unten rechts taucht kurz auf und verschwindet von selbst. Wie heißt sie?",
      en: "The small message at the bottom right shows up briefly and disappears by itself. What is it called?"
    },
    optionen: ["Popup", "Toast", "Modal", "Tooltip"],
    richtig: 1,
    warum: {
      0: {
        de: "„Popup“ ist zu ungenau. Claude weiß dann nicht, ob du Modal, Toast oder Tooltip meinst.",
        en: "“Popup” is too vague. Claude then can't tell whether you mean a modal, a toast or a tooltip."
      },
      2: {
        de: "Ein Modal blockiert alles dahinter, bis du es schließt.",
        en: "A modal blocks everything behind it until you close it."
      },
      3: {
        de: "Ein Tooltip erscheint nur, wenn die Maus über etwas schwebt.",
        en: "A tooltip only appears when the mouse hovers over something."
      }
    },
    erklaerung: {
      de: "Ein Toast ploppt kurz hoch wie Toast aus dem Toaster und verschwindet allein. Andere Namen dafür: Snackbar, Notification.",
      en: "A toast pops up briefly, like toast from a toaster, and disappears on its own. Other names for it: snackbar, notification."
    },
    prompt: {
      de: "„Zeig nach dem Speichern unten rechts einen Toast „Gespeichert“, der nach 3 Sekunden verschwindet.“",
      en: "“After saving, show a toast “Saved” at the bottom right that disappears after 3 seconds.”"
    }
  },
  {
    id: "gui-modal", thema: "gui", typ: "benennen", mockup: "modal", hl: "dialog",
    frage: {
      de: "Das Fenster in der Mitte blockiert alles dahinter, bis du es schließt. Wie heißt es?",
      en: "The window in the middle blocks everything behind it until you close it. What is it called?"
    },
    optionen: ["Modal", "Toast", "Sidebar", "Tab"],
    richtig: 0,
    warum: {
      1: {
        de: "Ein Toast ist klein, blockiert nichts und verschwindet von selbst.",
        en: "A toast is small, blocks nothing and disappears by itself."
      },
      2: { de: "Eine Sidebar ist eine Leiste am Rand.", en: "A sidebar is a bar along the edge." },
      3: { de: "Tabs sind Reiter zum Umschalten zwischen Ansichten.", en: "Tabs are for switching between views." }
    },
    erklaerung: {
      de: "Ein Modal (auch: Dialog) liegt über der Seite und erzwingt eine Entscheidung, z. B. „Wirklich löschen?“.",
      en: "A modal (also: dialog) sits on top of the page and forces a decision, for example “Really delete?”."
    },
    prompt: {
      de: "„Bevor ein Projekt gelöscht wird, zeig ein Modal „Wirklich löschen?“ mit den Buttons Abbrechen und Löschen.“",
      en: "“Before a project is deleted, show a modal “Really delete?” with the buttons Cancel and Delete.”"
    }
  },
  {
    id: "gui-overlay", thema: "gui", typ: "benennen", mockup: "modal", hl: "overlay",
    frage: {
      de: "Wie heißt die abgedunkelte Fläche hinter dem Fenster?",
      en: "What is the darkened area behind the window called?"
    },
    optionen: {
      de: ["Schatten", "Overlay", "Hintergrundbild", "Footer"],
      en: ["Shadow", "Overlay", "Background image", "Footer"]
    },
    richtig: 1,
    warum: {
      0: {
        de: "Ein Schatten (Shadow) ist der weiche Rand direkt um ein Element.",
        en: "A shadow is the soft edge right around an element."
      },
      2: {
        de: "Ein Hintergrundbild ist ein Bild, keine Abdunklung.",
        en: "A background image is a picture, not a darkened layer."
      },
      3: {
        de: "Der Footer ist der Bereich ganz unten auf einer Seite.",
        en: "The footer is the area at the very bottom of a page."
      }
    },
    erklaerung: {
      de: "Das Overlay (auch: Backdrop) legt sich halbdurchsichtig über die Seite und lenkt den Blick aufs Modal.",
      en: "The overlay (also: backdrop) lies half-transparent over the page and draws the eye to the modal."
    },
    prompt: {
      de: "„Mach das Overlay hinter dem Modal etwas dunkler. Ein Klick darauf soll das Modal schließen.“",
      en: "“Make the overlay behind the modal a bit darker. A click on it should close the modal.”"
    }
  },
  {
    id: "gui-dropdown", thema: "gui", typ: "benennen", mockup: "dropdown",
    frage: {
      de: "Du klickst auf „Sortieren“ und eine Liste klappt nach unten auf. Wie heißt das Element?",
      en: "You click “Sort” and a list opens downward. What is this element called?"
    },
    optionen: ["Accordion", "Dropdown", "Tabs", "Breadcrumb"],
    richtig: 1,
    warum: {
      0: {
        de: "Ein Accordion klappt Inhalte auf der Seite auf, keine Auswahlliste.",
        en: "An accordion unfolds content on the page, not a list of choices."
      },
      2: {
        de: "Tabs zeigen alle Optionen nebeneinander, ohne Aufklappen.",
        en: "Tabs show all options side by side, with nothing to open."
      },
      3: {
        de: "Eine Breadcrumb zeigt den Pfad, wo du gerade bist.",
        en: "A breadcrumb shows the path to where you are."
      }
    },
    erklaerung: {
      de: "Ein Dropdown (Auswahlmenü, im Code oft „Select“) zeigt seine Optionen erst nach dem Klick.",
      en: "A dropdown (a selection menu, often called “select” in code) shows its options only after a click."
    },
    prompt: {
      de: "„Ersetze die drei Sortier-Buttons durch ein Dropdown mit Neueste, Älteste und A–Z.“",
      en: "“Replace the three sort buttons with a dropdown with Newest, Oldest and A–Z.”"
    }
  },
  {
    id: "gui-tooltip", thema: "gui", typ: "benennen", mockup: "tooltip",
    frage: {
      de: "Du fährst mit der Maus über das Papierkorb-Symbol und ein kleines Schild erscheint. Wie heißt das Schild?",
      en: "You move the mouse over the trash can icon and a small text bubble appears. What is that bubble called?"
    },
    optionen: ["Toast", "Badge", "Tooltip", "Label"],
    richtig: 2,
    warum: {
      0: {
        de: "Ein Toast kommt nach einer Aktion, nicht beim Drüberfahren.",
        en: "A toast comes after an action, not when you move the mouse over something."
      },
      1: {
        de: "Ein Badge ist ein kleiner Zähler oder Status, z. B. eine rote 3.",
        en: "A badge is a small counter or status, for example a red 3."
      },
      3: {
        de: "Ein Label ist eine Beschriftung, die immer sichtbar ist.",
        en: "A label is a caption that is always visible."
      }
    },
    erklaerung: {
      de: "Ein Tooltip erklärt ein Element, sobald die Maus darüber schwebt. Praktisch für Symbole ohne Text.",
      en: "A tooltip explains an element as soon as the mouse hovers over it. Handy for icons without text."
    },
    prompt: {
      de: "„Gib allen Icon-Buttons in der Toolbar einen Tooltip mit ihrer Funktion.“",
      en: "“Give every icon button in the toolbar a tooltip that says what it does.”"
    }
  },
  {
    id: "gui-sidebar", thema: "gui", typ: "benennen", mockup: "sidebar",
    frage: {
      de: "Wie heißt die Leiste links mit den Menüpunkten?",
      en: "What is the bar on the left with the menu items called?"
    },
    optionen: ["Sidebar", "Navbar", "Footer", "Modal"],
    richtig: 0,
    warum: {
      1: { de: "Die Navbar ist die Leiste oben.", en: "The navbar is the bar at the top." },
      2: { de: "Der Footer ist ganz unten.", en: "The footer is at the very bottom." },
      3: { de: "Ein Modal ist ein Fenster in der Mitte.", en: "A modal is a window in the middle." }
    },
    erklaerung: {
      de: "Die Sidebar (Seitenleiste) sitzt am Rand, meist links, und enthält die Navigation.",
      en: "The sidebar sits at the edge, usually on the left, and holds the navigation."
    },
    prompt: {
      de: "„Mach die Sidebar einklappbar, sodass im eingeklappten Zustand nur noch die Icons zu sehen sind.“",
      en: "“Make the sidebar collapsible, so that only the icons are visible when it is collapsed.”"
    }
  },
  {
    id: "gui-hamburger", thema: "gui", typ: "benennen", mockup: "hamburger",
    frage: {
      de: "Wie heißt das Symbol mit den drei Strichen oben links?",
      en: "What is the icon with the three lines at the top left called?"
    },
    optionen: {
      de: ["Hamburger-Menü", "Drag-Handle", "Kebab-Menü", "Listen-Symbol"],
      en: ["Hamburger menu", "Drag handle", "Kebab menu", "List icon"]
    },
    richtig: 0,
    warum: {
      1: {
        de: "Ein Drag-Handle (oft sechs Punkte) dient zum Verschieben.",
        en: "A drag handle (often six dots) is for moving things around."
      },
      2: {
        de: "Das Kebab-Menü sind drei Punkte übereinander, meist für „Mehr Optionen“.",
        en: "The kebab menu is three dots stacked on top of each other, usually for “More options”."
      },
      3: {
        de: "Klingt logisch, aber mit dem Fachwort erkennt Claude sofort, was du meinst.",
        en: "Sounds logical, but with the proper term Claude knows right away what you mean."
      }
    },
    erklaerung: {
      de: "Das Hamburger-Menü öffnet die Navigation, vor allem auf schmalen Bildschirmen. Die drei Striche erinnern an einen Burger.",
      en: "The hamburger menu opens the navigation, mostly on narrow screens. The three lines look a bit like a burger."
    },
    prompt: {
      de: "„Auf Handy-Breite soll die Navbar zu einem Hamburger-Menü zusammenklappen.“",
      en: "“At phone width, the navbar should collapse into a hamburger menu.”"
    }
  },
  {
    id: "gui-tabs", thema: "gui", typ: "benennen", mockup: "tabs",
    frage: {
      de: "„Übersicht“, „Einstellungen“, „Verlauf“: Du klickst, und der Inhalt darunter wechselt. Wie heißen diese Reiter?",
      en: "“Overview”, “Settings”, “History”: you click one, and the content below changes. What are these called?"
    },
    optionen: ["Tabs", "Buttons", "Breadcrumbs", "Chips"],
    richtig: 0,
    warum: {
      1: {
        de: "Technisch sind es Buttons, aber „Tabs“ sagt Claude auch, wie sie sich verhalten.",
        en: "Technically they are buttons, but “tabs” also tells Claude how they behave."
      },
      2: { de: "Breadcrumbs zeigen den Pfad, keine Ansichten.", en: "Breadcrumbs show the path, not views." },
      3: {
        de: "Chips sind kleine Kapseln für Filter oder Schlagwörter.",
        en: "Chips are small capsules for filters or keywords."
      }
    },
    erklaerung: {
      de: "Tabs (Reiter) schalten zwischen Ansichten um, ohne die Seite zu verlassen. Der aktive Tab ist hervorgehoben.",
      en: "Tabs switch between views without leaving the page. The active tab is highlighted."
    },
    prompt: {
      de: "„Teile die Einstellungsseite in drei Tabs: Allgemein, Konto und Benachrichtigungen.“",
      en: "“Split the settings page into three tabs: General, Account and Notifications.”"
    }
  },
  {
    id: "gui-accordion", thema: "gui", typ: "benennen", mockup: "accordion",
    frage: {
      de: "Fragen, die beim Klick ihre Antwort aufklappen. Wie heißt das?",
      en: "Questions that unfold their answer when you click them. What is this called?"
    },
    optionen: ["Dropdown", "Accordion", "Tabs", "Modal"],
    richtig: 1,
    warum: {
      0: {
        de: "Ein Dropdown ist eine Auswahlliste, kein aufklappender Inhalt.",
        en: "A dropdown is a list of choices, not content that unfolds."
      },
      2: {
        de: "Tabs stehen nebeneinander und zeigen immer genau einen Bereich.",
        en: "Tabs sit side by side and always show exactly one section."
      },
      3: { de: "Ein Modal öffnet ein Fenster über der Seite.", en: "A modal opens a window on top of the page." }
    },
    erklaerung: {
      de: "Ein Accordion (Aufklapp-Liste, wie eine Ziehharmonika) besteht aus Abschnitten, die man auf- und zuklappt. Typisch für FAQs.",
      en: "An accordion (a fold-out list, named after the instrument) is made of sections you open and close. Typical for FAQs."
    },
    prompt: {
      de: "„Mach aus der FAQ-Liste ein Accordion, bei dem immer nur eine Antwort offen ist.“",
      en: "“Turn the FAQ list into an accordion where only one answer is open at a time.”"
    }
  },
  {
    id: "gui-toggle", thema: "gui", typ: "benennen", mockup: "toggle",
    frage: {
      de: "Wie heißt der Schalter rechts neben „Dunkelmodus“?",
      en: "What is the switch to the right of “Dark mode” called?"
    },
    optionen: { de: ["Checkbox", "Slider", "Toggle", "Radio Button"], en: ["Checkbox", "Slider", "Toggle", "Radio button"] },
    richtig: 2,
    warum: {
      0: {
        de: "Eine Checkbox ist ein Kästchen mit Haken, wie bei „Benachrichtigungen“ darüber.",
        en: "A checkbox is a small box with a check mark, like the one for “Notifications” above it."
      },
      1: {
        de: "Ein Slider ist ein Regler, den man stufenlos schiebt.",
        en: "A slider is a control you drag smoothly along a track."
      },
      3: {
        de: "Radio Buttons sind runde Punkte, von denen man genau einen wählt.",
        en: "Radio buttons are round dots, and you pick exactly one of them."
      }
    },
    erklaerung: {
      de: "Ein Toggle (Switch, Schalter) kennt nur An und Aus und wirkt sofort, ohne Speichern-Button.",
      en: "A toggle (also called a switch) only knows on and off and takes effect right away, without a Save button."
    },
    prompt: {
      de: "„Ersetze die Checkbox „Benachrichtigungen“ durch einen Toggle, der sofort speichert.“",
      en: "“Replace the “Notifications” checkbox with a toggle that saves right away.”"
    }
  },
  {
    id: "gui-radio", thema: "gui", typ: "benennen", mockup: "radio",
    frage: {
      de: "Bei „Versand“ kannst du nur eine Option wählen. Wie heißen diese runden Auswahlpunkte?",
      en: "Under “Shipping” you can pick only one option. What are these round dots called?"
    },
    optionen: {
      de: ["Checkboxen", "Radio Buttons", "Toggles", "Chips"],
      en: ["Checkboxes", "Radio buttons", "Toggles", "Chips"]
    },
    richtig: 1,
    warum: {
      0: {
        de: "Checkboxen sind eckig, und man kann mehrere anhaken, wie bei „Extras“.",
        en: "Checkboxes are square, and you can check several, as under “Extras”."
      },
      2: { de: "Ein Toggle ist ein einzelner An/Aus-Schalter.", en: "A toggle is a single on/off switch." },
      3: { de: "Chips sind kleine Kapseln, meist zum Filtern.", en: "Chips are small capsules, mostly for filtering." }
    },
    erklaerung: {
      de: "Radio Buttons: genau eine Wahl aus mehreren. Checkboxen: beliebig viele.",
      en: "Radio buttons: exactly one choice out of several. Checkboxes: as many as you like."
    },
    prompt: {
      de: "„Bei der Zahlungsart sollen Radio Buttons statt Checkboxen stehen, damit man nur eine wählen kann.“",
      en: "“The payment method should use radio buttons instead of checkboxes, so you can pick only one.”"
    }
  },
  {
    id: "gui-placeholder", thema: "gui", typ: "benennen", mockup: "placeholder",
    frage: {
      de: "Im leeren Eingabefeld steht grau „name@beispiel.de“. Sobald du tippst, verschwindet es. Wie heißt dieser graue Text?",
      en: "The empty input field shows “name@example.com” in gray. As soon as you type, it disappears. What is this gray text called?"
    },
    optionen: {
      de: ["Label", "Placeholder", "Tooltip", "Standardwert"],
      en: ["Label", "Placeholder", "Tooltip", "Default value"]
    },
    richtig: 1,
    warum: {
      0: {
        de: "Das Label ist die Beschriftung über dem Feld („E-Mail“). Es bleibt stehen.",
        en: "The label is the caption above the field (“Email”). It stays put."
      },
      2: {
        de: "Ein Tooltip erscheint nur, wenn die Maus darüber schwebt.",
        en: "A tooltip only appears when the mouse hovers over something."
      },
      3: {
        de: "Ein Standardwert ist echter Inhalt, der stehen bleibt, bis du ihn löschst.",
        en: "A default value is real content that stays until you delete it."
      }
    },
    erklaerung: {
      de: "Der Placeholder ist ein Beispiel im leeren Feld. Er ersetzt kein Label, weil er beim Tippen verschwindet.",
      en: "The placeholder is an example in the empty field. It does not replace a label, because it disappears when you type."
    },
    prompt: {
      de: "„Gib dem E-Mail-Feld das Label „E-Mail“ und den Placeholder „name@beispiel.de“.“",
      en: "“Give the email field the label “Email” and the placeholder “name@example.com”.”"
    }
  },
  {
    id: "gui-badge", thema: "gui", typ: "benennen", mockup: "badge",
    frage: { de: "Wie heißt die rote Zahl an der Glocke?", en: "What is the red number on the bell called?" },
    optionen: ["Badge", "Toast", "Icon", "Button"],
    richtig: 0,
    warum: {
      1: {
        de: "Ein Toast ist eine Meldung, die kurz erscheint und wieder verschwindet.",
        en: "A toast is a message that shows up briefly and disappears again."
      },
      2: {
        de: "Die Glocke ist das Icon. Die Zahl daran hat einen eigenen Namen.",
        en: "The bell is the icon. The number on it has its own name."
      },
      3: {
        de: "Die Zahl allein ist nicht klickbar, sie ist nur ein Hinweis.",
        en: "The number alone is not clickable, it is only a hint."
      }
    },
    erklaerung: {
      de: "Ein Badge ist ein kleiner Zähler oder Status-Aufkleber, z. B. für ungelesene Nachrichten oder „Neu“.",
      en: "A badge is a small counter or status sticker, for example for unread messages or “New”."
    },
    prompt: {
      de: "„Zeig an der Glocke ein rotes Badge mit der Zahl ungelesener Nachrichten, ab 10 nur „9+“.“",
      en: "“Show a red badge on the bell with the number of unread messages, and just “9+” from 10 up.”"
    }
  },
  {
    id: "gui-skeleton", thema: "gui", typ: "benennen", mockup: "skeleton",
    frage: {
      de: "Während die Seite lädt, siehst du graue Blöcke in der Form des späteren Inhalts. Wie heißt das?",
      en: "While the page loads, you see gray blocks in the shape of the content to come. What is this called?"
    },
    optionen: {
      de: ["Spinner", "Skeleton", "Placeholder", "Fortschrittsbalken"],
      en: ["Spinner", "Skeleton", "Placeholder", "Progress bar"]
    },
    richtig: 1,
    warum: {
      0: { de: "Ein Spinner ist ein drehender Kreis.", en: "A spinner is a rotating circle." },
      2: {
        de: "Ein Placeholder ist grauer Beispieltext in einem Eingabefeld.",
        en: "A placeholder is gray example text in an input field."
      },
      3: {
        de: "Ein Fortschrittsbalken (Progress Bar) füllt sich von links nach rechts.",
        en: "A progress bar fills up from left to right."
      }
    },
    erklaerung: {
      de: "Ein Skeleton (Skeleton Screen) zeigt das Gerüst der Seite, bevor die Daten da sind. Das fühlt sich schneller an als ein Spinner.",
      en: "A skeleton (skeleton screen) shows the frame of the page before the data arrives. That feels faster than a spinner."
    },
    prompt: {
      de: "„Zeig beim Laden der Projektliste Skeleton-Karten statt eines Spinners.“",
      en: "“While the project list loads, show skeleton cards instead of a spinner.”"
    }
  },
  {
    id: "gui-breadcrumb", thema: "gui", typ: "benennen", mockup: "breadcrumb",
    frage: {
      de: "„Start › Projekte › Quiz“ oben auf der Seite. Wie heißt diese Pfad-Anzeige?",
      en: "“Start › Projects › Quiz” at the top of the page. What is this path display called?"
    },
    optionen: ["Breadcrumb", "Tabs", "Navbar", "Pagination"],
    richtig: 0,
    warum: {
      1: {
        de: "Tabs schalten Ansichten um, sie zeigen keinen Pfad.",
        en: "Tabs switch views, they don't show a path."
      },
      2: {
        de: "Die Navbar ist die ganze Leiste oben mit Logo und Menü.",
        en: "The navbar is the whole bar at the top with logo and menu."
      },
      3: {
        de: "Pagination ist die Seitenzahl-Leiste: 1, 2, 3 …",
        en: "Pagination is the bar of page numbers: 1, 2, 3 …"
      }
    },
    erklaerung: {
      de: "Eine Breadcrumb (Brotkrumen-Navigation, wie bei Hänsel und Gretel) zeigt, wo du bist. Jeder Teil ist klickbar.",
      en: "A breadcrumb (a trail of crumbs, like in Hansel and Gretel) shows where you are. Each part is clickable."
    },
    prompt: {
      de: "„Füge über dem Seitentitel eine Breadcrumb ein, in der jeder Teil zur jeweiligen Seite verlinkt.“",
      en: "“Add a breadcrumb above the page title, with each part linking to its page.”"
    }
  },
  {
    id: "gui-hover", thema: "gui", typ: "benennen", mockup: "hover",
    frage: {
      de: "Der Button wird dunkler, sobald die Maus darüber schwebt, ganz ohne Klick. Wie heißt dieser Zustand?",
      en: "The button gets darker as soon as the mouse pointer is on it, without any click. What is this state called?"
    },
    optionen: ["Focus", "Hover", "Active", "Disabled"],
    richtig: 1,
    warum: {
      0: {
        de: "Focus heißt: Das Element ist per Tastatur (Tab-Taste) ausgewählt.",
        en: "Focus means the element is selected with the keyboard (Tab key)."
      },
      2: {
        de: "Active ist der Moment, in dem du klickst und die Maustaste gedrückt hältst.",
        en: "Active is the moment you click and hold the mouse button down."
      },
      3: { de: "Disabled heißt: ausgegraut und nicht klickbar.", en: "Disabled means grayed out and not clickable." }
    },
    erklaerung: {
      de: "Hover heißt: Die Maus schwebt darüber. Die Zustände Hover, Focus, Active und Disabled gibt es für fast jedes Element.",
      en: "Hover means the mouse is resting over it. Almost every element has the states hover, focus, active and disabled."
    },
    prompt: {
      de: "„Die Karten sollen beim Hover leicht nach oben rutschen und einen Schatten bekommen.“",
      en: "“On hover, the cards should move up slightly and get a shadow.”"
    }
  },
  {
    id: "gui-navbar", thema: "gui", typ: "benennen", mockup: "navbar",
    frage: {
      de: "Wie heißt die Leiste ganz oben mit dem Namen der App, den Links und dem Login-Button?",
      en: "What is the bar at the very top with the app's name, the links and the Login button called?"
    },
    optionen: ["Navbar", "Sidebar", "Footer", "Toolbar"],
    richtig: 0,
    warum: {
      1: {
        de: "Die Sidebar ist eine Leiste am Rand, meist links.",
        en: "The sidebar is a bar at the edge, usually on the left."
      },
      2: { de: "Der Footer ist ganz unten.", en: "The footer is at the very bottom." },
      3: {
        de: "Eine Toolbar enthält Werkzeug-Buttons, z. B. Fett und Kursiv in einem Editor.",
        en: "A toolbar holds tool buttons, for example bold and italic in an editor."
      }
    },
    erklaerung: {
      de: "Die Navbar (Navigationsleiste, oft auch Header genannt) sitzt oben und sieht meist auf jeder Seite gleich aus.",
      en: "The navbar (navigation bar, often also called the header) sits at the top and usually looks the same on every page."
    },
    prompt: {
      de: "„Die Navbar soll beim Scrollen oben kleben bleiben (sticky).“",
      en: "“The navbar should stick to the top while scrolling (sticky).”"
    }
  },
  {
    id: "gui-footer", thema: "gui", typ: "benennen", mockup: "footer",
    frage: {
      de: "Wie heißt der Bereich ganz unten mit Impressum und Datenschutz?",
      en: "What is the area at the very bottom with Imprint and Privacy called?"
    },
    optionen: { de: ["Footer", "Navbar", "Fußnote", "Banner"], en: ["Footer", "Navbar", "Footnote", "Banner"] },
    richtig: 0,
    warum: {
      1: { de: "Die Navbar ist oben.", en: "The navbar is at the top." },
      2: {
        de: "Eine Fußnote ist eine kleine Anmerkung zu einer Textstelle, kein Seitenbereich.",
        en: "A footnote is a small note on a passage of text, not an area of the page."
      },
      3: {
        de: "Ein Banner ist ein auffälliger Hinweis-Streifen, meist oben.",
        en: "A banner is an eye-catching notice strip, usually at the top."
      }
    },
    erklaerung: {
      de: "Der Footer (Fußzeile) steht am Ende jeder Seite. Typisch: Impressum, Datenschutz, Kontakt, Copyright.",
      en: "The footer sits at the end of every page. Typical content: imprint (legal notice), privacy policy, contact, copyright."
    },
    prompt: {
      de: "„Füge einen Footer mit Links zu Impressum und Datenschutz hinzu, der auf jeder Seite gleich ist.“",
      en: "“Add a footer with links to Imprint and Privacy that is the same on every page.”"
    }
  },
  {
    id: "gui-chips", thema: "gui", typ: "benennen", mockup: "chips",
    frage: {
      de: "„Alle“, „Offen“, „Erledigt“: Wie heißen diese kleinen runden Filter-Knöpfe?",
      en: "“All”, “Open”, “Done”: what are these small rounded filter buttons called?"
    },
    optionen: { de: ["Chips", "Tabs", "Badges", "Radio Buttons"], en: ["Chips", "Tabs", "Badges", "Radio buttons"] },
    richtig: 0,
    warum: {
      1: {
        de: "Tabs wechseln zwischen ganzen Ansichten und sitzen meist auf einer Linie.",
        en: "Tabs switch between whole views and usually sit on a line."
      },
      2: {
        de: "Badges sind kleine Zähler oder Status-Aufkleber, nicht zum Anklicken.",
        en: "Badges are small counters or status stickers, not meant for clicking."
      },
      3: {
        de: "Radio Buttons sind runde Punkte mit Beschriftung daneben.",
        en: "Radio buttons are round dots with a label next to them."
      }
    },
    erklaerung: {
      de: "Chips (auch Pills oder Tags) sind kleine Kapseln, meist zum Filtern oder für Schlagwörter. Oft können mehrere gleichzeitig aktiv sein.",
      en: "Chips (also pills or tags) are small capsules, mostly for filtering or for keywords. Often several can be active at once."
    },
    prompt: {
      de: "„Über der Aufgabenliste sollen Filter-Chips stehen: Alle, Offen, Erledigt. Der aktive Chip ist farbig.“",
      en: "“Put filter chips above the task list: All, Open, Done. The active chip is colored.”"
    }
  },
  {
    id: "gui-pagination", thema: "gui", typ: "benennen", mockup: "pagination",
    frage: {
      de: "Wie heißt die Leiste mit den Seitenzahlen unter den Suchergebnissen?",
      en: "What is the bar with the page numbers below the search results called?"
    },
    optionen: ["Pagination", "Breadcrumb", "Stepper", "Scrollbar"],
    richtig: 0,
    warum: {
      1: {
        de: "Eine Breadcrumb zeigt den Pfad: Start › Projekte › …",
        en: "A breadcrumb shows the path: Start › Projects › …"
      },
      2: {
        de: "Ein Stepper zeigt die Schritte eines Ablaufs, z. B. 1 Adresse, 2 Bezahlen.",
        en: "A stepper shows the steps of a process, for example 1 Address, 2 Payment."
      },
      3: {
        de: "Die Scrollbar ist der Balken am Rand zum Scrollen.",
        en: "The scrollbar is the bar at the edge for scrolling."
      }
    },
    erklaerung: {
      de: "Pagination (Seitennummerierung) teilt lange Listen in Seiten. Die Alternativen sind ein Button „Mehr laden“ oder endloses Scrollen (Infinite Scroll).",
      en: "Pagination splits long lists into pages. The alternatives are a “Load more” button or endless scrolling (infinite scroll)."
    },
    prompt: {
      de: "„Zeig 20 Ergebnisse pro Seite und darunter eine Pagination.“",
      en: "“Show 20 results per page with pagination below.”"
    }
  },
  {
    id: "gui-slider", thema: "gui", typ: "benennen", mockup: "slider",
    frage: {
      de: "Wie heißt der Regler bei „Lautstärke“, den man mit der Maus hin und her zieht?",
      en: "What do you call the “Volume” control that you drag back and forth with the mouse?"
    },
    optionen: {
      de: ["Slider", "Toggle", "Fortschrittsbalken", "Scrollbar"],
      en: ["Slider", "Toggle", "Progress bar", "Scrollbar"]
    },
    richtig: 0,
    warum: {
      1: {
        de: "Ein Toggle kennt nur An und Aus, wie bei „Klickgeräusche“.",
        en: "A toggle only knows on and off, like the one for “Click sounds”."
      },
      2: {
        de: "Ein Fortschrittsbalken zeigt nur etwas an. Ziehen kann man ihn nicht.",
        en: "A progress bar only displays something. You can't drag it."
      },
      3: {
        de: "Mit der Scrollbar bewegst du die Seite, keinen Wert.",
        en: "With the scrollbar you move the page, not a value."
      }
    },
    erklaerung: {
      de: "Ein Slider (Schieberegler) wählt einen Wert aus einem Bereich, z. B. 0 bis 100. Gut, wenn der genaue Wert nicht so wichtig ist.",
      en: "A slider picks a value from a range, for example 0 to 100. Good when the exact value isn't that important."
    },
    prompt: {
      de: "„Füge einen Slider für die Schriftgröße hinzu, von 14 bis 24 px, und zeig den Wert daneben an.“",
      en: "“Add a slider for the font size, from 14 to 24 px, and show the value next to it.”"
    }
  },
  {
    id: "gui-checkbox", thema: "gui", typ: "benennen", mockup: "radio", hl: "extras",
    frage: {
      de: "Bei „Extras“ kannst du mehrere Dinge anhaken. Wie heißen diese Kästchen?",
      en: "Under “Extras” you can mark several things at once. What are these little squares called?"
    },
    optionen: {
      de: ["Checkboxen", "Radio Buttons", "Toggles", "Buttons"],
      en: ["Checkboxes", "Radio buttons", "Toggles", "Buttons"]
    },
    richtig: 0,
    warum: {
      1: {
        de: "Radio Buttons sind rund und erlauben nur eine Wahl, wie bei „Versand“.",
        en: "Radio buttons are round and allow only one choice, as under “Shipping”."
      },
      2: {
        de: "Ein Toggle ist ein Schiebeschalter für An und Aus.",
        en: "A toggle is a sliding switch for on and off."
      },
      3: {
        de: "Buttons lösen eine Aktion aus, sie haken nichts an.",
        en: "Buttons trigger an action, they don't check anything off."
      }
    },
    erklaerung: {
      de: "Checkboxen (Kontrollkästchen) erlauben beliebig viele Häkchen. Eine einzelne Checkbox passt für Ja/Nein-Fragen wie „Ich akzeptiere die AGB“.",
      en: "Checkboxes allow as many check marks as you like. A single checkbox fits yes/no questions such as “I accept the terms”."
    },
    prompt: {
      de: "„Unter dem Formular soll eine Checkbox „Newsletter abonnieren“ stehen, anfangs nicht angehakt.“",
      en: "“Below the form there should be a checkbox “Subscribe to newsletter”, unchecked at first.”"
    }
  },
  {
    id: "gui-spinner", thema: "gui", typ: "benennen", mockup: "spinner",
    frage: {
      de: "Wie heißt der drehende Kreis, der zeigt, dass etwas lädt?",
      en: "What is the rotating circle called that shows something is loading?"
    },
    optionen: {
      de: ["Spinner", "Skeleton", "Fortschrittsbalken", "Cursor"],
      en: ["Spinner", "Skeleton", "Progress bar", "Cursor"]
    },
    richtig: 0,
    warum: {
      1: {
        de: "Ein Skeleton zeigt graue Blöcke in der Form des späteren Inhalts.",
        en: "A skeleton shows gray blocks in the shape of the content to come."
      },
      2: {
        de: "Ein Fortschrittsbalken zeigt, wie viel schon geschafft ist, z. B. 62 %.",
        en: "A progress bar shows how much is already done, for example 62%."
      },
      3: { de: "Der Cursor ist dein Mauszeiger.", en: "The cursor is your mouse pointer." }
    },
    erklaerung: {
      de: "Ein Spinner (Ladekreis) sagt nur „bitte warten“, aber nicht, wie lange noch. Für längere Vorgänge ist ein Fortschrittsbalken besser.",
      en: "A spinner only says “please wait”, but not for how long. For longer tasks a progress bar is better."
    },
    prompt: {
      de: "„Zeig im Button „Speichern“ einen kleinen Spinner, solange gespeichert wird, und sperr den Button so lange.“",
      en: "“Show a small spinner in the “Save” button while saving, and disable the button until it is done.”"
    }
  },
  {
    id: "gui-kebab", thema: "gui", typ: "benennen", mockup: "kebab",
    frage: {
      de: "Wie heißt das Symbol mit den drei Punkten übereinander neben jedem Projekt?",
      en: "What is the icon with the three stacked dots next to each project called?"
    },
    optionen: {
      de: ["Kebab-Menü", "Hamburger-Menü", "Drag-Handle", "Scrollbar"],
      en: ["Kebab menu", "Hamburger menu", "Drag handle", "Scrollbar"]
    },
    richtig: 0,
    warum: {
      1: {
        de: "Das Hamburger-Menü hat drei waagerechte Striche und öffnet die Navigation.",
        en: "The hamburger menu has three horizontal lines and opens the navigation."
      },
      2: {
        de: "Ein Drag-Handle hat meist sechs Punkte und dient zum Verschieben.",
        en: "A drag handle usually has six dots and is for moving things around."
      },
      3: { de: "Die Scrollbar ist ein Balken am Rand.", en: "The scrollbar is a bar at the edge." }
    },
    erklaerung: {
      de: "Das Kebab-Menü (Drei-Punkte-Menü, wie ein Spieß) öffnet weitere Aktionen für genau dieses Element, z. B. Umbenennen oder Löschen. Liegen die Punkte nebeneinander, heißt es Meatball-Menü.",
      en: "The kebab menu (three-dot menu, like a skewer) opens more actions for exactly this item, for example Rename or Delete. If the dots sit side by side, it is called a meatball menu."
    },
    prompt: {
      de: "„Gib jeder Zeile in der Projektliste ein Kebab-Menü mit Umbenennen, Duplizieren und Löschen.“",
      en: "“Give each row in the project list a kebab menu with Rename, Duplicate and Delete.”"
    }
  },
  {
    id: "gui-disabled", thema: "gui", typ: "benennen", mockup: "disabled",
    frage: {
      de: "Der Button „Weiter“ ist grau und lässt sich nicht anklicken, solange die Checkbox leer ist. Wie heißt dieser Zustand?",
      en: "The “Continue” button is gray and can't be clicked as long as the checkbox is empty. What is this state called?"
    },
    optionen: ["Disabled", "Hover", "Focus", "Hidden"],
    richtig: 0,
    warum: {
      1: { de: "Hover heißt: Die Maus schwebt darüber.", en: "Hover means the mouse is resting over it." },
      2: {
        de: "Focus heißt: Das Element ist gerade ausgewählt, z. B. per Tab-Taste.",
        en: "Focus means the element is currently selected, for example with the Tab key."
      },
      3: {
        de: "Hidden heißt unsichtbar. Der Button ist aber sichtbar, nur gesperrt.",
        en: "Hidden means invisible. But the button is visible, just locked."
      }
    },
    erklaerung: {
      de: "Disabled (deaktiviert) heißt: sichtbar, aber gesperrt. Gut ist ein kurzer Hinweis, warum. Sonst klicken Leute verwirrt herum.",
      en: "Disabled means visible but locked. A short hint about why is a good idea. Otherwise people click around confused."
    },
    prompt: {
      de: "„Der Button „Weiter“ soll disabled sein, bis die Checkbox angehakt ist.“",
      en: "“The “Continue” button should be disabled until the checkbox is checked.”"
    }
  },
  {
    id: "gui-focus", thema: "gui", typ: "benennen", mockup: "focus",
    frage: {
      de: "Du hast ins E-Mail-Feld geklickt. Es hat jetzt einen farbigen Rahmen und einen blinkenden Strich. Wie heißt dieser Zustand?",
      en: "You clicked into the email field. It now has a colored border and a blinking line. What is this state called?"
    },
    optionen: ["Focus", "Hover", "Active", "Selected"],
    richtig: 0,
    warum: {
      1: {
        de: "Hover heißt nur: Die Maus schwebt darüber, ohne Klick.",
        en: "Hover only means the mouse is resting over it, without a click."
      },
      2: {
        de: "Active ist nur der kurze Moment, in dem die Maustaste gedrückt ist.",
        en: "Active is only the brief moment while the mouse button is pressed."
      },
      3: {
        de: "Selected passt eher zu markierten Einträgen in einer Liste.",
        en: "Selected fits better for highlighted entries in a list."
      }
    },
    erklaerung: {
      de: "Focus heißt: Dieses Element empfängt gerade deine Eingaben. Mit der Tab-Taste springt der Focus zum nächsten Feld. Ein sichtbarer Rahmen hilft allen, die mit der Tastatur arbeiten.",
      en: "Focus means this element is receiving your input right now. The Tab key moves the focus to the next field. A visible border helps everyone who works with the keyboard."
    },
    prompt: {
      de: "„Gib allen Eingabefeldern einen gut sichtbaren Focus-Rahmen in der Akzentfarbe.“",
      en: "“Give all input fields a clearly visible focus border in the accent color.”"
    }
  },
  {
    id: "gui-empty", thema: "gui", typ: "benennen", mockup: "empty",
    frage: {
      de: "Die Liste ist noch leer. Statt einer weißen Fläche siehst du einen Hinweis mit Button. Wie heißt so eine Ansicht?",
      en: "There is nothing in the list yet. Instead of a blank area you see a note with a button. What is such a view called?"
    },
    optionen: {
      de: ["Empty State", "Fehlerseite", "Skeleton", "Modal"],
      en: ["Empty state", "Error screen", "Skeleton", "Modal"]
    },
    richtig: 0,
    warum: {
      1: {
        de: "Eine Fehlerseite (z. B. 404) kommt, wenn etwas schiefgeht. Leer sein ist kein Fehler.",
        en: "An error screen (for example a 404 page) shows up when something goes wrong. Being empty is not an error."
      },
      2: {
        de: "Ein Skeleton zeigt Platzhalter, während Daten laden.",
        en: "A skeleton shows placeholders while data is loading."
      },
      3: { de: "Ein Modal liegt als Fenster über der Seite.", en: "A modal sits as a window on top of the page." }
    },
    erklaerung: {
      de: "Ein Empty State (Leerzustand) erklärt, warum nichts da ist und was man tun kann. Viel freundlicher als eine leere Fläche.",
      en: "An empty state explains why nothing is there and what you can do. Much friendlier than a blank area."
    },
    prompt: {
      de: "„Wenn es noch keine Projekte gibt, zeig einen Empty State mit kurzer Erklärung und dem Button „Neues Projekt“.“",
      en: "“If there are no projects yet, show an empty state with a short explanation and the button “New project”.”"
    }
  },
  {
    id: "gui-progress", thema: "gui", typ: "benennen", mockup: "progress",
    frage: {
      de: "Wie heißt der Balken, der beim Hochladen von links nach rechts voll wird?",
      en: "What is the bar called that fills up from left to right during an upload?"
    },
    optionen: {
      de: ["Fortschrittsbalken", "Slider", "Spinner", "Scrollbar"],
      en: ["Progress bar", "Slider", "Spinner", "Scrollbar"]
    },
    richtig: 0,
    warum: {
      1: {
        de: "Einen Slider ziehst du selbst. Dieser Balken füllt sich von allein.",
        en: "You drag a slider yourself. This bar fills up on its own."
      },
      2: {
        de: "Ein Spinner dreht sich nur und zeigt nicht, wie weit es ist.",
        en: "A spinner only rotates and doesn't show how far along things are."
      },
      3: { de: "Die Scrollbar zeigt, wo du auf der Seite bist.", en: "The scrollbar shows where you are on the page." }
    },
    erklaerung: {
      de: "Ein Fortschrittsbalken (Progress Bar) zeigt, wie viel schon geschafft ist. Ideal für Uploads, Downloads und Installationen.",
      en: "A progress bar shows how much is already done. Ideal for uploads, downloads and installs."
    },
    prompt: {
      de: "„Zeig beim Upload einen Fortschrittsbalken mit der Prozentzahl daneben.“",
      en: "“During the upload, show a progress bar with the percentage next to it.”"
    }
  },
  {
    id: "gui-m-blockiert", thema: "gui", form: "mehrfach",
    frage: {
      de: "Welche davon blockieren den Rest der Seite, bis du reagierst?",
      en: "Which of these block the rest of the page until you respond?"
    },
    optionen: {
      de: ["Modal", "Toast", "Bestätigungsdialog „Wirklich löschen?“", "Tooltip"],
      en: ["Modal", "Toast", "Confirmation dialog “Really delete?”", "Tooltip"]
    },
    richtige: [0, 2],
    erklaerung: {
      de: "Ein Bestätigungsdialog ist ein kleines Modal mit einer Frage. Blockieren lohnt sich nur vor einer echten Entscheidung, für eine kurze Info reicht ein Toast.",
      en: "A confirmation dialog is a small modal with a question. Blocking is only worth it before a real decision, and for a short notice a toast is enough."
    },
    prompt: {
      de: "„Die Erfolgsmeldung soll ein Toast sein, kein Modal. Sie darf niemanden aufhalten.“",
      en: "“Make the success message a toast, not a modal. It must not hold anyone up.”"
    }
  },
  {
    id: "gui-m-genau-eins", thema: "gui", form: "mehrfach",
    frage: {
      de: "In den Einstellungen soll man genau eine von vier Sprachen wählen. Welche Elemente passen dafür?",
      en: "In the settings, people should pick exactly one of four languages. Which elements fit?"
    },
    optionen: {
      de: ["Radio Buttons", "Checkboxen", "Dropdown", "Toggle", "Slider"],
      en: ["Radio buttons", "Checkboxes", "Dropdown", "Toggle", "Slider"]
    },
    richtige: [0, 2],
    erklaerung: {
      de: "Radio Buttons zeigen alle Möglichkeiten sofort, ein Dropdown spart Platz bei langen Listen. Checkboxen erlauben mehrere Haken, ein Toggle kennt nur An und Aus, ein Slider passt für Werte wie Lautstärke.",
      en: "Radio buttons show every choice at once, a dropdown saves space for long lists. Checkboxes allow several ticks, a toggle only knows on and off, a slider is for values like volume."
    },
    prompt: {
      de: "„Nimm für die Sprachauswahl ein Dropdown. Es soll immer genau eine Sprache gewählt sein.“",
      en: "“Use a dropdown for the language choice. Exactly one language should always be selected.”"
    }
  },
  {
    id: "gui-p-bausteine", thema: "gui", form: "paare",
    frage: {
      de: "Vier Bausteine, die auf fast jeder Seite vorkommen. Was ist was?",
      en: "Four building blocks found on almost every page. Which is which?"
    },
    paare: [
      ["Card", { de: "Kasten, der Zusammengehöriges bündelt", en: "box that groups related content" }],
      ["Avatar", { de: "Profilbild eines Nutzers", en: "a user's profile picture" }],
      ["Thumbnail", { de: "kleines Vorschaubild", en: "small preview image" }],
      ["Banner", { de: "Hinweis-Streifen über die ganze Breite", en: "notice strip across the full width" }]
    ],
    erklaerung: {
      de: "Mit diesen Wörtern weiß Claude sofort, welchen Teil der Seite du meinst. Eine Card enthält oft selbst ein Thumbnail oder einen Avatar.",
      en: "With these words Claude knows right away which part of the page you mean. A card often contains a thumbnail or an avatar itself."
    },
    prompt: {
      de: "„Zeig jedes Projekt als Card mit Thumbnail, Titel und dem Avatar des Besitzers.“",
      en: "“Show each project as a card with a thumbnail, the title and the owner's avatar.”"
    }
  },
  {
    id: "gui-p-formular", thema: "gui", form: "paare",
    frage: {
      de: "Vier Helfer für Formulare. Welcher ist wofür da?",
      en: "Four helpers for forms. What is each one for?"
    },
    paare: [
      ["Textarea", { de: "Feld für mehrzeiligen Text", en: "field for multi-line text" }],
      ["Date Picker", { de: "Kalender zum Auswählen eines Datums", en: "calendar for picking a date" }],
      ["Autocomplete", { de: "schlägt beim Tippen Treffer vor", en: "suggests matches while you type" }],
      ["Dropzone", { de: "Fläche zum Hineinziehen von Dateien", en: "area to drag files onto" }]
    ],
    erklaerung: {
      de: "Ein normales Eingabefeld (Input) hat nur eine Zeile, für längere Texte brauchst du eine Textarea. Date Picker und Autocomplete ersparen Tippfehler, weil man auswählt statt tippt.",
      en: "A normal input field has only one line, so longer text needs a textarea. Date picker and autocomplete prevent typos because people choose instead of typing."
    },
    prompt: {
      de: "„Mach aus dem Kommentarfeld eine Textarea und gib dem Datum einen Date Picker.“",
      en: "“Turn the comment field into a textarea and give the date a date picker.”"
    }
  }
);
