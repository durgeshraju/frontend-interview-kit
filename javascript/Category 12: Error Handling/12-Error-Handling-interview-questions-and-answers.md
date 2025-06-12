
# 📘 12 – Error Handling in JavaScript (Beginner to Expert)

Error handling is a critical part of writing reliable code. As a frontend developer, understanding how to detect, handle, and recover from errors makes your code more stable and user-friendly.

---

## ✅ Interview Questions & Detailed Answers (Beginner to Expert)

---

### 1. What are the different types of errors in JavaScript?

- **Syntax Error**: Invalid code structure
  ```js
  if (true { // Missing closing parenthesis
  ```

- **Reference Error**: Using a variable that doesn't exist
  ```js
  console.log(x); // x is not defined
  ```

- **Type Error**: Performing invalid operations on a value
  ```js
  null.f(); // Cannot read property 'f' of null
  ```

- **Range Error**: Using a number out of allowable range
  ```js
  new Array(-1); // Invalid array length
  ```

---

### 2. What is `try...catch` and how does it work?

**Syntax**:
```js
try {
  // Code that may throw error
} catch (error) {
  // Code to handle the error
}
```

**Example**:
```js
try {
  const x = y + 1; // y is not defined
} catch (err) {
  console.error("Something went wrong:", err.message);
}
```

- The `try` block is where you place risky code
- If an error happens, control jumps to `catch`
- If no error, `catch` is skipped

---

### 3. What is the purpose of `finally`?

```js
try {
  // code
} catch (e) {
  // error handling
} finally {
  // always runs
}
```

- `finally` always runs **whether there is an error or not**
- Good for cleanup tasks (e.g., closing connections, hiding loaders)

---

### 4. What does `throw` do?

It lets you manually create an error.

```js
function checkAge(age) {
  if (age < 18) {
    throw new Error("Must be 18+");
  }
}
```

- You can throw any value (string, object, error instance)
- Use `throw` to signal invalid logic or inputs

---

### 5. How do you create custom error objects?

```js
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

throw new ValidationError("Invalid email address");
```

- Custom errors make it easier to track and categorize issues
- You can check `error.name` in catch blocks

---

### 6. Can all errors be caught by `try...catch`?

No. **Syntax errors** cannot be caught because the script fails to parse.

Only **runtime errors** can be caught.

---

### 7. What is the global error handler in the browser?

You can catch uncaught errors using:

```js
window.onerror = function (msg, url, line, col, error) {
  console.error("Global error:", msg);
};
```

Or:

```js
window.addEventListener("error", (e) => {
  console.log("Caught by window:", e.message);
});
```

---

### 8. What about async code – does `try...catch` work?

Only if you use it **inside** the async function:

```js
async function fetchData() {
  try {
    const res = await fetch("invalid-url");
    const data = await res.json();
  } catch (err) {
    console.error("Error:", err.message);
  }
}
```

For Promises without `async/await`, use `.catch()`:

```js
fetch("invalid-url")
  .then((res) => res.json())
  .catch((err) => console.error("Caught:", err));
```

---

### 9. How to throw error conditionally inside a function?

```js
function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}
```

---

### 10. Should errors be shown to users?

- No! Never show raw error messages (e.g., stack traces) to users
- Instead, show a **user-friendly message**:
  ```js
  alert("Something went wrong. Please try again.");
  ```

---

### 11. Bonus: Centralized error logging example

```js
function logError(error) {
  // Send to server or analytics
  console.error("Logging error:", error.message);
}

try {
  // something risky
} catch (err) {
  logError(err);
  showUserError("An unexpected issue occurred.");
}
```

---

