const prod1 = {};

prod1.nome = 'Celular Ultra Mega';
prod1.preco = 4990.20;
prod1['Desconto Legal'] = 0.40; // Evitar atributos com espaço

console.log(prod1);

const prod2 = {
    nome: 'Camisa Polo',
    preco: '79.90',
    obj: {    // É possivel criar um objeto dentro de outro objeto.
        blabla: 1
    }
};

console.log(prod2);
