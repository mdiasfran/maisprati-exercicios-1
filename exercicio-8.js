//Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais) e escreve-los em ordem crescente.

const prompt = require('prompt-sync')()

let number1 = Number(prompt('Digite o primeiro número: '))
let number2 = Number(prompt('Digite o segundo número: '))

if (number1 === number2) {
	console.log('Digite números diferentes')
} else if (number1 < number2) {
	console.log(`Ordem crescente: ${number1}, ${number2}`)
} else {
	console.log(`Ordem crescente: ${number2}, ${number1}`)
}
