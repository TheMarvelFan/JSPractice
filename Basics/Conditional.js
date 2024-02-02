let bal = 100;

if (bal < 500) console.log("Inside the"), console.log("if statement"), console.log("Can take this"), console.log("As much forward as"), console.log("I want to");
if (bal === 102) {
    console.log("Test");
}
// switch-case is same as Java

// truthy and falsy

// every string except empty string is considered true in boolean
// empty array is considered true too

const email = [];

if (email) {
    console.log("Got it");
} else {
    console.log("Didn't get it");
}

/* falsy values:
   1. false
   2. 0
   3. -0
   4. BigInt 0n (of type bigint)
   5. ""
   6. null
   7. undefined
   8. NaN
*/

/* Some truthy values: (except for the above stated falsy values, everything else is truthy value. The blow ones are just some examples and not a complete list)
    1. "0" // obvious
    2. 'false' // obvious
    3. [] // empty array
    4. {} // empty object
    5. " " // obvious
    6. function() {} // aka empty function
*/

const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescence Operator (??): works on null, undefined
// Note that the above is different from ternary operator, which works same as Java

let val;
val = 5 ?? 10;

val = null ?? 10;
val = 10 ?? null;
val = undefined ?? 15;
val = null ?? 10 ?? 20; // assign the first value that is not null or undefined

console.log(val); // outputs 5 when line 53 is commented
