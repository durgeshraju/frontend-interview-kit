
# 📘 01 – Variables & Data Types (JavaScript Interview Essentials)

This section covers the most important interview questions related to **JavaScript variables and data types**. These are the foundational building blocks for any JS developer.

---

## ✅ Interview Questions & Detailed Answers

---

### 1. What is the difference between `var`, `let`, and `const`?

#### 🔹 `var`
- Function-scoped.
- Can be redeclared and updated.
- Gets hoisted with an initial value of `undefined`.

#### 🔹 `let`
- Block-scoped.
- Can be updated but not redeclared in the same scope.
- Hoisted but not initialized — accessing it before declaration throws a ReferenceError.

#### 🔹 `const`
- Block-scoped.
- Must be initialized at declaration.
- Cannot be reassigned, but objects/arrays can still be mutated.

```js
var a = 1;
let b = 2;
const c = 3;
```

---

### 2. What are JavaScript's primitive data types?

There are **seven primitive types**:
- `string`
- `number`
- `boolean`
- `undefined`
- `null`
- `symbol`
- `bigint`

These types are immutable and compared by value.

---

### 3. What is type coercion?

JavaScript automatically converts values from one type to another when needed.

```js
'5' + 1      // '51' → number 1 is coerced to string
'5' - 1      // 4 → string is coerced to number
true + 1     // 2 → true is coerced to 1
```

Use `===` to avoid unexpected coercion.

---

### 4. What’s the difference between `==` and `===`?

- `==` checks for **value equality** after performing type conversion.
- `===` checks for **strict equality** (both value and type).

```js
'5' == 5      // true
'5' === 5     // false
```

Always prefer `===` to avoid bugs from type coercion.

---

### 5. What is `undefined` vs `null`?

- `undefined`: A variable declared but not assigned a value.
- `null`: An intentional absence of any value (assigned manually).

```js
let a;
console.log(a); // undefined

let b = null;
console.log(b); // null
```

---

### 6. How can you check the type of a variable?

Use the `typeof` operator:

```js
typeof 'hello'   // 'string'
typeof 42        // 'number'
typeof null      // 'object' (this is a known JS bug)
typeof undefined // 'undefined'
```

To check for arrays: `Array.isArray(value)`

---

### 7. What will this log?

```js
console.log(typeof NaN);  // 'number'
```

Even though NaN means "Not a Number", it’s technically of type `number`.

---

### 8. What is hoisting in variables?

Hoisting is JavaScript’s behavior of moving declarations to the top of a scope.

```js
console.log(a); // undefined
var a = 5;
```

Only declarations are hoisted, not initializations.  
`let` and `const` are hoisted too, but in the **temporal dead zone** until declared.

---

### 9. Can you reassign a `const` array or object?

```js
const arr = [1, 2, 3];
arr.push(4);      // ✅ allowed
arr = [1, 2];     // ❌ TypeError

const obj = { name: "JS" };
obj.name = "JavaScript";  // ✅ allowed
```

You **can mutate**, but **cannot reassign**.

---

### 10. What is the result of `typeof typeof 1`?

```js
typeof typeof 1;  // 'string'
```

Step-by-step:
- `typeof 1` returns `'number'`
- `typeof 'number'` returns `'string'`

So, the final output is `'string'`.

---

### 11. What is dynamic typing in JavaScript?

JavaScript is dynamically typed, meaning variables can hold any type, and change types at runtime.

```js
let x = 10;   // number
x = 'ten';    // now it's a string
```

This flexibility can lead to unexpected behavior if not carefully managed.
