//Criar função que retorne a soma dos múltiplos de 5 e 3 dentro de um número limite

sum(10);

function sum(limit) {
    let multiplesOf3 = 0;
    let multiplesOf5 = 0;

    for (let value = 0; value <= limit; value++){
        if (value % 3 === 0)
            multiplesOf3 += value
        if (value % 5 === 0)
            multiplesOf5 += value
    }

    console.log(multiplesOf3 + multiplesOf5)
}