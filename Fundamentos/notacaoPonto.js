console.log(Math.ceil(6.1));

const obj1 = {}

console.log(typeof obj1);

obj1.nome = 'Bola'
// obj1['nome'] = 'Bola2'

console.log(obj1.nome);

function Obj(nomeObj){
    this.nome = nomeObj;
}

console.log(typeof Obj);

const obj2 = new Obj('Cadeira');
const obj3 = new Obj('Mesa');

console.log(obj2.nome);
console.log(obj3.nome);
