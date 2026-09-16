/*
Menor que 12: "Criança"
De 12 a 17: "Adolescente"
De 18 a 59: "Adulto"
60 ou mais: "Idoso"
*/

const idade = 15;
let mensagem = "";

if (idade >= 60) {
    mensagem = "Idoso";
} else if (idade >= 18) {
    mensagem = "Adulto";
} else if (idade >= 12) {
    mensagem = "Adolescente";
} else {
    mensagem = "Criança";
}

alert(mensagem);
