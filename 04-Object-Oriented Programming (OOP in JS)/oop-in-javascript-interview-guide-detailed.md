
# 🧱 Object-Oriented Programming (OOP) in JavaScript – Interview Q&A

OOP (Object-Oriented Programming) helps you **structure code** around real-world objects using concepts like **classes, inheritance, encapsulation, and abstraction**.

This guide explains each concept in simple, clear terms with examples so it becomes part of your thinking.

---

## ✅ Q1: What is Object-Oriented Programming (OOP)?

**Answer:**  
OOP is a way to organize code by creating objects that bundle **data** (properties) and **behaviors** (methods) together. It’s like describing real-life entities (like a car or user) in code.

**Key OOP principles:**
- Encapsulation
- Inheritance
- Polymorphism
- Abstraction

---

## ✅ Q2: What is a class in JavaScript?

**Answer:**  
A `class` is a blueprint for creating objects. It defines how the object should look and behave.

```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hi, I'm ${this.name}`;
  }
}

const user = new Person("John", 30);
console.log(user.greet()); // Hi, I'm John
```

- `constructor` is called automatically when you create a new object with `new`.
- `this` refers to the object being created.

---

## ✅ Q3: What is encapsulation?

**Answer:**  
Encapsulation means **hiding internal details** and exposing only what's necessary.

- You protect some properties/methods from being accessed directly.
- In JS, private fields start with `#`.

```js
class BankAccount {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
    return `Deposited: $${amount}`;
  }

  getBalance() {
    return this.#balance;
  }
}

const acc = new BankAccount();
acc.deposit(100);
console.log(acc.getBalance()); // 100
// acc.#balance; // ❌ Error: Private field
```

---

## ✅ Q4: What is inheritance?

**Answer:**  
Inheritance means a **child class** can reuse code from a **parent class**.

```js
class Animal {
  speak() {
    return 'Generic sound';
  }
}

class Dog extends Animal {
  speak() {
    return 'Woof!';
  }
}

const dog = new Dog();
console.log(dog.speak()); // Woof!
```

- `extends` is used to inherit.
- `Dog` inherits from `Animal`.

---

## ✅ Q5: What is polymorphism?

**Answer:**  
Polymorphism means "**many forms**" — different classes can have methods with the **same name** but **different behavior**.

```js
class Shape {
  draw() {
    return "Drawing shape";
  }
}

class Circle extends Shape {
  draw() {
    return "Drawing circle";
  }
}

class Square extends Shape {
  draw() {
    return "Drawing square";
  }
}

const shapes = [new Circle(), new Square()];
shapes.forEach(s => console.log(s.draw()));
```

---

## ✅ Q6: What is abstraction?

**Answer:**  
Abstraction means **hiding the complexity** and showing only the essential details.

JS doesn’t have built-in `abstract` classes, but we can simulate them:

```js
class Vehicle {
  start() {
    throw new Error("start() must be implemented by subclass");
  }
}
```

Only subclasses should define how `start()` works.

---

## ✅ Q7: How do you use `super()`?

**Answer:**  
`super()` is used to:
- Call the **parent constructor** inside a child class
- Call the **parent’s method** from a child method

```js
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return `${this.name} makes a sound`;
  }
}

class Dog extends Animal {
  speak() {
    return super.speak() + " (Woof!)";
  }
}
```

---

## ✅ Q8: What’s the difference between constructor functions and classes?

| Feature         | Constructor Function          | Class Syntax (ES6)        |
|----------------|-------------------------------|---------------------------|
| Syntax Style    | Function-based                 | Cleaner & modern class     |
| Inheritance     | Manually via `Object.create()` | Uses `extends`, `super()`  |
| Private Fields  | Not supported                  | Supported via `#fieldName` |
| Readability     | Harder                         | Easier to maintain         |

---

## ✅ Q9: Can you override a parent method?

**Answer:**  
Yes, just define the method again in the child class.

```js
class Animal {
  sound() {
    return "Generic sound";
  }
}

class Cat extends Animal {
  sound() {
    return "Meow";
  }
}
```

---

## ✅ Q10: What are real-world uses of OOP in frontend?

**Answer:**
- Modeling UI components (e.g., class `Button`, `Modal`)
- Managing state (e.g., `User`, `Cart`, `Product`)
- Reusable logic (e.g., parent-child patterns in forms)
- Libraries like React use class-based components (legacy) and object patterns internally

---

## 🔄 Summary Tips

- Start with `class` and `constructor` to define objects.
- Use `extends` and `super()` for inheritance.
- Use `#` for private data and `throw` for abstraction.
- Override methods to enable polymorphism.
- Think in **real-world terms** — if it can be described as a "thing", it can be modeled with OOP.

---

Mastering OOP in JavaScript helps you build **structured, reusable, and scalable frontend applications** — it’s a must for mid-to-senior roles.
