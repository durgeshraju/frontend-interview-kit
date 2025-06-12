
# 📘 11 – Storage: `localStorage` & `sessionStorage` (Beginner to Expert)

Modern web apps need to store data in the browser – whether it’s user preferences, auth tokens, or temporary form data. That’s where `localStorage` and `sessionStorage` come in.

These APIs are part of the **Web Storage API**, and they are crucial for **state persistence**, **login systems**, and **performance optimizations**.

---

## ✅ Interview Questions & Detailed Answers (Beginner to Pro Level)

---

### 1. What is `localStorage`?

**Explanation**:  
`localStorage` allows you to store **key-value pairs** in the browser **with no expiration** — the data stays even after the tab or browser is closed.

```js
localStorage.setItem("theme", "dark");
console.log(localStorage.getItem("theme")); // dark
```

- Values are always stored as **strings**
- Maximum size is ~5MB
- Works only on the **same origin (domain + port)**

---

### 2. What is `sessionStorage`?

**Explanation**:  
`sessionStorage` is similar to `localStorage`, but the data is **only available while the browser tab is open**. It’s cleared when the tab is closed.

```js
sessionStorage.setItem("step", "2");
console.log(sessionStorage.getItem("step")); // 2
```

---

### 3. What is the difference between `localStorage` and `sessionStorage`?

| Feature         | `localStorage`            | `sessionStorage`              |
|------------------|-----------------------------|-------------------------------|
| Expiration       | Never                      | On tab close                  |
| Scope            | All tabs from same origin  | Only the current tab         |
| Capacity         | ~5MB                       | ~5MB                          |
| Use case         | Preferences, tokens        | Multi-step forms, session flags |

---

### 4. How do you store and retrieve data?

```js
// Save data
localStorage.setItem("username", "Durgesh");

// Get data
const name = localStorage.getItem("username");

// Remove item
localStorage.removeItem("username");

// Clear all data
localStorage.clear();
```

---

### 5. Can you store objects in localStorage?

Not directly. You must convert to/from JSON:

```js
const user = { name: "Durgesh", age: 36 };

// Save object
localStorage.setItem("user", JSON.stringify(user));

// Retrieve and parse it back
const storedUser = JSON.parse(localStorage.getItem("user"));
console.log(storedUser.name); // Durgesh
```

---

### 6. What are common use cases for `localStorage`?

- ✅ Dark mode / theme toggle
- ✅ Remembering form inputs
- ✅ Storing tokens (not recommended for high-security data)
- ✅ Language preferences
- ✅ Saving shopping cart state

---

### 7. What are the limitations of Web Storage?

- ❌ Only stores strings
- ❌ No encryption (anyone can open DevTools and read it)
- ❌ Limited space (~5MB)
- ❌ Not accessible between different origins

---

### 8. Can you listen for changes in `localStorage`?

Yes! The `storage` event fires **in other tabs** (not in the same one) when a change happens.

```js
window.addEventListener("storage", function (e) {
  console.log("Storage key changed:", e.key);
  console.log("New value:", e.newValue);
});
```

**Great for:** syncing logout events across tabs.

---

### 9. Should I store tokens in `localStorage`?

⚠️ Not recommended for secure tokens like JWT.

- It's vulnerable to **XSS attacks** (if a script runs, it can read localStorage)
- For better security, use **HTTP-only cookies**

Use `localStorage` only if:
- You understand the security tradeoffs
- You sanitize all inputs to prevent XSS

---

### 10. Bonus: Create a wrapper utility for safe storage access

```js
const Storage = {
  save(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },
  load(key) {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (e) {
      return null;
    }
  },
  remove(key) {
    localStorage.removeItem(key);
  }
};

// Usage
Storage.save("user", { name: "Asha", role: "admin" });
const user = Storage.load("user");
console.log(user.role); // admin
```

---

### 11. What happens if you exceed storage limit?

If you try to store too much data (usually more than 5MB), the browser throws a **QuotaExceededError**.

```js
try {
  localStorage.setItem("bigData", new Array(10e6).join("a"));
} catch (e) {
  console.error("Storage limit exceeded");
}
```

---

### 12. Is Web Storage synchronous or asynchronous?

Both `localStorage` and `sessionStorage` are **synchronous**.

This means:
- Large read/write operations can **block the main thread**
- Use with care inside performance-critical code

---

