console.log(soma(2, 4)) // Funciona pois as funções declaration são carregadas em primeiro lugar
// console.log(sub(2, 3)) // Não funciona pois a constante sub ainda não foi declarada

// Function declaration
function soma(x, y) {
    return x + y
}

// Function expression
const sub = function () {
    return x + y
}

// Named function expression
const mult = function mult() {
    return x * y
}