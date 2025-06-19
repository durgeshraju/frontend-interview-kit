# 06 – Conditionals Coding Practice

A collection of JavaScript coding problems focused on mastering conditionals – `if`, `else if`, `else`, `switch`, ternary, and logical operators.

---

### 🧠 Mental Hook
Conditionals let your code make decisions. Think of them as traffic lights for logic: green (go), yellow (maybe), red (stop).

---

### 🧩 Problem 1: Is the Number Even or Odd?

**Task:**  
Write a function `isEvenOrOdd(num)` that returns `"Even"` if the number is even, and `"Odd"` if the number is odd.

```js
// Example:
isEvenOrOdd(3); // "Odd"
isEvenOrOdd(10); // "Even"
```

---

### 🧩 Problem 2: Grade Calculator

**Task:**  
Write a function `getGrade(score)` that returns a letter grade based on the score:
- 90 and above: "A"
- 80 to 89: "B"
- 70 to 79: "C"
- 60 to 69: "D"
- below 60: "F"

```js
// Example:
getGrade(85); // "B"
getGrade(52); // "F"
```

---

### 🧩 Problem 3: Traffic Signal Logic

**Task:**  
Write a function `trafficSignal(color)` that returns:
- `"Go"` if color is `"green"`
- `"Slow down"` if `"yellow"`
- `"Stop"` if `"red"`
- `"Invalid"` otherwise

```js
// Example:
trafficSignal("green"); // "Go"
```

---

### 🧩 Problem 4: Largest of Three Numbers

**Task:**  
Write a function `getLargest(a, b, c)` that returns the largest number among the three.

```js
// Example:
getLargest(4, 8, 2); // 8
```

---

### 🧩 Problem 5: Leap Year Checker

**Task:**  
Write a function `isLeapYear(year)` that returns `true` if it’s a leap year, otherwise `false`.

> A year is a leap year if:
> - divisible by 4 but not by 100 OR divisible by 400

```js
// Example:
isLeapYear(2020); // true
isLeapYear(1900); // false
```

---

### 🧩 Problem 6: Ternary Operator Practice

**Task:**  
Write a function `canVote(age)` that returns `"Yes"` if age >= 18, otherwise `"No"` using the ternary operator.

```js
// Example:
canVote(20); // "Yes"
```

---

### 🧩 Problem 7: Falsy Checker

**Task:**  
Write a function `isFalsy(value)` that checks if the value is falsy (`false`, `0`, `""`, `null`, `undefined`, `NaN`).

```js
// Example:
isFalsy(""); // true
isFalsy("hello"); // false
```

---

### 🧠 Pro Tip
Always test your conditionals with edge cases (like 0, null, empty string, negative numbers).

---

Happy practicing! 🧑‍💻