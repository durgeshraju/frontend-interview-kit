/*
## 🧠 Problem 1: Swap Two Variables (Without Temp Variable)

**Description:**  
Swap the values of two variables `a` and `b` without using a temporary variable.

```js
let a = 5;
let b = 10;
console.log(a); // 10
console.log(b); // 5
```

🧪 *Think about arithmetic or destructuring techniques.*
*/

/* Fix #1 Applied using temp variabale */

let aNum = 5;
let bNum = 10;
let tempvariabale = aNum;
aNum = bNum;
bNum = tempvariabale;
console.log(
  `Swapped varibales is: What is aNum value now :${aNum} and What is B value now :${bNum}?`
);

/* Fix #2 Applied using variable destructuring */

let a = 10;
let b = 20;
[a, b] = [b, a];
console.log(
  `Swapped varibales is: What is A value now :${a} ?  and What is B value now :${b} ?`
);
