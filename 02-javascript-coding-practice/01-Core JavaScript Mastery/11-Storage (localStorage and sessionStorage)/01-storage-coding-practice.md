
# 🧠 11 – Storage (localStorage & sessionStorage) – Coding Practice

Practice the most essential `localStorage` and `sessionStorage` usage in real-world frontend applications. These are simple but important to know for interviews and hands-on development.

---

## 🧪 Problem 1: Save and Retrieve User Preferences

### ✅ Problem
Store a user's selected theme (e.g., 'dark' or 'light') in `localStorage` and retrieve it when the page loads.

### 💡 Example
```js
// Save theme
localStorage.setItem('theme', 'dark');

// Retrieve theme
const userTheme = localStorage.getItem('theme');
console.log(userTheme); // Output: 'dark'
```

### 🧠 Mental Hook
> "localStorage remembers, even when you leave the site."

---

## 🧪 Problem 2: One-Time Session Notification

### ✅ Problem
Display a welcome message only once per session using `sessionStorage`.

### 💡 Example
```js
if (!sessionStorage.getItem('shown')) {
  alert('Welcome to our website!');
  sessionStorage.setItem('shown', 'true');
}
```

### 🧠 Mental Hook
> "sessionStorage = memory foam; it forgets when you close the tab."

---

## 🧪 Problem 3: Count Page Visits Using localStorage

### ✅ Problem
Track how many times a user has visited the page using `localStorage`.

### 💡 Example
```js
let count = Number(localStorage.getItem('visitCount')) || 0;
count++;
localStorage.setItem('visitCount', count);
console.log(`You’ve visited this page ${count} times.`);
```

### 🧠 Mental Hook
> "Count persists across visits. Use localStorage for sticky memory."

---

## 🧪 Problem 4: Clear Storage on Logout

### ✅ Problem
Clear all stored data when a user logs out.

### 💡 Example
```js
function logout() {
  localStorage.clear();
  sessionStorage.clear();
}
```

### 🧠 Mental Hook
> "logout = spring cleaning – clear both session and local storage."

---

## 🧪 Problem 5: Store Complex Object in localStorage

### ✅ Problem
Save and retrieve a JavaScript object in `localStorage`.

### 💡 Example
```js
const user = { name: "Alex", age: 28 };
localStorage.setItem("user", JSON.stringify(user));

const storedUser = JSON.parse(localStorage.getItem("user"));
console.log(storedUser.name); // 'Alex'
```

### 🧠 Mental Hook
> "Objects need translation – use JSON.stringify and parse."

---

## ✅ Summary

| Topic | Method | Storage Duration |
|-------|--------|------------------|
| Theme | `localStorage` | Persistent |
| Notifications | `sessionStorage` | Until Tab Closed |
| Visit Count | `localStorage` | Persistent |
| Logout Cleanup | `clear()` | Both |
| Objects | `JSON.stringify/parse` | Required for non-strings |

Happy practicing! 🔥
