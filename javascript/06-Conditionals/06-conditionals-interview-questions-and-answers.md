
# 📘 06 – Conditionals (JavaScript Interview Essentials – Simple & Detailed)

This section explains **JavaScript conditionals**, which are used to make decisions in your code. They are foundational for controlling flow and writing logic in any program.

---

## ✅ Interview Questions & Detailed, Easy-to-Understand Answers

---

### 1. What are the basic types of conditionals in JavaScript?

- `if` statement
- `if...else`
- `if...else if...else`
- `switch` statement
- Ternary operator (`? :`)
- Logical operators (`&&`, `||`, `!`)

These are used to run different blocks of code depending on certain conditions.

---

### 2. How does an `if` statement work?

```js
let age = 18;

if (age >= 18) {
  console.log("You are an adult.");
}
```

**Explanation**:  
If the condition inside the `if` is true, the block of code runs.

---

### 3. What is the difference between `if`, `else if`, and `else`?

```js
let score = 85;

if (score >= 90) {
  console.log("Grade A");
} else if (score >= 75) {
  console.log("Grade B");
} else {
  console.log("Grade C");
}
```

**Explanation**:  
- `if` checks the first condition.  
- `else if` checks other conditions if the previous ones are false.  
- `else` runs if none of the above are true.

---

### 4. What is a `switch` statement and when should you use it?

```js
let fruit = "banana";

switch (fruit) {
  case "apple":
    console.log("It's an apple");
    break;
  case "banana":
    console.log("It's a banana");
    break;
  default:
    console.log("Unknown fruit");
}
```

**Explanation**:  
Use `switch` when you want to compare a single variable against many possible values.  
`break` prevents fall-through to the next case.

---

### 5. What is a ternary operator?

```js
let age = 20;
let result = (age >= 18) ? "Adult" : "Minor";
console.log(result); // "Adult"
```

**Explanation**:  
Ternary operator is a short way to write `if...else`.  
Syntax: `condition ? valueIfTrue : valueIfFalse`

---

### 6. How do logical operators work with conditionals?

```js
let age = 25;
let hasID = true;

if (age >= 18 && hasID) {
  console.log("Entry allowed");
}

if (age < 18 || !hasID) {
  console.log("Entry denied");
}
```

**Explanation**:  
- `&&` (AND) – both conditions must be true.  
- `||` (OR) – at least one condition must be true.  
- `!` (NOT) – inverts the condition.

---

### 7. What are truthy and falsy values?

**Falsy values** in JavaScript:
- `false`
- `0`
- `""` (empty string)
- `null`
- `undefined`
- `NaN`

Everything else is **truthy**.

```js
if ("hello") console.log("Truthy"); // runs
if (0) console.log("Falsy");        // doesn't run
```

---

### 8. How do you use nested conditionals?

```js
let isMember = true;
let points = 100;

if (isMember) {
  if (points > 50) {
    console.log("Gold member");
  } else {
    console.log("Silver member");
  }
}
```

**Explanation**:  
One `if` inside another. Can become hard to read — prefer using logical operators when possible.

---

### 9. Can you use a condition without `if`?

Yes! Use logical `&&` or ternary:

```js
let loggedIn = true;
loggedIn && console.log("Welcome!");

let message = loggedIn ? "Welcome!" : "Please log in";
```

**Explanation**:  
These are useful for short, one-line conditions.

---

### 10. When should you use `switch` over `if...else`?

Use `switch` when:
- You're checking the same variable for many values.
- It makes the code cleaner and easier to read.

Use `if` when:
- You're doing complex conditions (e.g., `a > b && b < c`).

---
