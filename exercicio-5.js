//Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade) utilizando if-else. 

const prompt = require('prompt-sync')()

let weight = Number(prompt('Digite o seu peso: '))
let height = Number(prompt('Digite a sua altura: '))
let imc = weight / (height * height)

if (imc < 18.5) {
	console.log('Abaixo do peso')
} else if (imc >= 18.5 && imc < 25) {
	console.log('Peso normal')
} else if (imc >= 25 && imc < 30) {
	console.log('Sobrepeso')
} else {
	console.log('Obesidade')
}
