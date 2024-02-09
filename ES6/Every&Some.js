var computers = [
    { name: "Apple" , ram: 24},
    { name: "Compaq" , ram: 4},
    { name: "Acer" , ram: 32}
];

// We want to find if there are computers that have at least 16 gb ram.

var allComputersCanRunProgram = true; // initially assuming all can run the programs
var onlySomeComputersCanRunProgram = false;

for (let i = 0; i < computers.length; i++) {
    var computer = computers[i];

    if (computer.ram < 16) {
        allComputersCanRunProgram = false;
    } else {
        onlySomeComputersCanRunProgram = true;
    }
}

console.log(allComputersCanRunProgram);
console.log(onlySomeComputersCanRunProgram);

console.log(computers.every(function (computer) {
    return computer.ram > 16;
})); // Does an "and" operation on all the results returned by the operation introduced inside this function, and prints the final result to be
// True (if no false results were encountered) or False (otherwise)

console.log(computers.some(function (computer) {
    return computer.ram > 16;
})); // Does an "or" operation on all the results returned by the operation introduced inside this function, and prints the final result to be
// False (if all results were encountered false) and True (otherwise)

var names = [
    "Alexandria",
    "Matthew",
    "Jones"
];

console.log(names.every(function (name) {
    return name.length > 6;
}));

console.log(names.some(function (name) {
    return name.length > 6;
}));

function Field(value) {
    this.value = value;
}

Field.prototype.validate = function () {
    return this.value.length > 0;
}

var username = new Field("sup");
var password = new Field("SomePassword");
var birthDate = new Field("10/10/2023");

console.log(username.validate() && password.validate()); // cannot add new fields as they come

var fields = [username, password, birthDate];

var isValid = fields.every(function (field) {
    return field.validate();
});

if (isValid) {
    // allow to submit form
} else {
    // show error message
}