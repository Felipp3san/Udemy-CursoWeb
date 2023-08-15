// Neste exemplo o contadorA e contadorB se referem a mesma instância, e tudo que é feito por uma variável é transmitida para outra
const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')  // Está importando um objeto
//====
// Neste exemplo com o uso da função factory, uma nova instância é criada para cada variável, e ambas são independentes
const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()  // Está importando uma função construtora, é necessário incluir ()

contadorA.inc()
contadorA.inc()
console.log(contadorA.valor)
console.log(contadorB.valor)

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor)
console.log(contadorD.valor)