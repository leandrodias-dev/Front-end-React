// HIGH ORDER FUNCTIONS

// *1. Função que retorna outra função como parâmetros

function welcome(courseName) {
  return studentName => {
    console.log(
      `Olá, ${studentName}! Seja bem-vindo(a) ao curso de ${courseName}!`
    )
  }
}

const displayWelcomeToFrontEndCourse = welcome('Front-end em React')
const displayWelcomeToBackEndCourse = welcome('Back-end em React')

displayWelcomeToFrontEndCourse('Leandro Dias')

console.clear()

// *2. Função que recebe outra função como parâmetro

const somar = (num1, num2) => num1 + num2
const subtrair = (num1, num2) => num1 - num2
const multiplicar = (num1, num2) => num1 * num2
const dividir = (num1, num2) => num1 / num2

// Operação: função que realiza a operação entre dois numeros
// ou seja, ela precisa ser uma função que receba dois numeros
const calcular = (num1, num2, funcaoDaOperacao) => funcaoDaOperacao(num1, num2)

const retorno = calcular(10, 5, somar) // funcções: somar, subtrair, multiplicar, dividir
console.log(retorno)

// calculo que quero fazer é: (num1 * num2) + (2* num1 * num2)

const resultado = calcular(
  10,
  5,
  (nume1, num2) => num1 * num2 + 2 * num1 * num2
)

console.log(resultado)
