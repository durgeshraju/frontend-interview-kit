
# 📘 Category 1: Fetch API Basics (`fetch()`, `.then()`, `.catch()`)

This section introduces the fundamentals of making API calls using the native JavaScript `fetch()` API — a must-know for all frontend developers.

---

## ✅ Q1: What is `fetch()` in JavaScript?

**Answer:**  
`fetch()` is a built-in JavaScript function used to make HTTP requests from the browser. It returns a **Promise**, which resolves with a **Response object**.

```js
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error("Error:", error));
```

---

## ✅ Q2: What does `fetch()` return?

**Answer:**  
It returns a **Promise**, which:
- Resolves when the response is received (even if it's a 404 or 500!)
- Rejects only on **network errors** (e.g., no internet, DNS failure)

To get the actual data (usually JSON), you must call:
```js
response.json()
```

This is also asynchronous and returns another Promise.

---

## ✅ Q3: How do you handle errors in `fetch()`?

**Answer:**  
Use `.catch()` to catch **network errors**, and check `response.ok` to catch **bad HTTP responses**.

```js
fetch('https://api.example.com/data')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(err => console.error("Fetch failed:", err.message));
```

---

## ✅ Q4: How to send a `GET` request using `fetch()`?

**Answer:**  
```js
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res => res.json())
  .then(data => console.log(data));
```

No need to set any options — `fetch()` sends `GET` by default.

---

## ✅ Q5: How to send a `POST` request with a JSON body?

**Answer:**  
You need to:
- Set method to `'POST'`
- Add `Content-Type: application/json` in headers
- Convert your object to JSON using `JSON.stringify()`

```js
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    title: 'Hello World',
    body: 'This is a test post.',
    userId: 1
  })
})
  .then(res => res.json())
  .then(data => console.log("Created:", data))
  .catch(err => console.error("Error:", err));
```

---

## ✅ Q6: Can you show a basic loading indicator when using `fetch()`?

**Answer:**  
Yes! Use a boolean flag to show/hide loading states.

```js
let isLoading = true;
console.log("Loading...");

fetch('https://api.example.com/data')
  .then(res => res.json())
  .then(data => {
    isLoading = false;
    console.log("Loaded data:", data);
  })
  .catch(err => {
    isLoading = false;
    console.error("Failed:", err);
  });
```

In real apps, this is used to show spinners or disable buttons while waiting.

---

## ✅ Q7: Can `fetch()` be used in older browsers like IE?

**Answer:**  
No, it's not supported in Internet Explorer. Use a **polyfill** or **Axios** if IE support is required.

---

## ✅ Summary

| Key Concept       | Summary                                                   |
|-------------------|------------------------------------------------------------|
| `fetch()`         | Makes an HTTP request and returns a Promise               |
| `response.json()` | Parses response into usable JSON object                   |
| `.catch()`        | Handles network errors (e.g., DNS failure)                |
| `response.ok`     | Check for non-2xx HTTP errors (like 404, 500)             |
| Method options    | Use `method`, `headers`, and `body` to customize requests |

---

This foundation is **essential** before learning `async/await`, parallel requests, or token-based headers.
