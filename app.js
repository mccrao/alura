let amigos = [];

function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nombre = inputAmigo.value.trim(); 
    
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    amigos.push(nombre); 
    inputAmigo.value = ""; 
    mostrarAmigos(); 
}

function mostrarAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; 

    amigos.forEach(amigo => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });

    console.log("Lista de amigos actualizada:", amigos); 
}

function sortearAmigo() {
    let resultadoLista = document.getElementById("resultado");

    console.log("Ejecutando sortearAmigo()...");
    console.log("Lista de amigos antes de sortear:", amigos);

   
    if (amigos.length === 0) {
        console.log("Error: No hay amigos en la lista.");
        resultadoLista.innerHTML = `<li style="color: red;">No hay amigos en la lista para sortear.</li>`;
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    console.log("Amigo sorteado:", amigoSorteado);

    resultadoLista.innerHTML = `<li style="color: green;">El amigo secreto sorteado es: <strong>${amigoSorteado}</strong></li>`;
}
