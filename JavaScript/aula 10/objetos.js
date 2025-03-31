// Object Literal

const array = ['Leandro', 28, 1.75, true]

const pessoa = {
  nome: 'Leandro',
  idade: 28,
  altura: 1.75,
  ehProgramador: true,
  hobbies: ['Jogar FIFA', 'Academia', 'ler']
}

console.log(pessoa)
console.clear()

console.log(pessoa.nome)
console.log(pessoa.hobbies)
console.log(pessoa['idade'])

pessoa.nome = 'Dias' // alteração de atributo

pessoa.profissao = 'Desenvolvedor' // adicionando um novoatributo

delete pessoa.altura // deletando o atributo

console.log(pessoa)

console.clear()

const idade = 28
const altura = 1.75

const objeto = {
  idade,
  altura,
}

// Sintaxe para adicionar propriedades
console.log(objeto)
console.clear()
const { nome, hobbies } = pessoa


console.log(nome)
console.log(hobbies)
console.log(pessoa)