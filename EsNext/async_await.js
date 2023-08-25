function esperarPor(tempo = 2000) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(10)
        }, tempo);
    })
}

// esperarPor()  // Valor padrão 2000
//     .then(() => console.log('Executando promise...'))
//     .then(esperarPor)   // Espera 2 segundos
//     .then(() => console.log('Executando promise...'))
//     .then(esperarPor)   // Espera 2 segundos
//     .then(() => console.log('Executando promise...'))

async function retornarValorRapido() {
    return 20
}

async function executar() {   // Async funciona apenas com funções que retornam uma promise
    //let valor = await esperarPor(2000)
    let valor = await retornarValorRapido() // O await extrai o valor do resolve, sem o await a função retornarValorRapido retornaria object promise
    
    await esperarPor(1500)
    console.log(`Async/Await ${valor}`)

    await esperarPor(1500)
    console.log(`Async/Await ${valor + 1}`)

    await esperarPor(1500)
    console.log(`Async/Await ${valor + 2}`)

    return valor + 3 // Função executar() retorna uma promise
                     // const v = executar() // Isso não é possível
}

executar()
    .then(valor => console.log(valor))

//Outra forma
async function executarDeVerdade() {
    let resultado = await executar()
    console.log(`Forma 2: ${resultado}`)
}

executarDeVerdade()