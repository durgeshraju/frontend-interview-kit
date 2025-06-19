# 04 – Objects: Coding Practice for Interviews

Sharpen your JavaScript object manipulation skills with these carefully crafted challenges. Each one follows a consistent format: **Problem → Example → Mental Hook**. These are commonly asked in interviews and critical for real-world JavaScript tasks.

---

### 🧠 Problem 1: Count Properties of an Object
**Problem:**  
Write a function `countProperties(obj)` that returns the number of own properties in the given object.

**Example:**
```js
const person = { name: "Alice", age: 30, city: "Paris" };
console.log(countProperties(person)); // ➞ 3
```

**Mental Hook:**  
Think of `Object.keys(obj)` as a way to list properties, then just count them.

---

### 🧠 Problem 2: Check if Object is Empty
**Problem:**  
Create a function `isEmpty(obj)` that returns `true` if the object has no own properties, otherwise `false`.

**Example:**
```js
console.log(isEmpty({})); // ➞ true
console.log(isEmpty({ a: 1 })); // ➞ false
```

**Mental Hook:**  
Empty objects have zero keys → `Object.keys(obj).length === 0`.

---

### 🧠 Problem 3: Merge Two Objects
**Problem:**  
Create a function `mergeObjects(obj1, obj2)` that merges two objects into one (shallow copy).

**Example:**
```js
const a = { name: "Alice" };
const b = { age: 25 };
console.log(mergeObjects(a, b)); // ➞ { name: "Alice", age: 25 }
```

**Mental Hook:**  
Use the spread syntax: `{ ...obj1, ...obj2 }`.

---

### 🧠 Problem 4: Deep Copy an Object
**Problem:**  
Write a function `deepClone(obj)` that creates a deep copy of a nested object.

**Example:**
```js
const original = { a: 1, b: { c: 2 } };
const copy = deepClone(original);
console.log(copy); // ➞ { a: 1, b: { c: 2 } }
console.log(copy.b === original.b); // ➞ false
```

**Mental Hook:**  
Deep copy ensures no reference sharing. Use `JSON.parse(JSON.stringify(obj))` safely for JSON-compatible objects.

---

### 🧠 Problem 5: Invert Keys and Values
**Problem:**  
Write a function `invert(obj)` that swaps the keys and values of an object.

**Example:**
```js
console.log(invert({ a: "1", b: "2" })); // ➞ { "1": "a", "2": "b" }
```

**Mental Hook:**  
Loop through `Object.entries()` and reverse `[key, value]`.

---

### 🧠 Bonus: Nested Property Accessor
**Problem:**  
Create a function `getNestedValue(obj, path)` that returns the value at the nested path (dot-separated string).

**Example:**
```js
const user = { profile: { name: "John", details: { age: 30 } } };
console.log(getNestedValue(user, "profile.details.age")); // ➞ 30
```

**Mental Hook:**  
Use `path.split(".")` and `reduce()` to walk through the object safely.

---

Practice these well—they appear in many frontend interviews and require solid object understanding!
