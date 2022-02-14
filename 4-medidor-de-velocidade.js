//Velocidade máxima até 70
//A cada 5km acima do limite ganha 1 ponto
//Math.floor() para arredondar valores
//Mais do que 12 pontos => 'Carteira Suspensa'
//Refatore o código para melhor manutenção dos valores chave

checkSpeed(135);

function checkSpeed(speed) {
    const maxSpeed = 70;
    const kmPerPoint = 5;
    const maxPoints = 12;
    
    if (speed <= maxSpeed)
        console.log('Ok!');
    else {
        const points = Math.floor((speed - maxSpeed) / kmPerPoint)
        
        if (points > maxPoints)
            console.log('Carteira Suspensa!')
        else
            console.log(`Ganhou ${points} pontos na carteira!`)
    }
}