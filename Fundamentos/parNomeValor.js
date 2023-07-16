// Par nome/valor
const saudacao = 'Opa' // Contexto Léxico 1

function exec() {
    const saudacao = 'Falaaa' // Contexto Léxico 2
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco : {
        longradouro: 'Rua Muito Legal',
        numero: 123
    }
}

console.log(saudacao);
console.log(exec());

console.log(cliente);
console.log(cliente.endereco.longradouro);


