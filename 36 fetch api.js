//=== What did ES6 bring? =====
//Classes: clearer syntax for objetos.
//Promises: management of asynchronicity.
// Modules: improt and export

//**
// Fetch API es una funcion JS que permite hacer peticiones HTTP,
// GET, POST, PUT, DELETE, ETC, ES UNA API moderna
//  */

function getEmployees(){
    //fetch("Aqui se copia la URL",)
    const file = "/data/employees.json";

    fetch (file)
    //Obtenemos datos
    .then((result) => {
        return result.json();
    })

    //este Then es para acceder a los datos

   .then(data => {
            const{ employees} = data;
        
            employees.forEach( employe =>{
                console.log(employe.id);
                console.log(employe.user);
                console.log(employe.job);
                
                document.querySelector('.content').textContent += employe.user;
            })
            console.log(data);
        })

        console.log(employees);
}
getEmployees();