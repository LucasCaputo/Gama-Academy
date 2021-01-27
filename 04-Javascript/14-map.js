const ArrTest = [11, 32, 45, 69, 31]

ArrTest.map(ind => console.log(`Valor: ${ind} indice: ${ArrTest.indexOf(ind)}`))


function maiorQue(value){
    return value >= 30
}

var filtered = ArrTest.filter(maiorQue)
console.log(filtered);