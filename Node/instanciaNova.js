// Um Factory retorna um novo objeto      

module.exports = function () { 
    return { 
        valor: 1,
        inc() {
            this.valor++
        }
    }
}

console.log(module.exports) // Retorna uma função