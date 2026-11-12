# Learning as you go (Lernen nebenbei)

The idea: the user learns vocabulary while building, without stopping to study. Claude explains a term the first time it uses it, and the term lands in the quiz as a card.

## The standing rule for CLAUDE.md

Offer this snippet during the first run. Replace `<QUIZ>` with the real, absolute quiz folder. Add it to the end of `~/.claude/CLAUDE.md` only after the user says yes (create the file if it is missing). Use the version in the user's language. If the file already has a Snack or "Lernen nebenbei" rule, do not add a second one.

### English

```markdown
## Snack: learn as you go

- I am learning the basics while I build. When you use a term a non-programmer probably does not know (port, commit, modal, dependency …), explain it briefly in brackets the first time it comes up in a session.
- Add every term you explained this way to `<QUIZ>/begriffe.js` if it is not in there yet. The format is at the top of that file: one line per term, directly above `];`. No need to ask first.
- End your answer with a short line such as "New in the quiz: port, commit" so I can see what was added.
```

### Deutsch

```markdown
## Snack: Lernen nebenbei

- Ich lerne die Grundlagen beim Bauen. Wenn du einen Fachbegriff benutzt, den ein Nicht-Programmierer wahrscheinlich nicht kennt (z. B. Port, Commit, Modal, Dependency), erkläre ihn beim ersten Vorkommen in der Session kurz in Klammern.
- Trag jeden so erklärten Begriff in `<QUIZ>/begriffe.js` ein, falls er dort noch fehlt. Das Format steht oben in der Datei: eine Zeile pro Begriff, direkt über `];`. Keine Rückfrage nötig.
- Schreib am Ende deiner Antwort eine kurze Zeile wie „Neu im Quiz: Port, Commit“, damit ich sehe, was dazugekommen ist.
```

The path in this rule is also how the skill finds the quiz later, from any project. Keep it absolute.

## One line per term in `begriffe.js`

```js
  { wort: "Port", erklaerung: "Numbered door of a computer through which a program accepts connections.", prompt: "Start the server on port 8420.", datum: "2026-11-12" },
```

| Field | Rule |
|---|---|
| `wort` | The term the way it came up. Add the short form in brackets if both are used: `"Repository (Repo)"`. |
| `erklaerung` | Everyday words, about 15 words at most, no further jargon. In the user's language. A picture helps: door, drawer, phone book. |
| `prompt` | Optional. One example sentence that uses the term the way the user could say it to Claude. Plain sentence, no surrounding quotes (the quiz adds them). |
| `datum` | The day it came up, `YYYY-MM-DD`. |

Rules:

- Check first whether the term is already in the file (search for the word, ignore upper and lower case). No duplicates.
- Add the line directly above the closing `];`. Every line ends with a comma.
- Escape double quotes inside a text as `\"`, or use the typographic ones („…“ or “…”).
- Do not add terms the user clearly knows already, and do not add project-specific names (those belong on project cards).
- Do not add a term that a starter card already teaches. Search `<QUIZ>/karten/` for the word first.
- Three new terms per answer is plenty. More than that and nobody reads the brackets.
- The line "New in the quiz: …" goes at the very end of the message, after any question to the user.

## What the quiz does with the terms

- Every term becomes a card "What does … mean?". The wrong answers are explanations of other terms from the same file.
- Four terms at a time also appear as one "match pairs" card.
- With fewer than four terms there are no pair cards yet, so the first few sessions matter.

## Checking the file

If the quiz shows a banner that `begriffe.js` has a typo, run `node <QUIZ>/scripts/check-karten.js <QUIZ>` or read the last lines you added: a missing comma or an unescaped quote is the usual cause.
