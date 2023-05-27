// Booleanos

// Igual:              == (ou ===)
// Diferente:          != (ou !==)
// Maior que:          >
// Maior ou igual:     >=
// Menor que:          <
// Maior ou igual:     <=

const numero=10;

console.log(numero == 10);

console.log(10 == '10');    // true - conteúdo
console.log(10 === '10');   // false conteúdo e tipo

if (numero !== '10') console.log("sim")

let idade = 40;

// Comparadores

// AND: &&
// OR:  ||
// NOR: !

const votoFacultativo = idade < 18 || idade >= 70;

console.log()