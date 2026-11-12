# Writing cards (Karten schreiben)

Read this before you add cards to `eigene-karten.js`. The same format is used by the starter cards in `karten/`.

## Contents
1. What makes a good card
2. Where cards go
3. Common fields
4. The card forms, with one example each
5. Checking and previewing
6. Mistakes that happen a lot

## 1. What makes a good card

- **One thing per card.** A fact the user can use the next time they talk to Claude or read their terminal.
- **From their world.** For project cards, quote their real file names, commands and messages (never secrets). "Why is `web/dist/` in your `.gitignore`?" beats "What is a build folder?".
- **Short.** Question in one or two lines. Explanation in one or two sentences that add the why, or a memory hook.
- **Honest wrong answers.** Each wrong answer is a mix-up a beginner could really make, not a joke. Wrong answers are about as long as the right one. If the right answer is always the longest, players learn to guess by length.
- **Correct.** If you are not sure about a fact, pick another fact.
- **Varied.** Use different forms in one batch. Do not start every question the same way.
- **No secrets, no personal data.** Never put keys, tokens, passwords, names of real people or customer data on a card.

## 2. Where cards go

Own cards live in `<quiz>/eigene-karten.js`, inside the array `window.SNACK_EIGENE = [ … ];`. Cards of one project sit together under a marker line:

```js
  // ── Projekt: weather-app · Ordner: /home/alex/weather-app · zuletzt durchsucht: 2026-11-12 · Commit 3f2a1bc ──
  {
    id: "weather-app-port", thema: "projekte", form: "wahl", typ: "bedeutung", projekt: "weather-app",
    …
  },
```

- `id`: project name, then a short name. Lowercase letters a to z, digits and hyphens only (write `ue` for `ü`). A letter for the form, as in `weather-app-l-start`, is optional. Ids must be unique in the whole quiz. Never change the id of an existing card, the user's progress hangs on it.
- `thema`: `"projekte"` for project cards. Other topics are allowed if a card is general knowledge.
- `projekt`: the project name. The quiz shows it as a label, and the next scan uses it to see what exists. If two projects share a name, add something to tell them apart.
- Marker line: name, full path of the project folder, date of the scan, short commit hash (7 characters). Update date and commit after each scan. Leave out `· Commit …` if the project has no Git. The path is fine here: the file is the user's own and is never shared.
- Every card ends with `},`. Keep the closing `];` at the end of the file.

The examples below show the format. Do not copy them: write cards about what is really in the user's project.

## 3. Common fields

| Field | Meaning |
|---|---|
| `id`, `thema`, `projekt` | See above. |
| `form` | How the card is answered. Default `"wahl"`. |
| `frage` | The question. Text in `` `backticks` `` is shown as code. |
| `code` | Optional block for a command, output or code. `\n` starts a new line. |
| `codeLabel` | Optional heading above the block, for example `"package.json"`. Without it the quiz writes "Command" or "Output". |
| `erklaerung` | Shown after answering. |
| `prompt` | Optional. A sentence in „…“ or “…” gets a copy button. Text starting with `Formel:` / `Formula:` is shown as a pattern. |
| `tipp` | Optional. Something to try out. |
| `os` | Optional. Show the card only on these systems: `["linux"]`, `["linux", "mac"]`, `["windows"]`. |

A text is a plain string in the user's language. The starter cards use pairs `{ de: "…", en: "…" }` instead, own cards do not need that.

## 4. The card forms

### `wahl`: pick one answer
Needs `typ`, `optionen` (2 to 4), `richtig` (index from 0). Optional `auchOk: [indexes]` for answers that also count, and `warum: { index: "why this one does not fit" }`.

```js
  {
    id: "weather-app-npm-ci", thema: "projekte", form: "wahl", typ: "bedeutung", projekt: "weather-app",
    frage: "Your README says `npm ci` instead of `npm install`. What is the difference?",
    optionen: [
      "`npm ci` installs exactly the versions from the lock file",
      "`npm ci` installs the newest version of every package",
      "`npm ci` only checks for errors and installs nothing",
      "`npm ci` is the old name of the same command"
    ],
    richtig: 0,
    warum: { 1: "That is what can happen with `npm install`. `ci` does the opposite: nothing moves." },
    erklaerung: "`ci` stands for clean install. It gives everyone the same versions, which is why install guides prefer it.",
    prompt: "“Why does this project use npm ci, and when would I use npm install instead?”"
  },
```

`typ` decides the label and a few rules:

| `typ` | Use it for | Rules |
|---|---|---|
| `bedeutung` | What does this mean or do? | |
| `fehler` | An error message to decode | Put the message in `code`. |
| `erlauben` | Claude wants to run a command: allow, ask first, or deny? | No `optionen`. Needs `code`. `richtig`: 0 allow, 1 ask first, 2 deny. Use `auchOk` when two reactions are fine. |
| `upgrade` | Which prompt is best? | Exactly 3 prompts: one too short, one good, one long but vague. The good one must not be the longest. |
| `benennen` | Name the highlighted part of a mini interface | Needs `mockup` (see `MOCKUPS` in `js/formen.js`). Rarely needed for project cards. |

### `luecke`: fill the gap
`code` with exactly one `___`, `optionen` (short pieces), `richtig`.

```js
  {
    id: "weather-app-l-start", thema: "projekte", form: "luecke", projekt: "weather-app",
    code: "npm run ___",
    frage: "Which script from your package.json starts the app while you are developing?",
    optionen: ["dev", "build", "test", "lint"], richtig: 0,
    erklaerung: "`dev` starts the development server with live reload. `build` creates the finished files for the web."
  },
```

### `mehrfach`: select all that apply
`optionen` (3 to 5), `richtige`: indexes of all correct ones. At least one, never all.

```js
  {
    id: "weather-app-m-gitignore", thema: "projekte", form: "mehrfach", projekt: "weather-app",
    frage: "Which of these are in your `.gitignore` for a good reason?",
    optionen: ["`.env`", "`node_modules/`", "`src/main.js`", "`dist/`"], richtige: [0, 1, 3],
    erklaerung: "Secrets and everything that can be rebuilt stay out of Git. Your own source code belongs in."
  },
```

### `reihenfolge`: put in order
`schritte`: 3 to 5 steps in the correct order. The quiz shuffles them. Only one order may be defensible.

```js
  {
    id: "weather-app-r-deploy", thema: "projekte", form: "reihenfolge", projekt: "weather-app",
    frage: "How does a change get onto your live site?",
    schritte: ["Change and test locally", "Commit", "Push to GitHub", "The host builds and publishes it"],
    erklaerung: "Your host watches the repository. Nothing reaches the live site until it is pushed."
  },
```

### `zeile`: tap the faulty line
`code` with 2 to 9 lines, `zeile`: index of the line with the problem (0 is the first). Optional `auchOk`. The question says what the user observes.

```js
  {
    id: "weather-app-z-env", thema: "projekte", form: "zeile", projekt: "weather-app",
    code: "const city = \"Berlin\";\nconst key = \"sk-example-123\";\nfetchWeather(city, key);", codeLabel: "Code",
    frage: "One line here must never be committed. Which one?",
    zeile: 1,
    erklaerung: "A key written into the code ends up on GitHub with the next push. It belongs in `.env`."
  },
```

### `paare`: match pairs
`paare`: 3 to 5 pairs `[left, right]`, usually 4. Left is a short term, right at most about 6 words. Each left item fits exactly one right item.

```js
  {
    id: "weather-app-p-ordner", thema: "projekte", form: "paare", projekt: "weather-app",
    frage: "Which folder of your project holds what?",
    paare: [["src/", "your own code"], ["public/", "images and static files"], ["dist/", "the finished build"], ["node_modules/", "installed packages"]],
    erklaerung: "Only `src/` and `public/` are written by you. The other two are generated."
  },
```

## 5. Checking and previewing

```bash
node <quiz>/scripts/check-karten.js <quiz>
```

It must end with `Alles ok.` It also prints how often the right answer is the longest option, once for all cards and once for the user's own cards. Above about 40 % players can guess by length, so shorten right answers or flesh out wrong ones.

To look at new cards without touching the user's progress: open the quiz, then add `?karten=id1,id2` to the end of the address in the browser and press Enter. Add `:wf` to an id to see a classic card as "true or false". On the command line the address needs the `file://` form in quotes, for example `xdg-open "file:///home/alex/snack-quiz/index.html?karten=id1,id2"`.

## 6. Mistakes that happen a lot

- A missing comma after `}` or at the end of a field. The quiz then shows a banner and all own cards are off.
- An odd number of backticks in a text.
- `richtig` pointing at the wrong option after reordering.
- `optionen` on an `erlauben` card, or more or fewer than 3 options on an `upgrade` card.
- A prompt without the surrounding quotes. It is then shown as a pattern without a copy button, which the checker reports.
- Two cards with the same id. The second one is skipped silently by the quiz and reported by the checker.
