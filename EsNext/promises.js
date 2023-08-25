function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setInterval(() => {
            resolve(frase)
        }, segundos * 1000)
    })} 

falarDepoisDe(3, 'Que Legal!')
    .then(frase => frase.concat('?!?')) // Then quando função é aceita
    .then(frase => console.log(frase))  // É possível implementar vários Then encadeados
    .catch(err => console.log(err)) // Catch quando função é rejeitada