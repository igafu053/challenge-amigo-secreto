/*El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
Aquí deberás desarrollar la lógica para resolver el problema.*/
let amigo = [];

function agregarAmigo() {
    let imputAmigo = document.getElementById('amigo');
    let nombreAmigo = imputAmigo.value.trim();

    // Validar que el nombre solo contenga letras y espcios
    let regex = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/;	
    if(!nombreAmigo) {
        alert('¡Debes ingresar un nombre!');
        return;
    } else if(!regex.test(nombreAmigo)) {
        alert('¡Sólo se permiten letras y espacios en los nombres!');
        imputAmigo.value = "";
        imputAmigo.focus();
        return;
    } else if (amigo.length >= 5) {
        alert('¡Sólo puedes agregar un máximo de 5 amigos!');
        imputAmigo.value = "";
        imputAmigo.focus();
        return;
    } else {
    amigo.push(nombreAmigo);
    imputAmigo.value = "";
    imputAmigo.focus();
    renderizarAmigos();
    }
}

function renderizarAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";

    for(let i = 0; i < amigo.length; i++) {
        let item = document.createElement('li');
        item.textContent = amigo[i];
        listaAmigos.appendChild(item);
    }
}

function sortearAmigo() {
    let listaAmigos = document.getElementById('listaAmigos');
    let items = listaAmigos.getElementsByTagName('li');

    if(items.length < 2) {
        alert('¡Debes ingresar al menos dos amigos!');
        return;
    } else {
        let amigoSorteado = amigo[Math.floor(Math.random() * amigo.length)];
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;
        let limpiarLista = document.getElementById('listaAmigos');
        limpiarLista.innerHTML = "";
    }
}

function resetearSorteo() {
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = "";
    amigo = [];
    renderizarAmigos();
}
