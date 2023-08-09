Array.prototype.map2 = function (callback) {      // Implementando o MAP
    
    const newArray = []

    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this))
    }

    return newArray
}


const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }', 
    '{ "nome": "Kit de Lapis", "preco": 41.22}',
    '{ "nome": "Caneta", "preco": 7.50}'
]

// Retornar um array apenas com os preços

const paraObjeto = function (json) {
    return JSON.parse(json)
}

const apenasPreco = function (produto) {
    return produto.preco
}

const resultado = carrinho.map2(paraObjeto).map2(apenasPreco)

console.log(resultado)