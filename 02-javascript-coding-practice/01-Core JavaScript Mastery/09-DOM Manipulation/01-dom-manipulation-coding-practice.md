# 09 - DOM Manipulation: Coding Practice

Practice problems to master working with the Document Object Model (DOM) in JavaScript.

---

## 🧠 Mental Hook:
Think of the DOM as a tree structure where every element is a node you can access and manipulate using JavaScript.

---

### 1. Access an Element by ID
**Problem:** Write a function that changes the text of an element with the ID `title` to `"Hello, DOM!"`.

**Example:**
```html
<h1 id="title">Original Title</h1>
```

**Expected JS Output:**
```javascript
document.getElementById("title").textContent = "Hello, DOM!";
```

---

### 2. Change Image Source
**Problem:** Change the `src` of an image with ID `hero-img` to a new image URL.

**Example:**
```javascript
document.getElementById("hero-img").src = "https://example.com/new-image.jpg";
```

**Mental Hook:** `.src` changes the image source just like changing the channel on your TV.

---

### 3. Toggle Class on Button Click
**Problem:** Create a function that toggles the `active` class on a div when a button is clicked.

**Example:**
```javascript
document.getElementById("toggle-btn").addEventListener("click", function () {
  document.getElementById("box").classList.toggle("active");
});
```

**Mental Hook:** Think of `classList.toggle()` like flipping a switch on and off.

---

### 4. Create and Append Element
**Problem:** Write code that creates a new list item `<li>New Item</li>` and appends it to an unordered list with ID `my-list`.

**Example:**
```javascript
const newItem = document.createElement("li");
newItem.textContent = "New Item";
document.getElementById("my-list").appendChild(newItem);
```

**Mental Hook:** `createElement` creates it, `appendChild` attaches it.

---

### 5. Remove an Element from DOM
**Problem:** Remove the paragraph with ID `remove-me` from the DOM.

**Example:**
```javascript
const element = document.getElementById("remove-me");
element.parentNode.removeChild(element);
```

**Mental Hook:** Think of this like pulling a sticky note off your screen.

---

### 6. Change Style Dynamically
**Problem:** Change the background color of an element with ID `box` to `blue`.

**Example:**
```javascript
document.getElementById("box").style.backgroundColor = "blue";
```

**Mental Hook:** Accessing `style` is like applying inline CSS via JS.

---

### 7. Event Delegation
**Problem:** Log the clicked item’s text from a parent `<ul>` when any of its `<li>` children are clicked.

**Example:**
```javascript
document.getElementById("parent-ul").addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    console.log(e.target.textContent);
  }
});
```

**Mental Hook:** One listener to rule them all (children included).

---

### 8. Input Field Value Handling
**Problem:** Capture and log the value of a text input field on every keystroke.

**Example:**
```javascript
document.getElementById("text-input").addEventListener("input", function (e) {
  console.log(e.target.value);
});
```

**Mental Hook:** This is how you track what users are typing in real-time.

---

Happy DOM coding! 🎯
