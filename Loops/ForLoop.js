let arr = ["one", "two", "three"];

for (let i = 0; i <= arr.length; i++) {
    console.log(arr[i]);
}
// Displays output:
// one
// two
// three
// undefined

// JS does not throw ArrayOutOfBoundsException or any other error
// it displays undefined instead

// for of loop

const array = [1, 2, 3, 4, 5];

for (const val of array) {
    console.log(val);
}

const greeting = "Hello world!";

for (const char of greeting) {
    console.log(`Current char is ${char}`);
}

// this loop can iterate through any iterable object

// Maps

const map = new Map();
map.set(120, 30);
map.set("String", "Integer"); // this value is ignored
map.set("String", "AnotherInteger"); // this value is added
map.set(4, "String");

console.log(map);

for (const key of map) {
    console.log(key); // Prints that whole entry in the form of array
}

for (const [key, value] of map) { // we can separate keys and values
    console.log(`Key is: ${key} \t Value is ${value}`);
}

const obj = {
    "stuff1": "Some stuff",
    "stuff 2": "Some more stuff",
    "stufff f 3": "Yet more stuff",
    "eh im done now": "yeah so am I"
}

// for (const [key, value] of obj) { // cannot iterate through objects using for-of loop in JS
//     console.log(key);
// }

for (let key in obj) { // for-in loop works on objects
    console.log(`For key: ${key}, Value is: ${obj[key]}`);
}

// Trying to use for-of loop on array
const anArray = ["something", "something else", "one more thing", "yet another thing", "just this last thing", "and that is it"];
for (const key in anArray) { // It works
    console.log(`For key: ${key}, \t Value is: ${anArray[key]}`);
}

// the difference is
// For-of loop picks values directly. It can iterate through non-iterable data structures
// For-in loop picks keys. It cannot iterate through non-iterable data structures

// Trying to use for-in loop on map
for (const [key, value] in map) { // does not work
    console.log(`For key: ${key}, \t Value is: ${value}`);
}

for (const key in map) { // does not work
    console.log(`For key: ${key[0]}, \t Value is: ${key[1]}`);
}

const lingo = ["JS", "Java", "Python", "Ruby", "CPP", "C"];

lingo.forEach(
    function name (item) { // can be anonymous, or alternatively arrow function
        console.log(item);
    }
);

lingo.forEach((eachItem) => {
    console.log(eachItem);
});

lingo.forEach(printMe); // we do not have to create a function here. The definition can be elsewhere and the reference has to be passed here
// Note that this HAS TO BE A REFERENCE, and NOT AND EXECUTION CALL (no '()' parentheses after function name)

function printMe(item) {
    console.log(item);
}

lingo.forEach((item, index, array) => { // all the properties mentioned in these parameters are accessible by the forEach method
    console.log(item + " " + index + " " + array);
});

const arrayOfObjs = [
    {
        name: "JavaScript",
        extension: ".js"
    },
    {
        name: "Java",
        extension: ".java"
    },
    {
        name: "Python",
        extension: ".py"
    }
];

console.log();

arrayOfObjs.forEach((item) => {
    console.log(`Name of language: ${item.name}, \t and it is saved with the file extension: ${item.extension}`);
});