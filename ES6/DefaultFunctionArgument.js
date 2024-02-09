function makeAjaxRequest (url, method = 'GET') { // will check if method is undefined, and will assign this value to the argument automatically
    // note that null is not converted, only undefined

    return method;
    // logic
}

console.log(makeAjaxRequest("google.com", "POST"));
console.log(makeAjaxRequest("google.com", null));
console.log(makeAjaxRequest("google.com"));

function User(id) {
    this.Id = id;
}

function generateId() {
    return Math.random() * 999999;
}

function createAdminUser(user = new User(generateId())) { // looks much cleaner now
    user.admin = true;

    return user;
}

console.log(createAdminUser());