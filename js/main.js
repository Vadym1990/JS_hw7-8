let products = [
    ['Bread', 20],
    ['Butter', 70],
    ['Sausage', 150],
];

let sum = 0;

for (let i = 0; i < products.length; i++) {
    let name = products[i][0];
    let price = products[i][1];
    if (price >= 100) {
        console.log(`${i + 1}`, name, price, '=(');
    } else {
        console.log(`${i + 1}`, name, price, '=)');
    }
    sum = sum + price;
}
console.log('Total price: ' + sum);