// ### 3. Filter Even Numbers
// **Problem:** Return only even numbers from an array.

// ```js
// filterEven([1, 2, 3, 4]); // ➞ [2, 4]

// Solution 1

const filterEven = (nums) => nums.filter((num) => num % 2 === 0);
console.log('Even numbers in the are:', filterEven([1, 2, 3, 4]));