let num1 = 10;
let num2 = 5;
let str = '5';

let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;
let quotient = num1 / num2;

console.log('Arithmetic operations on numbers:');
console.log('Sum:', sum);
console.log('Difference:', difference);
console.log('Product:', product);
console.log('Quotient:', quotient);

let sumWithString = num1 + str;
let productWithString = num1 * str;

console.log('\nArithmetic operations on number and string:');
console.log('Sum with string (concatenation):', sumWithString);
console.log('Product with string (implicit conversion):', productWithString);
