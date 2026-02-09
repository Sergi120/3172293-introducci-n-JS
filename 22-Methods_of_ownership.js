// Metodos de propiedad-Juan jose tejada

const player = {
    play : function(id){
        console.log("playing song...", id );
    },

    pause : function(id){
        console.log(`"Paused...", ${id}`);
    },

    delete : function(id){
        console.log(`"deliting song...", ${id}`);
    },

    playlist : function(){
        console.log(`"Creating a playlist..."`)
    }
}

console.log(player);
player.play(217);
player.pause(217);
player.delete(217);
player.playlist();