function name() {
    console.log("Doing something");
}

console.log(name); // reference
name(); // execute via function call

function addTwoNumbers(num1, num2) { // no need to give type of number
    console.log(num1 + num2);
    // return num1 + num2;
}

// addTwoNumbers(); // return NaN as no arguments are present. Note that there is no error

let result = addTwoNumbers(3, 4); // works fine
console.log(result); // displays undefined

// addTwoNumbers(3, "4"); // converts to 34
// addTwoNumbers(3, [4]); // still gives 34

function loggedIn(username) {
    if (!username) { // NOTE THAT "undefined" AND "{}" ARE CONSIDERED AS BOOLEAN FALSE IN JS
        console.log("Please enter a username");
        return; // JS functions are bizarre. They have return statements both plain and with a value in the same function
    }
    return `${username} just logged in.`;
}

function loggedInWithDefault(username = "Sam") {
    return `${username} just logged in.`;
}

console.log(loggedIn()); // when not using if block at line #22, displays: undefined just logged in.
console.log(loggedInWithDefault());