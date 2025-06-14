
# 📦 Category 6: Sending Data (Headers, Body, FormData, JSON)

When building real-world frontend applications, knowing **how to send data correctly** to the server is crucial. This section focuses on:

- HTTP Headers
- JSON bodies
- Form submissions via FormData
- Authentication headers
- Proper content types

---

## ✅ Q1: How do you send JSON data in a POST request using fetch?

**Answer:**
```js
fetch('/api/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'John Doe',
    email: 'john@example.com'
  })
});
```

---

## ✅ Q2: What is the role of the `Content-Type` header?

**Answer:**
It tells the server what type of data you're sending.

| Header Value               | Meaning                    |
|---------------------------|----------------------------|
| `application/json`        | Sending JSON               |
| `application/x-www-form-urlencoded` | Sending form fields in key=value format |
| `multipart/form-data`     | Sending files (via FormData) |

---

## ✅ Q3: How do you send data using `FormData`?

**Answer:**
```js
const formData = new FormData();
formData.append('username', 'Jhon');
formData.append('file', fileInput.files[0]);

fetch('/api/upload', {
  method: 'POST',
  body: formData
});
```

> ⚠️ Don't set `Content-Type` manually for `FormData`. The browser sets it automatically with proper boundaries.

---

## ✅ Q4: How do you send authentication tokens in headers?

**Answer:**
```js
fetch('/api/protected', {
  headers: {
    'Authorization': 'Bearer YOUR_ACCESS_TOKEN'
  }
});
```

---

## ✅ Q5: What’s the difference between `POST`, `PUT`, and `PATCH` when sending data?

| Method | Purpose                  | Common Use Case           |
|--------|--------------------------|---------------------------|
| POST   | Create new resource      | Register a user           |
| PUT    | Replace entire resource  | Update full profile       |
| PATCH  | Update part of resource  | Update only email address |

---

## ✅ Q6: How do you send URL-encoded data?

**Answer:**
```js
const params = new URLSearchParams();
params.append('name', 'Alice');
params.append('email', 'alice@example.com');

fetch('/api/form', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  body: params
});
```

---

## ✅ Q7: Can you send arrays and nested objects in JSON?

**Answer:**
Yes.
```js
JSON.stringify({
  tags: ['js', 'api'],
  profile: {
    name: 'Jhon',
    country: 'US'
  }
});
```

---

## ✅ Q8: What are common mistakes in sending data?

- Forgetting `Content-Type` header
- Incorrect use of `FormData` with `Content-Type`
- Not stringifying JSON
- Sending objects in URL parameters

---

## 🔄 Summary Tips

- Use `JSON.stringify()` for JSON bodies
- Let the browser handle `Content-Type` for `FormData`
- Always set correct headers for secure and correct communication
- Use `PATCH` for partial updates, `PUT` for full replacement

---

This knowledge is **essential** for interviewers to assess whether you can **handle form submissions, file uploads, and API integrations** as a frontend developer.
