
# 📘 07 – Loops (JavaScript Interview Essentials – Simple & Detailed)

Loops are used to run the same block of code multiple times. They are essential for processing lists, repeating actions, and building logic in most real-world applications.

---

## ✅ Interview Questions & Detailed, Easy-to-Understand Answers

---

### 1. What are the different types of loops in JavaScript?

- `for`
- `while`
- `do...while`
- `for...of`
- `for...in`

Each loop type is suited for different situations.

---

### 2. How does a `for` loop work?

```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

**Explanation**:
- Starts at `i = 0`
- Runs while `i < 5`
- Increases `i` by 1 every time
- Stops when `i` reaches 5

Use it when you know how many times you want to loop.

---

### 3. How does a `while` loop work?

```js
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```

**Explanation**:
- Checks the condition **before** running the block
- If true, runs the code and checks again

Use when you don't know exactly how many times to loop.

---

### 4. How does a `do...while` loop work?

```js
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);
```

**Explanation**:
- Runs the code **first**, then checks the condition
- Runs **at least once**, even if the condition is false

---

### 5. What is a `for...of` loop used for?

```js
const fruits = ["apple", "banana", "cherry"];

for (let fruit of fruits) {
  console.log(fruit);
}
```

**Explanation**:
Use `for...of` to loop over **arrays**, **strings**, or anything iterable.

---

### 6. What is a `for...in` loop used for?

```js
const person = { name: "Alice", age: 30 };

for (let key in person) {
  console.log(key, person[key]);
}
```

**Explanation**:
Use `for...in` to loop over the **keys** of an object.

---

### 7. What is the difference between `for...in` and `for...of`?

| Feature         | `for...in`             | `for...of`                |
|----------------|------------------------|---------------------------|
| Use on         | Objects                | Arrays, strings, iterables|
| Loops over     | Keys/indexes           | Values                    |
| Example target | `{}`                   | `[]`, `"text"`, `Set`, etc.|

---

### 8. How do you break or skip a loop?

```js
for (let i = 0; i < 5; i++) {
  if (i === 3) break; // stops the loop
  if (i === 1) continue; // skips this round
  console.log(i);
}
```

**Explanation**:
- `break` stops the entire loop
- `continue` skips to the next loop iteration

---

### 9. How do you loop through an array?

```js
const nums = [10, 20, 30];

for (let i = 0; i < nums.length; i++) {
  console.log(nums[i]);
}

// OR
for (let num of nums) {
  console.log(num);
}
```

---

### 10. How can you loop through an object?

```js
const obj = { a: 1, b: 2 };

for (let key in obj) {
  console.log(key, obj[key]);
}
```

OR using:

```js
Object.keys(obj).forEach(key => {
  console.log(key, obj[key]);
});
```

---

### 11. What is an infinite loop and how to avoid it?

```js
while (true) {
  // Infinite loop unless there's a break
}
```

**Explanation**:
A loop that never ends unless you `break` it or fix the condition.  
Make sure your loop has an exit strategy.

---
