const pi = Object.getOwnPropertyDescriptor(Math, "PI"); // describes some hidden properties of Object

console.log(pi); // Displays output: {
                                        // value: 3.141592653589793,
                                        //     writable: false,
                                        //     enumerable: false,
                                        //     configurable: false
                                  // }

// const newObj = Object.create(null);

const someObj = {
    name: "Someone",
    price: 340,
    isAvailable: true,

    orderSomeObj: function () {
        console.log("Not for sale");
    }
}

console.log(Object.getOwnPropertyDescriptor(someObj, "name")); // displays: Undefined
// Because an object was passed into the method, when it expects an object as well as a property

Object.defineProperty(someObj, "name", { // to change the properties of specific property
    writable: false,
    enumerable: false
});

console.log(Object.getOwnPropertyDescriptor(someObj, "name"));

for (let [key, value] of Object.entries(someObj)) { // object is not iterable in this case
    if (!(value instanceof Function)) {
        console.log(`${key} : ${value}`);
    }
}