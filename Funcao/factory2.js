function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.2
    }
}

console.log(criarProduto('Arroz', 100.00))