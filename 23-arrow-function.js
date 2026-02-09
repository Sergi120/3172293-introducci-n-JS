//arrow function
//En JS es una forma mas corta de escribir funciones usando sintaxis () ->

// Sintaxis mas breve, ideal para funciones pequeñas
//NO tiene su propio this, hereda el this del contexto donde se define

//Function sin parametros
const add = function () {
    console.log(16 + 3);
}

add();

// Function con parametros
const add2 = function (num1, num2) {
    console.log(num1 + num2);
}

add2(4, 8);

const add3 = (num3, num4) => {
    console.log(num3, num4);
}

//las llaves son opcionales cuando despues de la flecha solo tengo
//una sentencia
add3(6, 9);

//Conmigo se siente rico programar

//Otro ejemplo
//const learn = (technology) => {
//    console.log(Aprendiendo ${`technology`})
//}


const months = new Array('May', 'January', 'July', 'June', 'November', 'December');

const shoppingCart = [
    { productName: 'Smart TV 60', price: 300 },
    { productName: 'Smart TV 50', price: 200 },
    { productName: 'Tablet', price: 500 },
    { productName: 'Sound-Bar', price: 900 },
    { productName: 'Google Assistant', price: 600 },
    { productName: 'Sound-Bar', price: 400 },
    { productName: 'PlayStation', price: 800 },
    { productName: 'Wii', price: 450 },
    { productName: 'Mouse', price: 50 },
]
months.forEach(month => {
    if (month == 'November' || month == 'December') {
        console.log('Se verifico en el arreglo y el mes si existe');
    } else {
        console.log('El mes No existe');
    }
})




const result = shoppingCart.some(product => product.price === 800);

console.log(result);

// What did ES6 bring
//let and const: new ways of declaring variables
//Arrow functions: () => {}.

const result3 = shoppingCart.reduce((total, product) =>
    total + product.price, 0)

console.log(result3);

const result6 = shoppingCart.filter((product) =>
    product.price, 600
)

console.log(result6)

//------------------------------

const greet = (userName =>
    console.log(`Hello ${userName}`));
console.log(greet("Edwar"));

//--------------------------------------------------

//const boost = num => num * num;

const boost2 = num => Math.pow(num, 2)
console.log(boost2(100));

//-------------------------------------------------
//------- ¿Que hace un bucle for en terapia
//Trata de cerrar ciclos

//Arrow function con retorno explicito

//Se usa cuandp el cuerpo de una function tiene llaves {}

const add10 = (num4, num5) => {
    const result7 = num4 + num5;
    return result7;
}

console.log(add10(15, 7));

//---------------------------------------------------------
//Retorno cuando la funcion no tiene llaves realiza el retorno implicitamente.
const add11 = (num6, num7) => { console.log(num6 + num7); num6 + num7 };

console.log(add11(4, 6))

//el retorno implicito solo funciona con una instruccion