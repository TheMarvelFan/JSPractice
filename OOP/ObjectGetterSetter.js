const User = {
    _email: "abcd@abcd.com",
    _password: "abcd1234",

    get email() { // these "get" and "set" keyword do not let this method remain as methods
        return this._email.toUpperCase();
    },

    set email(value) { // they convert them into values, which is why the name of the method must be the same as some property inside the object
        this._email = value;
    }
}

const something = Object.create(User);

console.log(something.email); // we do not have a property named "email" (we have "_email"), how is it accessible
//