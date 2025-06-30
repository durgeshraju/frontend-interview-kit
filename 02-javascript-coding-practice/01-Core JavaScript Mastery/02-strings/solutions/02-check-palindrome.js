/*
2. Check for Palindrome
Problem: Determine whether a string is a palindrome.
Example: "madam" → true, "hello" → false
Mental Hook: A palindrome reads same forwards & backwards.
*/

// Approach 1: Using Array.from()

function palindromeWord(str) {
  let reversedStr = Array.from(str).reverse().join('');
  return str === reversedStr;
}

console.log('palindromeWord is:', palindromeWord('hello'));

// Approach 2: Using split('')

function palindromeWord(str) {
  let characters = str.split('');
  let reverseStr = characters.reverse().join('');
  return str === reverseStr;
}

console.log('palindromeWord is:', palindromeWord('madam'));

// Basically both works fine meaning gives the same result as a boolean value either true / false based on the string comparision check.
