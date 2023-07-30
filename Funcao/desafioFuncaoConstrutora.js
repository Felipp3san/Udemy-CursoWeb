class Pessoa {
    constructor(nome){
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

// Criar o exemplo de cima em forma de função construtora
// Precisa colocar this.

function Pessoa2(nome){
    this.nome = nome

    this.falar = function() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa2("João")
p1.falar()