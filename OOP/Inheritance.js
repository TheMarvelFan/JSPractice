class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`Username is: ${this.username}`);
    }
}

class Teacher extends User{ // this is same as java
    constructor(username, email, password) {
        super(username); // same as java
        this.email = email;
        this.password = password;
    }

    addCourse() {
        console.log(`A new course was added by ${this.username}.`);
    }
}

const user = new Teacher("Kushagra", "abcd@something.com", "abcd123"); // without the "new" keyword
// constructor is not invoked as in java

user.addCourse();
user.logMe();

const anotherUser = new User("MyNameIs");
anotherUser.logMe();

console.log(user === anotherUser); // false

console.log(user === Teacher); // false

console.log(user instanceof Teacher); // true

console.log(user instanceof User); // true