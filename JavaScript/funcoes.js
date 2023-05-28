//  Métodos e funções tem parênteses no final

function saudacao() {
    console.log("Olá, seja bem vindo!");
}

saudacao();

// como enviar parametros para funcoes
// Se não passar parâmetro ele vai assumir "undefined"
function saudacao2(nome, curso="JavaScript") {
    console.log(`Olá, ${nome} que estuda ${curso}! Seja bem vindo!`);
}

saudacao2("Jão");

// retorno da função
function soma(num1, num2) {
    return num1 + num2; // a função sempre ACABA no return
}

let resultado = soma(12, 12);

console.log(resultado);