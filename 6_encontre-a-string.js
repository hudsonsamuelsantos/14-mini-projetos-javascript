//Crie um método para ler propriedades de um objeto
//Ele deve exibir somente propriedades do tipo String

const movie = {
    title: 'Batman',
    year: 2022,
    director: 'Robin',
}

showProperties(movie);

function showProperties(obj) {
    for (property in obj)
        if (typeof obj[property] === 'string')
            console.log(property, obj[property])
}