class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`Username: ${this.username}`);
    }

    static createId() {
        return `123`; // assume this ID is unique every time
    }
}

const user = new User(`Kushagra`);
// console.log(user.createId()); // gives error that function is not available. In JS, "static" is used to block access to all instances of a class

class Someone extends User {
    constructor(username, email) {
        super(username);
        this.email = email;
    }
}

const someTeacher = new Someone("ateacher", "teacher@school.com");

someTeacher.logMe();
console.log(someTeacher.createId()); // no access here either