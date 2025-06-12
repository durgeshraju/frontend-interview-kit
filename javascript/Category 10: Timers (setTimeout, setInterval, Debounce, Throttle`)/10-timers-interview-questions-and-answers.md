
# 📘 10 – Timers: `setTimeout`, `setInterval`, Debounce & Throttle (Beginner to Expert)

Timers in JavaScript let us delay or repeatedly run code. Mastering them is key for tasks like animation, input handling, and performance optimization. Interviewers love to ask about these because they test both **timing control** and **function design**.

---

## ✅ Interview Questions & Detailed Answers (Simple + Expert Level)

---

### 1. What is `setTimeout()` in JavaScript?

**Explanation**:  
`setTimeout()` runs code **once after a delay**.

```js
setTimeout(() => {
  console.log("Runs after 2 seconds");
}, 2000);
```

- The delay is in **milliseconds**
- It doesn’t pause the whole program — it schedules the function to run later (non-blocking)

---

### 2. What is `setInterval()` in JavaScript?

**Explanation**:  
`setInterval()` runs code **repeatedly at intervals**.

```js
setInterval(() => {
  console.log("Runs every 3 seconds");
}, 3000);
```

- Keeps repeating forever until you stop it

---

### 3. How do you stop `setTimeout()` and `setInterval()`?

```js
const timeoutId = setTimeout(() => {}, 1000);
clearTimeout(timeoutId);

const intervalId = setInterval(() => {}, 1000);
clearInterval(intervalId);
```

---

### 4. Are `setTimeout` and `setInterval` accurate?

Not exactly. They are **not guaranteed to run at the exact time** due to:
- Browser thread limitations
- JavaScript being single-threaded

Delays can be longer under heavy load or complex operations.

---

### 5. What is **debouncing**?

**Definition**:  
Debounce waits until the user **stops** performing an action for a certain time before running a function.

✅ Use it to limit how often a function is run.

```js
function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}
```

**Use case**:  
Search input field – wait until the user stops typing before firing a search request.

```js
const handleInput = debounce(() => {
  console.log("Searching...");
}, 500);

input.addEventListener("input", handleInput);
```

---

### 6. What is **throttling**?

**Definition**:  
Throttle ensures a function **runs at most once every X milliseconds**, no matter how many times it is triggered.

✅ Use it to **control frequency** without skipping all intermediate events.

```js
function throttle(fn, limit) {
  let lastCall = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      fn.apply(this, args);
    }
  };
}
```

**Use case**:  
Limit how often a user can fire scroll events or resize events.

```js
const handleScroll = throttle(() => {
  console.log("Scrolled!");
}, 1000);

window.addEventListener("scroll", handleScroll);
```

---

### 7. Debounce vs Throttle – What’s the difference?

| Feature     | Debounce                              | Throttle                              |
|-------------|----------------------------------------|----------------------------------------|
| When it runs| After action **stops**                 | Every X milliseconds                   |
| Example     | Wait for user to stop typing           | Scroll event fires every 1000ms        |
| Control     | Delays execution until calm            | Limits execution to regular intervals  |

---

### 8. What happens if delay is 0 in `setTimeout()`?

```js
setTimeout(() => console.log("Hello"), 0);
console.log("World");
```

**Output**:
```
World
Hello
```

**Explanation**:  
Even with `0`, the function runs **after** the current execution (it goes into the event queue).

---

### 9. Can you nest `setTimeout()` for repeated behavior?

Yes! You can create a **recursive timeout** instead of using `setInterval`.

```js
function repeat() {
  console.log("Repeats every 1 second");
  setTimeout(repeat, 1000);
}
repeat();
```

**Advantage**: You can control the delay between each run **more precisely** than `setInterval`.

---

### 10. Is `setTimeout` synchronous or asynchronous?

`setTimeout()` is **asynchronous**.

- It schedules code to run **later**
- It uses the **Web APIs + Event Loop**
- The rest of the code continues to execute immediately

```js
console.log("Start");
setTimeout(() => console.log("Timeout"), 0);
console.log("End");
```

Output:
```
Start
End
Timeout
```

---
