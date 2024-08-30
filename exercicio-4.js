//Crie um menu interativo no console que oferece ao usuário a escolha de três opções. Utilize switch-case para implementar a lógica de cada opção selecionada

const prompt = require('prompt-sync')()
let option = prompt('Escolha uma opção: 1 - Azul, 2 - Roxo, 3 - Verde: ')

switch (option) {
	case '1':
		console.log('Você escolheu azul')
		break
	case '2':
		console.log('Você escolheu roxo')
		break
	case '3':
		console.log('Você escolheu verde')
		break
	default:
		console.log('Opção inválida')
}
