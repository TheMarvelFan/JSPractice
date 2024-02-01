const accountId = 8364234 // constant value won't be changes, final variable
var accountPassword = "abcd1234" // var was the only way to declare variables in js, but it did not follow the concept of scope of variables
// all variables declared with var were globally available, but could be changed from anywhere
let accountEmail = "something@something.com" // let is the other way to declare variables in js now. It follows the concept of score of variables
// it is the standard way of declaring variables now

/*
    Note that multi line comments are the same as java in this language
*/

/**
 * And so are javadoc comments
 */

// Semicolon is optional in js

accountCity = "Lucknow" // Not standard, dynamically types language
let accountState; // is undefined (note that it is NOT equivalent of 'null' in js) (has specific meaning, that is, not yet initialized)

console.table([accountId, accountEmail, accountPassword, accountPassword, accountState]); // prints values in a literal table with headings
