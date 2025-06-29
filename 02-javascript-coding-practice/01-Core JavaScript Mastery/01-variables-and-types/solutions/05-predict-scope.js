/*
Problem 5: Scope Prediction
Description:
What will the output be and why?

var a = 10;
(function () {
  console.log(a);
  var a = 5;
})();
Expected Output: ?
🧠 Hoisting-related question: understand how var behaves inside functions.
*/

var a = 10;
(function () {
  console.log(a);
  var a = 5;
})();

// Ans is undefined, let's check step by step

/**
 * 1. `var a = 10;` — a global variable is declared and assigned the value 10.
 * 2. `(function () { ... })();` — this is an **anonymous function expression**
 *    immediately invoked (IIFE).
 * 3. Inside the function, `console.log(a);` is called **before** the inner `var a = 5;`.
 *    Because of **hoisting**, JavaScript moves the declaration `var a;` to the top of the function scope,
 *    but it doesn't assign the value yet.
 * 4. So during `console.log(a);`, the local `a` exists, but it's `undefined` at that point.
 *    Only **after** that, `a = 5;` is assigned — but too late for the console.log.
 * 5. That's why the output is `undefined`.
 */
