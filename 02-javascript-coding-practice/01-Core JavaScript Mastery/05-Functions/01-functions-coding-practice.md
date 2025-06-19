# 05 – Functions: Coding Practice

Welcome to the **Functions** coding challenge set. These exercises are crafted to strengthen your understanding of functions in JavaScript – from declarations to closures. Perfect for interviews and mastering the core!

---

### 🧠 Mental Hook:
> "Functions are the building blocks of logic. Understand them, and you understand the flow of any JavaScript program."

---

## 🚀 Practice Problems

### 1. Sum of Two Numbers Using Function
**Problem:**  
Write a function `sum(a, b)` that returns the sum of two numbers.

**Example:**  
```js
sum(3, 4); // 7
```

**Mental Hook:**  
Remember, a function can return any value and take any number of parameters.

---

### 2. Function Expression vs Declaration
**Problem:**  
Convert the below function declaration into an expression:

```js
function greet(name) {
  return "Hello, " + name;
}
```

**Example:**  
```js
const greet = function(name) {
  return "Hello, " + name;
};
```

**Mental Hook:**  
Function declarations are hoisted, expressions are not.

---

### 3. Default Parameters
**Problem:**  
Create a function that multiplies two numbers, defaulting the second to 2 if not provided.

```js
function multiply(a, b = 2) {
  return a * b;
}
```

**Mental Hook:**  
Default parameters are evaluated at call time.

---

### 4. Rest Parameters
**Problem:**  
Write a function that accepts any number of arguments and returns their sum.

```js
function sumAll(...args) {
  return args.reduce((acc, curr) => acc + curr, 0);
}
```

**Mental Hook:**  
Use rest `...args` to capture all remaining arguments into an array.

---

### 5. Callback Function
**Problem:**  
Write a function `doMath(a, b, callback)` that calls the `callback` function with `a` and `b`.

```js
function doMath(a, b, callback) {
  return callback(a, b);
}
```

**Example:**  
```js
doMath(5, 3, function(x, y) { return x * y }); // 15
```

**Mental Hook:**  
Functions are first-class citizens in JS, meaning you can pass them around like data.

---

### 6. Closure Counter
**Problem:**  
Create a counter using closure that increments on each call.

```js
function createCounter() {
  let count = 0;
  return function() {
    return ++count;
  };
}
```

**Example:**
```js
const counter = createCounter();
counter(); // 1
counter(); // 2
```

**Mental Hook:**  
Closures "remember" the variables from where they were created.

---

### 7. Arrow Functions and `this`
**Problem:**  
What will the following return?

```js
const obj = {
  name: "Durgesh",
  greet: () => "Hello " + this.name
};

obj.greet();
```

**Answer:**  
`"Hello undefined"` – Arrow functions don't have their own `this`.

**Mental Hook:**  
Arrow functions use lexical scoping for `this`.

---