//Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números. 

const prompt = require('prompt-sync')();

let sum = 0;
let count = 0;
let number = Number(prompt('Digite um número (0 para sair): '));

while (number !== 0) {
    sum += number;
    count++;
    number = Number(prompt('Digite outro número (0 para sair): '));
}

if (count > 0) {
    let avg = sum / count;
    console.log(`A média dos números é: ${avg}`);
} else {
    console.log('Nenhum número válido foi digitado.');
}
