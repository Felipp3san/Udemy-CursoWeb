const schedule = require('node-schedule')

// Tarefa 1 executa de 5 em 5 segundos, com regra de tempo definida dentro da função
const tarefa1 = schedule.scheduleJob('*/5 * * * * *', () => {
    console.log('Executando tarefa 1. ', new Date().getSeconds())
})

// Executa uma função em 20 segundos que cancela a tarefa 1
setTimeout(() => {
    tarefa1.cancel()
    console.log('Cancelando tarefa 1.')
}, 20000)  // 20 segundos

// Definindo a regra de tempo antes de criar o scheduleJob
const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)]
regra.second = 30

// Tarefa 2 executa de 30 em 30 segundos
const tarefa2 = schedule.scheduleJob(regra, () => {
    console.log('Executando tarefa 2. ', new Date().getSeconds())
})