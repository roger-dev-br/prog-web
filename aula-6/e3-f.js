/*Utilizando a estrutura while, 
implemente uma contagem regressiva de 10 
até 1. 
Ao final do laço (quando atingir 0), 
exiba no console a mensagem "Decolagem autorizada!".*/

let controle = 10;

while (controle >= 0) {
    console.log(`${controle}...`);
    controle--;
}

console.log("Decolando...");