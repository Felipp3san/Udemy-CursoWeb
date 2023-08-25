let a = 1
console.log(a)

let p = new Promise(function (cumprirPromessa) {
//    cumprirPromessa(3, 4)  // Retorna apenas um valor, 4 não é lido
      cumprirPromessa(['Ana', 'Bia', 'Carlos', 'Daniel'])
})


p     // resultado do then anterior é passado ao próximo
    .then(valor => valor[0]) // Retorna primeiro elemento da array : 'Ana'
    .then(primeiro => primeiro[0]) // Retorna primeira letra do primeiro elemento: 'A'
    .then(letra => console.log(letra)) // Printa o retorno do then anterior: 'A' 


// Outra forma de utilizar o Promise 
// 1 - Sem atribuir a uma variável
// 2 - Deixando de atribuir funções anônimas ao then, criando as funções antes

primeiroElemento = arrayOuString => arrayOuString[0]  // Retorna o primeiro elemento da array ou string
primeiraLetra = primeiroElemento => primeiroElemento[0]  // Retorna a primeira letra do primeiro elemento

new Promise( resolve => { 
        resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
})
    .then(primeiroElemento) // 'Ana'
    .then(primeiraLetra) // 'A'
    .then(console.log) // Retorna o resultados dos then anteriores
                       // Como o resolve retorna apenas um valor, pode-se utilizar o console.log sem indicar os parametros