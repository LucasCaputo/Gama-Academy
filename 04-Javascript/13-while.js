function getInteiroAleatorioEntre(min , max) {
    const value = Math.random() * (max - min) + min

    return Math.floor(value)
}


let option = 0 
let count = 0

while (option != -1) {
    option = getInteiroAleatorioEntre(-1, 10)
    console.log(`A opção escolhida foi: ${option}`)

    count +=1

}

console.log("Saiu do Laço");
console.log(count);