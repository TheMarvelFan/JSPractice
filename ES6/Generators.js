// const colors = ['red', 'green', 'blue'];
//
// for (let color of colors) {
//     console.log(color);
// }
//
// const numbers = [1, 2, 3, 4];
//
// let total = 0;
// for (let number of numbers) {
//     total += number;
// }
//
// console.log(total);

// Generators are functions that can be entered and exited again and again at any time

function* shopping () { // or function *nums { // necessary syntax to make a function a generator function
    // walking down the sidewalk
    // stuff on the sidewalk

    // go into the store with cash
    const stuffFromStore = yield 'cash'; // if this is removed, all calls return {"done": true}, but if it is added, first call returns {"done": false}
    // The purpose of the yield statement is to temporarily exit out of the function to where it was called

    // walking to laundromat
    const cleanClothes = yield 'laundry';

    // walking back home
    return [stuffFromStore, cleanClothes];
    // the execution ends
    // returned home with groceries
}

const gen = shopping(); // the shopping function is not called at this statement
// Nothing happens inside the "shopping" function at this point


console.log(gen.next()); // {"done": true}
// At this call, the function is entered the first time (start walking down the sidewalk to the store)
// Walked into the store
// walking up and down the aisles...
// purchase the groceries

console.log(gen.next('groceries')); // {"done": false}
// go back out to the sidewalk
// this next call sends control back into the generator function exactly at the "yield" statement along with whatever was passed into argument here

console.log(gen.next('clean clothes')); // reenter into generator

const generator = colors();
console.log(generator.next()); // red (the value is returned from the function, but we can go back in)
console.log(generator.next()); // blue (the value is returned from the function, but we can go back in)
console.log(generator.next()); // green (the value is returned from the function, but we can go back in)
console.log(generator.next()); // no returns, only {value: undefined, "done":"true"}

function *colors() {
    yield "red";
    yield "blue";
    yield "green";
}

const myColors = [];
for (let color of colors()) { // for of loop works perfectly with the generator
    // Generators can be used to iterate through any data structure we want
    myColors.push(color);
}

console.log(myColors);

const testingTeam = {
    lead: "Amanda",
    tester: "Bill",
    [Symbol.iterator]: function* () { // the control will look for this "Symbol.iterator" key to tell the for of loop how to iterate over this object
        // Key interpolation
        // the key can be read as dynamic key when surrounded by square brackets ("[]")
        yield this.lead;
        yield this.tester;
    }
};

const engineeringTeam = {
    testingTeam,
    size: 3,
    department: "Engineering",
    lead: "Jill",
    manager: "Alex",
    engineer: "Dave",
    [Symbol.iterator]: function* () {
        yield this.lead;
        yield this.manager;
        yield this.engineer;
        yield* this.testingTeam;
    }
};
// we want to iterate through only employees and not size and department

// function* teamIterator(team) {
//     yield team.lead; // iterating over only the required properties
//     yield team.manager;
//     yield team.engineer;
//     // yield team.testingTeam.lead; // viable approach
//     // yield team.testingTeam.tester; // viable approach
//     // const testingTeamGenerator = testingTeamIterator(team.testingTeam); // I wasn't completely wrong
//     yield* team.testingTeam; // think of "yield*" as a trapdoor, the control falls through it into the testingTeamIterator
//     // this is known as generator delegation
// }

// function *testingTeamIterator(team) {
//     yield team.lead;
//     yield team.tester;
// }

const names = [];

for (let name of engineeringTeam) { // We want to iterate through both the objects in just one for...of loop
    names.push(name);
}

console.log(names);

// Practical Example of generators

class Comment {
    constructor(content, children) {
        this.content = content;
        this.children = children;
    }

    *[Symbol.iterator]() {
        yield this.content;
        // array helper methods do no work with generator functions
        for (let child of this.children) { // iterate through each child of the current node
            yield* child;
        }
    }
}

const children = [
    new Comment('Good Comment', []),
    new Comment('Bad Comment', []),
    new Comment('meh', [])
];

const tree = new Comment("Great post!", children);
console.log(tree);

const values = [];

for (let value of tree) {
    values.push(value);
}
console.log(values);