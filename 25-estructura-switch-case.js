// Estructura switch
// Permite evaluar una expresion y ejecutar diferentes bloques de codigo. segun el caso que coincida.

const paymentMethod = 'card';

switch (paymentMethod) {
    case 'card':
        console.log('pagaste con tarjeta');
        break;
    case 'bitcoin':

        break;
    case 'debitCard':

        break;
    case 'creditCard':
        console.log('Pagaste con tarjeta de credito');
        break;

    default:
        console.log('Metodo de pago No valido');
        break;

}

//-----------------------------------------------
