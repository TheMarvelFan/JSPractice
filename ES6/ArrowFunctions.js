const add = (a, b) => a + b; // called fat arrow function, as thin arrow would be "->" (like lambda in java) (implicit return)

console.log(add(2, 4));


const double = number => 2 * number; // When there is a single argument, parentheses can be dropped
// if there are no arguments or multiple arguments, parentheses are necessary

console.log(double(8));

const numbers = [1, 2, 3];

console.log(numbers.map(number => 2 * number)); // better use of arrow function

const team = {
    members: [`Jane`, `Bill`],
    teamName: `Summer Squad`,
    teamSummary: function () {
        return this.members.map(member =>`${member} is on team ${this.teamName}.`);
    }
};

console.log(team.teamSummary()); // problem is solved by arrow function because of "lexical this". The "this" keyword inside fat arrow function is automatically
// set to the current execution context (current object)
// prints "Bill is on team undefined" "Jane is on team undefined" when we use anonymous functions
// The value of "this" in anonymous functions is lost. This is because this code is passed off to somewhere in the runtime environment which is
// a very different execution context. Anonymous functions have different execution contexts than named functions