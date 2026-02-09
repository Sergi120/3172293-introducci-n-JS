// This es una palabra reservada del sistema, o sea que no puede crear ni funciones ni variables con este nombre.

const reservation = {
 userName: "Edwar" ,
 Lastname: "Velazquez",
 userAge: 43,
 total: 100000,
 isPaid: false,

      information: function (){ 
      console.log(`El cliente ${this.userName} reservo y la cantidad a pagar es ${total}, hasta el momento el estado es  del pago es ${this.isPaid}`);
      }
};
// Los objetos puede contener funciones

const reservation2 = {
 userName: "Edwar" ,
 Lastname: "Velazquez",
 userAge: 43,
 total: 100000,
 isPaid: false,

      information: function (){ 
      console.log(`El cliente ${this.userName} reservo y la cantidad a pagar es ${total}, hasta el momento el estado es  del pago es ${this.isPaid}`);
      }
};

const reservation3 = {
 userName: "Edwar" ,
 Lastname: "Velazquez",
 userAge: 43,
 total: 100000,
 isPaid: false,

      information: () =>{ 
      console.log(`El cliente ${this.userName} reservo y la cantidad a pagar es ${total}, hasta el momento el estado es  del pago es ${this.isPaid}`);
      }
};
// This en este contexto hace referencia al objeto sobre el cual se esta mandando a llamar.
// Es obligatorio usar la funcion de esta manera, por esta hacer referencia al objeto que se esta usando.
reservation.information();
reservation2.information();

// Si se usa arrow function no es capaz leer los datos del contexto, dando como resultado undefined
reservation3.information();
