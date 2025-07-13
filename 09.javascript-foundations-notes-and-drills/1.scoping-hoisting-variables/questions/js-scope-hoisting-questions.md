
# JavaScript Variables, Scoping & Hoisting Practice Questions

### Question 1
```js
console.log(name);
var name = "Jhon";
```

---

### Question 2
```js
console.log(age);
let age = 37;
```

---

### Question 3
```js
var city = "KL";

function test() {
  console.log(city);
  var city = "Penang";
}

test();
```

---

### Question 4
```js
function greet() {
  console.log(message);
  var message = "Hello!";
}

greet();
```

---

### Question 5
```js
console.log(typeof myVar);
let myVar = "Hi!";
```

---

### Question 6
```js
{
  let a = 10;
  {
    var a = 20;
  }
}
console.log(a);
```

---

### Question 7
```js
var a = 5;

function test() {
  if (true) {
    var a = 10;
    let b = 20;
    const c = 30;
  }

  console.log(a);
  // console.log(b);
  // console.log(c);
}

test();
```

---

### Question 8
```js
function outer() {
  var x = 1;

  function inner() {
    console.log(x);
    var x = 2;
  }

  inner();
}

outer();
```

---

### Question 9
```js
function show() {
  console.log(num);
  if (false) {
    var num = 100;
  }
  console.log(num);
}

show();
```

---

### Question 10
```js
var a = 1;

function foo() {
  console.log(a);
  var a = 2;
  console.log(a);
}

foo();
console.log(a);
```
