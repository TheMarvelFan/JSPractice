// console.log("2" > 1);
// console.log("02" > 1);
// console.log(2 == "1");
console.log(null > 0); // false
console.log(null >= 0); // true (wtf)
// comparison operators (<, >, <=, >=) convert the operands into equal format (null to number = 0) and then compare, so >= returns true
console.log(null == 0); // false
// equality operators (==, !=) do not convert, so they return false
console.log(undefined == null) // returns true
console.log(undefined <= null); // returns false

// === (triple equal to) is strict check
// checks values as well as data types of operands

console.log("2" == 2) // true
console.log("2" === 2); // false
