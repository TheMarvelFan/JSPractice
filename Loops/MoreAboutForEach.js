const lingo = ["JS", "Java", "Python", "Ruby", "CPP", "C"];

const values = lingo.forEach((item) => {
    console.log(item);
}); // for-each function is void by default. It does not return any value

console.log(values);

// Filter method

const numbers = [1, 2, 343, 1923, 2313, 123, 2093, 398423, 39284, 10];
let newNums = numbers.filter((num) => {
    if (num > 4) {
        return num;
    }
}); // requires callback function just like forEach()
// filter method by default returns an array of all items that match the criteria

let anotherNums = numbers.filter((num) => num > 4); // returned by default

console.log(anotherNums);

const nums = [];

numbers.forEach((num) => { // alternative of filter
    if (num > 4) {
        nums.push(num);
    }
});

console.log(nums);

const largeObj = [
    {
       title: "Book one",
       Author: "Author one",
       "Publish Date": 1849,
       latest_edition: 2014,
       currentPrice: 234
    },
    {
        title: "Book two",
        Author: "Author two",
        "Publish Date": 1985,
        latest_edition: 2017,
        currentPrice: 200
    },
    {
        title: "Book three",
        Author: "Author one",
        "Publish Date": 1991,
        latest_edition: 2022,
        currentPrice: 1000
    },
    {
        title: "Book four",
        Author: "Author three",
        "Publish Date": 2023,
        latest_edition: 2023,
        currentPrice: 2000
    },
    {
        title: "Book five",
        Author: "Author four",
        "Publish Date": 1957,
        latest_edition: 2020,
        currentPrice: 500
    },
    {
        title: "Book six",
        Author: "Author four",
        "Publish Date": 1881,
        latest_edition: 1884,
        currentPrice: 40
    },
    {
        title: "Book seven",
        Author: "Author four",
        "Publish Date": 2000,
        latest_edition: 2010,
        currentPrice: 890
    },
    {
        title: "Book eight",
        Author: "Author five",
        "Publish Date": 1489,
        latest_edition: 2023,
        currentPrice: 800
    },
    {
        title: "Book nine",
        Author: "Author two",
        "Publish Date": 2024,
        latest_edition: 2024,
        currentPrice: 1500
    },
    {
        title: "Book ten",
        Author: "Author six",
        "Publish Date": 2015,
        latest_edition: 2018,
        currentPrice: 298
    }
];

let favBooks = largeObj.filter((book) => book.Author === "Author two"); // Note that you should mot put singe equal '=' here, otherwise all the books will be stored in this array with author name two

favBooks = largeObj.filter((book) => {
    return book["Publish Date"] >= 1900 && book.currentPrice <= 500;
});

console.log(favBooks);

// Map method

const numerals = [1, 2, 3, 44, 57, 76, 98, 38, 23, 100];

let newNumerals = numerals.map((num) => num + 10); // requires callback as well
// returns values mandatory for each iteration

console.log(newNumerals);

newNumerals = numerals
    .map((num) => num * 10)
    .map((num) => num - 10)
    .filter((num) => num >= 40); // the next method always uses the returned set of values from previous method

console.log(newNumerals);

// Reduce method

const arrayForReduce = [1, 2, 3];
const initVal = 2;
const newReduced = arrayForReduce.reduce((accumulator, currentValue) => {
    console.log(`Current value of accumulator is: ${accumulator}, and current value is: ${currentValue}`);
    return accumulator + currentValue;
}, initVal);

console.log(newReduced);

const shoppingCart = [
    {
        name: "JSCourse",
        price: 300
    },
    {
        name: "Java",
        price: 200
    },
    {
        name: "Python",
        price: 600
    },
    {
        name: "Numpy",
        price: 100
    },
    {
        name: "Data Science",
        price: 12_000
    }
];

let total = shoppingCart.reduce((accumulator, item) => accumulator += item.price, 100);
console.log(total);