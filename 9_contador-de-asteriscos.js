//Crie uma função que exibe a quantidade de * que aquela linha possui

showAsterisks(5)

function showAsterisks(lines) {
    for (let asterisks = '*'; asterisks.length <= lines; asterisks += '*')
        console.log(asterisks)
}