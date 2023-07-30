// Exercicio 1

    function operacoes(x, y) {
        return console.log(`${x + y}, ${x - y}, ${x * y}, ${x / y}`)
    }

    operacoes(10,10)

// Exercicio 2

    function triangulo(a, b, c) {   
        if(a == b && b == c)
            return console.log("Equilatero")
        else if (a == b || a == c || b == c)
            return console.log("Isosceles")
        else 
            return console.log("Escaleno")
    }

    triangulo(13,11,10)

// Exercicio 3

    function potencia(num1, num2) {

        let resultado = num1

        for (let i = 0; i < num2 - 1; i++) {
            resultado = resultado * num1
        }

        return resultado
        // Metodo 1
            // return Math.pow(num1, num2)
        // Metodo 2
            // return num1 ** num2
    }

    console.log(potencia(2,6))

// Exercicio 4

    function divisao(dividendo, divisor) {
        
        let resultado, resto
        resultado = dividendo / divisor
        resto = dividendo % divisor

        return console.log(`${dividendo} divido por ${divisor} = ${resultado} e o resto é ${resto}`)
    }

    divisao(20, 5)

// OU

    function divisao2(dividendo, divisor) {
        console.log("Resultado: " + Math.floor(dividendo/divisor));
        console.log(`Resto: ${dividendo % divisor}`)
    }

    divisao2(20,5)

// Exercicio 5

    function formatar(valorDecimal) {
        console.log("R$" + valorDecimal.toFixed(2).replace(".", ","))
        // OU
        valorEmReais = `R$${valorDecimal.toFixed(2).replace(".", ",")}`
        console.log(valorEmReais)
    }

formatar(0.1 + 0.2)

// Exercicio 6

    function jurosSimples(capital, txJuros, tempoAplic) {
        capital = capital + (capital * txJuros) * tempoAplic
        return capital
    }

    function jurosCompostos(capital, txJuros, tempoAplic) {

        for (let i = 0; i < tempoAplic; i++) {
            resultado = (capital * txJuros)
            capital = capital + resultado
        }
        return capital
        // OU
        //return capital * Math.pow(1 + txJuros, tempoAplic) 
    }

    console.log(jurosSimples(1500, 0.042, 2))
    console.log(jurosCompostos(1500, 0.042, 2))

// Exercicio 7

    function bhaskara(a, b, c) {
        let delta = Math.pow(b, 2) - 4 * (a * c)
        let x1 = (- b + Math.sqrt(delta)) / 2 * a
        let x2 = (- b - Math.sqrt(delta)) / 2 * a

        if (delta < 0)
            return console.log("Delta é negativo")
        else
            return console.log(`Resultado: ${x1} e ${x2}`)
    }

    bhaskara(1,3,2)
    bhaskara(3,1,2)

// Exercicio 8

let pontos = "30, 40, 20, 4, 51, 25, 42, 38, 56, 0"

function pontuacao(pontos) {
    resultado = []
    let pontuacao = pontos.split(", ")
    let melhorPontuacao = pontuacao[0]
    let piorPontuacao = pontuacao[0]
    let indexPior = 0
    let contador = 0

    for (let i = 0; i < pontuacao.length; i++) {
        if (parseInt(pontuacao[i]) < parseInt(piorPontuacao)) {
            piorPontuacao = pontuacao[i]
            indexPior = i+1
        }
        if (parseInt(melhorPontuacao) < parseInt(pontuacao[i])) {
            melhorPontuacao = pontuacao[i]
            contador = contador + 1
        }
    }
    resultado.push(contador)
    resultado.push(indexPior)
    return resultado
}

console.log(pontuacao(pontos))

// Exercicio 9

    let nota = 38

    function arredondar(valor) {
        return Math.round(valor / 5) * 5
    }

    nota = arredondar(nota)

    if (nota >= 40) {
        console.log("Aprovado!")
    }
    else {
        console.log("Reprovado")
    }

// Exercicio 10

    function divisivelPor3(numero) {
        if (numero % 3 == 0) {
            return true
        } else {
            return false
        }
    } 

    console.log(divisivelPor3(9))

// Exercicio 11

    function bissexto(ano) {
        if (ano <= 0){
            return false
        } else if (ano % 400 == 0) {
            return true
        } else if (ano % 100 == 0){
            return true
        } else if (ano % 4 == 0) {
            return true
        } else {
            return false
        }
    }

    console.log(bissexto(2020))

// Exercicio 12

    function fatorial(numero) {
    
        let resultado = numero

        for (let i = numero; i > 2; i--) {
            resultado = resultado * (i-1)
        }
        return resultado
    }

    console.log(fatorial(4))
    console.log(fatorial(6))
    console.log(fatorial(10))

    // OU

    // function fatorial (numero) {
    //     if(numero == 0){
    //         return 1
    //     } else {
    //         return numero * fatorial(numero - 1)
    //     }
    // }

// Exercicio 13

    function diaUtilFeriado(day) {
        if (day <= 31 && day >= 1) {
            switch (day) {
                case 1: case 8: case 16: case 24:
                    console.log("Domingo")
                    break;
                case 7: case 14: case 21: case 28:
                    console.log("Sabado")
                    break;
                default:
                    console.log("Dia Util!")
                    break;
            }
        } else {
            console.log("Dia invalido")
        }
    }

    diaUtilFeriado(21)

// Exercicio 14

    function frutasDisponiveis(fruta) {
        switch (fruta) {
            case "Maçã":
                console.log("Não vendemos essa fruta.")
                break;
            case "Kiwi":
                console.log("Estamos com escassez de kiwi.")
                break;
            case "Melancia":
                console.log("Aqui está! São 3 reais o kilo.")
                break;
            default:
                console.log("Fruta indisponível.")
                break;
        }
    }

    frutasDisponiveis("Maçã")

// Exercicio 15

    function comprarVeiculo(veiculo) {
        switch (veiculo) {
            case "Hatch":
                console.log("Compra efetuada com sucesso!")
                break;
            case "Sedan": case "Motocicleta": case "Camionete":
                console.log("Tem certeza que não prefere esse modelo?")
                break;
            default:
                console.log("Não trabalhamos com esse tipo de automovel aqui.")
                break;
        }
    }

    comprarVeiculo("Hatch")
    comprarVeiculo("Sedan")
    comprarVeiculo("Motocicleta")
    comprarVeiculo("Camionete")
    comprarVeiculo("Furgão")

// Exercicio 16

    function calculadora(operador, valor1, valor2) {
        switch (operador) {
            case '+':
                    return valor1 + valor2
                break;
            case '-':
                    return valor1 - valor2
                break;
            case '*':
                    return valor1 * valor2
                break;
            case '/':
                    return valor1 / valor2
                break;
            default:
                    return "Operador Inválido."
                break;
        }
    }

    console.log(calculadora('+', 10, 10))
    console.log(calculadora('-', 10, 10))
    console.log(calculadora('/', 10, 10))
    console.log(calculadora('*', 10, 10))

// Exercicio 17

    function calcularAumento(salario, plano) {
        switch (plano) {
            case 'a': case 'A':
                    return salario * 1.10
                break;
            case 'b': case 'B':
                    return salario * 1.15
                break;
            case 'c': case 'C':
                    return salario * 1.20
                break;
            default:
                    return "Plano inválido"
                break;
        }
    }

    console.log(calcularAumento(1200,'a'))
    console.log(calcularAumento(1200,'b'))
    console.log(calcularAumento(1200,'c'))
    console.log(calcularAumento(1200,'A'))

// Exercicio 18

    function numeroPorExtenso(numero) {
        switch (numero) {
            case 0:
                    return "Zero"
                break;
            case 1:
                    return "Um"
                break;
            case 2:
                    return "Dois"
                break;
            case 3:
                    return "Três"
                break;
            case 4:
                    return "Quatro"
                break;
            case 5:
                    return "Cinco"
                break;
            case 6:
                    return "Seis"
                break;
            case 7:
                    return "Sete"
                break;
            case 8:
                    return "Oito"
                break;
            case 9:
                    return "Nove"
                break;
            case 10:
                    return "Nove"
                break;
            default:
                    return "Invalido"
                break;
        }
    }

    console.log(numeroPorExtenso(5))
    console.log(numeroPorExtenso(2))
    console.log(numeroPorExtenso(0))
    console.log(numeroPorExtenso(18))

// Exercicio 19

    function precoFinal(codProduto, quantidade) {
    
        switch (codProduto) {
            case 100:
                    return 3.00 * quantidade
                break;
            case 200:
                    return 4.00 * quantidade
                break;
            case 300:
                    return 5.50 * quantidade
                break;
            case 400:
                    return 7.50 * quantidade
                break;
            case 500:
                    return 3.50 * quantidade
                break;
            case 600:
                    return 2.80 * quantidade
                break;
            default:
                    return "Produto invalido."
                break;
        }
    }

    console.log(precoFinal(100, 2))
    console.log(precoFinal(300, 3))
    console.log(precoFinal(500, 1))
    console.log(precoFinal(900, 2))

// Exercicio 20

    function saque(valor) {

        notas100 = Math.floor(valor / 100)
        notas50 = Math.floor((valor % 100) / 50)
        notas10 = Math.floor((valor % 50) / 10)
        notas5 = Math.floor((valor % 10) / 5)
        notas1 = Math.floor((valor % 5) / 1)

        return console.log(elaborarResultado(notas100, notas50, notas10, notas5, notas1))
    }

    function elaborarResultado(notas100, notas50, notas10, notas5, notas1) {
        let resultado = ""

        if (notas100 > 0) {
            resultado += `${notas100} nota(s) de R$100. `
        }
        if (notas50 > 0) {
            resultado += `${notas50} nota(s) de R$50. `
        }
        if (notas10 > 0) {
            resultado += `${notas10} nota(s) de R$10. `
        }
        if (notas5 > 0) {
            resultado += `${notas5} nota(s) de R$5. `
        }
        if (notas1 > 0) {
            resultado += `${notas1} nota(s) de R$1.`
        }

        return resultado
    }

    saque(1436)

// Exercicio 21

    function valorConvenio(idade) {
        const valorFixo = 100
        op = escolhaOpcao(idade)
        switch (op) {
            case 1:
                    return valorFixo + 80
                break;
            case 2:
                    return valorFixo + 50
                break;
            case 3:
                    return valorFixo + 95
                break;
            case 4:
                    return valorFixo + 130
                break;
            default:
                    return "Idade inválida."
                break;
        }
    }

    function escolhaOpcao(idade) {
        if (idade > 60)
            return 4
        if (idade > 30 && idade <= 60)
            return 3
        if (idade >= 10 && idade <= 30)
            return 2
        if (idade < 10 && idade > 0)
            return 1
        else
            return 0
    }

    console.log(`Valor do convênio: R$${valorConvenio(1)},00`)
    console.log(`Valor do convênio: R$${valorConvenio(35)},00`)

// Exercicio 22

    function valorAnuidadeJuros(mes) {

            const valorAnuidade = 250
            let resultado = valorAnuidade

        if (mes > 0 && mes < 13) {
            for (let i = 0; i < mes; i++) {
                resultado = resultado * 1.05
            }
            
            return "Valor da anuidade com juros: R$" + resultado.toFixed(2)
        } 
        else {
            return "Mês inválido."
        }

    }

    console.log(valorAnuidadeJuros(12))

// Exercicio 23

    function pesoNota(nota1, nota2, nota3) {

        let pesoNota = []

        if(nota1 > nota2 && nota1 > nota3){
            pesoNota.push(4)
        } else {
            pesoNota.push(3)
        }
        if(nota2 > nota1 && nota2 > nota3){
            pesoNota.push(4)
        } else {
            pesoNota.push(3)
        }
        if(nota3 > nota1 && nota3 > nota2){
            pesoNota.push(4)
        } else {
            pesoNota.push(3)
        }

        return pesoNota
    }

    function resultadoAluno(codAluno, nota1, nota2, nota3){

        let resultado = 0
        let peso = pesoNota(nota1, nota2, nota3)
        resultado = ((nota1 * peso[0]) + (nota2 * peso[1]) + (nota3 * peso[2])) / (peso[0] + peso[1] + peso[2])

        if (resultado >= 5){
            return "Código do aluno: " + codAluno + " Aprovado!"
        }
        else {
            return "Código do aluno: " + codAluno + " Reprovado. :("
        }
    }
    // OU 
    function resultAluno(codAluno, nota1, nota2, nota3){
        let notas = []
        let resultado = 0
        
        notas.push(nota1)
        notas.push(nota2)
        notas.push(nota3)
        notas.sort()

        resultado = (nota1 * 3 + nota2 * 3 + nota3 * 4) / 10

        return `Código do Aluno: ${codAluno}. Notas: ${nota1}, ${nota2}, ${nota3}. Resultado Final: ${resultado < 5? "Reprovado. " : "Aprovado!"}`
    }

    let felippe = [1, 10, 9, 7]
    let rhuanna = [2, 6, 7, 5]
    let gabriel = [3, 3, 2, 7]

    console.log(resultadoAluno(felippe[0],felippe[1], felippe[2], felippe[3]))
    console.log(resultadoAluno(rhuanna[0],rhuanna[1], rhuanna[2], rhuanna[3]))
    console.log(resultadoAluno(gabriel[0],gabriel[1], gabriel[2], gabriel[3]))
    // OU
    console.log(resultAluno(1, 6.8, 9.5, 7.8))

// Exercicio 24

    function olaMundo() {
        let i = 0
        while (i < 12) {
            console.log("Olá Mundo!")
            i++
        }
    }

    olaMundo()

// Exercicio 25

    function umAteCinquenta() {
        let i = 0
        while (i < 51) {
            console.log(i)
            i++
        }
    }

    umAteCinquenta()

// Exercicio 26

    function mostrarPares() {
        for (let i = 0; i < 101; i++) {
            if (i % 2 == 0) {
                console.log(i)
            }
        }
    }

    mostrarPares()

// Exercicio 27

    let altura1 = 100
    let taxCresc1 = 11

    let altura2 = 110
    let taxCresc2 = 0

    tempoCresc(altura1, altura2, taxCresc1, taxCresc2)

    function tempoCresc(altura1, altura2, taxCresc1, taxCresc2) {
        if (altura1 < altura2) {
            if (taxCresc1 > taxCresc2){
                console.log(`Criança 1 é menor. Levará ${qtAnos(altura1, altura2, taxCresc1, taxCresc2)} anos para ultrapassar.`)
            } else
                console.log("Criança 1 é menor e nunca vai ultrapassar.")
        
        } else if (altura2 < altura1) {
            if (taxCresc2 > taxCresc1){
                console.log(`Criança 2 é menor. Levará ${qtAnos(altura2, altura1, taxCresc2, taxCresc1)} anos para ultrapassar.`)
            } else
                console.log("Criança 2 é menor e nunca vai ultrapassar.")
        
        } else {
            if (taxCresc1 > taxCresc2) {
                console.log("Crianças tem tamanhos iguais. Criança 1 ultrapassará Criança 2 em 1 ano")
            } else if (taxCresc2 > taxCresc1) {
                console.log("Crianças tem tamanhos iguais. Criança 2 ultrapassará Criança 1 em 1 ano")
            } else {
                console.log("Crianças tem tamanhos e taxas de crescimento iguais.")
            }
        }
    }

    function qtAnos(menor, maior, taxCrescMenor, taxCrescMaior) {
        let qtAnos = 0
        
        while (menor < maior) {
            menor += taxCrescMenor
            maior += taxCrescMaior
            qtAnos++
        }

        return qtAnos
    }

// Exercicio 28

    let inteiros = []
    contadorPares = 0
    contadorImpares = 0

    for (let i = 1; i <= 21; i++) {
        inteiros.push(i)
        if (i % 2 == 0){
            contadorPares++
        } else {
            contadorImpares++
        }
    }

    console.log("Pares: " + contadorPares + ", Impares: " + contadorImpares)

// Exercicio 29

    let vetorInteiros = [1, 10, 30, 45, 50, 21, 11, 19, 14, 2, 3, 4]
    let foraIntervalo = 0
    let dentroIntervalo = 0
    intervaloInicio = 10
    intervaloFim = 20

    for (let i = 1; i <= vetorInteiros.length; i++) {
        if (vetorInteiros[i] >= intervaloInicio && vetorInteiros[i] <= intervaloFim) {
            dentroIntervalo++
        } else {
            foraIntervalo++
        }
    }

    console.log(`Numeros dentro do intervalo: ${dentroIntervalo}. Numeros fora do intervalo: ${foraIntervalo}`)

// Exercicio 30

    let vetInteiros = [1, 10, 30, 45, 50, 21, 11, 19, 14, 2, 3, 4]
    let maior
    let menor

    for (let i = 0; i < vetInteiros.length; i++) {
        if (maior === undefined && menor === undefined) {
            maior = vetInteiros[i]
            menor = vetInteiros[i]   
        }

        if (vetInteiros[i] > maior) {
            maior = vetInteiros[i]
        } else if (vetInteiros[i] < menor) {
            menor = vetInteiros[i]
        }
    }

    console.log(`Maior numero do vetor: ${maior}. Menor numero do vetor: ${menor}`)

// Exercicio 31

    let vetNegativos = [21, -3, 2, 7, 30, 94, -11, -20, 14, 9, -87, 6]

    console.log("Quantidade de numeros negativos no vetor: " + qtNegativos(vetNegativos))

    function qtNegativos(vetNegativos) {

        let qtNegativos = 0

        for (let i = 0; i < vetNegativos.length; i++) {
            if (vetNegativos[i] < 0) {
                qtNegativos++
            }
        }

        return qtNegativos
    }

// Exercicio 32

    function mediaArray(vetorPos) {

        let soma = 0

        for (let i = 0; i < vetorPos.length; i++) {
            soma += vetorPos[i]
        }

        return soma /vetorPos.length
    }

    vetorPos = [1, 10, 30, 45, 50, 21, 11, 19, 14, 2, 3, 4]

    console.log("A média dos valores no array corresponde a: " + mediaArray(vetorPos))

// Exercicio 33

    let vetorInteiro = [11, 32, 5, 17]
    let vetorString = ["Felippe", "Rhuanna", "Maicon", "Julia"]
    let vetorDouble = [3.22, 1.05, 7.09, 17.50]
    let vetorFinal = vetInteiros.concat(vetorString,vetorDouble)

    console.log(vetorFinal)

    // OU

    function concatenar(args) {
        let resultado = []
        for (let i = 0; i < arguments.length; i++) {
            resultado = resultado.concat(arguments[i])
        }

        return resultado
    }

    console.log(concatenar(vetorInteiro, vetorDouble))
    console.log(concatenar(vetorString, vetorInteiro))

// Exercicio 34

    string1 = "dbca"
    string2 = "abcde"

    console.log(compararStrings(string1, string2))

    function compararStrings(string1, string2) {
        let estaContido = true;
        for (let i = 0; i < string1.length; i++) {
            let caractereString1 = string1.charAt(i).toLowerCase() 
            for (let j = 0; j < string2.length; j++) {
                let caractereString2 = string2.charAt(j).toLowerCase() 
                if (caractereString1 == caractereString2) {
                    estaContido = true
                    break
                } else {
                    estaContido = false
                }
            }
            if (!estaContido) {
                return estaContido
            }
        }

        for (let i = 0; i < string2.length; i++) {
            let caractereString2 = string2.charAt(i).toLowerCase() 

            for (let j = 0; j < string1.length; j++) {
                let caractereString1 = string1.charAt(j).toLowerCase()  

                if (caractereString1 == caractereString2) {
                    estaContido = true
                    break
                } else {
                    estaContido = false
                }
            }
        }
        return estaContido
    }

// Exercicio 35

    function adicionarVetor(args) {
        for (let i = 0; i < vetorAdiciona.length; i++) {
            vetorPilha.push(vetorAdiciona[i])
        }
    }

    let vetorPilha = [1, 2, 3, 4, 5]
    let vetorAdiciona = [6, 7, 8, 9, 10]

    adicionarVetor(vetorPilha, vetorAdiciona)
    console.log(vetorPilha)

// Exercicio 36

    let vetorNumerico = [1, 6, 3, 10, 5]

    function multiplicar(vetorNumerico, multiplicador) {
        let vetorMultiplicado = []
        
        vetorNumerico.forEach(elemento => {
            vetorMultiplicado.push(elemento * multiplicador)
        })
        
        return vetorMultiplicado
    }
        
    function multiplicarMaior5(vetorNumerico, multiplicador) {
        let vetorMultiplicadoMaior5 = []
        
        for (let i = 0; i < vetorNumerico.length; i++) {
            if (vetorNumerico[i] > 5) {
                vetorMultiplicadoMaior5.push(vetorNumerico[i] * multiplicador)
            } else{
                vetorMultiplicadoMaior5.push(vetorNumerico[i])
            }        
        }
        
        return vetorMultiplicadoMaior5
    }

    console.log(vetorNumerico)
    console.log(multiplicar(vetorNumerico, 5))
    console.log(multiplicarMaior5(vetorNumerico, 5))

    // Exercicio 37

    let qtTermos = 5
    let a1 = 1
    let razao = 4

    function progAritmetica(qtTermos, a1, razao) {
        let arrayProgArit = [a1]
        let soma = a1 
        let i = 0
        while (i < qtTermos) {
            arrayProgArit.push(arrayProgArit[i] + razao)
            soma += arrayProgArit[i+1]
            i++
        }
        
        return `A soma de todos os elementos: ${soma}. Elementos da array: ${arrayProgArit}.`
    }

    function progGeometrica(qtTermos, a1, razao) {
        let arrayProgGeo = [a1]
        let soma = a1 
        let i = 0
        while (i < qtTermos) {
            arrayProgGeo.push(arrayProgGeo[i] * razao)
            soma += arrayProgGeo[i+1]
            i++
        }
        
        return `A soma de todos os elementos: ${soma}. Elementos da array: ${arrayProgGeo}.`
    }


    console.log(progAritmetica(qtTermos, a1, razao))
    console.log(progGeometrica(qtTermos, a1, razao))

// Exercicio 38

    let inicio = 3
    let fim = 19

    impares38(inicio, fim)

    function impares38(inicio, fim) {
        
        let temp

        if (fim < inicio) {
            temp = inicio
            inicio = fim
            fim = temp
        }

        for (let i = inicio; i <= fim; i++) {
            if (i % 2 != 0) {
                console.log(i)
            }
        }
    }

// Exercicio 39

    function troca(vetorA, vetorB) {
        for (let i = 0; i <= 5; i++) {
            vetorA.push(vetorB.shift())
        }
        for (let i = 0; i <= 5; i++) {
            vetorB.push(vetorA.shift())
        }
    }
    // OU
    function troca2(vetorA, vetorB){
        if (vetorA.length == vetorB.length) {
            for (let i = 0; i < vetorA.length; i++) {
                vetorA[i] = vetorA[i] + vetorB[i]
                vetorB[i] = vetorA[i] - vetorB[i]
                vetorA[i] = vetorA[i] - vetorB[i]
            }
        } else {
            return "Vetores de tamanhos diferentes."
        }
    }

    vetorA = [1, 1, 2, 3, 4, 5]
    vetorB = [6, 7, 8, 9, 10, 11]

    console.log(vetorA, vetorB)
    troca2(vetorA, vetorB)
    console.log(vetorA, vetorB)

// Exercicio 40

let notasFinais = [6.5, -1, 5.5, 10, 8.9, 7.0]

function conceitoNotas(notasFinais) {

    let conceitos = []

    for (let i = 0; i < notasFinais.length; i++) {
        if (notasFinais[i] >= 0 && notasFinais[i] <= 4.9) {
            conceitos.push('D')
        }
        else if (notasFinais[i] >= 5 && notasFinais[i] <= 6.9) {
            conceitos.push('C')
        }
        else if (notasFinais[i] >= 7 && notasFinais[i] <= 8.9) {
            conceitos.push('B')
        }
        else if (notasFinais[i] >= 9 && notasFinais[i] <= 10) {
            conceitos.push('A')
        } else {
            conceitos.push("Nota inválida.")
        }
    }
    return conceitos
}

console.log(notasFinais)
console.log(conceitoNotas(notasFinais))