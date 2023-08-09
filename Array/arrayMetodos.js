const pilotos = ['Vettel',  'Alonso', 'Raikkonen', 'Massa']
pilotos.pop()   // Remove o ultimo elemento do array
console.log(pilotos)

pilotos.push('Verstappen') // Adiciona um elemento no final da array
console.log(pilotos)

pilotos.shift() // Remove o primeiro elemento
console.log(pilotos)

pilotos.unshift('Hamilton') // Adiciona um elemento no inicio da array
console.log(pilotos)

// Splice pode adiciona ou remover elementos

//  Adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa') // Na terceira posição do array, adiciona os novos elementos
console.log(pilotos)

// Remover
pilotos.splice(3, 1) // Remove um elemento na posição 4 do array
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // A partir da terceira posição do array, cria um novo array
console.log(algunsPilotos1) 

const algunsPilotos2 = pilotos.slice(1, 4) // A partir da segunda posição do array, até a 5ª, sem inclui-la, para na 4ª
console.log(algunsPilotos2)