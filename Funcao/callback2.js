const notas = [7.7, 2.3, 6.9, 5.4, 9.1, 3.8, 8.5]

// Sem callback
const notasBaixas1 = []

for(let i in notas){
    if (notas[i] < 7) {
        notasBaixas1.push(notas[i])
    }
}

console.log(notasBaixas1)

// Com callback
let notasBaixas2 = notas.filter(function (nota) {
    return nota < 7
})

// Ou com função arrow

notasBaixas2 = notas.filter((nota) => nota < 7)

console.log(notasBaixas2)