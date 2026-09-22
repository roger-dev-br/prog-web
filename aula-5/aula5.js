// Criar uma váriavel
let nome;

// Atribuir um valor para a varíavel nome
nome = "Roger";

// Criar uma variável e atribuir um valor
let idade = 45;

// Constante
const percentualDeDesconto = 15;

let sobreNome = "Medeiros";

let nomeCompleto = nome + " " + sobreNome;

// Soma de 2 números
let soma = 15 + 25;

// Substração
let subtracao = 25 - 6;

// Divisao
let divisao = 100 / 2;

let divisaoNaoInteira = idade / 2;

// Módulo de divisão
let resto = idade % 2;
// Exemplo 
// resto = 15 % 2
// resultado = 1

// resto = 44 % 2
// resultado = 0

let multiplicacao = 10 * 10;

let apresentacao = `Olá! Meu nome é ${nome} e tenho 
    ${idade} anos de idade.`;

let verdadeiro = true;

let falso = false;

let maiorDeIdade = idade >= 18;

let terceiraIdade = idade > 65;

if (idade >= 18) {
    // Pode Entrar
}

if (nome == "Roger") {
    // Código para professor
} else {
    // aluno
}

if (idade !== 30) {
    // Nao tem 30
}


// Numero primo - número que só é divisivel
// por 1 ou por ele mesmo
function primo(numero) {
    if (numero === 1) {
        return false;
    }

    if (numero === 2) {
        return true;
    }

    if (numero % 2 === 0) {
        return false;
    }

    // Buscar a Raiz quadrada
    const limite = Math.sqrt(numero);
    for (let i = 3; i <= limite; i++ ) {
        if (numero % i === 0) {
            return false;
        }            
    }  
    
    return true;
}

let resposta = primo(1049);

console.log(resposta);
console.log(nome);

// Enquanto
let valor = 10;

while (valor < 5230) {
    valor = valor * 2;
}