// Type conversion in js has been topic of many memes
let val = "33";
let newVal = Number(val); // Converting to number using constructor of class
// if there are values other than digits inside this val string, it will never throw an error, and it will convert into an object of type Number, but
// the value will always be the dreaded
// NaN

// if the val is null, then it will be converted into integer as 0
// if val is undefined
// again NaN

// conversion from boolean is 1 or 0 only

// console.log(newVal);

let b = "false"; // when converted to boolean, empty string returns false :|
// if string is not empty, string is converted into true as boolean
let num = 1; // if number is not 0, it is always true in boolean
console.log(Boolean(num));