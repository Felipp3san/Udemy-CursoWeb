function print(){
    console.log('Olá');
}

print();

function rand({min = 0, max = 1000}){
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

const obj = {min: 40 , max : 50};
console.log(rand(obj));

console.log(rand({min : 55}));

console.log(rand({}));