// String array
const stringArray = ['pizza', 'pasta', 'salad'];
// Number array
const numberArray = [10, 20, 30, 40];
// Boolean array
const booleanArray = [true, false, true, false];
// Any type array (mixed types)
const mixedArray = ['hello', 42, true, { key: 'value' }];

// Using forEach() - printing each element
stringArray.forEach((item) => console.log('String:', item));
numberArray.forEach((num) => console.log('Number:', num));
booleanArray.forEach((bool) => console.log('Boolean:', bool));
mixedArray.forEach((element) => console.log('Mixed:', element));

// Using map() - creating a new array with modified values
const numberArraySquared = numberArray.map((num) => num * num);
console.log('Squared Numbers:', numberArraySquared);

const upperCaseStrings = stringArray.map((str) => str.toUpperCase());
console.log('Uppercase Strings:', upperCaseStrings);
