const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(let x in nums) {
    if (x == 5) {
        break // Quando o indice chegar a 5, encerra o ciclo for  
    }
    console.log(`${x} = ${nums[x]}`)
}

for(let y in nums) {
    if (y == 5) {
        continue // Interrompe o indice 5 e continua no indice 6
    }
    console.log(`${y} = ${nums[y]}`)
}

rotulo: for(let a in nums) { // Um rotulo foi adicionado ao primeiro ciclo de repetição
    for(let b in nums) {
        if (a == 2 && b == 3) {
            break rotulo // Break interrompe a repetição associada ao rotulo
        }
        console.log(`Par = ${a}, ${b}`)
    }
}