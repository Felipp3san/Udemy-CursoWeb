// let e const

{
    var a = 2  // Var executa tanto dentro como fora do escopo
    let b = 3  // Let executa apenas dentro do seu escopo léxico
    console.log(b)
}
console.log(a)

// Template String

const produto = 'iPad'
console.log(`${produto} é caro`)
console.log(`${produto} 
é 
caro`)  // É possível saltar linhas

// Destructuring

const [l, e, ...tras] = "Cod3r" // Destructuring em string
console.log(l, e, tras)

const [x, y] = [1, 2, 3] // Destructuring em array
console.log(x, y)

const [z, ,k] = [1, 2, 3] // Parar pegar apenas 1 e 3, basta colocar um espaço vazio para saltar um elemento no destructuring
console.log(z, k)

const { idade, nome } = { nome:'Ana', idade:9 } // Destructuring em objeto, não segue a posição como em array, segue por nome de variável
console.log(nome, idade)

const { idade: i , nome: n } = { nome:'João', idade:13 } // Modelo para trocar os nomes das variáveis, idade virou i e nome virou n
console.log(n, i)