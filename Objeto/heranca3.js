const pai = { nome: 'Pedro', corCabelo: 'Preto'}

const filha = Object.create(pai)
filha.nome = 'Ana'
console.log(filha.nome)
console.log(filha.__proto__)

const filha2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true}
})

console.log(filha2.nome)
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha))
console.log(Object.keys(filha2))

for (let key in filha2) {
    filha2.hasOwnProperty(key) ?
        console.log(key) : console.log(`Por Herança: ${key}`)
}