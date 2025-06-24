/*
Problem 3: Is Variable Defined?
Description:
Write a function that checks whether a variable exists and is not undefined.

let definedVar = "hello";
console.log(isDefined(definedVar)); // true
console.log(isDefined(nonExistent)); // false

*/

/* Fix: Problem 3: Is Variable Defined */

function isDefined(varName) {
  try {
    return typeof eval(varName) !== 'undefined';
  } catch {
    return false;
  }
}

let definedVar = 'Hello Powerful Javascript!';
console.log(isDefined('definedVar'));
console.log(isDefined('nonExistentVar'));
