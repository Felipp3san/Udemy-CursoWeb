console.log(typeof Array, typeof new Array, typeof []) // Um array é um objeto em javascript

let aprovados = new Array ('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3]) // Posição vazia é igual a undefined

aprovados[3] = 'Paulo' // 1ª forma de adicionar elementos no array
aprovados.push('Abia') // 2ª forma de adicionar elementos no array
console.log(aprovados.length) // Forma de visualizar o tamanho do array

aprovados[9] = 'Rafael'  // É possivel adicionar novos elementos em qualquer posição, os itermediários serão definidos como undefined
console.log(aprovados.length)

console.log(aprovados[8] === undefined) // true

console.log(aprovados)
aprovados.sort()  // Faz a ordenação do array
console.log(aprovados)

delete aprovados[1] // Remove um item do array mas não reordena
console.log(aprovados[1]) // Undefined
console.log(aprovados[2])  // Continua no mesmo local

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1,1) // 2ª posição, remover 1 elemento.
aprovados.splice(1,0) // 2ª posição, não remover elementos.
aprovados.splice(1,1, 'Elemento1', 'Elemento2') // 2ª posição, remover 1 elemento e adicionar dois novos elementos.
aprovados.splice(1,0, 'Elemento1', 'Elemento2') // 2ª posição, não remover elementos e adicionar dois novos elementos.
console.log(aprovados)

