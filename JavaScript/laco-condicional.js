// Controles de fluxo

const input = require('readline-sync');

const numero_sorteado = 5;

let numero = Number(input.question("Escolha um número de 0 a 10: "));

console.log(numero, typeof numero);

while (numero !== numero_sorteado) {
    console.log("Você errou. Tente novamente...");

    numero = Number(input.question("Escolha um número de 0 a 10: "));
}

console.log("Você acertou!");