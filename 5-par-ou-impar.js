//Receber uma quantidade de valores para avaliar
//Uma funçao exibe se cada valor é par ou ímpar

showType(5)

function showType(limit) {
    for (let value = 0; value <= limit; value++)
        if (value % 2 === 0)
            console.log(value,'PAR')
        else
            console.log(value,'ÍMPAR')
}