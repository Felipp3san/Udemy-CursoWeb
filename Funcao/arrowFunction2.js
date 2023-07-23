function Pessoa() {
    this.idade = 0
    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa

// Funções Arrow não permite a variação do 'This' 
// independente do contexto em que é executado
// funciona como um .bind