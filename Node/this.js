console.log(this === global)  // False
console.log(this === module) // False

console.log(this === module.exports) // True
console.log(this === exports) // True

function logThis() {
    console.log("Dentro de uma função...")
    console.log(this === exports)   // Dentro de uma função o this não referencia module.exports
    
    console.log(this === global)  // True
    this.perigo = '...'  // aponta para o contexto global
    console.log(this) // O this na função é o objeto global
}

logThis()

// 'this' fora de uma função, está fazendo com que o atributo ou função se torne publico, algo que estará visível fora do modulo

const arrowThis = () => {
    console.log(this === global)  // Dentro de uma Arrow Function o this não referencia mais o objeto global
    console.log(this === exports)
    console.log(this === module.exports)  // E sim ao module.exports
}

arrowThis()