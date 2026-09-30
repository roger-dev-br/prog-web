const formulario = document.getElementById("formulario");
const inputNome = document.getElementById("nome");
const erro = document.getElementById("erro-nome");
const listaNomes = document.getElementById("lista-nomes");

function validaNome(nome) {
    if (nome.length < 3) {
        return "O nome deve ter pelo menos 3 caracteres";
    }

    if (nome.length > 50) {
        return "O nome deve ter no máximo 50 caracteres";        
    }
}

formulario.addEventListener("submit", (ev) => {
    ev.preventDefault();

    const nome = inputNome.value;
    const textoErro = validaNome(nome);

    if (textoErro) {
        erro.textContent = textoErro;
        inputNome.classList.add("invalido");
        return;
    }

    // Não tem erro
    inputNome.classList.remove("invalido");
    erro.textContent = "";

    const li = document.createElement("li");
    li.textContent = nome;
    listaNomes.appendChild(li);

    formulario.reset();
    inputNome.focus();
});