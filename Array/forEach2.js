Array.prototype.forEach2 = function (callback) {    // Implementando FOREACH
        for (let i = 0; i < this.length; i++) {
            callback(this[i], i, this)
        }
    }

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

console.log(aprovados)

aprovados.forEach2(function (nome, indice) {
    console.log(`${indice + 1}) ${nome}`)}
)
