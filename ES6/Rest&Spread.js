function addNumbers(...numbers) { // rest operator, same as in java
    return numbers.reduce( (sum, number) => {
        return sum + number;
    }, 0);
}

console.log(addNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

const defaultColors = [`red`, `green`];
const favColors = [`orange`, `yellow`];
const fallColors = [`fire red`, `fall orange`];

console.log([ `blue`, ...defaultColors, ...favColors, ...fallColors ]); // Spread operator. If the operator is removed, the array becomes 2d. The operator is flattening the array

function validateShoppingList(...items) { // rest
    if (items.indexOf('milk') < 0) {
        return [`milk`, ...items]; // spread
    }
    return items;
}

validateShoppingList(`oranges`, `bread`, `eggs`);

const MathLibrary = {
    calculateProduct (...rest) {
        console.log(`Please use the "Multiply()" method instead.`);
        return this.multiply(...rest);
    },
    multiply(a, b) {
        return a * b;
    }
};
