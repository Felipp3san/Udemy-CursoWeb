// Estrutura que não aceita repetição / não indexada

const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Palmeiras').add('Corinthians')
times.add('Flamengo')
times.add('Vasco')  // Ignorado. Não aceita repetições

console.log(times)
console.log(times.size)

console.log(times.has('vasco')) // case sensitive
console.log(times.has('Vasco')) 
times.delete('Flamengo')
console.log(times.has('Flamengo'))

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas'] // Não adiciona o ultimo, pois é repetido
const nomesSet = new Set(nomes)
console.log(nomesSet)