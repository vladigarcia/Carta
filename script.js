console.log("Carta 3 meses ❤️");


// Fotos

const fotos = [

    "img/2.jpeg",
    "img/1.jpeg",
    "img/3.jpeg",
    "img/4.jpeg",
    

];


let indice = 0;



// Abrir ventana

function mostrarMensaje(){


    document.getElementById("ventana").style.display="flex";


    document.getElementById("foto").src = fotos[indice];



    // Música Fade In

    const musica = document.getElementById("musica");


    musica.volume = 0;


    musica.play().then(()=>{


        let volumen = 0;


        let subir = setInterval(()=>{


            if(volumen < 1){


                volumen += 0.05;


                musica.volume = volumen;


            }else{


                clearInterval(subir);


            }


        },200);



    }).catch(error=>{


        console.log("Audio bloqueado:",error);


    });



}




// Cerrar ventana

function cerrarMensaje(){


    const musica = document.getElementById("musica");


    let volumen = musica.volume;



    let bajar = setInterval(()=>{


        if(volumen > 0){


            volumen -= 0.05;


            musica.volume = volumen;



        }else{


            musica.pause();


            clearInterval(bajar);


        }



    },200);



    document.getElementById("ventana").style.display="none";


}




// Siguiente foto

function siguiente(){


    indice++;


    if(indice >= fotos.length){


        indice = 0;


    }


    document.getElementById("foto").src = fotos[indice];


}




// Foto anterior

function anterior(){


    indice--;


    if(indice < 0){


        indice = fotos.length-1;


    }


    document.getElementById("foto").src = fotos[indice];


}