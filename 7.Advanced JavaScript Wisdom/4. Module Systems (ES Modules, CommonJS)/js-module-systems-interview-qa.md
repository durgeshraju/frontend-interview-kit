
# 🧠 Topic 4: Module Systems in JavaScript (ES Modules, CommonJS) – Interview Q&A

This guide breaks down **JavaScript Module Systems** simply and clearly with examples and explanations commonly asked in interviews.

---

## 🔹 What is a module in JavaScript?

A **module** is a file containing JavaScript code. It encapsulates logic and exposes functionality to be reused across different files.

**Mental Hook**: Think of modules as "self-contained toolboxes" — each file has tools you can use elsewhere.

---

## 🔹 ES Modules (ESM)

Introduced in ES6, **ES Modules** use `import` and `export` syntax.

### ✅ Exporting

```js
// utils.js
export const greet = (name) => `Hello, ${name}!`;
export const add = (a, b) => a + b;
```

### ✅ Importing

```js
// main.js
import { greet, add } from './utils.js';
console.log(greet('Durgesh')); // Hello, Durgesh!
```

### ✅ Default Exports

```js
// math.js
export default function multiply(a, b) {
  return a * b;
}

// app.js
import multiply from './math.js';
console.log(multiply(2, 3)); // 6
```

---

## 🔹 CommonJS (CJS)

Used in Node.js environments.

### ✅ Exporting

```js
// utils.js
const greet = (name) => `Hello, ${name}!`;
module.exports = { greet };
```

### ✅ Importing

```js
// main.js
const { greet } = require('./utils');
console.log(greet('Durgesh')); // Hello, Durgesh!
```

---

## 🔹 Key Differences

| Feature           | ES Modules (ESM)       | CommonJS (CJS)        |
|------------------|------------------------|------------------------|
| Syntax           | `import` / `export`    | `require()` / `module.exports` |
| Loading          | Static (compile-time)  | Dynamic (runtime)     |
| Use in Browser   | ✅ Native               | ❌ Needs bundler       |
| Use in Node.js   | ✅ (with `.mjs`)        | ✅ Default             |

---

## 🔹 Real-World Example

Imagine a frontend app using ES Modules:

```js
// api.js
export async function fetchUsers() {
  const res = await fetch('/api/users');
  return await res.json();
}

// app.js
import { fetchUsers } from './api.js';
fetchUsers().then(users => console.log(users));
```

**Mental Hook**: ESM = Modern browsers + clean syntax,  
CJS = Node.js backend + runtime loading.

---

## 🔹 Interview Tips

- Know the difference in loading time and syntax.
- Be able to explain why `import`/`export` can't be used with `require()` directly.
- Understand default vs named exports.
- Know why ESM is tree-shakable but CJS is not.

---

## 🧠 Final Notes

Modules help organize code and avoid polluting the global scope.  
Pick the system based on the environment: use ESM in modern frontend, CJS in legacy Node.js.

