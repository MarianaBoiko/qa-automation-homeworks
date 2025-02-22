// Arrow function to sum numbers in an array
const calculateSum = (inputArray: (number | string)[]): number =>
    inputArray.reduce((total: number, element: number | string) => (typeof element === 'number' ? total + element : total), 0);

const textArray: string[] = ['pizza', 'pasta'];
const valuesArray: number[] = [5, 15, 25, 35];

// Calling function and printing results
console.log('Sum of valuesArray:', calculateSum(valuesArray));
console.log('Sum of textArray:', calculateSum(textArray)); // Should return 0
