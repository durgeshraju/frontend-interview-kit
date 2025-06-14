
# 🧾 Category 5: JSON Parsing & Response Body Management

Handling and parsing JSON responses is a crucial part of working with APIs as a frontend developer. This category covers best practices, common interview questions, and key techniques.

---

## ✅ Q1: What is JSON and why is it used in APIs?

**Answer:**  
**JSON (JavaScript Object Notation)** is a lightweight data format used to exchange data between client and server.  
- It's human-readable and easy to parse using `JSON.parse()` and `JSON.stringify()`.

---

## ✅ Q2: How do you parse a JSON response from `fetch()`?

**Answer:**
```js
fetch('/api/data')
  .then(res => res.json())
  .then(data => console.log(data));
```

- `.json()` returns a **Promise**, so you must `await` or `.then()` it.
- You **can’t call `.json()` twice** on the same response object.

---

## ✅ Q3: What happens if the JSON is malformed or the body is empty?

**Answer:**  
`res.json()` will throw an error.  
To handle safely:
```js
fetch('/api/data')
  .then(res => res.text())
  .then(text => {
    try {
      const json = JSON.parse(text);
      console.log(json);
    } catch (e) {
      console.error("Invalid JSON:", e);
    }
  });
```

---

## ✅ Q4: How to access nested data safely in a JSON object?

**Answer:**  
Use **optional chaining** to avoid runtime errors:
```js
const userName = response?.user?.profile?.name ?? 'Guest';
```

---

## ✅ Q5: How do you check if a response is valid JSON?

**Answer:**
```js
function isValidJSON(str) {
  try {
    JSON.parse(str);
    return true;
  } catch (e) {
    return false;
  }
}
```

---

## ✅ Q6: What’s the difference between `res.text()` and `res.json()`?

| Method     | Returns       | Usage                            |
|------------|---------------|----------------------------------|
| `res.text()` | Raw string    | For non-JSON text responses      |
| `res.json()` | Parsed object | When response is in JSON format  |

---

## ✅ Q7: Can you stringify and send a JavaScript object in a request?

**Answer:**  
Yes, use `JSON.stringify()` in the request body:
```js
fetch('/api/users', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name: 'Jane', email: 'jane@example.com' })
});
```

---

## ✅ Q8: What are common mistakes while handling JSON?

**Answer:**
- Trying to `.json()` twice
- Not handling rejected promises
- Assuming all responses are JSON (e.g., `204 No Content`)
- Forgetting to `await` or `.then()` the `.json()` method

---

## ✅ Summary Tips

- Always check `response.ok` before parsing
- Use optional chaining or try/catch for safe access
- Use `JSON.stringify()` for request bodies
- Don’t reuse a response object once it’s consumed

---

This topic is essential for both **API reliability** and **interview performance**. Mastering it shows strong understanding of real-world API interactions.
