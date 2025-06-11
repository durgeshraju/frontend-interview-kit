
# 📘 04 – Objects (JavaScript Interview Essentials)

This section focuses on **JavaScript objects**, which are essential for managing key-value data, working with APIs, and building complex data structures. Objects frequently appear in both coding interviews and real-world applications.

---

## ✅ Interview Questions & Detailed Answers

---

### 1. How do you create an object in JavaScript?

```js
const person = {
  name: "Alice",
  age: 30,
  isEmployed: true
};
```

#### 🧠 Explanation:
An object is created using curly braces `{}` with key-value pairs. Keys are always strings (even if not quoted), and values can be any data type.

---

### 2. How do you access and modify object properties?

```js
const car = { brand: "Toyota", model: "Camry" };

// Dot notation
console.log(car.brand);  // "Toyota"

// Bracket notation
console.log(car["model"]); // "Camry"

// Modify
car.model = "Corolla";
car["brand"] = "Honda";
```

#### 🧠 When to use bracket notation:
- When the property name is dynamic (e.g., `car[propName]`)
- When the property name has spaces or special characters

---

### 3. How do you loop through an object?

```js
const user = { name: "John", age: 25 };

for (let key in user) {
  console.log(key, user[key]);
}
```

Or use `Object.keys()`:

```js
Object.keys(user).forEach(key => {
  console.log(`${key}: ${user[key]}`);
});
```

---

### 4. How do you check if a key exists in an object?

```js
"user" in obj           // true
obj.hasOwnProperty("user") // true
```

#### 🧠 Explanation:
- `in` checks if the key exists (including in the prototype chain)
- `hasOwnProperty` checks only direct properties

---

### 5. How do you merge two objects?

```js
const obj1 = { a: 1 };
const obj2 = { b: 2 };
const merged = { ...obj1, ...obj2 };
```

Or use `Object.assign()`:

```js
const combined = Object.assign({}, obj1, obj2);
```

---

### 6. How do you clone an object?

```js
const original = { x: 10, y: 20 };
const copy = { ...original };
```

#### 🧠 Note:
This creates a **shallow copy**. Nested objects still share references.

---

### 7. What is the difference between shallow and deep copy?

- **Shallow copy**: copies top-level properties, but nested objects are still references.
- **Deep copy**: creates an independent clone, including nested objects.

```js
// Deep copy (not ideal for functions or circular references)
const deepCopy = JSON.parse(JSON.stringify(obj));
```

---

### 8. How do you delete a property from an object?

```js
delete obj.propertyName;
```

---

### 9. How do you convert an object into an array?

```js
Object.entries(obj); // returns [[key, value], ...]
Object.keys(obj);    // returns [key1, key2, ...]
Object.values(obj);  // returns [value1, value2, ...]
```

---

### 10. How do you compare two objects?

```js
function areEqual(obj1, obj2) {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}
```

#### ⚠️ Limitation:
Only works for flat objects with consistent key order and no functions.

---

### 11. How do you freeze or seal an object?

```js
Object.freeze(obj); // prevents all changes
Object.seal(obj);   // allows changes to existing properties only
```

---

### 12. Can object keys be anything other than strings?

All object keys are automatically converted to **strings** (or symbols).

```js
const obj = {};
obj[123] = "value";  // key becomes "123"
```

---
