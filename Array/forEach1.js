const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

console.log(aprovados)

aprovados.forEach(function (nome, indice) {
    console.log(`${indice + 1}) ${nome}`)}
)

// OU (Arrow Function)

aprovados.forEach((nome, indice) => 
    console.log(`${indice + 1}) ${nome}`)
)

// OU (apenas nome)

aprovados.forEach(nome => 
    console.log(nome)
)

// OU (declarar função em uma constante e chamar forEach utilizando a constante)

const exibirAprovados = function (aprovado) {
    console.log(aprovado)
}

aprovados.forEach(exibirAprovados)