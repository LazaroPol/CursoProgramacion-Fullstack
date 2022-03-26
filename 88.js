function cambiaNumero() {
   
    var miNumeroString = document.getElementById("miNumero").value;
    var miNumero = parseInt(miNumeroString, 10);
    miNumero = miNumero + 1;

    if (miNumero > 3) {
        miNumero = 0 
    }
    document.getElementById("miNumero").value = miNumero; //Aqui cambio mi numero por cambiaImagen
    cambiaImagen(miNumero)
}

function cambiaImagen(miNumero){   //Aqui aplico el cambio de cambiaImagen
    
// Aqui abajo linko las imagenes dentro de un var
var foto0 ="https://images.vexels.com/media/users/3/139880/isolated/preview/5c7018165ca328f070d73ea0b92c61e7-gato-corriendo-secuencia-3-by-vexels.png" 
var foto1 = "https://images.vexels.com/media/users/3/139884/isolated/preview/7ffed8bcebaa6bbcba2d11bae1d6f5d5-gato-corriendo-secuencia-7-by-vexels.png"
var foto2 = "https://images.vexels.com/media/users/3/139874/isolated/preview/a1ed019282a0573875216eddc0dc697b-gato-corriendo-secuencia-15-by-vexels.png"
var foto3 = "https://images.vexels.com/media/users/3/139878/isolated/preview/ef0393ca5af17e8c22cdbca3fd3889a4-gato-corriendo-secuencia-19-by-vexels.png"

const gatos = [foto0, foto1, foto2, foto3]; // Creo la array SIN COMILLAS PORQ QUIERO SU VALOR, NO QUE SALGA ESCRITO

var gatoSeleccionado = gatos[miNumero]; //el gato seleccionado ahora varia entre el numero q salga  por el [miNumero]


document.getElementById('miImagen').src=gatoSeleccionado; //Mostramos los gatos cambiando porq al guardar todos en la variable gatoselecc, esta automatizado.
}


function cambiaNumeroReloj() {   //
    
cambiaNumero();
setTimeout(cambiaNumeroReloj, 1000);
    


//DEBERES PONER UN RELOJ DIGITAL






}