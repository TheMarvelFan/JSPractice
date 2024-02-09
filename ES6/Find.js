var users = [
    {name: 'Jack'},
    {name: "Jones"},
    {name: `Indiana`}
];

var user;

// for (let i = 0; i < users.length; i++) {
//     if (users[i].name === "Jones") {
//         user = users[i];
//         break;
//     }
// }
//
// console.log(user);

console.log(users.find(function (user) { // Find will iterate through the array till it finds the first entry matching the condition
    return user.name === "Indiana"; // If there are two entries matching the criteria, only the one appearing first is returned
}));

function Car(model) {
    this.model = model;
}

var cars = [
    new Car("Buick"),
    new Car('Camaro'),
    new Car(`Focus`)
];

console.log(cars.find(function (car) {
    return car.model === "Focus";
}));

var posts = [
    {id: 1, title: "New Post"},
    {id: 2, title: "Old Post"}
];

var comment = {postId: 1, content: "Great Post"};

function postForComment(posts, comment) {
    return posts.find(function (post) {
        return post.id === comment.postId;
    });
}

console.log(postForComment(posts, comment));