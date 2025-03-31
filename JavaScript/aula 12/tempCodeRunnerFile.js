const pessoa = {
  nome: 'Leandro',
  idade: 27,
  altura: 1.77
}

const pessoaComPeso = {
  ...pessoa,
  peso: 79
}

console.log(pessoaComPeso)
