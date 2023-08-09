class Lancamento {
    constructor(nome = 'Generico', valor = 0){
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos(...lancamentos) {
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario() {
        let valorConsolidade = 0
        this.lancamentos.forEach(l => valorConsolidade += l.valor)
        return valorConsolidade
    }
}
const salario = new Lancamento('Salario', 45000)
const contaLuz = new Lancamento('Luz', -200)

const contas = new CicloFinanceiro(3, 2020)
contas.addLancamentos(salario, contaLuz)
console.log(contas)
console.log(contas.sumario())