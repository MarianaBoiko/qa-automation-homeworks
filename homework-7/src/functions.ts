// Sum numbers in an array
function sumArray(arr: (number | string)[]): number {
    let sum = 0;
    for (const item of arr) {
        if (typeof item === 'number') {
            sum += item as number;
        }
    }
    return sum;
}

// Creating two arrays
const stringArray: string[] = ['hello', 'world'];
const numberArray: number[] = [10, 20, 30, 40];

// Calling function and printing results
console.log('Sum of numberArray:', sumArray(numberArray));
console.log('Sum of stringArray:', sumArray(stringArray));
