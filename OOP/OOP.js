const user = {
    username: "Kushagra",
    loginCount : 10,
    signedIn : true,

    getUserDetails: function () {
        console.log(`Got User Details from database`);
        console.log(`Username: ${this.username}`); // "this" keyword is necessary here, as without it, the object doesn't
        // know which variable is being talked about here
        console.log(this);
    }
}; // this is an object literal, basic unit of OOP

console.log(user["signedIn"]);
console.log(user.getUserDetails());

function anotherUser(username, loginCount, isLoggedIn) {
    this.username = username; // This is the same use case as Java
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    this.greeting = () => {
        console.log(`Welcome, ${this.username}`);
    };

    // return this; // even if the object is not returned explicitly, it is implicitly passed on to the variable inside which function is called
}

const userOne = anotherUser("Kushagra", 12, true);
const userTwo = anotherUser("Sumo", 25, false);

console.log(userOne); // Values are overwritten if we use it like this

const userThree = new anotherUser("Abcd", 24, false);
const userFour = new anotherUser("Abba", 10, true);

console.log(userThree); // now values are not overwritten, and all the extra clutter included in the object due to node environment is removed
// Note that no class or constructor has been written yet, and still "new" keyword works

console.log(userThree.constructor); // Prints the reference of the function that was used to create this object

// instanceof keyword is the same as in java
