console.log("--------------------Exercício 1 ----------------------");
console.log("sentença 01");

{
  {
    console.log("Bloco 01");
  }
  {
    console.log("Bloco 02");
  }
}

function teste() {
  console.log("Resposta da Função");
}

console.log("Sentença 02");

teste();

console.log("--------------------Exercício 2 ----------------------");

function transformaParaMaiuscula(parametro) {
  console.log(parametro.toUpperCase());
}

let userName = "João da Silva";

transformaParaMaiuscula(userName);
