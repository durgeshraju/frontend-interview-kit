/**
    1. Reverse a String
    Problem: Write a function to reverse a given string.
    Example: "hello" → "olleh"
    Mental Hook: Think about converting to array → reverse → join.
 */

// 1 Problem has been solved using normal function
function reverseString(str) {
  return Array.from(str).reverse().join('');
}
console.log(reverseString('hello'));

// 2 Problem has been solved using arrow function
const reverseStringArrwFunc = (str) => Array.from(str).reverse().join('');
console.log(reverseStringArrwFunc('Arrow'));
