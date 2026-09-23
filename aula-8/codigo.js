const botaoTema = document.getElementById("botao-tema");

botaoTema.addEventListener("click", () => {
    document.body.classList.toggle("modo-escuro");

    if (document.body.classList.contains("modo-escuro")) {
        botaoTema.textContent = "Modo claro";
    } else {
        botaoTema.textContent = "Modo escuro";
    }
});

const elementosClicaveis = document.querySelectorAll(".clicavel");

elementosClicaveis.forEach((el) => {
    el.addEventListener("mouseenter", () => {
       el.classList.toggle("zoom");
    });
});

const botaoAdd = document.getElementById("botao-add");
const listaTags = document.getElementById("lista-tags");
botaoAdd.addEventListener("click", () => {
    const texto = prompt("Informe a tag");

    const novoLi = document.createElement("li");
    novoLi.textContent = texto;
    listaTags.appendChild(novoLi);
});

const botaoDelete = document.getElementById("botao-remove");
botaoDelete.addEventListener("click", () =>{
    const texto = prompt("Informe a tag a remover:");

    const elementos = document.getElementById("lista-tags")
        .getElementsByTagName("li");
    
    for (let i = 0; i < elementos.length; i++) {
        if (elementos[i].textContent.trim() == texto.trim()) {
            listaTags.removeChild(elementos[i]);
            break;
        }
    }
});

// Relogio
setInterval(() => {
    const horaAtual = new Date();
    const horas = horaAtual.getHours();
    const minutos = horaAtual.getMinutes();
    const segundos = horaAtual.getSeconds()
        .toString().trim().padStart('0', 2);

    const clock = document.getElementById("clock");
    clock.textContent = `${horas}:${minutos}:${segundos}`;    
}, 1000);






const destacar = document.getElementById("botao-destacar");
destacar.addEventListener("click", () => {
    const valor = prompt("Digite o nome da tag que deseja destacar:");
    // Procura o elemento na lista lista-tags
    const elementos = listaTags.getElementsByTagName("li");
    for (let i = 0; i < elementos.length; i++) {
        if (elementos[i].textContent.trim() === valor.trim()) {
            elementos[i].classList.toggle("destacado");
            break;
        }
    }
});