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

// Recusro do ES8
// Objetivo de simplificar o uso de promises...
let obterAlunos = async () => {
    const ta = await getTurma('A') // usar await apenas em uma função marcada com async
    const tb = await getTurma('B')
    const tc = await getTurma('C')
    return [].concat(ta, tb, tc)  // O uso de Async sempre retornará um objeto do tipo Async Function
}

// Utilize o then para retornar os valores da async function

obterAlunos()
    .then(alunos => alunos.map(a => a.nome))
    .then(nomes => console.log(nomes))