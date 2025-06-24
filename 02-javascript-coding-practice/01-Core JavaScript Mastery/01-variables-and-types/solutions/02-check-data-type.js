/*
Problem 2: Type Checker
Description:
Write a function checkType(value) that returns the type of the value as a string.

checkType(123);         // 'number'
checkType("Hello");     // 'string'
checkType(null);        // 'null'
checkType(undefined);   // 'undefined'
checkType([]);          // 'array'
checkType({});          // 'object'
checkType(() => {});    // 'function'
🧪 Use typeof, Array.isArray(), and explicit null check.
*/

// -- Fix

function checkType(value) {
  if (value === null) return null;
  if (Array.isArray(value)) return 'array';
  return typeof value;
}
console.log(`List of DataType values checker below: 
    ${checkType(123)}    
    ${checkType('Hello')}
    ${checkType(null)}
    ${checkType(undefined)}
    ${checkType([])}
    ${checkType({})}
    ${checkType(() => {})}
`);
