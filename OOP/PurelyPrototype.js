let name = "Kushagra     ";

console.log(name.length);
// Target: To create a property named "trueLength" that tells the actual length of all the strings ignoring the internal spaces

Object.prototype.kushagra = function () { // we can add properties to top level Object in JS
    console.log(`Kushagra is everywhere.`);
};

Array.prototype.heyKushagra = function () { // this property is now accessible to all arrays, but no other objects
    console.log("I say hello");
}

let something = ["oen", "tow"];

let someObject = {
    abcd: "abcd",
    efgh: "efgh",

    getSomething: function () {
        console.log(`Something is ${this.abcd}`);
    }
};
someObject.kushagra();

something.kushagra();

something.heyKushagra();

// someObject.heyKushagra(); // This object does not get the properties assigned only to Array

// Prototypal Inheritance in JS, before classes were available

const User = {
    name: "Some name",
    email: "something@abcd.com"
}

const Teacher = {
    makeVideo: true
}

const Assistant = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "Js Assignment",
    fullTime: true,
    __proto__: Assistant  // Now this object has access to all properties of Assistant
}

Teacher.__proto__ = TASupport; // can be mentioned outside the object block

Object.setPrototypeOf(Teacher, Assistant); // basically modifies the __proto__ as above, but this is standard new syntax

let anotherUsername = "MyNameIs     "

String.prototype.trueLength = function () {
    console.log(`${this}`);
    console.log(`True Length is ${this.trim().length}`);
}

anotherUsername.trueLength();

"        Kushagra        ".trueLength();
"Something".trueLength();