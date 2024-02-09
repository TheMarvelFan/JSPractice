var products = [
    {name: "cucumber", type: "vegetable", quantity: 0, price: 1},
    {name: "banana", type: "fruit", quantity: 10, price: 15},
    {name: "celery", type: "vegetable", quantity: 30, price: 9},
    {name: "orange", type: "fruit", quantity: 3, price: 5}
];

var filteredProducts = [];

for (let i = 0; i < products.length; i++) {
    if (products[i].type === "fruit") {
        filteredProducts.push(products[i]);
    }
}

console.log(filteredProducts);

var filtered = products.filter(function (product) {
    return product.type === "vegetable"; // just like map, "return" is necessary in filter
    // Note that the filter function requires a boolean value to decide whether an object is to be kept inside the result of not
});

console.log(filtered);

console.log(products.filter(function (product) {
    return product.type === "vegetable"
        && product.quantity > 0
        && product.price < 10;
}));