/*Crie uma variável chamada nomeUsuario 
inicializada com uma string vazia "". 

Crie uma estrutura de decisão que verifique 
se o valor é considerado falsy. 
Se for vazio, exiba "Nome inválido ou não 
preenchido"; caso contrário, exiba 
"Acesso liberado para: [nomeUsuario]".
*/

const nomeUsuario = "";

if ( ! nomeUsuario) {
    alert('Nome inválido');
} else {
    alert('acesso liberado');
}