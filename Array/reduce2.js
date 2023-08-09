Array.prototype.reduce2 = function (callback) {  // Implementando REDUCE
    let acumulador = this[0];

    for (let i = 1; i < this.length; i++) {
        acumulador = callback(acumulador, this[i], i, this)
    }

    return acumulador
}

const alunos = [
    { nome: 'João', nota: 7.3, bolsista: true},
    { nome: 'Maria', nota: 9.2, bolsista: false},
    { nome: 'Pedro', nota: 9.8, bolsista: true},
    { nome: 'Ana', nota: 8.7, bolsista: false}    
]

console.log(alunos.map(a => a.nota))
const resultado = alunos.map(a => a.nota).reduce2(function(acumulador, atual) {
    return acumulador + atual
})

console.log(resultado)

// Desafio 1: Todos os alunos são bolsistas?

const todosBolsistas = alunos.map(a => a.bolsista).reduce2( function (anterior,atual) {
    return anterior && atual
})

console.log(todosBolsistas)

// Desadio 2: Algum aluno é bolsista?

const algumBolsista = alunos.map(a => a.bolsista).reduce2( function (anterior,atual) {
    return anterior || atual
})

console.log(algumBolsista)