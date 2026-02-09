// alert("Estoy en Hello World");
// Convenciones para nombrar variables

// CamelCase
// UpperCamelCase  => Se usa para nombrar claves en JS
// lowerCamelCase  => Se usa para nombrar las variables en JS
// SCREAMING_SNAKE_CASE  => Se usa para nombrar las variables constantes
// caja-kebad  => Se usa para nombrar archivos multimedia en JS

// snake_case  => Generalmente usado para nombrar variables en el lenguaje Phyton

// Caja-De-Tren  => Variante del kebad-case

// Ya NO se usa var para declarar variables, actualmente se usa let
// En JS NO es obligatorio indicar el tipo de variable 
// JS se puede o NO usar el punto y coma al final de la sentencia.

// var product = "sensor-1";
// var product2 = "sensor-2";

console.log(product);
console.log(product2);

// No se puede iniciar una variable con un guion medio
// var -sensor = "sensor-3";

// No se puede iniciar un variable con numero
// var 1sensor = "sensor-4";

// var _sensor = "sensor-5";

// Si esta permitido iniciar una variable con guion al piso
console.log(_sensor);

// Crear una variable de las 3 formas distintas

// var sensor10 = "sensor de lluvia";
// let sensor10 = "sensor de lluvia";
// const sensor10 = "sensor de lluvia";

console.log(sensor10);

// Ejemplo con var
// No me indica error por duplicidad de variable
// var sensor11 = "Sensor de humedad";
// var sensor11 = "Sensor de calor";

// console.log(sensor11);

// let no permite duplicidad al declarar variables
// let sensor12 = "sensor de velocidad";
// let sensor12 = "sensor de luz";

// No muestra error por falta de inicializacion
// console.log(userName)
// var userName = "Adrian";

// console.log(userName)
// let userName = "Adrian"

// Usando la declaracion const No se puede cambiar su valor-JUan jsoe tejada
const maxSize = 1024;
maxSize = 2048;

console.log(maxSize)