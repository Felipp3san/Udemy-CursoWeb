let valor; // Não inicializada
console.log(valor); // Undefined, foi declarada mas não inicializada.

valor = null; // Ausência de valor.
console.log(valor);
// console.log(valor.toString()); // ERRO.

const produto = {};
console.log(produto.preco);
console.log(produto);

produto.preco = 3.50;
console.log(produto);

produto.preco = undefined // Evitar. Deixar Undefined para linguagem.
console.log(!!produto.preco);
// delete produto.preco;
console.log(produto);

produto.preco = null; // Sem preco.
console.log(!!produto.preco);
console.log(produto);