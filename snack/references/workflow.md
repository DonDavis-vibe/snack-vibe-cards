# Workflow and working style

Habits that keep a beginner's project on track. They are defaults: the user's own instructions always win. Apply them to the user's own tasks while the skill is loaded. They are not meant for the `/snack` steps themselves: setting up the quiz or scanning a project needs no plan file. If the user wants the habits in every session, offer the snippet at the end of this file for their CLAUDE.md.

## Working with the user

| Habit | Why |
|---|---|
| Short answers. Lead with what to do or what happened. | Long text gets skimmed, and the important line gets lost. |
| One step at a time. | A list of ten commands fails at step three and nobody knows why. |
| At most three options, with a recommendation. | Choosing between seven things is work. |
| A table or a short list instead of a wall of text. | Easier to scan and to come back to. |
| Explain a new term in brackets the first time. | The user learns while building and does not have to ask. |
| Say what you tested and what you did not. | "Done" without proof costs trust the first time it is wrong. |

## Doing the work

1. **Plan first.** For anything with three or more steps, or a decision that is hard to undo, write a short plan and check in before you start. In Claude Code, use plan mode. Put the plan as a checklist into `tasks/todo.md` in the project.
2. **Stop when it goes sideways.** If the approach is not working, stop and plan again instead of pushing on.
3. **Keep it simple.** Change only what is needed. Find the cause of a problem instead of covering it up.
4. **Fix bugs on your own.** Given an error message or a failing test: find the cause, fix it, show that it is fixed. Do not hand the puzzle back to the user.
5. **Prove it before you call it done.** Run it, test it, look at it in the browser. Report honestly: what works, what failed, what was not checked.
6. **Write down lessons.** After the user corrects you, add the pattern to `tasks/lessons.md`: what happened, and the rule that prevents it next time. Read that file at the start of a session.
7. **Track progress.** Tick items off in `tasks/todo.md` as you go, and add a short review at the end: what was built, what was measured, what is still open.

## Snippet for CLAUDE.md

Offer it when the user asks how to work better with Claude. Add it only after a clear yes.

### English

```markdown
## How we work

- For anything with 3 or more steps: write a plan first (checklist in `tasks/todo.md`) and check in before starting.
- Keep answers short and practical. One step at a time, at most three options with a recommendation.
- Do not call something done without testing it. Say what you tested and what you did not.
- When given a bug: find the cause and fix it without asking me how.
- After I correct you: add the lesson to `tasks/lessons.md` and read that file at the start of a session.
- Change only what is necessary. Simple beats clever.
```

### Deutsch

```markdown
## So arbeiten wir

- Bei allem ab 3 Schritten: erst einen Plan schreiben (Checkliste in `tasks/todo.md`) und nachfragen, bevor es losgeht.
- Antworte kurz und praxisnah. Ein Schritt nach dem anderen, höchstens drei Optionen mit Empfehlung.
- Melde nichts als fertig, ohne es zu testen. Sag, was du getestet hast und was nicht.
- Bei einem Fehler: Ursache finden und beheben, ohne mich zu fragen, wie.
- Nach einer Korrektur von mir: die Lektion in `tasks/lessons.md` eintragen und die Datei am Anfang einer Session lesen.
- Ändere nur, was nötig ist. Einfach schlägt clever.
```
