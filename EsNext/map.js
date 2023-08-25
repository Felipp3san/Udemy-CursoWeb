// Diferença de map para objeto : 
// chave de objeto é apenas um literal (string)
// chave de map pode ser uma função, objeto, numero... 

const tecnologias = new Map()

tecnologias.set('react', {framework: false})
tecnologias.set('angular', {framework: true})

console.log(tecnologias.react)  // Dá errado
console.log(tecnologias.get('react'))
console.log(tecnologias.get('react').framework)

const chavesVariadas = new Map([
    [function () { }, 'Função'],
    [{}, 'Objeto'],
    [123, 'Numero']
])

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})

console.log(chavesVariadas)

console.log(chavesVariadas.has(123))  // Verifica se o valor está contido dentro do map chavesVariadas
chavesVariadas.delete(123) // Deleta um valor
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)  // Verifica o tamanho

chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b') // Não pode ter chaves iguais, haverá substituição
chavesVariadas.set(456, 'b') // Pode ter valores iguais.
console.log(chavesVariadas)