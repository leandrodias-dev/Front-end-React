const prompt = require('readline-sync')
let i
// expressão 1: inicialização da variável de controle
// expressão 2: condição de permanência do for
// expressão 3: o incremento davariável de controle

// for (expressão 1; expressão 2; expressão 3) {
//   // escopo do for
// }

// for (i = 0; i < 5; i++) {
//   console.log(i)
// }

// console.clear()

// let maiorNumero = 0
// let numeroInformado

// for (let i = 0; i <= 5; i++) {
//   numeroInformado = Number(prompt.question('Informe um numero positivo: '))

//   if (numeroInformado > maiorNumero){
//     maiorNumero= numeroInformado
//   }
// }

// console.log("Maior numero: ", maiorNumero)

// * Exemplo: percorrendostrings com o for

// const nome = 'Leandro'

// for (let i = 0; i < nome.length; i++) {
//   console.log(nome[i])
// }

// // * Arrays

// console.clear()

// const nota1 = 10
// const nota2 = 8
// const nota3 = 5

// const notasDoAluno = [10, 8, 5]
// const pessoa = ['Leandro', 28, 1.75, true]

// console.log(notasDoAluno)
// console.log(pessoa)

// console.log(pessoa[0])

// pessoa[3] = false
// console.log(pessoa)

// console.clear()

// Fatiamento do array

// const numeros = [40, 34, 67, 89, 23, 10]

// console.log(numeros.slice(0, 2))
// console.log(numeros.slice(2))

// console.clear()

// //Adicionando elementos do final do array
// numeros.push(0)
// console.log(numeros)

// // Adicionar elemento no inicio do array
// console.clear()
// numeros.unshift(-1)
// console.log(numeros)

// //pop: remover o elemento que está no final do array
// console.clear()
// numeros.pop()
// console.log(numeros)

// // shift: remover o primeiro elemento do array
// console.clear()
// numeros.shift()
// console.log(numeros)

// // Será que o elemento 20 existe no array
// console.clear()
// console.log(numeros.includes(10))
// console.log(numeros.includes(10))

// if (numeros.includes(20)) {
//   console.log('Opa! Existe o numero 20 dentro do array numeros!')
// } else {
//   console.log('Não existe onumero 20 no array numeros')
// }

// // * lastIndexOf
// const existeNumero10 = numeros.includes(10)

// console.log(indiceDoElemento10)

// const indiceDoElemento10 = numeros.includes(10)

// console.log(indiceDoElemento10)

console.clear()

// * Pecorrendo arrays com o for

const arr = [45, 36, 90, 76, 32, 7]

for (let i = 0; i < arr.length; i++) {
  console.log(i, arr[i])
}
console.clear()

// * for-of

for (const elemento of arr) {
  console.log(elemento)
}

console.clear()
//* for-in

for (const indice in arr) {
  console.log(indice, typeof indice)
}

console.clear()

for (let i = 0; i <= 9; i+=2) {
  console.log(i);
}