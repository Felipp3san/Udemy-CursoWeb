function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: "Notebook",
    preco: 4568,
    desc: 0.15,
    getPreco
}

global.preco = 1000
global.desc = 0.15
console.log(getPreco())
console.log(produto.getPreco())

const carro = {
    preco: 50500,
    desc: 0.20
}

console.log(getPreco.call(carro, 0.17, '$'))
console.log(getPreco.apply(carro, [0.17, '$']))