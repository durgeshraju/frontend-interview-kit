/*
10. String Compression
Problem: Implement basic string compression using the counts of repeated characters.
Example: "aabcccccaaa" → "a2b1c5a3"
Mental Hook: Loop + track char + counter.*/

function strCompression(str) {
  let compressed = '';
  let count = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      compressed += str[i] + count;
      count = 1;
    }
  }
  return compressed;
}

console.log(strCompression('hello'));
