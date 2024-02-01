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
Object.freeze(user); // further changes to any values in this object won't be reflected, but error won't be thrown either
user.email = "abcd";
console.log(user);

// through constructor
// Object.create();