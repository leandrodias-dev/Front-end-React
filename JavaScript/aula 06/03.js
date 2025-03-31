// instalar a biblioteca: npm install readline-sync para rodar no node a execução
const prompt = require('readline-sync')

const idade = prompt.question('Qual e a sua idade? ')

const idadeNumber = Number(idade) //Conversão de nome para numero

console.log(idadeNumber, typeof idadeNumber)

// Coerção Explícita (Conversão manual)
console.log(Number("X")) // NaN: Not a Number

console.log(String(10), typeof String(10))

console.log(Boolean(0))

// Coerção Implícita

console.log(1 + "1")
console.log("10" + 5)
console.log(10 - "5")
console.log(10 * "5")
console.log(10 / "5")

//Qual será a saída do código?
let n = 1 + '1' // 11

n = n - 1 // 11 - 1 = 10

console.log(n)

console.log(2 + 3 + 4  + '5') // 5 + 4 + '5' = 9 + '5' = '95'

console.log('5' + 2 + 3 + 4) // '52' + 3 + 4 = '523' + 4 = '5234'

console.log('10' - '4' - '3' - 2 + '5') // 10 - '3' - '2' + '5' = 3 - 2 + '5' 1 + '5' = '15'