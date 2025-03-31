// Utilizar o Camel case no JavaScript

var nomeDoProfessor = 'Leandro Dias' //String: utiliza sempre aspas
var idade = 28 // Number
var altura = 1.77 // Number
var estudando = true // Boolean : verdadeiro ou falso

console.log(nomeDoProfessor, typeof nomeDoProfessor)
console.log(idade)
console.log(altura)
console.log(estudando)

var semConteudo // declarando uma variável sem valor
console.log(semConteudo)

var curso = 'Front-end em React', // nesse caso podemos criar mais de uma variavel na mesma linha
  topico = 'JavaScript Básico I'
console.log(curso, topico)

// ! Não utiliza o var nos seus codigos JavaScript

let notaDoAluno = 10
const mediaDoAluno = 8

notaDoAluno = 9
// ! mediaDoAluno = 5; Não é permitido

console.log(notaDoAluno)
console.log(mediaDoAluno)
