// Função sem retorno


function imprimirSoma(a, b)
{
    console.log(a + b);
}

imprimirSoma(2,3);
imprimirSoma(2); // Retorna NaN (Not a Number)
imprimirSoma(2, 3, 4, 5); // Usa os dois primeiros e ignora o resto
imprimirSoma(); // Retorna NaN

// Função com retorno

function soma(a , b = 0)
{
    return a + b;
}

console.log(soma(2, 3));
console.log(soma(2)); 
console.log(soma()); // Retorna NaN
