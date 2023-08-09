function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Bem Vindo', 123)
const aula2 = new Aula('Até Breve', 456)
console.log(aula1, aula2)

// simulando o new

function novo(f, ...params) {
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

const aula3 = novo(Aula, 'John', 334)
const aula4 = novo(Aula, 'Marrie', 900)
console.log(aula3, aula4)

// Teste do apply
const obj1 = {}
Aula.apply(obj1,['Paulao da Regulagem', 943])
console.log(obj1)

