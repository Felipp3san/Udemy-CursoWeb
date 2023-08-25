// Com promise...

const http = require('http')

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
     
    return new Promise((resolve, reject) => {
        
        http.get(url, res => {
            let resultado = ''
            res.on('data' , dados => {
                resultado += dados
            })

            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))
                }
                catch(e) {
                    reject(e)
                }
            })
        })
     })

}   

let nomes = []

getTurma('A').then(alunos => {
    nomes = nomes.concat(alunos.map(alunos => `A: ${alunos.nome}`))
    getTurma('B').then(alunos => {
        nomes = nomes.concat(alunos.map(alunos => `B: ${alunos.nome}` ))
        getTurma('C').then(alunos => {
            nomes = nomes.concat(alunos.map(alunos => `C: ${alunos.nome}` ))
            console.log(nomes)
        })
    })
})

Promise.all([getTurma('A'), getTurma('B'), getTurma('C')]) // executa uma promise por vez e retorna todas juntas
    .then(turmas => [].concat(...turmas)) 
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(x => console.log(x))
    .catch(e => console.log(e))

getTurma('D')  // ERRO, cai em catch
    .then(turmas => [].concat(...turmas))
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(x => console.log(x))
    .catch(e => console.log(e))