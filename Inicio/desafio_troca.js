// Troca valor de variáveis a, b entre si.

let a = 7;
let b = 94;
let temp = a;

console.log(a);
console.log(b);

a = b;
b = temp;

// Depois da troca... a = 94 e b = 7

console.log(a);
console.log(b);

// Troca simples no javascript

[a,b] = [b,a];

console.log(a);
console.log(b);
