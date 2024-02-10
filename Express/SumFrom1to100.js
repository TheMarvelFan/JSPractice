// const fs = require("fs"); // this "fs" is an external library that can be used to read/write from/into file
// think of this like an import statement
// fs is shipped with node.js

const express = require("express"); // express is not shipped with node.js
// we need to install it using "npm install express"
const app = express();

// Express lets us create an HTTP server

const port = 3000;

function handleFirstRequest(req, res) {
    let counter1 = req.query.counter1; // to get the first counter
    let counter2 = req.query.counter2; // these parameters are written into the url, with the first parameter being written after a question mark "?",
    // and multiple parameters being separated with an ampersand "&"

    let calculatedSum1 = sum(counter1);
    let calculatedSum2 = sum(counter2);
    console.log(calculatedSum);
    const answer1 = `Answer 1 is ${calculatedSum1}`;
    const answer2 = `Answer 2 is ${calculatedSum2}`;
    res.send(`Answer 1 is: ${calculatedSum1} \nAnswer 2 is: ${calculatedSum2}`);
}


// Major methods in protocols:
// 1. GET // default request method to retrieve some data from backend
// 2. POST // whenever some data is to be added to database, send POST request
// 3. PUT // whenever some data in database is to be updated, send PUT request
// 4. DELETE // duh

// Everything can be done using GET, but the others are standards
// The requests to pages from the URL bar of the browser will always be GET request, unless further functionality is added
// Postman is used to send any kind of request to a server (using any of the above methods), using which POST request can be sent
// Get requests are stored in the browser history


// app.get('/', () => app.send(`Please select a path!`)); // if we get a request at the index "/" (root or home or index page of a website, run the function "handleFirstRequest"

function handleHelloThere(req, res) {
     // Webstorm uses nginx by default
    res.send(`This is the second page in the route.`);
    // if something like res.send(number) is returned, then a status code is returned
}

function createUser(req, res) {
    res.send(`Hello world`);
}

app.get('/:username', handleFirstRequest); // in social websites like instagram and linkedin, no one writes and "app.get" for every username

app.get('/hellothere', handleHelloThere);
app.get('/handleSum', handleFirstRequest);

app.post('/createUser', createUser);
// they use something like the above line (whatever followed by the colon ":", but colon is necessary), using which
// any requests to any routes can be handled
// "/:" means it is a wildcard

function started() {
    console.log(`Example app is listening on ${port}`)
}

app.listen(port, started); // like "setInterval()", this function makes sure that the server runs indefinitely, while exposing the code to an HTTP port



function callBackFn(err, data) {
    console.log(data);
}

// fs.readFile("a.txt", "utf-8", callBackFn);

function sum(counter) {
    let sum = 0;
    for (let i = 0; i < counter + 1; i++) {
        sum += i;
    }
    return sum;
}

let calculatedSum = sum();
console.log(calculatedSum);

// This line: "express": "^4.18.2"
// means that the version of express.js required for this app is "4.18.2" or anything above

// This line: "express": "4.18.2" (without the caret '^')
// means that the version of express.js required for this app is "4.18.2" exactly. Any other version will cause failure

// The package.lock.json file is auto generated
// It locks the version of the dependencies in package.json
// If this file is shipped along with the application, and suppose "express" is nt installed on the receiver's system,
// then running "npm install express" will give the exact same version as that of the shipped version in package.lock.json

// https://www.github.com (this is an url)
// /TheMarvelFan (this is a route)