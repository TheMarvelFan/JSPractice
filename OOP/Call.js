function setUserName(userName) {
    this.userName = userName; // this method has different execution context ("this") than the one that calls it
    console.log("called");
}

function createUser(userName, email, password) {
    this.email = email;
    this.password = password;
    setUserName(userName); // this function is not being called yet, only the reference is received
    setUserName.call(this, userName); // this "call" holds the reference after the called method has finished executing
    // usually, after a method has executed, its reference is removed from the call stack, but with "call", it stays inside the stack memory
    // if we pass "this" along with call, then inside the called function whenever "this" keyword is referenced, it is automatically interpreted
    // as the caller function's "this", and the values assigned to it stay
}

const user = new createUser("kush", "kush@something.com", "abcd123");

console.log(user); // username is missing