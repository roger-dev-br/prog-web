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

elementosClicaveis.forEach((elemento) => {
    elemento.addEventListener("click", () => {
        elemento.classList.toggle("zoom");
    });
});

const titulo2 = document.getElementById("titulo2");
setTimeout(() => {
    // Atualiza o texto do título 2
    // titulo2.innerText = "Aula 8 - JavaScript: Manipulação de DOM e Eventos";
    titulo2.style.color = "blue";
}, 2000);

const add = document.getElementById("botao-add");
const lista = document.getElementById("lista-tags");
add.addEventListener("click", () => {
    const novoElemento = document.createElement("li");
    novoElemento.textContent = prompt("Digite o nome da tag:");
    lista.appendChild(novoElemento);
});

const remove = document.getElementById("botao-remove");
remove.addEventListener("click", () => {
    const valor = prompt("Digite o nome da tag que deseja remover:");
    // Procura o elemento na lista lista-tags
    const elementos = lista.getElementsByTagName("li");
    for (let i = 0; i < elementos.length; i++) {
        console.log(elementos[i].textContent);
        if (elementos[i].textContent.trim() === valor.trim()) {
            lista.removeChild(elementos[i]);
            break;
        }
    }
});

const destacar = document.getElementById("botao-destacar");
destacar.addEventListener("click", () => {
    const valor = prompt("Digite o nome da tag que deseja destacar:");
    // Procura o elemento na lista lista-tags
    const elementos = lista.getElementsByTagName("li");
    for (let i = 0; i < elementos.length; i++) {
        if (elementos[i].textContent.trim() === valor.trim()) {
            elementos[i].classList.toggle("destacado");
            break;
        }
    }
});
