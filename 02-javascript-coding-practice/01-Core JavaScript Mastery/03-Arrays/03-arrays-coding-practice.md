# 03 – Arrays Coding Practice (JavaScript)

A solid understanding of arrays is crucial for every JavaScript developer. These problems are sorted by difficulty and crafted to help you think like a developer and build interview-ready logic.

---

## 🟢 Easy

### 1. Sum of All Elements
**Problem:** Write a function that returns the sum of all numbers in an array.

```js
sumArray([1, 2, 3, 4]); // ➞ 10
```

**Mental Hook:** Loop through and accumulate. Use `reduce()` for bonus points!

---

### 2. Find the Maximum
**Problem:** Return the largest number from a given array.

```js
getMax([1, 5, 2, 9, 3]); // ➞ 9
```

**Mental Hook:** Use Math.max with spread: `Math.max(...arr)`

---

### 3. Filter Even Numbers
**Problem:** Return only even numbers from an array.

```js
filterEven([1, 2, 3, 4]); // ➞ [2, 4]
```

**Mental Hook:** `.filter(num => num % 2 === 0)`

---

### 4. Check if Array is Sorted
**Problem:** Return true if array is sorted in ascending order.

```js
isSorted([1, 2, 3]); // ➞ true
isSorted([1, 3, 2]); // ➞ false
```

**Mental Hook:** Compare every `arr[i]` to `arr[i + 1]`.

---

## 🟡 Medium

### 5. Remove Duplicates
**Problem:** Return a new array with duplicates removed.

```js
removeDup([1, 2, 2, 3, 4, 4]); // ➞ [1, 2, 3, 4]
```

**Mental Hook:** Use `Set` or `.filter()` with index check.

---

### 6. Rotate Array by k steps
**Problem:** Rotate an array to the right by `k` steps.

```js
rotateArray([1, 2, 3, 4, 5], 2); // ➞ [4, 5, 1, 2, 3]
```

**Mental Hook:** Use `slice` and `concat`. Think about split-join logic.

---

### 7. Chunk Array
**Problem:** Split array into chunks of size n.

```js
chunk([1, 2, 3, 4, 5], 2); // ➞ [[1, 2], [3, 4], [5]]
```

**Mental Hook:** Loop and push `arr.slice(i, i + size)`.

---

## 🔴 Hard

### 8. Flatten a Nested Array
**Problem:** Turn a deeply nested array into a flat array.

```js
flatten([1, [2, [3, 4], 5]]); // ➞ [1, 2, 3, 4, 5]
```

**Mental Hook:** Use recursion or `flat(Infinity)` in modern JS.

---

### 9. Find Pair with Target Sum
**Problem:** Return indices of two numbers such that they add up to a target.

```js
pairSum([2, 7, 11, 15], 9); // ➞ [0, 1]
```

**Mental Hook:** Use a hash map to track complement values.

---

### 10. Longest Consecutive Sequence
**Problem:** Find the longest sequence of consecutive numbers.

```js
longestConsec([100, 4, 200, 1, 3, 2]); // ➞ 4
```

**Mental Hook:** Use a `Set`, then check length by moving forward from each unvisited number.

---

Happy practicing! 🧠 The goal is not just to solve, but to understand *how to think* in problems.