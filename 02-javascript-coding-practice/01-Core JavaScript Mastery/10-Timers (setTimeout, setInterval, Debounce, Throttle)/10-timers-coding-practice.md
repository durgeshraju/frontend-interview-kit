# 10 - Timers (setTimeout, setInterval, Debounce, Throttle) - Coding Practice

Each problem includes a clear explanation, real-world example, and a Mental Hook to help you remember it effectively.

---

### ✅ Problem 1: Basic setTimeout Usage

**Problem:** Write a function that logs "Hello after 2 seconds" using `setTimeout`.

**Example:**
```js
logAfterDelay(); // logs after 2s
```

**Mental Hook:** `setTimeout` is like a delayed alarm — it rings after the specified time.

---

### ✅ Problem 2: setInterval Counter

**Problem:** Write a counter using `setInterval` that logs numbers 1 to 5 with a 1-second interval.

**Example:**
```js
startCounter();
// logs: 1, 2, 3, 4, 5 (each after 1s)
```

**Mental Hook:** `setInterval` is like a repeated reminder every fixed time.

---

### ✅ Problem 3: Clear an Interval

**Problem:** Modify the previous problem to stop the interval automatically after printing 5.

**Mental Hook:** Use `clearInterval()` like hitting the "Stop" button on a timer.

---

### ✅ Problem 4: Debounce Implementation

**Problem:** Implement a debounce function that delays function execution until after a pause.

**Example:**
```js
const debounced = debounce(() => console.log("Debounced!"), 300);
debounced(); debounced(); debounced(); // Only logs once after 300ms
```

**Mental Hook:** Debounce waits for silence — like waiting for someone to stop typing before reacting.

---

### ✅ Problem 5: Throttle Implementation

**Problem:** Implement a throttle function that ensures a function executes at most once every delay period.

**Example:**
```js
const throttled = throttle(() => console.log("Throttled!"), 1000);
throttled(); throttled(); throttled(); // Only logs once per second
```

**Mental Hook:** Throttle is like a speed limiter — no matter how fast you hit the gas, it limits the speed.

---

### ✅ Bonus: Timer Quiz Console Log Order

**Problem:** Predict the output of this code:
```js
console.log("A");
setTimeout(() => console.log("B"), 0);
console.log("C");
```

**Expected Output:**
```
A
C
B
```

**Mental Hook:** Even `setTimeout(..., 0)` goes into the event queue — it's never truly instant.

---

Happy Practicing!
