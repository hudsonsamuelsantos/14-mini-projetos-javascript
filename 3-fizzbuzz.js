//Divisível por 3 => Fizz
//Divisível por 5 => Buzz
//Divisível por 3 e 5 => FizzBuzz
//Não divisível por 3 ou 5 => entrada
//Não é um número => 'Não é número'

const result = fizzBuzz(15);
console.log(result)

function fizzBuzz(input) {
    if (typeof input !== 'number')
        return 'Não é número';
    if (input % 3 === 0 && input % 5 === 0)
        return 'FizzBuzz';
    if (input % 3 === 0)
        return 'Fizz';
    if (input % 5 === 0)
        return 'Buzz';
    if (input % 3 !== 0 && input % 5 !== 0)
        return input;
}