const bal = new Number(100);
console.log(bal); // displays: [Number: 100]
// specifies that the value is an object of type number

const score = 200;
console.log(score); // displays: 200
console.log(bal.toFixed(3)); // displays number with specified decimal places, i.e., "100.000"

const anotherNumber = 394.98237423
// console.log(anotherNumber.toPrecision(2)); // displays: 3.9e+2
// console.log(anotherNumber.toPrecision(3)); // displays: 395
// console.log(anotherNumber.toPrecision(4)); // displays: 395.0
console.log(anotherNumber.toPrecision(5)); // displays: 394.98
// this method is sort of like math.ceil, unless we are dealing with numbers that don't have decimal values
// then it displays output in scientific format
const large = 1000000000;
console.log(large.toLocaleString()); // used to format number (add commas): 1,00,00,00,000
console.log(large.toLocaleString('en-US')); // pass argument to specify english format: 1,000,000,000

// Math library is pretty much same as java
// we can use '**' to define power
console.log(4 ** 0.5); // nice
console.log(Math.random()); // always displays value between 0 and 1
console.log(Math.floor(Math.random() * 10)); // displays value between 0 and 10 (inclusive)

// To get a random value between an upper and lower limit
let max = 20;
let min = 10;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
