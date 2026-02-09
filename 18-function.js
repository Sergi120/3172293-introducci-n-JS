// Funciones en JS.
// ¿Qué es Hoisting?
// Hoisting en JS, es el comportamiento por defecto en el que el interprete "MUEVE" las declaraciones (de variables y funciones) a la parte superior de su ambito (scope) y lo mueve antes de ejecutar el codigo.
// Esto significa que puedes usar una función o variable declarada antes de escribirla en el codigo.

// Declaracion de una funcion.
// Como esta funcion esta declarada se puede llamar antes o despues de su creacion
add();

function add() {
    console.log(10 + 10)
};

// =================================

// La expresion de una funcion
// La expresion de la funcion solo puede llamarse despues de su creacion
const sumar2 = function(){
    console.log(3 + 3);
};

sumar2();

// =================================
// IIFE (Immediately invocked function Expression), esta funcion se llama a si misma.
// Son utiles para proteger las variables para que no se mezclen con las varibles de otros archivos.
(function(){
    console.log("Esta es una funcion IIFE");
})();

(function(name){
    console.log(`Hello ${name}`);
})('Adrian');

console.log(client);