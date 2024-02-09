function createBookShop(inventory) {
    return {
        inventory, // When there is a key and a value with the exact same name, it can be condensed into writing the name just once (auto-interpreted)
        inventoryValue() { // In a key value pair where the value is an anonymous function, the ":" (colon) and the "function" keyword can be omitted
            return this.inventory.reduce((total, book) => total + book.price, 0);
        },
        priceForTitle(title) {
            return this.inventory.find(book => book.title === title).price;
        }
    };
}

const inventory = [
    { title: 'Harry Potter', price: 10 },
    { title: 'Some Other Book', price: 15 }
];

const bookShop = createBookShop(inventory);

console.log(bookShop.inventoryValue());
console.log(bookShop.priceForTitle("Harry Potter"));

function saveFile(url, data) {
    $.ajax({ url, data, method: "POST"}); // shortened property names come first, and the key value pairs come later by standard
}

const url = "https://Something.com";

const data = { color: "red" };

saveFile(url, data);