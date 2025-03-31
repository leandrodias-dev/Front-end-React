const prompt = require('readline-sync')

// let saldo = Number(prompt.question('Qual eh o seu saldo?'))

// while (saldo < 0) {
//   saldo = Number(
//     prompt.question('Saldo inválido!  Por favor, informe novamente: ')
//   )
// }

// console.log(saldo)

// Exemplo 2

// let notaDoAluno = Number(prompt.question('Informe a nota do aluno: '))

// let somaDaNotas = 0 // Acumulador
// let qtdNotasValidas = 0 // Acumulador (quantidade de notas válidas digitadas)

// while (notaDoAluno >= 0) {
//   somaDaNotas += notaDoAluno // Incremento o acumulador
//   qtdNotasValidas++;

//   notaDoAluno = Number(prompt.question('Informe a proxima nota: '))
// }

// console.log(somaDaNotas)
// console.log(qtdNotasValidas)

// console.log('Media das notas dos alunos')

// * Exemplo 3

// Math.random() => entre 0 e 1
// const numeroAleatorio = parseInt(Math.random() * 10) // parseInt tranforma o numero em inteiro

// console.log(numeroAleatorio)

// let numeroDoUsuario = Number(
//   prompt.question('Informe um numero entre 0 e 10: ')
// )

// console.log(numeroAleatorio)

// while (numeroAleatorio !== numeroDoUsuario) {
//   console.log('Voce errou o numero! Tente novamente...')
//   numeroDoUsuario = Number(prompt.question('Infome um numero entre 0 e 10: '))
// }

// console.log('Parabens! voce acertou! o numero era', numeroAleatorio)

// // Loop com contador

// let contador = 0

// while (contador < 5) {
//   console.log(contador)
//   contador++

//   if (contador === 2){
//     continue
//   }

//   console.log('Depois do if...')

// }


// * Do-While

let saldo 
do  {
  saldo = Number(prompt.question('Informe um saldo valido '))
} while (saldo < 0)

console.log(saldo)
