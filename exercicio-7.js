//As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs compradas, calcule e escreva o valor total da compra.

const prompt = require('prompt-sync')()

let apples = Number(prompt('Digite o número de maçãs que comprou: '))
let value = 0

if (apples < 12) {
	value = apples * 0.3
} else {
	value = apples * 0.25
}

console.log(`Você irá pagar R$ ${value}`)
