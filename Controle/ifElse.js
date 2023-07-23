const imprimirResultado = function(nota) {
    if (nota >= 7) {
        console.log('Aprovado!')
    } else {
        console.log('Reprovado!')
    }
}

imprimirResultado(6)
imprimirResultado(9)
imprimirResultado('Epa!') // Cuidado, o valor string ainda é comparado. Linguagem fracamente tipada
