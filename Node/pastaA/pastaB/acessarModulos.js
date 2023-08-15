const moduloA = require('../../ModuloA')  // "../" é utilizado para sair de uma pasta

console.log(moduloA.ola)

const saudacao = require('saudacao') // pasta do node_modules, node procura arquivo index, não é necessário escrever o caminho da pasta 

console.log(saudacao.ola)