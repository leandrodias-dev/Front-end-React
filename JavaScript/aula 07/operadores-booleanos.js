// Operadores booleanos: Comparações

const numero1 = 10
const numero2 = 12

console.log(numero1 == numero2)
console.log(numero1 === numero2)
console.log(numero1 == '10')

console.log(numero1 !== '10')

const idade1 = 20
const idade2 = 29

console.log(idade1 >= 18 && idade2 >= 18)
console.log(idade1 >= 18 || idade2 >= 18)

console.log(!true)

console.log(!(idade1 >= 18)) // retorna verdadeiro se a pessoa for menor de idade