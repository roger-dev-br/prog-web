/*Crie uma constante com um número inteiro
(ex: 7). 
Utilizando um laço for de 1 a 10, exiba
no console a tabuada completa no formato: 
"7 x 1 = 7", "7 x 2 = 14", etc.*/

const numero = 9;

for(let i = 1; i <= 10; i++) {
   // 7 x 1 = 7
   console.log(
    `${numero} x ${i} = ${numero * i}`
    );
}