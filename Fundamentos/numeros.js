const PESO1 = 1.0;
const PESO2 = Number('2.0');

console.log(PESO1, PESO2);
console.log(Number.isInteger(PESO1));
console.log(Number.isInteger(PESO2));

const AVALIACAO1 = 9.543;
const AVALIACAO2 = 6.654;

const TOTAL = AVALIACAO1 * PESO1 + AVALIACAO2 * PESO2;
const MEDIA = TOTAL / (PESO1 + PESO2);

console.log(MEDIA.toFixed(2));
console.log(MEDIA.toString(2)); //Converte em binário.
console.log(typeof MEDIA);