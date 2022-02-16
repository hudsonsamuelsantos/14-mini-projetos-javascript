//Criar função que mostra somente os números primos
//Isso dentro de uma quantidade limite
//Obs: Números primos são divisíveis apenas por 1 ou por eles mesmos

showPrimeNumbers(15)

function showPrimeNumbers(limit) {
    for (let number = 2; number <= limit; number++){ 
        if (checkPrimeNumber(number)) console.log(number)
    }
}

function checkPrimeNumber(number) {
    for (let divider = 2; divider < number; divider++) {
        if (number % divider === 0) {
            return false
        }
    }
    return true
}