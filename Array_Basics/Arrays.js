const array = [0, 1, 2, 3, "twenty two", null]; // zero indexed
const myArray = new Array("91", 91, -984326743627332); // arrays provide a prototype too

myArray.push(7);
console.log(myArray);
console.log(myArray.pop()); // removes the very last element in the array
myArray.unshift(80); // inserts an element to the beginning of the array, and each item shifts one step right, making computation time taking
console.log(myArray.shift()); // removes value from the very beginning of the array
console.log(myArray.includes(91)); // this is new
console.log(myArray.indexOf(9)); // yes this works in array
const newArray = myArray.join(); // converts array to string separated with the given separator
console.log(newArray);

const sliced = myArray.slice(2, 4); // here, a portion of the array is copy and pasted. End_ID is exclusive

const combined = [...sliced, ...myArray]; // standard for combining two arrays. "..." is known as spread operator
console.log(combined);

const anArray = myArray.concat(sliced); // returns a new array that is a combination of the arrays
console.log(anArray);

myArray.push(sliced);
console.log(myArray); // pushes the whole array inside an array, i.e., creates a 2-D array as it takes any type of data
const spliced = myArray.splice(2, 4); // here, a portion of the array is cut and pasted (original array is modified). End_ID is inclusive

const arr = [3, 4, [9, 98, 34, [], [84375, 38623, 32834, [943], 1], 45], 89];
const flatArr = arr.flat(Infinity); // turns the nested array into 1d array. Parameter requires depth level till which flatness is required. Passing infinity implies auto-detect depth, not standard
console.log(flatArr);

console.log(Array.isArray(flatArr)); // returns whether parameter is array or not
console.log(Array.isArray("abcd"));

const fromArr = Array.from("1234"); // creates and array of individual digits (interesting)
const anotherFrom = Array.from({name: "kushagra"}); // cannot directly convert object to array, as there needs to be specification for creating array from keys or values

console.log(fromArr + "\n" + anotherFrom);

let a1 = 10;
let a2 = 20;
let a3 = 30;

// console.log(Array.from(a1, a2, a3)); // gives TypeError
console.log(Array.of(a1, a2, a3)); // works