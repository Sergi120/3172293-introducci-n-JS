// Desesctructuracion de objetos

const product= {
    productName: "sensor de humedad",
    price: 300,
    available: true
}
// Aqui un ejemplo de desestructuracion de objetos.

const productPrice = product.price;
// const productName = product.productName;

console.log(productPrice);
console.log(product.productName);

// ¿Para que sirve el destruturing? sirve para extraer los valores de un objeto
const {price, available} = product;

console.log(price, available);