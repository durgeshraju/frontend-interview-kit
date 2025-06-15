
# ❌ Category 11: Error Handling (Network vs Server, try/catch)

When working with APIs in frontend development, **handling errors properly** ensures a robust and user-friendly application.

---

## ✅ Q1: What types of errors can occur when using fetch?

**Answer:**
1. **Network Error** – User is offline or request failed to reach server.
2. **Server Error** – Request reached server, but response was a failure (e.g., 500 Internal Server Error).
3. **Client Error** – Mistakes from the frontend (e.g., 404 Not Found, 400 Bad Request).

---

## ✅ Q2: Does `fetch()` throw an error on HTTP errors (like 404 or 500)?

**Answer:**
❌ No! `fetch()` **only throws on network errors**.  
For HTTP error responses (like 404 or 500), you need to **check `response.ok` manually.**

```js
const res = await fetch('/api/posts');
if (!res.ok) {
  throw new Error(`HTTP error! status: ${res.status}`);
}
```

---

## ✅ Q3: Basic try/catch pattern for fetch

```js
try {
  const res = await fetch('/api/posts');
  if (!res.ok) throw new Error('Server responded with error');
  const data = await res.json();
  console.log(data);
} catch (error) {
  console.error('Something went wrong:', error.message);
}
```

---

## ✅ Q4: How to handle different types of errors?

```js
try {
  const res = await fetch('/api/posts');
  if (!res.ok) {
    if (res.status === 404) throw new Error('Resource not found');
    if (res.status === 500) throw new Error('Server error');
    throw new Error('Unknown server error');
  }
  const data = await res.json();
} catch (err) {
  if (err.name === 'TypeError') {
    console.error('Network error or CORS issue');
  } else {
    console.error(err.message);
  }
}
```

---

## ✅ Q5: Interview scenario – show toast on fetch error

```js
try {
  const res = await fetch('/api/data');
  if (!res.ok) throw new Error('Failed to load data');
  const data = await res.json();
} catch (err) {
  showToast(err.message); // custom error UI
}
```

---

## ✅ Q6: Retry on failure logic (basic)

```js
async function fetchWithRetry(url, retries = 3) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error('Failed');
    return await res.json();
  } catch (err) {
    if (retries > 0) {
      console.warn(`Retrying... attempts left: ${retries}`);
      return fetchWithRetry(url, retries - 1);
    } else {
      throw err;
    }
  }
}
```

---

## 🔄 Summary Tips

- `fetch()` throws only on **network** failure, not HTTP errors.
- Always check `response.ok` and `response.status`.
- Use `try/catch` for clean error boundaries.
- Display helpful messages to users via UI.
- Use retry logic for flaky endpoints.

---

Mastering error handling helps you **prevent crashes**, provide better UX, and handle real-world data problems gracefully.
