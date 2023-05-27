// Condicionais


const idade = 20;


if (idade >= 18) {
    console.log('Você é maior de idade, já pode ser preso!')
} else {
    console.log('Você é menor de idade, não pode ser preso!')
}

// se média foi >= a 7 aprovado
// se média for >= 5 e <7 recuperação
// se média for < 5 reprovado

//console.clear() // limpando a tela

let media = 5;

if (media >= 7) {
    console.log('Aprovado');
} else if (media >=5) {
    console.log('Recuperação');
} else {
    console.log('Reprovado');
}

if (50 > 100) {
    console.log("Falta um tanto");
  } else {
    if ("1" == "-1") {
      console.log("Quase lá");    
    }
  
    if (!null) {
      console.log("Sucesso");
    }
  }