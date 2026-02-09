// String o cadena de texto
const sensor = "temperatura";
const sensor2 = "PH";

console.log(sensor);
console.log(sensor2);
// Estas 2 formas NO son tan comunes
const sensor3 = String("Presion");
const sensor4 = new String("Humedad")

console.log(sensor3)
console.log(sensor4)

// Para saber el tipo de dato de una variable
console.log(typeof-sensor3);

let product = ("Televiso de 32\"");
let product2 = ("Televiso de 58\"");
console.log(product)
console.log(product2)

// Metodos con String
console.log(product2.length);

let name = ("Adrian");
console.log(name.length);

// Sirve para saber si una cadena de texto existe en una frase
// IndexOf nos muestra la posicion en la que se encuentra la cadena de texto
// Si la cadena NO existe muestra un resultado menor que cero(0)
let phrase = "Aqui vamos a buscar la palabra SENA";
console.log(phrase.indexOf("SENA"));

// Hacer lo mismo de una forma mas moderna, el resultado es un true or false
let phrase2 = "Aqui vamos a buscar la palabra SENA";
console.log(phrase.includes("SENA"));
console.log(name.includes("Adrian"))