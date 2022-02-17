//Cria um objeto de endereço que contém:
//Rua
//Cidade
//Cep
//Crie uma função que exiba o objeto no console

function Address(street,city,cep) {
    this.street = street
    this.city = city
    this.cep = cep
}

const address = new Address('Rua N','São Paulo',36098900)

function showAddress(address) {
    for (let key in address)
        console.log(key,address[key])
}

showAddress(address)