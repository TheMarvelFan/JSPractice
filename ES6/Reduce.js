var numbers = [10, 20, 30];

var sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

console.log(sum);

console.log(numbers.reduce(function (sum, number) {
    return sum + number;
}, 0)); // basically recursive function
// It needs an initial value, which it reads only once, and assign it to a parameter
// For every next iteration, this parameter is incremented, and its new value is read, and the initialValue is abandoned

var primaryColors = [
    { color: 'red' },
    { color: 'blue' },
    { color: 'yellow' }
];

// to return: ["red", "yellow", "blue"]

console.log(primaryColors.reduce(function (accumulator, primaryColor) {
    accumulator.push(primaryColor.color);
    return accumulator; // updating the value and returning it
}, [])); // the first argument is always the value that is carried over in each iteration

// "()()()()" Valid Parentheses problem can be solved using reduce!
// "(((())))"
// ")))"
// "((())"
// ")(())("

function balancedParens (string) { // convert string to array as "reduce" is an array helper method
    return !string.split("").reduce(function (previousValue, char) { // This '!' flips the number to boolean. 0 is interpreted as false, and !0 is true, otherwise if string is unbalanced, then it will be !true, so false
        if (previousValue < 0) { // handling the edge case of ")("
            return previousValue;
        }
        if (char === "(") {
            return ++previousValue;
        }
        if (char === ")") {
            return --previousValue;
        }
        return previousValue;
    }, 0);
}

console.log(balancedParens("()"));