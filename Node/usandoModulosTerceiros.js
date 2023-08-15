// NPM = Node Package Manager, gerenciador de pacotes do Node, permite a instalação da biblioteca de terceiros.

const _ = require('lodash')   // usar _ é uma convenção entre utilizadores da biblioteca lodash
                       // Após utilizar apenas o nome 'lodash' o node procura pelo arquivo Index.js na pasta lodash

setInterval(() => console.log(_.random(1, 100)), 2000)                    

