
# 📘 08 – Scope & Closures (JavaScript Interview Essentials – Simple & Detailed)

Understanding **scope and closures** is one of the most important parts of mastering JavaScript. These topics are commonly asked in interviews to test a developer's understanding of how JavaScript works behind the scenes.

---

## ✅ Interview Questions & Detailed, Easy-to-Understand Answers

---

### 1. What is scope in JavaScript?

**Explanation**:  
Scope defines **where** variables can be accessed from in your code.

There are three main types:
- **Global Scope** – Accessible everywhere.
- **Function Scope** – Accessible only inside that function.
- **Block Scope** – Introduced by `let` and `const`, accessible only inside `{}` block.

```js
let globalVar = "I'm global";

function testScope() {
  let localVar = "I'm local";
  console.log(globalVar); // ✅ Accessible
  console.log(localVar);  // ✅ Accessible
}
console.log(globalVar);   // ✅
console.log(localVar);    // ❌ Error
```

---

### 2. What is the difference between var, let, and const in terms of scope?

| Keyword | Scope Type     | Can be Re-declared? | Hoisted?  |
|---------|----------------|---------------------|-----------|
| `var`   | Function scope  | Yes                 | Yes (but undefined) |
| `let`   | Block scope     | No                  | Yes (in TDZ)        |
| `const` | Block scope     | No (constant)       | Yes (in TDZ)        |

---

### 3. What is lexical scope?

**Explanation**:  
Lexical scope means that a function can access variables from the **place where it was defined**, not from where it is called.

```js
function outer() {
  let outerVar = "I'm outside";
  function inner() {
    console.log(outerVar); // ✅ Has access
  }
  inner();
}
outer();
```

Even if `inner` is called from somewhere else, it **remembers** the variables from where it was defined.

---

### 4. What is a closure?

**Definition**:  
A closure is **when a function remembers variables from its outer scope**, even after the outer function has finished executing.

```js
function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  };
}

const counter = outer();
console.log(counter()); // 1
console.log(counter()); // 2
```

**Explanation**:  
Even though `outer()` is done running, the `inner()` function remembers `count` because of the **closure**.

---

### 5. Why are closures useful?

Closures help:
- Keep **private variables** safe from outside access.
- Build **function factories** or **custom logic wrappers**.
- Maintain **state** across function calls without global variables.

---

### 6. How can closures cause issues?

Closures can cause:
- **Memory leaks** if references are held unnecessarily.
- **Unexpected values** in loops if not handled properly.

```js
// Problem with closures in a loop
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000); // All print 3
}
```

**Fix using IIFE or let**:

```js
// Using let
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000); // 0, 1, 2
}
```

---

### 7. What is the Temporal Dead Zone (TDZ)?

**Explanation**:  
The TDZ is the time between entering a block and declaring a variable with `let` or `const`.

```js
console.log(a); // ❌ ReferenceError
let a = 5;
```

Variables in TDZ cannot be accessed before declaration.

---

### 8. Can you give a real-world use case of a closure?

```js
function createGreeting(name) {
  return function(message) {
    return `${message}, ${name}!`;
  };
}

const greetJohn = createGreeting("John");
console.log(greetJohn("Good morning")); // Good morning, John!
```

**Explanation**:  
`greetJohn` remembers the `name` value `"John"` thanks to closure.

---

### 9. How to create private variables using closures?

```js
function secretHolder() {
  let secret = "hidden";
  return {
    getSecret: () => secret,
    setSecret: (val) => secret = val
  };
}

const holder = secretHolder();
console.log(holder.getSecret()); // hidden
holder.setSecret("updated");
console.log(holder.getSecret()); // updated
```

---

### 10. What is variable shadowing?

```js
let x = 10;

function test() {
  let x = 5; // shadows the outer x
  console.log(x); // 5
}
test();
console.log(x); // 10
```

**Explanation**:  
Variable declared in inner scope hides (shadows) the one in outer scope.

---
