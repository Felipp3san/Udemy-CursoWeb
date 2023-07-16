{
    {
        {
            { 
                var sera = 'Sera?'; // Váriavel continua visível fora do bloco não-função.
            }
        }
    }
}

console.log(sera);

function teste()
{
    var local = 123; // Variável só é visível dentro da função.
    console.log(local);
}

teste();

