let promise = new Promise((resolve, reject) => {
    // resolve(); will turn the promise into resolved state
    // reject(); will turn the promise into rejected state
    // reject();
    // resolve();

});

promise
    .then(() => console.log(`Finally finished`)) // not executed if promise is rejected
    .then(() => console.log(`I also ran.`))
    .catch(() => console.log(`Uh Oh!`));

url = "https://jsonplaceholder.typicode123.com/posts123456/";

fetch(url)
    // .then(data => console.log(data)); // this is not the actual data, only its object representation
    .then(response => console.log(response)) // data is not immediately available in 'fetch()'. We have to use the 'json()' method to get the response data
    // .then(data => console.log(data));
    .catch(error => console.log(`BAD ${error}`));

// Shortcomings of "fetch()"
// Fetch does not enter the catch statement if an error code is received as response
// It only enters catch when the network request fails to be made altogether
// If server is hit, but fails to get data, it still hits then. This behavior is dissimilar to any other library in JS