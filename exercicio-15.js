//Escreva um programa que gera e imprime os primeiros 10 números da sequência de Fibonacci utilizando um loop for.

const prompt = require('prompt-sync')()

let a = 0
let b = 1

console.log(a)

for (let i = 1; i < 10; i++) {
    let c = a + b
    console.log(c)

    a = b
    b = c
}
