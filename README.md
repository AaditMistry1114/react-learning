# 🚀 My React Learning Journey

> Started: 30 Sep 2026 | Goal: Learn React from scratch to building a complete real-world app

---

## 📊 Overall Progress

![Progress](https://img.shields.io/badge/Progress-7%2F21%20Chapters-brightgreen)
![Status](https://img.shields.io/badge/Status-Active-blue)
![Started](https://img.shields.io/badge/Started-30%20Sep%202026-orange)

```
Progress: ██████████░░░░░░░░░░░░░░░░░░░░  7/21 Chapters (33%)
```

---

## 📅 Chapter Progress Tracker

| Chapter | Topic | Date Completed | Status |
|---------|-------|---------------|--------|
| Chapter 1 | Setup & Project Structure | 30 Sep 2026 | ✅ Done |
| Chapter 2 | JSX | 30 Sep 2026 | ✅ Done |
| Chapter 3 | Components | 01 Oct 2026 | ✅ Done |
| Chapter 4 | Props | 01 Oct 2026 | ✅ Done |
| Chapter 5 | Rendering Lists & Conditional Rendering | 02 Oct 2026 | ✅ Done |
| Chapter 6 | Handling Events | 03 Oct 2026 | ✅ Done |
| Chapter 7 | State with useState | 04 Oct 2026 | ✅ Done |
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

### ✅ Chapter 2 — JSX

**Prerequisites (quick summary):**

| Prerequisite | What it is (simple) |
|--------------|---------------------|
| Chapter 1 setup | A running Vite + React project |
| HTML basics | Tags, attributes, nesting (`<div>`, `<h1>`, `<img>`) |
| JS expressions | Anything that produces a value: `2 + 3`, `name`, `age > 18 ? "adult" : "minor"` |

**What is JSX?**
JSX (JavaScript XML) is a syntax that lets you write HTML-like code inside JavaScript. It is not HTML. Browsers can't read it, so Vite converts it into plain JavaScript before running.

```
What you write (JSX):        <h1>Hello</h1>
What Vite converts it to:    React.createElement("h1", null, "Hello")
What the browser runs:       plain JavaScript that creates an <h1>
```

> JSX is optional (you could write `createElement` by hand), but nobody does. It makes UI code short and readable.

**JSX vs HTML — key differences:**

| HTML | JSX | Why |
|------|-----|-----|
| `class="box"` | `className="box"` | `class` is a reserved word in JavaScript |
| `for="name"` | `htmlFor="name"` | `for` is a reserved word in JavaScript |
| `onclick="..."` | `onClick={...}` | Attributes are written in camelCase |
| `tabindex="1"` | `tabIndex={1}` | camelCase again |
| `<img src="a.png">` | `<img src="a.png" />` | Every tag must be closed |
| `style="color: red"` | `style={{ color: "red" }}` | Style is a JS object, not a string |
| `<!-- comment -->` | `{/* comment */}` | Comments live inside `{ }` |

**The 6 rules of JSX:**

**Rule 1 — Return only ONE parent element**
```jsx
// ❌ Wrong — two siblings at the top
return (
  <h1>Title</h1>
  <p>Text</p>
)

// ✅ Right — wrapped in one parent
return (
  <div>
    <h1>Title</h1>
    <p>Text</p>
  </div>
)
```

**Rule 2 — Use a Fragment when you don't want an extra `<div>`**
```jsx
return (
  <>
    <h1>Title</h1>
    <p>Text</p>
  </>
)
```
> `<> </>` is a Fragment: an invisible wrapper. It groups elements without adding anything to the page.

**Rule 3 — Close every tag**
```jsx
<img src="logo.png" alt="Logo" />
<br />
<input type="text" />
```

**Rule 4 — Use camelCase and `className`**
```jsx
<div className="card" tabIndex={0}>...</div>
```

**Rule 5 — Wrap multi-line JSX in parentheses after `return`**
```jsx
return (
  <div>
    <h1>Hello</h1>
  </div>
)
```
> Without the parentheses, `return` followed by a new line returns `undefined` and nothing shows up.

**Rule 6 — Component names start with a capital letter**
```jsx
<App />     // ✅ React treats this as a component
<app />     // ❌ React treats this as an HTML tag
```

**Using JavaScript inside JSX — curly braces `{ }`**

`{ }` is a window from JSX back into JavaScript. Anything that produces a value can go inside it.

```jsx
const name = "Aadit"
const age = 21

<h1>Hello, {name}</h1>                      {/* variable */}
<p>Next year I'll be {age + 1}</p>          {/* math */}
<p>{name.toUpperCase()}</p>                 {/* function call */}
<p>{age >= 18 ? "Adult" : "Minor"}</p>      {/* ternary */}
```

| ✅ Allowed inside `{ }` (expressions) | ❌ Not allowed (statements) |
|--------------------------------------|----------------------------|
| variables, math, function calls | `if (...) { }` |
| ternary `a ? b : c` | `for (...) { }` |
| `&&` / `\|\|` | `let x = 5` |
| arrays, template literals | `switch` |

> Simple rule: if you can put it on the right side of `=`, you can put it inside `{ }`.

**Curly braces in attributes:**
```jsx
const link = "https://github.com"
<a href={link}>My GitHub</a>       // ✅ no quotes around {link}
<a href="{link}">My GitHub</a>     // ❌ this is the literal text "{link}"
```

**Inline styles — double curly braces:**
```jsx
<h1 style={{ color: "blue", fontSize: "24px" }}>Hello</h1>
```
```
style={ { color: "blue" } }
       │ └── the JS object
       └──── outer braces: "JavaScript coming"
```
> CSS properties become camelCase: `font-size` → `fontSize`, `background-color` → `backgroundColor`. Values are strings.

**Comments in JSX:**
```jsx
{/* This is a comment inside JSX */}
```

**Practice task I did (`src/App.jsx`):**
```jsx
function App() {
  const name = "Aadit"
  const role = "Computer Engineering Student"
  const skills = ["HTML", "CSS", "JavaScript"]
  const isLearningReact = true
  const githubLink = "https://github.com/AaditMistry1114"

  const cardStyle = {
    border: "1px solid gray",
    borderRadius: "8px",
    padding: "16px",
    width: "300px",
  }

  return (
    <>
      {/* Profile card */}
      <div style={cardStyle}>
        <h1>{name}</h1>
        <p>{role}</p>
        <p>Skills: {skills[0]}, {skills[1]}, {skills[2]}</p>
        <p>{isLearningReact ? "Learning React 🚀" : "Not learning React"}</p>
        <a href={githubLink}>My GitHub</a>
      </div>
    </>
  )
}

export default App
```

**Common errors:**

| Error | Fix |
|-------|-----|
| `Adjacent JSX elements must be wrapped in an enclosing tag` | Wrap in one parent or use `<> </>` |
| `Unexpected token` near `if` inside JSX | Statements aren't allowed in `{ }`, use a ternary |
| Styling not applied | Used `class` instead of `className` |
| Page shows `{name}` as text | Put the variable in `{ }` without quotes |
| `Objects are not valid as a React child` | You put an object inside `{ }`, print a property like `{user.name}` instead |
| Nothing renders after `return` | Missing parentheses around multi-line JSX |

**Key takeaway:** JSX is HTML-like syntax that becomes JavaScript. Use `{ }` for any JS expression, `className` instead of `class`, close every tag, and return one parent (or a Fragment).

---

### ✅ Chapter 3 — Components

**Prerequisites (quick summary):**

| Prerequisite | What it is (simple) |
|--------------|---------------------|
| JSX (Chapter 2) | The HTML-like syntax a component returns |
| JS functions | A block of code you can call and reuse: `function add(a, b) { return a + b }` |
| `import` / `export` | How JS files share code with each other |

**What is a Component?**
A component is a JavaScript function that returns JSX. It is a reusable piece of UI. A whole React app is just many components combined, like Lego blocks.

```
Component = function + returns JSX

function Welcome() {
  return <h1>Hello!</h1>
}
```

**Why use components?**

| Without components | With components |
|--------------------|-----------------|
| One huge file with all the UI | Small files, each with one job |
| Copy-paste the same card 10 times | Write once, use 10 times |
| Change a button → edit 10 places | Change a button → edit 1 place |

**Using a component:** write it like an HTML tag.
```jsx
<Welcome />
```

**Component tree:** components nest inside each other like a family tree.
```
App
├── Header
├── ProfileCard
│   └── Skills
├── ProfileCard      ← same component, reused
└── Footer
```
> `App` is the root. Every other component is a child, grandchild, and so on.

**Rules of components:**

| Rule | Why |
|------|-----|
| Name starts with a capital letter (`Header`, not `header`) | Lowercase = HTML tag, capital = component |
| Must return JSX (or `null` to show nothing) | That is what gets drawn on the page |
| Return only one parent (or a Fragment `<> </>`) | Same rule as JSX |
| One component per file, file named after the component | Easy to find (`Header.jsx` holds `Header`) |
| Never define a component inside another component | It gets recreated on every render, causing bugs and slowness |

**Creating a component in its own file:**

Step 1 — Make a `components` folder inside `src/` and add `Header.jsx`:
```jsx
function Header() {
  return (
    <header>
      <h1>My React App</h1>
    </header>
  )
}

export default Header
```

Step 2 — Import and use it in `App.jsx`:
```jsx
import Header from './components/Header'

function App() {
  return (
    <>
      <Header />
    </>
  )
}

export default App
```

**Default export vs Named export:**

| | Default export | Named export |
|---|----------------|--------------|
| Export | `export default Header` | `export function Footer() {...}` |
| Import | `import Header from './Header'` | `import { Footer } from './Footer'` |
| Per file | Only ONE | As many as needed |
| Import name | Any name you like | Must match exactly (in `{ }`) |

> Common convention: one component per file with `export default`.

**Import path rules:**
```
'./components/Header'   → ./  means "start from this file's folder"
'../components/Header'  → ../ means "go one folder up"
```
> You can skip the `.jsx` extension when importing.

**Why does the same component work many times?**
Each `<ProfileCard />` is a separate copy created from the same function. Changing the function changes all copies.

**Folder structure:**
```
src/
├── components/
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── ProfileCard.jsx
│   └── Skills.jsx
├── App.jsx
├── main.jsx
└── index.css
```

**Practice task I did:**

`src/components/Header.jsx`
```jsx
function Header() {
  return (
    <header style={{ background: "#222", color: "white", padding: "12px" }}>
      <h1>My Profile Page</h1>
    </header>
  )
}

export default Header
```

`src/components/Skills.jsx`
```jsx
function Skills() {
  return (
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
    </ul>
  )
}

export default Skills
```

`src/components/ProfileCard.jsx` (nests `Skills`)
```jsx
import Skills from './Skills'

function ProfileCard() {
  return (
    <div style={{ border: "1px solid gray", padding: "12px", margin: "12px", width: "260px" }}>
      <h2>Aadit</h2>
      <p>Computer Engineering Student</p>
      <Skills />
    </div>
  )
}

export default ProfileCard
```

`src/components/Footer.jsx` (named export, to practice both styles)
```jsx
export function Footer() {
  return (
    <footer style={{ padding: "12px" }}>
      <p>© 2026 Aadit</p>
    </footer>
  )
}
```

`src/App.jsx`
```jsx
import Header from './components/Header'
import ProfileCard from './components/ProfileCard'
import { Footer } from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <Footer />
    </>
  )
}

export default App
```
> All three cards look identical for now. In Chapter 4 (Props) we'll make each one show different data.

**Common errors:**

| Error | Fix |
|-------|-----|
| Component shows as an unknown HTML tag / nothing renders | Name is lowercase, use a capital letter |
| `Failed to resolve import './components/Header'` | Wrong path or filename spelling |
| `... is not exported` / `does not provide an export named default` | Mismatch: default export imported with `{ }`, or the reverse |
| `Element type is invalid` | Forgot `export`, or imported the wrong thing |
| Nothing shows, no error | Forgot to use `<Header />` in `App.jsx`, or forgot `return` |

**Key takeaway:** A component is a function that returns JSX. Build small components, one per file, and combine them into a tree under `App`. Write it once, reuse it anywhere.

---

### ✅ Chapter 4 — Props

**Prerequisites (quick summary):**

| Prerequisite | What it is (simple) |
|--------------|---------------------|
| Components (Chapter 3) | Functions that return JSX, reused like tags |
| JS function parameters | Values you pass into a function: `greet("Aadit")` |
| JS objects | `{ name: "Aadit", role: "Student" }` with `object.name` access |
| Destructuring | Pulling values out of an object: `const { name, role } = user` |

**What are Props?**
Props (short for properties) are the data you pass into a component from its parent. They make one component show different content each time you use it.

```
Without props → 3 identical cards, same text everywhere
With props    → 3 cards, each shows different name, role, skills
```

Think of a component as a function and props as its arguments:
```
Function:   greet("Aadit")           → "Hello, Aadit"
Component:  <Greet name="Aadit" />   → <h1>Hello, Aadit</h1>
```

**Passing props (parent → child):** write them like HTML attributes.
```jsx
<ProfileCard name="Aadit" role="Student" experience={1} />
```

**Receiving props (in the child):** React gives the component ONE object called `props`.
```jsx
function ProfileCard(props) {
  return <h2>{props.name}</h2>
}
```
`props` here is `{ name: "Aadit", role: "Student", experience: 1 }`.

**Destructuring props (the standard way):** pull the values out in the function parameter.
```jsx
function ProfileCard({ name, role, experience }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{role}</p>
      <p>{experience} year(s)</p>
    </div>
  )
}
```
> Same thing as `props.name`, `props.role`, but shorter and cleaner.

**Passing different types of values:**

| Type | How to pass | Example |
|------|-------------|---------|
| String | Quotes | `name="Aadit"` |
| Number | Curly braces | `experience={1}` |
| Boolean | Curly braces (or shorthand) | `isOpenToWork={true}` or just `isOpenToWork` |
| Array | Curly braces | `skills={["HTML", "CSS"]}` |
| Object | Double curly braces | `address={{ city: "Mumbai", state: "MH" }}` |
| Function | Curly braces | `onClick={handleClick}` (covered in Chapter 6) |
| Variable | Curly braces | `name={userName}` |

> Rule: plain text goes in quotes. Everything else goes in `{ }`. `experience="1"` passes the text "1", not the number 1.

**Default values:** used when the parent doesn't pass the prop.
```jsx
function Footer({ year = 2026 }) {
  return <p>© {year} Aadit</p>
}

<Footer />              // © 2026 Aadit
<Footer year={2030} />  // © 2030 Aadit
```

**The special `children` prop:** whatever you put between the opening and closing tags.
```jsx
function Card({ children }) {
  return <div className="card">{children}</div>
}

<Card>
  <h2>Hello</h2>
  <p>Anything can go here</p>
</Card>
```
```
<Card> ...stuff... </Card>
         │
         └── becomes the `children` prop inside Card
```
> Useful for wrappers like cards, modals, layouts, buttons.

**Spread syntax for many props:**
```jsx
const user = { name: "Aadit", role: "Student", experience: 1 }

<ProfileCard {...user} />
// same as: <ProfileCard name="Aadit" role="Student" experience={1} />
```

**Props rules:**

| Rule | Meaning |
|------|---------|
| Props are read-only | A child must NEVER change its props (`name = "X"` is wrong) |
| Data flows one way | Parent → child only, never child → parent (one-way data flow) |
| Props change → component re-renders | React redraws the component with the new values |
| Prop names are camelCase | `isOpenToWork`, not `is-open-to-work` |

```
App (parent)
 │  name="Aadit", role="Student"
 ▼
ProfileCard (child)  → can read them, cannot change them
```

> To make data that CAN change, we use state (Chapter 7).

**Practice task I did:**

`src/components/Header.jsx`
```jsx
function Header({ title }) {
  return (
    <header style={{ background: "#222", color: "white", padding: "12px" }}>
      <h1>{title}</h1>
    </header>
  )
}

export default Header
```

`src/components/ProfileCard.jsx`
```jsx
function ProfileCard({ name, role, experience, skills, isOpenToWork = false, children }) {
  return (
    <div style={{ border: "1px solid gray", padding: "12px", margin: "12px", width: "280px" }}>
      <h2>{name}</h2>
      <p>{role}</p>
      <p>Experience: {experience} year(s)</p>
      <p>Skills: {skills.join(", ")}</p>
      <p>{isOpenToWork ? "Open to work ✅" : "Not looking right now"}</p>
      {children}
    </div>
  )
}

export default ProfileCard
```

`src/components/Footer.jsx`
```jsx
function Footer({ year = 2026 }) {
  return (
    <footer style={{ padding: "12px" }}>
      <p>© {year} Aadit</p>
    </footer>
  )
}

export default Footer
```

`src/App.jsx`
```jsx
import Header from './components/Header'
import ProfileCard from './components/ProfileCard'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header title="Team Profiles" />

      <ProfileCard
        name="Aadit"
        role="Computer Engineering Student"
        experience={1}
        skills={["HTML", "CSS", "JavaScript"]}
        isOpenToWork={true}
      />

      <ProfileCard
        name="Riya"
        role="UI Designer"
        experience={3}
        skills={["Figma", "CSS"]}
      />

      <ProfileCard
        name="Karan"
        role="Backend Developer"
        experience={2}
        skills={["Python", "Django"]}
        isOpenToWork
      >
        <p>Note: available from January</p>
      </ProfileCard>

      <Footer />
    </>
  )
}

export default App
```
> Each card now shows different data from the same component. Riya's card uses the default `isOpenToWork = false`. Karan's card uses `children` for the extra note.

**Common errors:**

| Error | Fix |
|-------|-----|
| Prop shows `undefined` | Name mismatch between parent and child, or forgot to pass it |
| `Cannot read properties of undefined (reading 'join')` | Array prop wasn't passed, pass it or give a default (`skills = []`) |
| Number behaves like text (`"1" + 1 = "11"`) | Wrote `experience="1"`, use `experience={1}` |
| `Cannot assign to read only property` | Tried to change a prop, props are read-only |
| `Objects are not valid as a React child` | Printed a whole object, print a property like `{address.city}` |
| Forgot destructuring braces | Write `function Card({ name })`, not `function Card(name)` |

**Key takeaway:** Props are how a parent sends data to a child. They are read-only and flow one way (parent → child). Destructure them in the function parameter, use defaults for optional ones, and use `children` for content placed between tags.

---

### ✅ Chapter 5 — Rendering Lists & Conditional Rendering

**Prerequisites (quick summary):**

| Prerequisite | What it is (simple) |
|--------------|---------------------|
| Props (Chapter 4) | Data passed from parent to child |
| `array.map()` | Loops over an array and returns a NEW array: `[1,2,3].map(n => n * 2)` → `[2,4,6]` |
| `array.filter()` | Returns a new array with only items that pass a test: `[1,2,3].filter(n => n > 1)` → `[2,3]` |
| Ternary operator | Short if/else: `condition ? valueIfTrue : valueIfFalse` |
| `&&` operator | `a && b` gives `b` if `a` is truthy, otherwise gives `a` |

---

#### Part 1 — Rendering Lists

**The problem:** real apps show data from arrays (users, products, posts). You can't write 100 `<ProfileCard />` by hand.

**The solution:** use `map()` to turn an array of data into an array of JSX.

```jsx
const names = ["Aadit", "Riya", "Karan"]

<ul>
  {names.map((name) => (
    <li key={name}>{name}</li>
  ))}
</ul>
```
```
["Aadit", "Riya", "Karan"]
        │  map()
        ▼
[<li>Aadit</li>, <li>Riya</li>, <li>Karan</li>]   ← React draws these
```

> We use `map()` (not `for` or `forEach`) because JSX needs a value, and `map()` returns a new array. `forEach` returns nothing, so nothing renders.

**Rendering an array of objects (most common case):**
```jsx
const people = [
  { id: 1, name: "Aadit", role: "Student" },
  { id: 2, name: "Riya", role: "Designer" },
]

{people.map((person) => (
  <ProfileCard key={person.id} name={person.name} role={person.role} />
))}
```
Or with spread (works when the object keys match the prop names):
```jsx
{people.map((person) => (
  <ProfileCard key={person.id} {...person} />
))}
```

**What is `key`?**
When rendering a list, every item needs a `key` prop. It is a unique ID that helps React track which item is which when the list changes (items added, removed, reordered).

| Without key | With key |
|-------------|----------|
| React shows a warning in the console | No warning |
| On changes, React may update the wrong items | React updates only the item that changed |

**Rules for keys:**

| Rule | Example |
|------|---------|
| Must be unique among siblings (in the same list) | `key={person.id}` |
| Must be stable (same item = same key every render) | Use database `id`, not a random value |
| Put the key on the outermost element returned inside `map()` | On `<ProfileCard key=... />`, not on something inside it |
| `key` is NOT passed to the component as a prop | You can't read `props.key` |

```jsx
// ✅ Good — stable, unique ID
key={person.id}

// ❌ Bad — changes every render, defeats the purpose
key={Math.random()}

// ⚠️ Index — only OK for static lists that never reorder, filter or change
key={index}
```
> If your data has no id, you can add one when creating the data. Avoid `index` for lists that can change.

**Filtering a list before rendering:**
```jsx
const available = people.filter((person) => person.isOpenToWork)

{available.map((person) => (
  <ProfileCard key={person.id} {...person} />
))}
```
```
people → filter() → only matching items → map() → JSX
```

**Sorting a list (copy first!):**
```jsx
const sorted = [...people].sort((a, b) => a.name.localeCompare(b.name))
```
> `sort()` changes the original array. Always copy with `[...people]` first.

**Empty list:** show a message instead of nothing (see conditional rendering below).

---

#### Part 2 — Conditional Rendering

**What is it?** Showing different UI depending on a condition (logged in or not, loading or loaded, list empty or not). React has no special syntax for this, you use normal JavaScript.

**Method 1 — if / else with early return**
Best when the whole component changes.
```jsx
function Status({ isLoggedIn }) {
  if (!isLoggedIn) {
    return <p>Please log in.</p>
  }

  return <p>Welcome back!</p>
}
```

**Method 2 — Ternary `? :`**
Best for choosing between two things inside JSX.
```jsx
<p>{isOpenToWork ? "Open to work ✅" : "Not looking right now"}</p>
```

**Method 3 — `&&` (logical AND)**
Best for showing something OR nothing.
```jsx
{isOpenToWork && <span>🟢 Available</span>}
```
```
condition true  → shows the JSX
condition false → shows nothing
```

**⚠️ The `0` trap with `&&`:**
```jsx
{count && <p>You have {count} items</p>}   // if count is 0, it prints 0 on the page!
{count > 0 && <p>You have {count} items</p>}   // ✅ always make it a true/false check
```
> React doesn't render `true`, `false`, `null` or `undefined`, but it DOES render the number `0`.

**Method 4 — Variable (for bigger blocks)**
```jsx
let badge = null
if (experience >= 3) {
  badge = <span>Senior</span>
} else {
  badge = <span>Junior</span>
}

return <div>{badge}</div>
```

**Method 5 — Return `null`** (render nothing)
```jsx
function Banner({ show }) {
  if (!show) return null
  return <div>Sale today!</div>
}
```

**Which method to use?**

| Situation | Use |
|-----------|-----|
| Whole component changes | `if` with early `return` |
| Choose between two values/elements | Ternary `? :` |
| Show something or nothing | `&&` |
| Many branches / big blocks | Variable with `if / else if` |
| Component should show nothing | `return null` |

> You can't write `if` directly inside JSX `{ }` because only expressions are allowed (Chapter 2).

**Combining lists and conditions (empty state):**
```jsx
{available.length > 0 ? (
  available.map((person) => <ProfileCard key={person.id} {...person} />)
) : (
  <p>No one is available right now.</p>
)}
```

**Folder structure:**
```
src/
├── components/
│   ├── Header.jsx
│   └── ProfileCard.jsx
├── data/
│   └── people.js          ← our array of data lives here
├── App.jsx
├── main.jsx
└── index.css
```
> Keeping data in its own file keeps `App.jsx` clean. Later this data will come from an API.

**Practice task I did:**

`src/data/people.js`
```js
const people = [
  { id: 1, name: "Aadit", role: "Computer Engineering Student", experience: 1, isOpenToWork: true },
  { id: 2, name: "Riya", role: "UI Designer", experience: 3, isOpenToWork: false },
  { id: 3, name: "Karan", role: "Backend Developer", experience: 2, isOpenToWork: true },
  { id: 4, name: "Meera", role: "Data Analyst", experience: 5, isOpenToWork: false },
]

export default people
```

`src/components/ProfileCard.jsx`
```jsx
function ProfileCard({ name, role, experience, isOpenToWork }) {
  return (
    <div style={{ border: "1px solid gray", padding: "12px", margin: "12px", width: "280px" }}>
      <h2>
        {name} {experience >= 3 && <span>⭐ Senior</span>}
      </h2>
      <p>{role}</p>
      <p>Experience: {experience} year(s)</p>
      <p>{isOpenToWork ? "🟢 Open to work" : "🔴 Not looking right now"}</p>
    </div>
  )
}

export default ProfileCard
```

`src/App.jsx`
```jsx
import ProfileCard from './components/ProfileCard'
import people from './data/people'

function App() {
  const available = people.filter((person) => person.isOpenToWork)

  return (
    <>
      <h1>All People ({people.length})</h1>
      {people.map((person) => (
        <ProfileCard key={person.id} {...person} />
      ))}

      <h1>Available People ({available.length})</h1>
      {available.length > 0 ? (
        available.map((person) => (
          <ProfileCard key={person.id} {...person} />
        ))
      ) : (
        <p>No one is available right now.</p>
      )}
    </>
  )
}

export default App
```
> Try setting every `isOpenToWork` to `false` in `people.js`. The "No one is available" message should appear.

**Common errors:**

| Error | Fix |
|-------|-----|
| `Each child in a list should have a unique "key" prop` | Add `key={item.id}` to the outermost element inside `map()` |
| List renders nothing | Used `forEach` (returns nothing) or forgot `return` inside `map()` with `{ }` body |
| `0` appears on the page | Used `count && ...`, change to `count > 0 && ...` |
| `Cannot read properties of undefined (reading 'map')` | The array is undefined, give it a default (`items = []`) |
| Items jump or show wrong data after reorder | Using `index` or random value as key, use a stable id |
| `Unexpected token` when using `if` inside JSX | Use ternary / `&&`, or move the `if` above the `return` |

**Key takeaway:** Use `map()` to turn arrays into JSX and always give each item a stable, unique `key`. Use `filter()` before `map()` to show part of a list. For conditions use `if` (whole component), ternary (two options) and `&&` (something or nothing), and make `&&` checks true/false to avoid the `0` trap.

---

### ✅ Chapter 6 — Handling Events

**Prerequisites (quick summary):**

| Prerequisite | What it is (simple) |
|--------------|---------------------|
| Props (Chapter 4) | Data (and functions) passed from parent to child |
| JS functions | `function sayHi() {}` and arrow functions `() => {}` |
| DOM events | Things that happen on a page: click, typing, submit, hover |
| Callback | A function you pass to something else, to be called later |

**What is an Event?**
An event is something the user does on the page: clicking a button, typing in an input, submitting a form, hovering over an element. An **event handler** is the function that runs when that event happens.

```
User clicks button  →  event happens  →  React calls your handler function
```

**Plain JS vs React:**

| Plain HTML / JS | React (JSX) |
|-----------------|-------------|
| `onclick="sayHi()"` (string) | `onClick={sayHi}` (function) |
| lowercase `onclick` | camelCase `onClick` |
| `addEventListener(...)` | Not needed, write it directly on the element |

**Basic syntax:**
```jsx
function App() {
  function handleClick() {
    console.log("Button clicked!")
  }

  return <button onClick={handleClick}>Click me</button>
}
```
> Open the browser console (F12) to see the log.

**Three ways to write a handler:**

```jsx
// 1. Named function (best for anything longer than one line)
function handleClick() {
  console.log("clicked")
}
<button onClick={handleClick}>Click</button>

// 2. Inline arrow function (fine for short one-liners)
<button onClick={() => console.log("clicked")}>Click</button>

// 3. Arrow function stored in a variable
const handleClick = () => console.log("clicked")
<button onClick={handleClick}>Click</button>
```

**⚠️ The #1 beginner mistake: calling the function instead of passing it**

```jsx
// ❌ Wrong — runs immediately when the page loads, not on click
<button onClick={handleClick()}>Click</button>

// ✅ Right — passes the function, React calls it on click
<button onClick={handleClick}>Click</button>
```
```
onClick={handleClick}    → "run this function WHEN clicked"
onClick={handleClick()}  → "run this function NOW, give the result to onClick"
```

**Passing arguments to a handler:** wrap the call in an arrow function.
```jsx
function greet(name) {
  console.log("Hello, " + name)
}

// ❌ Wrong — runs immediately
<button onClick={greet("Aadit")}>Greet</button>

// ✅ Right — arrow function waits until the click
<button onClick={() => greet("Aadit")}>Greet</button>
```

**The event object:** React gives your handler an object describing the event, as the first argument.
```jsx
function handleChange(event) {
  console.log(event.target.value)   // text typed in the input
}

<input onChange={handleChange} />
```

| Property | Meaning |
|----------|---------|
| `event.target` | The element that triggered the event |
| `event.target.value` | Current value of an input |
| `event.target.checked` | Whether a checkbox is ticked |
| `event.type` | Type of event (`"click"`, `"change"`) |
| `event.preventDefault()` | Stop the browser's default behaviour |
| `event.stopPropagation()` | Stop the event from reaching parent elements |

> The event object in React is a "SyntheticEvent": React's wrapper that works the same in every browser.

**Using both the event and your own argument:**
```jsx
<button onClick={(event) => handleHire(event, person.name)}>Hire</button>
```

**Common events:**

| Event | When it fires | Used on |
|-------|---------------|---------|
| `onClick` | Element is clicked | buttons, divs, links |
| `onChange` | Value changes (every keystroke in text inputs) | input, select, textarea |
| `onSubmit` | Form is submitted | form |
| `onMouseEnter` / `onMouseLeave` | Mouse enters / leaves | any element |
| `onFocus` / `onBlur` | Element gains / loses focus | inputs |
| `onKeyDown` / `onKeyUp` | A key is pressed / released | inputs, any focusable element |
| `onDoubleClick` | Double click | any element |

**preventDefault — stopping default browser behaviour**
A form refreshes the whole page when submitted. In React we stop that:
```jsx
function handleSubmit(event) {
  event.preventDefault()    // stop the page refresh
  console.log("Form submitted")
}

<form onSubmit={handleSubmit}>
  <input type="text" />
  <button type="submit">Send</button>
</form>
```

**stopPropagation — event bubbling**
Events "bubble up": a click on a button inside a card also counts as a click on the card.
```
Button click  →  button's onClick runs
              →  card's onClick runs   (bubbles up to parent)
              →  page's onClick runs
```
Stop it with `event.stopPropagation()`:
```jsx
<div onClick={() => console.log("card clicked")}>
  <button
    onClick={(event) => {
      event.stopPropagation()
      console.log("button clicked only")
    }}
  >
    Hire
  </button>
</div>
```

**Passing handlers as props (child → parent communication)**
Props only flow down, but you can send a FUNCTION down. The child calls it, and the code runs in the parent. This is how a child "talks" to its parent.

```
App (owns handleHire)
 │  onHire={handleHire}      ← function passed down as a prop
 ▼
ProfileCard
 │  <button onClick={() => onHire(name)}>   ← child calls it
 ▼
handleHire runs inside App
```

Naming convention:

| Where | Naming | Example |
|-------|--------|---------|
| Prop name (child receives) | starts with `on` | `onHire`, `onDelete` |
| Handler function (parent defines) | starts with `handle` | `handleHire`, `handleDelete` |

> This pattern is the foundation of Chapter 9 (Lifting State Up).

**A limitation (what's coming next):**
Handlers can log, alert, or call functions, but they cannot yet change what's shown on the screen. A normal variable like `let count = 0` that you change inside a handler will NOT update the UI. For that we need **state** (Chapter 7).

**Folder structure:**
```
src/
├── components/
│   ├── ProfileCard.jsx    ← buttons with handlers
│   └── ContactForm.jsx    ← form with onChange / onSubmit
├── App.jsx                ← owns handleHire, passes it down
├── main.jsx
└── index.css
```

**Practice task I did:**

`src/components/ProfileCard.jsx`
```jsx
function ProfileCard({ name, role, onHire }) {
  function handleCardClick() {
    console.log("Card clicked:", name)
  }

  function handleGreet() {
    alert("Hello, " + name + "!")
  }

  function handleHireClick(event) {
    event.stopPropagation()   // don't trigger the card's onClick
    onHire(name)              // call the function from the parent
  }

  return (
    <div
      onClick={handleCardClick}
      onMouseEnter={() => console.log("Hovering over", name)}
      style={{ border: "1px solid gray", padding: "12px", margin: "12px", width: "280px" }}
    >
      <h2>{name}</h2>
      <p>{role}</p>
      <button onClick={handleGreet}>Say hello</button>
      <button onClick={handleHireClick}>Hire</button>
    </div>
  )
}

export default ProfileCard
```

`src/components/ContactForm.jsx`
```jsx
function ContactForm() {
  function handleChange(event) {
    console.log("Typing:", event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    alert("Form submitted!")
  }

  return (
    <form onSubmit={handleSubmit} style={{ margin: "12px" }}>
      <input type="text" placeholder="Your name" onChange={handleChange} />
      <button type="submit">Send</button>
    </form>
  )
}

export default ContactForm
```

`src/App.jsx`
```jsx
import ProfileCard from './components/ProfileCard'
import ContactForm from './components/ContactForm'

function App() {
  function handleHire(name) {
    console.log("Hiring request sent for", name)
  }

  return (
    <>
      <h1>Handling Events</h1>
      <ProfileCard name="Aadit" role="Computer Engineering Student" onHire={handleHire} />
      <ProfileCard name="Riya" role="UI Designer" onHire={handleHire} />
      <ContactForm />
    </>
  )
}

export default App
```
> Open the console (F12). Click the card, click "Hire" (only the hire log appears because of `stopPropagation`), hover over a card, type in the input, and submit the form (the page does not refresh).

**Common errors:**

| Error | Fix |
|-------|-----|
| Handler runs on page load, not on click | Wrote `onClick={fn()}`, use `onClick={fn}` or `onClick={() => fn()}` |
| Nothing happens on click | Used `onclick` (lowercase) or `onClick="fn"` (string), use `onClick={fn}` |
| Form submit refreshes the page | Forgot `event.preventDefault()` |
| `onHire is not a function` | Parent didn't pass the prop, or prop names don't match |
| Button inside card triggers the card's click too | Add `event.stopPropagation()` |
| Changed a variable but UI didn't update | Normal variables don't re-render, use state (Chapter 7) |

**Key takeaway:** Events use camelCase props like `onClick` and receive a function, never a function call. Use an arrow function to pass arguments, `preventDefault()` for forms, and pass functions as props so a child can notify its parent. To actually change the screen after an event, we need state.

---

### ✅ Chapter 7 — State with useState

**Prerequisites (quick summary):**

| Prerequisite | What it is (simple) |
|--------------|---------------------|
| Events (Chapter 6) | Handlers like `onClick` that run when the user does something |
| Props (Chapter 4) | Data passed from parent to child (read-only) |
| Array destructuring | Pulling items out of an array by position: `const [a, b] = [10, 20]` → `a = 10`, `b = 20` |
| Spread operator `...` | Copies items/properties: `[...arr, 4]`, `{...obj, age: 22}` |
| `map()` / `filter()` | Return NEW arrays (Chapter 5) |

**What is State?**
State is a component's memory. It is data that can change over time, and when it changes, React redraws the component so the screen shows the new value.

```
User clicks button → handler runs → state changes → React re-renders → screen updates
```

**Props vs State:**

| | Props | State |
|---|-------|-------|
| Who owns it | Parent component | The component itself |
| Can the component change it? | ❌ No, read-only | ✅ Yes, using the setter function |
| Purpose | Receive data from outside | Remember data that changes inside |
| Example | `name="Aadit"` | `count`, `isOpen`, `items` |

**The problem state solves (from Chapter 6):**
```jsx
function Counter() {
  let count = 0

  function handleClick() {
    count = count + 1
    console.log(count)     // logs 1, 2, 3... but the screen still shows 0
  }

  return <button onClick={handleClick}>Count: {count}</button>
}
```

A normal variable fails for two reasons:

| Reason | Meaning |
|--------|---------|
| It doesn't persist | Every time the component runs again, `let count = 0` resets to 0 |
| It doesn't trigger a re-render | React has no idea the variable changed, so the screen stays the same |

**The fix — `useState`:**
```jsx
import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  )
}
```

**Syntax explained:**
```jsx
const [count, setCount] = useState(0)
       │       │                 │
       │       │                 └── initial value (used only on the first render)
       │       └── setter function: the ONLY way to change the value
       └── current value of the state
```

| Part | Meaning |
|------|---------|
| `useState(0)` | Creates a piece of state starting at `0` |
| `count` | Read the current value here |
| `setCount(5)` | Replace the value with 5 and ask React to re-render |
| Naming | `[thing, setThing]`, e.g. `[isOpen, setIsOpen]`, `[name, setName]` |

**What happens when you click (step by step):**
```
1. First render      → count = 0, screen shows "Count: 0"
2. User clicks       → setCount(1) is called
3. React re-renders  → runs Counter() again, useState now returns 1
4. Screen updates    → "Count: 1"
```
> React remembers the value between renders. That is the magic of `useState`.

**Hooks and the Rules of Hooks:**
`useState` is a **hook**: a special function (name starts with `use`) that lets a component use React features.

| Rule | Why |
|------|-----|
| Call hooks only at the top level of a component | Not inside `if`, loops, or nested functions |
| Call hooks only inside components (or custom hooks) | Not in normal JS functions |
| Always call them in the same order every render | React tracks state by call order |

```jsx
// ❌ Wrong
if (isLoggedIn) {
  const [name, setName] = useState("")
}

// ✅ Right — hook at the top, put the condition inside
const [name, setName] = useState("")
```

**State is a snapshot (very important):**
Inside one render, the state value never changes. `setCount` schedules the NEXT render, it doesn't change `count` right now.

```jsx
function handleClick() {
  setCount(count + 1)
  console.log(count)      // still the OLD value
}
```

```jsx
function handleClick() {
  setCount(count + 1)   // count is 0 → sets 1
  setCount(count + 1)   // count is still 0 → sets 1
  setCount(count + 1)   // count is still 0 → sets 1
}
// Result after one click: 1, not 3
```

**Updating based on the previous value — functional update:**
Pass a function to the setter. React gives it the latest value.
```jsx
setCount((prev) => prev + 1)
setCount((prev) => prev + 1)
setCount((prev) => prev + 1)
// Result after one click: 3 ✅
```

| Situation | Use |
|-----------|-----|
| New value doesn't depend on the old one | `setName("Aadit")` |
| New value is based on the old one | `setCount((prev) => prev + 1)` |

**Never change state directly:**
```jsx
count = count + 1       // ❌ React doesn't know it changed
count++                 // ❌ same problem
setCount(count + 1)     // ✅ always use the setter
```

**State with different types:**

| Type | Example |
|------|---------|
| Number | `const [count, setCount] = useState(0)` |
| String | `const [name, setName] = useState("")` |
| Boolean | `const [isOpen, setIsOpen] = useState(false)` |
| Object | `const [user, setUser] = useState({ name: "Aadit", age: 21 })` |
| Array | `const [items, setItems] = useState([])` |

**Toggling a boolean:**
```jsx
const [isOpen, setIsOpen] = useState(false)

<button onClick={() => setIsOpen(!isOpen)}>Toggle</button>
{isOpen && <p>Details are visible</p>}
```
> This joins Chapter 5 (conditional rendering) with state.

**Object state — never mutate, always copy:**
```jsx
const [user, setUser] = useState({ name: "Aadit", age: 21 })

// ❌ Wrong — changes the original object
user.age = 22

// ✅ Right — new object: copy everything, overwrite one property
setUser({ ...user, age: 22 })
```

**Array state — never mutate, always make a new array:**

| Action | ❌ Avoid (mutates) | ✅ Use (new array) |
|--------|---------------------|---------------------|
| Add | `push`, `unshift` | `[...items, newItem]` |
| Remove | `pop`, `splice` | `items.filter((i) => i.id !== id)` |
| Update one item | `items[0] = x` | `items.map((i) => i.id === id ? { ...i, done: true } : i)` |
| Sort | `items.sort()` | `[...items].sort()` |

```jsx
setItems([...items, "New item"])                       // add
setItems(items.filter((item) => item !== "Old item"))  // remove
```

**Why not mutate?**
React decides to re-render by checking whether the value is a NEW value. If you change the same array/object in place, React sees the same reference and may skip the update.

**Multiple state variables:**
Use separate `useState` calls for unrelated values.
```jsx
const [count, setCount] = useState(0)
const [isOpen, setIsOpen] = useState(false)
const [name, setName] = useState("")
```
> If values always change together (like `x` and `y` of a position), one object is fine.

**Each component has its own state:**
```jsx
<Counter />
<Counter />
```
Two counters = two separate states. Clicking one doesn't affect the other.

**Folder structure:**
```
src/
├── components/
│   ├── Counter.jsx        ← number state, functional updates
│   ├── Settings.jsx       ← object state
│   └── ProfileCard.jsx    ← boolean + number state, calls parent's handler
├── App.jsx                ← array state (shortlist)
├── main.jsx
└── index.css
```

**Practice task I did:**

`src/components/Counter.jsx`
```jsx
import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ margin: "12px" }}>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount((prev) => prev - 1)}>-1</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount((prev) => prev + 1)}>+1</button>
      <button
        onClick={() => {
          setCount((prev) => prev + 1)
          setCount((prev) => prev + 1)
          setCount((prev) => prev + 1)
        }}
      >
        +3
      </button>
    </div>
  )
}

export default Counter
```

`src/components/Settings.jsx` (object state)
```jsx
import { useState } from 'react'

function Settings() {
  const [settings, setSettings] = useState({ theme: "light", fontSize: 16 })

  function toggleTheme() {
    setSettings({
      ...settings,
      theme: settings.theme === "light" ? "dark" : "light",
    })
  }

  function increaseFont() {
    setSettings({ ...settings, fontSize: settings.fontSize + 2 })
  }

  const isDark = settings.theme === "dark"

  return (
    <div
      style={{
        margin: "12px",
        padding: "12px",
        background: isDark ? "#222" : "#eee",
        color: isDark ? "white" : "black",
        fontSize: settings.fontSize,
      }}
    >
      <p>Theme: {settings.theme} | Font size: {settings.fontSize}px</p>
      <button onClick={toggleTheme}>Toggle theme</button>
      <button onClick={increaseFont}>Bigger text</button>
    </div>
  )
}

export default Settings
```

`src/components/ProfileCard.jsx` (boolean + number state)
```jsx
import { useState } from 'react'

function ProfileCard({ name, role, experience, onShortlist }) {
  const [showDetails, setShowDetails] = useState(false)
  const [likes, setLikes] = useState(0)

  return (
    <div style={{ border: "1px solid gray", padding: "12px", margin: "12px", width: "280px" }}>
      <h2>{name}</h2>
      <p>{role}</p>

      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? "Hide details" : "Show details"}
      </button>
      {showDetails && <p>Experience: {experience} year(s)</p>}

      <div>
        <button onClick={() => setLikes((prev) => prev + 1)}>👍 {likes}</button>
        <button onClick={() => onShortlist(name)}>Shortlist</button>
      </div>
    </div>
  )
}

export default ProfileCard
```

`src/App.jsx` (array state)
```jsx
import { useState } from 'react'
import Counter from './components/Counter'
import Settings from './components/Settings'
import ProfileCard from './components/ProfileCard'

const people = [
  { id: 1, name: "Aadit", role: "Computer Engineering Student", experience: 1 },
  { id: 2, name: "Riya", role: "UI Designer", experience: 3 },
  { id: 3, name: "Karan", role: "Backend Developer", experience: 2 },
]

function App() {
  const [shortlist, setShortlist] = useState([])

  function handleShortlist(name) {
    if (shortlist.includes(name)) return          // no duplicates
    setShortlist([...shortlist, name])             // add: new array
  }

  function handleRemove(name) {
    setShortlist(shortlist.filter((n) => n !== name))   // remove: filter
  }

  return (
    <>
      <h1>State Practice</h1>

      <Counter />
      <Counter />
      <Settings />

      {people.map((person) => (
        <ProfileCard key={person.id} {...person} onShortlist={handleShortlist} />
      ))}

      <h2>Shortlist ({shortlist.length})</h2>
      {shortlist.length === 0 ? (
        <p>No one shortlisted yet.</p>
      ) : (
        <ul>
          {shortlist.map((name) => (
            <li key={name}>
              {name} <button onClick={() => handleRemove(name)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <button onClick={() => setShortlist([])}>Clear all</button>
    </>
  )
}

export default App
```
> The two `<Counter />` components keep separate counts. The "+3" button works because of the functional update. The shortlist lives in `App` because `App` needs to display it, and each card tells `App` to update it through the `onShortlist` prop (this pattern is formalised in Chapter 9).

**Common errors:**

| Error | Fix |
|-------|-----|
| Screen doesn't update after change | Changed a normal variable or mutated state directly, use the setter with a new value |
| Count only goes up by 1 instead of 3 | Used `setCount(count + 1)` three times, use `setCount((prev) => prev + 1)` |
| `console.log(state)` right after the setter shows the old value | State is a snapshot, the new value appears on the next render |
| Array/object state doesn't update | Mutated with `push` / `obj.x = ...`, create a new copy with spread / `filter` / `map` |
| `Too many re-renders` | Wrote `onClick={setCount(1)}` (called immediately), use `onClick={() => setCount(1)}` |
| `Invalid hook call` / hooks error | Hook used inside an `if`, loop, or normal function |
| `useState is not defined` | Forgot `import { useState } from 'react'` |
| `x.map is not a function` | State started as `""` or `{}` instead of `[]` |

**Key takeaway:** State is a component's memory. Use `useState` to store data that changes, and always change it through the setter, never directly. For objects and arrays, create a new copy (spread, `filter`, `map`) instead of mutating. Use the functional form `setX((prev) => ...)` when the new value depends on the old one. Every state change triggers a re-render.

---