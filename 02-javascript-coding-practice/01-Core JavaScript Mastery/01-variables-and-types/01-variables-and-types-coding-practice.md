
# 💡 JavaScript Coding Practice – 01: Variables & Data Types

This practice set will train you to think like a developer by solving real interview-style JavaScript problems that strengthen your understanding of **variables**, **scoping**, and **data types**.

---

## 🧠 Problem 1: Swap Two Variables (Without Temp Variable)

**Description:**  
Swap the values of two variables `a` and `b` without using a temporary variable.

```js
let a = 5;
let b = 10;
// Your logic here
console.log(a); // 10
console.log(b); // 5
```

🧪 *Think about arithmetic or destructuring techniques.*

---

## 🧠 Problem 2: Type Checker

**Description:**  
Write a function `checkType(value)` that returns the type of the value as a string.

```js
checkType(123);         // 'number'
checkType("Hello");     // 'string'
checkType(null);        // 'null'
checkType(undefined);   // 'undefined'
checkType([]);          // 'array'
checkType({});          // 'object'
checkType(() => {});    // 'function'
```

🧪 *Use `typeof`, `Array.isArray()`, and explicit null check.*

---

## 🧠 Problem 3: Is Variable Defined?

**Description:**  
Write a function that checks whether a variable exists and is not undefined.

```js
let definedVar = "hello";
console.log(isDefined(definedVar)); // true
console.log(isDefined(nonExistent)); // false
```

💡 *Use `typeof` with try-catch or optional chaining if needed.*

---

## 🧠 Problem 4: Implicit vs Explicit Coercion

**Description:**  
Predict and explain the output:

```js
console.log(1 + "2");     // ?
console.log("5" - 2);     // ?
console.log(true + false); // ?
console.log(null == undefined); // ?
console.log(null === undefined); // ?
```

💭 *Understand type coercion rules in JS.*

---

## 🧠 Problem 5: Scope Prediction

**Description:**  
What will the output be and why?

```js
var a = 10;
(function () {
  console.log(a);
  var a = 5;
})();
```

**Expected Output:** ?  
🧠 *Hoisting-related question: understand how `var` behaves inside functions.*

---

## ✅ Bonus Tips for Interviews

- Prefer `let` and `const` over `var`
- Understand the **difference between primitive vs reference types**
- Be confident in explaining **hoisting**, **block scope**, and **type coercion**

---

Ready for the next topic? Move on to `02-strings` for more fun logic challenges!
