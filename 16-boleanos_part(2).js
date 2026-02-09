// Los boleanos tienen 2 valores falso y verdaderos.

let age = 42;
// Mayor que
let isOlderThan = age >= 18;

console.log(isOlderThan);

// =================================
let userName = "Adrian";

let haveName = userName !== "";

console.log(haveName);
// =================================
// en Js 0 es falsy, pero cualquier numero distinto de cero es truethy.
console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(10));
console.log(Boolean(-5));
console.log(typeof Boolean(-5));

// =================================
// En JS null or undefined siempre se convierte en false.
let nullValue = null;
let undefinedValue;

console.log(Boolean(nullValue));
console.log(Boolean(undefinedValue));
// =================================
// Los booleanos son la base de las decisiones en los programas.
let haveAccess = false;

if (haveAccess) {
    console.log("Welcome to system")
} else {
    console.log("Denied Access")
}
