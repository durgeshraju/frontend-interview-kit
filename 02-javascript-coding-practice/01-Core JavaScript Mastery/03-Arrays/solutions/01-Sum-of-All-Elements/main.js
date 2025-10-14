
// Write a function that returns the sum of all numbers in an array.

//const numbers = [1, 2, 3, 4];


/* 1. Modern way */
const sumOfArray = (...numbers) => numbers[0].reduce((acc, curr) => acc + curr);
console.log('Total Sum of Array is :', sumOfArray([1, 2, 3, 4]));

/* Traditional way */

const sumOfArrayElements = (arr) => {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {sum += arr[i]};
    return sum;
}

console.log('Total Sum is:', sumOfArrayElements([1, 2, 3, 4]));