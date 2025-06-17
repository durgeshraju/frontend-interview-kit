
# 📘 05 – Functions (JavaScript Interview Essentials – Simple & Detailed)

This section covers **JavaScript functions**, a crucial topic for both beginner and mid-level frontend interviews. Functions are building blocks of any JavaScript program, and it's important to understand how they behave, how to use them, and how to write clean logic using them.

---

## ✅ Interview Questions & Detailed, Easy-to-Understand Answers

---

### 1. What are the different ways to declare a function in JavaScript?

```js
// Function Declaration
function greet() {
  return "Hello";
}

// Function Expression
const greet = function() {
  return "Hello";
};

// Arrow Function
const greet = () => "Hello";
```

**Explanation**:  
- **Function Declaration**: You can call it before it's defined because it is hoisted.  
- **Function Expression**: It is stored in a variable and cannot be used before it's defined.  
- **Arrow Function**: A shorter way to write functions. It does **not** have its own `this`.

---

### 2. What is the difference between parameters and arguments?

```js
function add(x, y) { // x and y are parameters
  return x + y;
}

add(2, 3); // 2 and 3 are arguments
```

**Explanation**:  
- **Parameters** are like empty boxes inside a function.
- **Arguments** are the actual values you put into those boxes when you call the function.

---

### 3. What is a pure function?

```js
function add(a, b) {
  return a + b;
}
```

**Explanation**:  
A **pure function**:
- Always gives the same output for the same input.
- Does not change anything outside of itself.

It’s clean, testable, and safe to use.

---

### 4. What is a callback function?

```js
setTimeout(() => {
  console.log("This runs later");
}, 1000);
```

**Explanation**:  
A **callback function** is a function that you pass into another function, and it gets **called later**.

It’s used in things like `setTimeout`, `map`, or event listeners.

---

### 5. What is a higher-order function?

```js
function repeat(fn, times) {
  for (let i = 0; i < times; i++) fn();
}
```

**Explanation**:  
A **higher-order function**:
- Takes another function as an argument, OR
- Returns a function

This makes your code more flexible and reusable.

---

### 6. What is a closure?

```js
function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  };
}

const counter = outer();
counter(); // 1
counter(); // 2
```

**Explanation**:  
A **closure** is when an inner function “remembers” variables from its outer function, even after the outer function is done.

Useful for private variables and function factories.

---

### 7. What is an arrow function and when should I use it?

```js
const double = (n) => n * 2;
```

**Explanation**:  
Arrow functions are short and clean. But:
- They don’t have their own `this`, `arguments`, or `super`.
- Great for one-liners, but not for object methods.

Use when you don’t need `this` or `arguments`.

---

### 8. What is `this` in a function?

```js
const person = {
  name: "Sam",
  greet() {
    console.log("Hi " + this.name);
  }
};
person.greet(); // Hi Sam
```

**Explanation**:  
- In a **regular function**, `this` is the object calling the function.
- In an **arrow function**, `this` is taken from the outer scope.

---

### 9. What is the rest parameter and how is it used?

```js
function sum(...nums) {
  return nums.reduce((total, num) => total + num, 0);
}
sum(1, 2, 3); // 6
```

**Explanation**:  
`...nums` gathers all extra arguments into an array.

Useful when you don’t know how many arguments will be passed.

---

### 10. What is the `arguments` object?

```js
function showArgs() {
  console.log(arguments[0], arguments[1]);
}
showArgs("a", "b"); // "a", "b"
```

**Explanation**:  
- `arguments` is like an array of all values passed to a function.
- It works in regular functions only (not arrow functions).

---

### 11. What is an IIFE (Immediately Invoked Function Expression)?

```js
(function() {
  console.log("Runs immediately");
})();
```

**Explanation**:  
An IIFE is a function that runs right away after it’s defined. It helps create a private scope.

---

### 12. What is function currying?

```js
function add(a) {
  return function(b) {
    return a + b;
  };
}
add(2)(3); // 5
```

**Explanation**:  
Currying is breaking a function into a chain of functions that each take one argument.

Useful for advanced logic reuse.

---

### 13. How can you make a function run only once?

```js
function once(fn) {
  let called = false;
  return function(...args) {
    if (!called) {
      called = true;
      return fn(...args);
    }
  };
}
```

**Explanation**:  
This is useful for things like loading scripts only once.

---

### 14. What is the call stack in JavaScript?

```js
function one() {
  two();
}
function two() {
  console.log("Inside Two");
}
one(); // Calls two()
```

**Explanation**:  
The **call stack** is like a to-do list.  
Each function gets added (pushed) when called and removed (popped) when done.

---
