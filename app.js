let amigos = [];
let listaAmigos = document.getElementById("listaAmigos");
let resultado = document.getElementById("resultado");



function limparCampo() {
    inputAmigo = document.querySelector('input');
    inputAmigo.value = '';
}

function atualizarLista() {
    listaAmigos.innerHTML = ''; 
    for (let i = 0; i < amigos.length; i++) {
        let itemAmigo = document.createElement("li");
        itemAmigo.textContent = amigos[i];
        listaAmigos.appendChild(itemAmigo);
    }
}

function adicionarAmigo() {
    let inputAmigo = document.getElementById("amigo").value.trim();
    if(inputAmigo === ''){
        alert('Você digitou um nome inválido. Por favor, digite outro.');
        return;
    }
    amigos.push(inputAmigo);
    atualizarLista();
    limparCampo();
    resultado.innerHTML = '';
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("A lista está vazia! Adicione amigos antes de sortear.");
        return;
    }
    let max = amigos.length;
    let numeroAleatorio = Math.floor(Math.random() * max);
    let amigoSorteado =amigos[numeroAleatorio];
    let amigoResultado = document.createElement("li");
    amigoResultado.textContent = `O amigo sorteado foi ${amigoSorteado}!!`;
    resultado.appendChild(amigoResultado);
    listaAmigos.innerHTML = '';
    amigos = [];
}
