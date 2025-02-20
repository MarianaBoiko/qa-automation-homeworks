// Arrow function to sum numbers in an array
const sumArray = (arr) => arr.reduce((sum, num) => (typeof num === 'number' ? sum + num : sum), 0);

const stringArray = ['pizza', 'pasta'];
const numberArray = [5, 15, 25, 35];

// Calling function and printing results
console.log('Sum of numberArray:', sumArray(numberArray));
console.log('Sum of stringArray:', sumArray(stringArray)); // Should return 0
