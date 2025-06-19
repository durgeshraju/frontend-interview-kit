# 08 – Scope & Closures: Coding Practice

Master scope and closures in JavaScript with these hands-on exercises. Strengthen your interview skills by understanding execution context and variable lifetime!

---

### 🧠 Problem 1: Function Scope

**Task**:  
Explain what will be logged and why.

```js
function testScope() {
  var x = 10;
  if (true) {
    var x = 20;
    console.log("Inside if:", x);
  }
  console.log("Outside if:", x);
}
testScope();
```

**Example Output**:
```
Inside if: 20
Outside if: 20
```

**Mental Hook**:  
`var` is **function-scoped**, not block-scoped. Redeclaring `x` inside `if` affects the outer `x`.

---

### 🧠 Problem 2: Block Scope

**Task**:  
Explain the output when using `let` instead of `var`.

```js
function blockScopeTest() {
  let x = 10;
  if (true) {
    let x = 20;
    console.log("Inside block:", x);
  }
  console.log("Outside block:", x);
}
blockScopeTest();
```

**Example Output**:
```
Inside block: 20
Outside block: 10
```

**Mental Hook**:  
`let` is **block-scoped**, so each `x` lives in its own block.

---

### 🧠 Problem 3: Lexical Scope

**Task**:  
Predict and explain the output.

```js
const outer = () => {
  const name = "Lexical";
  const inner = () => {
    console.log("Hello", name);
  };
  return inner;
};
const greet = outer();
greet();
```

**Example Output**:
```
Hello Lexical
```

**Mental Hook**:  
Functions carry the **scope chain** from where they are defined, not where they are called.

---

### 🧠 Problem 4: Basic Closure

**Task**:  
What will be printed? Why?

```js
function counter() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}
const inc = counter();
inc(); inc(); inc();
```

**Example Output**:
```
1
2
3
```

**Mental Hook**:  
Closures keep **access to outer variables** even after the function has returned.

---

### 🧠 Problem 5: Closure in Loops (Common Interview Trap)

**Task**:  
Fix the code to log `0, 1, 2` instead of `3, 3, 3`.

```js
for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 100);
}
```

**Fix**:
```js
for (let i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 100);
}
```

**Mental Hook**:  
`let` creates a **new block scope** for each iteration, preserving the current value.

---

Practice these to master how JavaScript handles scope and closures — a top interview favorite! ✅
