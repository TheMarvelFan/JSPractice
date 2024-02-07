// JS has a prototypal behavior, just like java
// Looks at current class, parent class, grandparent class, and keeps going up till it cannot go any further, or the property it is looking for
// is found
// for e.g., when looking at an array object, it has access to a prototype that provides methods and properties specific to Array class
// however, this prototype also contains another prototype inside it, that has methods and properties of the Object class
// This is the topmost Class and cannot go any further up, so this is the last prototype
// Inside object class, prototype gets the value null

function multiplyBy5(num) {
    this.num = num;
    return num * 5;
}

multiplyBy5.power = 2;

console.log(multiplyBy5.power); // function is also an object, as well as a function !!!
console.log(multiplyBy5.prototype); // Prototype is empty, displays: {}
// This is a prototype of function object, just like any other object

function createUser(name, score) {
    this.name = name;
    this.score = score;
}

createUser.prototype.increment = function () {
    // score++; // which score to increase?
    this.score++; // this score to increase
}

createUser.prototype.printMe = function () {
    console.log(`Score is: ${this.score}`);
}

// const kush = createUser("Kush", 25); // causes undefined error when we do kush.printMe() as this property is not yet assigned to the object created by default
// To resolve this, "new" keyword is used
const kush = new createUser("Kush", 25);
const sumo = createUser("Sumo", 130);

// we never write array.prototype.map, or array.prototype.prototype.ObjectProperty. This is because JS provides internally this functionality
// to write array.ObjectProperty, and it searches each level of class to access this property wherever it is from

// kush.printMe(); // Error: Cannot read properties of undefined
kush.printMe();

// new keyword injects prototype into an object