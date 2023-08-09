// Object.preventExtensions
const produto = Object.preventExtensions({
    nome: 'Notebook', preco: 4400, tag: 'Promoção'
})

console.log(produto)
console.log(`Extensivel: ${Object.isExtensible(produto)}`)

produto.nome = 'Borracha' // Pode modificar atributos já existentes
produto.descricao = 'Borracha escolar' // Não pode adicionar novos atributos
delete produto.tag // Pode deletar
console.log(produto)

// Object.seal

const pessoa = { nome: 'Juliana', idade: 39 }
Object.seal(pessoa)
console.log('Selado: ', Object.isSealed())

pessoa.sobrenome = 'Silva' // Não pode adicionar atributos
delete pessoa.nome  // Não pode deletar
pessoa.idade = 29 // Pode modificar
console.log(pessoa)

// Object.freeze = sealed + valores constantes

