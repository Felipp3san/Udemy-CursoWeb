console.log('01)', '1' == 1); // Compara apenas valor. Não compara o tipo.
console.log('02)', '1' === 1); // Estritamente igual. Compara se é do mesmo tipo
console.log('03)', '3' != 3);
console.log('03)', '3' !== 3);

console.log('05)', 3 < 2);
console.log('06)', 3 > 2);
console.log('07)', 3 <= 2);
console.log('08)', 3 >= 2);

const d1 = new Date(0);
const d2 = new Date(0);
console.log('09)', d1 == d2); // Compara espaço de memória
console.log('10)', d1 === d2); // Compara espaço de memória
console.log('11)', d1.getTime() == d2.getTime()); // Compara valor e tipo  
console.log('12)', d1.getTime() === d2.getTime()); // Compara valor e tipo

console.log('13)', undefined == null);
console.log('14)', undefined === null);

