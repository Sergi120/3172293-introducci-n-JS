//solicitar permisos para uso de camara y microfono

const button = document.querySelector(".button");

button.addEventListener('click', async() => {

      try {
 
        await navigator.mediaDevices.getUserMedia({video: true, audio: true });


      const permission = await Notification.requestPermission();

      console.log(`Estado del permiso ${permission}`)

      if (permission === 'granted'){
        new Notification("permiso concedido",{
            body: "!Camara activada",
            icon: "/assets/icons/img1.png"
        });
       }else{
        console.log(`Permiso denegado`);
      }
     } catch(error){
    console.log(`Error al solicitar el permiso`, error);
    alert (`No se concedieron los permisos solicitados`)
      }
}
);