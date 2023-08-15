const fs = require('fs')    // Require filesystem node

const caminho = __dirname + '/arquivo.json'  // Caminho do arquivo 'arquivo.json'

console.log(__dirname)  // Diretório atual

// Leitura de arquivos de forma sincrona

const conteudo = fs.readFileSync(caminho,'utf-8')
console.log(conteudo)  // Retorna o arquivo JSON

// Leitura de forma assincrona

fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const conteudoConvertido = JSON.parse(conteudo)   // Retorna o conteudo em formato JSON, requer conversão
    console.log(conteudoConvertido)
    console.log(`${conteudoConvertido.db.host}:${conteudoConvertido.db.port}` )
})

// =======
// Arquivo JSON é mais fácil de ler, não requer FileSystem do node
const config = require('./arquivo.json')  // Arquivo JSON já é convertido no momento em que é importado
console.log(config.db.host, config.db.port)  // É executado antes da leitura assincrona por ser mais leve
// ======

// Ler diretório
fs.readdir(__dirname, (err, arquivos) => {   
    console.log("Conteudo da pasta...")
    console.log(arquivos)
})