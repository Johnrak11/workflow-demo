# Team To-Do List

A small to-do list web app used to demo team workflow:
**Jira ticket → Git branch → commit → GitHub pull request → review → merge into `dev` → Jira Done**.

This folder is the **final version** after Sprint 1 (all tickets done). The code pasted during the
live demo (KAN-4 only) is in `../demo-code/KAN-4-add-task/`.

## How to run

No install needed. Open `index.html` in any browser.

## Jira tickets (space: Team To-Do List, key `KAN`)

| Ticket | Type | Summary |
|---|---|---|
| KAN-1 | Epic | To-Do List MVP (first usable version) |
| KAN-2 | Task | Set up Git repo and project structure |
| KAN-3 | Task | Design the to-do screen in Figma / Stitch |
| KAN-4 | Story | As a user, I want to add a task, so I can remember what to do |
| KAN-5 | Story | As a user, I want to mark a task as done, so I can track my progress |
| KAN-6 | Story | As a user, I want to delete a task, so my list stays clean |
| KAN-7 | Bug | User can add an empty task |

In `app.js`, `style.css` and `index.html`, each piece of code is marked with its ticket key.

## Team rules

1. **One branch for one ticket**, created from `dev`, with the ticket key in its name:
   `git checkout -b feat/KAN-4-add-task`
2. **Commit messages include the ticket key**:
   `git commit -m "feat(add-task): [KAN-4] add task input and button"`
3. **Never push directly to `dev`.** Open a pull request into `dev`; a teammate reviews it before merge.
4. After merge, move the ticket in Jira. The branch, commit and PR appear in the ticket automatically (GitHub for Jira).

## Files

- `index.html`: page structure
- `style.css`: design (from Figma)
- `app.js`: app logic
