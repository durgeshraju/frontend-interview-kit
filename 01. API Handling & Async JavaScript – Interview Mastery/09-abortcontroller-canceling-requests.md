
# ⛔ Category 9: AbortController – Canceling Requests

In real-world applications, especially in SPAs, you often need to **cancel pending HTTP requests**—for example, when the user navigates away or types rapidly in a search box. This is where `AbortController` comes in.

---

## ✅ Q1: What is `AbortController`?

**Answer:**  
`AbortController` is a built-in JavaScript API that allows you to **abort DOM requests**, such as `fetch()`. It gives you more control over canceling asynchronous tasks.

---

## ✅ Q2: Why would you cancel a fetch request?

**Answer:**
- Avoid memory leaks
- Prevent unnecessary network traffic
- Improve UX (e.g., canceling outdated searches)
- Handle rapid user interaction (like input debouncing)

---

## ✅ Q3: How do you use `AbortController` with fetch?

```js
const controller = new AbortController();
const signal = controller.signal;

fetch('/api/data', { signal })
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => {
    if (err.name === 'AbortError') {
      console.log('Request was cancelled');
    }
  });

// Cancel the request
controller.abort();
```

---

## ✅ Q4: How does `AbortController` work behind the scenes?

**Answer:**  
- `AbortController` creates a `signal` object
- Pass that `signal` to `fetch()`
- If `.abort()` is called, the fetch promise is **rejected**
- The error has a name `AbortError`

---

## ✅ Q5: Can `AbortController` be reused?

**Answer:**  
No, one controller can only be used for **one request**.  
If you want to cancel multiple requests, create multiple controllers or manage them carefully.

---

## ✅ Q6: Common use case – Cancel on component unmount (React)

```js
useEffect(() => {
  const controller = new AbortController();

  fetch('/api/posts', { signal: controller.signal })
    .then(res => res.json())
    .then(data => setPosts(data))
    .catch(err => {
      if (err.name === 'AbortError') console.log('Fetch canceled');
    });

  return () => controller.abort(); // cancel request on unmount
}, []);
```

---

## ✅ Q7: Interview scenario – Search input with cancelable fetch

```js
let controller;

function handleSearch(term) {
  if (controller) controller.abort(); // cancel previous request
  controller = new AbortController();

  fetch(`/api/search?q=${term}`, { signal: controller.signal })
    .then(res => res.json())
    .then(results => console.log(results))
    .catch(err => {
      if (err.name === 'AbortError') {
        console.log('Previous request aborted');
      }
    });
}
```

---

## 🔄 Summary Tips

- Use `AbortController` to manage fetch lifecycles
- Helps prevent race conditions and memory leaks
- Always check for `AbortError` in your catch block
- Combine with debouncing or component cleanup for best effect

---

`AbortController` is an advanced topic but often **appears in interviews** when discussing user interaction, cleanup, and performance optimization.
