// Function to sum numbers in an array
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            sum += arr[i];
        }
    }
    return sum;
}

// Creating two arrays
const stringArray = ['hello', 'world'];
const numberArray = [10, 20, 30, 40];

// Calling function and printing results
console.log('Sum of numberArray:', sumArray(numberArray));
console.log('Sum of stringArray:', sumArray(stringArray));
