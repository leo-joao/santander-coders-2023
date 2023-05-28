// Repetição controlada - FOR

const input = require('readline-sync');


// O problema
// const nota1 = Number(input.question("Informe a nota 1: "));
// const nota2 = Number(input.question("Informe a nota 2: "));
// const nota3 = Number(input.question("Informe a nota 3: "));

// let media = (nota1 + nota2 + nota3) / 3;

// Acumulador
// let acumulador = 0;

// acumulador += 10;   // soma ela mesmo e mais 10
// acumulador -= 10;   // dimiui ela mesma e mais 10
// acumulador++    // incrementa em 1 o valor da variável

// Estrutura for

let acumulador = 0;
for (let i = 1; i <= 3; i++) {
    acumulador += Number(input.question(`Informe a ${i} nota `, i));
}

console.log(acumulador);
console.log("Média: ", acumulador/3);