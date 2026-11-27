# Team To-Do List

A small to-do list web app used to demo team workflow:
**Jira → Git branch → commit → GitHub pull request → review → merge → Jira Done**.

## How to run

No install needed. Open `index.html` in any browser.

## Features (Jira tickets)

| Ticket | Type | Description |
|---|---|---|
| DEMO-1 | Task | Set up the project structure |
| DEMO-2 | Story | Add a new task |
| DEMO-3 | Story | Mark a task as done |
| DEMO-4 | Story | Delete a task |
| DEMO-5 | Bug | User can add an empty task |

In `app.js`, `style.css` and `index.html`, each piece of code is marked with its ticket key.

## Team workflow

1. Pick a ticket in Jira and move it to **In Progress**.
2. Create a branch from `main` that includes the ticket key:
   `git checkout -b feature/DEMO-2-add-task`
3. Commit with the ticket key in the message:
   `git commit -m "DEMO-2: add task input and button"`
4. Push and open a pull request on GitHub.
5. A teammate reviews and approves, then merge.
6. Move the ticket to **Done** in Jira.

## Files

- `index.html`: page structure
- `style.css`: design
- `app.js`: app logic
