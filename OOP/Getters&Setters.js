class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    get email() { // note that the name of the getter and setter methods must be the same as that of the property for which they are being created
        return this._email.toUpperCase(); // getters always return something
    }

    set email(email) {
        this._email = email; // setters never return anything
    }

    get password() { // getter and setter must both be there in a class
        return `${this._password}password`;
    }

    set password(passwd) {
        this._password = passwd; // Stack Overflow ?!
        // Both constructor and setter set the values one by one infinitely
        // This causes stack overflow
    }
}

const kush = new User("something@abcd.com", "abcd1234");
console.log(kush.password);
console.log(kush.email);