const escola = "Cod3r";

console.log(escola.charAt(4));
console.log(escola.charAt(5)); // Não existe. Não apresenta erro (Tipagem fraca)
console.log(escola.charCodeAt(3)); // Código Unicode HTML do numero 3
console.log(escola.indexOf('d')); // Indice associado ao digito D na palavra cod3r

console.log(escola.substring(2)); // Começa a partir do indice 2
console.log(escola.substring(0, 2)); // Sai do indice 0 e vai até o 3

console.log('Escola '.concat(escola).concat("!"));
console.log('Escola ' + escola + "!"); // Outra forma

console.log(escola.replace(3, 'e')); // Substitui a letra localizada no indice 3 pela letra 'e'
console.log(escola.replace(/\d/, 'e')); // REGEX Substitui todos os digitos pela letra 'e'
console.log(escola.replace(/\w/g, 'e')); // REGEX Substitui todas as letras e digitos pela letra 'e' (g é a flag global)

console.log('Ana,Maria,Pedro'.split(',')); // Converte elementos da string em array (separados por ,)



