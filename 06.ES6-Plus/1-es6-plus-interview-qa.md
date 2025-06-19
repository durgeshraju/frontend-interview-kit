# ES6++ JavaScript Interview Q&A (Beginner to Advanced)

This guide covers the most important ES6+ features and concepts frequently asked in front-end developer interviews. Each concept is broken down clearly and simply to help you understand and retain the information deeply.

---

## 1. `let` vs `const` vs `var`
- `var`: Function-scoped. Can be redeclared and updated.
- `let`: Block-scoped. Can be updated but not redeclared in the same scope.
- `const`: Block-scoped. Cannot be updated or redeclared. Value must be assigned during declaration.

**Q: Why is `let` preferred over `var`?**  
A: Because `let` avoids scope-related bugs due to its block scope.

---

## 2. Arrow Functions (`=>`)
- Concise syntax for writing functions.
- Do **not** have their own `this`, `arguments`, `super`, or `new.target`.

```js
const add = (a, b) => a + b;
```

**Q: When should you not use arrow functions?**  
A: When you need your own `this`, like in class methods or constructors.

---

## 3. Template Literals
```js
const name = "Durgesh";
const greeting = `Hello, ${name}!`;
```

- Allow embedded expressions.
- Multi-line strings.

---

## 4. Destructuring
```js
const person = { name: "Durgesh", age: 30 };
const { name, age } = person;

const arr = [1, 2, 3];
const [first, second] = arr;
```

---

## 5. Default Parameters
```js
function greet(name = "Guest") {
  return `Hello, ${name}`;
}
```

---

## 6. Spread & Rest Operator (`...`)
```js
const nums = [1, 2, 3];
const copied = [...nums]; // spread

function sum(...args) {
  return args.reduce((a, b) => a + b, 0);
}
```

---

## 7. Object Property Shorthand & Computed Properties
```js
const age = 30;
const person = { name: "Durgesh", age }; // shorthand

const key = "role";
const user = { [key]: "admin" }; // computed
```

---

## 8. Promises
```js
const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Done"), 1000);
});
```

**Q: Why are Promises important?**  
A: They make async code cleaner and handle success/failure paths.

---

## 9. `async` / `await`
```js
async function fetchData() {
  try {
    const res = await fetch("https://api.com");
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}
```

---

## 10. Classes and Inheritance
```js
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}
```

---

## 11. `Map`, `Set`, `WeakMap`, `WeakSet`
- `Map`: Key-value pairs. Any type of key.
- `Set`: Unique values.
- `WeakMap`/`WeakSet`: Holds weak references to objects (no memory leaks).

---

## 12. Modules (`import`/`export`)
```js
// user.js
export const name = "Durgesh";

// app.js
import { name } from './user.js';
```

---

## 13. Optional Chaining & Nullish Coalescing
```js
const user = { profile: { email: "d@example.com" } };
const email = user?.profile?.email ?? "Not provided";
```

---

## 14. Logical Assignment Operators
```js
let a = null;
a ||= "default"; // sets a to "default" if null or undefined
```

---

## 15. Top-Level `await` (ES2022)
Used directly in modules without `async` function wrapper.

```js
const res = await fetch("/data.json");
```

---

## Wrap-Up:
These features form the core of modern JavaScript and are heavily used in real-world frontend apps. Mastering them makes you interview-ready and job-ready.