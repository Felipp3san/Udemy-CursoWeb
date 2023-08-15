const fs = require('fs')

const produto = {
    nome: 'Smartphone',
    preço: 2599.90,
    estado: 'Novo',
    classificacao: 'A'
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto) , err => {
    console.log(err || 'Arquivo salvo!')
})