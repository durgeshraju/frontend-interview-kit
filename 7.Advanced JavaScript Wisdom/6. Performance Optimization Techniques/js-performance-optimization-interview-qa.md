
# 🚀 JavaScript Performance Optimization – Interview Q&A

A well-performing frontend is key to a great user experience. Below are some frequently asked **Performance Optimization** questions in JavaScript interviews, with simplified explanations for all levels.

---

## 1. ❓ What is performance optimization in JavaScript?

**Answer:**  
Performance optimization involves writing JavaScript code that executes efficiently with minimal memory usage and fast execution speed. It’s about improving rendering, responsiveness, and runtime performance.

---

## 2. ❓ Why is minimizing DOM manipulation important?

**Answer:**  
DOM manipulation is expensive in terms of performance because it causes reflow and repaint. Minimizing direct DOM access, batching DOM updates, or using virtual DOM (React) helps reduce performance overhead.

🧠 **Mental Hook:** Touching the DOM = Touching performance. Touch less, batch more.

---

## 3. ❓ What are some best practices to optimize JavaScript performance?

**Answer:**
- Minimize DOM access
- Use event delegation
- Debounce or throttle rapid events (scroll, resize, input)
- Load scripts asynchronously (`async`, `defer`)
- Use lazy loading for images/assets
- Avoid memory leaks
- Use `requestAnimationFrame` for animations
- Cache results where applicable (e.g., memoization)

---

## 4. ❓ What is debouncing and throttling?

**Answer:**  
- **Debouncing:** Ensures a function runs only after a pause (e.g., 300ms) from the last event call.
- **Throttling:** Limits a function to run at regular intervals, ignoring rapid triggers in between.

🧠 **Mental Hook:**  
Debounce = Wait till the typing stops.  
Throttle = Allow at steady intervals.

---

## 5. ❓ What is memory leak? How can it be prevented?

**Answer:**  
Memory leaks occur when memory that is no longer needed is not released. Common causes:
- Forgotten timers or intervals
- Detached DOM nodes still referenced
- Closures holding unnecessary references

**Prevention:**
- Clear intervals/timeouts properly
- Remove event listeners
- Nullify unused references

---

## 6. ❓ How can `requestAnimationFrame()` improve performance?

**Answer:**  
It allows animations to run in sync with browser refresh cycles (~60fps), ensuring smoother rendering than using `setInterval` or `setTimeout`.

---

## 7. ❓ What tools do you use to monitor performance?

**Answer:**
- Chrome DevTools: Performance tab, Memory tab, Lighthouse
- WebPageTest
- GTmetrix
- React Profiler (for React apps)

---

## 8. ❓ How does lazy loading help performance?

**Answer:**  
Lazy loading defers the loading of non-critical assets (like images, videos, scripts) until they’re needed. This reduces initial load time and improves perceived speed.

---

## 9. ❓ What are some JavaScript code-level optimizations?

**Answer:**
- Avoid global variables
- Use `const` and `let` correctly
- Minify & bundle files
- Prefer native methods (`map`, `filter`) over loops where possible
- Reduce function complexity (single responsibility)

---

## 10. ❓ What is Time to Interactive (TTI) and how to improve it?

**Answer:**  
TTI is the time taken for a page to become fully interactive. To improve:
- Reduce JavaScript bundle size
- Defer non-critical scripts
- Minimize main-thread work
- Optimize fonts and 3rd-party scripts

---

## ✅ Summary Cheat Sheet

| Technique                  | Benefit                        |
|---------------------------|--------------------------------|
| Debounce/Throttle         | Reduce rapid event load        |
| Lazy Loading              | Faster initial page load       |
| requestAnimationFrame     | Smooth animations              |
| Code Splitting            | Smaller JS bundles             |
| Event Delegation          | Efficient DOM event handling   |
| Memory Management         | Avoid leaks, save resources    |

