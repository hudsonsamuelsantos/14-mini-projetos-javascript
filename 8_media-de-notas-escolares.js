//Obter média das notas a partir de um array
//Com base na média, chegar a um dos resultados abaixo
//0-59 => F
//60-69 => D
//70-79 => C
//80-89 => b
//90-100 => A
//Exibir resultado no console

const scoreArray = [70, 70, 80];

console.log(result(scoreArray));

function result(score) {
    const average = calculateAverage(score)
    
    if (average <= 59) return 'F';
    if (average <= 69) return 'D';
    if (average <= 79) return 'C';
    if (average <= 89) return 'B';
    return 'A';
}

function calculateAverage(array) {
    let sum = 0;

    for (let value of array) {
        sum += value
    }
    return sum/(array.length);
}