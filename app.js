//Array donde se guardarán los nombres de los amigos - Variables
let amigos = [];

// Captura el valor del campo de entrada - Agregar Amigos

function agregarAmigo(){
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();
    
    // Validar la entrada

    if (nombreAmigo === "") {
        alert('Por favor, inserte un nombre');
    return;

    } 
    
    if (amigos.includes(nombreAmigo)) {
        alert('Tu amigo ya está incluido en la lista, favor de agregar uno diferente')
        return;
    } else {

        //Si el valor es válido, se añade a la lista de amigos
        amigos.push(nombreAmigo);
        mostrarListaAmigos();

        //Después de añadir el nombre, restablecer el campo de texto a una cadena vacía.
        inputAmigo.value = '';
        console.log(amigos);   
    }
}

