
# 📘 08 – Scope & Closures (JavaScript Interview Essentials – Beginner to Expert)

This section explains two of the most powerful and commonly misunderstood topics in JavaScript: **scope** and **closures**. These are used everywhere — from interviews to real-world code. You’ll often be asked about these to test your true understanding of JavaScript’s inner workings.

---

## ✅ Interview Questions & Crystal-Clear Answers (Easy Enough for Beginners, Solid for Experts)

---

### 1. What is scope in JavaScript?

**Explanation**:  
Scope determines where a variable can be **seen or accessed** in your code. Think of it as "where can I use this variable?"

There are **3 types of scope**:
- **Global Scope** – Accessible anywhere in your program.
- **Function Scope** – Variables inside a function are only visible inside that function.
- **Block Scope** – With `let` and `const`, variables are only visible inside `{ }` where they're declared.

```js
let name = "John"; // Global

function greet() {
  let message = "Hello"; // Function scope
  if (true) {
    let mood = "Happy"; // Block scope
    console.log(name);     // ✅ Global
    console.log(message);  // ✅ Function
    console.log(mood);     // ✅ Block
  }
  console.log(mood); // ❌ Not accessible here
}
```

---

### 2. What's the difference between `var`, `let`, and `const` in terms of scope?

```js
{
  var a = 1;
  let b = 2;
  const c = 3;
}

console.log(a); // ✅ Works (function scoped)
console.log(b); // ❌ Error (block scoped)
console.log(c); // ❌ Error (block scoped)
```

| Keyword | Scope        | Re-declaration | Hoisting      | Use when        |
|---------|--------------|----------------|----------------|-----------------|
| var     | Function     | Allowed        | Yes (undefined)| Legacy/rare     |
| let     | Block        | ❌ Not allowed | Yes (TDZ)      | ✅ Normal vars   |
| const   | Block        | ❌ Not allowed | Yes (TDZ)      | ✅ Constants     |

---

### 3. What is lexical scope?

**Lexical = where it's written in the code**  
Lexical scope means **a function can use variables from the place it was defined**, not necessarily from where it's called.

```js
function outer() {
  let name = "Lexi";
  function inner() {
    console.log(name); // ✅ Can access
  }
  return inner;
}

const fn = outer();
fn(); // Lexi
```

Even though `fn()` is called outside `outer()`, it still **remembers** the variable `name` — this is lexical scope.

---

### 4. What is a closure in JavaScript?

**A closure = a function that remembers variables from its outer function even after the outer function has returned.**

```js
function counter() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}

const increment = counter();
increment(); // 1
increment(); // 2
```

**Why is this amazing?**  
Because the `count` variable **lives on** — even though `counter()` is already done.

---

### 5. What are closures used for?

- ✅ Keeping **data private**  
- ✅ Building functions that **remember state**  
- ✅ Customizing function behavior (like partial functions)

---

### 6. Common mistake: closures in loops

```js
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
// prints: 3, 3, 3
```

Why? Because `var` is function-scoped, so all callbacks share the same `i`.

**How to fix it**:

```js
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
// prints: 0, 1, 2
```

Or use an IIFE:

```js
for (var i = 0; i < 3; i++) {
  (function(j) {
    setTimeout(() => console.log(j), 1000);
  })(i);
}
```

---

### 7. What is the Temporal Dead Zone (TDZ)?

The time between when a block starts and when a variable declared with `let` or `const` is initialized.

```js
console.log(x); // ❌ ReferenceError
let x = 5;
```

**Even though it's hoisted, it's not usable until the line where it's declared.**

---

### 8. Real-world closure example: Button click counter

```js
function setupCounter() {
  let clicks = 0;
  return function () {
    clicks++;
    console.log(`Clicked ${clicks} times`);
  };
}

const handleClick = setupCounter();
handleClick(); // Clicked 1 times
handleClick(); // Clicked 2 times
```

You can use this for **event handling**, **custom hooks**, **React state closures**, and more.

---

### 9. How can closures help create private variables?

```js
function secretBox() {
  let secret = "I love JS!";
  return {
    getSecret: () => secret,
    setSecret: (val) => secret = val
  };
}

const box = secretBox();
console.log(box.getSecret()); // I love JS!
box.setSecret("New secret");
console.log(box.getSecret()); // New secret
```

This mimics **private variables** because `secret` can't be accessed directly.

---

### 10. What is variable shadowing?

```js
let name = "Global";

function sayName() {
  let name = "Local";
  console.log(name); // Local
}
sayName();
console.log(name); // Global
```

**Explanation**:  
The inner `name` hides the outer one temporarily — this is called shadowing.

---
