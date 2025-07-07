/*
5. First Non-Repeating Character
Problem: Find the first character in a string that does not repeat.
Example: "aabbcddeff" → "c"
Mental Hook: Use hashmap for frequency.
*/

function firstNonRepeatingChar(str) {
  for (let char of str) {
    if (str.indexOf(char) === str.lastIndexOf(char)) {
      return char;
    }
  }
  return null;
}

console.log(firstNonRepeatingChar('aabbcddeff'));
// It will return C  because a character’s first position and last position are the same, it means it's not repeated. So if both are equal… It means the character appears only one time in the string — not repeated.
