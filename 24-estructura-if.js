// Estructura de control if
//const score = Number(prompt('Ingrese el puntaje'));

//if (score == 100) {
//   console.log(`Si el puntaje es 100`)
//}else{
//   console.log(`El puntaje es diferente de 100`);

//}

//const score = Numbre(prompt('Igrese el puntaje'));
//} else {
//  console.log(`Si el puntaje es 100`)
//}

const rol = String(prompt('Ingrese su rol'))

if (rol == 'admin') {
    console.log('Tienes acceso a todo el sistema');
} else if (rol == 'editor') {
    console.log('puedes editar funciones basicas');
} else {
    console.log('No tienes acceso al sistema');
}