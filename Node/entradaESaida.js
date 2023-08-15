// Chamar no terminal com "node entradaESaida.js -a ou node entradaESaida.js"
// process.stdout.write()
// process.stdin.on()
// process.exit()
// process.argv

const anonimo = process.argv.indexOf('-a') !== -1

if(anonimo) {
    process.stdout.write('Fala Anonimo!\n')
    process.exit() // Mata a aplicação
} else {
    process.stdout.write('Informe o seu nome: ')
    process.stdin.on('data', data => {
        const nome = data.toString().replace('\n', '')

        process.stdout.write(`Fala ${nome}!!! \n`)
        process.exit()
    })
}