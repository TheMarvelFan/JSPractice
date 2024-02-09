// var colors = ['red', "blue", `green`];
//
// for (let i = 0; i < colors.length; i++) {
//     console.log(colors[i]);
// }
//
// colors.forEach(function (color) { // The Function passed inside here is termed 'Iterator Function'
//     console.log(color);
// });

var numbers = [1, 2, 3, 4, 5];

var sum = 0;

function adder(number) {
    sum += number;
}

numbers.forEach(adder);

console.log(sum);

