/*El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
Aquí deberás desarrollar la lógica para resolver el problema.*/
let amigo = [];

function agregarAmigo() {
    let imputAmigo = document.getElementById('amigo');
    let nombreAmigo = imputAmigo.value;

    if(!nombreAmigo) {
        alert('¡Debes ingresar un nombre!');
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
    }

    let amigoSorteado = amigo[Math.floor(Math.random() * amigo.length)];

    alert('El amigo sorteado es: ' + amigoSorteado);
}
