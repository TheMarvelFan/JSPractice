// ES6

class User {
    constructor(username, email, password) { // created with the help of keyword, instead of classname like java
        this.email = email;
        this.username = username;
        this.password = password;
    }

    encryptPassword () { // no need to write "function" here
        return `${this.password}abc`;
    }

    changeUsername() {
        return `${this.username.toUpperCase()}`;
    }
}

const user = new User("Kushagra", "abcd@something.com", "123");

console.log(user.encryptPassword());
console.log(user.changeUsername());

// without using class

function User(username, password, email) {
    this.username = username;
    this.password = password;
    this.email = email;
}

User.prototype.encryptPassword = function () {
    return `${this.password}abc`;
}

User.prototype.changeUsername = function () {
    return `${this.username.toUpperCase()}`;
}

const otherUser = new User("someone", "12345", "abcd@xyz.com");

console.log(otherUser.encryptPassword());
console.log(otherUser.changeUsername());