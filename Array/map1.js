const nums = [1, 2, 3, 4, 5]

const dobro = nums.map(function (e) {     // Cria uma nova função retornando o dobro do valor na posição
    return e * 2
})

console.log(dobro)

// =============

const soma10 = e => e + 10 // Arrow function contem retorno implicito
const triplo = e => e * 3 
const paraReal = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`

console.log(nums.map(soma10)) // map retorna um array

const resultado = nums.map(soma10).map(triplo).map(paraReal)

console.log(resultado)
