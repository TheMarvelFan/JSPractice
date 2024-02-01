function levelOne() {
    const name = "Kushagra";

    function levelTwo() { // function inside function
        const lastName = "Nigam";
        console.log(name);
    }

    // console.log(lastName);
    levelTwo();
}

levelOne();

let a = addOne(4); // no error when calling is above definition

function addOne(num) {
    return num + 1;
}

let b = addTwo(5); // gives error when function is called above definition

const two = function addTwo (num) { // this method of declaration is called hoisting
    return num + 2;
}

// let b = addTwo(5); // does not give error when called below function