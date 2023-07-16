// Armazenando um função em uma variavel.

const imprimirSoma = function (a, b){
    console.log(a + b);
}

imprimirSoma(2,3);

// Armazenando uma função arrow em uma variável.

const soma = (a, b) => 
{
    return a + b;
}

console.log(soma(2, 3))

// Retorno implícito

const subtracao = (a,b) => a - b;

console.log(subtracao(2, 3));

// Com apenas um parametro

const imprimir2 = a => console.log(a);

imprimir2('Legal!!!');