const pessoa = {
    nome: 'rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,    // Permite ou não, que seja visto pelo KEYS
    writable: false,  // Funciona como freeza, bloqueia escrita na chave
    value: '10/03/1994'
})

pessoa.dataNascimento = '14/09/1959'
console.log(Object.keys(pessoa))
console.log(pessoa.dataNascimento)

// Object.assign (ECMAScript 2015)
const dest = {a: 1}
const o1 = { b: 2}
const o2 = { c: 3, a: 4 }  // variável a: vai sobreescrever a: do objeto 'dest'
const obj = Object.assign(dest, o1, o2)

console.log(dest)
console.log(obj)

// Object.freeze
// Bloqueia a escrita no objeto escolhido
Object.freeze(obj)

obj.c = 10
console.log(obj)