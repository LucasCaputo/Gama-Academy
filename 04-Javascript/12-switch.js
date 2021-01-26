const ImprimeResultado = function (nota) {
    switch (Math.floor(nota)) {
        case 10:
        case 9:
            console.log("Aprovado com nota máxima");
        
            break;

        case 8:
        case 7:
        case 6:
        case 5:
            console.log("Aprovado")

            break;

        case 4:
        case 3:
        case 2: 
        case 1: 
        case 0:
            console.log("Reprovado")

            break;

        default:
            console.log("Não é uma nota válida")
        }
}

ImprimeResultado(10.1)