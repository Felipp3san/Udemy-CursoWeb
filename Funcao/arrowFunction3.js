let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global)  // This se refere ao contexto global

//======

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)  // This já não aponta para o contexto global
comparaComThis(obj) // This passa a apontar para o contexto do obj

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj) // Não aponta para o objeto com bind.
// This na função arrow é associado ao contexto no qual a função foi escrita