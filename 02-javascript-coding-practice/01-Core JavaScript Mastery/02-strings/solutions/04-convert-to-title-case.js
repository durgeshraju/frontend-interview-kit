/*
4. Convert to Title Case
Problem: Convert a string to title case (first letter capitalized).
Example: "hello world" → "Hello World"
Mental Hook: Split → Capitalize first → Join
*/

/* Approach 1 */

const str = 'hello world';
const words = str.split(' ');
const firstLetter = words[0].charAt(0).toUpperCase();
const secondLetter = words[1].charAt(0).toUpperCase();
const wordOne = firstLetter + words[0].slice(1);
const wordTwo = secondLetter + words[1].slice(1);
const finalStrOutput = wordOne + ' ' + wordTwo;
console.log(finalStrOutput);
