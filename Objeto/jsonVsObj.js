//JSON
//Formato textual para troca de dados simples entre sistemas

const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c}}
console.log(JSON.stringify(obj))

// Formato invalido // console.log(JSON.parse("{ a: 1, b: 2, c: 3 }"))
// Formato invalido // console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3 }"))
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }')) // Formato correto
