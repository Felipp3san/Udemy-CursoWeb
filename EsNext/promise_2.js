// // Exemplo com callback

// setTimeout(() => {
//     console.log('Executando callback....')

//     setTimeout(() => {
//         console.log('Executando callback 2....')

//         setTimeout(() => {
//             console.log('Executando callback 3....')

//         }, 2000);
//     }, 2000);
// }, 2000);

function esperarPor(tempo = 2000) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Executando promise...')
            resolve('Entrou no resolve...')
        }, tempo);
    })
}

esperarPor(3000)
    .then((texto) => console.log(texto))

esperarPor()  // Valor padrão 2000
    .then(() => esperarPor())   // Espera 2 segundos
    .then(() => esperarPor())   // Espera 2 segundos