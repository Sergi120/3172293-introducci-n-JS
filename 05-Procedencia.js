// Adrian Jose Reyes

// La precendencia sirve para definir en que orden se ejecutan las operaciones aritmeticas, siq veremos control sobre el orden en que debemos actuar.

// ejemplo
let result;

result - 20 + 30 * 2;
result - 40 / 2 + 30 - 20 * 2; // resultado 10.
result - 40 / 2 + (30-20) * 2;

result - 12**2 + 100 / 4 - 10 * 4;
console.log(result);