let age = 23 // Escopo global

if(true) {
	 let age = 40 // Os dois console resulta em 23
	//  let age = 40 -> o primeiro console resulta em 40 e o segundo em 23
	console.log(`Dentro do 1° bloco de codigo: ${age}`) //saida: 23
}

console.log(`Fora do bloco de codigo: ${age}`)