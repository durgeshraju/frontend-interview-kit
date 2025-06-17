
# 📘 03 – Arrays (JavaScript Interview Essentials)

This section covers essential array concepts and coding patterns commonly tested in frontend interviews. Arrays are a core data structure in JavaScript and mastering them is critical for real-world development and algorithm problems.

---

## ✅ Interview Questions & Detailed Answers

---

### 1. How do you find the maximum and minimum number in an array?

```js
const arr = [10, 5, 8, 20];

Math.max(...arr); // 20
Math.min(...arr); // 5
```

#### 🧠 Explanation:
- The spread operator `...` unpacks the array into individual arguments for `Math.max()` and `Math.min()`.

---

### 2. How do you remove duplicates from an array?

```js
const nums = [1, 2, 2, 3, 1];
const unique = [...new Set(nums)];
console.log(unique); // [1, 2, 3]
```

#### 🧠 Explanation:
`Set` is a collection of unique values. Spreading it into an array removes all duplicates.

---

### 3. How do you flatten a nested array?

```js
const arr = [1, [2, [3, [4]]]];
const flat = arr.flat(Infinity);
console.log(flat); // [1, 2, 3, 4]
```

#### 🧠 Explanation:
Use `flat()` with `Infinity` depth to completely flatten any nested levels.

---

### 4. How do you reverse an array?

```js
const arr = [1, 2, 3];
arr.reverse(); // [3, 2, 1]
```

#### 🧠 Note:
This modifies the original array.

---

### 5. What are the differences between `map()`, `forEach()`, and `filter()`?

```js
arr.map(x => x * 2);     // returns new array
arr.forEach(x => ...);   // performs action, returns undefined
arr.filter(x => x > 5);  // returns filtered array
```

#### 🧠 Summary:
| Method    | Returns    | Use Case                      |
|-----------|------------|-------------------------------|
| map()     | new array  | transform values              |
| forEach() | undefined  | side effects (e.g., logging)  |
| filter()  | new array  | keep only matching values     |

---

### 6. How do you sum all values in an array?

```js
const arr = [1, 2, 3, 4];
const sum = arr.reduce((acc, val) => acc + val, 0);
```

#### 🧠 Explanation:
`reduce()` processes each element and accumulates a result. Here it totals the numbers.

---

### 7. How do you check if all or some elements meet a condition?

```js
arr.every(num => num > 0); // true if all are > 0
arr.some(num => num > 10); // true if at least one > 10
```

---

### 8. How do you find an element in an array?

```js
arr.find(x => x > 10);     // returns first match
arr.findIndex(x => x > 10); // returns index of first match
```

---

### 9. How do you sort an array?

```js
const nums = [3, 10, 2];
nums.sort((a, b) => a - b); // ascending: [2, 3, 10]
```

#### ⚠️ Caution:
Default `sort()` converts elements to strings if no compare function is used.

---

### 10. How do you convert an array to a string?

```js
[1, 2, 3].join("-"); // "1-2-3"
```

---

### 11. How do you check if a value is an array?

```js
Array.isArray([1, 2, 3]); // true
```

---

### 12. How do you merge two arrays?

```js
const a = [1, 2];
const b = [3, 4];
const merged = [...a, ...b]; // [1, 2, 3, 4]
```

---

### 13. How do you fill an array with a specific value?

```js
new Array(4).fill(0); // [0, 0, 0, 0]
```

---

### 14. How do you remove elements from an array?

```js
arr.pop();    // removes last
arr.shift();  // removes first
arr.splice(1, 2); // removes from specific index
```

---

### 15. How do you insert elements into an array?

```js
arr.push(4);           // add to end
arr.unshift(0);        // add to start
arr.splice(2, 0, 5);   // insert 5 at index 2
```

---
