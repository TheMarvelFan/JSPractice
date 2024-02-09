// function Car(options) {
//     this.title = options.title;
// }
//
// Car.prototype.drive = function () { // to add new functions to the object, add it to the prototype of its constructor
//     return "vroom";
// }
//
// const car = new Car({ title: "Focus" });
//
// console.log(car.drive());
// console.log(car);
//
// function Toyota(options) {
//     Car.call(this, options); // to inherit the Car prototype
//     this.color = options.color;
// }
//
// Toyota.prototype = Object.create(Car.prototype); // no idea why this is happening
// Toyota.prototype.constructor = Toyota; // this too
//
// Toyota.prototype.honk = function() {
//     return "beep";
// }
//
// const toyota = new Toyota({ color: "red", title: "Driver" });
// console.log(toyota);
// console.log(toyota.color);
// console.log(toyota.honk());
// console.log(toyota.drive());

class Car {
    constructor({ title }) {
        this.title = title;
    }

    drive () {
        return `vroom`;
    }
}

class Toyota extends Car{
    constructor(options) { // cannot use destructuring if we have to pass value to super constructor
        super(options);
        this.color = options.color;
    }

    honk() {
        return `Beep`;
    }
}

const toyota = new Toyota({ color: `red`, title: `Daily Driver` });
console.log(toyota.honk());
console.log(toyota);
console.log(toyota.drive());

// Main use of classes is in react