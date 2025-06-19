# 12 – Error Handling: JavaScript Coding Practice

Get hands-on with real-world problems around error handling. Learn how to gracefully handle unexpected conditions in JavaScript and build resilient applications.

---

### 🧠 Mental Hook:
> "Errors are inevitable. Graceful recovery is what separates robust code from fragile one."

---

## 🚀 Problems

---

### ✅ Problem 1: Basic try...catch
**Problem:**  
Write a function that parses a JSON string. If it's invalid JSON, catch the error and return `"Invalid JSON"`.

**Example:**
```js
parseJSON('{"name": "John"}'); // { name: 'John' }
parseJSON('invalid'); // "Invalid JSON"
```

**Mental Hook:**  
Use `try...catch` to guard against unsafe operations like `JSON.parse()`.

---

### ✅ Problem 2: Throwing Custom Errors
**Problem:**  
Write a function `divide(a, b)` that throws an error if `b` is 0. Otherwise, return the result of the division.

**Example:**
```js
divide(10, 2); // 5
divide(5, 0); // Error: Cannot divide by zero
```

**Mental Hook:**  
Throw custom errors for predictable invalid input conditions.

---

### ✅ Problem 3: Optional Catch Binding
**Problem:**  
Rewrite a `try...catch` block that doesn't use the error object (ES2019 feature).

**Example:**
```js
try {
  let x = y + 1; // ReferenceError
} catch {
  console.log("An error occurred.");
}
```

**Mental Hook:**  
You can omit `(err)` in `catch` if you don’t need the error object.

---

### ✅ Problem 4: try...catch with async/await
**Problem:**  
Use `try...catch` inside an `async` function to handle a failed API fetch.

**Example:**
```js
async function fetchData() {
  try {
    let res = await fetch("https://invalid.url");
    let data = await res.json();
    console.log(data);
  } catch (err) {
    console.error("Fetch failed", err);
  }
}
```

**Mental Hook:**  
Always wrap `await` calls in `try...catch` to handle rejected promises.

---

### ✅ Problem 5: Global Error Handling
**Problem:**  
Demonstrate how to use `window.onerror` and `window.addEventListener('unhandledrejection')` to capture uncaught errors.

**Mental Hook:**  
Useful for debugging in production or logging issues for user feedback.

---

Feel free to expand each solution and try out variations!