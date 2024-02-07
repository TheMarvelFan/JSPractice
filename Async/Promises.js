// In js, promise is basically an Object that represents an eventual completion of a task
// It is used to fill a void (as a placeholder) for a job that has not yet been completed, and it may pass or succeed
// Promise was introduced in ES6
// Promise used to be available through Q and BlueBird libraries in JS, before it was integrated into core JS engine

// Promises can be consumed, as well as created

const promise1 = new Promise((resolve, reject) => { // required do to syntax
    // performing async operation
    setTimeout(function () {
        console.log(`Async task is complete`);
        resolve(); // required to connect to "then"
    }, 1000);
});

promise1.then(function () {
    console.log(`Promise consumed`);
}); // consuming promise, through "resolve" keyword

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log(`Async task 2 complete`);
        resolve();
    }, 1000);
}).then(() => { // consuming promise after anonymous promise creation
    console.log(`Async 2 resolved`);
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            username: "TheMarvelFan",
            email: "something@abcd.com",
        });
    }, 1000);
});

promise3.then((user) => { // this parameter is taken as this value was passed into the resolve() method call above
    console.log(user);
});

const promise4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({
                username: "Kush",
                password: "abc1234"
            });
        } else {
            reject(`ERROR: Something went wrong`); // using this reject method, we can provide functionality for what to do when promise fails
        }
    }, 1000);
});

promise4
    .then((user) => { // cannot store this value in variable
    console.log(user);
    return user.username; // this return is used up in the next "then"
})
    .then((username) => { // function chaining. This "then" function has only those values that were returned in the above then function
    console.log(username); // there can be multiple "then"s and multiple "catch"s
})
    .catch((error) => { // catch is used to handle the "reject" functionality. Whenever the promise is not fulfilled, catch method is called.
    console.log(error);
})
    .finally(() => console.log(`The Promise is resolved, or rejected, Finally block is executed either ways.`)); // finally block always gets executed, no matter what happens

const promise5 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false;
        if (!error) {
            resolve({
                username: "Sumo",
                password: "abc1234"
            });
        } else {
            reject(`ERROR: JS went wrong`); // using this reject method, we can provide functionality for what to do when promise fails
        }
    }, 1000);
});

// It is not necessary to deal with promises in JS using .then or .catch
// They can also be resolved with "async", "await"

async function consumePromise5() {
    try { // try catch block is the same as in java
        const response = await promise5; // This response stores whatever is the result, error or success
        console.log(response); // async and await cannot handle errors internally
    } catch (error) {
        console.log(error);
    }
}

consumePromise5();

async function getAllUsers() {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users`); // waiting for the response from fetch
        // this fetch will fetch a response from the link provided as its input
        const data = await response.json(); // converting response to json // this needs to be waited for too, as the process of converting response
        // to json also takes a lot of time
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

getAllUsers();

fetch(`https://api.github.com/users/TheMarvelFan`)
    .then((response) => {
        return response.json();
    })
    .then((data) => { // no need to add await or async or anything here. Cleaner syntax. I like this better
        console.log(data);
    })
    .catch((error) => {
        console.log("Error in converting to JSON: " + error);
    });

// ERROR CODE 404 AND OTHER CODES ARE RECEIVED AS REGULAR RESPONSE, AND NOT ERRORS (inside then, and not reject), AS THESE WERE ALSO SUCCESSFUL REQUESTS TO THE DATABASE

// Notice that the code written above is being executed later, and the code written here is being executed first (data fetching and printing).
// This happens because FETCH CREATES A HIGH PRIORITY QUEUE. EVERY CALLBACK INSIDE FETCH WILL TAKE OVER ALL THE EXISTING CALLBACKS IN THE QUEUE
// Due to this, fetch callbacks are always always executed first, and everything else later

// fetch method does two different things:
// 1. Communicate with the memory, and reserve space for a "Data", which may contain one of these arrays: "onfulfilled[]" (successful), or "onrejection[]" (error)
// 2. Make a network request to the requested URL, which is a functionality provided by Node, or Web Browser
// All responses received from the URL are stored in the onfulfilled[] array
// If the REQUEST FAILS TO BE SENT TO THE URL, ONLY THEN WILL IT BE COUNTED AS ERROR and errors are sent over to the onrejection[] array
// Note that a request will either fail, or succeed. In either case, the "Data" space in the memory will have only one array based on success or failure
// on success or on failure, the arrays will get some functions in return that reserve their respective array's space in the "Data" portion
// The "Data" portion is responsible for assigning the correct value to the local variable that made a call to the fetch() method