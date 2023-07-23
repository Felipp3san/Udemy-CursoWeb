function boaNoticia(nota) {
    if (nota >= 7) {
        console.log('Aprovado ' + nota)
    }
}

boaNoticia(6.1)
boaNoticia(8.9)

function seForVerdade(valor) {
    if (valor) {
        console.log('É Verdade... ' + valor)
    }
}

seForVerdade()
seForVerdade(null)
seForVerdade(undefined)
seForVerdade(NaN)
seForVerdade('')
seForVerdade(0)
seForVerdade(-1)
seForVerdade(' ')
seForVerdade('?')
seForVerdade([])
seForVerdade([1, 2])
seForVerdade({})
