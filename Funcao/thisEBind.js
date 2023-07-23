const pessoa = {
    saudacao : "Olá",
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()

const pessoaFalar = pessoa.falar
pessoaFalar()  // Conflito, 'this' referencia outra coisa, mudança de contexto

const pessoaFalarBind = pessoa.falar.bind(pessoa)
pessoaFalarBind()