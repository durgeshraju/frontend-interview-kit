
# 📘 Explanations – 01: Variables & Data Types (Coding Practice)

This file includes detailed explanations and logic for the coding problems in this category. Use it to document your thinking and solidify your understanding.

---

## 🧠 Problem 1: Swap Two Variables (Without Temp Variable)

### 🔍 Problem
Swap values of `a` and `b` without using a temporary variable.

### 💡 Logic
You can use arithmetic or ES6 destructuring:

```js
// Using destructuring
[a, b] = [b, a];
```

### ✅ Why It Works
Destructuring allows simultaneous value assignment.

---

## 🧠 Problem 2: Type Checker

### 🔍 Problem
Detect the actual type of any value (`number`, `string`, `array`, etc.).

### 💡 Logic
Use `typeof`, plus `Array.isArray()` and `value === null`:

```js
function checkType(value) {
  if (value === null) return 'null';
  if (Array.isArray(value)) return 'array';
  return typeof value;
}
```

---

## 🧠 Problem 3: Is Variable Defined?

### 🔍 Problem
Check if a variable exists or is defined.

### 💡 Logic
Use `typeof` and avoid ReferenceError:

```js
function isDefined(varName) {
  try {
    return typeof eval(varName) !== 'undefined';
  } catch {
    return false;
  }
}
```

---

## 🧠 Problem 4: Implicit vs Explicit Coercion

### 💡 Key Takeaways
```js
1 + "2"         // "12"   (number + string = string)
"5" - 2         // 3      (string - number = number)
true + false    // 1      (true => 1, false => 0)
null == undefined // true  (loose equality)
null === undefined // false (strict equality)
```

---

## 🧠 Problem 5: Scope Prediction

### 🔍 Code
```js
var a = 10;
(function () {
  console.log(a);
  var a = 5;
})();
```

### ✅ Output:
`undefined`

### 💡 Why?
Due to **hoisting**, `var a` is moved to the top but not initialized. So `console.log(a)` sees `undefined`.

---

Feel free to add your notes or insights below each problem to personalize your learning!
