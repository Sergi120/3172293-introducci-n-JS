// Metodos para los objetos.
// Con esta linea de codigo garantizo buenas practicas.
`use strict`;

const product = {
    productName: "sensor de humedad",
    price: 300,
    available: true
}

const speedMax = 80;
// speedMar = 70;
console.log(speedMax);

// Aunque el objeto product este declarado como constante permmite agregar propiedades.
product.quantity = 10;
console.log (product);

// Con el metodo o funcion bloqueamos el objeto para que no se puedan agregar mas propiedades.
// object.freeze(product);

// Si usamos el metodo seal no podemos agregar ni eliminar pero si se puede editar o modificar una propiedad.
Object.seal(product);

// Vamos agregar una nueva proppiedad con color
// product.color = "blue";

// Forma de saber si un objeto esta bloqueado
console.log("¿El objeto esta bloqueado? " + Object.isFrozen(product));

if (Object.isFrozen(product)){
    let response = "si";
    }else{
        response = "No"
    }
    console.log("¿El objeto esta bloqueado? " + response);
    // Eliminar una propiedad de un objeto.
    // delete product.price;
    // console.log(product);

    // Modificar o editar las propiedades de unn objeto.
    // product.product.Name = "sensor de PH";
    // console.log(product);