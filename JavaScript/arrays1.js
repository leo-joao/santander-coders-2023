// Arrays

let arr = [1, "Léo", 1.34, false];

// console.log("Primeiro elemento: ", arr[0]);
// console.log("Segundo elemento: ", arr[1]);
// console.log("Terceiro elemento: ", arr[2]);
// console.log("Quarto elemento: ", arr[3]);

// console.log("Tamanho: ", arr.length);

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// É igual ao foreach do PHP
for (let elemento of arr) {
    console.log(elemento);
}

for (let indice in arr) {
    console.log(indice, arr[indice]);
}