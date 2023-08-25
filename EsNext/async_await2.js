
function gerarNumerosEntre(min, max, numerosProibidos) {
    if(min > max){
        [max, min] = [min, max]
    }

    return new Promise((resolve, reject) => {

        const aleatorio = parseInt(Math.random() * (max - min + 1)) + min

        if (numerosProibidos.includes(aleatorio)) {
            reject('Número Repetido!')
        } else {
            resolve(aleatorio)
        }
    })
}


async function gerarMegaSena(qtNumeros, tentativas = 1) {

    try {

        let numeros = [] 
        for (let _ of Array(qtNumeros).fill()) {
            numeros.push( await gerarNumerosEntre(1, 25, numeros) )  // await fica exatamente ao lado da função que retorna uma promise
        }  

        return numeros

    } catch(e) {

        if (tentativas > 10) {
            throw 'ERRO! Números Repetidos, Tentativas Esgotadas.'
        } else {
            return gerarMegaSena(qtNumeros, tentativas + 1)
        }
    }

}

gerarMegaSena(6)
    .then(console.log)
    .catch(console.log)


// gerarNumerosEntre(1, 5, [2, 4])
//     .then(console.log)
//     .catch(console.log)