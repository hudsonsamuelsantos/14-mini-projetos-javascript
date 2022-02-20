//Criar função que compara dois objetos
//Primeiro, compara se as propriedades possuem valores iguais
//Segundo, se a referência do objeto aponta para o mesmo local na memória
//Exiba resultados no console

function Address(street,city,cep) {
    this.street = street
    this.city = city
    this.cep = cep
}

const firstAddress = new Address('Rua N','São Paulo',36098900)
const secondAddress = new Address('Rua N','São Paulo',36098900)

function checkIfPropertiesAreTheSame(address1, address2) {
    return address1.street === address2.street &&
            address1.city === address2.city &&
            address1.cep === address2.cep
}

function checkIfMemoryLocationsAreTheSame(address1, address2) {
    return address1 === address2
}

console.log(checkIfPropertiesAreTheSame(firstAddress, secondAddress))
console.log(checkIfMemoryLocationsAreTheSame(firstAddress, secondAddress))