// Exercicio 1

const { forIn, includes } = require("lodash")

    function cumprimentar(texto) {
        return 'Olá, ' + texto + '!'
    }

    console.log(cumprimentar('Rodolfo'))

// Exercicio 2

    function idadeEmDias(anos) {
        const anosBissextos = parseInt(anos / 4)
        return anos * 365 + anosBissextos
    }

    console.log(idadeEmDias(25))
    console.log(idadeEmDias(70))
    
// Exercicio 3

    function salarioMensal(horasTrabalhadasMes, salarioHora) {
        return `Salário igual a R$${(horasTrabalhadasMes * salarioHora).toFixed(2).toString().replace('.', ',')}`
    }

    console.log(salarioMensal(150, 40.53))

// Exercicio 4

    function mesCorrespondente(mes) {
        switch (mes) {
            case 1:
                return 'Janeiro'
            case 2:
                return 'Fevereiro'
            case 3:
                return 'Março'
            case 4:
                return 'Abril'
            case 5:
                return 'Maio'
            case 6:
                return 'Junho'
            case 7:
                return 'Julho'
            case 8:
                return 'Agosto'
            case 9:
                return 'Setembro'
            case 10:
                return 'Outubro'
            case 11:
                return 'Novembro'
            case 12:
                return 'Dezembro'
            default:
                return 'Mês Invalido'
        }
    }

    console.log(mesCorrespondente(2))
    console.log(mesCorrespondente(10))

    // OU

    function mesCorrespondenteMapeamento2(ano) {
        const mapeamento = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho',
        'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
        return mapeamento[--ano]; 
    }

    console.log(mesCorrespondenteMapeamento2(2))
    console.log(mesCorrespondenteMapeamento2(10))

// Exercicio 5

    function maiorOuIgual(a, b) {
        if (typeof(a) != typeof(b)) {
            return false
        }
        return a >= b
    }

    console.log(maiorOuIgual(4, 5))
    console.log(maiorOuIgual(5, 5))
    console.log(maiorOuIgual(5, '5'))
    console.log(maiorOuIgual(6, 5))

// Exercicio 6

    function inverso(valor) {
    const tipo = typeof valor

        if (tipo == 'number')
            return -valor
        else if (tipo == 'boolean')
            return !valor
        else
            return (`Booleano ou numero esperado, Tipo inserido foi ${tipo}`)
    }

    console.log(inverso(true))
    console.log(inverso("6"))
    console.log(inverso(-2000))
    console.log(inverso("programacao"))
    console.log(inverso({nome:'felippe'}))

// Exercicio 7

    function estaEntre(numero, minimo, maximo, inclusivo = false) {
        if (inclusivo) {
            return numero >= minimo && numero <= maximo
        } else 
            return numero > minimo && numero < maximo
    }

    console.log(estaEntre(10, 50, 100))
    console.log(estaEntre(50, 50, 100))
    console.log(estaEntre(50, 50, 100, true))
    console.log(estaEntre(51, 50, 100))

    // OU

    function estaEntre2(numero, minimo, maximo, inclusivo = false) {
        return inclusivo? numero >= minimo && numero <= maximo : numero > minimo && numero < maximo
    }

    console.log(estaEntre2(10, 50, 100))
    console.log(estaEntre2(50, 50, 100))
    console.log(estaEntre2(50, 50, 100, true))
    console.log(estaEntre2(51, 50, 100))

// Exercicio 8

    function multiplicarSemOperador(numero, multiplicador) {
        if (numero < 0) return 'Numero Invalido'
        
        let resultado = 0

        for (let i = 0; i < multiplicador; i++) {
            resultado += numero
    }

    return resultado
    }

    console.log(multiplicarSemOperador(0, 11))
    console.log(multiplicarSemOperador(3, 7))
    console.log(multiplicarSemOperador(5, 5))
    console.log(multiplicarSemOperador(5, 0))

// OU 

    function multiplicarSemOperador2(numero, multiplicador) {
        if (numero === 0 || multiplicador === 0) return 0
        return multiplicador === 1 ? numero : numero + multiplicarSemOperador2(numero, multiplicador-1) }
        
        console.log(multiplicarSemOperador2(0, 11))
        console.log(multiplicarSemOperador2(3, 7))
        console.log(multiplicarSemOperador2(5, 5))
        console.log(multiplicarSemOperador2(5, 0))

// Exercicio 9

    function repetirArray(valor, repetidor) {
        const newArray = []

        for (let i = 0; i < repetidor; i++) {
            newArray.push(valor)
        }

        return newArray
    }

    console.log(repetirArray(7,5))
    console.log(repetirArray('Teste',3))

// OU

    function repetirArray2(valor, repetidor) {
        const newArray = []
        
        newArray.push(valor)

        return repetidor == 1? newArray : newArray.concat(repetirArray2(valor, repetidor-1))
    }

    console.log(repetirArray2(7,7))
    console.log(repetirArray2('Teste',3))

// OU 

    function repetirArray3(valor, repetidor) {

        return Array(repetidor).fill(valor)
    }

    console.log(repetirArray3(7,7))
    console.log(repetirArray3('Teste',3))

// Exercicio 9 

    function simboloMais(quantidade) {
        
        let newString = ''

        for (let i = 0; i < quantidade; i++) {
            newString += '+'
        }

        return newString
    }

    console.log(simboloMais(3))

// OU

    function simboloMais2(quantidade) {
        
        if (quantidade == 0) {
            return ''
        }

        let newString = '+'

        return quantidade == 1? newString : newString += simboloMais2(quantidade-1)
    }

    console.log(simboloMais2(2))

// OU

    function simboloMais3(quantidade) {
        let newArray = '+'
        return quantidade == 0? '' : newArray.repeat(quantidade)
    }

    console.log(simboloMais3(3))

// Exercicio 10

    function primeiroUltimo(array) {
        const newArray = []
        newArray.push(array[0])
        newArray.push(array[array.length-1])

        return newArray
    }

    console.log(primeiroUltimo([7, 14, 'Olá']))
    console.log(primeiroUltimo([-100, 'Aplicativo' , 16]))

// OU

    function primeiroUltimo2(array) {
        let primeiroElemento = array.shift()
        let segundoElemento = array.pop()

        return [ primeiroElemento, segundoElemento ]
    }

    console.log(primeiroUltimo2([7, 14, 'Olá']))
    console.log(primeiroUltimo2([-100, 'Aplicativo' , 16]))

// OU

    function primeiroUltimo3([primeiroElemento, ...elementosRestantes]) {
        let ultimoElemento = elementosRestantes.pop()

        return [primeiroElemento, ultimoElemento]
    }

    console.log(primeiroUltimo3([7, 14, 'Olá']))
    console.log(primeiroUltimo3([-100, 'Aplicativo' , 16]))

// Exercicio 11

    function removerPropriedade(objeto, nomePropriedade) {
        const newObject = Object.assign({}, objeto)
        delete newObject[nomePropriedade]
        return newObject
    }

    // OU 

    function removerPropriedade2(objeto, nomePropriedade) {
        const newObject = {...objeto}
        delete newObject[nomePropriedade]
        return newObject
    }

    const obj = {
        nome: 'Felippe',
        idade: 29,
        endereco: 'Rua Gabriel Pereira'
    }

    console.log(removerPropriedade(obj, 'endereco'))
    console.log(obj)
    console.log(Object.is(removerPropriedade(obj, 'endereco'), obj))

// Exercicio 12

    const arrayMisturada = [1, "Node" , "Javascript", 30, 25, 40, true, "React"]

    // function filtrarArray(arrayOriginal, elementosFiltrar) {

    //     let newArray = []
        
    //     for (let i = 0; i < arrayOriginal.length; i++) {
    //         for (let j = 0; j < elementosFiltrar.length; j++)
    //             if(arrayOriginal[i] == elementosFiltrar[j]) {
    //                 newArray.push(elementosFiltrar[j])
    //             }
    //     }

    //     return newArray
    // }

    function filtrarArray(arrayOriginal) {

        let newArray = []
        
        for (let i = 0; i < arrayOriginal.length; i++) {
                if(typeof arrayOriginal[i] == "number") {
                    newArray.push(arrayOriginal[i])
                }
        }

        return newArray
    }

    console.log(filtrarArray(arrayMisturada))

    // OU

    // function usandoFilter(array, elementosEscolhidos) {

    //     const funcaoFiltro = function (arrayOriginal) {
    //         for (let i = 0; i < elementosEscolhidos.length; i++) {
    //             if( arrayOriginal == elementosEscolhidos[i] ) 
    //                 return elementosEscolhidos[i]
    //         }
    //     }

    //     return array.filter(funcaoFiltro)
    // }

    function usandoFilter(array) {

        const funcaoFiltro = arrayOriginal => typeof arrayOriginal == "number"

        return array.filter(funcaoFiltro)
    }

    console.log(usandoFilter(arrayMisturada))

// Exercicio 13

    const nomeProfissaoIdade = {
        nome: "Maria",
        profissao: "Desenvolvedora de Software",
        idade: 43
    }

    const produtoPrecoQuant = {
        nome: "Banana",
        preco: 2.75,
        quantidade: 100
    }

    function objetoParaArray(objeto) {
        return Object.entries(objeto)
    }

    // OU

    function objetoParaArray2(objeto) {
        
        let newArray = []

        // let keys = Object.keys(objeto)
        // let values = Object.values(objeto)

        // for (let i = 0; i < keys.length; i++) {
        //     newArray.push([keys[i], values[i]])
        // }

        for (let key in objeto) {
            newArray.push([key, objeto[key]])
        }

        return newArray
        
    }

    // OU 

    function objetoParaArray3(objeto) {
        
        const key = Object.keys(objeto)

        const newArray = key.map( key => [key, objeto[key]])

        return newArray
    }

    console.log(objetoParaArray(nomeProfissaoIdade))
    console.log(objetoParaArray(produtoPrecoQuant))

    console.log(objetoParaArray2(nomeProfissaoIdade))
    console.log(objetoParaArray2(produtoPrecoQuant))

    console.log(objetoParaArray3(nomeProfissaoIdade))
    console.log(objetoParaArray3(produtoPrecoQuant))

// Exercicio 14

    function receberParesDeIndicesPares(array) {
        
        const verifPares = (valor, indice) => {
            const indicePar = indice % 2 === 0 
            const valorPar = valor % 2 === 0
                    
                return valorPar && indicePar
            }

        const newArray = array.filter(verifPares)

        return newArray
    }

    // OU 

    function receberParesDeIndicesPares2(array) {
        
        let newArray = []

        for (let i = 0; i < array.length; i += 2) {
            
            if(array[i] % 2 == 0) {
                newArray.push(array[i]) 
            }
        }

        return newArray

    }

    console.log(receberParesDeIndicesPares([10, 30, 22, 14, 29]))
    console.log(receberParesDeIndicesPares2([10, 30, 22, 14, 29]))

// Exercicio 15

    function checarAnoBissexto(ano) {
        
        const divisivelPor4 = ano % 4 == 0
        const divisivelPor100 = ano % 100 == 0
        const divisivelPor400 = ano % 400 == 0
        
        return (divisivelPor4 && !divisivelPor100) || divisivelPor400
    }

    console.log(checarAnoBissexto(2020))
    console.log(checarAnoBissexto(2100))
    console.log(checarAnoBissexto(2300))
    console.log(checarAnoBissexto(2400))

// Exercicio 16

    const arrayNumeros = [50, 10, 10, 30]

    function somaArray(array) {
        
        const somaArrayReduce = (acumulador, atual) => acumulador + atual

        const resultado = array.reduce(somaArrayReduce)

        return resultado

    }

    console.log(somaArray(arrayNumeros))

// OU

    function somaArray2(array) {
        
        let resultado = 0

        for (let i = 0; i < array.length; i++) {
            resultado += array[i]
        }

        return resultado
    }

    console.log(somaArray2(arrayNumeros))

// OU 

    function somaArray3(array) {
        
        let resultado = 0

        array.forEach(elemento => resultado += elemento)

        return resultado
    }

    console.log(somaArray3(arrayNumeros))

// OU 

    function somaArray4(array) {
        
        const quantNumeros = array.length

        return quantNumeros === 0? 0 : array[0] + somaArray4(array.slice(1))
    }

    console.log(somaArray4(arrayNumeros))

// Exercicio 17

    const produtos = [
        {
            produto: "Smartphone",
            categoria: "Eletronicos",
            preco: 2400
        },
        {
            produto: "Notebook",
            categoria: "Eletronicos",
            preco: 4500
        },
        {
            produto: "Console",
            categoria: "Eletronicos",
            preco: 1500
        }
    ]

    const servicos = [
        {
            servico: "Cinema",
            categoria: "Entreterimento",
            preco: 24.50
        },
        {
            servico: "Internet",
            categoria: "Despesas Casa",
            preco: 150
        },
        {
            servico: "Lavanderia",
            categoria: "Despesas Gerais",
            preco: 15
        }
    ]

    function somarDespesas(array) {
        
        const retornaPrecoMap = array => array.preco
        const somarPrecoReduce = (acumulador, atual) => acumulador + atual

        const soma = array.map(retornaPrecoMap).reduce(somarPrecoReduce)

        return soma
    }

    console.log(somarDespesas(produtos))
    console.log(somarDespesas(servicos))

// OU 

    function somarDespesas2(obj) {
        
        let total = 0

        for (let item of obj) {
            total += item.preco
        }

        return total
    }

    console.log(somarDespesas2(produtos))

// OU

    function somarDespesas3(array) {
        
        return array.reduce((acumulador, valorAtual) => acumulador + valorAtual.preco ,0)  // 0 é o valor inicial de acunulador
    }

    console.log(somarDespesas3(produtos))

// Exercicio 18

    function calcularMedia(array) {
        const soma = array.reduce((acumulador, atual) => acumulador + atual) 
        
        return soma / array.length
    }

    // OU

    function calcularMedia2(array) {
        
        let acumulador = 0
        let divisor = 0

        for (let i in array) {
            acumulador += array[i]
            divisor++
        }

        return acumulador / divisor
    }

    console.log(calcularMedia([0, 10]))
    console.log(calcularMedia([1, 2, 3, 4, 5]))
    console.log(calcularMedia2([0, 10]))
    console.log(calcularMedia2([1, 2, 3, 4, 5]))

// Exercicio 19

    function areaTriangulo(base, altura) {
        const area = (base * altura) / 2

        return area.toFixed(2)
    }

    console.log(areaTriangulo(10, 15))
    console.log(areaTriangulo(7, 9))
    console.log(areaTriangulo(9.25, 13.1))

// Exercicio 20

function menorDoArray(array) {
    
    let menorNumero = array[0]

    for (let i = 0; i < array.length; i++) {
        if(array[i] < menorNumero) 
            menorNumero = array[i]
    }

    return menorNumero
}

// OU

function menorDoArray2(array) {
    
    const menorNumero = array.reduce((acumulador, atual) => atual < acumulador? atual : acumulador)
    return menorNumero

}

// OU 

function menorDoArray3(array) {
    return Math.min(...array)
}

console.log(menorDoArray([10, 5, 35, 65]))
console.log(menorDoArray([5, -15, 50, 3]))
console.log(menorDoArray2([10, 5, 35, 65]))
console.log(menorDoArray2([5, -15, 50, 3]))
console.log(menorDoArray3([10, 5, 35, 65]))
console.log(menorDoArray3([5, -15, 50, 3]))

// Exercicio 21

function sortearNumero(numero) {
    const min = 1
    const max = 10
    const numeroSorteado = Math.floor(Math.random() * (max - min + 1) + min)

    return numero === numeroSorteado? 
    `Parabéns! O número sorteado foi o ${numeroSorteado}` : `Que pena! O número sorteado foi o ${numeroSorteado}` 
}

console.log(sortearNumero(10))

// Exercicio 22

    function contarPalavras(frase) {
        const palavras = frase.split(' ')
        console.log(palavras)
        return palavras.length
    }

    console.log(contarPalavras('Teste de Função'))

// Exercicio 23
    console.log('\nExercicio 23...')

    function contarCaractere(char, frase) {
        let contador = 0

        for (const i in frase) {
            if (frase.charAt(i) === char)
                contador++
        }

        return contador
    }

    // OU 

    function contarCaractere2(char, frase) {
        
        const contador = [...frase].filter(elemento => elemento === char).length
        return contador
    }

    console.log(contarCaractere('a', 'A sorte favorece os audazes'))
    console.log(contarCaractere('r', 'Me divirto aprendendo a programar'))
    console.log(contarCaractere2('a', 'A sorte favorece os audazes'))
    console.log(contarCaractere2('r', 'Me divirto aprendendo a programar'))

    // Exercicio 24
    console.log('\nExercicio 24...')

    function buscarPalavrasSemelhantes(palavra, arrayStrings) {

        // const palavras = arrayStrings.filter(elemento => {
        //     return palavra === elemento.split('', palavra.length).join('')
        // })

        const palavras = arrayStrings.filter(elemento => elemento.includes(palavra))

        return palavras
    }

    // OU 

    function buscarPalavrasSemelhantes2(palavra, arrayStrings) {
        let newArray = []
        
        for (let elemento of arrayStrings) {
            if(elemento.includes(palavra))
                newArray.push(elemento)
        }
        return newArray
    }

    console.log(buscarPalavrasSemelhantes('java', ['javascript', 'python', 'c++', 'java']))
    console.log(buscarPalavrasSemelhantes('py', ['javascript', 'python', 'c++', 'java']))
    console.log(buscarPalavrasSemelhantes('c', ['javascript', 'python', 'c++', 'java']))

    console.log(buscarPalavrasSemelhantes2('java', ['javascript', 'python', 'c++', 'java']))
    console.log(buscarPalavrasSemelhantes2('py', ['javascript', 'python', 'c++', 'java']))
    console.log(buscarPalavrasSemelhantes2('c+', ['javascript', 'python', 'c++', 'java']))

// Exercicio 25


