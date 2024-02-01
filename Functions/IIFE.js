function databaseConnectivity(name) {
    console.log("Not Connected to DB");
    console.log(name);
}

(function databaseConnectivity(username) { // named IIFE
    console.log("Connected to DB");
    console.log(username);
}) ("Kushagra"); // here, the first set of parentheses signify the function processing that needs to happen. This databaseConnectivity is essentially a function inside an anonymous arrow function (lambda function), that is invoked whenever we use the
// second pair of parentheses after it (). These must contain any required arguments
// note that this function can be reduced to a pure arrow function
// also note that semicolon ';' is necessary when writing arrow functions due to syntax

((userName) => { // unnamed IIFE
    console.log("DB is connected???");
    console.log(userName);
}) ("Kushagra");

databaseConnectivity("Kushagra"); // the above one not wrapped inside the parentheses is called
// Note that in case there are two different functions of the same signature, there is no error thrown. The call made is to the latest function of the said signature
// and the previous ones are ignored
// That's new

// Immediately Invoked Function Expression
// Functions that are invoked immediately after their definition. This is used when there is polymorphism involved, i.e., other functions of the same name exist inside the sam scope
