
# 📘 Category 2: Async/Await Syntax & Refactoring

Async/await is a modern syntax in JavaScript that simplifies working with Promises and asynchronous code. This section covers all critical concepts that are often tested in frontend interviews.

---

## ✅ Q1: What is `async/await` in JavaScript?

**Answer:**  
`async/await` is syntactic sugar over Promises. It allows you to write asynchronous code that looks synchronous, improving readability and maintainability.

- `async` marks a function as asynchronous and ensures it returns a Promise.
- `await` pauses the execution until the Promise resolves or rejects.

```js
async function fetchData() {
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();
  console.log(data);
}
```

---

## ✅ Q2: How is `async/await` better than `.then()` chaining?

**Answer:**  
- Cleaner and more readable, especially with multiple dependent steps
- Easier to manage error handling using `try/catch`
- Helps avoid deeply nested `.then()` chains (callback hell)

---

## ✅ Q3: What does `await` actually do?

**Answer:**  
`await` **pauses** the function execution until the awaited Promise settles (resolves or rejects). It can only be used **inside async functions**.

Example:
```js
await somePromise(); // Execution pauses here until somePromise resolves
```

---

## ✅ Q4: How do you handle errors in `async/await`?

**Answer:**  
Use `try/catch` blocks for synchronous-style error handling.

```js
async function getUser() {
  try {
    const res = await fetch('/api/user');
    if (!res.ok) throw new Error("HTTP error!");
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error("Error fetching user:", err);
  }
}
```

---

## ✅ Q5: What happens if a Promise inside `await` fails?

**Answer:**  
If the Promise is rejected, `await` throws the error and moves to the `catch` block.

---

## ✅ Q6: Can we use `await` outside an `async` function?

**Answer:**  
No, you **cannot** use `await` at the top level unless inside a module (`type="module"` in HTML) or in environments like Node.js with top-level await support.

Example of incorrect usage:
```js
const data = await fetch('/api'); // ❌ SyntaxError if not in async function
```

---

## ✅ Q7: How can you refactor `.then()`-based code using `async/await`?

**Answer:**

**Old way with `.then()`**
```js
fetch('/api')
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));
```

**Refactored using `async/await`**
```js
async function loadData() {
  try {
    const res = await fetch('/api');
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}
```

---

## ✅ Q8: Can you run multiple async functions in parallel?

**Answer:**
Yes, use `Promise.all` with `await` for parallel execution.

```js
async function loadParallel() {
  const [users, posts] = await Promise.all([
    fetch('/users').then(res => res.json()),
    fetch('/posts').then(res => res.json())
  ]);
  console.log(users, posts);
}
```

---

## ✅ Summary

| Concept         | Summary |
|----------------|---------|
| `async`         | Marks a function to return a Promise |
| `await`         | Pauses until the Promise settles |
| `try/catch`     | Handles errors like synchronous code |
| `Promise.all()` | Runs Promises in parallel with `await` |

---

This category is **frequently tested** in modern JavaScript interviews — especially to see how well you understand async logic and refactoring skills.
