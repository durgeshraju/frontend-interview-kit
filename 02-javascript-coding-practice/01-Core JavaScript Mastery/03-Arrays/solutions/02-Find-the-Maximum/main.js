

// ### 2. Find the Maximum
// **Problem:** Return the largest number from a given array.

// ```js
// getMax([1, 5, 2, 9, 3]); // ➞ 9
// ```


// Solution #1

const getMaxNumber = arr => Math.max(...arr)
console.log('The getMaxNumber() largest number in the array is:', getMaxNumber([1, 5, 2, 9, 3]));


// Solution #2

const getBiggestNumber = (arr) => {
    let maxValue = arr[0];
    for(let i = 1; i < arr.length; i++ ){                
        if(arr[i] > maxValue){
            maxValue = arr[i]
        }
    }
    return maxValue;
}

console.log('The getBiggestNumber() largest number in the array is:', getBiggestNumber([1, 3, 7, 15, 6]));