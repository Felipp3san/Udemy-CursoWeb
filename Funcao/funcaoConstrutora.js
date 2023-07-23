function Carro(velocidadeMaxima = 200, delta = 5){

    // Atributo privato
    let velocidadeAtual = 0

    // Metodo Publico
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    // Metodo Publico
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}

const uno = new Carro

console.log(`Uno: ${uno.getVelocidadeAtual()}`)
uno.acelerar()
console.log(`Uno: ${uno.getVelocidadeAtual()}`)

const ferrari = new Carro(350, 20)

console.log(`Ferrari: ${ferrari.getVelocidadeAtual()}`)
ferrari.acelerar()
console.log(`Ferrari: ${ferrari.getVelocidadeAtual()}`)
