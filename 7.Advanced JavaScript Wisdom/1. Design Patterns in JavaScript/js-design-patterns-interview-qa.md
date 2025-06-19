# 🧠 Design Patterns in JavaScript – Interview Q&A (Beginner to Advanced)

A collection of the most commonly asked interview questions related to **Design Patterns in JavaScript**, explained in a simple, clear, and memorable way.

---

## 🔹 1. What are Design Patterns?

**Answer:**  
Design patterns are proven, reusable solutions to commonly occurring problems in software design. They provide templates on how to structure code effectively and are not actual pieces of code, but guidelines.

---

## 🔹 2. Why are Design Patterns important in JavaScript?

**Answer:**  
- They improve code **readability**, **maintainability**, and **scalability**.  
- Encourage **best practices** and **modular design**.  
- They’re particularly useful in large codebases and applications following OOP or component-based architecture (like React, Angular, etc.).

---

## 🔹 3. What are the most common JavaScript Design Patterns?

| Pattern Type       | Examples                          |
|--------------------|-----------------------------------|
| **Creational**     | Constructor, Factory, Singleton   |
| **Structural**     | Module, Decorator, Proxy          |
| **Behavioral**     | Observer, Strategy, Command       |

---

## 🔹 4. Explain the Constructor Pattern with an example.

**Answer:**  
It helps create multiple instances of an object with the same structure.

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const john = new Person("John", 30);
```

🧠 **Mental Hook:** Think of a **constructor as a blueprint** for creating new objects.

---

## 🔹 5. What is the Module Pattern?

**Answer:**  
It encapsulates related variables and functions in a single scope using closures.

```js
const Counter = (function () {
  let count = 0;
  return {
    increment: () => ++count,
    reset: () => (count = 0),
    get: () => count
  };
})();
```

🧠 **Mental Hook:** Think of it like a **private vault** – secure and self-contained.

---

## 🔹 6. What is the Singleton Pattern?

**Answer:**  
Ensures a class has only one instance and provides a global point of access to it.

```js
const Singleton = (function () {
  let instance;
  function createInstance() {
    return { id: Date.now() };
  }
  return {
    getInstance: function () {
      if (!instance) instance = createInstance();
      return instance;
    }
  };
})();
```

🧠 **Mental Hook:** Only **one CEO** exists in a company – that’s your Singleton.

---

## 🔹 7. What is the Factory Pattern?

**Answer:**  
Provides a way to create objects without specifying the exact class.

```js
function CarFactory(type) {
  switch (type) {
    case 'SUV': return { type: 'SUV', wheels: 4 };
    case 'Truck': return { type: 'Truck', wheels: 6 };
    default: return { type: 'Sedan', wheels: 4 };
  }
}
```

🧠 **Mental Hook:** Like a **pizza shop** – different pizzas made from one place.

---

## 🔹 8. What is the Observer Pattern?

**Answer:**  
A subject maintains a list of observers and notifies them automatically of any state changes.

```js
class Subject {
  constructor() {
    this.observers = [];
  }
  subscribe(fn) {
    this.observers.push(fn);
  }
  notify(data) {
    this.observers.forEach(fn => fn(data));
  }
}
```

🧠 **Mental Hook:** Think **YouTube Subscribers** – notify everyone when something new is posted.

---

## 🔹 9. Difference between Strategy and Command Pattern?

| Feature       | Strategy Pattern                  | Command Pattern                         |
|---------------|----------------------------------|------------------------------------------|
| Purpose       | Switch behavior dynamically       | Encapsulate requests as objects          |
| Example       | Sorting strategies (by name/date) | Undo/Redo functionality, macros          |

---

## 🔹 10. Real-life Example: Observer in JavaScript

```js
const button = document.querySelector("button");

function onClickHandler() {
  console.log("Button clicked!");
}

button.addEventListener("click", onClickHandler);
```

🧠 **Mental Hook:** **DOM events** are built on Observer Pattern!

---

## ✅ Summary

Design patterns are **interview favorites** because they:
- Show your understanding of **architecture**
- Help structure scalable, maintainable code
- Reflect **real-world thinking**

Master the logic behind them, not just the syntax.
