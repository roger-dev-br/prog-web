/*
Crie uma variável com o ano de nascimento de uma 
pessoa. Calcule a idade aproximada com base no ano 
atual (2026). Usando if e else, exiba se a pessoa 
já atingiu a maioridade penal (18 anos ou mais) 
ou se ainda é menor de idade.
*/

const ano = 2009;
const idade = 2026 - ano;

if (idade >= 18) {
    alert('Maior de idade');
} else {
    alert('Menor de idade');
}