const valores = [7.7 , 4.5, 2.3, 9.2];

console.log(valores[0], valores[3]);
console.log(valores[4]);

valores[4] = 10;

console.log(valores[4]);
console.log(valores);
console.log(valores.length);

valores.push({id : 3}, false, null, 'teste');
console.log(valores);

console.log(valores.pop());
console.log(valores);

delete valores[0];
console.log(valores);

console.log(typeof valores);
