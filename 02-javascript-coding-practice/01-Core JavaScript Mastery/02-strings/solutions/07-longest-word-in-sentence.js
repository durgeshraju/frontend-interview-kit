/*
7. Longest Word in Sentence
Problem: Return the longest word in a sentence.
Example: "Frontend engineers rock" → "engineers"
Mental Hook: Split → Track longest length.
*/

// Approach 1

const strSentence = 'Frontend engineers rock';
const word = strSentence.split(' '); // This splits the sentence into words
let longest = '';

for (let i = 0; i < word.length; i++) {
  if (word[i].length > longest.length) {
    longest = word[i]; //If the current word is longer than my saved one, replace it!"
  }
}
console.log(longest);
