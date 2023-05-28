let array1 = [30, 12, 45, 34, 29];
let array2 = [];

// o parametro de "fim" não está incluso
console.log(array1.slice(1, 2)) //  vai mostrar 12

console.log(array1.slice(2)) //  mostra tudo a partir daquele

console.clear();


console.log("Antes do push", array2);

// array.push sempre adiciona no final
array2.push(10, 20, 30, 50);
array2.push(234);

console.log("Depois do push", array2);

array2.unshift(0)


console.log("Depois do unshift", array2);

// Pop remove o ultimo
console.log("Antes de remover - pop", array2);

let elemento1 = array2.pop()

console.log("Depois de remover - pop", array2);
console.log("Elemento removido ", elemento1);

// shift remove o primeiro
console.log("Antes de remover - shift", array2);

let elemento2 = array2.shift()

console.log("Depois de remover - shift", array2);
console.log("Elemento removido ", elemento2);

// concatenar 2 arrays

let array3 = array1.concat(array2);

let array4 = array2.concat(array1);

console.log(array3);
console.log(array4);

// Sempre que procurado um elemento que não está no array o retorno do index é -1
let indice34 = array1.indexOf(34);

//caso hajam 2 elementos iguais, vai retornar sempre o primeiro
// pra pegar o último elemento precisa do lastIndexOf

console.log(indice34);

// para ver se o item está dentro do array

console.log(array1.includes(15));    // retorna false

let arrayInvertido = array1.reverse();

console.log(arrayInvertido);