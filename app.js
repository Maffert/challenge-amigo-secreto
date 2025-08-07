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

function mostrarListaAmigos() {
    //Obtener el elemento de la lista
    const lista = document.getElementById('listaAmigos');

    //Limpiar el contenido previo para evitar duplicados
    lista.innerHTML = "";

    //Recorrer el array de amigos usando un bucle for
    for (let i = 0; i < amigos.length; i++) {
        //Crear un nuevo elemento <li> para cada amigo
        const item = document.createElement('li');
        item.textContent = amigos[i];
        //Agregar el <li> al <ul>
        lista.appendChild(item);
    }
}

function limpiarResultado(){
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
    }

    //Funcion para sortear al amigo secreto
function sortearAmigo() {
    //Se valida que haya amigos en la lista disponible
    if (amigos.length === 0) {
        alert('Por favor agrega al menos un nombre para iniciar el sorteo');
        return;
    }

    //Genera un indice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceAleatorio];
    
    // Mostrar el resultado
    mostrarResultado(amigoSecreto);

    //Reiniciar una vez mostrado el nombre sorteado
    reiniciarSorteo();
}

function mostrarResultado(amigoSecreto) {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li> El amigo secreto es: <strong>${amigoSecreto}</strong> </li>`;
}

//Reiniciar el juego
function reiniciarSorteo() {
    amigos = []; 
    mostrarListaAmigos(); 
}

//Funcionalidades:   
//1.Agregar nombres
//2.Validar entrada
//3.Visualizar la lista
//4.Sorteo Aleatorio
//5.Limpia el campo de entrada 


