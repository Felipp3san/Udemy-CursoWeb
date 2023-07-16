
const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        longradouro: 'Rua ABC',
        numero : 1000
    }
};

const {nome, idade} = pessoa; // Extrai o valor das variaveis do objeto e adiciona nas novas variáveis.
console.log(idade, nome);

const { nome: n, idade: i} = pessoa;
console.log(i, n);

const { endereco : {longradouro, numero}} = pessoa;
console.log(longradouro, numero);


