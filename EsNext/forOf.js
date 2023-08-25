// ForOF pode iterar diretamente sobre os valores
// incluindo também as estruturas Map, Set

for (let letra of 'Cod3r') {  // Iterar sobre as letras 
    console.log(letra)
}

const assuntosEcma = ['Map', 'Set', 'Promise']

for (let i in assuntosEcma) {  // Iterar sobre o indice (usando ForIn)
    console.log(i)
}

for (let assunto of assuntosEcma) { // Iterar sobre os valores
    console.log(assunto)
}

const assuntosMap = new Map([
    ['Map', { abordado: true}],
    ['Set', { abordado: true}],
    ['Promise', { abordado: false}],
])

for (let assunto of assuntosMap) {
    console.log(assunto)
}

for (let chave of assuntosMap.keys()) {
    console.log(chave)
}

for (let valor of assuntosMap.values()){
    console.log(valor)
}

for (let [ch, vl] of assuntosMap.entries()) {  // Também é possível fazer o uso do destructuring
    console.log(ch, vl)
}

const s = new Set(['a', 'b', 'c'])

for (let letra of s) {
    console.log(letra)
}