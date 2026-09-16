/*
Declare uma constante com o valor original 
de um produto (150.00) e uma taxa de 
desconto fixa de 15%. 

Calcule o valor final após o desconto e exiba a frase: 
"O valor original era R$ [original] 
e com desconto ficou R$ [final]".
*/

const valorOriginal = 150.00;
const taxaDesconto = 15;

const valorFinal = ((100 - taxaDesconto) / 100) 
    * valorOriginal;

alert(`O valor original era R$ ${valorOriginal.toFixed(2)} e com desconto ficou ${valorFinal.toFixed(2)}`);