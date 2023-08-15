console.log(module.exports == exports)
console.log(module.exports == this)

console.log(module.exports)

this.a = 1
exports.b = 2    // this e exports são referencias para o objeto module.exports
module.exports.c = 3

console.log(module.exports)

exports = null  // Não funciona

console.log(module.exports)

exports = {  // Não funciona
    nome: 'teste'
}

console.log(module.exports)