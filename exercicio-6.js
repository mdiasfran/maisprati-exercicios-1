//Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo: Isósceles, escaleno ou eqüilátero.

const prompt = require('prompt-sync')()

let sideA = Number(prompt('Digite o valor do primeiro lado do triângulo: '))
let sideB = Number(prompt('Digite o valor do segundo lado do triângulo: '))
let sideC = Number(prompt('Digite o valor do terceiro lado do triângulo: '))

if (sideA < sideB + sideC && sideB < sideA + sideC && sideC < sideA + sideB) {
	console.log('É um triângulo')

	if (sideA === sideB && sideB === sideC) {
		console.log('Triângulo equilátero')
	} else if (sideA === sideB || sideA === sideC || sideB === sideC) {
		console.log('Triângulo isósceles')
	} else {
		console.log('Triângulo escaleno')
	}
}
