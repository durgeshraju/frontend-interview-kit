
# 🌐 Category 3: HTTP Methods (GET, POST, PUT, DELETE)

Understanding HTTP methods is crucial for any frontend developer working with APIs. These are the backbone of client-server communication.

---

## ✅ Q1: What is the `GET` method used for?

**Answer:**  
`GET` is used to **retrieve** data from a server. It does not change anything on the server.

- Example:
```js
fetch('https://api.example.com/users')
  .then(res => res.json())
  .then(data => console.log(data));
```
- It's safe and **idempotent** (repeating it gives the same result).

---

## ✅ Q2: What is the `POST` method used for?

**Answer:**  
`POST` is used to **send new data** to the server, often to create something (like a new user).

- Example:
```js
fetch('https://api.example.com/users', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name: 'John', email: 'john@example.com' })
});
```
- It can change server state and is **not idempotent**.

---

## ✅ Q3: What is the `PUT` method used for?

**Answer:**  
`PUT` is used to **update** existing data on the server. It usually **replaces** the entire resource.

- Example:
```js
fetch('https://api.example.com/users/123', {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name: 'Updated Name', email: 'new@example.com' })
});
```

---

## ✅ Q4: What is the `DELETE` method used for?

**Answer:**  
`DELETE` is used to **remove** a resource from the server.

- Example:
```js
fetch('https://api.example.com/users/123', {
  method: 'DELETE'
});
```

---

## ✅ Q5: How do you send headers with any HTTP method?

**Answer:**  
Use the `headers` object inside the fetch options:

```js
headers: {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer your-token'
}
```

---

## ✅ Q6: What is the difference between `PUT` and `PATCH`?

**Answer:**

| PUT | PATCH |
|-----|-------|
| Replaces the entire resource | Updates part of the resource |
| Usually requires the full object | Only requires the fields to change |
| More commonly supported in full-stack apps | Less common but useful |

---

## ✅ Q7: Which HTTP methods can send a request body?

**Answer:**
- `POST`, `PUT`, and `PATCH` support a request `body`.
- `GET` and `DELETE` typically **do not** carry a body (and most browsers ignore it even if you try).

---

## ✅ Summary Table

| Method  | Purpose              | Request Body | Idempotent? |
|---------|----------------------|--------------|-------------|
| GET     | Retrieve data        | ❌            | ✅           |
| POST    | Create new resource  | ✅            | ❌           |
| PUT     | Replace resource     | ✅            | ✅           |
| DELETE  | Remove resource      | ❌            | ✅           |
| PATCH   | Partially update     | ✅            | ✅           |

---

These methods form the **foundation of REST APIs**. A frontend dev must understand when and how to use them, especially during interviews and real-world tasks.
