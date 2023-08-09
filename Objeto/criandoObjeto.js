// Usando a notação literal
const obj1 = {}
console.log(obj1)

// Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// Funções construtoras

function Produto(nome, preco, desconto) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desconto)
    }
}

const eu = new Produto('felippe', 2000, 0.10)
console.log(eu.getPrecoComDesconto())

// Função Factory

function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        getSalario() {
            return (salarioBase / 30) * (30-faltas)
        }
    }
}

const f1 = criarFuncionario('Jose', 10000, 1)
const f2 = criarFuncionario('Maria', 8000, 3)

console.log(f1.getSalario(), f2.getSalario())

// Objeto.create

const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// Um função famosa que retorna Objeto
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)