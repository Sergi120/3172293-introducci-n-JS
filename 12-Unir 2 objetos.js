// Cuando se unen 2 objetos lo ideal es NO modificar ninguno de los 2 objetos

const product = {
    productName : "Sensor de humedad",
    price : 300,
    avaliable : true,
}

Object.freeze(product)

// Este es un objeto que almacena medidas
const measurements = {
    weight : '1 kg',
    measurements : '10 cm',
}

// Rest Operator, consta de (...)
const newProduct = {...product, ...measurements}

console.log(product)
console.log(newProduct)
