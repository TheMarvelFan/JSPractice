// Destructuring Objects

var expense = {
    type: "Business",
    amount: "$45 USD"
};

// lots of duplicate keywords
// var type = expense.type;
// var amount = expense.amount;


const { type, amount } = expense; // this is not an object creation
// this is saying that new variables named "type" and "amount" are being declared, and their value
// will be the same as the "name" and "amount" properties of "expense"

// The names of the properties inside the object must be the same as the names of the variables being declared
// The property should exist inside the object

// const { amount } = expense;

console.log(type);
console.log(amount);

var savedFile = {
    extension: "jpeg",
    name: "something",
    size: 18000
};

function fileSummary({ name, extension, size }, { color }) {
    return `${color} file ${name}.${extension} is of size ${size}.`;
}

console.log(fileSummary(savedFile, { color: 'red' })); // object has been destructured


// Destructuring Arrays
const companies = [
    "Google",
    "Meta",
    "Uber"
];

const [ name, name2, name3 ] = companies; // Array has been destructured. This must happen in the order of the elements
const { length } = companies; // the length property has been pulled out of the "companies" array object. This must use curly braces ("{}")
console.log(name);
console.log(name2);
console.log(name3);
console.log(length);
// Pulling elements from arrays must have square brackets
// The name of variable inside the square bracket can be anything

const [ name1, ...rest ] = companies;
console.log(`${name1}\n${rest}`);

const newCompanies = [
    { name: "Google", location: "Mountain View" },
    { name: "Meta", location: "Menlo Park" },
    { name: "Uber", location: "San Francisco" },
];

const [ {location }] = newCompanies; // first the square braces one pulls out the first element in the array
// After that, the braces pull out the location property from the first element of the array
console.log(location);

const Google = {
    locations: ["Mountain View", "New York", "London"]
};

const { locations: [locate] } = Google; // Specifying the JS Engine to first take the "Locations" array property from the Google object
// Then declare a new variable name "locate" that takes the first element from the locations array
// weird syntax
console.log(locate);


function signup({ username, password, email, dateOfBirth, city }) { // now code is simple\
    // no need to worry about order of arguments
    // create new user
}

// other code
// other code
// other code
// other code
// other code
// other code
// other code
// other code
// other code
// other code
// other code
// other code
// other code
// other code
// other code
// other code
// other code
// other code
// other code
// other code
// other code
// other code
// other code
// other code
// other code
// other code
// other code
// other code
// other code
// other code
// other code
// other code

const user = {
    username: "myname",
    password: "mypassword",
    email: "myemail@something.com",
    dateOfBirth: "24/02/2003",
    city: "Lucknow"
};

signup(user);

// signup("somename",  "somepassword", "myemail@something.com", "24/2/2003", "Lucknow");
// By the time we get here, we have forgotten the order in which parameters have to be passed
// To make sure this doesn't happen

const points = [ // x and y coordinates
    [4, 5],
    [10, 1],
    [0, 40],
];

// Suppose the method that processes these coordinates needs an array of objects

points.map(([ x, y ]) => { // Array Destructuring
    return { x, y }; // nice
});