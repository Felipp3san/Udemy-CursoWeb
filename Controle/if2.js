function teste1(num) {
    if (num > 7) 
        console.log(num)
    
    console.log('Final')  // Sem as chavetas, executa apenas uma sentença dentro do if
}

//teste1(6)
//teste1(8)

function teste2(num) {
    if (num > 7); {   // Cuidado com ; em if, sentenças após ponto e virgula saem do if
        console.log(num)
    }
}

teste2(6)
teste2(8)