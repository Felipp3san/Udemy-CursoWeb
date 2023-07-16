let numero = 1;
{
    let numero = 2;  // Funciona apenas dentro do bloco, independente de ser função ou não
    console.log('Dentro: ', numero);
}

console.log('fora: ', numero);

