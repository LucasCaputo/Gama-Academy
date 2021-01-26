let Pessoa = {
  nome: "Ana",
  idade: 22,
  endereco: {
    logradouro: "Rua ABC",
    numero: 100,
  },
};

// Acessando com ponto
// console.log(pessoa);

// console.log(pessoa.nome);

// Acessando pela desestruturação

// const { nome, idade } = Pessoa;

// console.log(nome);

//Desestruturação trocando valor da chave

// const { nome: n, idade: i } = Pessoa;

// console.log(`${n} tem ${i} anos`);

// Desestruturar itens em outros níveis do objeto

// const {
//   endereco: { logradouro, numero },
// } = Pessoa;

// console.log(logradouro, numero);
