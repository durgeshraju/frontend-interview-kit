
# 📘 02 – Strings (JavaScript Interview Essentials)

This section focuses on **string manipulation**, a core skill for interviews. Strings often appear in algorithm questions and are essential for data formatting, validation, and display logic.

---

## ✅ Interview Questions & Detailed Answers

---

### 1. How do you reverse a string in JavaScript?

```js
function reverseString(str) {
  return str.split('').reverse().join('');
}
reverseString("hello"); // "olleh"
```

#### 🧠 Explanation:
- `split('')`: turns the string into an array of characters.
- `reverse()`: reverses the array in place.
- `join('')`: merges it back into a string.

---

### 2. How do you capitalize the first letter of each word?

```js
function capitalizeWords(str) {
  return str.split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
capitalizeWords("hello world"); // "Hello World"
```

#### 🧠 Explanation:
- Splits the string into words.
- Capitalizes the first character and appends the rest.
- Joins them back into a full sentence.

---

### 3. How do you check if a string is a palindrome?

```js
function isPalindrome(str) {
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}
isPalindrome("madam"); // true
```

#### 🧠 Explanation:
A palindrome reads the same forward and backward. This function compares the string to its reversed version.

---

### 4. How do you count the number of vowels in a string?

```js
function countVowels(str) {
  return str.match(/[aeiou]/gi)?.length || 0;
}
countVowels("hello"); // 2
```

#### 🧠 Explanation:
- Uses a regular expression to match all vowels.
- The `gi` flags make it case-insensitive and global.
- `?.length` ensures it works even if no match is found.

---

### 5. How do you replace all instances of a word in a string?

```js
const str = "The cat sat on the mat.";
const result = str.replace(/cat/g, "dog");
console.log(result); // "The dog sat on the mat."
```

#### 🧠 Explanation:
Use a regular expression with the `g` (global) flag to replace all occurrences, not just the first one.

---

### 6. How do you remove whitespaces from both ends of a string?

```js
const str = "   hello world   ";
console.log(str.trim()); // "hello world"
```

#### 🧠 Explanation:
The `trim()` method removes spaces from the start and end of the string.

---

### 7. How do you check if a string contains a substring?

```js
const str = "frontend development";
str.includes("end"); // true
```

#### 🧠 Explanation:
`includes()` returns `true` if the substring is found. It is case-sensitive.

---

### 8. How do you convert a string to an array?

```js
const str = "a,b,c,d";
const arr = str.split(","); // ["a", "b", "c", "d"]
```

#### 🧠 Explanation:
Use `split()` to divide the string into parts based on a delimiter.

---

### 9. How do you repeat a string multiple times?

```js
"ha".repeat(3); // "hahaha"
```

#### 🧠 Explanation:
The `repeat()` method creates a new string with the original repeated `n` times.

---

### 10. How do you get the character at a specific index?

```js
const str = "JavaScript";
str.charAt(4);    // "S"
str[4];           // "S"
```

#### 🧠 Explanation:
Both `charAt()` and bracket notation return the character at the specified index.

---

### 11. How do you check if a string starts or ends with a specific substring?

```js
"JavaScript".startsWith("Java"); // true
"JavaScript".endsWith("Script"); // true
```

---

### 12. How do you convert a string to lowercase or uppercase?

```js
"Hello".toLowerCase(); // "hello"
"world".toUpperCase(); // "WORLD"
```

---

### 13. How do you extract part of a string?

```js
const str = "JavaScript";
str.slice(0, 4); // "Java"
str.substring(4, 10); // "Script"
```

#### 🧠 Explanation:
- `slice(start, end)` and `substring(start, end)` extract substrings.
- `slice` can accept negative indices, `substring` cannot.

---
