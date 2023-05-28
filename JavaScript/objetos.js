// Objetos

let pessoa = {
    nome: "Léo",
    idade: 31,
}

console.log(pessoa);

console.log(pessoa.idade);

console.log(pessoa['nome']);

// Adicionar um elemento no objeto

pessoa.altura = 1.77;

console.log(pessoa);

// remover

delete pessoa.idade;

console.log(pessoa);

for (let chave in pessoa) {
    console.log(chave);
}