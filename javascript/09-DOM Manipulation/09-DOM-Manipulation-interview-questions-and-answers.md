
# 📘 09 – DOM Manipulation (JavaScript Interview Essentials – Beginner to Expert)

DOM (Document Object Model) manipulation is how JavaScript interacts with the web page. It allows you to select elements, change content, update styles, and respond to user actions.

This category is important in interviews because it shows how well you understand how JavaScript works in the browser.

---

## ✅ Interview Questions & Detailed Answers (Simple + Expert Level)

---

### 1. What is the DOM?

**Explanation**:  
DOM stands for **Document Object Model**. It is a tree-like structure that represents the content of an HTML page.

Every tag becomes a node (object), and JavaScript can use this structure to:
- Select elements
- Change styles and content
- Add or remove HTML
- Handle events

---

### 2. How do you select elements in the DOM?

```js
document.getElementById("id");          // by ID
document.getElementsByClassName("cls"); // by class (HTMLCollection)
document.getElementsByTagName("p");     // by tag (HTMLCollection)
document.querySelector(".class");       // first match (CSS selector)
document.querySelectorAll(".class");    // all matches (NodeList)
```

**Best Practice**: Use `querySelector` and `querySelectorAll` for flexibility (like jQuery-style).

---

### 3. What is the difference between `innerText`, `textContent`, and `innerHTML`?

| Property      | What it does                                  | Includes HTML? | Affects Style? |
|---------------|-----------------------------------------------|----------------|----------------|
| `innerText`   | Returns visible text (ignores hidden text)     | ❌ No          | ✅ Yes          |
| `textContent` | Returns all text, even hidden ones             | ❌ No          | ❌ No           |
| `innerHTML`   | Returns or sets HTML content                   | ✅ Yes         | ✅ Yes          |

---

### 4. How do you create and add new elements to the DOM?

```js
const newDiv = document.createElement("div");
newDiv.textContent = "Hello World!";
document.body.appendChild(newDiv);
```

**Steps**:
1. Use `createElement()`
2. Set text or attributes
3. Use `appendChild()` or `insertBefore()` to add it

---

### 5. How do you remove an element from the DOM?

```js
const el = document.getElementById("myDiv");
el.remove(); // Modern way
```

Older method:

```js
el.parentNode.removeChild(el);
```

---

### 6. How do you change CSS styles using JavaScript?

```js
const box = document.querySelector(".box");
box.style.backgroundColor = "blue";
box.style.width = "100px";
```

**Note**: Style properties use camelCase like `backgroundColor`, not `background-color`.

---

### 7. How do you handle events (like clicks) in JavaScript?

```js
const btn = document.querySelector("button");

btn.addEventListener("click", function () {
  alert("Button clicked!");
});
```

- `addEventListener()` is the modern and preferred method.
- You can remove it using `removeEventListener()` if needed.

---

### 8. What is event delegation and why is it useful?

**Event Delegation** = Assigning a single event listener to a **parent** element to handle events for all its children.

```js
document.querySelector("ul").addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    console.log("Clicked:", e.target.textContent);
  }
});
```

**Why it's useful**:
- Better performance (fewer event listeners)
- Works with dynamically added elements

---

### 9. How do you toggle a class on an element?

```js
element.classList.toggle("active");
```

**Bonus**:
- `add()` – adds a class
- `remove()` – removes a class
- `contains()` – checks if a class exists

---

### 10. What's the difference between `append()` vs `appendChild()`?

| Method         | Accepts multiple nodes? | Accepts strings? | Returns value? |
|----------------|-------------------------|------------------|----------------|
| `append()`     | ✅ Yes                   | ✅ Yes            | ❌ No          |
| `appendChild()`| ❌ No (only 1 node)      | ❌ No             | ✅ Yes         |

```js
el.append("Hi", spanEl);       // ✅
el.appendChild(spanEl);        // ✅ only 1 node
```

---

### 11. How can you efficiently update the DOM?

**Avoid** frequent DOM updates inside loops.

```js
// Bad
items.forEach(item => {
  const el = document.createElement("li");
  el.textContent = item;
  list.appendChild(el);
});

// Better
const fragment = document.createDocumentFragment();
items.forEach(item => {
  const el = document.createElement("li");
  el.textContent = item;
  fragment.appendChild(el);
});
list.appendChild(fragment);
```

Use `DocumentFragment` to reduce reflows and repainting.

---

### 12. How do you get and set element attributes?

```js
el.getAttribute("href");
el.setAttribute("src", "new-image.jpg");
el.removeAttribute("disabled");
```

---

### 13. How to find the parent or child of an element?

```js
el.parentElement
el.children
el.firstElementChild
el.lastElementChild
el.nextElementSibling
```

These help you **traverse** the DOM tree.

---

