// ES8 : Object.values/Object.entries
const obj = { a: 1, a: 2, a: 3 }
console.log(Object.values(obj)) // Retornas um array com os valores
console.log(Object.entries(obj)) // Retorna cada chave/valor como um array

// Melhorias na Notação Literal
const nome = 'Carla'
const pessoa = {
    nome,     // Antes: 'nome: nome'
    ola() {    // Antes: ola: function () {}
        return 'Oi gente!'
    }
}

console.log(pessoa.nome, pessoa.ola())

// Class
class Animal {}
class Cachorro extends Animal {
    falar() {
        return 'Au, au!'
    }
}

console.log(new Cachorro().falar())