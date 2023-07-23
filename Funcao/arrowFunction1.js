let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a  // Return implicito

let ola = function () {
    return "Olá"
}

ola = () => "Olá"
ola = _ => "Olá"  // Possui um parametro

console.log(ola())