const user = {
    name: "Kushagra",
    value: 23,

    greeting: function () {
        console.log(`${this.name}, welcome to this site`);
        console.log(this); // prints values of objects, and reference of function
    }
}

user.greeting();
user.name = "Sumo"
user.greeting();

console.log(this); // gives result as empty object: {}
// this is only inside node environment

// inside the browser, "this" in global context returns a Window object

function arrow() {
    let username = "Kushagra";
    console.log(this);
    console.log(this.username);
}

arrow(); // shows a whole lot of values I don't yet understand

const test = () => {
    let username = "Kush";
    console.log(this);
}

const anotherTest = (num1, num2) => num1 + num2; // no need to write return statement as long as there is no curly brace pair, same as java
// implicit return

console.log(anotherTest(4, 5));

// Arrow function is the same as lambda function in Java