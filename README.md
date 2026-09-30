# 🚀 My React Learning Journey

> Started: 30 Sep 2026 | Goal: Learn React from scratch to building a complete real-world app

---

## 📊 Overall Progress

![Progress](https://img.shields.io/badge/Progress-1%2F21%20Chapters-brightgreen)
![Status](https://img.shields.io/badge/Status-Active-blue)
![Started](https://img.shields.io/badge/Started-30%20Sep%202026-orange)

```
Progress: █░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1/21 Chapters (5%)
```

---

## 📅 Chapter Progress Tracker

| Chapter | Topic | Date Completed | Status |
|---------|-------|---------------|--------|
| Chapter 1 | Setup & Project Structure | 30 Sep 2026 | ✅ Done |
| Chapter 2 | JSX | - | ⏳ Pending |
| Chapter 3 | Components | - | ⏳ Pending |
| Chapter 4 | Props | - | ⏳ Pending |
| Chapter 5 | Rendering Lists & Conditional Rendering | - | ⏳ Pending |
| Chapter 6 | Handling Events | - | ⏳ Pending |
| Chapter 7 | State with useState | - | ⏳ Pending |
| Chapter 8 | Controlled Inputs & Forms | - | ⏳ Pending |
| Chapter 9 | Lifting State Up & Component Communication | - | ⏳ Pending |
| Chapter 10 | useEffect | - | ⏳ Pending |
| Chapter 11 | Fetching Data (APIs) | - | ⏳ Pending |
| Chapter 12 | useRef | - | ⏳ Pending |
| Chapter 13 | React Router | - | ⏳ Pending |
| Chapter 14 | Context API & useContext | - | ⏳ Pending |
| Chapter 15 | useReducer | - | ⏳ Pending |
| Chapter 16 | Custom Hooks | - | ⏳ Pending |
| Chapter 17 | Performance Hooks (useMemo, useCallback, React.memo) | - | ⏳ Pending |
| Chapter 18 | Styling in React (CSS Modules, Tailwind CSS) | - | ⏳ Pending |
| Chapter 19 | State Management Library (Zustand / Redux Toolkit) | - | ⏳ Pending |
| Chapter 20 | Project Structure & Best Practices | - | ⏳ Pending |
| Chapter 21 | Final Project | - | ⏳ Pending |

---

## 🔁 My Workflow For Every Chapter

1. Learn the concept
2. Build a small project in that chapter's folder (one React project per chapter)
3. Update this README (tracker, study log, structure, commands, concepts)
4. Commit and push to GitHub

---

## 📝 Daily Study Log

### 📆 30 Sep 2026 — Day 1 (Chapter 1)

---

### ✅ Chapter 1 — Setup & Project Structure

**Prerequisites (quick summary):**

| Prerequisite | What it is (simple) | Why React needs it |
|--------------|---------------------|--------------------|
| Terminal / Command Prompt | A text window where you type commands to your computer | All React tooling runs through commands |
| Node.js | Lets JavaScript run *outside* the browser, on your computer | Vite and React's tools are built on Node |
| npm (Node Package Manager) | Comes with Node. Downloads and manages libraries (packages) | React itself is installed as an npm package |
| Git + GitHub | Git tracks changes to code. GitHub stores it online | To save and push each chapter |
| VS Code | Code editor | To write code |
| Modern JavaScript (ES6) | `let/const`, arrow functions, destructuring, `map/filter`, `import/export` | React code is written in modern JS |

**What is React?**
React is a JavaScript **library** for building user interfaces (UI). Instead of manually changing the page, you describe what the UI should look like for the current data, and React updates it for you.

```
Plain JS  → find element, change it manually
            document.getElementById("count").textContent = 5

React     → describe the UI for the current data, React updates the page
```

| Term | Meaning |
|------|---------|
| Component | A small reusable piece of UI (button, navbar, card). An app = many components combined |
| Declarative | You say *what* you want to see, not *how* to change the DOM step by step |
| Virtual DOM | React's lightweight copy of the page. It compares old vs new and updates only what changed |
| SPA (Single Page Application) | Browser loads one HTML page, React swaps content without reloading |

**What is Vite?**
To run React you need a setup that converts JSX into plain JS, bundles files and serves them. Vite (pronounced "veet") does this.

| Vite feature | Meaning |
|--------------|---------|
| Project generator | Creates a ready-made React project in seconds |
| Dev server | Runs your app locally at `http://localhost:5173` |
| HMR (Hot Module Replacement) | Page updates instantly when you save, no full reload |
| Build tool | Packs your app into optimized files for deployment |

> `create-react-app` is deprecated. Vite is the standard now.

**Steps I followed:**

1. Checked Node and npm:
```bash
node -v     # Vite needs Node 20.19+ or 22.12+
npm -v
```

2. Created the Vite React project (inside the `react-learning` folder):
```bash
npm create vite@latest 01-setup-and-structure -- --template react
```

3. Moved into the project and installed packages:
```bash
cd 01-setup-and-structure
npm install
```

4. Started the dev server:
```bash
npm run dev
```

**Commands explained:**

| Part | What it does |
|------|--------------|
| `npm create vite@latest` | Runs the latest Vite project generator |
| `01-setup-and-structure` | Name of the new folder (project name) |
| `--` | Separator: everything after it is passed to Vite |
| `--template react` | Use the React template (plain JavaScript) |
| `cd 01-setup-and-structure` | Move into the project folder |
| `npm install` | Reads `package.json`, downloads all listed packages into `node_modules/` |
| `npm run dev` | Starts the dev server (runs the `dev` script from `package.json`) |

> If Vite asks questions, choose React and JavaScript, and pick the default for anything else.
> Open the URL printed in the terminal (usually `http://localhost:5173`). Stop the server with `Ctrl + C`.

**Project structure after creation:**
```
01-setup-and-structure/
├── node_modules/       → downloaded packages (auto-generated, never push)
├── public/             → static files served as-is (favicon etc.)
├── src/                → ALL your React code lives here
│   ├── assets/         → images, icons
│   ├── App.jsx         → main (root) component
│   ├── App.css         → styles for App
│   ├── index.css       → global styles
│   └── main.jsx        → entry point of the React app
├── .gitignore          → files Git should ignore
├── eslint.config.js    → code quality rules (linting)
├── index.html          → the single HTML page
├── package.json        → project info, scripts, dependencies
├── package-lock.json   → exact versions of installed packages
├── README.md           → project description
└── vite.config.js      → Vite settings
```

**Important files:**

| File / Folder | Role |
|---------------|------|
| `index.html` | The only HTML page. Has `<div id="root"></div>` where React puts the whole app, and loads `main.jsx` |
| `src/main.jsx` | Entry point. Finds `#root` and renders `<App />` inside it |
| `src/App.jsx` | Root component. All other components are nested inside it |
| `package.json` | Project name, scripts and dependencies |
| `package-lock.json` | Locks exact versions so everyone gets the same setup |
| `node_modules/` | Actual code of all installed packages (huge, never push) |
| `vite.config.js` | Vite configuration (plugins etc.) |
| `.gitignore` | Tells Git to skip `node_modules/`, `dist/` etc. |
| `public/` | Files here are served directly (e.g. `/favicon.ico`) |
| `.jsx` extension | JavaScript file containing JSX (HTML-like syntax) |

**How the app starts:**
```
index.html  →  main.jsx  →  App.jsx
(<div id="root">)  (renders <App />)  (your UI)
```

**main.jsx explained:**
```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

| Line | Meaning |
|------|---------|
| `import { createRoot } from 'react-dom/client'` | Tool that connects React to the browser page |
| `document.getElementById('root')` | Finds the `<div id="root">` in `index.html` |
| `createRoot(...).render(...)` | Tells React to draw the given UI inside that div |
| `<App />` | Your root component |
| `<StrictMode>` | Helper wrapper that shows extra warnings in development only. No effect in production |

**package.json scripts and dependencies:**
```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "lint": "eslint .",
  "preview": "vite preview"
},
"dependencies": { "react": "...", "react-dom": "..." },
"devDependencies": { "vite": "...", "eslint": "..." }
```

| Script | What it does |
|--------|--------------|
| `npm run dev` | Starts dev server with live reload (use while coding) |
| `npm run build` | Creates optimized production files in `dist/` |
| `npm run preview` | Serves the `dist/` build locally to test it |
| `npm run lint` | Checks code for common mistakes |

| Dependency type | Meaning |
|-----------------|---------|
| `dependencies` | Needed by the app itself (`react`, `react-dom`) |
| `devDependencies` | Only needed while developing (`vite`, `eslint`) |

- `react` = the core library (components, hooks)
- `react-dom` = connects React to the browser DOM

**Practice task I did:**

Replaced everything in `src/App.jsx`:
```jsx
function App() {
  return (
    <div>
      <h1>Hello, I'm Aadit</h1>
      <p>This is my first React app.</p>
    </div>
  )
}

export default App
```
Then deleted unused files (`src/App.css`, `src/assets/react.svg`, `public/vite.svg`) and cleared `src/index.css`.

**Common errors:**

| Error | Fix |
|-------|-----|
| `'node' is not recognized` | Install Node.js LTS and restart terminal |
| `npm run dev` says missing script | You're in the wrong folder, `cd` into the project |
| Port 5173 already in use | Stop the other server (`Ctrl + C`) or let Vite use the next port |
| Blank white page | Check browser console (F12) for errors |

**Key takeaway:** React builds UI from reusable components. Vite creates and runs the project. Flow is `index.html` → `main.jsx` → `App.jsx`. All code goes in `src/`, and `node_modules/` is never pushed.

---

## 🗂️ Repo Folder Structure (Current)

```
react-learning/
│
├── 01-setup-and-structure/      ← Chapter 1 project (Vite + React)
│   ├── public/
│   ├── src/
│   │   ├── main.jsx
│   │   ├── App.jsx              ← edited (Hello, I'm Aadit)
│   │   └── index.css
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
└── README.md                    ← this file
```

---

## 💡 Key Commands Learned So Far

```bash
# Check tools
node -v                              # check Node version
npm -v                               # check npm version

# React + Vite
npm create vite@latest <name> -- --template react   # create React project
npm install                          # install all packages from package.json
npm run dev                          # start development server
npm run build                        # create production build in dist/
npm run preview                      # preview the production build
npm run lint                         # check code for mistakes

# Git
git add .                            # stage all changes
git commit -m "message"              # save a snapshot
git push                             # upload to GitHub
```

---

## 🧠 Concepts Understood So Far

- ✅ What React is and why it's used (components, declarative UI)
- ✅ What Node.js and npm are, and why React needs them
- ✅ What Vite is (dev server, HMR, build tool)
- ✅ What the Virtual DOM and SPA mean
- ✅ React project file structure and the role of each file
- ✅ App flow: `index.html` → `main.jsx` → `App.jsx`
- ✅ What `package.json` scripts and dependencies are
- ✅ Difference between `dependencies` and `devDependencies`

---

## 📌 Coming Up Next

- ⏳ Chapter 2 — JSX
- ⏳ Chapter 3 — Components
- ⏳ Chapter 4 — Props
- ⏳ Chapter 5 — Rendering Lists & Conditional Rendering

*Last Updated: 30 Sep 2026*