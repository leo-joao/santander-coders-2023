// Coerção de tipos
// texto sempre fica branco no console com esse tema Dracula

const numero = 10;

console.log(numero, typeof numero);

const numeroEmString = String(numero);

console.log(numeroEmString, typeof numeroEmString);

console.log(Number("123456"))
console.log(parseFloat("12.3456"))
console.log(parseInt("123456"))
console.log(Boolean(1))

// Coerção implícita

console.clear();

console.log('10' + 1);  // nesse caso ele converte tudo pra texto e concatena

console.log('10' - 1);  // nesse caso ele converte tudo pra número

console.log(10 * '3');  // Converte tudo pra número

console.log(10 - 'asasa'); // retorna NaN

console.log(2 + 3 + 4 + '5');   //saída é 95

console.log('5' + 2 + 3 + 4);   //saída é 5234

console.log('10' - '4' - '3' - 2 + '5');    // saída é 15

// É preciso tomar muito cuidado com essas coisas