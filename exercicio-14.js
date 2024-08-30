//Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando um loop for ou while

const prompt = require('prompt-sync')()

let number = Number(prompt('Digite um número: '))

let factorial = 1

for (let i = 1; i <= number; i++) {
    factorial *= i
}

console.log(`O fatorial de ${number} é: ${factorial}`)