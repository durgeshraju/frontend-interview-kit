/*
6. Anagram Checker
Problem: Check whether two strings are anagrams.
Example: "listen", "silent" → true
Mental Hook: Sort both → Compare or use frequency map.
*/

/*
After converting to lowercase
Split each string into an array of characters
Sort the arrays
Join them back into strings
Then compare the results with ===
*/

function anagramChecker(str1, str2) {
  const str1Lower = str1.toLowerCase().split('');
  const str2Lower = str2.toLowerCase().split('');
  const sortedStr1Chars = str1Lower.sort();
  const sortedStr2Chars = str2Lower.sort();
  return sortedStr1Chars.join('') === sortedStr2Chars.join('');
}

console.log(anagramChecker('listen', 'silent'));
