// Operador ... rest(juntar)/spread(espalhar)
// usar rest com parametro de função (Revisão 2)

// usar spread com objeto
const funcionario = {
    nome: 'Maria',
    salario: 12542.00
}

const clone = {
    ativo: true,
    ...funcionario   // Adiciona os elementos do objeto funcionario em clone
}

console.log(clone)

// usar spread com array
const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela'] // Adiciona os elementos do array grupoA em grupoFinal
console.log(grupoFinal)