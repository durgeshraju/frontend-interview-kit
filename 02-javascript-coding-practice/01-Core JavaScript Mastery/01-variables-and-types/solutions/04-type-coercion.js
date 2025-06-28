/*
 Problem 4: Implicit vs Explicit Coercion
Description:
Predict and explain the output:

console.log(1 + "2");     // ?
console.log("5" - 2);     // ?
console.log(true + false); // ?
console.log(null == undefined); // ?
console.log(null === undefined); // ?

Understand type coercion rules in JS.

 */

console.log(1 + '2'); // Ans is 12
/*
Easy Rule to Remember:
In JavaScript, + means string join if one side is a string.
So: number + string → becomes string + string → joined together.
If you're using + and even one side is a string,
👉 JavaScript will treat it as string joining, not math.
*/
console.log('5' - 2); // The - operator only works with numbers, so JavaScript converts "5" (string) to 5 (number).  5 - 2 = 3
console.log(true + false);
/* Booleans in math become 1 or 0.
   In numeric context: true → 1, false → 0
*/
console.log(null == undefined); // true
/*
This is loose equality (==)
JS says: "null and undefined are kinda the same"
null == undefined is the only case where JS returns true between two different types.
*/
console.log(null === undefined); // false   -- Strict: types must also match
