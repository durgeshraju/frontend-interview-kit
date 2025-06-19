# JavaScript Runtime: Call Stack, Web APIs, Microtasks & Macrotasks – Interview Q&A

This section breaks down the JavaScript runtime and asynchronous behavior in a way that's simple, practical, and memorable – with real-world code examples.

---

## 🔹 1. What is the JavaScript Runtime Environment?

The JavaScript runtime is the environment where JavaScript code is executed. It includes:
- The **Call Stack**
- The **Web APIs (Browser APIs)**
- The **Callback Queue (Macrotasks)**
- The **Microtask Queue (Promises, MutationObserver)**

### 🧠 Mental Hook:
_"Think of the runtime as a restaurant kitchen where the chef (call stack) prepares orders, helpers (Web APIs) take care of timers & network requests, and delivery staff (queues) bring the result back!"_

---

## 🔹 2. What is the Call Stack?

The **Call Stack** is a data structure that keeps track of function calls.

```js
function greet() {
  console.log("Hello!");
}
function sayHi() {
  greet();
}
sayHi();
```

### ✅ Output:
```
Hello!
```

### 🧠 Mental Hook:
_"Last In, First Out – like stacking plates!"_

---

## 🔹 3. What are Web APIs?

These are provided by the browser (not JavaScript itself) like `setTimeout`, `DOM`, `fetch`, `localStorage`.

```js
console.log("Start");
setTimeout(() => console.log("Timer done!"), 1000);
console.log("End");
```

### ✅ Output:
```
Start
End
Timer done!
```

### 🧠 Mental Hook:
_"Web APIs are your restaurant staff that take orders (like timers or AJAX) and notify you when ready!"_

---

## 🔹 4. What is the Event Loop?

It checks the call stack and the task queues (macrotasks & microtasks) and moves tasks when the call stack is empty.

---

## 🔹 5. What are Macrotasks?

These include:
- `setTimeout`
- `setInterval`
- `setImmediate` (Node.js)
- `MessageChannel`

---

## 🔹 6. What are Microtasks?

Microtasks include:
- `Promise.then/catch/finally`
- `MutationObserver`
- `queueMicrotask()`

```js
console.log("Start");
Promise.resolve().then(() => console.log("Microtask"));
setTimeout(() => console.log("Macrotask"), 0);
console.log("End");
```

### ✅ Output:
```
Start
End
Microtask
Macrotask
```

### 🧠 Mental Hook:
_"Microtasks get higher priority – like VIP orders in a restaurant!"_

---

## 🔹 7. Real-World Interview Example

**Q: Why does `Promise` callback execute before `setTimeout` even when both are async?**

### Example:

```js
console.log("1");
setTimeout(() => console.log("2"), 0);
Promise.resolve().then(() => console.log("3"));
console.log("4");
```

### ✅ Output:
```
1
4
3
2
```

**Reason:** Microtasks (`then`) run before Macrotasks (`setTimeout`).

---

## 🔹 8. Visual Diagram (Text Representation)

```
|------------------|
|   Call Stack     |
|------------------|
       ↓
|------------------|
|  Web APIs        |
|------------------|
       ↓
|------------------|    <- Microtask Queue (High priority)
|  Microtasks      |
|------------------|
       ↓
|------------------|    <- Macrotask Queue
|  setTimeout      |
|------------------|
```

---

## 🔹 9. Final Tip for Interviews

**Always remember the priority:**
1. Call Stack
2. Microtasks (Promises)
3. Macrotasks (setTimeout, etc.)

**Common Question:**
Why is `setTimeout(..., 0)` not executed immediately? Because it goes into macrotask queue.

---