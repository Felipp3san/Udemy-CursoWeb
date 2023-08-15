url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chineses = function (funcionario) {
    return funcionario.pais == 'China'
}
const apenasMulheres = function (funcionario) {
    return funcionario.genero == 'F'
}

const filtrarSalario = function (menorSalario, funcionario) {
    return funcionario.salario < menorSalario.salario? funcionario : menorSalario
}

axios.get(url).then(response => {
    const funcionarios = response.data
    console.log(funcionarios
        .filter(chineses)
        .filter(apenasMulheres)
        .reduce(filtrarSalario))

    // TENTATIVA 1
    
    // function menorSalario(funcionario) {

    //     let menorSalario = funcionario[0]

    //     for (let i = 0; i < funcionario.length; i++) {
    //         if (funcionario[i].salario < menorSalario.salario){
    //             menorSalario = funcionario[i]
    //         }
    //     }

    //     return menorSalario
    // }

    // console.log(menorSalario(filtrado))
})