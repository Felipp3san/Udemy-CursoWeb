const sequence = {
    _id : 1,
    get id() { return this._id++ }
}

const produtos = {}

function salvarProduto(produto) {
    if(!produto.id)  
        produto.id = sequence.id

    produtos[produto.id] = produto
    return produto
}

function getProduto(id){
    return produtos[id] || {}
}

function getProdutos(){
    return Object.values(produtos)
}

function excluirProduto(id) {
    const produto = produtos[id]
    delete produtos[id]
    return produto
}

// Exporta todas as funções necessárias
module.exports = {salvarProduto, getProduto, getProdutos, excluirProduto}

// salvarProduto({nome:'notebook', valor:2700})
// console.log(salvarProduto({nome:'celular', valor:1500}))  // Função tem return e retorna o produto com o ID que foi adicionado na função
// //console.log(getProduto(1)) // Retorna um produto pelo ID
// console.log(getProdutos()) // Retorna todos os produtos


