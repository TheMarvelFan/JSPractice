let value = 3;
let negVal = -value;
// console.log(negVal); // usual

console.log(2 + "3" + 56 + 4); // Js concatenates number values to strings by default if it reads a plus operation anywhere, depending on position of plus
// the above does not perform arithmetic addition
// basically the moment when string is encountered at a "+" operation, js starts concatenating. But, as long as there is no string encountered, js
// performs standard addition
console.log("33" - true); // for this operation, 3 is converted to number value of 33, as is true (1)
console.log(2 + "3" - 33); // in this operation, 2 and 3 are concatenated as they should be, but then - is encountered and it is converted to int
// console.log(+true) // converts into 1 because of increment that was not performed
// cannot use ++ true (wow)
// console.log(+"") // gives 0
console.log("33" - "33"); // both converted to number
console.log("33" - 1 + 2 + "3"); // this is pretty linear. 33 is converted to num, -1 and +2 is done, then 3 is concatenated