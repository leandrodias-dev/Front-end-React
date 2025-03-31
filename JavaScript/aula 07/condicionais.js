const prompt = require('readline-sync')

const idade = Number(prompt.question('Qual e a sua idade? '))

const eMaiorDeIdade = idade >= 18

// Estrutura condicional: if/else

if (eMaiorDeIdade) {
  // Faça alguma coisa...
  console.log('Você eh maior de idade!')
} else {
  console.log('Você eh menor de idade')
}

const mediaDoAluno = 7.999999

// Média >= 7 => Aprovado
// Média >= 7 e Média >= 5 => Prova final
// Média >= 7 => Aprovado

if (mediaDoAluno >= 7) {
  console.log('Aprovado!')
  console.log('Parabéns você foi aprovado!')
} else if (mediaDoAluno >= 5) {
  console.log('Prova final')
} else {
  console.log('Reprovado')
}

// 1. Preciso ser maior de idade
// 1. Preciso ter uma CNH(PPD)

const idadeDaPessoa = 18
const temCNH = true

if (idadeDaPessoa >= 18 && temCNH) {
  console.log('Você pode dirigir!')
} else {
  console.log('Você NÃO pode dirigir!')
}
