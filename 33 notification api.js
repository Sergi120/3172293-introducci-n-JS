// Notificacion API
// La notificacion api es una interfaz del navegador que permite alas aplicaciones web mostrar notificaciones nativas del sistema operativo, incluso cuando la pestaña

const button = document.querySelector(".button");

button.addEventListener("click",()=> {
    console.log ("You made a click");
    Notification.requestPermission().then(permission =>{
        if (permission === "granted") {
        new Nowtification("Esta es una notificacion de Edwar",{
        body : "Aprendiedo JS en el SENA"
        });
        }else{
            console.log("Acesso denegado");
        }
    });
});