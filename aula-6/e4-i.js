/*Declare constantes para usuarioEsperado 
e senhaEsperada. 
Declare outras duas variáveis para 
usuarioDigitado e senhaDigitada. 

Usando operadores lógicos (&&), valide o 
acesso exibindo 
"Login efetuado com sucesso" 
ou "Usuário ou senha incorretos".*/

const usuarioEsperado = "admin";
const senhaEsperada = "123";

const usuarioDigitado = prompt("Usuário");
const senhaDigitada = prompt("Senha");

if (usuarioEsperado === usuarioDigitado 
    && senhaEsperada === senhaDigitada) {
    alert('Login ok');
} else {
    alert('Usuario ou senha incorretos');
}