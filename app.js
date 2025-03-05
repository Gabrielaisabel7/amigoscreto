let amigos = [];

function adicionarAmigo() {
    let nome = document.getElementById("amigo").value;
    if (nome === "") {
        alert("Por favor, insira um nome.");
    } else {
        amigos.push(nome);
        atualizarLista();
        document.getElementById("amigo").value = "";
    }
}
function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach(function(amigo) {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Não há amigos para sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];
    document.getElementById("resultado").innerHTML = "Amigo sorteado: " + amigoSorteado;
}