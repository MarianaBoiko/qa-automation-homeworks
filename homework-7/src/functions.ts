// Sum numbers in an array
function sumNumberArray(arr: (number | string)[]): number {
    let sum = 0;
    for (const item of arr) {
        if (typeof item === 'number') {
            sum += item as number;
        }
    }
    return sum;
}

// Creating two arrays
const stringArray = ['hello', 'world'];
const numberArray = [10, 20, 30, 40];

// Calling function and printing results
console.log('Sum of numberArray:', sumNumberArray(numberArray));
console.log('Sum of stringArray:', sumNumberArray(stringArray));
