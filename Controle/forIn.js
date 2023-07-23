const notas = [6.7, 7.4, 9.8, 7.7]

for (let i in notas) {
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Paula',
    idade: 38,
    peso: 70,
    morada: 'Rua Gabriel Moreira'
}

for (let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}
