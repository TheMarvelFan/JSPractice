// object creation: as literal, as constructor

// through literal

const sym1 = Symbol("key1");
const sym2 = Symbol("key2");

const user = {
    name: "Kushagra", // objects is collection of keys and values
    age: 21,
    [sym1]: "sup", // syntax for using symbol as key. Without square brackets it will be interpreted as string, as are all the keys present here
    "key name": "value",
    "key": "value", // this can be accessed using dot operator
    location: "Lucknow",
    email: "something@abcd.com",
    isLoggedIn: true,
    lastLogin: ["Mon", "Tue"]
};

console.log(user.email); // both are
console.log(user["email"]); // same
console.log(user["key name"]); // cannot access space separated string key using '.' (dot operator)
console.log(user[sym1]);

user.age = 23;
// Object.freeze(user); // further changes to any values in this object won't be reflected, but error won't be thrown either
user.email = "abcd";
console.log(user);

user.greeting = function () {
    console.log("Hello world!"); // function is a non-primitive datatype, so greeting is of type function
}
user.greeting2 = function () {
    console.log(`Hello ${this.name}`); // function is a non-primitive datatype, so greeting is of type function
    // use of "this" keyword is the same as java
    // console.log("Hello ${this.name}"); // note that this does not allow string interpolation, i.e., using placeholder for objects. Quotes will convert everything to string blindly
}

console.log(user.greeting); // displays output: [Function (anonymous)]
// function has not been executed, only its reference has been returned

console.log(user.greeting()); // displays output:  Hello World! \n undefined

const obj = new Object();

obj.id = "abcd";
obj.name = "FirstName"
obj.isLoggedIn = true;

console.log(obj); // displays {} (empty object)

const regularUser = {
    email: "something@abcd.com",
    name: {
        username: {
            firstName: "Kushagra",
            lastName: "Nigam"
        }
    }
}

console.log(regularUser.name.username.lastName);
// console.log(regularUser.name?.username.lastName); // the question mark is used as a boolean check, i.e., if the name object is not null, only then access it

const obj1 = {
    1: "a", 2: "b"
};
const obj2 = {
    3: "a", 4: "e"
};
const obj3 = {obj1, obj2}; // creates nested object, not a flat one

// const obj4 = Object.assign(obj1, obj2); // creates a flat object of all keys and values present inside the objects

// the above statement creates a new object to store these values, but it also modifies obj1 by adding values from all other objects to it
// to prevent this, we can do it like this:

const obj4 = Object.assign({}, obj1, obj2);

// now, the values from all other objects are stored in the empty object, and obj1 is not modified

const obj5 = {...obj2, ...obj1}; // easiest

console.log(obj1);
console.log(obj5);

// equivalent to "const obj = {};"

const objects = [
    {
        id: 1,
        email: "something@somthing.com"
    },
    {
        id: 2,
        email: "something@somthing.com"
    },
    {
        id: 3,
        email: "something@somthing.com"
    },
    {
        id: 4,
        email: "something@somthing.com"
    },
    {
        id: 5,
        email: "something@somthing.com"
    }
]

// below just like method of the Map class in java
console.log(Object.keys(user)); // creates an array of all the keys
console.log(Object.values(user)); // creates an array of all the values
console.log(Object.entries(user)); // creates a 2d array of keys and values

const confirmationPos = user.hasOwnProperty("isLoggedIn"); // returns whether an object has this key or not
const confirmationNeg = user.hasOwnProperty("isLoggedOut");

console.log(confirmationPos + "\n" + confirmationNeg);

// through constructor
// Object.create();