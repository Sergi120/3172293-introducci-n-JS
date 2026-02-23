


/**
 * Async await
 * Son caracteristicas de JS que facilitan trabajar con funcione asincronaas permitiendo escribir codigo que se parece mas al sincrono y mas facil de leer
 * 
 * Antes del 2015 se usaba .then() y catch(), pero se usa async y await, que internamente siguen usando promesas,
 * 
 * async: Declara una funcion asincronica, que siempre devuelve una promesa
 * await: Pausa la ejecucion de la funcion async hasta que una promesa se resuelva o rechaza, devolviendo como resultado la promesa.
 */

//=========================================

// Ejemplo con una funcion que se cumple

// Funcion para descargar los nuevos cleintes
//function downloadNewClients(){

  //  return new Promise(resolve => {
    //    console.log("Descargando clientes... espere por favor.");
    

   // setTimeout(() => {
     //   console.log(resolve, "Los clientes fueron descargados")
  //  }, 3000);
   // })
//};

//async function app() {
  //  try{
    //    const result = await downloadNewClients();
      //  //Codigo bloqueado hasta que se resuelva la promersa
      //  console.log("Codigo que SI se bloquea")
      //  console.log(result);
   // } catch (error) {
      //  console.log(error);
    //}
    
//}

function downloadNewClients(){

    return new Promise(resolve => {
        console.log("Descargando clientes... espere por favor.");
    

    setTimeout(() => {
        console.log(resolve, "Los clientes fueron descargados")
   }, 6000);
    })
};

function downloadLastOrders(){

    return new Promise(resolve => {
        console.log("Descargando ultimas ordenes... espere por favor.");
    

    setTimeout(() => {
        console.log(resolve, "Las ultimas ordenes fueron descargadas")
    }, 8000);
    })
};

async function app() {
    try{
    //    const result = await downloadNewClients();
       // const lastOrders = await downloadLastOrders
        //Codigo bloqueado hasta que se resuelva la promersa
        console.log("Codigo que SI se bloquea")
      //  console.log(clients);
       // console.log(lastOrders)

       //ahora se va a intentar una forma mas eficiente que dependa una de la otra
       const result = await Promise.all([downloadNewClients(),
        downloadLastOrders()])

      //console.log("Codigo que SI se bloquea");
       console.log(result[0]);
       console.log(result[1]);
       console
    } catch (error) {
        console.log(error);
    }
    
}
app();
console.log("codigo que No se bloquea")