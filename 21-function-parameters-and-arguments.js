// Funciones, parametros y argumentos.

// Los parametros se pasan en los parentesis de la función.
function add(num1, num2){
    return console.log(num1 + num2)
};

add(5, 15); // Estos valores que se envian a la función se llaman argumentos.
add(7, 85);
add(3, 20);
add(7, 7);
add(5, 5);

// =================================

const add1 = (function(num3, num4){
    return console.log(num3 + num4);
});

add1(7, 85);
add1(3, 20);
add1(7, 7);
add1(5, 5);

// =================================

// Ejemplo cuando No se colocan argumentos, se colocan por defectos los valores en los parametros.
function add2(num7 = 35, num8 = 10){
    return console.log(num7 - num8)
};
add2();

// Funcion que retorna un valor
function add4(num9, num10) {
    return num9 * num10
};

const result = add4(4, 5)
console.log(result);

// 
let total = 0;
// Funcion para sumar productos
function addShoppingCar(price){
    return total += price;
};

function calculateTax(total){
    return 1.19 * total
};

total = addShoppingCar(800);
total = addShoppingCar(500);
total = addShoppingCar(200);
total = addShoppingCar(900);

console.log(`La suma de los product es: ${total}`);

const totaltoPay = calculateTax(total)

console.log(`La suma de los productos mas el impuestos es: ${totaltoPay}`)