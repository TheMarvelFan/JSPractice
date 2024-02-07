// const myArr = [];
// %DebugPrint(myArr); // this exact code runs inside the D8-debug engine

// Two types of Arrays in JS:
// 1. Continuous
// 2. Holey

// Both have these three further subdivisions:
// (i) SMI (small integer)
// (ii) Packed Elements
// (iii) Double (float, string, function)

const arrTwo = [1, 2, 3, 4, 5]; // Packed SMI Elements - Can have only numbers

arrTwo.push(6.0); // Here, it becomes PACKED_DOUBLE_ELEMENTS
// Note that deleting this pushed value does not turn the array back to PACKED_SMI

arrTwo.push("3"); // Becomes PACKED_ELEMENTS

arrTwo[10] = 11; // HOLEY_ELEMENTS because gap inside the array

console.log(arrTwo); // displays: [ 1, 2, 3, 4, 5, 6, '3', <3 empty items>, 11 ]

console.log(arrTwo.length); // 11
console.log(arrTwo[9]); // undefined - this undefined is a ver costly optimization
// It checks for OutOfBounds, which will pass in this case
// Then it checks if hasOwnProperty(arrTwo, 9); // checking the object for a property at key "9"
// Since this above returns undefined
// we check the prototype of Array hasOwnProperty(Object.prototype, 10)
// It checks the prototype hasOwnProperty(Object.prototype, 10)
// This hasOwnProperty check is the most expensive operation in JS

// Thus, holes are very expensive

const arrThree = [1, 2, 3, 4, 5];
console.log(arrThree[2]);

// In terms of optimization:
// SMI > DOUBLE, PACKED  (these are Continuous)
// H_SMI > H_DOUBLE > H_PACKED (these are Holey)

const arrFour = new Array(3);
// only 3 holes     HOLEY_SMI_ELEMENTS  // SMI is the default type of array

arrFour[0] = `23`; // HOLEY_ELEMENTS
arrFour[1] = `24`;
arrFour[2] = `25`;
// Once demoted, it cannot be promoted back to the previous type

// The above process makes it highly unoptimized. The other way to do this is:
const arrFive = []; // SMI
arrFive.push('23'); // PACKED_ELEMENTS
arrFive.push('24');
arrFive.push('25');

const arrSix = [];
arrSix.push(Infinity); // PACKED_DOUBLE
arrSix.push(NaN); // PACKED_DOUBLE