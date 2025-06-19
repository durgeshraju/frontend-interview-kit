# 🧠 JSON in JavaScript – Interview Q&A (Beginner to Advanced)

This guide covers **commonly asked JSON interview questions** for Frontend Developers. Each answer is written to be **simple, clear, and detailed**, suitable for both beginners and experienced developers.

---

## ✅ Category: Basics of JSON

### 1. What is JSON?
**Answer:**  
JSON (JavaScript Object Notation) is a lightweight data-interchange format. It is easy to read and write for humans and easy to parse and generate for machines. It is often used to exchange data between a client and server in web applications.

---

### 2. What are the data types supported in JSON?
**Answer:**
- String
- Number
- Boolean
- Null
- Array
- Object  
(Note: JSON does not support functions, `undefined`, or symbols.)

---

### 3. How is JSON different from a JavaScript object?
**Answer:**
| Feature               | JSON                         | JavaScript Object              |
|-----------------------|------------------------------|-------------------------------|
| Syntax                | Strict (double quotes only)  | Flexible (single or double)   |
| Functions allowed     | ❌ No                        | ✅ Yes                         |
| Parsing               | Needs `JSON.parse()`         | Native to JS                  |

---

## 🔄 Category: Parsing & Stringifying

### 4. What does `JSON.stringify()` do?
**Answer:**  
It converts a JavaScript object into a JSON string.

```js
const obj = { name: "John", age: 30 };
const jsonString = JSON.stringify(obj); // '{"name":"John","age":30}'
```

---

### 5. What does `JSON.parse()` do?
**Answer:**  
It converts a JSON string into a JavaScript object.

```js
const jsonString = '{"name":"John","age":30}';
const obj = JSON.parse(jsonString); // { name: "John", age: 30 }
```

---

### 6. What are common issues when parsing JSON?
**Answer:**
- Using single quotes instead of double quotes
- Trailing commas
- Including unsupported types (e.g., `undefined`, functions)

---

## 🔐 Category: Secure JSON Handling

### 7. Can parsing JSON be unsafe?
**Answer:**  
Yes, if the data comes from untrusted sources and is parsed or eval-ed incorrectly, it can open security holes. Always use `JSON.parse()` instead of `eval()`.

---

## 📌 Category: Advanced Usage

### 8. How do you pretty-print JSON?
**Answer:**
Use the second and third arguments of `JSON.stringify()`:

```js
const obj = { name: "John", age: 30 };
console.log(JSON.stringify(obj, null, 2));
```

---

### 9. How do you handle circular references in JSON?
**Answer:**  
JSON doesn't support circular references. You must remove them or use custom logic such as:

```js
const obj = {};
obj.self = obj;
JSON.stringify(obj); // Throws error
```

---

### 10. How do you exclude properties when using `JSON.stringify()`?
**Answer:**
Use a **replacer** function or array.

```js
JSON.stringify(obj, ["name"]); // Only includes 'name' property
```

---

### 11. How do you transform values when stringifying?
**Answer:**

```js
const obj = { name: "John", age: 30 };
JSON.stringify(obj, (key, value) =>
  typeof value === "number" ? undefined : value
); // Removes number-type values
```

---

### 12. What’s the MIME type of JSON?
**Answer:**  
`application/json`

---

## 🧪 Real-world Scenarios

### 13. How is JSON used in APIs?
**Answer:**  
APIs commonly send and receive data in JSON format via HTTP methods like GET, POST, PUT, DELETE.

---

### 14. How do you handle deeply nested JSON?
**Answer:**
Use recursion or optional chaining (`?.`) to access deeply nested properties safely.

```js
const city = user?.address?.location?.city;
```

---

### 15. What tools help validate or format JSON?
**Answer:**
- JSONLint
- Prettier (VSCode)
- Browser DevTools (JSON Viewer)