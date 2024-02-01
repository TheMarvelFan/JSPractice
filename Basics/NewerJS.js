// JS standard documentation: Ecmascript
// Otherwise mozilla's mdn

"use strict"; // specifies that the code inside this file is to be formatter according to the browser independent (new) version of js, rather than the old version

// alert("hello") // browser oriented syntax in js

// parsing is mainly similar to java

// Primitive data-types: (call by value) (stored in stack, same as in java)
// 1. number => range same as double. everything exceeding upper limit is converted to +infinity, lower limit is converted to -0
// 2. big int: same as BigInteger
// 3. string: both double and single quotes
// 4. boolean:
// 5. null: well, null (is of type object)
// 6. symbol: unique value creation
// 7. undefined: value not assigned yet, different from null

// Non-primitive (Reference) data-types:
// 1. Array (usual)
// 2. Objects (usual)
// 3. Functions (?)

console.log(typeof 12); // returns type of object
console.log(typeof null);
console.log(typeof(null)); // can be used as method too

// Use case of symbol:
let k = Symbol('20');
let l = Symbol('20');
console.log(k === l); // returns false as both are unique values
let g = 972483626472536n
// The 'n' at the end specifies datatype to be bigint (like long, float, double, etc)

const h = ["abcd", "efgh", "ijkl"];
h[0] = "a"; // this does not give error
// h = ["a"]; // this gives error

let ha = [1, 2, 3, 24, 90, 34, 50];
ha[0] = 34; // no error
ha = ["34"]; // no error
console.log(ha)

// Objects:
let obj = {
    name: "abcd",
    age: 23,
    group: "undefined",
    male: false
}
// Object in js is set of key value pairs stored inside curly braces

const myFunc = function () {
    console.log("Hello world!");
}
// stack and heap memories work the same way as java
// accessing variable in object using dot operator '.' is also the same
let specie = "humanabceygyafewfasdasd";
let job = new String("coder"); // object of wrapper class
// new keyword works the same as java
console.log(`Hi I am ${specie}, and I am a ${job}`); // placeholders
console.log(specie[0]); // character at 0th index
console.log(specie.__proto__); // whats a prototype
console.log(specie.length); // variable
// charAt also works in js
// string is 0-indexed in js
// indexOf also works in js
// most string methods are same as java like substring

// let another = specie.slice(0, -0); // prints no output
// let another = specie.slice(-2, 0); // prints nothing (no output)
// let another = specie.slice(2, -8); // prints from startId to length - abs(endId)
let another = specie.slice(-2, -8);
console.log(another);
// in url encoding, space is interpreted as "%20"
// string is also immutable in js
// STRING IN JS CAN BE A PRIMITIVE AS WELL AS AN OBJECT IN JS BECAUSE OF WRAPPER CLASS
// THE PRIMITIVE TYPE STRING IN JS IS IMMUTABLE, BUT
// THE STRING CREATED USING WRAPPER CLASS IN JS IS MUTABLE (CAN BE MODIFIED), AS ALL OBJECTS ARE MODIFIABLE IN JS (just like java)

