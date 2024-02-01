const course = {
    courseName: "SomethingSomething",
    price: 1001,
    instructor: "SomeoneSomeone"
}

const {instructor} = course;
// const {courseInstructor} = course; // not working as expected
// const {instructor: courseInstructor} = course; // working as expected


console.log(instructor);
// console.log(courseInstructor); // outputs undefined, as this variable does not yet have a value when we don't use line #9
// when we use line #9, we get the desired output

// structure of JSON is basically the same as the of an object in JS
// only difference is that te keys are also inside quotes (explicitly stated as strings)