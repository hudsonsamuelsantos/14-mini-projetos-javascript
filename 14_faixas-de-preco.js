//Crie um array de objetos de faixas de preço para produtos
//Para depois serem usadas como nos filtros de lojas online
//Verifique o array no console

function createPriceRange(tooltip, min, max) {
    return {
        tooltip, min, max
    }
}

let priceRange = [
    createPriceRange('Até 200 reais', 0, 200),
    createPriceRange('Até 700 reais', 0, 700),
    createPriceRange('Até 1000 reais', 0, 1000),
]

console.log(priceRange)