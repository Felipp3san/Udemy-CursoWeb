// Arrow Function
// 2 grandes beneficios, sintaxe reduzida
    const soma = (a, b) /* Quando se tem apenas 1 parametro não é necessário adicionar parenteses) */ => a + b // return implicito, ou return quando se coloca {}
    console.log(soma(2, 3))
    // São funções anônimas

// Arrow Function (this)

    const lexico1 = () => console.log( this === exports)
    const lexico2 = lexico1.bind({})
    lexico1()
    lexico2()

    // This em uma função tradicional aponta para o global
    // This em Arrow Function aponta para module.exports, ou o escopo onde ela foi criada.
    // Não é possível forçar um bind

// Parametro default
// Permite adicionar um parametro padrão, caso não seja informado os parametros na chamada da função
    function log(texto = 'Node') {
        console.log(texto)
    }

    log()
    log('Sou mais forte')

// Operador rest
// Agrupa os parametros da chamada de função em um array
    function total(...numeros){
        let total = 0
        numeros.forEach(elemento => total += elemento)
        return total
    }

    console.log(total(1, 2, 3, 4, 5))