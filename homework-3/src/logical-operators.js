let num = 10;
let str = '10';
let bool = true;

let isEqual = num == str;
let isStrictEqual = num === str;
let isGreater = num > 5;
let logicalAnd = bool && isGreater;
let logicalOr = bool || !isStrictEqual;
let logicalNot = !bool;

console.log('Logical operations:');
console.log('Is equal (loose):', isEqual);
console.log('Is strictly equal:', isStrictEqual);
console.log('Is greater than 5:', isGreater);
console.log('Is logical AND:', logicalAnd);
console.log('Is logical OR:', logicalOr);
console.log('Is logical NOT:', logicalNot);
