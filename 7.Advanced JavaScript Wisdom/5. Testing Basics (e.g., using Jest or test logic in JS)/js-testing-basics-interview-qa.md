# 🧪 Topic 5: Testing Basics in JavaScript (with Jest and Logic-Based Testing)

This guide explains the **foundations of testing** in JavaScript for interviews—focusing on test logic, common tools like Jest, and how to answer testing-related questions confidently.

---

## ✅ Why Testing is Important

- Detects bugs early 🐛
- Ensures reliability and prevents regressions 🔄
- Improves code maintainability 🛠️

🧠 **Mental Hook:** “Code that isn’t tested is broken by default.”

---

## 🔹 Common Types of Tests

| Type             | Description |
|------------------|-------------|
| Unit Tests       | Test individual functions/components in isolation |
| Integration Tests | Test combined parts of the system (e.g., function calls API) |
| End-to-End Tests | Simulate real user flows in the browser (e.g., login form) |

---

## ✅ What is Jest?

> Jest is a JavaScript Testing Framework by Facebook that works with projects like React, Node.js, and vanilla JavaScript.

**Key Features:**
- Zero configuration
- Snapshot testing
- Easy mocking
- Fast parallel test runs

🧠 **Mental Hook:** “Jest makes JavaScript testing a joy.”

---

## 🔹 Sample Unit Test (with Jest)

### 🎯 Problem: Write a function to capitalize the first letter of a string.

```js
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
```

### ✅ Test using Jest

```js
test('capitalizes the first letter', () => {
  expect(capitalize('hello')).toBe('Hello');
});
```

---

## 🔍 Test Structure (AAA Pattern)

1. **Arrange**: Setup your data
2. **Act**: Call the function
3. **Assert**: Check the result

```js
test('adds numbers correctly', () => {
  // Arrange
  const a = 2;
  const b = 3;

  // Act
  const result = a + b;

  // Assert
  expect(result).toBe(5);
});
```

🧠 **Mental Hook:** “Arrange, Act, Assert — The 3A pattern of confidence!”

---

## 🔹 Mocking Functions

```js
const fetchData = jest.fn(() => Promise.resolve('data'));
test('fetchData gets called once', async () => {
  await fetchData();
  expect(fetchData).toHaveBeenCalledTimes(1);
});
```

---

## 🔹 What Interviewers May Ask

1. What is a unit test?
2. How would you test a function that calls an API?
3. What is mocking?
4. What are common testing libraries?
5. Can you write a test for a sorting function?

---

## 🧠 Mental Hooks Recap

- “Jest makes JS testing a joy.”
- “AAA – Arrange, Act, Assert.”
- “Code that isn’t tested is broken by default.”

---

## ✅ Summary

Testing is a **must-have** skill for frontend developers. Even basic understanding of Jest and unit testing can greatly improve your interview performance and code confidence.