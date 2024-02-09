var numbers = [1, 2, 3];

var doubledNumbers = [];

for (let i = 0; i < numbers.length; i++) {
    doubledNumbers.push(numbers[i] * 2);
}

var doubled = numbers.map(function (number ) { // creates a new array
    return number * 2; // this is usable as we do not want to change the original array because of mutation
    // It is necessary to put a return statement here, otherwise it will think "undefined" is being returned
});

console.log(doubled);
console.log(doubledNumbers);

var cars = [
    {model: 'Buick', price: 'CHEAP'},
    {model: 'Camaro', price: 'expensive'},
];

var prices = cars.map(function (car) { // This is known as "Pluck"
    // We are plucking some value from the object
    return car.price;
});

console.log(prices);