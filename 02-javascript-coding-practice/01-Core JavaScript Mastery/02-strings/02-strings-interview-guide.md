# 02. Strings – JavaScript Interview Guide

## 📘 Overview

Strings are one of the most frequently used data types in JavaScript and are foundational for handling user input, API data, UI text rendering, and more. Interviewers often test your understanding of string manipulation, methods, immutability, and performance implications.

---

## 🔥 Frequently Asked Interview Questions (with Explanations)

### 1. What is a string in JavaScript?
A string is a sequence of characters used to represent text. In JavaScript, strings are primitive data types and immutable.

```js
let greeting = "Hello, world!";
```

---

### 2. What are the different ways to create a string?
- **String literals** using quotes: `'`, `"`, or backticks `` ` ``
- **String constructor**: `new String("text")`

```js
let str1 = "Hello";         // Literal
let str2 = 'World';         // Literal
let str3 = `Template`;      // Template literal
let str4 = new String("!"); // Object
```

> ✅ Use string literals unless you explicitly need a string object.

---

### 3. What are template literals and when should you use them?
Template literals allow you to embed expressions and variables in strings using backticks and `${}`.

```js
const name = "Durgesh";
const message = `Hello, ${name}!`;
```

> 🧠 **Mental Hook:** Use backticks (`` ` ``) for multi-line strings and dynamic interpolation.

---

### 4. How to check if a string includes a substring?
Use `.includes()` method which returns `true` or `false`.

```js
"JavaScript".includes("Script"); // true
```

---

### 5. How do you change the case of a string?
```js
"hello".toUpperCase(); // "HELLO"
"WORLD".toLowerCase(); // "world"
```

---

### 6. How to split a string into an array?
Use `.split(separator)`

```js
"Frontend Interview Kit".split(" "); 
// ["Frontend", "Interview", "Kit"]
```

---

### 7. How do you trim whitespace from a string?
Use `.trim()`, `.trimStart()`, or `.trimEnd()`.

```js
"  hello  ".trim();       // "hello"
"  hello  ".trimStart();  // "hello  "
```

---

### 8. How do you replace part of a string?
```js
"Hello JS".replace("JS", "JavaScript"); // "Hello JavaScript"
```

> 🧠 **Mental Hook:** `.replace()` only replaces the first match unless you use a regex with `/g`.

---

### 9. Is string mutable in JavaScript?
No. Strings are immutable. Any string operation creates a new string.

---

### 10. How to reverse a string?
```js
const reversed = "hello".split("").reverse().join(""); // "olleh"
```

---

### 11. How to count the number of times a character appears in a string?
```js
function countChar(str, char) {
  return str.split(char).length - 1;
}
```

---

### 12. How to check if a string starts or ends with a specific word?
```js
"JavaScript".startsWith("Java"); // true
"JavaScript".endsWith("Script"); // true
```

---

### 13. What is the difference between == and === for strings?
Both compare strings, but `===` also compares the type (strict equality).

```js
"5" == 5   // true
"5" === 5  // false
```

---

### 14. How to remove duplicate characters from a string?
```js
[...new Set("interview")].join(""); // "intervw"
```

---

### 15. How to find the longest word in a sentence?
```js
function longestWord(str) {
  return str.split(" ").sort((a, b) => b.length - a.length)[0];
}
```

---

## ✅ Pro Tips for Interviews

- Always highlight immutability of strings.
- Mention performance impact of excessive string concatenation.
- Demonstrate modern methods like `.includes()`, `.startsWith()`, `.endsWith()`, etc.

---

## 📚 Practice Problem

**Q: Write a function to capitalize the first letter of each word in a sentence.**

```js
function capitalizeWords(sentence) {
  return sentence
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
```

---

## 🧠 Mental Hooks

- **Immutable nature** → Every modification returns a new string
- **Use template literals** → For cleaner and readable string formatting
- **Split–Reverse–Join** → Your secret weapon for reversing strings
- **Set for uniqueness** → Easy trick to remove duplicates

---

Happy Learning! 🚀
