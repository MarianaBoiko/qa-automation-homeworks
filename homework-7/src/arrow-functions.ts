// Arrow function to sum numbers in an array
const calculateNumberSum = (inputArray: (number | string)[]): number =>
    inputArray.reduce((total: number, element: number | string) => (typeof element === 'number' ? total + element : total), 0);

const textArray = ['pizza', 'pasta'];
const valuesArray = [5, 15, 25, 35];

// Calling function and printing results
console.log('Sum of valuesArray:', calculateNumberSum(valuesArray));
console.log('Sum of textArray:', calculateNumberSum(textArray)); // Should return 0
