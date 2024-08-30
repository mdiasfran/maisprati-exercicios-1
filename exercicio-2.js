//Crie um programa que classifica a idade de uma pessoa em categorias (criança, adolescente, adulto, idoso) com base no valor fornecido, utilizando APENAS uma estrutura de controle if-else.

let age = 20

if (idade >= 0 && idade <= 12) {
	console.log('Categoria: criança')
} else {
	if (idade >= 13 && idade <= 17) {
		console.log('Categoria: adolescente')
	} else {
		if (idade >= 18 && idade <= 64) {
			console.log('Categoria: adulto')
		} else {
			if (idade >= 65) {
				console.log('Categoria: idoso')
			}
		}
	}
}
